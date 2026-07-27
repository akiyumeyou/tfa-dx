import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";
import { FormQrPanel } from "@/components/FormQrPanel";
import { SectionHeading } from "@/components/SectionHeading";
import { instructors } from "@/data/people";
import {
  aiLiteracy,
  deliverable,
  dxDefinition,
  dxSkills,
  followUp,
  sessionParts,
  sessions,
} from "@/data/program";
import { links, overview, site } from "@/data/site";

export const metadata: Metadata = {
  title: "プログラム詳細",
  description:
    "全6回のカリキュラム詳細。第1部の講座（隔週水曜19:00〜21:00・オンライン）と第2部のAI学習・交流（21:00〜21:30）の2部制で進みます。およそ3ヶ月後・2月末のアンケート回答をもって全日程終了です。",
};

/** 肩書は people.ts を正とし、講師データの重複を持たない */
const instructorById = new Map(
  instructors.map((instructor) => [instructor.id, instructor]),
);

export default function ProgramPage() {
  return (
    <>
      <Image
        src="/images/eyecatch.webp"
        alt="AIを活用して学ぶ受講者のイメージ"
        width={1600}
        height={554}
        priority
        sizes="100vw"
        className="h-36 w-full object-cover md:h-56 lg:h-72"
      />

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
            およそ3ヶ月で「自分で進める力」が身につくよう設計されています。
          </p>
          <div className="mt-8">
            <CtaButton href={links.apply} size="lg">
              無料で受講申し込み
            </CtaButton>
          </div>
        </div>
      </section>

      {/* なぜこの流れなのか */}
      <section className="mx-auto max-w-[1200px] px-4 py-16 md:px-8 md:py-20">
        <SectionHeading
          eyebrow="WHY"
          title="なぜこの流れなのか"
          description="DX人材に必要な3つの力と、その土台となるAIリテラシーを積み上げる構成です。"
          align="left"
        />

        <p className="mt-10 rounded-card bg-primary-dark px-6 py-5 text-center text-lg font-bold leading-relaxed text-white md:text-xl">
          {dxDefinition}
        </p>

        <ul className="mt-6 grid gap-6 md:grid-cols-3">
          {dxSkills.map((skill) => (
            <li
              key={skill.title}
              className="rounded-card border-t-4 border-primary bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-primary-dark md:text-xl">
                {skill.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {skill.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 leading-relaxed text-ink-muted"
                  >
                    <span aria-hidden="true" className="text-primary">
                      ・
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-card bg-accent/25 px-6 py-5 text-center">
          <h3 className="text-lg font-bold text-ink md:text-xl">
            {aiLiteracy.title}
          </h3>
          <p className="mt-2 leading-relaxed text-ink-muted">
            {aiLiteracy.description}
          </p>
        </div>
      </section>

      {/* 2部制の説明 */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4 md:px-8">
          <SectionHeading
            eyebrow="STRUCTURE"
            title="各回は2部制で進みます"
            align="left"
          />
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {sessionParts.map((part) => (
              <li
                key={part.number}
                className="rounded-card border border-primary-pale bg-canvas p-7"
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

          <p className="mt-6 rounded-card border border-dashed border-primary-light px-6 py-4 text-sm leading-relaxed text-ink-muted">
            講座後の課題として、初心者向けの学習AI動画（仮）をお渡しします。
            ※学習するAIツールは変更する可能性があります。
          </p>
        </div>
      </section>

      {/* 各回の詳細 */}
      <section className="mx-auto max-w-[1200px] px-4 py-16 md:px-8 md:py-20">
        <SectionHeading
          eyebrow="CURRICULUM"
          title="全6回のカリキュラム"
          align="left"
        />

        <ol className="mt-12 space-y-6">
          {sessions.map((session) => {
            const instructor = session.instructorId
              ? instructorById.get(session.instructorId)
              : undefined;

            return (
              <li
                key={session.isoDate}
                className={`rounded-card border bg-white p-6 shadow-sm md:p-8 ${
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
                      <span className="rounded-card bg-canvas px-3 py-1 text-xs font-bold text-ink-muted">
                        {session.time}
                      </span>
                      {session.optional && (
                        <span className="rounded-card bg-canvas px-3 py-1 text-xs font-bold text-ink-muted">
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
                        {instructor && (
                          <span className="ml-2 text-sm">
                            {instructor.titles[0]}
                          </span>
                        )}
                      </p>
                    )}

                    {session.goal && (
                      <p className="mt-4 rounded-card border-l-4 border-accent bg-canvas px-4 py-3 text-sm font-semibold text-ink">
                        目標：{session.goal}
                      </p>
                    )}

                    {session.description && (
                      <p className="mt-4 leading-relaxed text-ink-muted">
                        {session.description}
                      </p>
                    )}

                    {(session.assignment || session.video) && (
                      <div className="mt-5 flex flex-wrap gap-3 rounded-card bg-primary-pale/60 px-4 py-3">
                        {session.assignment && (
                          <p className="text-sm font-bold text-primary-dark">
                            課題：{session.assignment}
                          </p>
                        )}
                        {session.video && (
                          <p className="text-sm font-bold text-primary-dark">
                            学習動画：{session.video}
                          </p>
                        )}
                      </div>
                    )}

                    {session.venue === "リアル開催" && (
                      <p className="mt-4 text-sm font-semibold text-primary-dark">
                        会場：ときわプラザ（アスティ2F）第5会議室
                      </p>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      {/* 成果物とアンケート */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4 md:px-8">
          <SectionHeading
            eyebrow="OUTPUT"
            title="つくるもの、そして修了まで"
            align="left"
          />

          <div className="mt-10 rounded-card bg-primary-pale p-6 md:p-8">
            <p className="text-sm font-bold text-primary">成果物（受講者全員）</p>
            <p className="mt-3 text-2xl font-bold text-ink md:text-3xl">
              {deliverable.theme}
            </p>
            <p className="mt-2 font-semibold text-primary-dark">
              {deliverable.note}
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              {deliverable.description}
            </p>
          </div>

          <div className="mt-6 rounded-card border-2 border-accent bg-canvas p-6 md:p-8">
            <p className="text-sm font-bold text-accent-strong">
              全6回のあと
            </p>
            <p className="mt-3 text-xl font-bold text-ink md:text-2xl">
              {followUp.title}
            </p>
            <p className="mt-3 leading-relaxed text-ink-muted">
              {followUp.description}
            </p>
          </div>
        </div>
      </section>

      {/* 受講について */}
      <section className="mx-auto max-w-[1200px] px-4 py-16 md:px-8 md:py-20">
        <SectionHeading
          eyebrow="ADMISSION"
          title="お申込み・受講について"
          align="left"
        />

        <dl className="mt-10 max-w-3xl divide-y divide-primary-pale rounded-card border border-primary-pale bg-white">
          {[
            { term: "参加費", detail: overview.fee },
            { term: "定員", detail: overview.capacity },
            { term: "対象", detail: overview.target },
            { term: "修了証", detail: overview.certificate },
            { term: "全日程の終了", detail: overview.completion },
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

        <FormQrPanel className="mt-10 max-w-3xl" />

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
