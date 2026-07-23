"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MOCK_MESSAGES } from "@/data/bookings";
import { MOCK_WORKERS } from "@/data/workers";

export default function ChatThreadPage() {
  const router = useRouter();
  const worker = MOCK_WORKERS[0]; // Ramesh Kumar

  const [messages, setMessages] = useState([
    {
      id: "1",
      sender: "Ramesh K.",
      text: "Namaste! I'm interested in the plumbing job you posted. I can visit your location tomorrow morning.",
      time: "10:30 AM",
      isMe: false,
    },
    {
      id: "2",
      sender: "Raj S.",
      text: "Hi Ramesh, can you come tomorrow around 10:00 AM? The pipe under the kitchen sink is leaking heavily.",
      time: "10:32 AM",
      isMe: true,
    },
    {
      id: "3",
      sender: "Ramesh K.",
      text: "10:00 AM works perfectly. Please share your exact location via the pin, and I'll be there on time. Do you have any spare washers or should I bring them?",
      time: "10:35 AM",
      isMe: false,
    },
    {
      id: "4",
      sender: "Raj S.",
      text: "",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMYf3hTipNMp3YFmV8DWVepiKV0r-lwycvfabiiunwTfLOpokHlJDAugM9B9wQdwKH-Ksp5ZGT7o-f_g-h_TvxoTVEYizTjM43RyRnlAnpvCp-m50yyYtagk9MufJdLPcMudISHm60_QAwcTTPuw39WX18KF3mkIRnn4jFV2EdsCFSnaVOWlo2aaAkxky5QW8h5byvDn10u_C8IODDnlTJnneI1pvA88a2snyjbo861RqsL513G6ifwg",
      time: "10:38 AM",
      isMe: true,
    },
  ]);

  const [inputText, setInputText] = useState("");
  const chatBottomRef = useRef(null);

  const scrollToBottom = () => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMessage = {
      id: String(Date.now()),
      sender: "Raj S.",
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      isMe: true,
    };

    setMessages([...messages, newMessage]);
    setInputText("");
  };

  return (
    <div className="min-h-screen bg-[#fafaf5] flex flex-col justify-between max-w-md mx-auto w-full relative">
      {/* Top Header */}
      <header className="bg-[#E05A00] text-white sticky top-0 z-40 h-16 px-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push("/messages")}
            className="p-1 rounded-full hover:bg-white/10 active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </button>

          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={worker.avatar}
                alt={worker.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-white/30"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#E05A00] rounded-full animate-pulse" />
            </div>
            <div>
              <h2 className="font-extrabold text-base leading-tight">{worker.name}</h2>
              <span className="text-xs text-white/90 flex items-center gap-1 font-medium">
                🟢 Online
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button className="p-2 hover:bg-white/10 rounded-full">
            <span className="material-symbols-outlined text-xl">call</span>
          </button>
          <button className="p-2 hover:bg-white/10 rounded-full">
            <span className="material-symbols-outlined text-xl">more_vert</span>
          </button>
        </div>
      </header>

      {/* Scrollable Messages Canvas */}
      <main className="flex-1 overflow-y-auto px-4 py-4 space-y-4 pb-24">
        {/* Date Divider */}
        <div className="flex justify-center">
          <span className="bg-slate-200 text-slate-600 text-[11px] font-bold px-3 py-1 rounded-full">
            Today
          </span>
        </div>

        {/* Job Context Micro Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-3.5 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-100 text-[#FF6B00] rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-xl">plumbing</span>
            </div>
            <div>
              <h4 className="font-bold text-xs text-slate-900">Kitchen Pipe Repair</h4>
              <p className="text-[11px] text-slate-500 font-medium">Scheduled for: Pending</p>
            </div>
          </div>
          <Link
            href="/jobs/job-1"
            className="bg-[#FF6B00] text-white text-xs font-bold px-3 py-1.5 rounded-lg active:scale-95 transition-all shadow-sm"
          >
            Hire Now
          </Link>
        </div>

        {/* Message Bubbles */}
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col gap-1 max-w-[85%] ${
              msg.isMe ? "self-end items-end" : "items-start"
            }`}
          >
            <div
              className={`p-3.5 rounded-2xl text-sm leading-relaxed ${
                msg.isMe
                  ? "bg-[#FF6B00] text-white rounded-br-none shadow-md"
                  : "bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-sm"
              }`}
            >
              {msg.image && (
                <img
                  src={msg.image}
                  alt="Attachment"
                  className="w-56 h-48 rounded-xl object-cover mb-1 border border-white/20"
                />
              )}
              {msg.text && <p className="font-medium">{msg.text}</p>}
            </div>
            <span className="text-[10px] font-semibold text-slate-400 px-1">
              {msg.time} {msg.isMe && "✓✓"}
            </span>
          </div>
        ))}
        <div ref={chatBottomRef} />
      </main>

      {/* Bottom Message Input Bar */}
      <footer className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-slate-200 h-16 px-4 flex items-center gap-2 z-40">
        <button className="text-slate-400 hover:text-slate-600 p-1">
          <span className="material-symbols-outlined text-2xl">add_circle</span>
        </button>

        <form onSubmit={handleSend} className="flex-1 flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 h-11 bg-slate-100 rounded-full px-4 text-sm font-medium outline-none focus:ring-2 focus:ring-[#FF6B00] border border-slate-200"
          />
          <button
            type="submit"
            className="w-11 h-11 bg-[#FF6B00] text-white rounded-full flex items-center justify-center shadow-md active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-xl">send</span>
          </button>
        </form>
      </footer>
    </div>
  );
}
