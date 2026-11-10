const ExternalIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-3.5 w-3.5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 17L17 7M9 7h8v8"
    />
  </svg>
);

export default function ProjectCard({
  title,
  category,
  platforms = [],
  accent,
  previewHref = "#",
  marketHref = "#",
  children,
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-silver bg-neutral-white transition-[border-color,box-shadow] duration-300 hover:border-primary hover:shadow-[0_18px_40px_-28px_rgba(139,92,246,0.55)] dark:border-neutral-d-grey dark:bg-ink dark:hover:border-primary">
      <div className={`relative h-40 overflow-hidden ${accent}`}>
        <div className="absolute inset-0 bg-linear-to-t from-neutral-black/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100" />
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 max-sm:hidden">
          <a
            href={previewHref}
            className="inline-flex items-center gap-1 rounded-full bg-neutral-white/95 px-2.5 py-1 text-[11px] font-semibold text-foreground shadow-sm backdrop-blur-sm transition-colors hover:bg-neutral-white"
          >
            Live Preview
            <ExternalIcon />
          </a>
          <a
            href={marketHref}
            className="inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-[11px] font-semibold text-neutral-white shadow-sm transition-colors hover:bg-shade-1"
          >
            Get Template
          </a>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-medium text-primary">{category}</p>

        {platforms.length > 0 ? (
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {platforms.map((platform) => (
              <li
                key={platform}
                className="rounded-full border border-neutral-silver bg-tint-5 px-2 py-0.5 text-[10px] font-medium tracking-wide text-neutral-grey uppercase dark:border-neutral-d-grey dark:bg-shade-5 dark:text-neutral-l-grey"
              >
                {platform}
              </li>
            ))}
          </ul>
        ) : null}

        <h3 className="mt-3 text-xl font-semibold text-foreground">{title}</h3>
        <p className="mt-3 flex-1 text-base leading-7 text-neutral-grey dark:text-neutral-l-grey">
          {children}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <a
            href={previewHref}
            className="inline-flex items-center gap-1 rounded-full border border-neutral-silver px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-primary hover:text-primary dark:border-neutral-d-grey"
          >
            Live Preview
            <ExternalIcon />
          </a>
          <a
            href={marketHref}
            className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-neutral-white transition-colors hover:bg-shade-1"
          >
            Get Template
          </a>
        </div>
      </div>
    </article>
  );
}
