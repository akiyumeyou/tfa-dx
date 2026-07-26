# 画像ファイルの置き場所

写真を追加すると自動的にプレースホルダー（イニシャル円）から差し替わります。
ファイル名は `src/data/people.ts` の `photo` に書かれているパスと一致させてください。

## 講師（`instructors/`）

| ファイル名 | 対象 |
| --- | --- |
| `kunimoto-chisato.jpg` | 國本 知里 |
| `kubo-chikara.jpg` | 久保 主税 |
| `mirai-konno-junko.jpg` | mirai（今野 純子） |
| `naka-shinji.jpg` | 那珂 慎二 |
| `fuchigami-junko.jpg` | 淵上 淳子 |

## メンター（`mentors/`）

| ファイル名 | 対象 |
| --- | --- |
| `kataoka-yutaka.jpg` | 片岡 豊 |
| `sato-akiko.jpg` | 佐藤 晃子 |
| `naka-shinji.jpg` | 那珂 慎二 |
| `nishimura-eri.jpg` | 西村 えり |

## 推奨仕様

- 正方形（1:1）、600×600px 以上
- 顔が中央に来るようにトリミング（円形に切り抜いて表示されます）
- 形式は jpg / png / webp

## OGP画像（`og/`）

`ogp.png` を置くと SNS シェア時のサムネイルになります（推奨 1200×630px）。
未設置の場合はテキストのみのカードが表示されます。
