import { briefingVideoId, links, overview } from "@/data/site";

/**
 * controls=0 と autoplay+mute を組み合わせて、YouTube 標準の大きな赤い再生ボタンを出さずに
 * 動くサムネイルとして見せる（音声つきで見たい人は下のリンクからYouTubeへ）。
 * loop=1&playlist= は限定公開動画だと疑似プレイリストを作れず再生エラーになるため使わない。
 */
const briefingVideoSrc =
  `https://www.youtube.com/embed/${briefingVideoId}` +
  "?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1";

/**
 * ヒーロー右カラム。
 * ページ最上部にアイキャッチ帯を置いたため、ここは説明会の申込カードだけにしている
 * （同系統の写真が縦に2枚並ぶのを避けるため）。
 */
export function HeroAside() {
  return (
    <div className="space-y-4">
      <div className="rounded-card border border-primary-pale bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
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
          <div className="w-full shrink-0 overflow-hidden rounded-card bg-ink md:w-44">
            <iframe
              src={briefingVideoSrc}
              title="事前説明会の紹介動画"
              allow="autoplay; encrypted-media; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
              className="aspect-video w-full border-0"
            />
          </div>
        </div>
        <a
          href={`https://youtu.be/${briefingVideoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 block text-right text-xs text-ink-muted underline hover:text-primary-dark"
        >
          音声つきでこの動画を見る
        </a>
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
