"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppState } from "@/hooks/useAppState";
import TopBar from "@/components/layout/TopBar";
import Button from "@/components/ui/Button";

export default function RoleSelectionPage() {
  const router = useRouter();
  const { setRole } = useAppState();
  const [selectedRole, setSelectedRole] = useState("poster"); // "poster" | "worker"
  const [skills, setSkills] = useState(["Mason", "Laborer"]);
  const [radius, setRadius] = useState(12);

  const availableSkills = ["Laborer", "Mason", "Electrician", "Plumber", "Painter", "Carpenter", "Driver", "Gardener"];

  const toggleSkill = (skill) => {
    if (skills.includes(skill)) {
      setSkills(skills.filter((s) => s !== skill));
    } else {
      setSkills([...skills, skill]);
    }
  };

  const handleContinue = () => {
    setRole(selectedRole);
    if (selectedRole === "worker") {
      router.push("/onboarding/worker-setup");
    } else {
      router.push("/onboarding/poster-setup");
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf5] flex flex-col justify-between max-w-md mx-auto w-full">
      <TopBar title="WorkWala" showBack={false} />

      <main className="flex-1 px-6 py-6 flex flex-col space-y-6">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-1">
            How do you want to use WorkWala?
          </h2>
          <p className="text-sm text-slate-600">
            Choose your primary role to get started with the best experience.
          </p>
        </div>

        {/* Cards Stack */}
        <div className="space-y-4">
          {/* Poster Card */}
          <button
            type="button"
            onClick={() => setSelectedRole("poster")}
            className={`w-full p-5 rounded-[24px] border-2 text-left flex items-center gap-4 transition-all shadow-sm active:scale-95 ${
              selectedRole === "poster"
                ? "border-[#FF6B00] bg-[#FF6B00]/5 shadow-[#FF6B00]/10"
                : "border-slate-200 bg-white"
            }`}
          >
            <div className="w-14 h-14 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">work</span>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-base text-slate-900">I need to hire workers</h3>
              <p className="text-xs text-slate-500 mt-0.5">Post a Job & Find Talent</p>
            </div>
            {selectedRole === "poster" && (
              <span className="material-symbols-outlined text-[#FF6B00] text-2xl">
                check_circle
              </span>
            )}
          </button>

          {/* Worker Card */}
          <button
            type="button"
            onClick={() => setSelectedRole("worker")}
            className={`w-full p-5 rounded-[24px] border-2 text-left flex items-center gap-4 transition-all shadow-sm active:scale-95 ${
              selectedRole === "worker"
                ? "border-[#FF6B00] bg-[#FF6B00]/5 shadow-[#FF6B00]/10"
                : "border-slate-200 bg-white"
            }`}
          >
            <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">handyman</span>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-base text-slate-900">I'm looking for work</h3>
              <p className="text-xs text-slate-500 mt-0.5">Browse Jobs & Earn Money</p>
            </div>
            {selectedRole === "worker" && (
              <span className="material-symbols-outlined text-[#FF6B00] text-2xl">
                check_circle
              </span>
            )}
          </button>
        </div>

        {/* Disclaimer */}
        <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
          <span className="material-symbols-outlined text-base">info</span>
          <span>You can switch roles anytime later in your profile</span>
        </div>

        {/* Worker Details Fields */}
        {selectedRole === "worker" && (
          <div className="space-y-6 pt-2 border-t border-slate-200/80 animate-fade-in">
            {/* Skills */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                Select your skills
              </label>
              <div className="flex flex-wrap gap-2">
                {availableSkills.map((skill) => {
                  const isSelected = skills.includes(skill);
                  return (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => toggleSkill(skill)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold border-2 transition-all ${
                        isSelected
                          ? "bg-[#FF6B00] text-white border-[#FF6B00]"
                          : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {skill}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Radius Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-slate-900">Search Radius</label>
                <span className="text-sm font-bold text-[#FF6B00]">{radius} km</span>
              </div>
              <input
                type="range"
                min={1}
                max={25}
                value={radius}
                onChange={(e) => setRadius(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#FF6B00]"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-1">
                <span>1 KM</span>
                <span>25 KM</span>
              </div>
            </div>

            {/* ID Upload */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                Verify Identity (Gov ID)
              </label>
              <div className="border-2 border-dashed border-slate-300 rounded-[20px] p-6 bg-slate-50 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-100 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-2 shadow-sm">
                  <span className="material-symbols-outlined text-[#FF6B00] text-2xl">
                    cloud_upload
                  </span>
                </div>
                <p className="text-sm font-bold text-slate-800">Upload Gov ID</p>
                <p className="text-xs text-slate-500 mt-0.5">Aadhaar, Voter ID, DL (JPG/PDF)</p>
              </div>
            </div>
          </div>
        )}

        {/* Continue Action */}
        <div className="pt-4 mt-auto">
          <Button onClick={handleContinue} icon="arrow_forward">
            Continue
          </Button>
        </div>
      </main>
    </div>
  );
}
