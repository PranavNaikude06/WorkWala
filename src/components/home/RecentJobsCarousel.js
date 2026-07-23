"use client";

import Link from "next/link";
import { MOCK_JOBS } from "@/data/jobs";
import { formatCurrency } from "@/lib/utils";

export default function RecentJobsCarousel() {
  return (
    <section className="pb-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-[#1a1c19]">Recent Jobs Near You</h2>
        <Link href="/jobs" className="text-[#FF6B00] text-sm font-bold hover:underline">
          Explore
        </Link>
      </div>

      <div className="flex space-x-4 overflow-x-auto hide-scrollbar -mx-6 px-6">
        {MOCK_JOBS.map((job) => (
          <div
            key={job.id}
            className="min-w-[280px] bg-white rounded-[24px] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col justify-between space-y-4"
          >
            <div className="flex justify-between items-start">
              <span className="bg-orange-100 text-orange-900 px-3 py-1 rounded-full text-xs font-bold">
                {job.categoryChip}
              </span>
              <img
                src={job.posterAvatar}
                alt={job.postedBy}
                className="w-10 h-10 rounded-full object-cover border border-slate-200"
              />
            </div>

            <div>
              <h3 className="font-bold text-base text-slate-900 line-clamp-1">{job.title}</h3>
              <div className="flex items-center text-slate-500 mt-1 text-xs">
                <span className="material-symbols-outlined text-sm mr-1">location_on</span>
                <span>{job.location}</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-slate-100">
              <span className="text-[#FF6B00] text-lg font-extrabold">
                {formatCurrency(job.payPerDay)}
                <span className="text-xs font-medium text-slate-500">{job.unit}</span>
              </span>
              <Link
                href={`/jobs/${job.id}`}
                className="bg-[#FF6B00] text-white px-4 py-2 rounded-xl text-xs font-bold active:scale-95 transition-all hover:bg-[#E05A00]"
              >
                Apply
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
