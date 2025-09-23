export function Footer({ children, className = "", ...props }) {
  return (
    <footer
      className={`mt-auto w-full bg-neutral-100 px-8 py-6 ${className}`}
      {...props}
    >
      {children}
    </footer>
  );
}
