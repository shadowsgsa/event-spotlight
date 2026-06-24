import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/sponsors", label: "Sponsors" },
  { to: "/contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/75 border-b border-border"
          : "bg-gradient-to-b from-background/80 to-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10 rounded-full grid place-items-center bg-gradient-to-br from-[var(--gold-soft)] to-[var(--ember)] text-background font-display text-lg shadow-[var(--shadow-glow)]">
            24
          </div>
          <div className="leading-tight">
            <div className="text-display text-xl tracking-widest text-foreground">24 SEVEN</div>
            <div className="text-[10px] tracking-[0.3em] text-muted-foreground font-button">EVENT</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="text-[13px] tracking-[0.18em] uppercase font-button font-semibold text-muted-foreground hover:text-foreground transition-colors data-[status=active]:text-foreground relative"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link to="/events" className="hidden lg:inline-flex btn-hero text-xs">
          Upcoming Events
        </Link>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground p-2"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-base uppercase tracking-[0.2em] font-button font-semibold text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/events" onClick={() => setOpen(false)} className="btn-hero mt-2 self-start">
              Upcoming Events
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}