"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";

export default function WorkerProfileSheet({ worker, onClose, onHire }) {
  if (!worker) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex flex-col justify-end animate-fade-in">
      {/* Click outside backdrop to close */}
      <div className="flex-1 w-full" onClick={onClose} />

      {/* Bottom Sheet Modal */}
      <div className="w-full max-w-md mx-auto bg-white rounded-t-[32px] max-h-[85vh] flex flex-col overflow-hidden shadow-2xl animate-slide-up">
        {/* Top Drag Handle */}
        <div className="flex justify-center py-3 bg-white cursor-pointer" onClick={onClose}>
          <div className="w-12 h-1.5 bg-slate-300 rounded-full" />
        </div>

        {/* Scrollable Sheet Content */}
        <div className="flex-1 overflow-y-auto px-6 pt-2 pb-28 space-y-6">
          {/* Worker Avatar & Header */}
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="relative">
              <div className="w-24 h-24 p-1 bg-[#FF6B00] rounded-full">
                <img
                  src={worker.avatar}
                  alt={worker.name}
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-md"
                />
              </div>
              <div className="absolute bottom-0 right-0 bg-emerald-600 text-white p-1 rounded-full border-2 border-white flex items-center justify-center">
                <span className="material-symbols-outlined text-sm font-bold">verified</span>
              </div>
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900">{worker.name}</h2>
            <div className="flex items-center gap-2 text-sm text-slate-600 font-semibold">
              <span className="flex items-center gap-1 text-[#FF6B00]">
                <span className="material-symbols-outlined text-lg fill-1">star</span>
                {worker.rating}
              </span>
              <span>•</span>
              <span>{worker.jobsCompleted} jobs completed</span>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#FF6B00] text-xl">handyman</span>
              Skills & Expertise
            </h3>
            <div className="flex flex-wrap gap-2">
              {worker.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-slate-100 text-slate-800 rounded-full text-xs font-semibold border border-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Service Area */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#FF6B00] text-xl">location_on</span>
                Service Area
              </h3>
              <span className="text-xs font-bold text-[#FF6B00]">{worker.serviceRadius} radius</span>
            </div>
            <div className="w-full h-28 rounded-2xl overflow-hidden relative border border-slate-200 bg-slate-100">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://maps.googleapis.com/maps/api/staticmap?center=Bengaluru&zoom=13&size=400x150&sensor=false')",
                }}
              />
              <div className="absolute inset-0 bg-[#FF6B00]/10 pointer-events-none" />
            </div>
          </div>

          {/* Recent Reviews */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#FF6B00] text-xl">rate_review</span>
              Recent Reviews
            </h3>
            <div className="space-y-3">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-1.5">
                <div className="flex justify-between items-start">
                  <span className="font-bold text-xs text-slate-800">Amit Mishra</span>
                  <div className="flex text-amber-400 text-sm">★★★★★</div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  "Very professional work. He fixed the masonry wall quickly and kept the site clean."
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-1.5">
                <div className="flex justify-between items-start">
                  <span className="font-bold text-xs text-slate-800">Sunita Kapoor</span>
                  <div className="flex text-amber-400 text-sm">★★★★☆</div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  "Punctual and skilled worker. Will hire again."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Actions Bar */}
        <div className="p-4 bg-white border-t border-slate-200 flex gap-3 items-center">
          <Link
            href="/messages/m-1"
            className="flex-1 h-14 border-2 border-[#FF6B00] text-[#FF6B00] font-bold rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition-all text-sm"
          >
            <span className="material-symbols-outlined text-lg">chat</span>
            Chat
          </Link>
          <button
            onClick={onHire}
            className="flex-[2] h-14 bg-[#FF6B00] text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-[#FF6B00]/30 active:scale-95 transition-all text-sm"
          >
            Hire {worker.name.split(" ")[0]}
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
}
