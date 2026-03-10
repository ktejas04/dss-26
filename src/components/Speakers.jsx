import SectionWrapper from "@/components/SectionWrapper";
import speakersData from "@/data/speakers.json";

const Speakers = () => {
  return (
    <SectionWrapper id="speakers">
      <div className="text-center mb-14">
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
          Meet our <span className="gradient-text">Speakers</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A lineup of experts and practitioners sharing practical insights from industry and
          research.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {speakersData.map((speaker) => (
          <div
            key={speaker.id}
            className="gradient-border card-hover rounded-2xl overflow-hidden group"
          >
            <div className="p-6 flex flex-col items-center text-center">
              <div className="w-28 h-28 rounded-full overflow-hidden mb-5 ring-2 ring-border group-hover:ring-primary/50 transition-all">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground">{speaker.name}</h3>
              <p className="text-accent text-sm font-medium mb-1">{speaker.organization}</p>
              <p className="text-xs text-muted-foreground mb-3">{speaker.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{speaker.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Speakers;
