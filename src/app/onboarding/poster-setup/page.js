"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppState } from "@/hooks/useAppState";
import TopBar from "@/components/layout/TopBar";
import Button from "@/components/ui/Button";

export default function PosterSetupPage() {
  const router = useRouter();
  const { user, setUser } = useAppState();
  const [name, setName] = useState(user.name);
  const [city, setCity] = useState(user.city);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ ...user, name, city });
    router.push("/home");
  };

  return (
    <div className="min-h-screen bg-[#fafaf5] flex flex-col justify-between max-w-md mx-auto w-full">
      <TopBar title="Complete Poster Profile" showBack backHref="/onboarding/role" />

      <main className="flex-1 px-6 py-6 flex flex-col justify-between">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-1">Tell us about yourself</h2>
            <p className="text-sm text-slate-600">This helps workers know who is hiring them.</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-800 mb-1.5">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Raj Sharma"
                className="w-full h-14 border-2 border-slate-200 rounded-xl px-4 text-base outline-none focus:border-[#FF6B00] bg-white font-medium text-slate-800"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-800 mb-1.5">Default Location / City</label>
              <div className="relative">
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Koramangala, Bengaluru"
                  className="w-full h-14 border-2 border-slate-200 rounded-xl px-4 pl-11 text-base outline-none focus:border-[#FF6B00] bg-white font-medium text-slate-800"
                  required
                />
                <span className="material-symbols-outlined absolute left-3.5 top-4 text-slate-400 text-xl">
                  location_on
                </span>
              </div>
              <button
                type="button"
                onClick={() => setCity("Koramangala, Bengaluru")}
                className="mt-2 text-xs font-bold text-[#FF6B00] flex items-center gap-1 hover:underline"
              >
                <span className="material-symbols-outlined text-sm">my_location</span>
                Use current GPS location
              </button>
            </div>
          </div>

          <div className="pt-8">
            <Button type="submit" icon="arrow_forward">
              Go to Home Screen
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}
