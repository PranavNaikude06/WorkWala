"use client";

import Link from "next/link";
import { CATEGORIES } from "@/data/categories";

export default function CategoryGrid() {
  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-[#1a1c19]">Popular Categories</h2>
        <Link href="/jobs" className="text-[#FF6B00] text-sm font-bold hover:underline">
          See All
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-y-6 gap-x-2">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.id}
            href={`/jobs?category=${cat.id}`}
            className="flex flex-col items-center space-y-2 group active:scale-95 transition-transform"
          >
            <div className="w-16 h-16 bg-[#ffdbcc] rounded-full flex items-center justify-center group-hover:bg-[#FF6B00] transition-colors shadow-sm">
              <span className="material-symbols-outlined text-[#a04100] group-hover:text-white text-3xl">
                {cat.icon}
              </span>
            </div>
            <span className="text-xs font-semibold text-slate-700 text-center leading-tight">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
