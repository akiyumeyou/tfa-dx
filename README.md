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

`public/images/instructors/` と `public/images/mentors/` に置きます。
ファイル名の一覧は `public/images/README.md` を参照してください。
写真がない人は自動でイニシャル入りの円が表示されます。

### 3. ヒーロー画像

`public/images/hero.jpg` を置くと、トップページ右側に表示されます。

### 4. OGP画像

`public/images/og/ogp.png`（1200×630px）を置くとSNSシェア時のサムネイルになります。

### 5. 公開URL

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
