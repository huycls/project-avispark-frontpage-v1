import styles from "./Index.module.scss";

const BADGES = [
  "Framer Marketplace",
  "Figma Community",
  "ThemeForest",
  "Creative Market",
  "Next.js",
  "Tailwind CSS",
  "GSAP",
  "Figma",
  "Framer",
  "Webflow",
];

export default function LogoMarquee({ items = BADGES }) {
  const loop = [...items, ...items];

  return (
    <div
      className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
      aria-label="Platforms and tools"
    >
      <div className={`flex w-max gap-8 py-1 ${styles.track}`}>
        {loop.map((label, index) => (
          <span
            key={`${label}-${index}`}
            className="shrink-0 text-xs font-semibold tracking-[0.14em] text-neutral-l-grey/70 uppercase dark:text-neutral-grey"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
