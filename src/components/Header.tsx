import Link from "next/link";
import { links, site } from "@/data/site";
import { CtaButton } from "./CtaButton";
import { MobileNav } from "./MobileNav";

const NAV_ITEMS = [
  { href: "/program", label: "プログラム詳細" },
  { href: "/instructors", label: "講師・メンター" },
  { href: "/#overview", label: "開催概要" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-primary-pale bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-3 px-4 py-3 md:px-8">
        <Link
          href="/"
          className="flex min-w-0 flex-col leading-tight text-ink hover:text-primary-dark"
        >
          {/* 英字は幅を取るのでスマホでは省く（縦2行になってヘッダーが厚くなるため） */}
          <span className="hidden text-[10px] font-semibold tracking-[0.18em] text-primary sm:block md:text-xs">
            TOKUSHIMA FUTURE ACADEMY・DX COURSE
          </span>
          <span className="text-sm font-bold sm:text-base md:text-lg">
            {site.name}
          </span>
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

        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <MobileNav items={NAV_ITEMS} />
          <CtaButton href={links.apply} size="sm">
            申し込む
          </CtaButton>
        </div>
      </div>
    </header>
  );
}
