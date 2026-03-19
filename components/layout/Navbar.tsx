import { Container } from "./Container";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-sm text-white/65 transition hover:text-white">
      {children}
    </a>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/75 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="text-sm font-medium tracking-[-0.03em] text-white">
            Bo Cochran
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
}