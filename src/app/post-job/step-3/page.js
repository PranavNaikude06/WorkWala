"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import TopBar from "@/components/layout/TopBar";
import Button from "@/components/ui/Button";
import { formatCurrency } from "@/lib/utils";

function Step3Review() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const category = searchParams.get("category") || "mason";
  const description = searchParams.get("desc") || "Professional masonry for residential boundary wall construction. Materials provided on site.";
  const workers = searchParams.get("workers") || "2";
  const pay = searchParams.get("pay") || "800";
  const timing = `${searchParams.get("start") || "09:00 AM"} - ${searchParams.get("end") || "06:00 PM"}`;
  const location = searchParams.get("location") || "Andheri East, Mumbai";

  const [confirmed, setConfirmed] = useState(true);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handlePostJob = () => {
    setShowSuccessModal(true);
  };

  const handleViewLiveJob = () => {
    router.push("/jobs/job-1");
  };

  return (
    <div className="min-h-screen bg-[#fafaf5] flex flex-col justify-between max-w-md mx-auto w-full pb-8">
      <TopBar title="Review & Confirm" showBack backHref="/post-job/step-2" />

      <main className="flex-1 px-6 py-6 flex flex-col space-y-6">
        <div>
          <div className="flex justify-between items-center text-xs font-bold text-slate-500 mb-2">
            <span>POST A JOB</span>
            <span className="text-[#FF6B00]">Step 3 of 3</span>
          </div>
          <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mb-4">
            <div className="w-full h-full bg-[#FF6B00] rounded-full transition-all" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Review Details</h2>
        </div>

        {/* Location Map Header Graphic */}
        <div className="relative h-32 rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-100 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-80"
            style={{
              backgroundImage:
                "url('https://maps.googleapis.com/maps/api/staticmap?center=Mumbai&zoom=13&size=600x300&sensor=false')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 text-white">
            <span className="material-symbols-outlined text-[#FF6B00] text-2xl">location_on</span>
            <span className="font-bold text-sm drop-shadow">{location}</span>
          </div>
        </div>

        {/* Job Summary Card */}
        <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm space-y-4">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-2xl">
                🧱
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-slate-900 capitalize">{category}</h3>
                <p className="text-xs font-medium text-slate-500">Hyperlocal Job</p>
              </div>
            </div>
            <button
              onClick={() => router.push("/post-job/step-2")}
              className="text-xs font-bold text-[#FF6B00] hover:underline"
            >
              Edit
            </button>
          </div>

          <p className="text-sm text-slate-700 leading-relaxed font-medium bg-slate-50 p-3 rounded-xl border border-slate-100">
            "{description}"
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3 text-sm text-slate-800 font-semibold">
              <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 material-symbols-outlined text-lg">
                group
              </span>
              <span>{workers} Positions Available</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-800 font-semibold">
              <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center material-symbols-outlined text-lg">
                payments
              </span>
              <span>
                {formatCurrency(pay)} <span className="text-xs text-slate-500 font-normal">/ day</span>
              </span>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-800 font-semibold">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center material-symbols-outlined text-lg">
                schedule
              </span>
              <span>{timing}</span>
            </div>
          </div>
        </div>

        {/* Confirmation Checkbox */}
        <label className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-200 cursor-pointer">
          <input
            type="checkbox"
            checked={confirmed}
            onChange={(e) => setConfirmed(e.target.checked)}
            className="w-5 h-5 accent-[#FF6B00] rounded"
          />
          <span className="text-xs font-semibold text-slate-700">
            I confirm the job details and pay terms are correct
          </span>
        </label>

        <div className="pt-2 mt-auto">
          <Button onClick={handlePostJob} disabled={!confirmed} icon="send">
            Post Job Now
          </Button>
          <p className="text-center text-xs text-slate-500 mt-2">
            👁️ Visible to verified workers within 5 km radius
          </p>
        </div>
      </main>

      {/* Success Modal Overlay */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in">
          <div className="bg-white rounded-[32px] p-6 max-w-xs w-full text-center space-y-4 shadow-2xl animate-scale-up">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-5xl">check_circle</span>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">Job Posted! 🎉</h3>
            <p className="text-sm text-slate-600">
              Your job is now live. Workers nearby will start expressing interest shortly.
            </p>
            <Button onClick={handleViewLiveJob}>
              View Live Job Feed
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function PostJobStep3Page() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-slate-500">Loading summary...</div>}>
      <Step3Review />
    </Suspense>
  );
}
