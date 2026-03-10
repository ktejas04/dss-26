import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            Back To Top
          </button>

          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a
              href="mailto:sds@bitmesra.ac.in"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Email"
            >
              Email
            </a>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            Copyright 2026. Society for Data Science, BIT Mesra.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
