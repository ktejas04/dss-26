import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (placeholder)");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-14">
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
          Where to <span className="gradient-text">Find Us</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="flex flex-col justify-center">
          <div className="gradient-border rounded-xl p-8">
            <div className="flex items-start gap-4">
              <MapPin className="text-accent shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  Birla Institute of Technology, Mesra
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ranchi, Jharkhand
                  <br />
                  835215, India
                </p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="bg-secondary border-border rounded-xl h-12"
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="bg-secondary border-border rounded-xl h-12"
          />
          <Input
            placeholder="Subject"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            required
            className="bg-secondary border-border rounded-xl h-12"
          />
          <Textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            rows={5}
            className="bg-secondary border-border rounded-xl resize-none"
          />
          <Button
            type="submit"
            className="w-full gradient-bg text-primary-foreground h-12 rounded-xl hover:opacity-90 transition-opacity"
          >
            Send Message
          </Button>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
