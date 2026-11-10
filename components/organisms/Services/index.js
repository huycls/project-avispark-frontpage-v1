import Title from "@/components/atoms/Title";
import FeatureCard from "@/components/molecules/FeatureCard";

const services = [
  {
    title: "Premium Templates & UI Kits",
    text: "Meticulously crafted layouts in Figma and Framer. Built with responsive design systems, clean components, and scalable architectures ready for production.",
    tags: ["Figma Systems", "Framer Ready", "SEO Optimized"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path strokeLinecap="round" d="M3 9h18" />
        <path strokeLinecap="round" d="M8 14h3M8 17h5" />
      </svg>
    ),
  },
  {
    title: "Template Customization & Setup",
    text: "Need an existing template tailored to your brand? We customize styles, integrate your content, configure CMS structures, and connect custom domains seamlessly.",
    tags: ["Branding Integration", "CMS Configuration", "Domain Launch"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3l1.8 4.6L18.5 9l-4.2 2.8L15.5 17 12 14.4 8.5 17l1.2-5.2L5.5 9l4.7-1.4L12 3z"
        />
      </svg>
    ),
  },
  {
    title: "Bespoke Web Development",
    text: "Custom web design & development from scratch using modern frameworks (Next.js, Tailwind, GSAP). High performance, engaging interactions, and 100% bespoke aesthetics.",
    tags: ["Custom Code", "Micro-interactions", "Performance Tuning"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 9l-3 3 3 3M16 9l3 3-3 3M13 7l-2 10"
        />
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
        <Title className="mt-3 max-w-2xl">
          How we help you build & launch faster
        </Title>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-grey dark:text-neutral-l-grey">
          From ready-to-use premium templates to bespoke full-stack web
          experiences. We cover every step from concept to production.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <FeatureCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              tags={service.tags}
            >
              {service.text}
            </FeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
}
