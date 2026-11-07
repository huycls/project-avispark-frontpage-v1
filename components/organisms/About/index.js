import Button from "@/components/atoms/Button";
import Title from "@/components/atoms/Title";

const stats = [
  { value: "48", label: "Projects shipped" },
  { value: "6", label: "Years in practice" },
  { value: "30", label: "Teams we have worked with" },
];

export default function About() {
  return (
    <section id="about" className="bg-tint-5 py-16 md:py-24 dark:bg-ink">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            About
          </p>
          <Title className="mt-3">A small team for the first public version</Title>
          <p className="mt-4 text-lg leading-8 text-neutral-grey dark:text-neutral-l-grey">
            Avispark designs and builds marketing sites for teams who need a
            clear story online. We work in short cycles, from the first layout
            to the page a visitor actually uses.
          </p>
          <Button href="#contact" className="mt-8">
            Talk to us
          </Button>
        </div>
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-neutral-silver bg-neutral-white p-6 dark:border-neutral-d-grey dark:bg-ink"
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
