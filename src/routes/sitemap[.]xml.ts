import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { events } from "@/data/events";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = ["/", "/events", "/gallery", "/about", "/sponsors", "/contact"];
        const entries = [
          ...staticPaths.map((p) => ({ path: p, changefreq: "weekly", priority: "0.9" })),
          ...events.map((e) => ({ path: `/events/${e.slug}`, changefreq: "weekly", priority: "0.7" })),
        ];

        const urls = entries.map((e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`);
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});