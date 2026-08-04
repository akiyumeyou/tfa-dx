import { overview } from "@/data/site";

/**
 * 申込CTAの近くに置く締切表記。
 * 徳島県の依頼で「目立つが煽らない」ため、既存トーンのバッジ／太字にとどめ、
 * 赤や点滅などの緊急演出は使わない。
 */
export function ApplyDeadline({
  variant = "badge",
  className = "",
}: {
  /** badge: 白〜淡色背景の上 / onDark: primary系の濃い背景の上 */
  variant?: "badge" | "onDark";
  className?: string;
}) {
  const text = `申込締切：${overview.deadline}`;

  if (variant === "onDark") {
    return (
      <p className={`text-sm font-bold text-white ${className}`}>{text}</p>
    );
  }

  return (
    <p
      className={`inline-block rounded-full bg-accent/25 px-4 py-1.5 text-sm font-bold text-ink ${className}`}
    >
      {text}
    </p>
  );
}
