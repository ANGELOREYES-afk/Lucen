import Link from 'next/link'; 

export default function Navbar() {
    return (
        <div>
            <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-900/60 backdrop-blur-xl">
                <div className="mx-auto max-w-7xl px-6">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-emerald-400/20 ring-1 ring-emerald-400/40" />
                    <span className="text-sm font-semibold tracking-wide text-slate-200">
                        Vector
                    </span>
                    </div>

                    <div className="hidden items-center gap-8 md:flex">
                    <span className="text-sm text-slate-300 hover:text-white transition-colors"><a href="/companies">Companies</a></span>
                    <a className="text-sm text-slate-300 hover:text-white transition-colors" href="/resources">Resources</a>
                    <a className="text-sm text-slate-300 hover:text-white transition-colors" href="/demo">Demo</a>
                    </div>

                    <div className="flex items-center gap-3">
                    <button className="rounded-lg border border-white/15 px-4 py-2 text-sm text-slate-200 hover:bg-white/5 transition-colors">
                        Sign in
                    </button>
                    <button className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-emerald-400 transition-colors">
                        Join waitlist
                    </button>
                    </div>
                </div>
                </div>
            </nav>
        </div>
    )
}