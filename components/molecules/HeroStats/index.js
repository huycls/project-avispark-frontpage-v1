const STATS = [
  { value: "10k+", label: "Downloads" },
  { value: "15+", label: "Premium Templates" },
  { value: "4.9★", label: "Marketplace Rating" },
];

export default function HeroStats({ stats = STATS }) {
  return (
    <ul className="grid grid-cols-1 gap-4 border-t border-neutral-silver/80 pt-6 sm:grid-cols-3 dark:border-neutral-d-grey/80">
      {stats.map((stat) => (
        <li
          key={stat.label}
          className="flex flex-col items-center gap-1 text-center sm:items-start sm:text-left lg:items-center lg:text-center"
        >
          <span className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            {stat.value}
          </span>
          <span className="text-sm text-neutral-grey dark:text-neutral-l-grey">
            {stat.label}
          </span>
        </li>
      ))}
    </ul>
  );
}
