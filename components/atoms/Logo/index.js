import Link from "next/link";

export default function Logo({ tone = "default" }) {
  const color = tone === "light" ? "text-neutral-white" : "text-foreground";

  return (
    <Link href="/" className={`inline-flex items-center gap-2 ${color}`}>
      <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-sm font-semibold text-neutral-white">
        A
      </span>
      <span className="text-base font-semibold tracking-tight md:text-lg">
        Avispark
      </span>
    </Link>
  );
}
