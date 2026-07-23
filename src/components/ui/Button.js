export default function Button({
  children,
  variant = "primary", // "primary" | "secondary" | "outline" | "ghost" | "danger"
  size = "lg", // "sm" | "md" | "lg"
  fullWidth = true,
  disabled = false,
  onClick,
  type = "button",
  className = "",
  icon,
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold tracking-wide transition-all active-press rounded-full disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "h-10 px-4 text-sm",
    md: "h-12 px-5 text-base",
    lg: "h-14 px-6 text-lg",
  };

  const variantStyles = {
    primary: "bg-[#FF6B00] text-white hover:bg-[#E05A00] shadow-md shadow-[#FF6B00]/30",
    secondary: "bg-[#1A1A2E] text-white hover:bg-[#2A2A48]",
    outline: "bg-transparent border-2 border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00]/10",
    ghost: "bg-transparent text-slate-700 hover:bg-slate-200/60",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      {children}
      {icon && <span className="material-symbols-outlined ml-2 text-xl">{icon}</span>}
    </button>
  );
}
