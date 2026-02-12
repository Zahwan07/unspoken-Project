import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Lightbox from "@/components/portfolio/Lightbox";
import portfolioZah from "@/assets/Zahwan-1.jpg";
import portfolioZah1 from "@/assets/Zahwan-2.jpg";
import portfolioZah2 from "@/assets/Zahwan-3.jpg";
import portfolioZah3 from "@/assets/Zahwan-4.jpg";
import portfolioZah4 from "@/assets/Zahwan-5.jpg";
import portfolioZah5 from "@/assets/Zahwan-6.jpg";
import portfolioZah6 from "@/assets/Zahwan-7.jpg";
import portfolioZah7 from "@/assets/Zahwan-8.jpg";
import portfolioZah8 from "@/assets/Zahwan-9.jpg";

//import portfolioTya from "@/assets/Tya-1.jpg";

import portfolioFadhlan from "@/assets/Fadhlan- (0).jpeg";
import portfolioFadhlan2 from "@/assets/Fadhlan- (1).jpg";
import portfolioFadhlan3 from "@/assets/Fadhlan- (2).jpg";
import portfolioFadhlan4 from "@/assets/Fadhlan- (3).jpg";
import portfolioFadhlan5 from "@/assets/Fadhlan- (4).jpg";
import portfolioFadhlan6 from "@/assets/Fadhlan- (5).jpg";
import portfolioFadhlan7 from "@/assets/Fadhlan- (6).jpg";
import portfolioFadhlan8 from "@/assets/Fadhlan- (7).jpg";
import portfolioFadhlan9 from "@/assets/Fadhlan- (8).jpg";


import portfolioZaki from "@/assets/Zaki-1.jpg";
import portfolioZaki2 from "@/assets/Zaki- (1).jpg";
import portfolioZaki3 from "@/assets/Zaki- (2).jpg";
import portfolioZaki4 from "@/assets/Zaki- (3).jpg";     
import portfolioZaki5 from "@/assets/Zaki- (4).jpg";
import portfolioZaki6 from "@/assets/Zaki- (5).jpg";
import portfolioZaki7 from "@/assets/Zaki- (6).jpg";
import portfolioZaki8 from "@/assets/Zaki- (7).jpg";
import portfolioZaki9 from "@/assets/Zaki- (8).jpg";


import portfolioBen from "@/assets/Ben-1.jpg";  
import portfolioBen1 from "@/assets/Ben-2.jpg";  
import portfolioBen2 from "@/assets/Ben-3.jpg";
import portfolioBen3 from "@/assets/Ben-4.jpg";
import portfolioBen4 from "@/assets/Ben-1.jpg";  
    

import portfolioWedding from "@/assets/Thumbnail1.png";
import portfolioFashion from "@/assets/Thumbnail2.png";
type VideoItem = {
  src: string;
  thumbnail: string;
  title?: string;
};
type Person = {
  id: string;
  name: string;
  specialty: string;
  description: string;
  image: string;
  photos: string[];
  videos?: VideoItem[];
};

const categories: { label: string; people: Person[] }[] = [
  {
    label: "Managers",
    people: [
      {
        id: "Athian",
        name: "Athian",
        specialty: "Landscape",
        description: "Capturing the beauty of nature and expansive outdoor scenes.",
        image: portfolioBen,
        photos: [portfolioBen1, portfolioBen2, portfolioBen3, portfolioBen4],
      },
      //{
       // id: "Tya",
       // name: "Tya",
       // specialty: "Social Manager",
       // description: "Ensuring every project runs smoothly from concept to delivery.",
       // image: portfolioTya,
       // photos: [],
    //  },
    ],
  },
  {
    label: "Photographers",
    people: [
      {
        id: "Fadhlan",
        name: "Fadhlan",
        specialty: "Portrait",
        description: "Specializing in capturing the beauty and emotion of individual and group portraits.",
        image: portfolioFadhlan,
        photos: [portfolioFadhlan2, portfolioFadhlan3, portfolioFadhlan4, portfolioFadhlan5, portfolioFadhlan6, portfolioFadhlan7, portfolioFadhlan8, portfolioFadhlan9],
      },
      {
        id: "Zaki",
        name: "Zaki",
        specialty: "Street Photography",
        description: "Finding beauty in everyday moments and urban landscapes.",
        image: portfolioZaki,
        photos: [portfolioZaki2, portfolioZaki3, portfolioZaki4, portfolioZaki5, portfolioZaki6, portfolioZaki7, portfolioZaki8, portfolioZaki9],
      },
      {
        id: "Zahwan",
        name: "Zahwan",
        specialty: "Video & Close ups",
        description: "Give him a pokemon pack and he will capture the best moments.",
        image: portfolioZah,
        photos: [,portfolioZah1, portfolioZah2, portfolioZah3, portfolioZah6, portfolioZah4, portfolioZah5, portfolioZah7, portfolioZah8],
        videos:  [
          { src: "https://www.youtube.com/embed/2ces_B4NsiM?si=XzontwDGneZIVyOd", thumbnail: portfolioWedding, title: "Kaleidoskop Teknik Informatika 2024" },
          { src: "https://www.youtube.com/embed/wp_jm3ELrJk?si=nI4SnTBTIj4bwY4S" , thumbnail: portfolioFashion, title: "Kaleidoskop Teknik Informatika 2025" },

        ],
      },
    ],
  },
];

const Portfolio = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activePersonIndex, setActivePersonIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeMediaTab, setActiveMediaTab] = useState<"photos" | "videos">("photos");
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);

  const activeCategory = categories[activeCategoryIndex];
  const activePerson = activeCategory.people[activePersonIndex];
  const hasVideos = activePerson.videos && activePerson.videos.length > 0;

  const handleCategoryChange = (index: number) => {
    setActiveCategoryIndex(index);
    setActivePersonIndex(0);
    setActiveMediaTab("photos");
    setActiveVideoIndex(null);
  };

  const handlePersonChange = (index: number) => {
    setActivePersonIndex(index);
    setActiveMediaTab("photos");
    setActiveVideoIndex(null);
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
      <section className="py-6 px-6 lg:px-12 border-b border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-4 md:gap-8">
            {activeCategory.people.map((person, i) => (
              <button
                key={person.id}
                onClick={() => handlePersonChange(i)}
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

          {/* Media Tab Toggle (only if person has videos) */}
          {hasVideos && (
            <div className="flex gap-6 mb-8 border-b border-border">
              <button
                onClick={() => setActiveMediaTab("photos")}
                className={`pb-3 text-sm uppercase tracking-[0.2em] font-body transition-all border-b-2 ${
                  activeMediaTab === "photos"
                    ? "text-primary border-primary"
                    : "text-muted-foreground hover:text-foreground border-transparent"
                }`}
              >
                Photos
              </button>
              <button
                onClick={() => { setActiveMediaTab("videos"); setActiveVideoIndex(null); }}
                className={`pb-3 text-sm uppercase tracking-[0.2em] font-body transition-all border-b-2 ${
                  activeMediaTab === "videos"
                    ? "text-primary border-primary"
                    : "text-muted-foreground hover:text-foreground border-transparent"
                }`}
              >
                Videos
              </button>
            </div>
          )}

          {/* Photos Grid */}
          {activeMediaTab === "photos" && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {activePerson.photos.map((src, index) => (
                <div
                  key={index}
                  onClick={() => setLightboxIndex(index)}
                  className="aspect-square overflow-hidden group cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={src}
                    alt={`${activePerson.name} work ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Videos Grid */}
          {activeMediaTab === "videos" && activePerson.videos && (
            <div className="space-y-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {activePerson.videos.map((video, index) => (
                  <div
                  key={index}
                  onClick={() => setActiveVideoIndex(index)}
                  className={`cursor-pointer animate-fade-in group relative ${
                    activeVideoIndex === index ? "ring-2 ring-primary" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  >
                   <div className="aspect-video overflow-hidden bg-transparent">
                      <img
                        src={video.thumbnail}
                        alt={video.title || `Video ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-md">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-black border-b-[10px] border-b-transparent ml-1" />
                    </div>
                  </div>
                   {video.title && (
                <p className="mt-2 text-sm text-center font-bold w-full block">
                  {video.title}
                </p>
)}
                  </div>
                ))}
              </div>

              {/* Video Player */}
              {activeVideoIndex !== null && activePerson.videos[activeVideoIndex] && (
                <div className="animate-fade-in">
                  <div className="aspect-video w-full max-w-4xl mx-auto">
                    <iframe
                      src={activePerson.videos[activeVideoIndex].src}
                      title={activePerson.videos[activeVideoIndex].title || "Video"}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox (photos only) */}
      {lightboxIndex !== null && activeMediaTab === "photos" && (
        <Lightbox
          items={activePerson.photos.map(src => ({ type: "image" as const, src }))}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </Layout>
  );
};

export default Portfolio;