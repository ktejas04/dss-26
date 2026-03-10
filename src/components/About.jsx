import SectionWrapper from "@/components/SectionWrapper";

const About = () => {
  return (
    <SectionWrapper id="about">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            About <span className="gradient-text">Data Science Summit</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Data Science Summit is a flagship technical event that connects industry leaders,
            researchers, and students around innovations in artificial intelligence, machine
            learning, and data engineering.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Participants can attend expert talks, practical sessions, and networking activities
            designed to deepen knowledge and create impactful collaborations.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { value: "3", label: "Days" },
            { value: "10+", label: "Events" },
            { value: "500+", label: "Participants" },
            { value: "5+", label: "Speakers" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="gradient-border card-hover p-6 text-center rounded-xl"
            >
              <div className="font-heading font-bold text-3xl gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
