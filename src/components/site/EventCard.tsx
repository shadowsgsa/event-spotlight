import { Link } from "@tanstack/react-router";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";
import type { EventItem } from "@/data/events";

export function EventCard({ event }: { event: EventItem }) {
  return (
    <Link
      to="/events/$slug"
      params={{ slug: event.slug }}
      className="cinema-card group flex flex-col"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={event.poster}
          alt={event.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase font-button font-semibold bg-background/70 backdrop-blur border border-[var(--gold)]/40 text-[var(--gold)]">
            {event.category}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="text-display text-2xl text-foreground leading-tight">{event.title}</h3>
          <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{event.tagline}</p>
        </div>
      </div>
      <div className="p-5 space-y-3 flex-1 flex flex-col">
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar size={14} className="text-[var(--gold)]" />
            <span>{event.date} · {event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin size={14} className="text-[var(--gold)]" />
            <span className="line-clamp-1">{event.venue} · {event.city}</span>
          </div>
        </div>
        <div className="flex-1" />
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <span className="text-xs tracking-widest uppercase font-button text-muted-foreground">
            {event.past ? "Past Event" : `Tickets · ${event.ticketPartner}`}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-button font-semibold tracking-widest uppercase text-[var(--gold)] group-hover:text-foreground transition-colors">
            View <ArrowUpRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}