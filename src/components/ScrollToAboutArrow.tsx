"use client";

import { useEffect, useState } from "react";

export default function ScrollToAboutArrow() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const target = document.getElementById("about-committee");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    document.getElementById("about-committee")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll to About the Committee"
      className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#e8b96a] transition-opacity duration-500 hover:bg-white/10 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="animate-bounce"
      >
        <path
          d="M3 6l5 5 5-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
