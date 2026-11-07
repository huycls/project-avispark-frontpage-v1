const variants = {
  primary: "bg-primary text-neutral-white hover:bg-shade-1",
  outline:
    "border border-primary bg-transparent text-primary hover:bg-tint-5 dark:hover:bg-shade-5",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}) {
  const classes = `inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
