"use client";

import { useState } from "react";
import TopBar from "@/components/layout/TopBar";
import BottomNav from "@/components/layout/BottomNav";
import { MOCK_WORKERS } from "@/data/workers";

export default function AdminPage() {
  const pendingWorkers = MOCK_WORKERS.filter((w) => w.status === "pending");
  const [queue, setQueue] = useState(pendingWorkers);
  const [approvedCount, setApprovedCount] = useState(42);
  const [rejectedCount, setRejectedCount] = useState(14);
  const [activeTab, setActiveTab] = useState("queue");

  const handleApprove = (id) => {
    setQueue(queue.filter((w) => w.id !== id));
    setApprovedCount((prev) => prev + 1);
  };

  const handleReject = (id) => {
    setQueue(queue.filter((w) => w.id !== id));
    setRejectedCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[#fafaf5] pb-28 max-w-md mx-auto w-full">
      <TopBar title="WorkWala Admin" showBack backHref="/home" />

      <main className="px-6 pt-6 space-y-6">
        {/* Statistics Bar */}
        <section className="flex flex-wrap gap-2 text-xs font-bold">
          <div className="bg-white border border-slate-200 flex items-center gap-2 px-3 py-1.5 rounded-full shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
            <span className="text-slate-600">
              Approved: <strong className="text-slate-900">{approvedCount}</strong>
            </span>
          </div>
          <div className="bg-white border border-slate-200 flex items-center gap-2 px-3 py-1.5 rounded-full shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B00]" />
            <span className="text-slate-600">
              Pending: <strong className="text-slate-900">{queue.length}</strong>
            </span>
          </div>
          <div className="bg-white border border-slate-200 flex items-center gap-2 px-3 py-1.5 rounded-full shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
            <span className="text-slate-600">
              Rejections: <strong className="text-slate-900">{rejectedCount}</strong>
            </span>
          </div>
        </section>

        {/* Panel Title & Tabs */}
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Admin Panel</h2>
          <div className="flex gap-4 border-b border-slate-200 text-xs font-bold">
            <button
              onClick={() => setActiveTab("queue")}
              className={`pb-2.5 border-b-2 transition-all ${
                activeTab === "queue"
                  ? "border-[#FF6B00] text-[#FF6B00]"
                  : "border-transparent text-slate-400 hover:text-slate-700"
              }`}
            >
              Verification Queue ({queue.length})
            </button>
            <button
              onClick={() => setActiveTab("reported")}
              className={`pb-2.5 border-b-2 transition-all ${
                activeTab === "reported"
                  ? "border-[#FF6B00] text-[#FF6B00]"
                  : "border-transparent text-slate-400 hover:text-slate-700"
              }`}
            >
              Reported Content (0)
            </button>
          </div>
        </div>

        {/* Queue List */}
        <section className="space-y-4">
          {queue.length > 0 ? (
            queue.map((worker) => (
              <div
                key={worker.id}
                className="bg-white rounded-[24px] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-slate-100 space-y-4 transition-all"
              >
                <div className="flex gap-4 items-start">
                  <img
                    src={worker.avatar}
                    alt={worker.name}
                    className="w-16 h-16 rounded-2xl object-cover border border-slate-200"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-extrabold text-base text-slate-900">
                        {worker.name}
                      </h3>
                      <span className="px-2.5 py-0.5 bg-amber-100 text-amber-900 text-[11px] font-bold rounded-full">
                        ⏳ Pending
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 font-semibold mt-0.5">
                      📍 {worker.location}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {worker.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-bold uppercase rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl flex justify-between items-center text-xs font-semibold text-slate-700 border border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#FF6B00] text-lg">
                      badge
                    </span>
                    <span>{worker.idAttached || "Government ID Attached"}</span>
                  </div>
                  <button
                    onClick={() => alert("Viewing attached Government ID document...")}
                    className="text-[#FF6B00] font-bold hover:underline"
                  >
                    View ID
                  </button>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-3 gap-2 pt-1">
                  <button
                    onClick={() => handleApprove(worker.id)}
                    className="h-10 bg-emerald-600 text-white font-bold text-xs rounded-xl hover:bg-emerald-700 active:scale-95 transition-all shadow-sm"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(worker.id)}
                    className="h-10 bg-red-600 text-white font-bold text-xs rounded-xl hover:bg-red-700 active:scale-95 transition-all shadow-sm"
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => alert("Information requested from worker.")}
                    className="h-10 border-2 border-[#FF6B00] text-[#FF6B00] font-bold text-xs rounded-xl hover:bg-[#FF6B00]/10 active:scale-95 transition-all"
                  >
                    Req Info
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-emerald-50 rounded-[24px] p-8 border-2 border-dashed border-emerald-300 text-center space-y-3">
              <span className="material-symbols-outlined text-5xl text-emerald-600">
                verified_user
              </span>
              <h3 className="font-extrabold text-base text-slate-900">
                Queue Clear! 🎉
              </h3>
              <p className="text-xs text-slate-600">
                All worker verification requests have been processed.
              </p>
              <button
                onClick={() => setQueue(pendingWorkers)}
                className="text-xs font-bold text-[#FF6B00] hover:underline"
              >
                Reset Queue for Demo
              </button>
            </div>
          )}
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
