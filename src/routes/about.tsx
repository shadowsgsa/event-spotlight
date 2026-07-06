import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Music2, Star, Globe2, Briefcase, Settings2, Handshake } from "lucide-react";
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
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <SectionEyebrow>Who We Are</SectionEyebrow>
          <h2 className="text-display text-3xl md:text-5xl mt-3">
            Bringing people together through <span className="text-gold-gradient">entertainment.</span>
          </h2>
          <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed text-base">
            <p>
              24/7 Entertainment is a premier entertainment and event production company dedicated
              to creating world-class experiences for audiences across the United States. We
              specialize in organizing concerts, live shows, celebrity events, cultural festivals,
              and corporate gatherings that celebrate diversity and bring communities together.
            </p>
            <p>
              Over the years, we have built a reputation for delivering exceptional events with
              creativity, professionalism, and attention to detail. Our experienced team handles
              every aspect of event planning and execution, ensuring that every event is seamless,
              exciting, and memorable.
            </p>
            <p>
              Whether it's a sold-out concert featuring renowned artists or a community festival
              celebrating culture and tradition, our mission remains the same — to create
              meaningful experiences that inspire, entertain, and connect people.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <SectionEyebrow>Our Services</SectionEyebrow>
            <SectionTitle>What we <span className="text-gold-gradient">produce</span></SectionTitle>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { Icon: Music2, title: "Concerts & Live Entertainment", desc: "Producing unforgettable live concerts featuring celebrated artists, singers, musicians, and performers from around the world." },
              { Icon: Star, title: "Celebrity Events", desc: "Organizing celebrity appearances, meet-and-greets, award nights, and exclusive entertainment experiences." },
              { Icon: Globe2, title: "Cultural Festivals & Community Events", desc: "Creating vibrant cultural celebrations that showcase traditions, music, dance, and community spirit." },
              { Icon: Briefcase, title: "Corporate Events", desc: "Delivering professional event planning services for conferences, company celebrations, product launches, and special occasions." },
              { Icon: Settings2, title: "Event Production & Management", desc: "Complete event solutions including venue coordination, stage production, artist management, marketing, and on-site execution." },
              { Icon: Handshake, title: "Sponsorship & Brand Partnerships", desc: "Connecting businesses with audiences through strategic sponsorship opportunities and creative brand activations." },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="cinema-card p-8">
                <div className="h-12 w-12 rounded-full grid place-items-center bg-[var(--gold)]/10 text-[var(--gold)] mb-5">
                  <Icon size={20} />
                </div>
                <h3 className="text-display text-2xl">{title}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 grid md:grid-cols-2 gap-12">
          <div>
            <SectionEyebrow>Our Mission</SectionEyebrow>
            <h2 className="text-display text-3xl md:text-4xl mt-3">
              Extraordinary experiences that <span className="text-gold-gradient">unite</span> communities.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              To create extraordinary entertainment experiences that inspire, unite, and celebrate
              communities through exceptional events and unforgettable moments.
            </p>
          </div>
          <div>
            <SectionEyebrow>Our Vision</SectionEyebrow>
            <h2 className="text-display text-3xl md:text-4xl mt-3">
              A globally recognized name in <span className="text-gold-gradient">live entertainment.</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              To become a globally recognized entertainment and event company known for innovation,
              excellence, and creating experiences that bring people together through the power of
              music, culture, and celebration.
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