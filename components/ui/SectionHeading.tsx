type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl space-y-3 ${className}`}>
      {eyebrow ? (
        <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--accent)]">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-2xl font-semibold tracking-[-0.05em] text-white md:text-3xl md:leading-[1.08]">
        {title}
      </h2>

      {description ? (
        <p className="text-base leading-7 text-white/60 md:text-[17px]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
