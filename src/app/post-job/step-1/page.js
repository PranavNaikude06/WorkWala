"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TopBar from "@/components/layout/TopBar";
import Button from "@/components/ui/Button";
import { CATEGORIES } from "@/data/categories";

export default function PostJobStep1Page() {
  const router = useRouter();
  const [selectedCat, setSelectedCat] = useState("mason");

  const handleNext = () => {
    if (selectedCat) {
      router.push(`/post-job/step-2?category=${selectedCat}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf5] flex flex-col justify-between max-w-md mx-auto w-full pb-8">
      <TopBar title="Post a Job" showBack backHref="/home" />

      <main className="flex-1 px-6 py-6 flex flex-col space-y-6">
        <div>
          <div className="flex justify-between items-center text-xs font-bold text-slate-500 mb-2">
            <span>POST A JOB</span>
            <span className="text-[#FF6B00]">Step 1 of 3</span>
          </div>
          <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mb-4">
            <div className="w-1/3 h-full bg-[#FF6B00] rounded-full transition-all" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            What type of work do you need?
          </h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 gap-4">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCat === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCat(cat.id)}
                className={`p-5 rounded-[24px] border-2 flex flex-col items-center justify-center space-y-3 transition-all active:scale-95 shadow-sm ${
                  isSelected
                    ? "border-[#FF6B00] bg-[#FF6B00]/10 shadow-[#FF6B00]/10"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <div className="w-14 h-14 rounded-full bg-[#ffdbcc] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#a04100] text-3xl">
                    {cat.icon}
                  </span>
                </div>
                <span className="font-bold text-sm text-slate-900">{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Helper Tip Box */}
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3">
          <span className="material-symbols-outlined text-amber-600 text-xl">info</span>
          <div className="text-xs space-y-1">
            <p className="font-bold">Not sure which to pick?</p>
            <p>Don't worry, you can add more details or change this later in the description.</p>
          </div>
        </div>

        <div className="pt-4 mt-auto">
          <Button onClick={handleNext} disabled={!selectedCat} icon="arrow_forward">
            Next Step
          </Button>
        </div>
      </main>
    </div>
  );
}
