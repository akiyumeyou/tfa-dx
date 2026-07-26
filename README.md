# とくしまフューチャーアカデミーDX（TFA-DX）LP

徳島県主催の女性向けDX人材育成プログラムのランディングページです。

## 技術構成

- Next.js 16（App Router）/ TypeScript
- Tailwind CSS v4（設定は `src/app/globals.css` の `@theme`）
- デプロイ先：Vercel

## 開発

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # 本番ビルド
npm run lint
```

## ページ構成

| パス | 内容 |
| --- | --- |
| `/` | トップ（LP） |
| `/program` | プログラム詳細（全6回のカリキュラム） |
| `/instructors` | 講師・メンター紹介 |

## あとで差し替えるところ

### 1. 申込フォームのURL

`src/data/site.ts` の `links` を書き換えます。ここ1箇所で全ページのボタンが切り替わります。

```ts
export const links = {
  apply: "#apply",       // ← 受講申込フォームのURL
  briefing: "#briefing", // ← 事前説明会の申込フォームのURL
};
```

### 2. 講師・メンターの写真

元写真を `assets/people/instructors/` `assets/people/mentors/` に置き、`npm run images` を実行します。
公開用の正方形800px webp が `public/images/` に生成され、円形アバターで表示されます。
ファイル名の一覧と調整方法は `public/images/README.md` を参照してください。
写真がない人は自動でイニシャル入りの円が表示されます。

### 3. イメージ画像（ヒーロー・アイキャッチ・OGP）

`assets/site/` の3枚を差し替えて `npm run images` を実行します。

| 元画像 | 使われている場所 |
| --- | --- |
| `assets/site/hero.png` | トップページ ヒーロー右カラム |
| `assets/site/online-lesson.png` | トップページ「全6回の流れ」 |
| `assets/site/eyecatch.png` | プログラム詳細ページ上部のバナー＋SNSシェア画像（OGP） |
| `assets/site/icon.png` | ファビコン（タブのアイコン・iOSホーム画面アイコン） |

### 4. 公開URL

`src/data/site.ts` の `url` を実際のドメインに変更してください（OGPの絶対URL生成に使用）。

## テキストの編集場所

| 内容 | ファイル |
| --- | --- |
| キャッチコピー・主催者情報・開催概要 | `src/data/site.ts` |
| 全6回の日程・タイトル・講師・目標 | `src/data/program.ts` |
| 5つの特徴・こんな方にピッタリ・Q&A | `src/data/program.ts` |
| 講師・メンターのプロフィール | `src/data/people.ts` |

## デザイン方針

- Primary `#7B68AE` / Accent `#E8A87C` / Text `#2D2D3F`（チラシ準拠）
- CTAボタンはアクセント色の背景に濃紺の文字。白文字だとコントラスト比が1.9:1でWCAG AAに届かないため
- 本文16px以上、インタラクティブ要素は最低44px、モバイルファースト
