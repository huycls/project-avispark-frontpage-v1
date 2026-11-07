export default function FeatureCard({ icon, title, children }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-neutral-silver bg-neutral-white p-6 dark:border-neutral-d-grey dark:bg-ink">
      <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-tint-5 text-primary dark:bg-shade-4">
        {icon}
      </span>
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-base leading-7 text-neutral-grey dark:text-neutral-l-grey">
        {children}
      </p>
    </article>
  );
}
