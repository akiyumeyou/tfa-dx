import Image from "next/image";
import { links } from "@/data/site";

const QR_SIZE = 480;

const FORMS = [
  {
    href: links.apply,
    image: "/images/qr-apply.png",
    title: "受講申し込み",
    description: "参加費無料・定員20名（申込多数の場合は抽選）",
  },
  {
    href: links.briefing,
    image: "/images/qr-briefing.png",
    title: "事前説明会の申し込み",
    description: "2026年9月2日(水) 19:00〜 オンライン",
  },
] as const;

/**
 * 申し込みフォームのQRコード。
 * パソコンで見ている人がその場でスマホから申し込めるように置いている。
 */
export function FormQrPanel({ className = "" }: { className?: string }) {
  return (
    <div className={`grid gap-4 sm:grid-cols-2 ${className}`}>
      {FORMS.map((form) => (
        <a
          key={form.href}
          href={form.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-card border border-primary-pale bg-white p-4 transition hover:border-primary-light hover:shadow-md"
        >
          <Image
            src={form.image}
            alt={`${form.title}フォームのQRコード`}
            width={QR_SIZE}
            height={QR_SIZE}
            sizes="112px"
            className="h-28 w-28 shrink-0 rounded-sm"
          />
          <div className="min-w-0">
            <p className="text-base font-bold text-ink">{form.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-ink-muted">
              {form.description}
            </p>
            <p className="mt-2 text-sm font-bold text-primary">
              スマホで読み取る →
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}
