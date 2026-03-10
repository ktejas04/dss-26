import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import teamData from "@/data/team.json";

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20 container mx-auto px-4">
        <div className="text-center mb-14">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Our <span className="gradient-text">Team</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the contributors and mentors behind Data Science Summit 2026.
          </p>
        </div>

        {teamData.categories.map((category) => (
          <div key={category.title} className="mb-16 last:mb-0">
            <h2 className="font-heading font-bold text-2xl text-center mb-8">{category.title}</h2>
            <div
              className={`grid gap-6 max-w-5xl mx-auto ${
                category.members.length === 1
                  ? "grid-cols-1 max-w-xs"
                  : category.members.length === 2
                    ? "grid-cols-2 max-w-md"
                    : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              } justify-items-center mx-auto`}
            >
              {category.members.map((member) => (
                <div
                  key={member.name}
                  className="gradient-border card-hover rounded-2xl p-6 text-center w-full"
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 ring-2 ring-border">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-accent">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Team;
