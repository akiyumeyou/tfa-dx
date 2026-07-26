import type { Metadata } from "next";
import { Avatar } from "@/components/Avatar";
import { CtaButton } from "@/components/CtaButton";
import { SectionHeading } from "@/components/SectionHeading";
import { instructors, mentors, type Person } from "@/data/people";
import { links } from "@/data/site";

export const metadata: Metadata = {
  title: "講師・メンター",
  description:
    "とくしまフューチャーアカデミーDXの講師5名とメンター4名をご紹介します。全員がAIおよびIT活用のプロとして、3ヶ月間の学びを支えます。",
};

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
            登壇者・メンターは全員がAIおよびIT活用のプロ。
            第一線で実践してきた知見を、初心者にも伝わる言葉で届けます。
          </p>
        </div>
      </section>

      {/* 講師 */}
      <section className="mx-auto max-w-[1200px] px-4 py-16 md:px-8 md:py-20">
        <SectionHeading
          eyebrow="INSTRUCTORS"
          title="講師（全5名）"
          description="各回のテーマを担当し、実践のヒントを届けます。"
          align="left"
        />

        <ul className="mt-12 space-y-6">
          {instructors.map((person) => (
            <li
              key={person.id}
              id={person.id}
              className="scroll-mt-24 rounded-card border border-primary-pale bg-white p-6 shadow-sm md:p-8"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <Avatar
                  name={person.name}
                  initials={person.initials}
                  photoBase={person.photoBase}
                  size="lg"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-bold text-ink md:text-2xl">
                    {person.name}
                  </h3>
                  <p className="mt-1 font-semibold text-primary-dark">
                    {person.title}
                  </p>
                  {person.session && (
                    <p className="mt-3 inline-block rounded-card bg-primary-pale px-3 py-1.5 text-sm font-semibold text-primary-dark">
                      担当：{person.session}
                    </p>
                  )}
                  <p className="mt-4 leading-relaxed text-ink-muted">
                    {person.bio}
                  </p>
                  <PersonLinks person={person} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* メンター */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4 md:px-8">
          <SectionHeading
            eyebrow="MENTORS"
            title="メンター（全4名）"
            description="3ヶ月間、グループと個別の両面であなたの伴走をします。"
            align="left"
          />

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mentors.map((person) => (
              <li
                key={person.id}
                className="flex flex-col items-center rounded-card border border-primary-pale bg-canvas p-6 text-center"
              >
                <Avatar
                  name={person.name}
                  initials={person.initials}
                  photoBase={person.photoBase}
                  size="md"
                />
                <h3 className="mt-4 text-lg font-bold text-ink">
                  {person.name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  {person.title}
                </p>
                <PersonLinks person={person} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-4 py-16 text-center md:px-8">
        <p className="text-lg font-bold text-ink md:text-xl">
          この講師陣から、3ヶ月間直接学べます。
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
