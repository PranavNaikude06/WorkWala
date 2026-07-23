"use client";

import Link from "next/link";

export default function SplashPage() {
  return (
    <div className="relative min-h-screen gradient-bg flex flex-col justify-between items-center px-6 py-12 text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-32 w-80 h-80 bg-black rounded-full blur-[100px]"></div>
      </div>

      {/* Spacer for centering */}
      <div />

      {/* Logo & Brand Wordmark */}
      <div className="flex flex-col items-center text-center z-10 space-y-3">
        <div className="flex items-baseline gap-1">
          <div className="relative flex flex-col items-center">
            <span className="material-symbols-outlined text-6xl text-white animate-float -mb-3">
              engineering
            </span>
            <span className="text-[52px] font-extrabold tracking-tighter leading-none">
              W
            </span>
          </div>
          <span className="text-[52px] font-extrabold tracking-tighter leading-none -ml-1">
            orkWala
          </span>
        </div>
        <p className="text-lg font-medium tracking-wide opacity-90">
          Work For Everyone. Jobs For Everyone.
        </p>
      </div>

      {/* Bottom Actions */}
      <div className="w-full flex flex-col items-center space-y-5 z-10">
        <Link
          href="/login"
          className="w-full h-14 bg-white text-[#FF6B00] font-bold text-lg rounded-full shadow-xl active-press flex items-center justify-center tracking-wider uppercase transition-all"
        >
          Get Started
        </Link>
        <Link
          href="/login"
          className="text-white text-base hover:underline active-press transition-all"
        >
          Already have an account? <span className="font-bold">Log in</span>
        </Link>
        <div className="w-32 h-1.5 bg-white/30 rounded-full mt-4" />
      </div>
    </div>
  );
}
