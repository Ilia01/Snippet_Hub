const variants = {
  success: "bg-success-50 text-success-500",
  warning: "bg-warning-50 text-warning-500",
  error: "bg-error-50 text-error-500"
};

export function Alert(
  { children,
    onClose,
    className = "",
    variant = "success",
    ...props }
) {
  return (
    <div
      className={`flex items-center justify-between rounded-lg p-4 ${variants[variant]} ${className}`}
      {...props}
    >
      <p>{children}</p>
      {onClose && (
        <button
          onClick={onClose}
          className="text-neutral-700 hover:text-neutral-900"
        >
          &times;
        </button>
      )}
    </div>
  );
}
