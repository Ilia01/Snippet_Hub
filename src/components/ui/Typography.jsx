export function Heading({ level = 1, children, className = "", ...props }) {
  const Tag = `h${level}`;
  const sizes = {
    1: "text-4xl font-bold",
    2: "text-2xl font-semibold",
    3: "text-xl font-semibold",
    4: "text-lg font-medium"
  };

  return (
    <Tag
      className={`text-neutral-900 ${sizes[level]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function Text({ variant = "default", children, className = "", ...props }) {
  const variants = {
    default: "text-neutral-900",
    secondary: "text-neutral-700",
    muted: "text-neutral-500",
  };

  return (
    <p
      className={`${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}

export function Link({ children, className = "", ...props }) {
  return (
    <a
      className={`text-primary-500 hover:text-primary-600 ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
