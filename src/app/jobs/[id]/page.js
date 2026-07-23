"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useAppState } from "@/hooks/useAppState";
import TopBar from "@/components/layout/TopBar";
import Button from "@/components/ui/Button";
import WorkerProfileSheet from "@/components/workers/WorkerProfileSheet";
import { MOCK_JOBS } from "@/data/jobs";
import { MOCK_WORKERS } from "@/data/workers";
import { formatCurrency } from "@/lib/utils";

export default function JobDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const { role } = useAppState();

  const jobId = params.id || "job-1";
  const job = MOCK_JOBS.find((j) => j.id === jobId) || MOCK_JOBS[0];

  // Poster State: Selected worker IDs for hiring
  const [selectedWorkers, setSelectedWorkers] = useState(["worker-1", "worker-2"]);
  const [activeWorkerSheet, setActiveWorkerSheet] = useState(null);

  // Worker State: Express interest toggle
  const [expressedInterest, setExpressedInterest] = useState(false);

  const toggleWorkerSelection = (workerId) => {
    if (selectedWorkers.includes(workerId)) {
      setSelectedWorkers(selectedWorkers.filter((id) => id !== workerId));
    } else {
      setSelectedWorkers([...selectedWorkers, workerId]);
    }
  };

  const handleHireSelected = () => {
    if (selectedWorkers.length > 0) {
      router.push("/bookings");
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf5] flex flex-col justify-between max-w-md mx-auto w-full pb-28">
      <TopBar title="WorkWala" showBack backHref="/home" />

      <main className="px-6 py-6 space-y-6">
        {/* Job Banner Card */}
        <section className="bg-white rounded-[24px] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-slate-100 relative overflow-hidden space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <span className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600 mr-2 animate-pulse" />
                Open
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900">{job.title}</h2>
            </div>
            <div className="text-right">
              <p className="text-[#FF6B00] font-extrabold text-xl">
                {formatCurrency(job.payPerDay)}
                <span className="text-xs font-normal text-slate-500">{job.unit}</span>
              </p>
              <p className="text-xs text-slate-500 font-medium">Total Payout: {formatCurrency(job.payPerDay * job.workersNeeded)}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 py-3 border-y border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF6B00] flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">group</span>
              </div>
              <div>
                <p className="text-xs text-slate-500">Needed</p>
                <p className="text-sm font-bold text-slate-800">{job.workersNeeded} Workers</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">calendar_today</span>
              </div>
              <div>
                <p className="text-xs text-slate-500">Duration</p>
                <p className="text-sm font-bold text-slate-800">{job.duration}</p>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2 text-sm text-slate-600">
            <span className="material-symbols-outlined text-[#FF6B00] text-lg">location_on</span>
            <p>{job.city}</p>
          </div>
        </section>

        {/* ROLE DEPENDENT VIEW */}
        {role === "poster" ? (
          /* POSTER VIEW: Interested Workers List */
          <section className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold text-slate-900">
                Interested Workers ({MOCK_WORKERS.length})
              </h3>
              <button
                onClick={() =>
                  setSelectedWorkers(
                    selectedWorkers.length === MOCK_WORKERS.length
                      ? []
                      : MOCK_WORKERS.map((w) => w.id)
                  )
                }
                className="text-[#FF6B00] text-sm font-bold hover:underline"
              >
                {selectedWorkers.length === MOCK_WORKERS.length ? "Deselect All" : "Select All"}
              </button>
            </div>

            <div className="space-y-3">
              {MOCK_WORKERS.map((worker) => {
                const isSelected = selectedWorkers.includes(worker.id);
                return (
                  <div
                    key={worker.id}
                    onClick={() => toggleWorkerSelection(worker.id)}
                    className={`bg-white rounded-[24px] p-4 border-2 transition-all cursor-pointer shadow-sm ${
                      isSelected
                        ? "border-[#FF6B00] bg-[#FF6B00]/5"
                        : "border-slate-100 hover:border-slate-200"
                    }`}
                  >
                    <div className="flex gap-4 items-center">
                      <div className="relative">
                        <img
                          src={worker.avatar}
                          alt={worker.name}
                          className={`w-14 h-14 rounded-full object-cover border-2 ${
                            isSelected ? "border-[#FF6B00]" : "border-slate-200 grayscale"
                          }`}
                        />
                        {isSelected && (
                          <div className="absolute -bottom-1 -right-1 bg-emerald-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] border-2 border-white font-bold">
                            ✓
                          </div>
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold text-base text-slate-900">{worker.name}</h4>
                            <div className="flex items-center gap-1 mt-0.5">
                              <span className="material-symbols-outlined text-amber-400 text-base">star</span>
                              <span className="text-xs font-bold text-slate-800">{worker.rating}</span>
                              <span className="text-xs text-slate-500">({worker.reviewsCount})</span>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveWorkerSheet(worker);
                            }}
                            className="h-9 px-4 bg-[#FF6B00] text-white rounded-full text-xs font-bold shadow-sm hover:bg-[#E05A00] active:scale-95 transition-all"
                          >
                            View
                          </button>
                        </div>

                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {worker.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md text-[11px] font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ) : (
          /* WORKER VIEW: Express Interest */
          <section className="space-y-4">
            <div className="bg-white p-5 rounded-[24px] border border-slate-100 shadow-sm space-y-3">
              <h3 className="font-bold text-base text-slate-900">Job Description</h3>
              <p className="text-sm text-slate-700 leading-relaxed">{job.description}</p>

              {/* Map Preview Graphic */}
              <div className="h-36 rounded-xl bg-slate-200 overflow-hidden relative mt-3 border border-slate-200">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://maps.googleapis.com/maps/api/staticmap?center=Bengaluru&zoom=14&size=400x200&sensor=false')",
                  }}
                />
                <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow">
                  📍 {job.location}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Sticky Bottom Actions Bar */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white p-4 border-t border-slate-200 shadow-lg flex items-center justify-between z-40">
        {role === "poster" ? (
          <>
            <div>
              <p className="text-xs text-slate-500 font-semibold">{selectedWorkers.length} Selected</p>
              <p className="text-base font-extrabold text-slate-900">
                Total: {formatCurrency(selectedWorkers.length * job.payPerDay)}
              </p>
            </div>
            <Button
              onClick={handleHireSelected}
              disabled={selectedWorkers.length === 0}
              fullWidth={false}
              className="px-8"
              icon="arrow_forward"
            >
              Hire Selected ({selectedWorkers.length})
            </Button>
          </>
        ) : (
          <div className="w-full">
            <Button
              onClick={() => setExpressedInterest(!expressedInterest)}
              variant={expressedInterest ? "secondary" : "primary"}
              icon={expressedInterest ? "check_circle" : "send"}
            >
              {expressedInterest ? "Interest Sent" : "Express Interest"}
            </Button>
          </div>
        )}
      </div>

      {/* Worker Profile Bottom Sheet Modal */}
      {activeWorkerSheet && (
        <WorkerProfileSheet
          worker={activeWorkerSheet}
          onClose={() => setActiveWorkerSheet(null)}
          onHire={() => {
            if (!selectedWorkers.includes(activeWorkerSheet.id)) {
              setSelectedWorkers([...selectedWorkers, activeWorkerSheet.id]);
            }
            setActiveWorkerSheet(null);
          }}
        />
      )}
    </div>
  );
}
