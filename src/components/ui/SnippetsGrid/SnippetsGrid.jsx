export function SnippetsGrid({ children, className = "" }) {
  return (
    <div
      className={`
        grid gap-6
        grid-cols-1
        sm:grid-cols-[repeat(auto-fill,minmax(min(100%,600px),1fr))]
        [grid-auto-flow:row]
        ${className}
      `}
    >
      {children}
    </div>
  );
}
