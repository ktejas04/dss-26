import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import eventsData from "@/data/events.json";

const Events = () => {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20 container mx-auto px-4">
        <div className="text-center mb-14">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            All <span className="gradient-text">Events</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the complete schedule for Data Science Summit 2026.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {eventsData.days.map((day) => (
            <div key={day.day}>
              <div className="flex items-center gap-4 mb-4">
                <h2 className="font-heading font-bold text-xl gradient-text">{day.day}</h2>
                <span className="text-sm text-muted-foreground">{day.date}</span>
                <div className="flex-1 h-px bg-border" />
              </div>

              <div className="space-y-3">
                {day.events.map((event) => {
                  const isExpanded = expandedId === event.id;
                  return (
                    <div
                      key={event.id}
                      className="gradient-border rounded-xl overflow-hidden card-hover"
                    >
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : event.id)}
                        className="w-full p-5 flex items-start gap-4 text-left"
                      >
                        <span className="text-accent font-heading font-semibold text-sm whitespace-nowrap mt-0.5">
                          {event.time}
                        </span>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-heading font-semibold text-foreground">{event.title}</h3>
                          <p className="text-xs text-muted-foreground mt-1">{event.venue}</p>
                        </div>
                        <ChevronDown
                          size={18}
                          className={`text-muted-foreground transition-transform shrink-0 mt-1 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isExpanded && (
                        <div className="px-5 pb-5 pt-0">
                          <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
                          <Button
                            asChild
                            size="sm"
                            className="gradient-bg text-primary-foreground rounded-lg hover:opacity-90"
                          >
                            <a href={event.registerUrl} target="_blank" rel="noopener noreferrer">
                              Register on Unstop
                            </a>
                          </Button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
