// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home", demo: true},
  { href: "/Demo", label: "Demo", demo: false},
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-sm text-white">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-xl bg-white flex items-center justify-center">
            <span className="text-xs font-bold text-black">L</span>
          </div>
          <span className="text-base font-semibold tracking-tight">LUCEN</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => {
            const active = pathname === link.href;
            if(link.demo){
              return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  "transition-colors hover:text-white/80" +
                  (active ? " text-white" : " text-gray-300")
                }
              >
                {link.label}
              </Link>
            );
            }else{
              return(
                <Link key={link.href} href={link.href} className={"py-{.75px} px-2bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-0.5" +
                  (active ? " text-white" : " text-gray-300")}>
                    {link.label}
                </Link>
              )
            };
           
          })}
        </div>

        {/* Right-side CTA */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium hover:border-white/40">
            Use For Free
          </button>
          <button className="rounded-full bg-purple-600 px-4 py-1.5 text-xs font-medium hover:bg-purple-500">
            Book a call
          </button>
        </div>
      </nav>
    </header>
  );
}
