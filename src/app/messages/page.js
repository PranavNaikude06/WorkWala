"use client";

import Link from "next/link";
import TopBar from "@/components/layout/TopBar";
import BottomNav from "@/components/layout/BottomNav";
import { MOCK_WORKERS } from "@/data/workers";

export default function MessagesInboxPage() {
  const conversations = [
    {
      id: "m-1",
      worker: MOCK_WORKERS[0], // Ramesh Kumar
      lastMessage: "10:00 AM works perfectly. Please share your location...",
      time: "10:35 AM",
      unread: true,
    },
    {
      id: "m-2",
      worker: MOCK_WORKERS[1], // Suresh Patil
      lastMessage: "I can start the electrical wiring work tomorrow.",
      time: "Yesterday",
      unread: false,
    },
    {
      id: "m-3",
      worker: MOCK_WORKERS[2], // Anjali Devi
      lastMessage: "Thank you for confirming the booking!",
      time: "2 days ago",
      unread: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafaf5] pb-28 max-w-md mx-auto w-full">
      <TopBar title="Messages" showBack backHref="/home" />

      <main className="px-6 pt-6 space-y-4">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900">Conversations</h2>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Direct chat with hired workers & posters
          </p>
        </div>

        <div className="space-y-3">
          {conversations.map((chat) => (
            <Link
              key={chat.id}
              href={`/messages/${chat.id}`}
              className="block bg-white rounded-[24px] p-4 shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-slate-100 active:scale-[0.98] transition-transform hover:shadow-md"
            >
              <div className="flex items-center gap-3.5">
                <div className="relative">
                  <img
                    src={chat.worker.avatar}
                    alt={chat.worker.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#FF6B00]"
                  />
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-base text-slate-900 truncate">
                      {chat.worker.name}
                    </h3>
                    <span className="text-[11px] font-semibold text-slate-400">
                      {chat.time}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 truncate font-medium">
                    {chat.lastMessage}
                  </p>
                </div>

                {chat.unread && (
                  <span className="w-2.5 h-2.5 bg-[#FF6B00] rounded-full flex-shrink-0" />
                )}
              </div>
            </Link>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
