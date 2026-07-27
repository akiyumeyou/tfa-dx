/**
 * 公開用画像の生成スクリプト。元画像は assets/ に置き、public/images/ 配下は全て生成物。
 *
 *   assets/people/<dir>/<slug>.(jpg|jpeg|png|webp)  →  public/images/<dir>/<slug>.webp
 *   assets/site/<name>.(jpg|jpeg|png|webp)          →  public/images/<...>（SITE_IMAGES参照）
 *   assets/site/icon.png                            →  src/app/{favicon.ico,icon.png,apple-icon.png}
 *
 * 実行: npm run images
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PEOPLE_ROOT = path.join(process.cwd(), "assets", "people");
const SITE_ROOT = path.join(process.cwd(), "assets", "site");
const OUTPUT_ROOT = path.join(process.cwd(), "public", "images");
/** favicon類は Next.js のファイル規約（app/favicon.ico・app/icon.png）に従って src/app に出す */
const APP_ROOT = path.join(process.cwd(), "src", "app");
const SOURCE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

/** 講師・メンター写真。カードに縦長（4:5）で入るサイズ。最大240px表示のRetinaでも足りる */
const PORTRAIT_ASPECT = 4 / 5;
const PORTRAIT_WIDTH = 720;
const PORTRAIT_HEIGHT = 900;
const OUTPUT_QUALITY = 82;

/**
 * サイト全体で使うイメージ画像。
 * width/height 両方指定でその比率にトリミング、width のみなら元の比率のまま縮小する。
 */
const SITE_IMAGES = [
  // トップページ 全6回の流れ（オンライン受講の様子）
  { source: "online-lesson.png", output: "online-lesson.webp", width: 1200 },
  // プログラム詳細ページ上部の横長アイキャッチ
  { source: "eyecatch.png", output: "eyecatch.webp", width: 1600 },
  // トップページ最上部の横長アイキャッチ。顔が上寄りなので上から切り出す
  {
    source: "hero-band.png",
    output: "hero-band.webp",
    width: 1600,
    height: 640,
    focusY: 0.15,
  },
  // SNSシェア用。クローラの対応状況を考えて webp は使わず、写真なのでjpgにする
  {
    source: "hero-band.png",
    output: "og/ogp.jpg",
    width: 1200,
    height: 630,
    focusY: 0.15,
  },
  // 「5つの特徴」のアイコン（1枚のイラストから切り出し済みのもの）
  ...[1, 2, 3, 4, 5].map((number) => ({
    source: `features/feature-${number}.png`,
    output: `features/feature-${number}.webp`,
    width: 320,
  })),
  // 申し込みフォームのQR。線がぼけると読み取れないので拡大は nearest（にじませない）
  { source: "qr-apply.png", output: "qr-apply.png", width: 480, sharpEdges: true },
  {
    source: "qr-briefing.png",
    output: "qr-briefing.png",
    width: 480,
    sharpEdges: true,
  },
];

/** 切り出し後のフレーム内で顔をどの高さに置くか（少し上寄りが人物写真として自然） */
const FACE_POSITION_IN_FRAME = 0.38;

/**
 * 写真ごとの顔の位置と寄りの強さ。
 * x,y: 元画像に対する顔の中心（0〜1）／ zoom: 大きいほど顔に寄る（1 = 短辺いっぱい）
 * 未指定の写真は DEFAULT_FOCUS で処理される。
 */
const DEFAULT_FOCUS = { x: 0.5, y: 0.35, zoom: 1 };
const FOCUS = {
  "instructors/fuchigami-junko": { x: 0.48, y: 0.17, zoom: 1.6 },
  "instructors/kubo-chikara": { x: 0.52, y: 0.25, zoom: 1 },
  "instructors/kunimoto-chisato": { x: 0.45, y: 0.19, zoom: 1.55 },
  "instructors/mirai-konno-junko": { x: 0.5, y: 0.28, zoom: 1.1 },
  "instructors/naka-shinji": { x: 0.5, y: 0.3, zoom: 1 },
  "mentors/kataoka-yutaka": { x: 0.5, y: 0.25, zoom: 1 },
  "mentors/naka-shinji": { x: 0.5, y: 0.3, zoom: 1 },
  "mentors/nishimura-eri": { x: 0.42, y: 0.44, zoom: 1.55 },
  "mentors/sato-akiko": { x: 0.49, y: 0.26, zoom: 1.5 },
};

async function findSourceImages(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) return findSourceImages(entryPath);
      return SOURCE_EXTENSIONS.has(path.extname(entry.name).toLowerCase())
        ? [entryPath]
        : [];
    }),
  );
  return files.flat();
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

/** 顔を基準にした切り出し範囲を、画像からはみ出さない位置に収めて返す */
function cropAroundFace(width, height, focus, aspect) {
  const cropWidth = Math.round(Math.min(width, height * aspect) / focus.zoom);
  const cropHeight = Math.round(cropWidth / aspect);
  const left = clamp(
    Math.round(width * focus.x - cropWidth / 2),
    0,
    width - cropWidth,
  );
  const top = clamp(
    Math.round(height * focus.y - cropHeight * FACE_POSITION_IN_FRAME),
    0,
    height - cropHeight,
  );
  return { left, top, width: cropWidth, height: cropHeight };
}

async function report(sourceLabel, outputPath, note) {
  const { size } = await fs.stat(outputPath);
  const { width, height } = await sharp(outputPath).metadata();
  console.log(
    `${sourceLabel} → ${path.relative(OUTPUT_ROOT, outputPath)} ` +
      `(${width}×${height}${note ? `, ${note}` : ""}) ${Math.round(size / 1024)}KB`,
  );
}

/** 講師・メンター写真：顔を基準に縦長へ切り出して同一サイズに揃える */
async function buildPersonPhoto(sourcePath) {
  const relativePath = path.relative(PEOPLE_ROOT, sourcePath);
  const slug = relativePath.replace(/\.[^.]+$/, "");
  const outputPath = path.join(OUTPUT_ROOT, `${slug}.webp`);

  const image = sharp(sourcePath).rotate();
  const { width, height } = await image.metadata();
  const crop = cropAroundFace(
    width,
    height,
    FOCUS[slug] ?? DEFAULT_FOCUS,
    PORTRAIT_ASPECT,
  );

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await image
    .extract(crop)
    .resize(PORTRAIT_WIDTH, PORTRAIT_HEIGHT, { fit: "cover" })
    .webp({ quality: OUTPUT_QUALITY })
    .toFile(outputPath);

  await report(`${relativePath} (${width}×${height})`, outputPath, "縦長4:5");
}

/**
 * イメージ画像：指定サイズに縮小する。
 * height を指定するとその比率に切り出す。focusY（0=上端 / 0.5=中央）で縦の切り出し位置を選べる。
 */
async function buildSiteImage({
  source,
  output,
  width,
  height,
  focusY = 0.5,
  sharpEdges,
}) {
  const sourcePath = path.join(SITE_ROOT, source);
  const outputPath = path.join(OUTPUT_ROOT, output);
  const extension = path.extname(output).toLowerCase();

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  const image = sharp(sourcePath).rotate();

  // 顔が上寄りの写真は中央基準で切ると頭が切れるため、先に位置を指定して切り出す
  if (height) {
    const source = await image.metadata();
    const cropHeight = Math.min(
      source.height,
      Math.round(source.width / (width / height)),
    );
    image.extract({
      left: 0,
      top: Math.round((source.height - cropHeight) * focusY),
      width: source.width,
      height: cropHeight,
    });
  }

  const pipeline = image.resize(width, height ?? null, {
    fit: "cover",
    kernel: sharpEdges ? "nearest" : "lanczos3",
  });

  const encoded =
    extension === ".jpg" || extension === ".jpeg"
      ? pipeline.jpeg({ quality: 85, mozjpeg: true })
      : extension === ".png"
        ? pipeline.png({ compressionLevel: 9, palette: true })
        : pipeline.webp({ quality: OUTPUT_QUALITY });

  await encoded.toFile(outputPath);
  await report(source, outputPath);
}

const TRANSPARENT = { r: 0, g: 0, b: 0, alpha: 0 };
const WHITE = { r: 255, g: 255, b: 255, alpha: 1 };

/** ロゴマークの余白を落として正方形に収めたPNGを作る */
function iconAt(size, { background = TRANSPARENT } = {}) {
  const isOpaque = background.alpha === 1;
  const pipeline = sharp(path.join(SITE_ROOT, "icon.png"))
    .trim({ threshold: 5 })
    .resize(size, size, { fit: "contain", background });

  // 小さく表示される画像なので、減色して軽くする（見た目の差はほぼ出ない）
  return (isOpaque ? pipeline.flatten({ background }) : pipeline)
    .png({ compressionLevel: 9, palette: true, quality: 90 })
    .toBuffer();
}

/**
 * 複数サイズのPNGを1つの .ico にまとめる。
 * ICO は PNG をそのまま格納できるので、6バイトのヘッダ + 16バイト/枚 の索引を付けるだけでよい。
 */
function packIco(pngs) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // 1 = アイコン
  header.writeUInt16LE(pngs.length, 4);

  let offset = 6 + pngs.length * 16;
  const entries = pngs.map(({ size, data }) => {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // 256px は 0 で表す
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2); // パレット数（PNGなので0）
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // カラープレーン
    entry.writeUInt16LE(32, 6); // ビット深度
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += data.length;
    return entry;
  });

  return Buffer.concat([header, ...entries, ...pngs.map((png) => png.data)]);
}

/** ファビコン一式。Next.js が app/ のファイル名を見て link タグを自動生成する */
async function buildAppIcons() {
  const icoSizes = [16, 32, 48];
  const icoPngs = await Promise.all(
    icoSizes.map(async (size) => ({ size, data: await iconAt(size) })),
  );
  const faviconPath = path.join(APP_ROOT, "favicon.ico");
  await fs.writeFile(faviconPath, packIco(icoPngs));
  console.log(
    `icon.png → src/app/favicon.ico (${icoSizes.join("/")}px) ` +
      `${Math.round((await fs.stat(faviconPath)).size / 1024)}KB`,
  );

  // ブラウザタブ・検索結果用。透過のまま出してダークテーマでも浮かないようにする
  await fs.writeFile(path.join(APP_ROOT, "icon.png"), await iconAt(256));

  // iOSのホーム画面用。透過は黒く塗られるため白背景で書き出す
  await fs.writeFile(
    path.join(APP_ROOT, "apple-icon.png"),
    await iconAt(180, { background: WHITE }),
  );

  for (const name of ["icon.png", "apple-icon.png"]) {
    const filePath = path.join(APP_ROOT, name);
    const { width, height } = await sharp(filePath).metadata();
    console.log(
      `icon.png → src/app/${name} (${width}×${height}) ` +
        `${Math.round((await fs.stat(filePath)).size / 1024)}KB`,
    );
  }
}

const TITLE_WIDTH = 1400;
/** 金色の判定。赤・緑が高く青が低い画素を金とみなす */
const isGold = (r, g, b) => r > 150 && g > 110 && b < 130 && r - b > 60;

/**
 * トップページの見出し画像。余白を落としたものと、
 * 金色の文字だけを抜いたマスク（光らせるアニメーション用）の2枚を作る。
 */
async function buildHeroTitle() {
  const sourcePath = path.join(SITE_ROOT, "hero-title.png");
  const { data, info } = await sharp(sourcePath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width: W, height: H, channels: C } = info;

  // 文字の外周（余白）を落とす
  let left = W, right = 0, top = H, bottom = 0;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      if (data[(y * W + x) * C + 3] > 40) {
        if (x < left) left = x;
        if (x > right) right = x;
        if (y < top) top = y;
        if (y > bottom) bottom = y;
      }
    }
  }
  const box = { left, top, width: right - left + 1, height: bottom - top + 1 };

  const titlePath = path.join(OUTPUT_ROOT, "hero-title.webp");
  await sharp(sourcePath)
    .extract(box)
    .resize(TITLE_WIDTH)
    .webp({ quality: 90 })
    .toFile(titlePath);
  await report("hero-title.png", titlePath);

  // マスク：金色の画素だけ不透明にした白い画像
  const mask = Buffer.alloc(box.width * box.height * 4);
  for (let y = 0; y < box.height; y++) {
    for (let x = 0; x < box.width; x++) {
      const src = ((y + box.top) * W + (x + box.left)) * C;
      const dst = (y * box.width + x) * 4;
      const alpha = data[src + 3];
      const gold = alpha > 40 && isGold(data[src], data[src + 1], data[src + 2]);
      mask[dst] = mask[dst + 1] = mask[dst + 2] = 255;
      mask[dst + 3] = gold ? alpha : 0;
    }
  }
  const maskPath = path.join(OUTPUT_ROOT, "hero-title-gold.png");
  await sharp(mask, {
    raw: { width: box.width, height: box.height, channels: 4 },
  })
    .resize(TITLE_WIDTH)
    .png({ compressionLevel: 9 })
    .toFile(maskPath);
  await report("hero-title.png（金色のみ）", maskPath);
}

const personPhotos = await findSourceImages(PEOPLE_ROOT);
await Promise.all([
  ...personPhotos.map(buildPersonPhoto),
  ...SITE_IMAGES.map(buildSiteImage),
  buildAppIcons(),
  buildHeroTitle(),
]);
console.log(
  `\n人物写真 ${personPhotos.length}枚 / イメージ画像 ${SITE_IMAGES.length}枚 / ファビコン一式を生成しました。`,
);
