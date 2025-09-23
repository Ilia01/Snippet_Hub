export function Header({ children, className = "", ...props }) {
  return (
    <header
      className={`w-full bg-neutral-100 px-8 py-4 ${className}`}
      {...props}
    >
      {children}
    </header>
  );
}
