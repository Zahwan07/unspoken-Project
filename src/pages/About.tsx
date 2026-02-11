import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/Hero-1.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Our studio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative z-10 text-center text-background px-6">
          <h1 className="text-4xl md:text-6xl font-display font-light animate-fade-in">
            About <span className="italic text-primary">Us</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32 px-6 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-body">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-light mb-6">
                More Than Just <span className="italic">Photography</span>
              </h2>
              <div className="space-y-4 text-muted-foreground font-body">
                <p>
                  The Unspoken Project was born from a simple belief: the most powerful 
                  stories are often the ones left unspoken. They exist in stolen glances, 
                  quiet moments, and the spaces between words.
                </p>
                <p>
                  Founded in 2020, we've grown from a small collective of passionate 
                  artists into a full-service photography studio, serving clients across 
                  the region with our distinctive blend of artistry and authenticity.
                </p>
                <p>
                  Each member of our team brings a unique perspective, united by our 
                  commitment to capturing the essence of every moment we're trusted to preserve.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-secondary overflow-hidden">
                <img
                  src={heroImage}
                  alt="Behind the scenes"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 px-6 lg:px-12 bg-gray-warm">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-body">
              What Drives Us
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-light">
              Our <span className="italic">Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Authenticity",
                description:
                  "We believe in capturing real moments, not staged perfection. Your story is unique, and we honor that.",
              },
              {
                title: "Artistry",
                description:
                  "Every frame is a canvas. We blend technical excellence with creative vision to create images that move you.",
              },
              {
                title: "Connection",
                description:
                  "Great photography comes from genuine connection. We take time to understand you and your vision.",
              },
            ].map((value, index) => (
              <div
                key={value.title}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-px bg-primary mx-auto mb-6" />
                <h3 className="text-xl font-display mb-4">{value.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </Layout>
  );
};

export default About;
