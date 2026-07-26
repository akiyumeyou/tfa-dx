import type { Metadata } from "next";
import { CtaButton } from "@/components/CtaButton";
import { PersonPhoto } from "@/components/PersonPhoto";
import { SectionHeading } from "@/components/SectionHeading";
import { instructors, mentors, type Person } from "@/data/people";
import { links } from "@/data/site";

export const metadata: Metadata = {
  title: "講師・メンター",
  description:
    "とくしまフューチャーアカデミーDXの講師5名とメンター4名をご紹介します。最前線のDX・AI実践者と、身近に相談できる地元メンターによる伴走支援体制です。",
};

function TokushimaBadge() {
  return (
    <span className="inline-block rounded-full bg-accent/25 px-3 py-1 text-xs font-bold text-ink">
      徳島県在住
    </span>
  );
}

function PersonLinks({ person }: { person: Person }) {
  if (person.links.length === 0) return null;

  return (
    <ul className="mt-4 flex flex-wrap gap-3">
      {person.links.map((link) => (
        <li key={link.url}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center rounded-card border border-primary-pale px-4 text-sm font-semibold text-primary-dark hover:bg-primary-pale"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function InstructorCard({ person }: { person: Person }) {
  return (
    <li
      id={person.id}
      className="scroll-mt-24 rounded-card border border-primary-pale bg-white p-6 shadow-sm md:p-8"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
        <PersonPhoto
          name={person.name}
          initials={person.initials}
          photoBase={person.photoBase}
          size="lg"
        />

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            {person.session && (
              <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                {person.session.slice(0, person.session.indexOf("「"))}担当
              </span>
            )}
            {person.tokushimaBased && <TokushimaBadge />}
          </div>

          <h3 className="mt-3 text-2xl font-bold text-ink">{person.name}</h3>
          {person.titles.map((title) => (
            <p key={title} className="mt-1 font-semibold text-primary-dark">
              {title}
            </p>
          ))}

          {person.session && (
            <p className="mt-4 rounded-card bg-primary-pale px-4 py-3 text-sm font-bold text-primary-dark">
              担当：{person.session}
            </p>
          )}

          <p className="mt-4 leading-relaxed text-ink-muted">{person.bio}</p>
          <PersonLinks person={person} />
        </div>
      </div>
    </li>
  );
}

function MentorCard({ person }: { person: Person }) {
  return (
    <li
      id={person.id}
      className="scroll-mt-24 rounded-card border border-primary-pale bg-white p-6 shadow-sm"
    >
      <div className="flex flex-col gap-5 sm:flex-row">
        <PersonPhoto
          name={person.name}
          initials={person.initials}
          photoBase={person.photoBase}
          size="md"
        />

        <div className="min-w-0 flex-1">
          <h3 className="text-xl font-bold text-ink">{person.name}</h3>
          {person.titles.map((title) => (
            <p key={title} className="mt-1 text-sm font-semibold text-primary-dark">
              {title}
            </p>
          ))}
          {person.tokushimaBased && (
            <p className="mt-3">
              <TokushimaBadge />
            </p>
          )}
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            {person.bio}
          </p>
          <PersonLinks person={person} />
        </div>
      </div>
    </li>
  );
}

export default function InstructorsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary-light/50 to-canvas">
        <div className="mx-auto max-w-[1200px] px-4 py-12 md:px-8 md:py-16">
          <p className="text-xs font-bold tracking-[0.2em] text-primary md:text-sm">
            INSTRUCTORS & MENTORS
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-ink md:text-4xl">
            講師・メンター紹介
          </h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-ink-muted">
            最前線のDX・AI実践者と、身近に相談できる地元メンターによる伴走支援体制。
            第一線で実践してきた知見を、初心者にも伝わる言葉で届けます。
          </p>
        </div>
      </section>

      {/* 講師 */}
      <section className="mx-auto max-w-[1200px] px-4 py-16 md:px-8 md:py-20">
        <SectionHeading
          eyebrow="INSTRUCTORS"
          title="登壇者（全5名）"
          description="各回のテーマを担当し、実践のヒントを届けます。"
          align="left"
        />

        <ul className="mt-12 space-y-6">
          {instructors.map((person) => (
            <InstructorCard key={person.id} person={person} />
          ))}
        </ul>
      </section>

      {/* メンター */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4 md:px-8">
          <SectionHeading
            eyebrow="MENTORS"
            title="伴走メンター（全4名・全員徳島県在住）"
            description="およそ3ヶ月間、グループと個別の両面であなたの伴走をします。"
            align="left"
          />

          <ul className="mt-12 grid gap-6 lg:grid-cols-2">
            {mentors.map((person) => (
              <MentorCard key={person.id} person={person} />
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-4 py-16 text-center md:px-8">
        <p className="text-lg font-bold text-ink md:text-xl">
          この講師陣から、およそ3ヶ月間直接学べます。
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CtaButton href={links.apply} size="lg">
            無料で受講申し込み
          </CtaButton>
          <CtaButton href="/program" variant="secondary" size="lg">
            プログラム詳細を見る
          </CtaButton>
        </div>
      </section>
    </>
  );
}
