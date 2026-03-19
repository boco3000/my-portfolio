type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-white text-neutral-950 hover:bg-white/90"
      : "border border-white/12 bg-white/[0.03] text-white hover:bg-white/[0.06]";

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition ${styles}`}
    >
      {children}
    </a>
  );
}