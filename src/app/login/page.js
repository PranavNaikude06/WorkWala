"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function LoginPage() {
  const router = useRouter();
  const [step, setStep] = useState("phone"); // "phone" | "otp"
  const [phone, setPhone] = useState("98765 43210");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (phone.trim().length >= 10) {
      setStep("otp");
      setTimeout(() => {
        inputRefs[0].current?.focus();
      }, 100);
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-advance to next input
    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    // Navigate to role selection onboarding
    router.push("/onboarding/role");
  };

  return (
    <div className="min-h-screen bg-[#fafaf5] flex flex-col justify-between px-6 pt-6 pb-8 max-w-md mx-auto w-full">
      {/* Top Header Logo */}
      <header className="flex justify-between items-center h-14">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#FF6B00] rounded-xl flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-white text-2xl">work</span>
          </div>
          <span className="text-xl font-extrabold text-[#FF6B00] tracking-tight">
            WorkWala
          </span>
        </Link>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col pt-6 pb-6">
        <div className="mb-8">
          <h1 className="text-2xl font-extrabold text-[#1a1c19] mb-2">
            {step === "phone" ? "Enter your phone number" : "Verify OTP Code"}
          </h1>
          <p className="text-slate-600 text-sm">
            {step === "phone"
              ? "We'll send you a one-time verification code"
              : `Code sent to +91 ${phone}`}
          </p>
        </div>

        {/* Step 1: Phone Input Form */}
        {step === "phone" ? (
          <form onSubmit={handleSendOtp} className="space-y-6">
            <div className="relative">
              <div className="flex items-center h-14 border-2 border-slate-200 rounded-xl bg-white focus-within:border-[#FF6B00] overflow-hidden px-4 transition-all">
                <div className="flex items-center gap-2 pr-3 border-r border-slate-200">
                  <span className="text-lg">🇮🇳</span>
                  <span className="text-base font-semibold text-slate-800">+91</span>
                </div>
                <input
                  type="tel"
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="98765 43210"
                  className="flex-1 h-full bg-transparent border-none outline-none text-lg font-medium px-4 text-slate-800 focus:ring-0 placeholder:text-slate-400"
                  required
                />
              </div>
            </div>

            <Button type="submit" icon="arrow_forward">
              Send OTP
            </Button>
          </form>
        ) : (
          /* Step 2: OTP Entry Form */
          <form onSubmit={handleVerify} className="space-y-6">
            <div className="bg-slate-100/80 p-6 rounded-3xl border border-slate-200/60">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Enter 4-Digit Code
                </span>
                <button
                  type="button"
                  onClick={() => setStep("phone")}
                  className="text-xs font-bold text-[#FF6B00] hover:underline"
                >
                  Change Number
                </button>
              </div>

              <div className="flex justify-between gap-3 mb-6">
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    ref={inputRefs[idx]}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(idx, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                    className="w-14 h-16 text-center text-2xl font-bold border-2 border-slate-300 focus:border-[#FF6B00] rounded-xl bg-white outline-none transition-all shadow-sm"
                  />
                ))}
              </div>

              <Button type="submit">Verify & Continue</Button>

              <p className="mt-4 text-center text-xs font-semibold text-slate-500">
                Didn't receive code?{" "}
                <button
                  type="button"
                  onClick={() => alert("OTP Resent!")}
                  className="text-[#FF6B00] font-bold underline ml-1"
                >
                  Resend OTP
                </button>
              </p>
            </div>
          </form>
        )}

        {/* Visual Trust Card */}
        <div className="mt-auto pt-8 flex justify-center">
          <div className="w-full max-w-[300px] h-[180px] rounded-3xl overflow-hidden relative shadow-lg">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDdVkCTkKAkFIaYYTdphMnWlL4bhgwFY79mPOgPpLaaQFKT_kf5muaIyCeJkqnsAT9_Z_1uFSc9rN32t7hueaEF_YomQjgvbHmbWpICYABK0i1hLQ_van-M4R9cqbw3h-JGmiOTLWiZSrfa2zpVaGsRwNbam1lB70OK7oXpN-3BqTrOJli3Y8tbuZFZ4Eu8k28kszwqqNFyMjOg6DQ6Egm2h-GHJiElXgfHuky-iey7B48wMBfk6mkJqw')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4 text-white">
              <span className="font-bold text-base">10,000+ Skilled Pros</span>
              <span className="text-xs text-white/80">
                Trust WorkWala every day
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center">
        <p className="text-xs text-slate-500 leading-relaxed">
          By continuing, you agree to our <br />
          <a href="#" className="text-[#FF6B00] font-bold hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-[#FF6B00] font-bold hover:underline">
            Privacy Policy
          </a>
        </p>
      </footer>
    </div>
  );
}
