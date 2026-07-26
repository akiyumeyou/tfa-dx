type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignment}`}>
      {eyebrow && (
        <p className="text-xs font-bold tracking-[0.2em] text-primary md:text-sm">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-2xl font-bold leading-snug text-ink md:text-3xl">
        {title}
      </h2>
      <span
        aria-hidden="true"
        className="mt-4 block h-1 w-16 rounded-full bg-accent"
      />
      {description && (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted">
          {description}
        </p>
      )}
    </div>
  );
}
