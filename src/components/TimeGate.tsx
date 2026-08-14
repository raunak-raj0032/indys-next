"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type TimeSync = {
  serverTimeMs: number;
  syncedPerformanceMs: number;
};

export const TimeSyncContext = createContext<TimeSync | null>(null);

export function useTimeSync() {
  const timeSync = useContext(TimeSyncContext);

  if (!timeSync) {
    throw new Error("useTimeSync must be used inside TimeGate");
  }

  return timeSync;
}

type TimeGateProps = {
  children: React.ReactNode;
};

export default function TimeGate({ children }: TimeGateProps) {
  const [timeSync, setTimeSync] = useState<TimeSync | null>(null);

  useEffect(() => {
    let isMounted = true;
    let isSyncing = false;
    let retryDelayMs = 1000;
    let retryTimer: number | undefined;

    const scheduleRetry = () => {
      if (!isMounted) {
        return;
      }

      retryTimer = window.setTimeout(() => void syncTime(), retryDelayMs);
      retryDelayMs = Math.min(retryDelayMs * 2, 30_000);
    };

    const syncTime = async () => {
      if (!isMounted || isSyncing) {
        return;
      }

      isSyncing = true;
      const requestPerformanceMs = performance.now();

      try {
        const response = await fetch("/api/registration-time", {
          cache: "no-store",
        });
        const data = (await response.json()) as { serverTimeMs?: number };
        const responsePerformanceMs = performance.now();

        if (response.ok && typeof data.serverTimeMs === "number" && Number.isFinite(data.serverTimeMs) && isMounted) {
          setTimeSync({
            serverTimeMs: data.serverTimeMs,
            syncedPerformanceMs: requestPerformanceMs + (responsePerformanceMs - requestPerformanceMs) / 2,
          });
          return;
        }

        scheduleRetry();
      } catch {
        scheduleRetry();
      } finally {
        isSyncing = false;
      }
    };

    void syncTime();

    return () => {
      isMounted = false;
      if (retryTimer !== undefined) {
        window.clearTimeout(retryTimer);
      }
    };
  }, []);

  if (!timeSync) {
    return (
      <main
        className="flex min-h-screen items-center justify-center bg-[#071225] text-white"
        aria-busy="true"
        aria-label="Synchronizing official time"
      >
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#c8963e]/30 border-t-[#e8b96a]" aria-hidden="true" />
      </main>
    );
  }

  return <TimeSyncContext.Provider value={timeSync}>{children}</TimeSyncContext.Provider>;
}
