import { useState } from "react";
import Layout from "@/components/layout/Layout";
import portfolioPortrait from "@/assets/portfolio-portrait.jpg";
import portfolioWedding from "@/assets/portfolio-wedding.jpg";
import portfolioFashion from "@/assets/portfolio-fashion.jpg";
import portfolioEvents from "@/assets/portfolio-events.jpg";

const photographers = [
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    specialty: "Portraits",
    description: "Capturing the essence of personality through intimate portrait sessions.",
    image: portfolioPortrait,
    gallery: [portfolioPortrait, portfolioPortrait, portfolioPortrait, portfolioPortrait],
  },
  {
    id: "marcus-rivera",
    name: "Marcus Rivera",
    specialty: "Weddings",
    description: "Documenting love stories with timeless elegance and authentic emotion.",
    image: portfolioWedding,
    gallery: [portfolioWedding, portfolioWedding, portfolioWedding, portfolioWedding],
  },
  {
    id: "emma-noir",
    name: "Emma Noir",
    specialty: "Fashion",
    description: "Bold editorial vision meets high fashion in every frame.",
    image: portfolioFashion,
    gallery: [portfolioFashion, portfolioFashion, portfolioFashion, portfolioFashion],
  },
  {
    id: "alex-torres",
    name: "Alex Torres",
    specialty: "Events",
    description: "Capturing the energy and emotion of your most memorable occasions.",
    image: portfolioEvents,
    gallery: [portfolioEvents, portfolioEvents, portfolioEvents, portfolioEvents],
  },
];

const Portfolio = () => {
  const [activePhotographer, setActivePhotographer] = useState(photographers[0]);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-8 px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-body">
            Our Work
          </p>
          <h1 className="text-4xl md:text-6xl font-display font-light mb-4">
            <span className="italic">Portfolio</span>
          </h1>
          <p className="text-muted-foreground font-body max-w-xl">
            Explore the diverse styles and specialties of our talented photographers.
          </p>
        </div>
      </section>

      {/* Photographer Selection */}
      <section className="py-8 px-6 lg:px-12 border-y border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-4 md:gap-8">
            {photographers.map((photographer) => (
              <button
                key={photographer.id}
                onClick={() => setActivePhotographer(photographer)}
                className={`text-left transition-all duration-300 pb-2 font-display text-lg md:text-xl ${
                  activePhotographer.id === photographer.id
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground border-b-2 border-transparent"
                }`}
              >
                {photographer.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Photographer Section */}
      <section className="py-16 md:py-24 px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={activePhotographer.image}
                alt={activePhotographer.name}
                className="w-full h-full object-cover animate-scale-in"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm uppercase tracking-[0.3em] text-primary mb-2 font-body">
                {activePhotographer.specialty}
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-light mb-4">
                {activePhotographer.name}
              </h2>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                {activePhotographer.description}
              </p>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {activePhotographer.gallery.map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={image}
                  alt={`${activePhotographer.name} work ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
