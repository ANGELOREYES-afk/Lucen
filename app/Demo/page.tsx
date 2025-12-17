"use client";

import { useState } from "react";
import { ChatBullet } from "../components/subcomponents/chatdivs";
import Navbar from "../components/Navbar"; // Assuming you have this
import test from "node:test";

export default function DemoPage() {
  type Bullet = { title: string; body: string };
  const [chatInput, setChatInput] = useState("What do I say to a ABB Recruiter?");
  const [response, setResponse] = useState<Bullet[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [stringtry, setstring] = useState<string | null>(null);


  function parseRawText(text: string): Bullet[] {
    if(!text) return [];

    return text
      .split(";;")
      .map(section => section.trim())
      .filter(section => section.length > 0)
      .map(section => {
        const titleMatch = section.match(/Subtitle\s*:\s*(.*?)(?:,?\s*Content\s*:|$)/i);
        const subtitleMatch = section.match(/Content\s*:\s*(.*)/i);

        if(titleMatch && subtitleMatch) {
          return {
            title: titleMatch[1].trim(),
            body: subtitleMatch[1].trim()
          };
        }
        return null;
      })
      .filter((item): item is Bullet => item !== null)
  }

  const handleAsk = async () => {
    if(!chatInput.trim()) return
    setIsLoading(true);
    setResponse(null);
    setstring(null);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({message: chatInput}),
      });
      const data = await res.json() 

      const bullets = parseRawText(data.response)
      setResponse(bullets)
      //setstring(data.response)

      console.log("hello?")
    }catch(error){
      console.error("Failed to fetch response", error)
      console.log("full error message: ", JSON.stringify(error), Object.getOwnPropertyNames(error))
    } finally{
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />
      
      {/* Main Container - Padded for Laptop users */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-6">
        
        {/* TOP: Company Header Card */}
        <div className="bg-zinc-950 border border-white/10 rounded-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                <span className="text-red-600 font-bold text-2xl">ABB</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold mb-1">ABB</h1>
                <p className="text-gray-400 text-sm mb-3">
                  Pioneering technology leader energizing the transformation of society and industry
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-4">
                  <span className="bg-purple-500/10 text-purple-400 px-2 py-1 rounded border border-purple-500/20">Electrification & Automation</span>
                  <span className="flex items-center gap-1">📍 Zurich, Switzerland</span>
                  <span className="flex items-center gap-1">👥 105,000</span>
                  <span className="flex items-center gap-1">📅 Founded 1988</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Electrical", "Mechanical", "Computer Science", "Industrial", "Data Science"].map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-xs text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex gap-3 self-start">
              <button className="px-4 py-2 rounded-full border border-white/10 text-sm font-medium hover:bg-white/5 flex items-center gap-2">
                <span>♡</span> follow company
              </button>
              <button className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200">
                Website ↗
              </button>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-white/5 text-sm text-gray-400 leading-relaxed">
            ABB is a technology leader in electrification and automation, enabling a more sustainable and resource-efficient future. The company's solutions connect engineering know-how and software to optimize how things are manufactured, moved, powered and operated.
          </div>
        </div>

        {/* MIDDLE: Recruiter Insights */}
        <div className="bg-zinc-950 border border-white/10 rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-2 mb-4 text-purple-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
            <h3 className="font-semibold text-white">What to Say to Recruiters</h3>
          </div>
          <p className="text-xs text-gray-500 mb-6">Know what to say to stand out at the career fair</p>
          
          <div className="space-y-4">
            {[
              "I've been really interested in how ABB is shifting toward software and digital solutions. I'd love to hear how early-career engineers get to be part of that transition.",
              "I'm curious how your teams combine traditional industrial automation with AI and machine learning. What does that look like on real projects?",
              "Could you tell me more about ABB Ability™ and how engineers actually use that platform day-to-day?",
              "I'm especially drawn to work in areas like data centers, smart buildings, or marine applications. Are there teams at ABB where an intern could get exposure to those spaces?",
              "What skills or experiences make a student stand out to ABB when you're hiring for early-career roles?"
            ].map((item, i) => (
              <div key={i} className="flex gap-4 text-sm text-gray-300">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-xs font-bold text-white mt-0.5">
                  {i + 1}
                </span>
                <p className="leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM GRID: Projects & Jobs */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Projects */}
          <div className="bg-zinc-950 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-6 text-purple-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              <h3 className="font-semibold text-white">Latest Projects</h3>
            </div>
            
            <div className="space-y-6">
              {[
                { title: "AI-Powered Smart Factory Revolution", desc: "Using machine learning to cut energy use by 40% across global manufacturing, with digital twin technology...", date: "January 2025" },
                { title: "Electric Ferry Fleet - Norway", desc: "Providing complete electrification solutions for 50+ electric ferries in Norway, including charging infrastructure...", date: "December 2024" }
              ].map((proj, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium text-gray-200 group-hover:text-purple-400 transition-colors">{proj.title}</h4>
                    <span className="text-gray-500 text-xs">↗</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-2 leading-relaxed">{proj.desc}</p>
                  <span className="text-[10px] text-gray-600 uppercase tracking-wider">{proj.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Jobs */}
          <div className="bg-zinc-950 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-6 text-purple-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <h3 className="font-semibold text-white">Current Openings</h3>
            </div>
            
            <div className="divide-y divide-white/5">
              {[
                { role: "Software Engineer - Industrial IoT", loc: "Austin, TX · Full-time" },
                { role: "Electrical Engineering Co-op", loc: "Raleigh, NC · Co-op" },
                { role: "Robotics Engineer", loc: "Auburn Hills, MI · Full-time" }
              ].map((job, i) => (
                <div key={i} className="py-3 first:pt-0 group cursor-pointer flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-medium text-gray-200 group-hover:text-purple-400 transition-colors">{job.role}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">{job.loc}</p>
                  </div>
                  <span className="text-gray-600 text-xs opacity-0 group-hover:opacity-100 transition-opacity">Apply ↗</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CHATBOT SECTION - Matches 2nd Image */}
        <div className="mt-24 pt-12 flex flex-col items-center justify-center min-h-[500px]">
          
          {/* Animated Glowing Orb */}
          <div className="relative w-32 h-32 mb-8">
            <div className="absolute inset-0 bg-purple-600/30 blur-[40px] rounded-full animate-pulse" />
            <div className="relative w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden border border-white/10">
              {/* Spinning Ring Animation */}
              <div className="absolute w-24 h-24 border-t-2 border-r-2 border-purple-500 rounded-full animate-spin" style={{ animationDuration: '3s' }} />
              <div className="absolute w-20 h-20 border-b-2 border-l-2 border-purple-400 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '4s' }} />
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-900 rounded-full blur-md opacity-80" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-center">
            What can I help you explore?
          </h2>

          {/* Dynamic Display Area */}
          {response ? (
          <div className="w-full max-w-2xl mb-8 p-6 bg-zinc-900 border border-purple-500/30 rounded-2xl animate-fade-in">
            <h4 className="text-purple-400 text-sm font-semibold mb-2">Lucen AI</h4>
            {response.map((b, i) => (
              <ChatBullet
                key={i}
                index={i + 1}
                title={b.title}
                body={b.body}
              />
            ))}
            <button 
              onClick={() => setResponse(null)} 
              className="mt-4 text-xs text-gray-500 hover:text-white"
            >
              Ask another question
            </button>
          </div>
          //  <div className="w-full max-w-2xl mb-8 p-6 bg-zinc-900 border border-purple-500/30 rounded-2xl animate-fade-in">
          //   <h4 className="text-purple-400 text-sm font-semibold mb-2">Lucen AI</h4>
          //   <p className="text-gray-200 leading-relaxed text-sm md:text-base">
          //     {stringtry}
          //   </p>
          //   <button 
          //     onClick={() => setstring(null)} 
          //     className="mt-4 text-xs text-gray-500 hover:text-white"
          //   >
          //     Ask another question
          //   </button>
          // </div>
          ) : (
            <p className="text-gray-400 text-center max-w-xl mb-10 text-sm md:text-base">
              I can break down companies, explain technologies, and help you prepare for interviews, applications, and career fairs — just ask.
            </p>
          )}
          

          {/* Chat Input Container */}
          <div className="w-full max-w-2xl relative">
            <div className={`bg-zinc-950 border rounded-2xl p-2 relative overflow-hidden group transition-all ${isLoading ? 'border-purple-500 opacity-80' : 'border-white/10 focus-within:border-purple-500/50'}`}>
              <input 
                type="text" 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key == "Enter" && handleAsk()}
                disabled={isLoading}
                className="w-full bg-transparent text-white p-4 pr-12 focus:outline-none text-lg placeholder:text-gray-600"
                placeholder="Ask anything..."
              />
              
              <button onClick={handleAsk} disabled={isLoading} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-purple-400 hover:bg-white/5 rounded-lg transition-colors">
                {isLoading ? (
                 // Loading Spinner Icon
                 <div className="w-5 h-5 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
                ) : (
                  // Send Icon
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                )}
              </button>

              <div className="px-4 pb-3 flex items-center gap-3 mt-2">
                <button className="flex items-center gap-2 text-gray-400 hover:text-white text-xs px-3 py-1.5 rounded-full border border-white/10 hover:border-white/20 transition-all">
                  <span className="text-lg leading-none">+</span> Add document
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {[
                { icon: "📈", label: "Analyze" },
                { icon: "🖼️", label: "Generate Image" },
                { icon: "🔍", label: "Research" }
              ].map((btn) => (
                <button key={btn.label} className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/40 hover:bg-white/5 text-xs text-gray-300 transition-colors">
                  <span>{btn.icon}</span>
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}
