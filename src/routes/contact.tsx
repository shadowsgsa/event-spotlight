import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, ArrowRight } from "lucide-react";
import { SectionEyebrow } from "@/components/site/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — 24 Seven Event" },
      { name: "description", content: "Get in touch with 24 Seven Event for bookings, sponsorships and press inquiries." },
      { property: "og:title", content: "Contact — 24 Seven Event" },
      { property: "og:description", content: "Bookings, sponsorships, press." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [done, setDone] = useState(false);
  return (
    <div>
      <section className="pt-24 pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionEyebrow>Contact</SectionEyebrow>
          <h1 className="text-display text-6xl md:text-8xl mt-4 leading-[0.9]">
            Let's <span className="text-gold-gradient">talk.</span>
          </h1>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1fr_1.2fr] gap-12">
          <div className="space-y-8">
            <ContactRow Icon={Phone} title="Call us">
              <p>Ajay Mittal — 940-367-1582</p>
              <p>Andy Lalani — 817-883-3333</p>
              <p>Sanjna Tyagi — 551-208-6530</p>
              <p>Reema Dodani — 817-652-9872</p>
            </ContactRow>
            <ContactRow Icon={Mail} title="Email">
              <p>hello@24sevenevent.com</p>
              <p>sponsors@24sevenevent.com</p>
            </ContactRow>
            <ContactRow Icon={MapPin} title="Based in">
              <p>Dallas–Fort Worth, TX</p>
              <p>Touring across North America</p>
            </ContactRow>
            <div>
              <h3 className="font-button text-xs tracking-[0.25em] text-[var(--gold)] mb-3">FOLLOW</h3>
              <div className="flex gap-3">
                {[Instagram, Facebook, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="h-11 w-11 grid place-items-center rounded-full border border-border hover:border-[var(--gold)] hover:text-[var(--gold)] transition text-muted-foreground">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div className="cinema-card overflow-hidden aspect-video">
              <iframe
                title="Office map"
                src="https://www.google.com/maps?q=Dallas,+TX&output=embed"
                className="h-full w-full grayscale-[40%] contrast-110"
                loading="lazy"
              />
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setDone(true); }}
            className="cinema-card p-8 md:p-10 self-start"
          >
            <h2 className="text-display text-3xl">Send us a message</h2>
            <p className="text-sm text-muted-foreground mt-2">We reply within 1–2 business days.</p>
            <div className="mt-6 grid gap-4">
              {[
                { name: "name", label: "Full Name", type: "text" },
                { name: "email", label: "Email", type: "email" },
                { name: "subject", label: "Subject", type: "text" },
              ].map((f) => (
                <label key={f.name} className="block">
                  <span className="block text-[10px] tracking-[0.25em] uppercase font-button text-muted-foreground mb-2">{f.label}</span>
                  <input required name={f.name} type={f.type} className="w-full bg-background/60 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--gold)]" />
                </label>
              ))}
              <label className="block">
                <span className="block text-[10px] tracking-[0.25em] uppercase font-button text-muted-foreground mb-2">Message</span>
                <textarea rows={6} required className="w-full bg-background/60 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--gold)] resize-none" />
              </label>
              <button type="submit" className="btn-hero">
                {done ? "Message sent" : "Send Message"}
                {!done && <ArrowRight size={14} />}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

function ContactRow({ Icon, title, children }: { Icon: typeof Phone; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-5">
      <div className="h-12 w-12 shrink-0 rounded-full bg-[var(--gold)]/10 grid place-items-center text-[var(--gold)]">
        <Icon size={18} />
      </div>
      <div>
        <h3 className="font-button text-xs tracking-[0.25em] uppercase text-[var(--gold)] mb-2">{title}</h3>
        <div className="text-foreground space-y-1">{children}</div>
      </div>
    </div>
  );
}