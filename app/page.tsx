import Image from "next/image";
import {roles, logos, news} from "./data/demo";
//import { AiFillAccountBook } from "react-icons/ai";

export default function Home() {
  // Duplicate content to create seamless loops
  const roleLoop = [...roles, ...roles, ...roles];
  const logoLoop = [...logos, ...logos, ...logos];
  const newsLoop = [...news, ...news];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Page content */}
      <main className="relative mx-auto max-w-7xl px-6 pt-40 pb-28">
        {/* Subtle vignette + grid background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(16,185,129,0.15),transparent_60%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,rgba(2,6,23,0.6))]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]"
        />

        {/* Hero */}
        <section className="text-center">
          <div className="mx-auto mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
            <svg className="h-4 w-4 text-emerald-400" viewBox="0 0 24 24" fill="none">
              <path d="M13 5v6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20 13a8 8 0 1 1-8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs text-slate-300">AI company briefs in minutes</span>
          </div>

          <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight md:text-8xl">
            Prepare smarter. Stay{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent inline-block">
              career‑ready
            </span>
          </h1>

          <p className="mx-auto mt-8 text-2xl max-w-2xl text-lg text-slate-300">
            Fast, reliable insights for career fairs, interviews, and internships—without the noise.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button className="px-8 py-4 text-lg group inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-slate-900 font-medium hover:bg-emerald-400 transition-colors">
              Join the waitlist
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="px-8 py-4 text-lg rounded-lg border border-white/15 px-6 py-3 text-slate-200 hover:bg-white/5 transition-colors">
              See a demo brief
            </button>
          </div>

          {/* Tags */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {['Electrical', 'Mechanical', 'Chemical', 'Civil', 'CS', 'Finance', 'Business', 'Environmental'].map(
              (t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 hover:bg-white/10 transition-colors"
                >
                  {t}
                </span>
              ),
            )}
          </div>
        </section>

        {/* Content sections you can extend */}
        <section className="mt-12">
          <div className="grid gap-6 rounded-2xl border border-white/10 bg-slate-900/40 p-6 md:grid-cols-4">
            {[
              { k: '5min', v: 'Average Brief' },
              { k: '500+', v: 'Companies' },
              { k: 'Weekly', v: 'Updates' },
              { k: '8+', v: 'Disciplines' },
            ].map((s) => (
              <div key={s.k} className="text-center md:text-left">
                <div className="text-3xl font-semibold tracking-tight text-cyan-300">{s.k}</div>
                <div className="mt-1 text-sm text-slate-300">{s.v}</div>
              </div>
            ))}
          </div>
        </section>

        {/* More scrollable space to add future content */}
        <section className="mt-20 grid items-start gap-8 md:grid-cols-2 flex items-center tracking-wide md:tracking-wider leading-relaxed grid items-start gap-8 place-items-center md:grid-cols-2">
          {/* Left copy */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_400px_at_20%_10%,rgba(16,185,129,0.12),transparent_60%),radial-gradient(600px_300px_at_80%_90%,rgba(56,189,248,0.10),transparent_60%)] "></div>
          <div>
            <span className="inline-flex items-center rounded-full border border-rose-400/30 bg-rose-500/10 px-3 py-1 text-xs font-medium text-rose-300">
              The Problem
            </span>

            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-slate-100 md:text-5xl">
              Students go into career fairs{' '}
              <span className="text-rose-300">unprepared</span>
            </h2>

            <div className="mt-5 space-y-4 text-slate-300">
              <p>
                No centralized, fast way to discover what companies are actually working on right now.
                Students need clear, current context to stand out in conversations.
              </p>
              <p>
                LinkedIn centers people and Handshake lists jobs, but neither distills a company’s latest projects,
                partnerships, or innovations into something you can act on before a fair.
              </p>
              <p>
                As a result, students spend hours researching—or show up with generic talking points and miss opportunities.
              </p>
            </div>
          </div>

          {/* Right “issues” card */}
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
            <ul className="space-y-5">
              <li className="flex gap-4">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-rose-500/15 text-rose-300 ring-1 ring-rose-400/25">
                  {/* clock icon */}
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-100">Hours of Research</p>
                  <p className="text-sm text-slate-300">
                    Evenings spent digging through scattered sources with little signal.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-rose-500/15 text-rose-300 ring-1 ring-rose-400/25">
                  {/* users icon */}
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <path d="M16 11a4 4 0 10-8 0 4 4 0 008 0Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M6 19a6 6 0 1112 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-100">Generic Conversations</p>
                  <p className="text-sm text-slate-300">
                    Without context, students sound like everyone else at the booth.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-rose-500/15 text-rose-300 ring-1 ring-rose-400/25">
                  {/* trending down icon */}
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <path d="M21 16l-6-6-4 4-8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 11v5h-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-100">Outdated Information</p>
                  <p className="text-sm text-slate-300">
                    By the time you find it, the information is already stale.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Solution section */}
        <section className="mt-20 flex items-center tracking-wide md:tracking-wider leading-relaxed grid items-start gap-10 md:grid-cols-2">
          {/* Left feature list card */}
          <div className="rounded-2xl border border-cyan-400/20 bg-slate-900/40 p-6">
            <ul className="space-y-6">
              {[
                {
                  title: '5‑Minute Briefs',
                  desc: 'Everything you need to know, distilled and ready',
                },
                {
                  title: 'Weekly Updates',
                  desc: 'AI keeps every company page fresh with latest news',
                },
                {
                  title: 'Recruiter Talking Points',
                  desc: 'Know exactly what to say to stand out',
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-400/25">
                    {/* check/target icon */}
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-100">{item.title}</p>
                    <p className="text-sm text-slate-300">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right copy block */}
          <div>
            <span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              The Solution
            </span>

            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-slate-100 md:text-5xl">
              Like <span className="text-cyan-300">TLDR.tech</span> for engineering careers
            </h2>

            <p className="mt-4 max-w-prose text-slate-300">
              Lucen transforms hours of company research into quick, <span className="font-semibold text-slate-100">AI‑generated briefs</span>.
            </p>

            <p className="mt-4 max-w-prose text-slate-300">
              Each company has a dedicated page with everything you need: latest projects, market highlights, sustainability efforts, job openings, and smart recruiter tips.
            </p>

            <p className="mt-4 max-w-prose text-slate-300">
              Search by company or filter by discipline. Get prepared in 5 minutes. Show up confident.
            </p>
          </div>
        </section>
        {/* Features grid section */}
        <section className="py-24 md:py-32">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Everything you need to <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">ace the conversation</span>
            </h2>
            <p className="mt-3 text-slate-300">
              From projects to talking points — all in one place
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "5‑Minute Briefs",
                desc: "Get comprehensive company insights in less time than brewing coffee",
                icon: (
                  <>
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </>
                ),
              },
              {
                title: "AI‑Powered Updates",
                desc: "Weekly refreshed summaries keep you current with the latest projects",
                icon: (
                  <>
                    <path d="M12 6v3m0 6v3m6-6h-3M9 12H6" />
                    <path d="M16.24 7.76L14.12 9.88M9.88 14.12L7.76 16.24" />
                  </>
                ),
              },
              {
                title: "Recruiter‑Ready",
                desc: "Smart talking points that help you stand out at career fairs",
                icon: (
                  <>
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
                  </>
                ),
              },
              {
                title: "Market Insights",
                desc: "Financial highlights and strategic initiatives at your fingertips",
                icon: (
                  <>
                    <path d="M3 17l5-5 4 4 7-7" />
                    <path d="M3 3h18v18H3z" />
                  </>
                ),
              },
              {
                title: "Job Matching",
                desc: "Find relevant internships and openings for your discipline",
                icon: (
                  <>
                    <rect x="7" y="7" width="10" height="10" rx="2" />
                    <path d="M9 11h6M9 13h6" />
                  </>
                ),
              },
              {
                title: "Engineering Firms Coverage",
                desc: "Deep dives into the companies that matter most",
                icon: (
                  <>
                    <path d="M4 20h16V8L12 4 4 8v12z" />
                    <path d="M12 4v16" />
                  </>
                ),
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 transition-colors hover:bg-slate-900/60"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-400/25">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {f.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-sm text-slate-400">© {new Date().getFullYear()} Vector, Inc.</p>
            <div className="flex items-center gap-6 text-sm text-slate-300">
              <a className="hover:text-white transition-colors">Privacy</a>
              <a className="hover:text-white transition-colors">Terms</a>
              <a className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
