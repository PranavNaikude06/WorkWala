"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppState } from "@/hooks/useAppState";
import TopBar from "@/components/layout/TopBar";
import Button from "@/components/ui/Button";

export default function WorkerSetupPage() {
  const router = useRouter();
  const { user, setUser } = useAppState();
  const [name, setName] = useState(user.name);
  const [experience, setExperience] = useState("3");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ ...user, name, isVerified: false });
    router.push("/home");
  };

  return (
    <div className="min-h-screen bg-[#fafaf5] flex flex-col justify-between max-w-md mx-auto w-full">
      <TopBar title="Complete Worker Profile" showBack backHref="/onboarding/role" />

      <main className="flex-1 px-6 py-6 flex flex-col justify-between">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-1">Set up your Worker Profile</h2>
            <p className="text-sm text-slate-600">Your profile will be reviewed by admin before going live.</p>
          </div>

          {/* Pending Badge Banner */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3">
            <span className="material-symbols-outlined text-amber-600 text-2xl">hourglass_top</span>
            <div className="text-xs space-y-1">
              <p className="font-bold text-sm">Verification Pending</p>
              <p>Once submitted, our admin team verifies your ID within 24 hours.</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-800 mb-1.5">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Ramesh Kumar"
                className="w-full h-14 border-2 border-slate-200 rounded-xl px-4 text-base outline-none focus:border-[#FF6B00] bg-white font-medium text-slate-800"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-800 mb-1.5">Years of Experience</label>
              <input
                type="number"
                min="0"
                max="50"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full h-14 border-2 border-slate-200 rounded-xl px-4 text-base outline-none focus:border-[#FF6B00] bg-white font-medium text-slate-800"
                required
              />
            </div>
          </div>

          <div className="pt-8">
            <Button type="submit" icon="arrow_forward">
              Submit & Go to Home
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}
