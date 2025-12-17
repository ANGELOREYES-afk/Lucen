"use client";

import { useState } from "react";

export default function NewsletterSneakPeak() {
  const [activeTab, setActiveTab] = useState("Companies to Watch");

  return (
    <section className="bg-black text-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content - Text */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs font-medium text-gray-300">
              Market Awareness
            </div>

            <div>
              <h2 className="text-4xl sm:text-5xl font-semibold leading-tight mb-6">
                Build long-term industry<br />
                awareness
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                Weekly briefs tailored to your major keep you updated on the
                companies, technologies, and trends shaping your field —
                without endless Googling or reading full reports.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3">
              {[
                "Companies to Watch",
                "Tech You Should Know",
                "Trends Shaping Your Field"
              ].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 border ${
                    activeTab === tab
                      ? "bg-white/10 text-white border-white/20"
                      : "bg-transparent text-gray-500 border-white/5 hover:text-white hover:border-white/10"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Right Content - Card */}
          <div className="relative group">
            {/* Background Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000"
                  alt="High voltage transmission lines"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content Section */}
              <div className="p-8 -mt-12 relative z-20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-6 bg-purple-500 rounded-full" />
                  <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wide">
                    Project of the Week
                  </h3>
                </div>

                <div className="flex gap-5">
                  {/* Thumbnail */}
                  <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border border-white/10">
                    <img
                      src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=200"
                      alt="Thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-purple-400">
                      Siemens Energy — HVDC Transmission System
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Siemens Energy is supplying the converter stations for the SunZia HVDC
                      transmission project, a 3,000 MW bipole system spanning 550 miles from
                      New Mexico to Arizona. The project uses voltage source converter (VSC)
                      technology to enable bidirectional power flow and seamless integration with
                      renewable energy sources.
                    </p>
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
