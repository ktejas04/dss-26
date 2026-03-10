import { useEffect, useRef } from "react";

const SectionWrapper = ({ children, className = "", id }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-fade-in-up");
          el.style.opacity = "1";
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id={id} className={`py-20 md:py-28 opacity-0 ${className}`}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
};

export default SectionWrapper;
