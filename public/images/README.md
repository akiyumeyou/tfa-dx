# 画像ファイルの置き場所

**このフォルダの画像はすべて `assets/` からの自動生成物です。直接編集・追加しないでください。**
元画像を差し替えたら `npm run images`（`scripts/build-images.mjs`）を実行します。

## イメージ画像

| 生成物 | 元画像 | 使われている場所 |
| --- | --- | --- |
| `hero-band.webp`（1600×640） | `assets/site/hero-band.png` | **トップページ最上部の横長アイキャッチ** |
| `hero-title.webp`（1400×332） | `assets/site/hero-title.png` | アイキャッチに重ねる見出し（透過PNG） |
| `hero-title-gold.png`（1400×332） | 同上（自動抽出） | 金色部分だけのマスク。光るアニメーション用 |
| `og/ogp.jpg`（1200×630） | `assets/site/hero-band.png` | SNSシェア時のサムネイル（OGP） |
| `eyecatch.webp`（1600×554） | `assets/site/eyecatch.png` | プログラム詳細ページ上部の横長バナー |
| `online-lesson.webp`（1200×759） | `assets/site/online-lesson.png` | トップページ「全6回の流れ」 |
| `features/feature-1〜5.webp`（320×320） | `assets/site/features/` | トップページ「5つの特徴」のアイコン |
| `qr-apply.png` / `qr-briefing.png`（480×480） | `assets/site/qr-*.png` | 申し込みフォームのQRコード |

出力サイズや切り出し比率は `scripts/build-images.mjs` の `SITE_IMAGES` で決めています。
別の画像に差し替えるときは `assets/site/` の同名ファイルを置き換えてください。

**横長バナーの切り出し位置**：`focusY` で縦の切り出し位置を指定できます（`0` = 上端、`0.5` = 中央）。
顔が上寄りの写真を中央基準で切ると頭が切れるため、`hero-band.png` は `focusY: 0.15` にしています。
新しい写真に差し替えて頭や顎が切れる場合は、この値を調整してください。

見出し画像は「金色の画素」を自動判別してマスクを生成しています（`buildHeroTitle`）。
金色以外の色を光らせたい場合は `scripts/build-images.mjs` の `isGold` を調整してください。

画像を作り直すときのプロンプトは `docs/design/eyecatch-prompt.md` にあります。
なお `assets/site/hero.png`（ヒーロー右カラム用だった学習イメージ）は現在未使用です。

## 講師・メンターの写真（`instructors/` `mentors/`）

元写真は縦横比も解像度もバラバラなので、`assets/people/` に置いた元写真から
公開用に **正方形 800×800px の webp** を生成して使います。

```
assets/people/instructors/kunimoto-chisato.jpg   ← 元写真をここに置く（jpg/jpeg/png/webp）
        ↓  npm run images
public/images/instructors/kunimoto-chisato.webp  ← 公開用（正方形800px・自動生成）
```

### 写真を追加・差し替えする手順

1. 元写真を `assets/people/` の下に、下表のファイル名（拡張子は元のままでOK）で置く
2. `npm run images` を実行する
3. 顔の切れ方が気になる場合は `scripts/build-images.mjs` の `FOCUS` を調整して再実行する
   - `x` `y`: 元写真の中で顔の中心がある位置（左上を0、右下を1とした割合）
   - `zoom`: 大きいほど顔に寄る（`1` = 短辺いっぱい）

写真がない人は自動でイニシャル入りの円が表示されます。

### ファイル名一覧

| ファイル名（拡張子を除く） | 対象 |
| --- | --- |
| `instructors/kunimoto-chisato` | 國本 知里 |
| `instructors/kubo-chikara` | 久保 主税 |
| `instructors/mirai-konno-junko` | mirai（今野 純子） |
| `instructors/naka-shinji` | 那珂 慎二 |
| `instructors/fuchigami-junko` | 淵上 淳子 |
| `mentors/kataoka-yutaka` | 片岡 豊 |
| `mentors/sato-akiko` | 佐藤 晃子 |
| `mentors/naka-shinji` | 那珂 慎二 |
| `mentors/nishimura-eri` | 西村 えり |

`src/data/people.ts` の `photoBase` と同じパスです。名前を変えるときは両方合わせてください。

### 元写真の推奨仕様

- 短辺 600px 以上（正方形でなくてOK。切り出しはスクリプトが行います）
- 頭の上に少し余白がある写真だときれいに収まります
- 形式は jpg / jpeg / png / webp

## ファビコン（`src/app/` に出力）

`assets/site/icon.png`（ロゴマーク・正方形の透過PNG推奨）から3つ生成します。
Next.js のファイル規約なので、置くだけで `<link rel="icon">` が自動で入ります。

| 生成物 | 用途 |
| --- | --- |
| `src/app/favicon.ico`（16/32/48px） | ブラウザのタブ・ブックマーク |
| `src/app/icon.png`（256px・透過） | 高解像度ディスプレイ、検索結果 |
| `src/app/apple-icon.png`（180px・白背景） | iOSのホーム画面（透過は黒く出るため白で塗る） |

## OGP画像（`og/ogp.jpg`）

`assets/site/eyecatch.png` から 1200×630px に切り出して生成しています。
参照先は `src/app/layout.tsx` の `openGraph.images`。差し替えたら
X（Twitter）やFacebookのキャッシュが残るため、各社のデバッガーで再取得してください。
