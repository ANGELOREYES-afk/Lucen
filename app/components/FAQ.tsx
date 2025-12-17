"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How does Lucen Know which companies I care about?",
    answer: "You select your engineering major and interests during onboarding. Lucen then filters our database of thousands of companies to show you only the ones relevant to your specific discipline and career goals."
  },
  {
    question: "What makes Lucen different from just Googling companies?",
    answer: "Google gives you generic marketing pages and outdated news. Lucen analyzes technical documents, project reports, and engineering-specific news to give you 'high-signal' insights—like specific tech stacks, active project details, and team structures—that you can actually use in interviews."
  },
  {
    question: 'How "accurate" are the insights Lucen gives me?',
    answer: "We source data directly from public company filings, technical press releases, and verified engineering news sources. Every insight is cited so you can verify it yourself, but we do the heavy lifting of synthesizing it into readable briefs."
  },
  {
    question: "Does Lucen tell me what to say to recruiters?",
    answer: "Yes. For every company, we generate specific 'Conversation Starters' based on their recent projects. Instead of asking generic questions, you'll be able to ask about their specific grid modernization efforts or their new automation facility."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-black text-white py-24 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-gray-300 mb-6">
            FAQs
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-semibold leading-tight mb-4">
            We've Got the Answers<br />
            You're Looking For
          </h2>
          
          <p className="text-gray-400 text-sm">
            Quick answers about how Lucen helps you prepare smarter.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3 mb-24">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-zinc-950 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-white/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-sm font-medium text-gray-200">
                  {faq.question}
                </span>
                <span className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-5 pt-0 text-sm text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 p-12 text-center">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-black" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600/20 blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 space-y-6">
            <h3 className="text-3xl sm:text-4xl font-semibold leading-tight">
              Know the Company Before<br />
              You Shake the Hand
            </h3>
            
            <p className="text-gray-400 text-sm">
              Short briefs. Real signals. Recruiter-ready talking points.
            </p>

            <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium transition-colors">
              Book a free call
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
