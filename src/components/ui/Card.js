export function Card({ children, className = "", onClick, interactive = false }) {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-[24px] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-slate-100 ${
        interactive ? "cursor-pointer active:scale-[0.98] transition-transform" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function Chip({ label, active = false, onClick, icon, colorClass }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap active:scale-95 ${
        active
          ? "bg-[#FF6B00] text-white shadow-sm"
          : colorClass
          ? colorClass
          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
      }`}
    >
      {icon && <span className="material-symbols-outlined text-lg">{icon}</span>}
      <span>{label}</span>
    </button>
  );
}

export function StatusBadge({ status, label }) {
  const statusStyles = {
    open: "bg-emerald-100 text-emerald-800 border-emerald-200",
    verified: "bg-emerald-600 text-white",
    ongoing: "bg-emerald-500 text-white",
    pending: "bg-amber-100 text-amber-900 border-amber-200",
    completed: "bg-slate-100 text-slate-700",
    urgent: "bg-red-100 text-red-800 border-red-200",
  };

  const text = label || status;
  const style = statusStyles[status?.toLowerCase()] || "bg-slate-100 text-slate-700";

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${style}`}>
      {text}
    </span>
  );
}

export function StarRating({ rating = 0, count, showText = true, size = "md" }) {
  const sizes = {
    sm: "text-base",
    md: "text-xl",
    lg: "text-3xl",
  };

  return (
    <div className="flex items-center gap-1">
      <span className={`material-symbols-outlined text-amber-400 ${sizes[size]}`}>star</span>
      {showText && (
        <span className="text-sm font-bold text-slate-800">
          {rating} {count !== undefined && <span className="text-slate-500 font-normal">({count})</span>}
        </span>
      )}
    </div>
  );
}

export function EmptyState({ icon = "search_off", title, message, actionLabel, onAction }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 text-center space-y-4">
      <div className="w-20 h-20 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center">
        <span className="material-symbols-outlined text-4xl">{icon}</span>
      </div>
      <h3 className="text-lg font-bold text-slate-800">{title}</h3>
      <p className="text-sm text-slate-500 max-w-xs">{message}</p>
      {actionLabel && (
        <button
          onClick={onAction}
          className="mt-2 px-6 py-2.5 bg-[#FF6B00] text-white text-sm font-bold rounded-full shadow-md active:scale-95 transition-all"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
