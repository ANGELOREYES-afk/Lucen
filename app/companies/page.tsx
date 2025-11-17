"use client"
import Image from "next/image";
import { useState } from "react";

// Define your data types
interface Company {
  id: string;
  name: string;
  logo: string;
  description: string;
  industry: string;
  location: string;
  employees: string;
  tags: string[];
}

// Sample data - replace with your actual data
const companies: Company[] = [
  {
    id: "1",
    name: "Shell plc",
    logo: "/shell.png",
    description: "Powering progress together through more and cleaner energy solutions",
    industry: "Energy & Petrochemicals",
    location: "London, United Kingdom",
    employees: "93,000 employees",
    tags: ["Chemical", "Mechanical", "Electrical"],
  },
  {
    id: "2",
    name: "Burns & McDonnell",
    logo: "/BurnsMcDonnell.png",
    description: "100% employee-owned engineering firm building critical infrastructure",
    industry: "Engineering & Construction",
    location: "Kansas City, Missouri",
    employees: "9,000+ employees",
    tags: ["Electrical", "Mechanical", "Civil"],
  },
  {
    id: "3",
    name: "ABB",
    logo: "/ABB.png",
    description: "Pioneering technology leader energizing the transformation of society and...",
    industry: "Electrification & Automation",
    location: "Zurich, Switzerland",
    employees: "105,000 employees",
    tags: ["Electrical", "Mechanical"],
  },
];

const disciplines = [
  "All",
  "Electrical",
  "Mechanical",
  "Chemical",
  "Civil",
  "Computer Science",
  "Finance",
  "Business",
  "Data Science",
];

export default function ExploreCompanies() {
  const [selectedDiscipline, setSelectedDiscipline] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCompanies = companies.filter((company) => {
    const matchesDiscipline =
      selectedDiscipline === "All" || company.tags.includes(selectedDiscipline);
    const matchesSearch =
      searchQuery === "" ||
      company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.industry.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDiscipline && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Page content */}
      <main className="relative mx-auto max-w-7xl px-6 pt-24 pb-28">
        {/* Subtle background effects */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(56,189,248,0.15),transparent_60%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,rgba(2,6,23,0.6))]"
        />

        {/* Header Section */}
        <section className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Explore{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Companies
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Browse engineering firms and discover what they're building right now
          </p>
        </section>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-slate-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8" strokeWidth="2" />
                <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search by company name or industry..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/60 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Discipline Filter Buttons */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {disciplines.map((discipline) => (
            <button
              key={discipline}
              onClick={() => setSelectedDiscipline(discipline)}
              className={`rounded-lg px-5 py-2.5 text-sm font-medium transition-all ${
                selectedDiscipline === discipline
                  ? "bg-cyan-500 text-slate-900"
                  : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10"
              }`}
            >
              {discipline}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <p className="text-center text-slate-400 mb-8">
          Showing {filteredCompanies.length} companies
        </p>

        {/* Companies Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCompanies.map((company) => (
            <a href="/description">
            <div
              key={company.id}
              className="group relative rounded-2xl border border-white/10 bg-slate-900/40 p-6 transition-all hover:bg-slate-900/60 hover:border-white/20"
            >
              {/* Arrow icon */}
              <div className="absolute top-6 right-6 text-slate-400 group-hover:text-cyan-400 transition-colors">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M7 17L17 7M17 7H7M17 7v10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Company Logo */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-white">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>

              {/* Company Name */}
              <h3 className="text-xl font-bold mb-3 text-slate-100">{company.name}</h3>

              {/* Description */}
              <p className="text-sm text-slate-300 mb-4 line-clamp-2 min-h-[2.5rem]">
                {company.description}
              </p>

              {/* Industry Badge */}
              <div className="mb-4">
                <span className="inline-block text-xs font-medium text-cyan-400 bg-cyan-500/15 px-3 py-1.5 rounded-full border border-cyan-400/20">
                  {company.industry}
                </span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 mb-2 text-sm text-slate-400">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="9" r="2.5" strokeWidth="2" />
                </svg>
                <span>{company.location}</span>
              </div>

              {/* Employees */}
              <div className="flex items-center gap-2 mb-4 text-sm text-slate-400">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="9" cy="7" r="4" strokeWidth="2" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{company.employees}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {company.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-300 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            </a>
          ))}
        </div>

        {/* Empty State */}
        {filteredCompanies.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-slate-400">No companies found. Try adjusting your filters.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950">
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
