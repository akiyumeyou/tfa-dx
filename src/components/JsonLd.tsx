/**
 * 構造化データ（JSON-LD）を出力する。
 * `<` をエスケープするのは、データ内の文字列から script タグを閉じられないようにするため。
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
