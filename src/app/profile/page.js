"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAppState } from "@/hooks/useAppState";
import TopBar from "@/components/layout/TopBar";
import BottomNav from "@/components/layout/BottomNav";

export default function ProfilePage() {
  const router = useRouter();
  const { user, role, toggleRole } = useAppState();

  return (
    <div className="min-h-screen bg-[#fafaf5] pb-28 max-w-md mx-auto w-full">
      <TopBar
        title="WorkWala"
        showBack={false}
        rightAction={
          <button className="p-1 rounded-full hover:bg-white/10">
            <span className="material-symbols-outlined text-2xl">settings</span>
          </button>
        }
      />

      <main className="space-y-6">
        {/* Orange Gradient Hero Header */}
        <section className="relative gradient-bg flex flex-col items-center pt-8 pb-12 text-white text-center">
          <div className="w-24 h-24 rounded-full border-4 border-white shadow-xl overflow-hidden mb-3 bg-white">
            <img
              src={user.avatarUrl}
              alt={user.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-extrabold">{user.name}</h2>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs font-semibold text-white/90 flex items-center gap-0.5">
              <span className="material-symbols-outlined text-sm">location_on</span>
              {user.city}
            </span>
            <span className="px-3 py-0.5 bg-white/20 backdrop-blur-md text-white rounded-full text-xs font-bold uppercase tracking-wider">
              {role === "poster" ? "Job Poster" : "Worker"}
            </span>
          </div>
        </section>

        {/* Stats Row Card */}
        <section className="px-6 -mt-10 relative z-10">
          <div className="bg-white rounded-[24px] shadow-lg p-5 flex justify-between items-center text-center border border-slate-100">
            <div className="flex-1 border-r border-slate-100">
              <p className="text-[#FF6B00] font-extrabold text-lg">{user.jobsPosted}</p>
              <p className="text-xs text-slate-500 font-semibold">Jobs Posted</p>
            </div>
            <div className="flex-1 border-r border-slate-100">
              <p className="text-[#FF6B00] font-extrabold text-lg flex items-center justify-center gap-1">
                {user.rating} <span className="material-symbols-outlined text-amber-400 text-sm">star</span>
              </p>
              <p className="text-xs text-slate-500 font-semibold">Rating</p>
            </div>
            <div className="flex-1">
              <p className="text-[#FF6B00] font-extrabold text-lg">{user.workersHired}</p>
              <p className="text-xs text-slate-500 font-semibold">Workers Hired</p>
            </div>
          </div>
        </section>

        {/* Account Settings Menu List */}
        <section className="px-6 space-y-3">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
            Account Settings
          </h3>

          <div className="bg-white rounded-[24px] overflow-hidden border border-slate-200 shadow-sm divide-y divide-slate-100">
            {/* Edit Profile */}
            <button
              onClick={() => router.push("/onboarding/poster-setup")}
              className="w-full p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors text-left"
            >
              <div className="w-10 h-10 rounded-full bg-orange-100 text-[#FF6B00] flex items-center justify-center">
                <span className="material-symbols-outlined">edit</span>
              </div>
              <span className="flex-1 font-bold text-sm text-slate-900">Edit Profile</span>
              <span className="material-symbols-outlined text-slate-400">chevron_right</span>
            </button>

            {/* Switch Role Toggle */}
            <button
              onClick={toggleRole}
              className="w-full p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors text-left"
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">
                <span className="material-symbols-outlined">sync_alt</span>
              </div>
              <div className="flex-1">
                <span className="font-bold text-sm text-slate-900 block">
                  Switch to {role === "poster" ? "Worker Mode" : "Poster Mode"}
                </span>
                <span className="text-xs text-slate-500">
                  Currently active: <strong className="capitalize">{role}</strong>
                </span>
              </div>
              <span className="material-symbols-outlined text-slate-400">chevron_right</span>
            </button>

            {/* My Bookings */}
            <Link
              href="/bookings"
              className="w-full p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors text-left"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <span className="material-symbols-outlined">work</span>
              </div>
              <span className="flex-1 font-bold text-sm text-slate-900">My Bookings & Jobs</span>
              <span className="material-symbols-outlined text-slate-400">chevron_right</span>
            </Link>

            {/* Notifications */}
            <Link
              href="/notifications"
              className="w-full p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors text-left"
            >
              <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center">
                <span className="material-symbols-outlined">notifications</span>
              </div>
              <span className="flex-1 font-bold text-sm text-slate-900">Notifications</span>
              <span className="material-symbols-outlined text-slate-400">chevron_right</span>
            </Link>

            {/* Log Out */}
            <button
              onClick={() => router.push("/")}
              className="w-full p-4 flex items-center gap-4 hover:bg-red-50 transition-colors text-left"
            >
              <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                <span className="material-symbols-outlined">logout</span>
              </div>
              <span className="flex-1 font-bold text-sm text-red-600">Log Out</span>
              <span className="material-symbols-outlined text-red-400">chevron_right</span>
            </button>
          </div>
        </section>

        {/* Support Help Box */}
        <section className="px-6 mb-6">
          <div className="bg-orange-50 rounded-[24px] p-5 border-2 border-dashed border-[#FF6B00]/30 flex items-center justify-between">
            <div className="space-y-1">
              <h4 className="font-extrabold text-sm text-slate-900">Need help?</h4>
              <p className="text-xs text-slate-600">Talk to support for job queries.</p>
              <button
                onClick={() => router.push("/messages/m-1")}
                className="mt-2 px-5 py-2 bg-[#FF6B00] text-white text-xs font-bold rounded-full shadow-sm active:scale-95 transition-all"
              >
                Chat Now
              </button>
            </div>
            <span className="material-symbols-outlined text-5xl text-[#FF6B00]/40">
              support_agent
            </span>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
