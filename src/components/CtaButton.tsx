import Link from "next/link";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
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
  return (
    <Link
      href={href}
      className={`${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
