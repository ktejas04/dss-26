import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import eventsData from "@/data/events.json";

const Timeline = () => {
  const [activeDay, setActiveDay] = useState(0);
  const [expandedId, setExpandedId] = useState(null);

  const days = eventsData.days;

  return (
    <SectionWrapper id="timeline">
      <div className="text-center mb-14">
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
          Event <span className="gradient-text">Timeline</span>
        </h2>
      </div>

      <div className="flex justify-center gap-2 mb-10 flex-wrap">
        {days.map((day, i) => (
          <button
            key={day.day}
            onClick={() => {
              setActiveDay(i);
              setExpandedId(null);
            }}
            className={`px-6 py-3 rounded-xl font-heading font-semibold text-sm transition-all ${
              activeDay === i
                ? "gradient-bg text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            {day.day}
            <span className="block text-xs font-normal opacity-75">{day.date}</span>
          </button>
        ))}
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {days[activeDay].events.map((event) => {
          const isExpanded = expandedId === event.id;
          return (
            <div key={event.id} className="gradient-border rounded-xl overflow-hidden card-hover">
              <button
                onClick={() => setExpandedId(isExpanded ? null : event.id)}
                className="w-full p-5 flex items-start gap-4 text-left"
              >
                <span className="text-accent font-heading font-semibold text-sm whitespace-nowrap mt-0.5">
                  {event.time}
                </span>
                <div className="flex-1 min-w-0">
                  <h4 className="font-heading font-semibold text-foreground">{event.title}</h4>
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
    </SectionWrapper>
  );
};

export default Timeline;
