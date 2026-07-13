import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Play,
  Sparkles,
  Users,
  Globe2,
  Handshake,
  Quote,
  Instagram,
  Mail,
} from "lucide-react";
import { EventCard } from "@/components/site/EventCard";
import { SectionEyebrow, SectionTitle } from "@/components/site/Section";
import { SEO } from "@/components/site/SEO";
import {
  events,
  featuredEvents,
  pastEvents,
  upcomingEvents,
  eventCategories,
  type EventCategory,
} from "@/data/events";
import heroConcert from "@/assets/hero-concert.jpg";
import aboutStage from "@/assets/about-stage.jpg";

function useCounter(target: number, durationMs = 1600) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min(1, (now - start) / durationMs);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(Math.round(target * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, durationMs]);

  return { value, ref };
}

function Counter({ to, suffix = "+", label }: { to: number; suffix?: string; label: string }) {
  const { value, ref } = useCounter(to);
  return (
    <div className="text-center md:text-left">
      <div className="text-display text-5xl md:text-6xl text-gold-gradient">
        <span ref={ref}>{value.toLocaleString()}</span>
        {suffix}
      </div>
      <div className="mt-2 text-xs tracking-[0.25em] uppercase font-button text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative -mt-20 min-h-[100svh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroConcert}
          alt="Concert crowd under stage lights"
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </div>

      <div className="absolute top-1/2 -left-40 w-[600px] h-[600px] bg-[var(--ember)]/10 blur-[140px] rounded-full animate-glow" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--gold)]/10 blur-[140px] rounded-full" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-32 pb-24 w-full">
        <div className="max-w-3xl">
          <SectionEyebrow>
            <Sparkles size={12} /> 24 Seven Entertainment Presents
          </SectionEyebrow>
          <h1 className="text-display text-6xl md:text-8xl lg:text-9xl mt-6 leading-[0.9]">
            Creating
            <br />
            <span className="text-gold-gradient">Unforgettable</span>
            <br />
            Experiences
          </h1>
          <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            From concerts and celebrity meet & greets to cultural festivals and corporate galas —
            we produce premium live experiences across North America.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/events" className="btn-hero">
              View Upcoming Events <ArrowRight size={16} />
            </Link>
            <Link to="/sponsors" className="btn-ghost-gold">
              Become a Sponsor
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] uppercase text-muted-foreground/70 font-button">
        Scroll
      </div>
    </section>
  );
}

function FeaturedStrip() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <SectionEyebrow>Featured Events</SectionEyebrow>
            <SectionTitle>
              The marquee <span className="text-gold-gradient">shows</span>
            </SectionTitle>
          </div>
          <Link to="/events" className="btn-ghost-gold">
            All Events <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {featuredEvents.map((e) => (
            <EventCard key={e.slug} event={e} />
          ))}
        </div>
      </div>
    </section>
  );
}

function UpcomingGrid() {
  const [filter, setFilter] = useState<EventCategory | "All">("All");
  const list = filter === "All" ? upcomingEvents : upcomingEvents.filter((e) => e.category === filter);

  return (
    <section className="relative py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <SectionEyebrow>Upcoming Lineup</SectionEyebrow>
          <SectionTitle>What's coming next</SectionTitle>
          <p className="mt-5 text-muted-foreground">
            Filter by what moves you. Tickets are sold through our trusted partners — we handle
            the experience, they handle the box office.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {(["All", ...eventCategories] as const).map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2 rounded-full text-xs tracking-[0.18em] uppercase font-button font-semibold transition ${
                filter === c
                  ? "bg-gradient-to-r from-[var(--gold)] to-[var(--ember)] text-background shadow-[var(--shadow-ember)]"
                  : "border border-border text-muted-foreground hover:text-foreground hover:border-[var(--gold)]/50"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {list.map((e) => (
            <EventCard key={e.slug} event={e} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoHighlights() {
  const videos = [
    { id: "dQw4w9WgXcQ", title: "Lucky Ali — Live Highlights" },
    { id: "lYBUbBu4W08", title: "Bollywood Legends Tour" },
    { id: "K4DyBUG242c", title: "Diwali Night 2025" },
    { id: "OPf0YbXqDm0", title: "Red Carpet Moments" },
  ];
  const [active, setActive] = useState(videos[0]);

  return (
    <section className="relative py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <SectionEyebrow>Watch</SectionEyebrow>
            <SectionTitle>
              Relive <span className="text-gold-gradient">The Experience</span>
            </SectionTitle>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 cinema-card aspect-video overflow-hidden">
            <iframe
              key={active.id}
              src={`https://www.youtube.com/embed/${active.id}?rel=0`}
              title={active.title}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
            {videos.map((v) => (
              <button
                key={v.id}
                onClick={() => setActive(v)}
                className={`group cinema-card relative aspect-video overflow-hidden text-left ${
                  active.id === v.id ? "border-[var(--gold)]/60" : ""
                }`}
              >
                <img
                  src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                  alt={v.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-70 group-hover:opacity-100 transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="h-12 w-12 rounded-full bg-[var(--gold)]/90 text-background grid place-items-center group-hover:scale-110 transition">
                    <Play size={18} className="ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 left-3 right-3 text-xs font-button tracking-wider uppercase text-foreground/90 line-clamp-1">
                  {v.title}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PastShowcase() {
  return (
    <section className="relative py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <SectionEyebrow>Past Productions</SectionEyebrow>
          <SectionTitle>
            Moments that <span className="text-gold-gradient">sold out</span> rooms
          </SectionTitle>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...pastEvents, ...featuredEvents.slice(0, 3)].map((e, i) => (
            <Link
              key={e.slug + i}
              to={`/events/${e.slug}`}
              className="cinema-card group block aspect-[3/4]"
            >
              <div className="relative h-full w-full overflow-hidden">
                <img
                  src={e.poster}
                  alt={e.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-[10px] tracking-[0.25em] uppercase font-button text-[var(--gold)] mb-1">
                    {e.past ? "Past Event" : "Upcoming"}
                  </div>
                  <h3 className="text-display text-xl text-foreground">{e.title}</h3>
                  {e.stats && (
                    <div className="mt-3 flex flex-wrap gap-3 text-[10px] tracking-widest uppercase text-muted-foreground">
                      {e.stats.map((s) => (
                        <span key={s.label}>
                          <span className="text-foreground">{s.value}</span> {s.label}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-t border-border">
      <div className="absolute inset-0">
        <img src={aboutStage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionEyebrow>Welcome to 24/7</SectionEyebrow>
            <SectionTitle>
              Turning ordinary moments into
              <br />
              <span className="text-gold-gradient">extraordinary experiences.</span>
            </SectionTitle>
            <p className="mt-6 text-muted-foreground leading-relaxed text-base">
              At 24/7 Entertainment, we turn ordinary moments into extraordinary experiences. As a
              leading entertainment and event management company based in Dallas, Texas, we
              specialize in producing spectacular concerts, celebrity appearances, cultural
              festivals, corporate events, and community celebrations.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed text-base">
              With a passion for entertainment and a commitment to excellence, our team creates
              unforgettable experiences that bring people together through music, culture, and
              celebration. From intimate gatherings to large-scale productions, we deliver events
              that leave lasting memories.
            </p>
            <p className="mt-4 text-[var(--gold)] font-button tracking-wide text-sm uppercase">
              Entertainment Never Stops — That's Why We're Here 24/7.
            </p>
            <div className="mt-8 flex gap-4">
              <Link to="/about" className="btn-hero">
                Our Story <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <Counter to={50} label="Events Organized" />
            <Counter to={100000} suffix="+" label="Total Attendees" />
            <Counter to={25} label="Cities Across NA" />
            <Counter to={100} label="Partners & Sponsors" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Sponsorship() {
  const benefits = [
    { Icon: Users, title: "Audience Reach", desc: "Tap into 100k+ engaged attendees across our shows." },
    { Icon: Sparkles, title: "Brand Exposure", desc: "On-stage, on-screen, and on every printed asset." },
    { Icon: Handshake, title: "VIP Networking", desc: "Backstage access to talent, press, and decision-makers." },
    { Icon: Globe2, title: "Community Engagement", desc: "Be part of culture, not just a banner on the wall." },
  ];
  return (
    <section className="relative py-24 md:py-32 border-t border-border overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/[0.08] via-background to-[var(--ember)]/[0.06]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.78_0.13_85/0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
        <div>
          <SectionEyebrow>Sponsorship</SectionEyebrow>
          <SectionTitle>
            Partner with <span className="text-gold-gradient">us</span>
          </SectionTitle>
          <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">
            Align your brand with premium live entertainment. We work with sponsors who want more
            than visibility — they want to be part of the story.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {benefits.map(({ Icon, title, desc }) => (
              <div key={title} className="border border-[var(--gold)]/20 rounded-2xl p-6 bg-[oklch(0.22_0.02_75)]/70 backdrop-blur-sm hover:border-[var(--gold)]/60 hover:bg-[oklch(0.24_0.025_75)]/80 transition">
                <div className="h-10 w-10 rounded-full grid place-items-center bg-[var(--gold)]/20 text-[var(--gold)] mb-4">
                  <Icon size={18} />
                </div>
                <h4 className="font-button font-semibold tracking-wide text-foreground">{title}</h4>
                <p className="text-sm text-muted-foreground mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </div>
        <SponsorForm />
      </div>
    </section>
  );
}

function SponsorForm() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <form
      className="relative p-8 md:p-10 self-start rounded-2xl border border-[var(--gold)]/25 bg-[oklch(0.22_0.02_75)]/70 backdrop-blur-sm shadow-[var(--shadow-card)]"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <h3 className="text-display text-3xl">Become a Sponsor</h3>
      <p className="text-sm text-muted-foreground mt-2">Tell us about your brand. We'll be in touch within 48 hours.</p>
      <div className="mt-6 grid gap-4">
        {[
          { name: "name", label: "Full Name", type: "text" },
          { name: "company", label: "Company", type: "text" },
          { name: "email", label: "Work Email", type: "email" },
          { name: "phone", label: "Phone", type: "tel" },
        ].map((f) => (
          <label key={f.name} className="block">
            <span className="block text-[10px] tracking-[0.25em] uppercase font-button text-muted-foreground mb-2">
              {f.label}
            </span>
            <input
              required
              name={f.name}
              type={f.type}
              className="w-full bg-background/60 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-[var(--gold)] transition"
            />
          </label>
        ))}
        <label className="block">
          <span className="block text-[10px] tracking-[0.25em] uppercase font-button text-muted-foreground mb-2">
            About Your Brand
          </span>
          <textarea
            rows={4}
            name="message"
            className="w-full bg-background/60 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-[var(--gold)] transition resize-none"
          />
        </label>
      </div>
      <button type="submit" className="btn-hero w-full mt-6">
        {submitted ? "Thank you — we'll be in touch" : "Send Inquiry"}
        {!submitted && <ArrowRight size={14} />}
      </button>
    </form>
  );
}

const testimonials = [
  { quote: "From booking to backstage, every detail was world-class. The audience response was unreal.", name: "Andy Lalani", role: "Tour Producer" },
  { quote: "24 Seven turned our brand activation into a moment the city is still talking about.", name: "Meenu Gupta", role: "VOG USA Inc." },
  { quote: "The most well-produced South-Asian show I've performed at in the United States.", name: "Headline Artist", role: "Bollywood Playback Singer" },
];

function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <SectionEyebrow>Word of Mouth</SectionEyebrow>
          <SectionTitle>What artists & sponsors say</SectionTitle>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="cinema-card p-8 flex flex-col">
              <Quote className="text-[var(--gold)]" size={28} />
              <blockquote className="mt-6 text-lg leading-relaxed text-foreground/90">"{t.quote}"</blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border">
                <div className="font-button font-semibold tracking-wide text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground mt-1 tracking-widest uppercase">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const partners = ["MERA BOX OFFICE", "SULEKHA", "RHYVURB", "FARM HOUSE MUSIC", "PANDA MONEY", "JIMMY'S", "FOUR SEASONS", "VINESSA EVENTS"];

function Partners() {
  return (
    <section className="relative py-20 border-t border-border overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mb-10">
        <div className="text-center">
          <SectionEyebrow>Partners & Sponsors</SectionEyebrow>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex gap-14 animate-marquee whitespace-nowrap w-max">
          {[...partners, ...partners].map((p, i) => (
            <span key={i} className="text-display text-3xl tracking-[0.15em] text-muted-foreground/60 hover:text-[var(--gold)] transition-colors">
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstaAndNewsletter() {
  return (
    <section className="relative py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
        <div>
          <SectionEyebrow>
            <Instagram size={12} /> @24sevenevent
          </SectionEyebrow>
          <SectionTitle>Follow the moments</SectionTitle>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {events.slice(0, 6).map((e, i) => (
              <a
                key={i}
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="cinema-card aspect-square overflow-hidden group"
              >
                <img src={e.poster} alt={e.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </a>
            ))}
          </div>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="btn-ghost-gold mt-8 inline-flex">
            Open Instagram <ArrowRight size={14} />
          </a>
        </div>

        <NewsletterCard />
      </div>
    </section>
  );
}

function NewsletterCard() {
  const [done, setDone] = useState(false);
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setDone(true); }}
      className="cinema-card p-10 md:p-14 self-center grain-overlay"
    >
      <SectionEyebrow>Newsletter</SectionEyebrow>
      <h3 className="text-display text-4xl md:text-5xl mt-4 leading-[0.95]">
        Never miss <br />
        <span className="text-gold-gradient">an event.</span>
      </h3>
      <p className="mt-4 text-muted-foreground">
        Get early access to ticket releases, VIP upgrades and behind-the-scenes drops.
      </p>
      <div className="mt-8 grid gap-4">
        <input required placeholder="Your name" className="bg-background/60 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--gold)]" />
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
          <input required type="email" placeholder="you@example.com" className="w-full bg-background/60 border border-border rounded-lg pl-11 pr-4 py-3 focus:outline-none focus:border-[var(--gold)]" />
        </div>
        <button type="submit" className="btn-hero">
          {done ? "You're on the list" : "Subscribe"}
          {!done && <ArrowRight size={14} />}
        </button>
      </div>
    </form>
  );
}

export default function Home() {
  return (
    <div>
      <SEO
        title="24 Seven Event — Concerts, Celebrities & Cultural Experiences"
        description="Concerts, celebrity meet & greets, cultural festivals and corporate events across North America. Browse upcoming shows and buy tickets through our partners."
        image={heroConcert}
      />
      <Hero />
      <FeaturedStrip />
      <UpcomingGrid />
      <VideoHighlights />
      <PastShowcase />
      <AboutSection />
      <Sponsorship />
      <Testimonials />
      <Partners />
      <InstaAndNewsletter />
    </div>
  );
}