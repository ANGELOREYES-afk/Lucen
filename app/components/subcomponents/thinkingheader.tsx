"use client";

import { useState, useEffect } from "react";

// const thoughts = [
//   "Analyzing context...",
//   "Searching database...",
//   "Connecting dots...",
//   "Drafting response...",
//   "Almost ready..."
// ];
type ThingkingHeaderProp = {
    thoughts: string[]
}

export default function ThinkingHeader({thoughts}: ThingkingHeaderProp) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % thoughts.length);
    }, 1500); // Change text every 1.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 mb-4 animate-pulse">
      <div className="w-4 h-4 rounded-full border-2 border-purple-500 border-t-transparent animate-spin" />
      <span className="text-sm text-gray-400 italic font-medium transition-opacity duration-300">
        {thoughts[index]}
      </span>
    </div>
  );
}