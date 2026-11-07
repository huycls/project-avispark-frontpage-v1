export default function ProjectCard({ title, category, accent, children }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-silver bg-neutral-white dark:border-neutral-d-grey dark:bg-ink">
      <div className={`h-36 ${accent}`} />
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-medium text-primary">{category}</p>
        <h3 className="mt-2 text-xl font-semibold text-foreground">{title}</h3>
        <p className="mt-3 text-base leading-7 text-neutral-grey dark:text-neutral-l-grey">
          {children}
        </p>
      </div>
    </article>
  );
}
