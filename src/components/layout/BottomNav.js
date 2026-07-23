"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  const tabs = [
    { label: "Home", href: "/home", icon: "home" },
    { label: "Jobs", href: "/jobs", icon: "work" },
    { label: "Post", href: "/post-job/step-1", icon: "add_circle", isMain: true },
    { label: "Messages", href: "/messages", icon: "chat" },
    { label: "Profile", href: "/profile", icon: "person" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto z-50 flex justify-around items-center px-4 h-[72px] pb-safe border-t border-slate-200/60 bg-white/95 backdrop-blur-md shadow-[0_-4px_12px_rgba(0,0,0,0.08)] rounded-t-2xl">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href || pathname.startsWith(tab.href + "/");

        if (tab.isMain) {
          return (
            <Link
              key={tab.label}
              href={tab.href}
              className="flex flex-col items-center justify-center -mt-5 transition-transform active:scale-95"
            >
              <div className="w-14 h-14 rounded-full bg-[#FF6B00] text-white flex items-center justify-center shadow-lg shadow-[#FF6B00]/40 border-4 border-[#fafaf5]">
                <span className="material-symbols-outlined text-3xl">add</span>
              </div>
              <span className="text-[11px] font-semibold text-[#FF6B00] mt-0.5">Post</span>
            </Link>
          );
        }

        return (
          <Link
            key={tab.label}
            href={tab.href}
            className={`flex flex-col items-center justify-center px-3 py-1 rounded-full transition-all duration-200 ${
              isActive
                ? "text-[#FF6B00] bg-[#FF6B00]/10 font-semibold"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <span className="material-symbols-outlined text-2xl">{tab.icon}</span>
            <span className="text-[11px] mt-0.5">{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
