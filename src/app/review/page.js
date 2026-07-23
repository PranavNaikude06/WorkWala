"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TopBar from "@/components/layout/TopBar";
import Button from "@/components/ui/Button";
import { MOCK_WORKERS } from "@/data/workers";

export default function ReviewPage() {
  const router = useRouter();
  const worker = MOCK_WORKERS[0]; // Ramesh Kumar

  const [rating, setRating] = useState(5);
  const [selectedTags, setSelectedTags] = useState(["Punctual", "Skilled"]);
  const [reviewText, setReviewText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const tags = ["Punctual", "Skilled", "Professional", "Clean work", "Fair Pricing"];

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      router.push("/bookings");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#fafaf5] flex flex-col justify-between max-w-md mx-auto w-full pb-8">
      <TopBar title="Review" showBack backHref="/bookings" />

      <main className="flex-1 px-6 py-6 space-y-6">
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-extrabold text-slate-900">Job Completed! 🎉</h2>
          <p className="text-sm text-slate-600">How was your experience with {worker.name}?</p>
        </div>

        {/* Worker Card */}
        <div className="bg-white rounded-[24px] p-5 border border-slate-200 shadow-sm flex items-center gap-4">
          <img
            src={worker.avatar}
            alt={worker.name}
            className="w-16 h-16 rounded-2xl object-cover border border-slate-200"
          />
          <div>
            <h3 className="font-extrabold text-base text-slate-900">{worker.name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="px-3 py-0.5 bg-orange-100 text-[#FF6B00] rounded-full text-xs font-bold">
                {worker.category}
              </span>
              <span className="text-xs font-bold text-slate-700 flex items-center gap-1">
                ★ {worker.rating}
              </span>
            </div>
          </div>
        </div>

        {/* Star Rating Interactive */}
        <div className="flex flex-col items-center space-y-2 py-2">
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className="text-4xl transition-transform active:scale-90"
              >
                <span
                  className={`material-symbols-outlined text-4xl ${
                    star <= rating ? "text-[#FF6B00] fill-1" : "text-slate-300"
                  }`}
                >
                  star
                </span>
              </button>
            ))}
          </div>
          <p className="text-sm font-bold text-[#FF6B00]">
            {rating === 5
              ? "Excellent! 🌟"
              : rating === 4
              ? "Great Work!"
              : rating === 3
              ? "Good"
              : "Needs Improvement"}
          </p>
        </div>

        {/* Tag Selection */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-slate-900 ml-1">
            What did you like most?
          </label>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => {
              const isSelected = selectedTags.includes(tag);
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold border-2 transition-all ${
                    isSelected
                      ? "bg-[#FF6B00] text-white border-[#FF6B00]"
                      : "bg-white text-slate-700 border-slate-200"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

        {/* Review Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-slate-900 mb-1.5 ml-1">
              Write a review (optional)
            </label>
            <textarea
              rows={4}
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Share your experience working with Ramesh..."
              className="w-full p-4 border-2 border-slate-200 rounded-[20px] text-sm outline-none focus:border-[#FF6B00] bg-white font-medium text-slate-800"
            />
          </div>

          <Button type="submit" disabled={submitted} icon="send">
            {submitted ? "Review Submitted! ✓" : "Submit Review"}
          </Button>
        </form>
      </main>
    </div>
  );
}
