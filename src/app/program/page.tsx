import type { Metadata } from "next";
import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";
import { SectionHeading } from "@/components/SectionHeading";
import { sessions } from "@/data/program";
import { links, overview, site } from "@/data/site";

export const metadata: Metadata = {
  title: "プログラム詳細",
  description:
    "全6回のカリキュラム詳細。第1部の講座（隔週水曜19:00〜21:00・オンライン）と第2部のAI学習・交流（21:00〜21:30）の2部制で進みます。",
};

const PARTS = [
  {
    number: "1",
    title: "講座",
    detail: "隔週水曜 19:00〜21:00・オンライン",
    description:
      "各回のテーマを担当講師が解説。ワークを交えながら手を動かして学びます。",
  },
  {
    number: "2",
    title: "AI学習・交流",
    detail: "21:00〜21:30",
    description:
      "その日の学びを共有し、疑問をその場で解消。受講生同士のつながりも生まれます。",
  },
] as const;

export default function ProgramPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary-light/50 to-canvas">
        <div className="mx-auto max-w-[1200px] px-4 py-12 md:px-8 md:py-16">
          <p className="text-xs font-bold tracking-[0.2em] text-primary md:text-sm">
            PROGRAM
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-ink md:text-4xl">
            プログラム詳細
          </h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-ink-muted">
            AIを味方にする方法を学ぶ全6回。マインドセットから実践、そして発表まで、
            3ヶ月で「自分で進める力」が身につくよう設計されています。
          </p>
          <div className="mt-8">
            <CtaButton href={links.apply} size="lg">
              無料で受講申し込み
            </CtaButton>
          </div>
        </div>
      </section>

      {/* 2部制の説明 */}
      <section className="mx-auto max-w-[1200px] px-4 py-16 md:px-8 md:py-20">
        <SectionHeading
          eyebrow="STRUCTURE"
          title="各回は2部制で進みます"
          align="left"
        />
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {PARTS.map((part) => (
            <li
              key={part.number}
              className="rounded-card border border-primary-pale bg-white p-7 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-primary font-bold text-white">
                  {part.number}
                </span>
                <h3 className="text-xl font-bold text-ink">
                  第{part.number}部　{part.title}
                </h3>
              </div>
              <p className="mt-3 font-semibold text-primary-dark">
                {part.detail}
              </p>
              <p className="mt-2 leading-relaxed text-ink-muted">
                {part.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* 各回の詳細 */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4 md:px-8">
          <SectionHeading
            eyebrow="CURRICULUM"
            title="全6回のカリキュラム"
            align="left"
          />

          <ol className="mt-12 space-y-6">
            {sessions.map((session) => (
              <li
                key={session.isoDate}
                className={`rounded-card border bg-canvas p-6 md:p-8 ${
                  session.optional
                    ? "border-dashed border-primary-light"
                    : "border-primary-pale"
                }`}
              >
                <div className="flex flex-col gap-6 md:flex-row">
                  {/* 日付ブロック */}
                  <div className="flex shrink-0 items-center gap-4 md:w-40 md:flex-col md:items-start md:gap-2">
                    <span className="text-sm font-bold text-primary">
                      {session.no ? `第${Number(session.no)}回` : "中間交流会"}
                    </span>
                    <span className="text-2xl font-bold text-ink md:text-3xl">
                      {session.date}
                      <span className="ml-1 text-base font-bold text-ink-muted">
                        （{session.weekday}）
                      </span>
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-card px-3 py-1 text-xs font-bold ${
                          session.venue === "リアル開催"
                            ? "bg-accent text-ink"
                            : "bg-primary-pale text-primary-dark"
                        }`}
                      >
                        {session.venue}
                      </span>
                      <span className="rounded-card bg-white px-3 py-1 text-xs font-bold text-ink-muted">
                        {session.time}
                      </span>
                      {session.optional && (
                        <span className="rounded-card bg-white px-3 py-1 text-xs font-bold text-ink-muted">
                          任意参加
                        </span>
                      )}
                    </div>

                    <h3 className="mt-3 text-xl font-bold leading-snug text-ink md:text-2xl">
                      {session.title}
                    </h3>

                    {session.instructorName && (
                      <p className="mt-2 text-ink-muted">
                        <Link
                          href={`/instructors#${session.instructorId}`}
                          className="font-bold text-primary-dark underline underline-offset-4 hover:text-primary"
                        >
                          {session.instructorName}
                        </Link>
                        <span className="ml-2 text-sm">
                          {session.instructorTitle}
                        </span>
                      </p>
                    )}

                    {session.goal && (
                      <p className="mt-4 rounded-card border-l-4 border-accent bg-white px-4 py-3 text-sm font-semibold text-ink">
                        目標：{session.goal}
                      </p>
                    )}

                    {session.description && (
                      <p className="mt-4 leading-relaxed text-ink-muted">
                        {session.description}
                      </p>
                    )}

                    {session.venue === "リアル開催" && (
                      <p className="mt-4 text-sm font-semibold text-primary-dark">
                        会場：ときわプラザ（アスティ2F）第5会議室
                      </p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 受講について */}
      <section className="mx-auto max-w-[1200px] px-4 py-16 md:px-8 md:py-20">
        <SectionHeading eyebrow="ADMISSION" title="お申込み・受講について" align="left" />

        <dl className="mt-10 max-w-3xl divide-y divide-primary-pale rounded-card border border-primary-pale bg-white">
          {[
            { term: "参加費", detail: overview.fee },
            { term: "定員", detail: overview.capacity },
            { term: "対象", detail: overview.target },
            { term: "修了証", detail: overview.certificate },
            { term: "事前説明会", detail: overview.briefing },
            { term: "お問い合わせ", detail: site.contactEmail },
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

        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-ink-muted">
          {site.disclaimer}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <CtaButton href={links.apply} size="lg">
            無料で受講申し込み
          </CtaButton>
          <CtaButton href="/instructors" variant="secondary" size="lg">
            講師・メンターを見る
          </CtaButton>
        </div>
      </section>
    </>
  );
}
