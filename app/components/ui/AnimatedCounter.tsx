"use client";

import { useEffect, useState } from "react";

export default function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1600;
    const start = performance.now();
    let frame = 0;

    const update = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * easedProgress));

      if (progress < 1) {
        frame = requestAnimationFrame(update);
      }
    };

    frame = requestAnimationFrame(update);

    return () => cancelAnimationFrame(frame);
  }, [value]);

  return <>{count}{suffix}</>;
}