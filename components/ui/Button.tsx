type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-white text-neutral-950 hover:bg-white/90"
      : "border border-white/12 bg-white/[0.03] text-white hover:border-[var(--accent-border)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]";

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium tracking-[-0.02em] transition-all duration-300 hover:-translate-y-0.5 ${styles}`}
    >
      {children}
    </a>
  );
}
