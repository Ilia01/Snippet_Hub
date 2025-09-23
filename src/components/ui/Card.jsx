const variants = {
  neutral: "border-neutral-200 bg-neutral-100",
  primary: "border-primary-50 bg-primary-50/10"
};

export function Card({ children, variant = "neutral", className = "", ...props }) {

  return (
    <div
      className={`rounded-lg border p-4 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children, className = "", ...props }) {
  return (
    <h3
      className={`mb-2 font-semibold text-neutral-900 ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
}
