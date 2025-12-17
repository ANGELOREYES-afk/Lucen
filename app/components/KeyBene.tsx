"use client";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { GiArcheryTarget } from "react-icons/gi";
import { MdOutlineMessage } from "react-icons/md";
import { FaDiagramProject } from "react-icons/fa6";
import { FaNewspaper } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";

const benefits = [
  {
    icon: <FaMagnifyingGlassChart />,
    title: "Instant Company Intelligence",
    description: "Understand any engineering company in minutes — what they build, how they work, and what they're hiring for.",
    gradient: "from-purple-500/30 to-transparent"
  },
  {
    icon: <GiArcheryTarget />,
    title: "Relevant to Your Major",
    description: "Lucen filters the entire industry and only shows you what matters to your discipline, not generic info.",
    gradient: "from-purple-500/30 to-transparent"
  },
  {
    icon: <MdOutlineMessage/>,
    title: "High-Signal Talking Points",
    description: "Get concise, recruiter-ready conversation points pulled directly from real projects and tech stacks.",
    gradient: "from-green-500/10 to-transparent"
  },
  {
    icon: <FaDiagramProject />,
    title: "Real Project Breakdown",
    description: "See what companies are actually building right now — grid upgrades, automation systems, energy transition work, manufacturing robotics, and more.",
    gradient: "from-purple-500/30 to-transparent"
  },
  {
    icon: <FaNewspaper />,
    title: "Weekly Industry Updates",
    description: "Subscribe to newsletter to stay ahead of classmates with short, high-value briefs on the companies that are currently shaping the engineering world.",
    gradient: "from-purple-500/30 to-transparent"
  },
  {
    icon: <GiGraduateCap />,
    title: "Career Fair & Interview-Ready Knowledge",
    description: "Walk into interviews sounding informed — not rehearsed — with context few students ever bring.",
    gradient: "from-purple-500/30 to-transparent"
  }
];

export default function Benefits() {
  return (
    <section className="min-h-screen bg-black text-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-gray-300 mb-6">
            Benefits
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight mb-6">
            The Key Benefits of Lucen<br />
            for Engineering Students
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Get smarter, faster. Lucen turns real company work into clear insights so you
            walk into interviews, career fairs, and applications already ahead.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
                key={index}
                className="group relative bg-zinc-950 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 overflow-hidden"
            >
                {/* THE GLARE EFFECT */}
                <div 
                className={`absolute -bottom-6 left-0 right-0 h-32 bg-gradient-to-t ${benefit.gradient} blur-2xl opacity-40 group-hover:opacity-80 transition-all duration-500 pointer-events-none`} 
                />
                
                {/* Optional: Sharp bottom line highlight */}
                <div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:w-3/4 group-hover:via-white/40 transition-all duration-500"
                />

                <div className="relative z-10">
                {/* Icon */}
                <div className="text-2xl mb-6 bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-white">
                    {benefit.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                    {benefit.description}
                </p>
                </div>
            </div>
            ))}

        </div>
      </div>
    </section>
  );
}
