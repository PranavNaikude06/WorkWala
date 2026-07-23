"use client";

import { createContext, useContext, useState } from "react";

const AppStateContext = createContext();

export function AppStateProvider({ children }) {
  const [role, setRole] = useState("poster"); // "poster" | "worker" | "admin"
  const [user, setUser] = useState({
    name: "Raj Sharma",
    phone: "+91 98765 43210",
    city: "Koramangala, Bengaluru",
    rating: 4.8,
    jobsPosted: 12,
    workersHired: 45,
    avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC06HDQQMo1TJTqqeyJIjQOiRUoo8ChlnBfm06nZAgVMF8Rxf_jrvGhaz-JbJNsk-TCvmwHJ-mkf70V0LAjLhy5GAp5htrNeZWWKNn1kRi1qNdQxwqj_Q5Ov22UWEYnv2AwzmNgtcQSpVnwdzKFRcCMfnQ1iczrmx889BE39Lytep4qZtF1FTMl-v7skgSC1nVTjItXlTh3rbU5Z1YNl8C9eArrseuYHZTLMUcJtwOGDxnARXnt9AKB2Q",
    isVerified: true,
  });

  const toggleRole = () => {
    setRole((prev) => (prev === "poster" ? "worker" : "poster"));
  };

  return (
    <AppStateContext.Provider
      value={{
        role,
        setRole,
        toggleRole,
        user,
        setUser,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppState must be used within an AppStateProvider");
  }
  return context;
}
