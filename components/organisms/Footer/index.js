import Logo from "@/components/atoms/Logo";

const explore = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
];

const company = [
  { href: "#contact", label: "Contact" },
  { href: "#services", label: "Start a project" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-neutral-white">
      <div className="container grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="md:col-span-2 lg:col-span-1">
          <Logo tone="light" />
          <p className="mt-4 max-w-xs text-sm leading-6 text-neutral-l-grey">
            Avispark turns a product idea into a site people can understand and
            use.
          </p>
        </div>
        <nav aria-label="Explore">
          <h2 className="text-sm font-semibold">Explore</h2>
          <ul className="mt-4 space-y-3 text-sm text-neutral-l-grey">
            {explore.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Company">
          <h2 className="text-sm font-semibold">Company</h2>
          <ul className="mt-4 space-y-3 text-sm text-neutral-l-grey">
            {company.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="text-sm font-semibold">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-neutral-l-grey">
            <li>
              <a
                href="mailto:hello@avispark.com"
                className="transition-colors hover:text-primary"
              >
                hello@avispark.com
              </a>
            </li>
            <li>Ho Chi Minh City</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-d-grey">
        <div className="container flex flex-col gap-2 py-6 text-sm text-neutral-l-grey sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Avispark. All rights reserved.</p>
          <p>Sample frontpage</p>
        </div>
      </div>
    </footer>
  );
}
