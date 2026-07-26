import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";
import { FaqAccordion } from "@/components/FaqAccordion";
import { HeroAside } from "@/components/HeroAside";
import { SectionHeading } from "@/components/SectionHeading";
import { audienceTypes, features, sessions } from "@/data/program";
import { links, overview, site } from "@/data/site";

const HERO_HIGHLIGHTS = [
  { label: "参加費", value: "無料" },
  { label: "定員", value: "20名" },
  { label: "開催", value: "オンライン夜19:00〜" },
];

export default function Home() {
  return (
    <>
      {/* ヒーロー */}
      <section className="bg-gradient-to-b from-primary-light/60 via-primary-pale/40 to-canvas">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-14 md:px-8 md:py-24 lg:grid-cols-[1.35fr_1fr] lg:items-center">
          <div>
          <p className="inline-block rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-white">
            徳島県 女性DX人材育成プログラム
          </p>
          <h1 className="mt-6 text-3xl font-bold leading-tight text-ink md:text-5xl md:leading-[1.25]">
            AIを味方につけ、
            <br />
            徳島で
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">輝くDX人材</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-1 z-0 h-3 bg-accent/50 md:bottom-2 md:h-4"
              />
            </span>
            へ
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            {site.subCopy}
            <br className="hidden md:block" />
            専任メンターが3ヶ月間、あなたの隣で伴走します。
          </p>

          <div className="mt-8">
            <CtaButton href={links.apply} size="lg" className="w-full sm:w-auto">
              無料で受講申し込み
            </CtaButton>
          </div>

          <dl className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {HERO_HIGHLIGHTS.map((item) => (
              <div
                key={item.label}
                className="rounded-card border border-white bg-white/80 px-4 py-3 text-center shadow-sm"
              >
                <dt className="text-xs font-bold tracking-wider text-primary">
                  {item.label}
                </dt>
                <dd className="mt-1 text-lg font-bold text-ink">{item.value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 text-sm text-ink-muted">
            参加要件：{overview.target}
          </p>
          </div>

          <HeroAside />
        </div>
      </section>

      {/* こんな方にピッタリ */}
      <section className="mx-auto max-w-[1200px] px-4 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="FOR YOU"
          title="こんな方にピッタリです"
          description="ひとつでも当てはまれば、あなたはもう準備ができています。"
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {audienceTypes.map((type, index) => (
            <li
              key={type.title}
              className="rounded-card border border-primary-pale bg-white p-7 shadow-sm"
            >
              <span className="text-sm font-bold text-primary">
                0{index + 1}
              </span>
              <h3 className="mt-2 text-xl font-bold text-ink">{type.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-muted">
                {type.description}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-10 rounded-card bg-primary-pale px-6 py-5 text-center font-bold text-primary-dark">
          参加要件：{overview.target}
        </p>
      </section>

      {/* 5つの特徴 */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-8">
          <SectionHeading
            eyebrow="FEATURES"
            title="成長を加速させる5つの特徴"
            description="学ぶだけで終わらせない。3ヶ月で「自分で進める力」が身につく設計です。"
          />
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {features.map((feature, index) => (
              <li
                key={feature.title}
                className={`rounded-card border p-7 ${
                  index === 0
                    ? "border-primary bg-primary text-white md:col-span-2"
                    : "border-primary-pale bg-canvas"
                }`}
              >
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${
                    index === 0
                      ? "bg-white text-primary-dark"
                      : "bg-primary-pale text-primary-dark"
                  }`}
                >
                  {feature.number}
                </span>
                <h3
                  className={`mt-3 text-xl font-bold md:text-2xl ${
                    index === 0 ? "text-white" : "text-ink"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`mt-2 leading-relaxed ${
                    index === 0 ? "text-primary-pale" : "text-ink-muted"
                  }`}
                >
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* プログラム概要（全6回の流れ） */}
      <section className="mx-auto max-w-[1200px] px-4 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="PROGRAM"
          title="全6回の流れ"
          description="9月スタート／隔週水曜 19:00〜21:30。第6回のみリアル開催です。"
        />

        {/* モバイル：縦のタイムライン */}
        <ol className="mt-12 space-y-4 md:hidden">
          {sessions.map((session) => (
            <li
              key={session.isoDate}
              className={`relative rounded-card border bg-white p-5 pl-16 shadow-sm ${
                session.optional
                  ? "border-dashed border-primary-light"
                  : "border-primary-pale"
              }`}
            >
              <span
                className={`absolute left-4 top-5 grid h-9 w-9 place-items-center rounded-full text-sm font-bold ${
                  session.no
                    ? "bg-primary text-white"
                    : "bg-primary-pale text-primary-dark"
                }`}
              >
                {session.no ?? "◆"}
              </span>
              <p className="text-sm font-bold text-primary">
                {session.date}（{session.weekday}）
                <span className="ml-2 font-normal text-ink-muted">
                  {session.venue}
                </span>
              </p>
              <h3 className="mt-1 font-bold text-ink">{session.title}</h3>
              {session.instructorName && (
                <p className="mt-1 text-sm text-ink-muted">
                  講師：{session.instructorName}
                </p>
              )}
            </li>
          ))}
        </ol>

        {/* デスクトップ：横並びのステッパー */}
        <ol className="relative mt-14 hidden gap-3 md:grid md:grid-cols-7">
          {/* 円の中心を貫く進行ライン */}
          <span
            aria-hidden="true"
            className="absolute left-[7%] right-[7%] top-8 -z-10 h-0.5 bg-primary-light"
          />
          {sessions.map((session) => (
            <li
              key={session.isoDate}
              className="flex flex-col items-center text-center"
            >
              <span
                className={`grid h-16 w-16 place-items-center rounded-full text-lg font-bold shadow-sm ${
                  session.no
                    ? session.venue === "リアル開催"
                      ? "bg-primary-dark text-white"
                      : "bg-primary text-white"
                    : "border-2 border-dashed border-primary-light bg-white text-primary-dark"
                }`}
              >
                {session.no ?? "◆"}
              </span>
              <p className="mt-3 text-sm font-bold text-ink">{session.date}</p>
              <p className="mt-1 text-sm leading-snug text-ink-muted">
                {session.shortTitle}
              </p>
              {session.instructorName && (
                <p className="mt-1 text-xs text-ink-muted">
                  {session.instructorName}
                </p>
              )}
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col items-center gap-3">
          <p className="text-center text-sm text-ink-muted">
            01〜05はオンライン（19:00〜21:30）／06のみリアル開催（ときわプラザ
            13:30〜15:30）
          </p>
          <CtaButton href="/program" variant="secondary">
            プログラム詳細を見る
          </CtaButton>
        </div>
      </section>

      {/* 迷っているあなたへ */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-8">
          <SectionHeading
            eyebrow="迷っているあなたへ"
            title={
              <>
                「私には無理」——
                <br />
                そう思っていた人ほど、AIで変われる。
              </>
            }
            description="受講前によくいただく不安に、正直にお答えします。"
          />

          <FaqAccordion />

          <div className="mx-auto mt-14 max-w-3xl rounded-card bg-gradient-to-br from-primary to-primary-dark p-8 text-center text-white md:p-12">
            <p className="text-xl font-bold md:text-2xl">
              さあ、新しい扉を開きましょう。
            </p>
            <p className="mt-4 leading-relaxed text-primary-pale">
              一歩を踏み出すのに、特別なスキルは要りません。
              <br className="hidden md:block" />
              必要なのは「変わりたい」という気持ちだけです。
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CtaButton href={links.apply} size="lg">
                無料で受講申し込み
              </CtaButton>
              <Link
                href={links.briefing}
                className="inline-flex min-h-[44px] items-center justify-center rounded-card border-2 border-white px-6 py-3 font-bold text-white hover:bg-white/15"
              >
                まずは説明会だけでも
              </Link>
            </div>
            <p className="mt-5 text-sm text-primary-pale">
              事前説明会：{overview.briefing}
              <br />
              講座内容の説明とご質問タイム。初心者でも大丈夫です。
            </p>
          </div>
        </div>
      </section>

      {/* 開催概要 */}
      <section
        id="overview"
        className="mx-auto max-w-[1200px] px-4 py-16 md:px-8 md:py-24"
      >
        <SectionHeading eyebrow="OVERVIEW" title="開催概要" />

        <dl className="mx-auto mt-12 max-w-3xl divide-y divide-primary-pale rounded-card border border-primary-pale bg-white">
          {[
            { term: "参加費", detail: overview.fee },
            { term: "定員", detail: overview.capacity },
            { term: "対象", detail: overview.target },
            { term: "形式", detail: overview.format },
            {
              term: "日程",
              detail: `2026年9月23日(水)〜12月5日(土) ${overview.time}`,
            },
            { term: "事前説明会", detail: overview.briefing },
            { term: "修了証", detail: overview.certificate },
            { term: "主催", detail: site.organizer },
            {
              term: "受託者",
              detail: `${site.contractor} ${site.contractorRepresentative}`,
            },
          ].map((row) => (
            <div
              key={row.term}
              className="grid gap-1 p-5 sm:grid-cols-[10rem_1fr] sm:gap-4"
            >
              <dt className="font-bold text-primary-dark">{row.term}</dt>
              <dd className="text-ink-muted">{row.detail}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 text-center">
          <CtaButton href={links.apply} size="lg">
            無料で受講申し込み
          </CtaButton>
        </div>
      </section>
    </>
  );
}
