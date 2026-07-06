import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { SectionEyebrow, SectionTitle } from "@/components/site/Section";
import { SEO } from "@/components/site/SEO";

const packages = [
  {
    name: "Spotlight",
    price: "$2,500",
    items: ["Logo on event collateral", "Social media mentions", "2 GA passes", "Newsletter inclusion"],
  },
  {
    name: "Headline",
    price: "$10,000",
    items: ["On-stage logo placement", "MC mention during show", "10 VIP passes", "Backstage hospitality", "Press release inclusion"],
    featured: true,
  },
  {
    name: "Presenting",
    price: "Custom",
    items: ["Co-branded show title", "Full-page program ad", "20 VIP passes + meet & greet", "Dedicated activation booth", "Year-long partnership"],
  },
];

export default function Sponsors() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <SEO title="Sponsors — 24 Seven Event" description="Sponsorship packages and inquiry for 24 Seven Event productions." />
      <section className="relative pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionEyebrow>Partner With Us</SectionEyebrow>
          <h1 className="text-display text-6xl md:text-8xl mt-4 leading-[0.9]">
            Sponsor the <span className="text-gold-gradient">spotlight.</span>
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl">
            Our shows reach 100,000+ engaged attendees across 25+ cities. Pick a tier — or let us
            craft a custom activation for your brand.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-3 gap-6">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`cinema-card p-8 ${p.featured ? "border-[var(--gold)]/60 shadow-[var(--shadow-glow)]" : ""}`}
            >
              {p.featured && (
                <span className="inline-block text-[10px] tracking-[0.25em] uppercase font-button text-[var(--gold)] mb-3">
                  Most Popular
                </span>
              )}
              <h3 className="text-display text-3xl">{p.name}</h3>
              <div className="text-display text-5xl text-gold-gradient mt-3">{p.price}</div>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {p.items.map((it) => (
                  <li key={it} className="flex gap-2"><Check className="text-[var(--gold)] mt-0.5 shrink-0" size={16} /> {it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <SectionEyebrow>Inquiry</SectionEyebrow>
          <SectionTitle>Let's build something memorable.</SectionTitle>
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="cinema-card p-8 md:p-10 mt-8 grid gap-4"
          >
            {[
              { name: "name", label: "Full Name", type: "text" },
              { name: "company", label: "Company", type: "text" },
              { name: "email", label: "Work Email", type: "email" },
              { name: "phone", label: "Phone", type: "tel" },
              { name: "budget", label: "Budget Range", type: "text" },
            ].map((f) => (
              <label key={f.name} className="block">
                <span className="block text-[10px] tracking-[0.25em] uppercase font-button text-muted-foreground mb-2">{f.label}</span>
                <input required name={f.name} type={f.type} className="w-full bg-background/60 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--gold)]" />
              </label>
            ))}
            <label className="block">
              <span className="block text-[10px] tracking-[0.25em] uppercase font-button text-muted-foreground mb-2">Tell us about your goals</span>
              <textarea rows={4} className="w-full bg-background/60 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--gold)] resize-none" />
            </label>
            <button type="submit" className="btn-hero">
              {submitted ? "Thank you — we'll be in touch" : "Submit Inquiry"}
              {!submitted && <ArrowRight size={14} />}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}