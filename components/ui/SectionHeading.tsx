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
        <p className="text-xs uppercase tracking-[0.22em] text-white/45">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white md:text-3xl">
        {title}
      </h2>

      {description ? (
        <p className="text-base leading-7 text-white/65">{description}</p>
      ) : null}
    </div>
  );
}