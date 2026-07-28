import Image from "next/image";
import { links, overview } from "@/data/site";

/**
 * ヒーロー右カラム。
 * ページ最上部にアイキャッチ帯を置いたため、ここは説明会の申込カードだけにしている
 * （同系統の写真が縦に2枚並ぶのを避けるため）。
 */
export function HeroAside() {
  return (
    <div className="space-y-4">
      <div className="rounded-card border border-primary-pale bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="inline-block rounded-full bg-primary-pale px-3 py-1 text-xs font-bold text-primary-dark">
              まずは説明会だけでも
            </p>
            <p className="mt-4 text-2xl font-bold text-ink">
              事前説明会 9/2
              <span className="ml-1 text-base font-bold text-ink-muted">
                （水）
              </span>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              {overview.briefing.replace("2026年9月2日(水) ", "")}
              <br />
              講座内容の説明とご質問タイム。
              <br />
              初心者でも大丈夫です。
            </p>
          </div>
          <Image
            src="/images/audience/audience-1.webp"
            alt=""
            width={320}
            height={306}
            sizes="96px"
            className="h-20 w-20 shrink-0 object-contain md:h-24 md:w-24"
          />
        </div>
        <a
          href={links.briefing}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex min-h-[44px] w-full items-center justify-center rounded-card border-2 border-primary bg-white px-4 py-3 font-bold text-primary-dark hover:bg-primary-pale"
        >
          説明会に申し込む
        </a>
      </div>
    </div>
  );
}
