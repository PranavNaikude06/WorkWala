"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import TopBar from "@/components/layout/TopBar";
import BottomNav from "@/components/layout/BottomNav";
import { MOCK_JOBS } from "@/data/jobs";
import { formatCurrency } from "@/lib/utils";

function FindWorkContent() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get("category") || "all";

  const [activeFilter, setActiveFilter] = useState(initialCat);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const filters = [
    { id: "all", label: "All" },
    { id: "laborer", label: "Laborer" },
    { id: "mason", label: "Mason" },
    { id: "electrician", label: "Electrician" },
    { id: "plumber", label: "Plumber" },
    { id: "painter", label: "Painter" },
    { id: "carpenter", label: "Carpenter" },
  ];

  const handleApply = (e, jobId) => {
    e.stopPropagation();
    if (!appliedJobs.includes(jobId)) {
      setAppliedJobs([...appliedJobs, jobId]);
    }
  };

  const filteredJobs = MOCK_JOBS.filter((job) => {
    const matchesFilter =
      activeFilter === "all" ||
      job.category.toLowerCase() === activeFilter.toLowerCase();
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#fafaf5] pb-28 max-w-md mx-auto w-full">
      <TopBar title="WorkWala" showBack backHref="/home" />

      <main className="px-6 pt-6 space-y-5">
        {/* Search Input Bar */}
        <div className="relative flex items-center bg-white border-2 border-slate-200 rounded-xl px-4 h-14 focus-within:border-[#FF6B00] transition-colors shadow-sm">
          <span className="material-symbols-outlined text-slate-400 text-2xl mr-2">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for work near you..."
            className="flex-1 bg-transparent border-none outline-none text-sm font-medium placeholder:text-slate-400"
          />
          <span className="material-symbols-outlined text-slate-400 text-xl cursor-pointer">
            tune
          </span>
        </div>

        {/* Filter Pills */}
        <div className="flex overflow-x-auto hide-scrollbar gap-2 py-1 -mx-6 px-6">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all active:scale-95 ${
                  isActive
                    ? "bg-[#FF6B00] text-white shadow-sm"
                    : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Job Cards Feed */}
        <div className="space-y-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => {
              const isApplied = appliedJobs.includes(job.id);
              return (
                <Link
                  key={job.id}
                  href={`/jobs/${job.id}`}
                  className="block bg-white rounded-[24px] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-slate-100 relative active:scale-[0.98] transition-all hover:shadow-md"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-bold">
                      🧱 {job.category}
                    </span>
                    {job.isVerified && (
                      <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold">
                        Verified
                      </span>
                    )}
                  </div>

                  <h3 className="font-extrabold text-base text-slate-900 mb-2">
                    {job.title}
                  </h3>

                  <div className="space-y-2 mb-4 text-xs font-medium text-slate-600">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#FF6B00] text-lg">
                        location_on
                      </span>
                      <span>{job.location}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#FF6B00] text-lg">
                        payments
                      </span>
                      <span className="font-extrabold text-[#FF6B00] text-sm">
                        {formatCurrency(job.payPerDay)}/day
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#FF6B00] text-lg">
                        schedule
                      </span>
                      <span>{job.timing}</span>
                    </div>
                  </div>

                  <hr className="border-slate-100 mb-4" />

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={job.posterAvatar}
                        alt={job.postedBy}
                        className="w-8 h-8 rounded-full object-cover border border-slate-200"
                      />
                      <span className="text-xs font-semibold text-slate-600">
                        Posted by {job.postedBy}
                      </span>
                    </div>

                    <button
                      onClick={(e) => handleApply(e, job.id)}
                      disabled={isApplied}
                      className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                        isApplied
                          ? "bg-emerald-600 text-white cursor-default"
                          : "bg-[#FF6B00] text-white hover:bg-[#E05A00] active:scale-95 shadow-sm"
                      }`}
                    >
                      {isApplied ? "Applied ✓" : "Apply"}
                    </button>
                  </div>
                </Link>
              );
            })
          ) : (
            <div className="text-center py-12 space-y-3">
              <span className="material-symbols-outlined text-5xl text-slate-400">
                search_off
              </span>
              <p className="text-base font-bold text-slate-700">No jobs found</p>
              <p className="text-xs text-slate-500">
                Try adjusting your search query or filter criteria.
              </p>
            </div>
          )}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

export default function FindWorkPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-slate-500">Loading jobs...</div>}>
      <FindWorkContent />
    </Suspense>
  );
}
