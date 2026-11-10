import Button from "@/components/atoms/Button";
import Title from "@/components/atoms/Title";

const stats = [
  { value: "20+", label: "Templates & Projects" },
  { value: "4.9★", label: "Marketplace Rating" },
  { value: "500+", label: "Happy Creators & Clients" },
];

export default function About() {
  return (
    <section id="about" className="bg-tint-5 py-16 md:py-24 dark:bg-ink">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            About Avispark
          </p>
          <Title className="mt-3 max-w-xl">
            A focused digital studio crafting templates that elevate brands
          </Title>
          <p className="mt-4 text-lg leading-8 text-neutral-grey dark:text-neutral-l-grey">
            Avispark is a collective of designers and frontend builders
            passionate about crafting clean, high-performance website templates.
            We merge thoughtful typography, modular design systems, and seamless
            motion so you can launch your next venture in days, not months.
          </p>
          <Button href="#contact" className="mt-8">
            Get in Touch
          </Button>
        </div>

        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-neutral-silver bg-neutral-white p-6 transition-[border-color,box-shadow] duration-300 hover:border-primary hover:shadow-[0_18px_40px_-28px_rgba(139,92,246,0.45)] dark:border-neutral-d-grey dark:bg-ink dark:hover:border-primary"
            >
              <dt className="text-sm text-neutral-grey dark:text-neutral-l-grey">
                {stat.label}
              </dt>
              <dd className="mt-2 text-4xl font-bold text-primary">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
