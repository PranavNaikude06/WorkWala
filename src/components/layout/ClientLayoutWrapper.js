"use client";

import { AppStateProvider } from "@/hooks/useAppState";

export default function ClientLayoutWrapper({ children }) {
  return <AppStateProvider>{children}</AppStateProvider>;
}
