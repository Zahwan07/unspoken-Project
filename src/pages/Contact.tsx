import { MessageCircle, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";

// Update this with your manager's WhatsApp number (including country code, no spaces or special characters)
const WHATSAPP_NUMBER = "+62 851-5692-4712"; // Example: Philippine number
const WHATSAPP_MESSAGE = "Hello! I'm interested in booking a photography session with The Unspoken Project.";

const Contact = () => {
const whatsappLink = `https://wa.me/6285156924712?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <Layout>
      {/* Hero */}
      <section className="min-h-[70vh] flex items-center justify-center px-6 lg:px-12">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-6 font-body animate-fade-in">
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-light mb-8 animate-fade-in">
            Let's Create Something <span className="italic text-primary">Beautiful</span>
          </h1>
          <p className="text-lg text-muted-foreground font-body mb-12 max-w-xl mx-auto animate-fade-in">
            Ready to book a session or have questions about our services? 
            Our team is here to help you every step of the way.
          </p>

          {/* WhatsApp Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-5 text-lg transition-all duration-300 hover-lift animate-scale-in"
          >
            <MessageCircle size={24} />
            <span className="font-body font-medium">Chat on WhatsApp</span>
            <ArrowRight size={20} />
          </a>

          <p className="mt-8 text-sm text-muted-foreground font-body animate-fade-in">
            Click to start a conversation with our booking manager
          </p>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-24 px-6 lg:px-12 bg-gray-warm">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-display mb-4">Response Time</h3>
              <p className="text-muted-foreground font-body text-sm">
                We typically respond within a few hours during business hours. 
                For urgent inquiries, WhatsApp is the fastest way to reach us.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-display mb-4">Booking Process</h3>
              <p className="text-muted-foreground font-body text-sm">
                After your initial inquiry, we'll discuss your vision, recommend 
                the perfect package, and schedule your session at a convenient time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );  
};

export default Contact;
