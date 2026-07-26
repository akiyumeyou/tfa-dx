import fs from "node:fs";
import path from "node:path";

const EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

/**
 * public/images 配下に写真が置かれていればその公開パスを返す。
 * 未設置ならイニシャル表示にフォールバックさせるため null を返す。
 */
export function resolvePhoto(photoBase: string): string | null {
  for (const extension of EXTENSIONS) {
    const relativePath = `images/${photoBase}${extension}`;
    if (fs.existsSync(path.join(process.cwd(), "public", relativePath))) {
      return `/${relativePath}`;
    }
  }
  return null;
}
