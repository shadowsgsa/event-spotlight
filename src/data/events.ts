import luckyAliDinner from "@/assets/images/lucky-ali-dinner.png";
import luckyAliDallas from "@/assets/images/lucky-ali-dallas.png";
import badBoys from "@/assets/images/bad-boys.png";
import lakhwinderWadali from "@/assets/images/lakhwinder-wadali.png";
import satinderSartaaj from "@/assets/images/satinder-sartaaj.png";
import jaanePehchaaneAnjane from "@/assets/images/jaane-pehchaane-anjane.png";
import bollywoodNight from "@/assets/event-bollywood-night.jpg";
import culturalFest from "@/assets/event-cultural-fest.jpg";
import redCarpet from "@/assets/event-red-carpet.jpg";
import corporateGala from "@/assets/event-corporate-gala.jpg";
import diwaliNight from "@/assets/event-diwali-night.jpg";
import comedyNight from "@/assets/event-comedy-night.jpg";

export type EventCategory =
  | "Concerts"
  | "Meet & Greets"
  | "Festivals"
  | "Corporate"
  | "Community Events";

export interface EventItem {
  slug: string;
  title: string;
  tagline: string;
  category: EventCategory;
  date: string;       // human readable
  isoDate: string;    // YYYY-MM-DD for filtering
  time: string;
  venue: string;
  address: string;
  city: string;
  poster: string;
  description: string;
  artists: string[];
  ticketUrl: string;
  ticketPartner: string;
  featured?: boolean;
  past?: boolean;
  stats?: { label: string; value: string }[];
  gallery?: string[];
}

export const events: EventItem[] = [
  {
    slug: "lakhwinder-wadali-rangrez-tour",
    title: "Lakhwinder Wadali — Live in Concert",
    tagline: "Rangrez · The Wadali Legacy Tour USA",
    category: "Concerts",
    date: "August 7, 2026",
    isoDate: "2026-08-07",
    time: "7:00 PM",
    venue: "Grand Center",
    address: "300 Chisholm Pl, Plano, TX 75075",
    city: "Plano, TX",
    poster: lakhwinderWadali,
    description:
      "Experience the soulful Sufi legacy live on stage — Lakhwinder Wadali brings the Rangrez tour to Dallas as part of The Wadali Legacy Tour USA. An unforgettable evening of classical Sufi music produced by 24 Seven Entertainment with Mera Box Office, Prabha Entertainment and Global R Entertainment.",
    artists: ["Lakhwinder Wadali"],
    ticketUrl: "https://meraboxoffice.com",
    ticketPartner: "MeraBoxOffice",
    featured: true,
    gallery: [bollywoodNight, culturalFest],
  },
  {
    slug: "satinder-sartaaj-heritage-tour-dallas",
    title: "Dr. Satinder Sartaaj — Heritage Tour",
    tagline: "Live in Dallas",
    category: "Concerts",
    date: "July 5, 2026",
    isoDate: "2026-07-05",
    time: "7:00 PM",
    venue: "AT&T Performing Arts Center",
    address: "2403 Flora St, Dallas, TX 75201",
    city: "Dallas, TX",
    poster: satinderSartaaj,
    description:
      "Dr. Satinder Sartaaj brings his Heritage Tour to Dallas — a poetic evening of Sufi music and Punjabi cultural heritage at the iconic AT&T Performing Arts Center. Presented by Mera Box Office and 24 Seven Entertainment.",
    artists: ["Dr. Satinder Sartaaj"],
    ticketUrl: "https://satindersartaaj.com/shows",
    ticketPartner: "SatinderSartaaj.com",
    featured: true,
    gallery: [bollywoodNight, redCarpet],
  },
  {
    slug: "jaane-pehchaane-anjane-labor-day",
    title: "Jaane Pehchaane Anjane",
    tagline: "A Labor Day holiday play starring Anupam Kher & Swaroop Sampat",
    category: "Meet & Greets",
    date: "September 7, 2026",
    isoDate: "2026-09-07",
    time: "8:00 PM Onwards",
    venue: "Charles W. Eisemann Center",
    address: "2351 Performance Dr, Richardson, TX 75082",
    city: "Richardson, TX",
    poster: jaanePehchaaneAnjane,
    description:
      "A Hindi stage play directed by Gajendra Ahire with music by Anu Malik, starring Anupam Kher and Swaroop Sampat. A Labor Day holiday special evening of theatre presented by Mera Box Office and 24 Seven Entertainment.",
    artists: ["Anupam Kher", "Swaroop Sampat"],
    ticketUrl: "https://www.eisemanncenter.com",
    ticketPartner: "Eisemann Center",
    featured: true,
    gallery: [redCarpet, corporateGala],
  },
  {
    slug: "lucky-ali-up-close-personal",
    title: "Lucky Ali — Up Close & Personal",
    tagline: "A premium dinner & conversation experience",
    category: "Concerts",
    date: "May 5, 2026",
    isoDate: "2026-05-05",
    time: "7:30 PM Onwards",
    venue: "The Meridian",
    address: "351 Southwind Lane, Fairview, TX 75069",
    city: "Fairview, TX",
    poster: luckyAliDinner,
    description:
      "An intimate evening with the legendary Lucky Ali — featuring a curated dinner, live acoustic performance and a conversation with the artist himself. Limited VIP meet & greet seats available.",
    artists: ["Lucky Ali"],
    ticketUrl: "https://meraboxoffice.com",
    ticketPartner: "MeraBoxOffice",
    featured: true,
    gallery: [bollywoodNight, redCarpet, corporateGala],
  },
  {
    slug: "lucky-ali-live-dallas",
    title: "Lucky Ali — Live in Dallas",
    tagline: "Journey Through The Decades Tour",
    category: "Concerts",
    date: "May 3, 2026",
    isoDate: "2026-05-03",
    time: "8:00 PM",
    venue: "Grand Center",
    address: "300 Chisholm Pl, Plano, TX 75075",
    city: "Plano, TX",
    poster: luckyAliDallas,
    description:
      "First time in history — live in USA. Witness the songs that defined a generation, sung right in front of you on the Journey Through The Decades Tour.",
    artists: ["Lucky Ali"],
    ticketUrl: "https://www.sulekha.com",
    ticketPartner: "Sulekha",
    featured: true,
    gallery: [bollywoodNight, redCarpet],
  },
  {
    slug: "bad-boys-legends-of-bollywood",
    title: "Bad Boys — Legends of Bollywood",
    tagline: "1st time on USA tour",
    category: "Meet & Greets",
    date: "April 18, 2026",
    isoDate: "2026-04-18",
    time: "7:00 PM",
    venue: "Curtis Culwell Center",
    address: "4999 Naaman Forest Blvd, Garland, TX",
    city: "Garland, TX",
    poster: badBoys,
    description:
      "Chunky Panday, Shakti Kapoor and Gulshan Grover — the original Bollywood Bad Boys — together on stage for an unforgettable night of stories, music and live entertainment.",
    artists: ["Chunky Panday", "Shakti Kapoor", "Gulshan Grover"],
    ticketUrl: "https://www.eventbrite.com",
    ticketPartner: "Eventbrite",
    featured: true,
    gallery: [redCarpet, bollywoodNight, corporateGala],
  },
  {
    slug: "diwali-night-2026",
    title: "Diwali Night 2026",
    tagline: "A festival of lights, music and community",
    category: "Community Events",
    date: "November 7, 2026",
    isoDate: "2026-11-07",
    time: "6:00 PM",
    venue: "Frisco Star Plaza",
    address: "9 Cowboys Way, Frisco, TX",
    city: "Frisco, TX",
    poster: diwaliNight,
    description:
      "Celebrate Diwali with thousands of families — live music, dance, fireworks, food stalls and a kids zone. Free entry for the community.",
    artists: ["Various Artists"],
    ticketUrl: "https://www.sulekha.com",
    ticketPartner: "Sulekha",
  },
  {
    slug: "classical-fusion-night",
    title: "Classical Fusion Night",
    tagline: "Where heritage meets the modern stage",
    category: "Festivals",
    date: "August 22, 2026",
    isoDate: "2026-08-22",
    time: "7:30 PM",
    venue: "Eisemann Center",
    address: "2351 Performance Dr, Richardson, TX",
    city: "Richardson, TX",
    poster: culturalFest,
    description:
      "A curated evening blending Bharatanatyam, sitar, tabla and contemporary electronic production — a one-night cultural showcase.",
    artists: ["Anoushka Roy", "Ravi Suresh Trio"],
    ticketUrl: "https://www.ticketmaster.com",
    ticketPartner: "Ticketmaster",
  },
  {
    slug: "corporate-summit-gala-2026",
    title: "Founders Gala 2026",
    tagline: "An exclusive corporate networking evening",
    category: "Corporate",
    date: "September 12, 2026",
    isoDate: "2026-09-12",
    time: "6:30 PM",
    venue: "Ritz-Carlton Dallas",
    address: "2121 McKinney Ave, Dallas, TX",
    city: "Dallas, TX",
    poster: corporateGala,
    description:
      "A premium black-tie dinner, keynote and live entertainment evening produced for industry leaders, founders and investors.",
    artists: ["Live Jazz Ensemble"],
    ticketUrl: "https://meraboxoffice.com",
    ticketPartner: "MeraBoxOffice",
  },
  {
    slug: "comedy-masala-tour",
    title: "Comedy Masala Tour",
    tagline: "A night of laughter you won't forget",
    category: "Concerts",
    date: "July 19, 2026",
    isoDate: "2026-07-19",
    time: "8:30 PM",
    venue: "Addison Improv",
    address: "4980 Belt Line Rd, Dallas, TX",
    city: "Dallas, TX",
    poster: comedyNight,
    description:
      "Three headline comedians, one stage. A South-Asian-meets-Americana stand-up showcase you can't see anywhere else this year.",
    artists: ["Headliner A", "Headliner B", "Headliner C"],
    ticketUrl: "https://www.eventbrite.com",
    ticketPartner: "Eventbrite",
  },

  // Past events
  {
    slug: "bollywood-legends-tour-2025",
    title: "Bollywood Legends Tour 2025",
    tagline: "The night that lit up three cities",
    category: "Concerts",
    date: "October 12, 2025",
    isoDate: "2025-10-12",
    time: "8:00 PM",
    venue: "American Airlines Center",
    address: "Dallas, TX",
    city: "Dallas, TX",
    poster: bollywoodNight,
    description:
      "A sold-out three-city tour featuring some of the most iconic voices of Bollywood, produced and promoted by 24 Seven Event.",
    artists: ["Featured Artists"],
    ticketUrl: "#",
    ticketPartner: "Past Event",
    past: true,
    stats: [
      { label: "Attendees", value: "5,000+" },
      { label: "Cities", value: "3" },
      { label: "Sold Out", value: "Yes" },
    ],
    gallery: [bollywoodNight, redCarpet, corporateGala],
  },
  {
    slug: "celebrity-meet-greet-2025",
    title: "Red Carpet Celebrity Night 2025",
    tagline: "An evening with the stars",
    category: "Meet & Greets",
    date: "March 8, 2025",
    isoDate: "2025-03-08",
    time: "7:00 PM",
    venue: "Four Seasons Resort",
    address: "Las Colinas, TX",
    city: "Irving, TX",
    poster: redCarpet,
    description:
      "Intimate red carpet evening with international celebrities, exclusive interviews and curated dinner experience.",
    artists: ["International Guests"],
    ticketUrl: "#",
    ticketPartner: "Past Event",
    past: true,
    stats: [
      { label: "Guests", value: "350" },
      { label: "Sponsors", value: "12" },
      { label: "Press", value: "20+" },
    ],
    gallery: [redCarpet, corporateGala],
  },
];

export const upcomingEvents = events.filter((e) => !e.past);
export const pastEvents = events.filter((e) => e.past);
export const featuredEvents = events.filter((e) => e.featured && !e.past);

export function getEventBySlug(slug: string): EventItem | undefined {
  return events.find((e) => e.slug === slug);
}

export const eventCategories: EventCategory[] = [
  "Concerts",
  "Meet & Greets",
  "Festivals",
  "Corporate",
  "Community Events",
];