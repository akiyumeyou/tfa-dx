import Link from "next/link";
import { links, site } from "@/data/site";
import { ApplyDeadline } from "./ApplyDeadline";
import { CtaButton } from "./CtaButton";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary-dark text-white">
      <div className="mx-auto max-w-[1200px] px-4 py-14 md:px-8">
        <div className="rounded-card bg-white/10 p-6 text-center md:p-8">
          <p className="text-lg font-bold md:text-xl">
            さあ、新しい扉を開きましょう。
          </p>
          <p className="mt-2 text-sm text-primary-light md:text-base">
            参加費無料・初心者OK・オンライン夜開催
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CtaButton href={links.apply} size="lg">
              無料で受講申し込み
            </CtaButton>
            <a
              href={links.briefing}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center rounded-card border-2 border-white px-6 py-3 font-bold text-white hover:bg-white/15"
            >
              まずは説明会（9/2）だけでも
            </a>
          </div>
          <ApplyDeadline variant="onDark" className="mt-5" />
        </div>

        <p className="mt-10 text-sm leading-relaxed text-primary-light">
          {site.disclaimer}
        </p>

        <div className="mt-10 grid gap-8 border-t border-white/20 pt-10 md:grid-cols-2">
          <div>
            <h2 className="text-base font-bold">お問い合わせ</h2>
            <p className="mt-2 text-sm">
              お問い合わせは下記Eメールのみで受け付けています。
            </p>
            <a
              href={`mailto:${site.contactEmail}`}
              className="mt-1 inline-block text-lg font-bold underline underline-offset-4 hover:text-accent"
            >
              {site.contactEmail}
            </a>
          </div>

          <div className="text-sm leading-relaxed">
            <p>
              <span className="font-bold">主催：</span>
              {site.organizer}
            </p>
            <p className="mt-2">
              <span className="font-bold">受託者：</span>
              {site.contractor}
              <br />
              {site.contractorRepresentative}
            </p>
          </div>
        </div>

        <nav
          aria-label="フッターメニュー"
          className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/20 pt-6 text-sm"
        >
          <Link href="/" className="hover:text-accent">
            トップ
          </Link>
          <Link href="/program" className="hover:text-accent">
            プログラム詳細
          </Link>
          <Link href="/instructors" className="hover:text-accent">
            講師・メンター
          </Link>
        </nav>

        <p className="mt-6 text-xs text-primary-light">
          © {new Date().getFullYear()} {site.organizer} / {site.contractor}
        </p>
      </div>
    </footer>
  );
}
