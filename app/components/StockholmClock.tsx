"use client";

import { useState, useEffect } from "react";

export default function StockholmClock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const stockholmTime = new Intl.DateTimeFormat("en-SE", {
        timeZone: "Europe/Stockholm",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);

      setTime(stockholmTime);
    };

    // Update immediately
    updateClock();

    // Update every second
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!time) return <div className="text-xl font-mono">--:--:--</div>;

  return (
    <div className="flex items-center gap-2">
      <span className="text-xl font-mono font-bold">{time}</span>
    </div>
  );
}
