"use client";

import { useState } from "react";
import Link from "next/link";
import { useAppState } from "@/hooks/useAppState";
import TopBar from "@/components/layout/TopBar";
import BottomNav from "@/components/layout/BottomNav";

export default function BookingsPage() {
  const { role } = useAppState();

  // Tabs state
  const [posterTab, setPosterTab] = useState("ongoing"); // "ongoing" | "completed" | "cancelled"
  const [workerTab, setWorkerTab] = useState("active"); // "active" | "applied" | "completed"

  return (
    <div className="min-h-screen bg-[#fafaf5] pb-28 max-w-md mx-auto w-full">
      <TopBar title="WorkWala" showBack backHref="/home" />

      <main className="px-6 pt-6 space-y-6">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900">
            {role === "poster" ? "My Bookings" : "My Jobs"}
          </h2>
          <p className="text-sm text-slate-500 font-medium">
            {role === "poster"
              ? "Manage ongoing work & hired workers"
              : "Track your earnings and job applications"}
          </p>
        </div>

        {/* Tab Navigation Bar */}
        {role === "poster" ? (
          <div className="flex border-b border-slate-200">
            <button
              onClick={() => setPosterTab("ongoing")}
              className={`flex-1 py-3 text-sm font-bold text-center border-b-2 transition-all ${
                posterTab === "ongoing"
                  ? "border-[#FF6B00] text-[#FF6B00]"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              Ongoing (2)
            </button>
            <button
              onClick={() => setPosterTab("completed")}
              className={`flex-1 py-3 text-sm font-bold text-center border-b-2 transition-all ${
                posterTab === "completed"
                  ? "border-[#FF6B00] text-[#FF6B00]"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              Completed (5)
            </button>
            <button
              onClick={() => setPosterTab("cancelled")}
              className={`flex-1 py-3 text-sm font-bold text-center border-b-2 transition-all ${
                posterTab === "cancelled"
                  ? "border-[#FF6B00] text-[#FF6B00]"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              Cancelled (1)
            </button>
          </div>
        ) : (
          <div className="flex border-b border-slate-200">
            <button
              onClick={() => setWorkerTab("active")}
              className={`flex-1 py-3 text-sm font-bold text-center border-b-2 transition-all ${
                workerTab === "active"
                  ? "border-[#FF6B00] text-[#FF6B00]"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              Active (1)
            </button>
            <button
              onClick={() => setWorkerTab("applied")}
              className={`flex-1 py-3 text-sm font-bold text-center border-b-2 transition-all ${
                workerTab === "applied"
                  ? "border-[#FF6B00] text-[#FF6B00]"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              Applied (3)
            </button>
            <button
              onClick={() => setWorkerTab("completed")}
              className={`flex-1 py-3 text-sm font-bold text-center border-b-2 transition-all ${
                workerTab === "completed"
                  ? "border-[#FF6B00] text-[#FF6B00]"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              Completed (12)
            </button>
          </div>
        )}

        {/* POSTER VIEW CONTENT */}
        {role === "poster" && (
          <div className="space-y-4">
            {posterTab === "ongoing" && (
              <>
                {/* Booking 1 */}
                <div className="bg-white rounded-[24px] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.06)] border-l-4 border-l-[#FF6B00] border border-slate-100 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
                      🧱 Boundary wall construction
                    </h3>
                    <span className="px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-full">
                      Ongoing
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2 overflow-hidden">
                      <img
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDALPxEUeGh3XbRzn1u30T7TqX9zSm-Wbp3DwId8YSqbqYn3gvfZigbycl0wcsgKu4cGUZCa-Ir8ApqcJRgAEPOMlcBwxefz0AaAPMYf9Rsadin1mApNixyMeREm16PEYFqeKQBcFsSBuNJ3mjrdOUjLQvuTZ5ltskSz0nPQlZPGrWE0Bdt_se0thi3DQPb2Am2PpFdbGdqAcl3cPL3NHW4MsK8Y0-_nf-EA3KE_jakMRGCiUYAGrplDg"
                        alt="Ramesh K."
                      />
                      <img
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh2UDKVVDQ0Z8vC_H4q6S29BJBYtSzouXtT6YK1EaiHGG1PrHYyq6rnHF2555qubavjAYq9HJAB2JWuQdHfNTToxExGDUTIlRMLa1Xh05yofmwUJFVkDZS8SKjpSM8HLNFRA0RUMdSdAm2VKj9kWtU-GFq2HTqVnpkdi0BOrKKghPD557TXFLAypBYBTzEB_RWHlgqIB45Sju7br-v4aiejybG3TZTDS6KRixDUjswygQEs0L2j5KA7g"
                        alt="Suresh M."
                      />
                    </div>
                    <span className="text-xs font-semibold text-slate-600">
                      5 Workers Assigned
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-xs text-slate-600 font-semibold pt-2 border-t border-slate-100">
                    <span>💵 ₹12,400 Total</span>
                    <span>📅 Due: Oct 24</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <Link
                      href="/messages/m-1"
                      className="h-12 border-2 border-[#FF6B00] text-[#FF6B00] font-bold rounded-xl flex items-center justify-center gap-1.5 text-xs hover:bg-[#FF6B00]/10 transition-all"
                    >
                      <span className="material-symbols-outlined text-base">chat</span>
                      Chat
                    </Link>
                    <Link
                      href="/review"
                      className="h-12 bg-[#FF6B00] text-white font-bold rounded-xl flex items-center justify-center gap-1.5 text-xs hover:bg-[#E05A00] transition-all shadow-md"
                    >
                      <span className="material-symbols-outlined text-base">check_circle</span>
                      Mark Complete
                    </Link>
                  </div>
                </div>

                {/* Booking 2 */}
                <div className="bg-white rounded-[24px] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.06)] border-l-4 border-l-[#FF6B00] border border-slate-100 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
                      ⚡ Apartment Rewiring
                    </h3>
                    <span className="px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-full">
                      In Progress
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh2UDKVVDQ0Z8vC_H4q6S29BJBYtSzouXtT6YK1EaiHGG1PrHYyq6rnHF2555qubavjAYq9HJAB2JWuQdHfNTToxExGDUTIlRMLa1Xh05yofmwUJFVkDZS8SKjpSM8HLNFRA0RUMdSdAm2VKj9kWtU-GFq2HTqVnpkdi0BOrKKghPD557TXFLAypBYBTzEB_RWHlgqIB45Sju7br-v4aiejybG3TZTDS6KRixDUjswygQEs0L2j5KA7g"
                      alt="Suresh P."
                    />
                    <span className="text-xs font-semibold text-slate-600">
                      2 Workers Assigned
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-xs text-slate-600 font-semibold pt-2 border-t border-slate-100">
                    <span>💵 ₹4,500 Total</span>
                    <span>📅 Due: Oct 20</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <Link
                      href="/messages/m-1"
                      className="h-12 border-2 border-[#FF6B00] text-[#FF6B00] font-bold rounded-xl flex items-center justify-center gap-1.5 text-xs hover:bg-[#FF6B00]/10 transition-all"
                    >
                      <span className="material-symbols-outlined text-base">chat</span>
                      Chat
                    </Link>
                    <Link
                      href="/review"
                      className="h-12 bg-[#FF6B00] text-white font-bold rounded-xl flex items-center justify-center gap-1.5 text-xs hover:bg-[#E05A00] transition-all shadow-md"
                    >
                      <span className="material-symbols-outlined text-base">check_circle</span>
                      Mark Complete
                    </Link>
                  </div>
                </div>
              </>
            )}

            {posterTab === "completed" && (
              <div className="bg-white rounded-[24px] p-5 shadow-sm border border-slate-100 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
                    Completed
                  </span>
                  <span className="text-xs font-bold text-slate-500">Oct 15, 2026</span>
                </div>
                <h3 className="font-bold text-base text-slate-900">House Painting - 2 BHK</h3>
                <p className="text-xs text-slate-500">Paid ₹2,400 to Suresh M. (Rated 5 ★)</p>
              </div>
            )}

            {posterTab === "cancelled" && (
              <div className="bg-white rounded-[24px] p-5 shadow-sm border border-slate-100 space-y-2 text-center py-8">
                <span className="material-symbols-outlined text-3xl text-slate-400">cancel</span>
                <p className="text-sm font-bold text-slate-700">1 Job Cancelled</p>
                <p className="text-xs text-slate-500">Cleaning job cancelled by poster on Oct 10</p>
              </div>
            )}
          </div>
        )}

        {/* WORKER VIEW CONTENT */}
        {role === "worker" && (
          <div className="space-y-4">
            {workerTab === "active" && (
              <div className="bg-white border-2 border-emerald-500 rounded-[24px] p-5 shadow-[0_4px_12px_rgba(0,0,0,0.06)] space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold mb-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse mr-2" />
                      🟢 Ongoing
                    </span>
                    <h3 className="font-extrabold text-base text-slate-900">
                      Boundary wall construction
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-[#FF6B00] font-extrabold text-lg">₹850</p>
                    <p className="text-xs text-slate-500">/ day</p>
                  </div>
                </div>

                <div className="space-y-2 text-xs font-semibold text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#FF6B00]">location_on</span>
                    <span>Koramangala, Bengaluru</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#FF6B00]">person</span>
                    <span>Hired by <strong className="text-slate-900">Raj S.</strong></span>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <Link
                    href="/messages/m-1"
                    className="flex-1 h-14 bg-[#FF6B00] text-white font-bold rounded-xl flex items-center justify-center gap-2 text-sm shadow-md hover:bg-[#E05A00] transition-all"
                  >
                    <span className="material-symbols-outlined text-lg">chat</span>
                    Chat
                  </Link>
                </div>
              </div>
            )}

            {workerTab === "applied" && (
              <div className="space-y-3">
                <div className="bg-white rounded-[24px] p-5 shadow-sm border border-slate-100 flex justify-between items-center">
                  <div>
                    <span className="px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-full">
                      ⏳ Pending
                    </span>
                    <h3 className="font-bold text-base text-slate-900 mt-2">Plumbing maintenance</h3>
                    <p className="text-xs text-slate-500 mt-1">Applied 2h ago • ₹1,200 total</p>
                  </div>
                </div>
              </div>
            )}

            {workerTab === "completed" && (
              <div className="bg-white rounded-[24px] p-5 shadow-sm border border-slate-100 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
                    ✅ Completed
                  </span>
                  <span className="text-xs font-bold text-amber-500">4.8 ★</span>
                </div>
                <h3 className="font-bold text-base text-slate-900">Painting Work (3 BHK)</h3>
                <p className="text-xs text-slate-500">Completed on Oct 24 • Earned ₹15,000</p>
              </div>
            )}
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
}
