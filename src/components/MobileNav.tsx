"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavItem = { href: string; label: string };

/**
 * スマホ・タブレット用のメニュー。
 * アイコンだけだと分かりにくいので「メニュー」の文字を必ず添える。
 */
export function MobileNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  /** 開いたときのパスを覚えておく。ページが変われば自動的に閉じた状態になる */
  const [openedPath, setOpenedPath] = useState<string | null>(null);
  const open = openedPath === pathname;
  const setOpen = (next: boolean) => setOpenedPath(next ? pathname : null);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenedPath(null);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="flex min-h-[44px] shrink-0 items-center gap-1.5 rounded-card border-2 border-primary px-3 text-sm font-bold text-primary-dark hover:bg-primary-pale lg:hidden"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          {open ? (
            <>
              <path d="M4 4l12 12" />
              <path d="M16 4L4 16" />
            </>
          ) : (
            <>
              <path d="M3 5h14" />
              <path d="M3 10h14" />
              <path d="M3 15h14" />
            </>
          )}
        </svg>
        メニュー
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-primary-pale bg-white shadow-lg lg:hidden"
        >
          <nav aria-label="メインメニュー">
            <ul className="mx-auto max-w-[1200px] divide-y divide-primary-pale px-4">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-[56px] items-center justify-between text-base font-bold text-ink hover:text-primary-dark"
                  >
                    {item.label}
                    <span aria-hidden="true" className="text-primary">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
