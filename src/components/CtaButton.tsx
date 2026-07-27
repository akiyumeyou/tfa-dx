import Link from "next/link";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const BASE =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-card font-bold transition-colors";

const VARIANTS = {
  /* 白文字だとコントラスト比が足りないため、アクセント色には濃紺の文字を載せる */
  primary: "bg-accent text-ink hover:bg-accent-hover shadow-sm",
  secondary:
    "border-2 border-primary bg-white text-primary-dark hover:bg-primary-pale",
} as const;

const SIZES = {
  /* スマホのヘッダーなど、幅が限られる場所用 */
  sm: "px-3 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
} as const;

export function CtaButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: CtaButtonProps) {
  const styles = `${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  // 申込フォームなど外部サイトは別タブで開き、LPを閉じさせない
  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}
