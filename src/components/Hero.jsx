import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb-1 absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-purple/30 blur-[120px]" />
        <div className="orb-2 absolute top-1/3 right-1/4 w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-magenta/25 blur-[120px]" />
        <div className="orb-3 absolute bottom-1/4 left-1/2 w-56 h-56 md:w-72 md:h-72 rounded-full bg-accent-cyan/15 blur-[120px]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <Badge className="mb-6 bg-secondary text-accent border-accent/30 font-sans text-xs tracking-wider uppercase">
          Event Live
        </Badge>

        <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] mb-6">
          <span className="gradient-text">Data Science</span>
          <br />
          <span className="text-foreground">Summit '26</span>
        </h1>

        <p className="font-heading text-xl md:text-2xl text-muted-foreground mb-3 tracking-wide">
          Explore. Learn. Network.
        </p>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed text-sm md:text-base">
          Welcome to Data Science Summit 2026. Discover emerging trends in AI, machine
          learning, and analytics through expert talks, engaging events, and collaborative
          learning experiences.
        </p>

        <p className="text-accent font-heading font-semibold text-lg mb-8">
          2026 | BIT Mesra
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button className="gradient-bg text-primary-foreground px-8 py-3 h-auto text-base rounded-xl hover:opacity-90 transition-opacity">
            Register Now
          </Button>
          <Button
            variant="outline"
            className="border-border px-8 py-3 h-auto text-base rounded-xl hover:bg-secondary"
          >
            Download Brochure
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
