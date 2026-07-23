"use client";

import Link from "next/link";

export default function ActionCards() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Post a Job Card */}
      <Link
        href="/post-job/step-1"
        className="bg-white p-6 rounded-[24px] shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col items-center justify-center space-y-2 active:scale-95 transition-transform hover:shadow-md"
      >
        <div className="w-14 h-14 bg-[#FF6B00]/10 rounded-full flex items-center justify-center text-3xl">
          🛠️
        </div>
        <span className="font-bold text-base text-[#FF6B00]">Post a Job</span>
      </Link>

      {/* Find Work Card */}
      <Link
        href="/jobs"
        className="bg-white p-6 rounded-[24px] shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col items-center justify-center space-y-2 active:scale-95 transition-transform hover:shadow-md"
      >
        <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-3xl">
          💼
        </div>
        <span className="font-bold text-base text-emerald-800">Find Work</span>
      </Link>
    </div>
  );
}
