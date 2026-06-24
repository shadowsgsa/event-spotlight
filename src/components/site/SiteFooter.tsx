import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-border bg-[oklch(0.08_0.005_60)]">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-12 w-12 rounded-full grid place-items-center bg-gradient-to-br from-[var(--gold-soft)] to-[var(--ember)] text-background font-display text-xl">
              24
            </div>
            <div>
              <div className="text-display text-2xl tracking-widest">24 SEVEN</div>
              <div className="text-[10px] tracking-[0.3em] text-muted-foreground font-button">ENTERTAINMENT</div>
            </div>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            A premier entertainment company producing concerts, celebrity appearances, cultural
            shows and corporate experiences across North America.
          </p>
          <div className="flex gap-3 mt-6">
            {[
              { Icon: Instagram, href: "https://instagram.com" },
              { Icon: Facebook, href: "https://facebook.com" },
              { Icon: Youtube, href: "https://youtube.com" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 grid place-items-center rounded-full border border-border hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors text-muted-foreground"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-button text-xs tracking-[0.25em] text-[var(--gold)] mb-4">EXPLORE</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {[
              ["Upcoming Events", "/events"],
              ["Gallery", "/gallery"],
              ["About", "/about"],
              ["Sponsors", "/sponsors"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link to={href} className="hover:text-foreground transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-button text-xs tracking-[0.25em] text-[var(--gold)] mb-4">CONTACT</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><Phone size={14} className="mt-1" /> 940-367-1582</li>
            <li className="flex gap-2"><Phone size={14} className="mt-1" /> 817-883-3333</li>
            <li className="flex gap-2"><Mail size={14} className="mt-1" /> hello@24sevenevent.com</li>
            <li className="flex gap-2"><MapPin size={14} className="mt-1" /> Dallas–Fort Worth, TX</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between text-xs text-muted-foreground gap-2">
          <p>© {new Date().getFullYear()} 24 Seven Event. All rights reserved.</p>
          <p className="tracking-widest uppercase">Creating Unforgettable Experiences</p>
        </div>
      </div>
    </footer>
  );
}