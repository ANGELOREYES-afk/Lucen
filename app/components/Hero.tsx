"use client";

import { useEffect, useState } from "react";

export default function Main() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section className="min-h-[100vh] flex items-center justify-center relative bg-black overflow-hidden">
            {/* Animated Gradient Orbs */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Orb 1 - Purple */}
                <div 
                    className="absolute w-[500px] h-[500px] rounded-full opacity-30 blur-[100px] animate-orb-spin"
                    style={{
                        background: "radial-gradient(circle, rgba(140, 82, 255, 0.8), transparent 70%)",
                        top: "20%",
                        left: "10%",
                        animationDuration: "25s",
                    }}
                />
                
                {/* Orb 2 - Blue */}
                <div 
                    className="absolute w-[400px] h-[400px] rounded-full opacity-30 blur-[100px] animate-orb-float"
                    style={{
                        background: "radial-gradient(circle, rgba(59, 130, 246, 0.8), transparent 70%)",
                        top: "60%",
                        right: "15%",
                        animationDuration: "30s",
                        animationDelay: "0s",
                    }}
                />
                
                {/* Orb 3 - Pink */}
                <div 
                    className="absolute w-[450px] h-[450px] rounded-full opacity-25 blur-[100px] animate-orb-drift"
                    style={{
                        background: "radial-gradient(circle, rgba(236, 72, 153, 0.7), transparent 70%)",
                        top: "40%",
                        right: "25%",
                        animationDuration: "35s",
                        animationDelay: "5s",
                    }}
                />
                
                {/* Orb 4 - Cyan */}
                <div 
                    className="absolute w-[350px] h-[350px] rounded-full opacity-25 blur-[100px] animate-orb-spin"
                    style={{
                        background: "radial-gradient(circle, rgba(34, 211, 238, 0.7), transparent 70%)",
                        bottom: "20%",
                        left: "25%",
                        animationDuration: "28s",
                        animationDelay: "10s",
                    }}
                />

                {/* Interactive Mouse Orb */}
                <div 
                    className="absolute w-[300px] h-[300px] rounded-full opacity-20 blur-[80px] transition-all duration-500 ease-out pointer-events-none"
                    style={{
                        background: "radial-gradient(circle, rgba(168, 85, 247, 0.9), transparent 70%)",
                        left: `${mousePosition.x - 150}px`,
                        top: `${mousePosition.y - 150}px`,
                    }}
                />
            </div>

            {/* Subtle star pattern overlay */}
            <div className="pointer-events-none absolute inset-0">
                <div className="w-full h-full bg-[radial-gradient(circle,_rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[size:3px_3px] opacity-10" />
            </div>
            
            <section className="relative z-10 max-w-3xl mx-auto px-4 text-center space-y-8">
                {/* pill */}
                <div className="inline-flex overflow-hidden rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-200">
                    <span className="bg-purple-600 px-4 py-2">
                        AI-Powered Career Intelligence
                    </span>
                    <span className="px-4 py-2 text-gray-300">
                        Learn What Companies Are Building
                    </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
                    Know the Engineering
                    <br />
                    Industry. In Minutes.
                </h1>

                <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto">
                    Real projects. Real tech. Real insight. All in one place.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <button className="rounded-full bg-purple-600 hover:bg-purple-500 px-6 py-2 text-sm font-medium shadow-[0_0_20px_rgba(140,82,255,0.5)]">
                        Try Lucen
                    </button>
                    <button className="rounded-full border border-white/20 hover:border-white/40 px-6 py-2 text-sm font-medium">
                        Browse Companies
                    </button>
                </div>
            </section>
        </section>
    );
}
