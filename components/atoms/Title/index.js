export default function Title({ children, className = "" }) {
  return (
    <h2
      className={`text-3xl font-bold tracking-tight text-foreground md:text-4xl ${className}`}
    >
      {children}
    </h2>
  );
}
