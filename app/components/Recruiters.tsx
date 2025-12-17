"use client";

import { useState } from "react";

const companyExample = {
  name: "ABB",
  tagline: "Electrification and Automation Technology Leader",
  tags: ["Electrification & Automation", "Industrial", "Data Science"],
  insights: [
    "Ask about ABB's work on digital substations, especially projects using RELION protection relays",
    "Mention your interest in SCADA + automation and how ABB integrates these systems through ABB Ability™",
    "Bring up ABB's involvement in EV charging infrastructure, like their Terra fast-charging systems",
    "Show curiosity about how ABB supports renewable integration and grid stability"
  ]
};

export default function Recruiters() {
  const [activeButton, setActiveButton] = useState("Company Roles");
  const [chatInput, setchatInput] = useState("");

  return (
    <section className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-32">
          {/* Left - Text Content */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs font-medium">
              Recruiter-Ready Insights
            </div>

            <div>
              <h3 className="text-4xl sm:text-2xl md:text-4xl font-semibold leading-tight mb-6">
                AI that tells you exactly what to say to recruiters
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Ask Lucen anything — from "what does Siemens do in energy systems?" to "what projects is Jacobs working on?" — and get clear, contextual answers built from real sources
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {["Company Roles", "Project Work", "What They Value"].map((btn) => (
                <button
                  key={btn}
                  onClick={() => setActiveButton(btn)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    activeButton === btn
                      ? "bg-white/10 text-white border border-white/20"
                      : "bg-white/5 text-gray-400 border border-white/10 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>

            {/* Right - Chat Interface Widget */}
            <div className="bg-zinc-950 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden">
            {/* Subtle blue glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />
            
            {/* Animated Orb */}
                <div className="relative w-24 h-24">
            {/* Core circle */}
                <div className="absolute inset-0 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600" />
            
            {/* Wave 1 */}
                <div className="absolute inset-0 w-24 h-24 rounded-full bg-blue-500/40 animate-siri-wave" 
                style={{ animationDelay: '0s' }} />
            
            {/* Wave 2 */}
                <div className="absolute inset-0 w-24 h-24 rounded-full bg-blue-500/30 animate-siri-wave" 
                style={{ animationDelay: '0.5s' }} />
            
            {/* Wave 3 */}
                <div className="absolute inset-0 w-24 h-24 rounded-full bg-blue-500/20 animate-siri-wave" 
                style={{ animationDelay: '1s' }} />
            
            {/* Wave 4 */}
                <div className="absolute inset-0 w-24 h-24 rounded-full bg-purple-500/20 animate-siri-wave" 
                style={{ animationDelay: '1.5s' }} />
            </div>

            <h3 className="text-xl font-semibold mb-3 text-center mt-8">
              What can I help you explore?
            </h3>
            <p className="text-sm text-gray-400 text-center mb-8 max-w-md">
              I can break down companies, explain technologies, and help you prepare for interviews, applications, and career research.
            </p>

            {/* Input */}
            <div className="w-full relative">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setchatInput(e.target.value)}
                placeholder="What..."
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-6 text-xs text-gray-500">
              <button className="flex items-center gap-1.5 hover:text-gray-300 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Add Document
              </button>
              <button className="hover:text-gray-300 transition-colors">Analyze</button>
              <button className="hover:text-gray-300 transition-colors">Generate Image</button>
              <button className="hover:text-gray-300 transition-colors">Research</button>
            </div>
          </div>
        </div>
    <hr className="my-8 mb-32 h-px border-0 bg-gray-200 dark:bg-gray-700" />

        {/* Bottom Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Company Card */}
          <div className="bg-zinc-950 border border-white/10 rounded-2xl p-8 relative overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative">
              {/* Company Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-red-600 text-xl">ABB</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{companyExample.name}</h3>
                  <p className="text-sm text-gray-400">{companyExample.tagline}</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {companyExample.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Insights Section */}
              <div>
                <h4 className="text-sm font-semibold mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  What to Say to Recruiters
                </h4>
                <div className="space-y-3">
                  {companyExample.insights.map((insight, index) => (
                    <div key={index} className="flex gap-3 text-sm">
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{insight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Interview Prep */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs font-medium">
              Interview Prep
            </div>

            <div>
              <h2 className="text-4xl sm:text-2xl md:text-4xl font-semibold leading-tight mb-6">
                Be genuinely prepared for interviews
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Lucen pulls the real work a company is doing and transforms it into high-signal talking points, so you walk into interviews and recruiter chats with real substance.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {["Talking Points", "Project Knowledge", "Company Knowledge"].map((btn) => (
                <button
                  key={btn}
                  className="px-5 py-2.5 rounded-lg text-sm font-medium bg-white/5 text-gray-400 border border-white/10 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}