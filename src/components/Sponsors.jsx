import SectionWrapper from "@/components/SectionWrapper";
import sponsorsData from "@/data/sponsors.json";

const Sponsors = () => {
  return (
    <SectionWrapper id="sponsors">
      <div className="text-center mb-14">
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
          Meet Our <span className="gradient-text">Sponsors</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We are proud to partner with organizations that support learning, innovation, and
          community growth.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {sponsorsData.map((sponsor) => (
          <a
            key={sponsor.name}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-border card-hover rounded-xl p-8 flex items-center justify-center group"
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="h-8 md:h-10 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Sponsors;
