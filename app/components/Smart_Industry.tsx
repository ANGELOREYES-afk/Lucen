"use client";

import { useState } from "react";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { FaMicrochip } from "react-icons/fa6";
import { GiArena } from "react-icons/gi";
import { ImLoop } from "react-icons/im";
import { FcAbout } from "react-icons/fc";


export default function Smart_Industry() {
  return (
    <section className="min-h-screen bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-4">
            A Smarter Way to<br />
            Understand The Industry
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            We transform real company work, technology updates, and market trends
            into clear insights that help students learn faster and prepare with
            confidence.
          </p>
        </div>

        {/* 4-Step Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Step 1 - Analyzing Companies */}
          <div className="bg-zinc-950 border border-white/10 rounded-xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative space-y-4">
              <div className="text-[10px] font-medium text-gray-500 uppercase">Step 1</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Analyzing Companies</h3>
                <p className="text-sm text-gray-400">
                  We scan engineering companies and pull the signals that actually matter for your career.
                </p>
              </div>

              {/* Radar Animation + List */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {/* Left - Radar */}
                <div className="flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    {/* Radar circles */}
                    <div className="absolute inset-0 rounded-full border border-white/10" />
                    <div className="absolute inset-[20%] rounded-full border border-white/10" />
                    <div className="absolute inset-[40%] rounded-full border border-white/10" />
                    
                    {/* Center dot */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-purple-500 rounded-full" />
                    
                    {/* Sweeping radar line */}
                    <div className="absolute top-1/2 left-1/2 origin-left w-16 h-0.5 bg-gradient-to-r from-purple-500 to-transparent animate-radar-sweep" />
                    
                    {/* Scanning dots */}
                    <div className="absolute top-[30%] right-[35%] w-1 h-1 bg-purple-400 rounded-full animate-radar-ping" style={{ animationDelay: '0s' }} />
                    <div className="absolute bottom-[40%] left-[25%] w-1 h-1 bg-blue-400 rounded-full animate-radar-ping" style={{ animationDelay: '0.5s' }} />
                    <div className="absolute top-[45%] right-[20%] w-1 h-1 bg-cyan-400 rounded-full animate-radar-ping" style={{ animationDelay: '1s' }} />
                    
                    {/* Status text */}
                    <div className="absolute -bottom-5 left-0 right-0 text-center">
                      <span className="text-[10px] text-gray-500">Analyzing workflow...</span>
                    </div>
                  </div>
                </div>

                {/* Right - List */}
                <div className="space-y-1.5">
                  {[
                    { icon: <IoShieldCheckmarkOutline />, label: "Company Overview" },
                    { icon: <FaMicrochip />, label: "Active Projects" },
                    { icon: <RiComputerLine />, label: "Tech Stack" },
                    { icon: <GiArena />, label: "Industry Area" },
                    { icon: <ImLoop />, label: "Hiring task" }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-2 rounded-lg bg-black/40 border border-white/5 hover:border-white/10 transition-all"
                    >
                      <span className="text-xs">{item.icon}</span>
                      <span className="text-xs text-gray-300">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 - Industry Insight Breakdown */}
          <div className="bg-zinc-950 border border-white/10 rounded-xl p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative space-y-4">
              <div className="text-[10px] font-medium text-gray-500 uppercase">Step 2</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Industry Insight Breakdown</h3>
                <p className="text-sm text-gray-400">
                  We turn real projects and tech stacks into simple, high-signal insights you can understand fast.
                </p>
              </div>

              {/* Project visualization placeholder */}
              <div className="mt-6 p-6 rounded-lg bg-black/40 border border-white/5 flex items-center justify-center min-h-[160px]">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white/10 mb-2">Project</div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" />
                    <span className="text-[10px] text-purple-400">Breaking down complexity...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 - Personalized to Your Major */}
          <div className="bg-zinc-950 border border-white/10 rounded-xl p-6 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative space-y-4">
              <div className="text-[10px] font-medium text-gray-500 uppercase">Step 3</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Personalized to Your Major</h3>
                <p className="text-sm text-gray-400">
                  Your brief is personalized to your major — no irrelevant companies, ever.
                </p>
              </div>

              {/* Major Filter Flow - Compact */}
              <div className="mt-6 flex items-center justify-between gap-2 text-xs">
                {/* Left - Categories */}
                <div className="flex-shrink-0 space-y-1">
                  {[
                    { icon: "⚡", label: "Energy", active: false },
                    { icon: "🏗️", label: "Infrastructure", active: false },
                    { icon: "💻", label: "Software", active: false },
                    { icon: "🔌", label: "Electrical", active: true },
                    { icon: "🌱", label: "Sustainability", active: false }
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-center gap-1.5 px-2 py-1 rounded text-[10px] transition-all ${
                        item.active
                          ? "bg-purple-500/20 border border-purple-500/40 text-white"
                          : "bg-black/40 border border-white/5 text-gray-400"
                      }`}
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                      {item.active && <span className="ml-auto text-purple-400">✓</span>}
                    </div>
                  ))}
                </div>

                {/* Arrow */}
                <div className="text-purple-500 flex-shrink-0">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Center - Your Major */}
                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-center min-w-[100px]">
                  <div className="text-[8px] text-gray-400 mb-1">YOUR MAJOR</div>
                  <div className="font-semibold text-xs mb-0.5">Electrical</div>
                  <div className="font-semibold text-xs">Engineering</div>
                  <div className="mt-2 flex items-center justify-center gap-1 text-[8px] text-purple-400">
                    <span>⚡</span>
                    <span>Filtering</span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="text-purple-500 flex-shrink-0">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Right - Results */}
                <div className="flex-shrink-0 space-y-1">
                  <div className="text-[8px] text-gray-400 mb-1">RESULTS</div>
                  {[
                    "Power Systems",
                    "SCADA",
                    "Grid Mod",
                    "Industry"
                  ].map((item) => (
                    <div
                      key={item}
                      className="px-2 py-1 rounded bg-black/40 border border-white/5 text-[10px] text-gray-300"
                    >
                      • {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 - Weekly Updates */}
          <div className="bg-zinc-950 border border-white/10 rounded-xl p-6 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative space-y-4">
              <div className="text-[10px] font-medium text-gray-500 uppercase">Step 4</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Weekly Updates</h3>
                <p className="text-sm text-gray-400">
                  We send you fresh briefs every week so you stay sharp on companies, tech, and trends.
                </p>
              </div>

              {/* Update items */}
              <div className="mt-6 space-y-3">
                <div className="p-3 rounded-lg bg-black/40 border border-white/5 hover:border-purple-500/30 transition-all">
                  <div className="flex items-start gap-2">
                    <div className="text-base">ℹ️</div>
                    <div>
                      <h4 className="text-xs font-medium mb-0.5">SCADA Automation Update</h4>
                      <p className="text-[10px] text-gray-500">New stack update: protection relays</p>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-black/40 border border-white/5 hover:border-blue-500/30 transition-all">
                  <div className="flex items-start gap-2">
                    <div className="text-base">📊</div>
                    <div>
                      <h4 className="text-xs font-medium mb-0.5">Sustainability Report Released</h4>
                      <p className="text-[10px] text-gray-500">New project insights available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
