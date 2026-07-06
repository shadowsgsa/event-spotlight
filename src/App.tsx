import { Routes, Route } from "react-router-dom";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Gallery from "@/pages/Gallery";
import Sponsors from "@/pages/Sponsors";
import EventsIndex from "@/pages/EventsIndex";
import EventDetail from "@/pages/EventDetail";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <>
      <SiteNav />
      <main className="min-h-screen pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/events" element={<EventsIndex />} />
          <Route path="/events/:slug" element={<EventDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  );
}