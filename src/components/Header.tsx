import Link from "next/link";
import { links, site } from "@/data/site";
import { CtaButton } from "./CtaButton";

const NAV_ITEMS = [
  { href: "/program", label: "プログラム詳細" },
  { href: "/instructors", label: "講師・メンター" },
  { href: "/#overview", label: "開催概要" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-primary-pale bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link
          href="/"
          className="flex flex-col leading-tight text-ink hover:text-primary-dark"
        >
          <span className="text-[10px] font-semibold tracking-[0.18em] text-primary md:text-xs">
            TOKUSHIMA FUTURE ACADEMY・DX COURSE
          </span>
          <span className="text-base font-bold md:text-lg">{site.name}</span>
        </Link>

        <nav aria-label="メインメニュー" className="hidden items-center gap-6 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-ink-muted hover:text-primary-dark"
            >
              {item.label}
            </Link>
          ))}
          <CtaButton href={links.apply}>無料で受講申し込み</CtaButton>
        </nav>

        <CtaButton href={links.apply} className="lg:hidden">
          申し込む
        </CtaButton>
      </div>
    </header>
  );
}
