import { createFileRoute, Outlet, useLocation } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { EventCard } from "@/components/site/EventCard";
import { SectionEyebrow } from "@/components/site/Section";
import { upcomingEvents, eventCategories, type EventCategory } from "@/data/events";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Upcoming Events — 24 Seven Event" },
      { name: "description", content: "Browse upcoming concerts, meet & greets, festivals and corporate events produced by 24 Seven Event." },
      { property: "og:title", content: "Upcoming Events — 24 Seven Event" },
      { property: "og:description", content: "Concerts, celebrity nights, cultural festivals and more — live across North America." },
    ],
  }),
  component: EventsLayout,
});

function EventsLayout() {
  const { pathname } = useLocation();
  if (pathname !== "/events") return <Outlet />;
  return <EventsIndex />;
}

function EventsIndex() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<EventCategory | "All">("All");
  const [city, setCity] = useState<string>("All");

  const cities = useMemo(() => ["All", ...Array.from(new Set(upcomingEvents.map((e) => e.city)))], []);

  const list = upcomingEvents.filter((e) => {
    if (cat !== "All" && e.category !== cat) return false;
    if (city !== "All" && e.city !== city) return false;
    if (q && !`${e.title} ${e.tagline} ${e.venue}`.toLowerCase().includes(q.toLowerCase()))
      return false;
    return true;
  });

  return (
    <div>
      <section className="relative pt-24 pb-16 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionEyebrow>All Events</SectionEyebrow>
          <h1 className="text-display text-5xl md:text-7xl mt-4 leading-[0.95]">
            Find your <span className="text-gold-gradient">next night out.</span>
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl">
            Tickets are sold through our trusted partners — click any event to view details and
            head to the box office.
          </p>

          <div className="mt-10 grid md:grid-cols-[1fr_auto_auto] gap-3">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search events, venues, artists…"
                className="w-full bg-card/60 border border-border rounded-full pl-11 pr-5 py-3 focus:outline-none focus:border-[var(--gold)]"
              />
            </div>
            <select
              value={cat}
              onChange={(e) => setCat(e.target.value as EventCategory | "All")}
              className="bg-card/60 border border-border rounded-full px-5 py-3 focus:outline-none focus:border-[var(--gold)] font-button text-sm"
            >
              <option value="All">All Categories</option>
              {eventCategories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="bg-card/60 border border-border rounded-full px-5 py-3 focus:outline-none focus:border-[var(--gold)] font-button text-sm"
            >
              {cities.map((c) => (
                <option key={c} value={c}>{c === "All" ? "All Cities" : c}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {list.length === 0 ? (
            <p className="text-center text-muted-foreground py-24">No events match your filters.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {list.map((e) => <EventCard key={e.slug} event={e} />)}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}