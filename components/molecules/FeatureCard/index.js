export default function FeatureCard({ icon, title, tags = [], children }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-neutral-silver bg-neutral-white p-6 transition-[border-color,box-shadow] duration-300 hover:border-primary hover:shadow-[0_18px_40px_-28px_rgba(139,92,246,0.55)] dark:border-neutral-d-grey dark:bg-ink dark:hover:border-primary">
      <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-tint-5 text-primary transition-[background-color,color,transform] duration-300 group-hover:bg-tint-4 group-hover:text-shade-1 group-hover:scale-105 dark:bg-shade-4 dark:group-hover:bg-shade-3 dark:group-hover:text-tint-2">
        {icon}
      </span>
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-3 flex-1 text-base leading-7 text-neutral-grey dark:text-neutral-l-grey">
        {children}
      </p>
      {tags.length > 0 ? (
        <ul className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-neutral-silver bg-tint-5 px-2.5 py-1 text-[11px] font-medium tracking-wide text-neutral-grey uppercase transition-colors duration-300 group-hover:border-tint-2 group-hover:text-shade-2 dark:border-neutral-d-grey dark:bg-shade-5 dark:text-neutral-l-grey dark:group-hover:border-primary/40 dark:group-hover:text-tint-2"
            >
              {tag}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
