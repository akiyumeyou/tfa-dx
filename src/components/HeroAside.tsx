import Image from "next/image";
import Link from "next/link";
import { resolvePhoto } from "@/lib/photo";
import { links, overview } from "@/data/site";

/**
 * ヒーロー右カラム。public/images/hero.* を置くと写真が上に入る。
 */
export function HeroAside() {
  const heroPhoto = resolvePhoto("hero");

  return (
    <div className="space-y-4">
      {heroPhoto && (
        <Image
          src={heroPhoto}
          alt="受講している女性の様子"
          width={800}
          height={1000}
          priority
          className="w-full rounded-card object-cover shadow-sm"
        />
      )}

      <div className="rounded-card border border-primary-pale bg-white p-6 shadow-sm">
        <p className="inline-block rounded-full bg-primary-pale px-3 py-1 text-xs font-bold text-primary-dark">
          まずは説明会だけでも
        </p>
        <p className="mt-4 text-2xl font-bold text-ink">
          事前説明会 9/2
          <span className="ml-1 text-base font-bold text-ink-muted">（水）</span>
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          {overview.briefing.replace("2026年9月2日(水) ", "")}
          <br />
          講座内容の説明とご質問タイム。
          <br />
          初心者でも大丈夫です。
        </p>
        <Link
          href={links.briefing}
          className="mt-5 inline-flex min-h-[44px] w-full items-center justify-center rounded-card border-2 border-primary bg-white px-4 py-3 font-bold text-primary-dark hover:bg-primary-pale"
        >
          説明会に申し込む
        </Link>
      </div>
    </div>
  );
}
