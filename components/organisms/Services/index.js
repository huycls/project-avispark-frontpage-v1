import Title from "@/components/atoms/Title";
import FeatureCard from "@/components/molecules/FeatureCard";

const services = [
  {
    title: "Product design",
    text: "Interfaces with a clear hierarchy, so people know what to do on the first screen.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.5-4.5a2 2 0 0 1 2.8 0L16 16" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 14l1.2-1.2a2 2 0 0 1 2.8 0L20 15" />
        <rect x="3" y="5" width="18" height="14" rx="2" />
      </svg>
    ),
  },
  {
    title: "Web development",
    text: "Fast pages built as reusable components, ready to grow with the product.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3M16 9l3 3-3 3M13 7l-2 10" />
      </svg>
    ),
  },
  {
    title: "Launch support",
    text: "We stay through release: content, checks, and the small fixes that show up on day one.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5M12 5l-4 4M12 5l4 4" />
        <path strokeLinecap="round" d="M5 19h14" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-neutral-silver py-16 md:py-24 dark:bg-ink">
      <div className="container">
        <p className="text-sm font-semibold tracking-wide text-primary uppercase">
          Services
        </p>
        <Title className="mt-3 max-w-xl">What we take from idea to launch</Title>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-grey dark:text-neutral-l-grey">
          Three parts of the same engagement. Design, build, and the week after
          the site goes live.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <FeatureCard key={service.title} icon={service.icon} title={service.title}>
              {service.text}
            </FeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
}
