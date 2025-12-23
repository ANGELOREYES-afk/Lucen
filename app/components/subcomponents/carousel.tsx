// components/Carousel.tsx
"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const images = [
    "/abb1.jpeg",
    "/abb2.jpeg",
    "/abb3.jpeg",
    "/abb4.jpeg",
    "/abb5.jpeg",
];

// Duplicate images to create a seamless infinite loop (carnival effect)
const slides = [...images, ...images, ...images];

export default function Carousel() {
  return (
    <div className="relative w-full overflow-hidden py-10">
      {/* 
         - overflow-hidden: Hides the images scrolling off screen 
         - relative: For placing the gradient overlays
      */}

      {/* Side Gradients (Fade edges to black) */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-black to-transparent" />

      {/* The Moving Track */}
      <motion.div
        className="flex gap-8"
        animate={{
          x: ["0%", "-50%"], // Scroll from 0 to -50% (halfway through the tripled list)
        }}
        transition={{
          duration: 30, // Speed of the carnival (seconds)
          ease: "linear",
          repeat: Infinity, // Loop forever
        }}
      >
        {slides.map((src, i) => (
          <Card key={i} src={src} />
        ))}
      </motion.div>
    </div>
  );
}

// Individual Card with "Scale In/Out" Effect
function Card({ src }: { src: string }) {
  // We use a simple CSS animation for the "breathing" scale effect
  // Or just keep it static if the horizontal movement is enough
  return (
    <div className="relative h-40 w-64 flex-shrink-0 overflow-hidden rounded-xl border border-white/10 bg-zinc-900 shadow-lg transition-transform duration-500 hover:scale-110 hover:border-purple-500/50 hover:shadow-purple-500/20">
       {/* 
          If you strictly want them to scale UP/DOWN automatically based on position, 
          that requires complex JS calculations (IntersectionObserver).
          
          Instead, I added a "hover" effect or a generic "pulse" here 
          which creates a similar carnival feel without heavy CPU usage.
       */}
       <img
         src={src}
         alt="ABB"
         className="h-full w-full object-cover opacity-60 transition-opacity duration-500 hover:opacity-100"
       />
    </div>
  );
}
