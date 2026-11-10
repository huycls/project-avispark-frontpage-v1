export default function ProjectFilter({ filters, activeId, onChange }) {
  return (
    <div
      className="mt-8 flex flex-wrap gap-2"
      role="tablist"
      aria-label="Filter projects"
    >
      {filters.map((filter) => {
        const isActive = filter.id === activeId;

        return (
          <button
            key={filter.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(filter.id)}
            className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
              isActive
                ? "border-primary bg-primary text-neutral-white"
                : "border-neutral-silver bg-neutral-white text-neutral-grey hover:border-primary hover:text-primary dark:border-neutral-d-grey dark:bg-ink dark:text-neutral-l-grey dark:hover:border-primary dark:hover:text-tint-2"
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
