"use client";
import Image from "next/image";
import { useState } from "react";

// Define types
interface TalkingPoint {
  id: number;
  text: string;
}

interface LinkedInPost {
  id: string;
  author: string;
  title: string;
  date: string;
  content: string;
  likes: number;
  comments: number;
}

interface CompanyDetail {
  id: string;
  name: string;
  logo: string;
  tagline: string;
  industry: string;
  location: string;
  employees: string;
  founded: string;
  description: string;
  disciplines: string[];
  talkingPoints: TalkingPoint[];
  linkedInPosts: LinkedInPost[];
}

// Sample data - replace with your actual data
const companyData: CompanyDetail = {
  id: "1",
  name: "ABB",
  logo: "/ABB.png",
  tagline: "Pioneering technology leader energizing the transformation of society and industry",
  industry: "Electrification & Automation",
  location: "Zurich, Switzerland",
  employees: "105,000",
  founded: "1988",
  description:
    "ABB is a technology leader in electrification and automation, enabling a more sustainable and resource-efficient future. The company's solutions connect engineering know-how and software to optimize how things are manufactured, moved, powered and operated.",
  disciplines: ["Electrical", "Mechanical", "Computer Science", "Industrial", "Data Science"],
  talkingPoints: [
    {
      id: 1,
      text: "Reference ABB's pivot to digital and automation - 70% of revenue now comes from software/digital solutions",
    },
    {
      id: 2,
      text: "Show interest in how traditional manufacturing meets AI and machine learning",
    },
    {
      id: 3,
      text: "Ask about ABB Ability™ digital platform and IoT applications",
    },
    {
      id: 4,
      text: "Mention specific industries you're interested in: marine, data centers, or smart buildings",
    },
  ],
  linkedInPosts: [
    {
      id: "1",
      author: "Björn Rosengren",
      title: "CEO at ABB",
      date: "January 5, 2025",
      content:
        "Our AI-powered smart factory initiative is transforming manufacturing. By combining robotics with machine learning,...",
      likes: 5621,
      comments: 312,
    },
  ],
};

export default function CompanyDetailPage() {
  const [articleInput, setArticleInput] = useState("");
  const [isFollowing, setIsFollowing] = useState(false);

  const handleGenerateTalkingPoints = () => {
    // Handle article submission and talking point generation
    console.log("Generating talking points for:", articleInput);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation - you can import your existing nav component */}
      <nav className="border-b border-white/10 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="h-10 w-10 rounded-lg bg-slate-800" />
              <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
                <a href="#" className="hover:text-white transition-colors">
                  Companies
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Newsletter
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  TAMU Career Fair
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Demo
                </a>
              </div>
            </div>
            <button className="rounded-lg border border-white/15 px-5 py-2 text-sm text-slate-200 hover:bg-white/5 transition-colors">
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-12">
        {/* Company Header */}
        <div className="mb-12 rounded-2xl border border-white/10 bg-slate-900/40 p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-start gap-6">
              {/* Company Logo */}
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white p-4">
                <Image
                  src={companyData.logo}
                  alt={`${companyData.name} logo`}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>

              {/* Company Info */}
              <div>
                <h1 className="text-4xl font-extrabold mb-3">{companyData.name}</h1>
                <p className="text-lg text-slate-300 max-w-2xl mb-6">{companyData.tagline}</p>

                {/* Company Details Row */}
                <div className="flex flex-wrap items-center gap-6 text-sm">
                  <div className="inline-flex items-center gap-2 text-cyan-400 bg-cyan-500/15 px-3 py-1.5 rounded-full border border-cyan-400/20">
                    {companyData.industry}
                  </div>

                  <div className="flex items-center gap-2 text-slate-300">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="12" cy="9" r="2.5" strokeWidth="2" />
                    </svg>
                    {companyData.location}
                  </div>

                  <div className="flex items-center gap-2 text-slate-300">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path
                        d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="9" cy="7" r="4" strokeWidth="2" />
                      <path
                        d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {companyData.employees}
                  </div>

                  <div className="flex items-center gap-2 text-slate-300">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
                      <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" strokeLinecap="round" />
                      <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" strokeLinecap="round" />
                      <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
                    </svg>
                    Founded {companyData.founded}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setIsFollowing(!isFollowing)}
                className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all ${
                  isFollowing
                    ? "bg-cyan-500/20 border border-cyan-400/30 text-cyan-300"
                    : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10"
                }`}
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill={isFollowing ? "currentColor" : "none"} stroke="currentColor">
                  <path
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {isFollowing ? "Following" : "Follow Company"}
              </button>

              <button className="rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-100 transition-colors">
                View Jobs
              </button>
            </div>
          </div>

          {/* Disciplines Tags */}
          <div className="flex flex-wrap gap-2">
            {companyData.disciplines.map((discipline) => (
              <span
                key={discipline}
                className="text-xs px-3 py-1.5 rounded-md bg-slate-800/60 text-slate-300 border border-white/5"
              >
                {discipline}
              </span>
            ))}
          </div>
        </div>

        {/* Company Description */}
        <div className="mb-12">
          <p className="text-slate-300 text-lg leading-relaxed">{companyData.description}</p>
        </div>

        {/* Three Column Section */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Ask Lucen */}
          <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
            <div className="mb-4 flex items-center gap-3">
              <svg className="h-6 w-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="3" strokeWidth="2" />
                <path d="M12 2v3M12 19v3M2 12h3M19 12h3" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <h2 className="text-xl font-bold">Ask Lucen</h2>
            </div>

            <p className="text-sm text-slate-400 mb-6">
              Paste any article — get recruiter-ready talking points
            </p>

            <div className="mb-4">
              <textarea
                value={articleInput}
                onChange={(e) => setArticleInput(e.target.value)}
                placeholder="Paste an article, link, or any company news here...."
                className="w-full h-32 bg-slate-800/60 border border-white/10 rounded-lg p-4 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent resize-none"
              />
              <p className="text-xs text-slate-500 mt-2">Tip: Press Cmd/Ctrl + Enter to submit</p>
            </div>

            <button
              onClick={handleGenerateTalkingPoints}
              className="w-full flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg py-3 px-4 font-medium transition-colors"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2v3M12 19v3M2 12h3M19 12h3" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Generate Talking Points
            </button>
          </div>

          {/* What to Say to Recruiters */}
          <div className="rounded-2xl border border-cyan-400/20 bg-slate-900/40 p-6">
            <div className="mb-4 flex items-center gap-3">
              <svg className="h-6 w-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h2 className="text-xl font-bold text-cyan-300">What to Say to Recruiters</h2>
            </div>

            <p className="text-sm text-slate-400 mb-6">Quick talking points to stand out</p>

            <div className="space-y-4">
              {companyData.talkingPoints.map((point, index) => (
                <div key={point.id} className="flex gap-3">
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-400 text-sm font-semibold ring-1 ring-cyan-400/25">
                    {index + 1}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">{point.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Latest from LinkedIn */}
          <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
            <div className="mb-4 flex items-center gap-3">
              <svg className="h-6 w-6 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <h2 className="text-xl font-bold text-cyan-300">Latest from LinkedIn</h2>
            </div>

            <p className="text-sm text-slate-400 mb-6">Recent updates</p>

            <div className="space-y-6">
              {companyData.linkedInPosts.map((post) => (
                <div key={post.id} className="rounded-xl border border-white/10 bg-slate-800/40 p-5">
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-slate-100">{post.author}</h3>
                      <p className="text-sm text-slate-400">{post.title}</p>
                      <p className="text-xs text-slate-500 mt-1">{post.date}</p>
                    </div>
                    <svg className="h-5 w-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <polyline points="15 3 21 3 21 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <line x1="10" y1="14" x2="21" y2="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  <p className="text-sm text-slate-300 mb-4 leading-relaxed">{post.content}</p>

                  <div className="flex items-center gap-4 text-sm text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path
                          d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{post.likes.toLocaleString()}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path
                          d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
              ))}

              <button className="w-full flex items-center justify-center gap-2 bg-white text-slate-900 rounded-lg py-3 px-4 font-medium hover:bg-slate-100 transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                View on LinkedIn
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-sm text-slate-400">© {new Date().getFullYear()} Vector, Inc.</p>
            <div className="flex items-center gap-6 text-sm text-slate-300">
              <a className="hover:text-white transition-colors cursor-pointer">Privacy</a>
              <a className="hover:text-white transition-colors cursor-pointer">Terms</a>
              <a className="hover:text-white transition-colors cursor-pointer">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}