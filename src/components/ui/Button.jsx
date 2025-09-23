const variants = {
  primary: "bg-primary-500 hover:bg-primary-600 text-neutral-50",
  success: "bg-success-500 hover:opacity-90 text-neutral-50",
  warning: "bg-warning-500 hover:opacity-90 text-neutral-50",
  error: "bg-error-500 hover:opacity-90 text-neutral-50",
  ghost: "bg-neutral-200 hover:bg-neutral-300 text-neutral-900"
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2",
  lg: "px-6 py-3 text-lg"
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  return (
    <button
      className={`rounded font-medium transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
