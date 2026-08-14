"use client";

import { useEffect, useState } from "react";

type TimeGateProps = {
  children: React.ReactNode;
};

export default function TimeGate({ children }: TimeGateProps) {
  const [isSynced, setIsSynced] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let isSyncing = false;

    const syncTime = async () => {
      if (!isMounted || isSyncing) {
        return;
      }

      isSyncing = true;

      try {
        const response = await fetch("/api/registration-time", {
          cache: "no-store",
        });
        const data = (await response.json()) as { serverTimeMs?: number };

        if (response.ok && typeof data.serverTimeMs === "number" && Number.isFinite(data.serverTimeMs) && isMounted) {
          setIsSynced(true);
          window.clearInterval(retryTimer);
        }
      } catch {
        // Retry until the authoritative time endpoint is reachable.
      } finally {
        isSyncing = false;
      }
    };

    void syncTime();
    const retryTimer = window.setInterval(() => void syncTime(), 1000);

    return () => {
      isMounted = false;
      window.clearInterval(retryTimer);
    };
  }, []);

  if (!isSynced) {
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

  return children;
}
