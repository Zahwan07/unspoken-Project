import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { initSmoothScroll, scrollToTop } from "@/lib/smooth";
import { SITE_HIBERNATING } from "@/data/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Pricing from "@/pages/Pricing";
import Portfolio from "@/pages/Portfolio";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import Hibernating from "@/pages/Hibernating";

function ScrollManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    scrollToTop(true);
  }, [pathname]);
  return null;
}

function App() {
  useEffect(() => {
    const lenis = initSmoothScroll();
    return () => lenis.destroy();
  }, []);

  // Hibernation mode — every route shows the "back soon" page (SITE_HIBERNATING in data/site.js)
  if (SITE_HIBERNATING) {
    return (
      <div className="min-h-screen bg-white font-body text-ink">
        <Hibernating />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <ScrollManager />
      <div className="min-h-screen bg-white font-body text-ink">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Navigate to="/gallery" replace />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
