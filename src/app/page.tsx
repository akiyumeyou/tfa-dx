import Image from "next/image";
import { CtaButton } from "@/components/CtaButton";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FormQrPanel } from "@/components/FormQrPanel";
import { HeroAside } from "@/components/HeroAside";
import { PeopleMarquee, type PersonCard } from "@/components/PeopleMarquee";
import { SectionHeading } from "@/components/SectionHeading";
import { instructors, mentors, type Person } from "@/data/people";
import { audienceTypes, features, sessions } from "@/data/program";
import { links, overview, site } from "@/data/site";
import { resolvePhoto } from "@/lib/photo";

/** 写真パスの解決は fs を使うのでサーバー側で済ませてから渡す */
function toPersonCards(people: Person[]): PersonCard[] {
  return people.map((person) => ({
    id: person.id,
    name: person.name,
    initials: person.initials,
    titles: person.titles,
    bio: person.bio,
    session: person.session,
    tokushimaBased: person.tokushimaBased,
    photoSrc: resolvePhoto(person.photoBase),
  }));
}

const HERO_HIGHLIGHTS = [
  { label: "参加費", value: "無料" },
  { label: "定員", value: "20名" },
  { label: "開催", value: "オンライン夜19:00〜" },
];

export default function Home() {
  return (
    <>
      {/* アイキャッチ（全幅の帯＋見出し） */}
      <section className="relative">
        <Image
          src="/images/hero-band.webp"
          alt=""
          width={1600}
          height={640}
          priority
          sizes="100vw"
          className="h-auto max-h-[560px] min-h-[260px] w-full object-cover object-[62%_35%] md:object-[72%_35%]"
        />

        {/* 見出しを読みやすくするための薄い白 */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/25 to-transparent sm:from-white/55 sm:via-white/5"
        />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-[1200px] px-4 md:px-8">
            <h1 className="relative w-[88%] max-w-[620px] sm:w-[76%]">
              <span className="sr-only">
                AIを味方につけ、徳島で輝くDX人材へ
              </span>
              <Image
                src="/images/hero-title.webp"
                alt=""
                aria-hidden="true"
                width={1400}
                height={332}
                priority
                sizes="(min-width: 768px) 620px, 92vw"
                className="w-full"
              />
              {/* 「輝く」の金色部分だけを流れる光でキラッとさせる */}
              <span aria-hidden="true" className="gold-shine absolute inset-0" />
            </h1>
          </div>
        </div>
      </section>

      {/* ヒーロー */}
      <section className="bg-gradient-to-b from-primary-light/60 via-primary-pale/40 to-canvas">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-14 md:px-8 md:py-24 lg:grid-cols-[1.35fr_1fr] lg:items-center">
          <div>
          <p className="inline-block rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-white">
            徳島県 女性DX人材育成プログラム
          </p>
          {/* 見出しはページ最上部のアイキャッチ側に置いているため、ここでは繰り返さない */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink md:text-xl">
            {site.subCopy}
            <br className="hidden md:block" />
            専任メンターがおよそ3ヶ月間、あなたの隣で伴走します。
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
            description="学ぶだけで終わらせない。およそ3ヶ月で「自分で進める力」が身につく設計です。"
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
                <div className="flex items-start gap-5">
                  <Image
                    src={feature.icon}
                    alt=""
                    width={320}
                    height={320}
                    sizes="96px"
                    className="h-20 w-20 shrink-0 rounded-card bg-white object-contain md:h-24 md:w-24"
                  />

                  <div className="min-w-0">
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
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 講師・メンター（横に流れるカード） */}
      <section className="overflow-hidden py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-8">
          <SectionHeading
            eyebrow="INSTRUCTORS & MENTORS"
            title="この人たちから学べます"
            description="最前線のDX・AI実践者と、身近に相談できる地元メンターによる伴走支援体制。カードをタップすると詳しいプロフィールが開きます。"
          />
        </div>

        <div className="mt-12 space-y-10">
          <div>
            <div className="mx-auto mb-4 flex max-w-[1200px] flex-wrap items-center gap-3 px-4 md:px-8">
              <h3 className="text-lg font-bold text-ink md:text-xl">登壇者</h3>
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                全{instructors.length}名
              </span>
              <span className="text-sm text-ink-muted">
                各回のテーマを担当します
              </span>
            </div>
            <PeopleMarquee people={toPersonCards(instructors)} />
          </div>

          <div>
            <div className="mx-auto mb-4 flex max-w-[1200px] flex-wrap items-center gap-3 px-4 md:px-8">
              <h3 className="text-lg font-bold text-ink md:text-xl">
                伴走メンター
              </h3>
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                全{mentors.length}名
              </span>
              <span className="rounded-full bg-accent/25 px-3 py-1 text-xs font-bold text-ink">
                全員徳島県在住
              </span>
              <span className="text-sm text-ink-muted">
                およそ3ヶ月、個別に伴走します
              </span>
            </div>
            <PeopleMarquee people={toPersonCards(mentors)} direction="right" />
          </div>
        </div>

        <div className="mt-12 text-center">
          <CtaButton href="/instructors" variant="secondary">
            講師・メンターを詳しく見る
          </CtaButton>
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

        <div className="mt-12 grid items-center gap-8 rounded-card border border-primary-pale bg-white p-6 shadow-sm md:grid-cols-2 md:p-8">
          <Image
            src="/images/online-lesson.webp"
            alt="自宅のパソコンからオンライン講座を受けている様子"
            width={1200}
            height={759}
            sizes="(min-width: 768px) 45vw, 100vw"
            className="w-full rounded-card object-cover"
          />
          <div>
            <h3 className="text-xl font-bold text-ink md:text-2xl">
              自宅から、夜の2時間半。
            </h3>
            <p className="mt-4 leading-relaxed text-ink-muted">
              01〜05はオンライン開催（19:00〜21:30）。パソコンとネット環境があれば、
              お住まいの場所を問わず参加できます。06のみリアル開催（ときわプラザ
              13:30〜15:30）です。
            </p>
            <div className="mt-6">
              <CtaButton href="/program" variant="secondary">
                プログラム詳細を見る
              </CtaButton>
            </div>
          </div>
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
              <a
                href={links.briefing}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center rounded-card border-2 border-white px-6 py-3 font-bold text-white hover:bg-white/15"
              >
                まずは説明会だけでも
              </a>
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
            { term: "全日程の終了", detail: overview.completion },
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

        <p className="mx-auto mt-8 max-w-3xl text-sm leading-relaxed text-ink-muted">
          {site.disclaimer}
        </p>

        <FormQrPanel className="mx-auto mt-12 max-w-3xl" />

        <div className="mt-8 text-center">
          <CtaButton href={links.apply} size="lg">
            無料で受講申し込み
          </CtaButton>
        </div>
      </section>
    </>
  );
}
