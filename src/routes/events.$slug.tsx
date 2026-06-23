import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Calendar, Clock, MapPin, Ticket } from "lucide-react";
import { SectionEyebrow } from "@/components/site/Section";
import { getEventBySlug, events } from "@/data/events";

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    const event = getEventBySlug(params.slug);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => {
    const e = loaderData?.event;
    return {
      meta: e
        ? [
            { title: `${e.title} — 24 Seven Event` },
            { name: "description", content: e.description.slice(0, 158) },
            { property: "og:title", content: `${e.title} — 24 Seven Event` },
            { property: "og:description", content: e.description.slice(0, 158) },
            { property: "og:image", content: e.poster },
            { name: "twitter:image", content: e.poster },
          ]
        : [{ title: "Event — 24 Seven Event" }],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <h1 className="text-display text-5xl">Event not found</h1>
      <p className="text-muted-foreground mt-4">This event may have moved or been removed.</p>
      <Link to="/events" className="btn-hero mt-8 inline-flex">All Events</Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <h1 className="text-display text-4xl">Something went wrong</h1>
      <p className="text-muted-foreground mt-4">{error.message}</p>
      <button onClick={() => reset()} className="btn-hero mt-8 inline-flex">Retry</button>
    </div>
  ),
  component: EventDetail,
});

function EventDetail() {
  const { event } = Route.useLoaderData();
  const related = events.filter((e) => e.slug !== event.slug && e.category === event.category).slice(0, 3);
  const mapsQuery = encodeURIComponent(`${event.venue} ${event.address}`);

  return (
    <article>
      <section className="relative min-h-[80svh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={event.poster} alt={event.title} className="absolute inset-0 h-full w-full object-cover blur-2xl scale-125 opacity-50" />
          <div className="absolute inset-0 bg-background/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-20 grid lg:grid-cols-[auto_1fr] gap-12 items-end">
          <div className="cinema-card overflow-hidden w-full max-w-sm">
            <img src={event.poster} alt={event.title} className="w-full h-auto" />
          </div>
          <div>
            <Link to="/events" className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-button text-muted-foreground hover:text-foreground">
              <ArrowLeft size={14} /> All Events
            </Link>
            <div className="mt-4 inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase font-button text-[var(--gold)] border border-[var(--gold)]/40 rounded-full px-3 py-1">
              {event.category}
            </div>
            <h1 className="text-display text-5xl md:text-7xl lg:text-8xl mt-4 leading-[0.9]">
              {event.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{event.tagline}</p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4 max-w-2xl">
              <Info icon={Calendar} label="Date" value={event.date} />
              <Info icon={Clock} label="Time" value={event.time} />
              <Info icon={MapPin} label="Venue" value={`${event.venue} · ${event.city}`} />
            </div>

            {!event.past && (
              <a href={event.ticketUrl} target="_blank" rel="noreferrer" className="btn-hero mt-10">
                <Ticket size={16} /> Buy Tickets · {event.ticketPartner} <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <SectionEyebrow>About The Event</SectionEyebrow>
            <p className="mt-6 text-lg leading-relaxed text-foreground/85">{event.description}</p>

            <div className="mt-12">
              <SectionEyebrow>Featured Artists</SectionEyebrow>
              <div className="mt-4 flex flex-wrap gap-3">
                {event.artists.map((a) => (
                  <span key={a} className="px-4 py-2 rounded-full bg-card border border-border text-sm font-button">
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {event.gallery && (
              <div className="mt-14">
                <SectionEyebrow>Gallery</SectionEyebrow>
                <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                  {event.gallery.map((src, i) => (
                    <div key={i} className="cinema-card aspect-square overflow-hidden">
                      <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="space-y-8">
            <div className="cinema-card p-6">
              <SectionEyebrow>Venue</SectionEyebrow>
              <h3 className="text-display text-2xl mt-3">{event.venue}</h3>
              <p className="text-sm text-muted-foreground mt-1">{event.address}</p>
              <div className="mt-5 cinema-card aspect-video overflow-hidden">
                <iframe
                  title="Venue map"
                  src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
                  className="h-full w-full grayscale-[40%] contrast-110"
                  loading="lazy"
                />
              </div>
            </div>

            {!event.past && (
              <div className="cinema-card p-6">
                <SectionEyebrow>Tickets</SectionEyebrow>
                <p className="mt-3 text-sm text-muted-foreground">
                  This event is ticketed by <span className="text-foreground">{event.ticketPartner}</span>.
                  We do not process tickets on this site.
                </p>
                <a href={event.ticketUrl} target="_blank" rel="noreferrer" className="btn-hero mt-5 w-full">
                  Buy Tickets <ArrowUpRight size={14} />
                </a>
              </div>
            )}
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-20 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionEyebrow>You Might Also Like</SectionEyebrow>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((e) => (
                <Link
                  key={e.slug}
                  to="/events/$slug"
                  params={{ slug: e.slug }}
                  className="cinema-card group block aspect-[3/4] overflow-hidden relative"
                >
                  <img src={e.poster} alt={e.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-display text-xl">{e.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{e.date} · {e.city}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}

function Info({ icon: Icon, label, value }: { icon: typeof Calendar; label: string; value: string }) {
  return (
    <div className="border border-border rounded-2xl p-4 bg-card/40">
      <div className="flex items-center gap-2 text-[var(--gold)]">
        <Icon size={14} />
        <span className="text-[10px] tracking-[0.25em] uppercase font-button">{label}</span>
      </div>
      <div className="mt-2 font-button font-semibold text-foreground">{value}</div>
    </div>
  );
}