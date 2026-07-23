"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import TopBar from "@/components/layout/TopBar";
import Button from "@/components/ui/Button";

function Step2Form() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "mason";

  const [description, setDescription] = useState(
    "Need 2 masons for boundary wall construction. Materials provided on site."
  );
  const [workersCount, setWorkersCount] = useState(2);
  const [payPerDay, setPayPerDay] = useState(800);
  const [startTime, setStartTime] = useState("09:00 AM");
  const [endTime, setEndTime] = useState("06:00 PM");
  const [location, setLocation] = useState("Koramangala, Bengaluru");

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(
      `/post-job/step-3?category=${category}&desc=${encodeURIComponent(
        description
      )}&workers=${workersCount}&pay=${payPerDay}&start=${startTime}&end=${endTime}&location=${encodeURIComponent(
        location
      )}`
    );
  };

  return (
    <div className="min-h-screen bg-[#fafaf5] flex flex-col justify-between max-w-md mx-auto w-full pb-8">
      <TopBar title="Post a Job" showBack backHref="/post-job/step-1" />

      <main className="flex-1 px-6 py-6 flex flex-col space-y-6">
        <div>
          <div className="flex justify-between items-center text-xs font-bold text-slate-500 mb-2">
            <span>POST A JOB</span>
            <span className="text-[#FF6B00]">Step 2 of 3</span>
          </div>
          <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mb-4">
            <div className="w-2/3 h-full bg-[#FF6B00] rounded-full transition-all" />
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Job Details</h2>
            <span className="px-3 py-1 bg-orange-100 text-[#FF6B00] text-xs font-bold rounded-full uppercase">
              🧱 {category}
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Job Description Card */}
          <div className="bg-white p-5 rounded-[24px] border border-slate-200 shadow-sm space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-800 mb-1.5 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-lg text-[#FF6B00]">description</span>
                Job Description
              </label>
              <textarea
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the work (e.g. Wall construction, plastering, cement mixing...)"
                className="w-full p-3.5 border-2 border-slate-200 rounded-xl text-sm outline-none focus:border-[#FF6B00] bg-white font-medium text-slate-800"
                required
              />
            </div>

            {/* Workers Count & Pay Per Day Row */}
            <div className="grid grid-cols-2 gap-4">
              {/* Workers Counter */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Workers Needed</label>
                <div className="flex items-center justify-between border-2 border-slate-200 rounded-xl p-1 bg-slate-50">
                  <button
                    type="button"
                    onClick={() => setWorkersCount(Math.max(1, workersCount - 1))}
                    className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-700 active:scale-95 shadow-sm"
                  >
                    −
                  </button>
                  <span className="font-extrabold text-lg text-slate-900">{workersCount}</span>
                  <button
                    type="button"
                    onClick={() => setWorkersCount(workersCount + 1)}
                    className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-700 active:scale-95 shadow-sm"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Pay Per Day */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Pay Per Day (₹)</label>
                <div className="relative">
                  <span className="absolute left-3.5 top-3.5 font-bold text-slate-500">₹</span>
                  <input
                    type="number"
                    value={payPerDay}
                    onChange={(e) => setPayPerDay(Number(e.target.value))}
                    className="w-full h-12 border-2 border-slate-200 rounded-xl pl-8 pr-3 text-base font-bold text-slate-900 outline-none focus:border-[#FF6B00] bg-white"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Work Timings */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-[#FF6B00]">schedule</span>
                Work Timings
              </label>
              <div className="grid grid-cols-2 gap-3 items-center">
                <input
                  type="text"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="h-12 border-2 border-slate-200 rounded-xl px-3 text-sm font-semibold text-slate-800 text-center outline-none focus:border-[#FF6B00] bg-white"
                />
                <input
                  type="text"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className="h-12 border-2 border-slate-200 rounded-xl px-3 text-sm font-semibold text-slate-800 text-center outline-none focus:border-[#FF6B00] bg-white"
                />
              </div>
            </div>

            {/* Work Location */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-[#FF6B00]">location_on</span>
                Work Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter area or landmark"
                className="w-full h-12 border-2 border-slate-200 rounded-xl px-3.5 text-sm font-medium text-slate-800 outline-none focus:border-[#FF6B00] bg-white"
                required
              />
              <button
                type="button"
                onClick={() => setLocation("Current Location, Koramangala")}
                className="mt-2 text-xs font-bold text-[#FF6B00] flex items-center gap-1 hover:underline"
              >
                <span className="material-symbols-outlined text-sm">near_me</span>
                Use my current location
              </button>
            </div>
          </div>

          <Button type="submit" icon="arrow_forward">
            Review & Post
          </Button>
        </form>
      </main>
    </div>
  );
}

export default function PostJobStep2Page() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-slate-500">Loading form...</div>}>
      <Step2Form />
    </Suspense>
  );
}
