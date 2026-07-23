"use client";

import { useAppState } from "@/hooks/useAppState";
import CategoryGrid from "@/components/home/CategoryGrid";
import ActionCards from "@/components/home/ActionCards";
import RecentJobsCarousel from "@/components/home/RecentJobsCarousel";
import BottomNav from "@/components/layout/BottomNav";

export default function HomePage() {
  const { user } = useAppState();

  return (
    <div className="min-h-screen bg-[#fafaf5] pb-24 max-w-md mx-auto w-full">
      {/* Curved Orange Header */}
      <header className="relative gradient-bg header-curve px-6 pt-10 pb-16 shadow-md">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-white text-2xl font-extrabold tracking-tight">
              Hello, {user.name.split(" ")[0]}! 👋
            </h1>
            <p className="text-white/90 text-sm font-medium mt-0.5">
              What do you need today?
            </p>
          </div>
          <div className="w-12 h-12 rounded-full border-2 border-white/30 overflow-hidden shadow-md">
            <img
              src={user.avatarUrl}
              alt={user.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Search Bar (Overlapping Header) */}
        <div className="absolute -bottom-7 left-6 right-6">
          <div className="bg-white rounded-full h-14 flex items-center px-5 shadow-xl border border-slate-100">
            <span className="material-symbols-outlined text-[#FF6B00] text-2xl mr-3">
              search
            </span>
            <input
              type="text"
              placeholder="Search for masons, plumbers..."
              className="bg-transparent border-none outline-none flex-grow text-sm font-medium placeholder:text-slate-400 focus:ring-0"
            />
            <span className="material-symbols-outlined text-slate-400 text-xl cursor-pointer">
              mic
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="mt-12 px-6 space-y-6">
        <ActionCards />
        <CategoryGrid />
        <RecentJobsCarousel />
      </main>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
