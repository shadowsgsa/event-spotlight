import { useState } from "react";
import { X, Play } from "lucide-react";
import { SectionEyebrow } from "@/components/site/Section";
import { SEO } from "@/components/site/SEO";
import bollywoodNight from "@/assets/event-bollywood-night.jpg";
import culturalFest from "@/assets/event-cultural-fest.jpg";
import redCarpet from "@/assets/event-red-carpet.jpg";
import corporateGala from "@/assets/event-corporate-gala.jpg";
import diwaliNight from "@/assets/event-diwali-night.jpg";
import comedyNight from "@/assets/event-comedy-night.jpg";
import aboutStage from "@/assets/about-stage.jpg";
import heroConcert from "@/assets/hero-concert.jpg";

type Cat = "All" | "Concerts" | "Celebrity Events" | "Corporate Events";

const photos: { src: string; cat: Exclude<Cat, "All"> }[] = [
  { src: bollywoodNight, cat: "Concerts" },
  { src: culturalFest, cat: "Concerts" },
  { src: redCarpet, cat: "Celebrity Events" },
  { src: corporateGala, cat: "Corporate Events" },
  { src: diwaliNight, cat: "Concerts" },
  { src: comedyNight, cat: "Celebrity Events" },
  { src: aboutStage, cat: "Concerts" },
  { src: heroConcert, cat: "Concerts" },
];

const videos = [
  { id: "dQw4w9WgXcQ", title: "Lucky Ali — Live Highlights" },
  { id: "lYBUbBu4W08", title: "Bollywood Legends Tour" },
  { id: "K4DyBUG242c", title: "Diwali Night 2025" },
];

export default function Gallery() {
  const [cat, setCat] = useState<Cat>("All");
  const [light, setLight] = useState<string | null>(null);
  const list = cat === "All" ? photos : photos.filter((p) => p.cat === cat);

  return (
    <div>
      <SEO title="Gallery — 24 Seven Event" description="Photos and videos from past 24 Seven Event productions." />
      <section className="pt-24 pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionEyebrow>Gallery</SectionEyebrow>
          <h1 className="text-display text-6xl md:text-8xl mt-4 leading-[0.9]">
            Moments, <span className="text-gold-gradient">framed.</span>
          </h1>

          <div className="mt-10 flex flex-wrap gap-2">
            {(["All", "Concerts", "Celebrity Events", "Corporate Events"] as Cat[]).map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-5 py-2 rounded-full text-xs tracking-[0.18em] uppercase font-button font-semibold transition ${
                  cat === c
                    ? "bg-gradient-to-r from-[var(--gold)] to-[var(--ember)] text-background"
                    : "border border-border text-muted-foreground hover:text-foreground hover:border-[var(--gold)]/50"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {list.map((p, i) => (
              <button
                key={i}
                onClick={() => setLight(p.src)}
                className="block w-full cinema-card overflow-hidden break-inside-avoid"
                style={{ aspectRatio: i % 2 === 0 ? "3/4" : "4/5" }}
              >
                <img src={p.src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionEyebrow>Video</SectionEyebrow>
          <h2 className="text-display text-4xl md:text-5xl mt-3">Watch the highlights</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {videos.map((v) => (
              <a key={v.id} href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noreferrer" className="cinema-card relative aspect-video overflow-hidden group">
                <img src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} alt={v.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-80 group-hover:opacity-100 transition" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="h-14 w-14 rounded-full bg-[var(--gold)] text-background grid place-items-center group-hover:scale-110 transition">
                    <Play size={20} className="ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-sm font-button uppercase tracking-wider">{v.title}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {light && (
        <div
          className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl grid place-items-center p-4"
          onClick={() => setLight(null)}
        >
          <button className="absolute top-6 right-6 h-12 w-12 rounded-full border border-border grid place-items-center hover:border-[var(--gold)]">
            <X />
          </button>
          <img src={light} alt="" className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-[var(--shadow-glow)]" />
        </div>
      )}
    </div>
  );
}