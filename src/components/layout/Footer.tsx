import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-semibold mb-4">
              The <span className="text-primary">Unspoken</span> Project
            </h3>
            <p className="text-background/70 font-body text-sm leading-relaxed">
              Capturing moments that speak louder than words.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <div className="flex flex-col gap-2">
              {["Home", "About", "Portfolio", "Pricing", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <p className="text-background/70 text-sm mb-4">
              Ready to create something beautiful together?
            </p>
            <Link
              to="/contact"
              className="inline-block text-primary hover:text-primary/80 transition-colors text-sm font-medium"
            >
              Contact Us →
            </Link>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} The Unspoken Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
