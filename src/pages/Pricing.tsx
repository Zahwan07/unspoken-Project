import { useRef } from "react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Easily add/remove pricing packages here
const pricingPackages = [
  {
    id: "basic",
    name: "Essential",
    price: "₱15,000",
    description: "Perfect for small sessions and personal projects",
    features: [
      "2-hour session",
      "1 location",
      "30 edited photos",
      "Online gallery",
      "Print-ready files",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    price: "₱25,000",
    description: "Our most popular package for memorable occasions",
    features: [
      "4-hour session",
      "2 locations",
      "75 edited photos",
      "Online gallery",
      "Print-ready files",
      "1 photographer",
    ],
    popular: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: "₱45,000",
    description: "Comprehensive coverage for your special moments",
    features: [
      "Full day coverage",
      "Unlimited locations",
      "150+ edited photos",
      "Online gallery",
      "Print-ready files",
      "2 photographers",
      "Same-day preview",
    ],
  },
  {
    id: "wedding",
    name: "Wedding",
    price: "₱85,000",
    description: "Complete wedding documentation package",
    features: [
      "12-hour coverage",
      "Engagement session",
      "300+ edited photos",
      "Premium album",
      "Online gallery",
      "2 photographers",
      "Same-day preview",
      "Highlight video",
    ],
  },
  {
    id: "corporate",
    name: "Corporate",
    price: "Custom",
    description: "Tailored solutions for business needs",
    features: [
      "Flexible duration",
      "Multiple sessions",
      "Commercial license",
      "Team headshots",
      "Event coverage",
      "Quick turnaround",
      "Brand guidelines",
    ],
  },
];

const Pricing = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-8 px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-body">
            Investment
          </p>
          <h1 className="text-4xl md:text-6xl font-display font-light mb-4">
            <span className="italic">Pricing</span>
          </h1>
          <p className="text-muted-foreground font-body max-w-xl">
            Transparent pricing for every occasion. Choose the package that best fits your needs.
          </p>
        </div>
      </section>

      {/* Pricing Carousel */}
      <section className="py-16 md:py-24 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {pricingPackages.map((pkg) => (
                <CarouselItem
                  key={pkg.id}
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div
                    className={`relative h-full p-8 border transition-all duration-300 hover-lift ${
                      pkg.popular
                        ? "border-primary bg-red-light"
                        : "border-border bg-background hover:border-primary/50"
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-8 bg-primary text-primary-foreground px-4 py-1 text-xs uppercase tracking-wider font-body">
                        Most Popular
                      </div>
                    )}

                    <div className="mb-6">
                      <h3 className="text-2xl font-display mb-2">{pkg.name}</h3>
                      <p className="text-sm text-muted-foreground font-body">
                        {pkg.description}
                      </p>
                    </div>

                    <div className="mb-8">
                      <span className="text-4xl font-display">{pkg.price}</span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-sm font-body"
                        >
                          <Check
                            size={16}
                            className="text-primary flex-shrink-0"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className={`block w-full py-3 text-center text-sm uppercase tracking-wider font-body transition-all duration-300 ${
                        pkg.popular
                          ? "bg-primary text-primary-foreground hover:bg-red-deep"
                          : "bg-foreground text-background hover:bg-foreground/90"
                      }`}
                    >
                      Book Now
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-background border-border hover:bg-secondary hover:border-primary" />
              <CarouselNext className="static translate-y-0 bg-background border-border hover:bg-secondary hover:border-primary" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Custom Quote CTA */}
      <section className="py-16 md:py-24 px-6 lg:px-12 bg-gray-warm">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-display font-light mb-6">
            Need Something <span className="italic text-primary">Custom</span>?
          </h2>
          <p className="text-muted-foreground font-body mb-8">
            Every project is unique. Contact us for a personalized quote tailored to your specific needs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 text-sm uppercase tracking-wider font-body transition-all duration-300 hover:bg-red-deep hover-lift"
          >
            Get Custom Quote
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
