import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import showcaseimage1 from "@/assets/showcase1.jpg";
import showcaseimage2 from "@/assets/showcase2.jpg";
import showcaseimage4 from "@/assets/showcase4.jpg";
import showcaseimage5 from "@/assets/showcase5.jpg";
import showcaseimage8 from "@/assets/showcase8.jpg";
import showcaseimage10 from "@/assets/showcase10.jpg";

import portfolioZah from "@/assets/Zahwan-1.jpg";
//import portfolioTya from "@/assets/Ben-1.jpg";
import portfolioFadhlan from "@/assets//Fadhlan- (0).jpeg";
import portfolioZaki from "@/assets/Zaki-1.jpg";
import portfolioBen from "@/assets/Ben-1.jpg";

const categories = [
  { name: "Athian", image: portfolioBen, photographer: "Manager" },
  //{ name: "Tya", image: portfolioTya, photographer: "Social Media Manager" },
  { name: "Fadhlan", image: portfolioFadhlan, photographer: "Photographer 1" },
  { name: "Zaki", image: portfolioZaki, photographer: "Photographer 2" },
  { name: "Zahwan", image: portfolioZah, photographer: "Photographer 3" },
];

const heroImages = [showcaseimage10, showcaseimage2, showcaseimage4, showcaseimage5, showcaseimage8, showcaseimage1];

const Index = () => {
  const [currentHero, setCurrentHero] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentHero((prev) => (prev + 1) % heroImages.length);
        setFade(true);
      }, 1200);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImages[currentHero]}
            alt="Photography studio"
            className={`w-full h-full object-cover transition-opacity duration-700 ${fade ? "opacity-100" : "opacity-0"}`}
          />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
        
        <div className="relative z-10 text-center text-background px-6 animate-fade-in">
          <p className="text-sm uppercase tracking-[0.3em] mb-4 font-body">
            Photography Studio
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light mb-6 leading-tight">
            The <span className="italic text-primary">Unspoken</span> Project
          </h1>
          <p className="text-lg md:text-xl font-body font-light max-w-xl mx-auto mb-10 text-background/90">
            Where graduation meets perfection
          </p>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-3 bg-primary hover:bg-red-deep text-primary-foreground px-8 py-4 text-sm uppercase tracking-wider transition-all duration-300 hover-lift font-body"
          >
            View Our Work
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 md:py-32 px-6 lg:px-12">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-display font-light mb-8 animate-fade-in">
            Where Vision Meets <span className="italic text-primary">Artistry</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed">
            Karena setiap momen memiliki cerita yang tak terucap. Lewat lensa dan desain, 
            kami hadir untuk mengabadikan esensi terdalam dari setiap detail, 
            memastikan pesan Anda tersampaikan dengan indah melalui karya visual yang berjiwa.
          </p>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 md:py-24 bg-gray-warm">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-light">
              Our <span className="italic text-primary">Expertise</span>
            </h2>
            <Link
              to="/portfolio"
              className="text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors line-reveal font-body"
            >
              View All
            </Link>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">  {/* jadiin cols-5 kalo tya jadi */}
            {categories.map((category, index) => (
              <Link
                key={category.name}
                to={`/portfolio?category=${category.name.toLowerCase()}`}
                className="group relative aspect-[3/4] overflow-hidden hover-lift"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs uppercase tracking-wider text-background/70 mb-1 font-body">
                    {category.photographer}
                  </p>
                  <h3 className="text-2xl font-display text-background">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6 lg:px-12 bg-foreground text-background">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-display font-light mb-6 animate-fade-in">
            Siap Menciptakan Sesuatu yang <span className="italic text-primary"> Berkesan</span>?
          </h2>
          <p className="text-lg text-background/70 mb-10 font-body">
           Mulai perjalanan anda bersama kami dan biarkan karya bicara lebih lantang dari kata-kata.          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-primary hover:bg-red-deep text-primary-foreground px-8 py-4 text-sm uppercase tracking-wider transition-all duration-300 hover-lift font-body"
          >
            Get in Touch
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;