"use client";
import { LuBuilding } from "react-icons/lu";
import { GiEnergyArrow } from "react-icons/gi";
import { SlEnergy } from "react-icons/sl";
import { useEffect, useState } from "react";
import { IoWaterOutline } from "react-icons/io5";
import { FaIndustry } from "react-icons/fa";
import { FaCarBattery } from "react-icons/fa";

const nuetral_color = "from-[#313647] to-[#A3B087]"
const companyInsights = [
  {
    icon: <LuBuilding/>,
    company: "Burns & McDonnell",
    category: "Data Centers",
    description: "Designing power distribution for large facilities",
    color: nuetral_color
  },
  {
    icon: <GiEnergyArrow/>,
    company: "Fluor",
    category: "Energy & Industrial Projects",
    description: "Power distribution for major industrial plants",
    color: nuetral_color
  },
  {
    icon: <SlEnergy/>,
    company: "Siemens Energy",
    category: "Grid Modernization",
    description: "New HVDC project announced this week",
    color: nuetral_color
  },
  {
    icon: <IoWaterOutline/>,
    company: "Jacobs",
    category: "Water & Infrastructure",
    description: "Upgraded SCADA systems for major facilities",
    color: nuetral_color
  },
  {
    icon: <FaIndustry/>,
    company: "Bechtel",
    category: "Infrastructure",
    description: "Large-scale transportation projects worldwide",
    color: nuetral_color
  },
  {
    icon: <FaCarBattery/>,
    company: "Tesla Energy",
    category: "Battery Storage",
    description: "Megapack installations for grid stability",
    color: nuetral_color
  }
];

export default function Industry() {
  const [activeTab, setActiveTab] = useState("Company Insights");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll through company insights
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % companyInsights.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium mb-6">
            Our Services
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight mb-6">
            Industry Knowledge That<br />
            Actually Makes You Stand Out.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            AI-generated insights on real engineering projects, companies, and
            technologies — in minutes, not hours.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left - Animated Company Insights Widget */}
          <div className="from-zinc-900 h-full to-black border border-white/10 rounded-2xl p-6 relative overflow-hidden">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none" />
            
            {/* Tabs */}
            <div className="flex gap-2 mb-6 relative z-10">
              <button
                onClick={() => setActiveTab("Company Insights")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === "Company Insights"
                    ? "bg-white/10 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Company Insights
              </button>
              <button
                onClick={() => setActiveTab("Engineering Focus")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === "Engineering Focus"
                    ? "bg-white/10 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Engineering Focus
              </button>
            </div>

            {/* Scrolling List */}
            <div className="space-y-3 relative">
              {companyInsights.map((insight, index) => {
                const position = (index - currentIndex + companyInsights.length) % companyInsights.length;
                const isActive = position === 0;
                const isVisible = position < 4;

                return (
                  <div
                    key={index}
                    className={`bg-black/40 backdrop-blur border border-white/5 rounded-xl p-2 transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                    } ${isActive ? 'ring-1 ring-purple-500/50 scale-[1.02]' : ''}`}
                    style={{
                      transform: `translateY(${position * 100}%)`,
                      position: position === 0 ? 'relative' : 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                    }}
                  >
                    <div className="flex items-start gap-3">
                      {/* Icon */}
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${insight.color} flex items-center justify-center flex-shrink-0 text-xl`}>
                        {insight.icon}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h4 className="font-semibold text-white text-sm">
                              {insight.company} — {insight.category}
                            </h4>
                            <p className="text-xs text-gray-400 mt-1">
                              {insight.description}
                            </p>
                          </div>
                          {isActive && (
                            <div className="flex-shrink-0">
                              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Progress indicator */}
            <div className="flex gap-1 mt-6 justify-center">
              {companyInsights.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-purple-500"
                      : "w-1 bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right - Text Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full border text-xs font-medium text-purple-300">
              Real Engineering Insights
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-semibold leading-tight">
              Turn career prep into an unfair advantage
            </h3>
            
            <p className="text-gray-400 text-base leading-relaxed">
              Lucen turns real project data, technology updates, and company
              news into simple, personalized insights — helping you stay sharp
              and actually understand the engineering world you're entering.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <button className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-sm font-medium transition-all">
                Company Briefs
              </button>
              <button className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-sm font-medium transition-all">
                AI Company Summaries
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
