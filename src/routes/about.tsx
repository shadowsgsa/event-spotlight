import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionEyebrow, SectionTitle } from "@/components/site/Section";
import aboutStage from "@/assets/about-stage.jpg";
import redCarpet from "@/assets/event-red-carpet.jpg";
import bollywoodNight from "@/assets/event-bollywood-night.jpg";
import corporateGala from "@/assets/event-corporate-gala.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — 24 Seven Event" },
      { name: "description", content: "Premier entertainment company producing concerts, celebrity events, cultural shows and corporate experiences across North America." },
      { property: "og:title", content: "About — 24 Seven Event" },
      { property: "og:description", content: "Our story, mission and the team behind the shows." },
      { property: "og:image", content: aboutStage },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutStage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <SectionEyebrow>Since Day One</SectionEyebrow>
          <h1 className="text-display text-6xl md:text-8xl lg:text-9xl mt-4 leading-[0.9]">
            The story behind <br />
            <span className="text-gold-gradient">the lights.</span>
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 grid md:grid-cols-2 gap-12">
          <div>
            <SectionEyebrow>Our Mission</SectionEyebrow>
            <h2 className="text-display text-3xl md:text-4xl mt-3">Make every night feel like the first row.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We exist to produce live moments people remember decades later — the songs you sang along
              to, the meet-and-greet handshake, the laughter that filled the room.
            </p>
          </div>
          <div>
            <SectionEyebrow>Our Vision</SectionEyebrow>
            <h2 className="text-display text-3xl md:text-4xl mt-3">Be the home of premium South-Asian & global entertainment in North America.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              From local community festivals to international touring artists, we bring craftsmanship,
              hospitality and cinematic production to every show.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <SectionEyebrow>Leadership</SectionEyebrow>
            <SectionTitle>The team behind the curtain</SectionTitle>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Andy Lalani", role: "Founder & Tour Producer" },
              { name: "Ajay Mittal", role: "Director, Partnerships" },
              { name: "Sanjna Tyagi", role: "Head of Production" },
              { name: "Reema Dodani", role: "Brand & Sponsorships" },
            ].map((p) => (
              <div key={p.name} className="cinema-card p-8 text-center">
                <div className="h-20 w-20 mx-auto rounded-full bg-gradient-to-br from-[var(--gold-soft)] to-[var(--ember)] grid place-items-center text-background font-display text-2xl">
                  {p.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="text-display text-2xl mt-5">{p.name}</h3>
                <p className="text-xs tracking-[0.2em] uppercase font-button text-muted-foreground mt-2">{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <SectionEyebrow>Production Highlights</SectionEyebrow>
            <SectionTitle>A few nights we're proud of</SectionTitle>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { img: bollywoodNight, title: "Bollywood Legends Tour", stat: "5,000+ attendees" },
              { img: redCarpet, title: "Red Carpet Celebrity Night", stat: "350 VIP guests" },
              { img: corporateGala, title: "Founders Gala", stat: "12 brand partners" },
            ].map((h) => (
              <div key={h.title} className="cinema-card overflow-hidden">
                <div className="relative aspect-[4/5]">
                  <img src={h.img} alt={h.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-display text-2xl">{h.title}</h3>
                    <p className="text-xs text-[var(--gold)] tracking-[0.2em] uppercase mt-1 font-button">{h.stat}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/events" className="btn-hero inline-flex">See All Events <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}