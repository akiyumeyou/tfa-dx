import Image from "next/image";
import { links, overview } from "@/data/site";

const QR_SIZE = 480;

const FORMS = [
  {
    href: links.apply,
    image: "/images/qr-apply.png",
    title: "受講申し込み",
    description: `参加費無料・定員${overview.capacity}`,
    note: `申込締切：${overview.deadline}`,
  },
  {
    href: links.briefing,
    image: "/images/qr-briefing.png",
    title: "事前説明会の申し込み",
    description: "2026年9月2日(水) 19:00〜 オンライン",
    note: undefined,
  },
] as const;

/**
 * 申し込みフォームのQRコード。
 * パソコンで見ている人がその場でスマホから申し込めるように置いている。
 */
export function FormQrPanel({ className = "" }: { className?: string }) {
  return (
    <div className={`grid gap-6 sm:grid-cols-2 sm:gap-8 ${className}`}>
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
            {form.note && (
              <p className="mt-1 text-sm font-bold text-ink">{form.note}</p>
            )}
            {/* カード全体がフォームへのリンク。QRだけだとPCの人が押せると気づかないため明記する */}
            <p className="mt-2 text-sm font-bold text-primary underline underline-offset-4">
              スマホで読み取る／クリックで開く →
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}
