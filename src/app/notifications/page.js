"use client";

import { useState } from "react";
import TopBar from "@/components/layout/TopBar";
import BottomNav from "@/components/layout/BottomNav";
import { MOCK_NOTIFICATIONS } from "@/data/bookings";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);

  const markAllRead = () => {
    setNotifications(
      notifications.map((n) => ({ ...n, unread: false }))
    );
  };

  return (
    <div className="min-h-screen bg-[#fafaf5] pb-28 max-w-md mx-auto w-full">
      <TopBar
        title="Notifications"
        showBack
        backHref="/home"
        rightAction={
          <button
            onClick={markAllRead}
            className="text-xs font-bold text-white hover:underline"
          >
            Mark all read
          </button>
        }
      />

      <main className="px-6 pt-6 space-y-6">
        {/* Today Section */}
        <section className="space-y-3">
          <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Today</h2>

          <div className="space-y-3">
            {notifications.map((item) => (
              <div
                key={item.id}
                className={`p-4 rounded-[20px] bg-white border transition-all shadow-sm flex items-start gap-3.5 cursor-pointer ${
                  item.unread ? "border-l-4 border-l-[#FF6B00] border-slate-200" : "border-slate-100 opacity-90"
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-orange-100 text-[#FF6B00] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-xl">
                    {item.type === "interest"
                      ? "person_search"
                      : item.type === "payment"
                      ? "payments"
                      : "notifications"}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-sm text-slate-900 truncate">{item.title}</h3>
                    <span className="text-[11px] font-semibold text-[#FF6B00]">{item.time}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Weekly Recap Bento Card */}
        <section className="p-5 rounded-[24px] bg-[#1A1A2E] text-white space-y-3 shadow-lg relative overflow-hidden">
          <div className="flex items-center gap-2 text-xs font-bold text-[#FF6B00] uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm">trending_up</span>
            Weekly Recap
          </div>
          <h3 className="text-lg font-extrabold">Your Profile was viewed 142 times this week!</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            That's 40% more than last week. Keep your skills updated to attract more job posters.
          </p>
          <button className="px-5 py-2 bg-[#FF6B00] text-white text-xs font-bold rounded-full shadow-md active:scale-95 transition-all">
            View Stats
          </button>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
