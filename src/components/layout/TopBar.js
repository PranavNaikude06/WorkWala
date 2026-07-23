"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TopBar({ title, showBack = true, backHref, rightAction }) {
  const router = useRouter();

  const handleBack = () => {
    if (backHref) {
      router.push(backHref);
    } else {
      router.back();
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#E05A00] text-white px-5 py-4 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-3">
        {showBack && (
          <button
            onClick={handleBack}
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 active:scale-95 transition-all"
            aria-label="Go back"
          >
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </button>
        )}
        <h1 className="text-xl font-bold tracking-tight">{title}</h1>
      </div>
      {rightAction && <div>{rightAction}</div>}
    </header>
  );
}
