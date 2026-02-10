import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Lightbox from "@/components/portfolio/Lightbox";
import portfolioPortrait from "@/assets/portfolio-portrait.jpg";
import portfolioWedding from "@/assets/portfolio-wedding.jpg";
import portfolioFashion from "@/assets/portfolio-fashion.jpg";
//import portfolioEvent1 from "@/assets/Hero-1.jpg";
//import portfolioEvent2 from "@/assets/Hero-1.jpg";
//import portfolioEvent3 from "@/assets/portfolio-events.jpg";
//import portfolioEvent4 from "@/assets/Zahwan-1.jpg";
//import portfolioEvent5 from "@/assets/portfolio-events.jpg";
//import portfolioEvent6 from "@/assets/Zahwan-1.jpg";
//import portfolioEvent7 from "@/assets/portfolio-events.jpg";
//import portfolioEvent8 from "@/assets/Zahwan-1.jpg";
//import portfolioEvent9 from "@/assets/Zahwan-1.jpg";
type Person = {
  id: string;
  name: string;
  specialty: string;
  description: string;
  image: string;
  gallery: string[];
};

const categories: { label: string; people: Person[] }[] = [
  {
    label: "Managers",
    people: [
      {
        id: "Athian",
        name: "Athian",
        specialty: "Portraits",
        description: "Capturing the essence of personality through intimate portrait sessions.",
        image: portfolioPortrait,
        gallery: [portfolioPortrait, portfolioWedding, portfolioFashion],
      },
      {
        id: "Tya",
        name: "Tya",
        specialty: "Social Manager",
        description: "Ensuring every project runs smoothly from concept to delivery.",
        image: portfolioWedding,
        gallery: [portfolioWedding, portfolioPortrait, portfolioFashion],
      },
    ],
  },
  {
    label: "Photographers",
    people: [
      {
        id: "emma-noir",
        name: "Emma Noir",
        specialty: "Fashion",
        description: "Bold editorial vision meets high fashion in every frame.",
        image: portfolioFashion,
        gallery: [portfolioFashion, portfolioPortrait, portfolioWedding],
      },
      {
        id: "alex-torres",
        name: "Alex Torres",
        specialty: "Events",
        description: "Capturing the energy and emotion of your most memorable occasions.",
        image: portfolioPortrait,
        gallery: [portfolioPortrait, portfolioWedding, portfolioFashion],
      },
      {
        id: "jordan-lee",
        name: "Jordan Lee",
        specialty: "Portraits",
        description: "Capturing the essence of personality through intimate portrait sessions.",
        image: portfolioPortrait,
        gallery: [portfolioPortrait, portfolioWedding, portfolioFashion],
      },
    ],
  },
];

const Portfolio = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activePersonIndex, setActivePersonIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const activeCategory = categories[activeCategoryIndex];
  const activePerson = activeCategory.people[activePersonIndex];

  const handleCategoryChange = (index: number) => {
    setActiveCategoryIndex(index);
    setActivePersonIndex(0);
  };

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
            Explore the diverse styles and specialties of our talented team.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="px-6 lg:px-12 border-b border-border">
        <div className="container mx-auto max-w-6xl flex gap-6">
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => handleCategoryChange(i)}
              className={`py-4 text-sm uppercase tracking-[0.2em] font-body transition-all border-b-2 ${
                activeCategoryIndex === i
                  ? "text-primary border-primary"
                  : "text-muted-foreground hover:text-foreground border-transparent"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Person Selection */}
     {/* Person Selection */}
<section className="py-6 px-6 lg:px-12 border-b border-border">
  <div className="container mx-auto max-w-6xl">
    <div className="flex flex-wrap gap-4 md:gap-8">
      {activeCategory.people.map((person, i) => (
        <button
          key={person.id}
          onClick={() => setActivePersonIndex(i)}
          className={`text-left transition-all duration-300 pb-2 font-display text-lg md:text-xl ${
            activePersonIndex === i
              ? "text-primary border-b-2 border-primary"
              : "text-muted-foreground hover:text-foreground border-b-2 border-transparent"
          }`}
        >
          {person.name}
        </button>
      ))}
    </div>
  </div>
</section>


      {/* Active Person Section */}
      <section className="py-16 md:py-24 px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={activePerson.image}
                alt={activePerson.name}
                className="w-full h-full object-cover animate-scale-in"
                key={activePerson.id}
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm uppercase tracking-[0.3em] text-primary mb-2 font-body">
                {activePerson.specialty}
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-light mb-4">
                {activePerson.name}
              </h2>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                {activePerson.description}
              </p>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {activePerson.gallery.map((image, index) => (
              <div
                key={index}
                onClick={() => setLightboxIndex(index)}
                className="aspect-square overflow-hidden group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={image}
                  alt={`${activePerson.name} work ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={activePerson.gallery}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </Layout>
  );
};

export default Portfolio;