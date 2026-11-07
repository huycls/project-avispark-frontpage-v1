export default function NavItem({ href, children, onClick, className = "" }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`text-sm font-medium text-neutral-grey transition-colors hover:text-primary dark:text-neutral-l-grey dark:hover:text-tint-1 ${className}`}
    >
      {children}
    </a>
  );
}
