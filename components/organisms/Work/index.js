import Title from "@/components/atoms/Title";
import ProjectCard from "@/components/molecules/ProjectCard";

const projects = [
  {
    title: "Northwind Studio",
    category: "Brand site",
    accent: "bg-tint-4 dark:bg-shade-3",
    text: "A quiet marketing site for a design studio, with a long case-study page and a simple contact path.",
  },
  {
    title: "Harbor Clinic",
    category: "Care platform",
    accent: "bg-tint-5 dark:bg-shade-4",
    text: "Appointment pages and a patient guide, written so the next step is always visible.",
  },
  {
    title: "Fieldnote",
    category: "Editorial",
    accent: "bg-neutral-grey-blue dark:bg-shade-2",
    text: "A reading layout for a small journal: essays, issues, and a subscribe block.",
  },
];

export default function Work() {
  return (
    <section id="work" className="bg-background py-16 md:py-24">
      <div className="container">
        <p className="text-sm font-semibold tracking-wide text-primary uppercase">
          Work
        </p>
        <Title className="mt-3 max-w-xl">Selected projects</Title>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-grey dark:text-neutral-l-grey">
          Sample work across brand, product, and editorial sites.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              category={project.category}
              accent={project.accent}
            >
              {project.text}
            </ProjectCard>
          ))}
        </div>
      </div>
    </section>
  );
}
