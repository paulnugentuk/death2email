'use client';

import { motion } from 'framer-motion';
import { XCircle, CheckCircle2 } from 'lucide-react';

const problems = [
  {
    num: '01',
    title: 'Structural',
    body: 'Built for messaging, not task execution. Each email is an isolated unit with no system-level context. No native concept of workflows, deadlines, or dependencies.',
    accent: 'text-red-500',
  },
  {
    num: '02',
    title: 'Cognitive',
    body: 'Cognitive overload is the default state. Important updates buried in threads. Manual effort to extract meaning and decide on action. The user does the work the system should do.',
    accent: 'text-amber-500',
  },
  {
    num: '03',
    title: 'Architectural',
    body: 'Most emails are system notifications — orders, bookings, alerts — still processed like human conversations. The protocol treats a flight delay the same as a love letter.',
    accent: 'text-blue-500',
  },
];

export default function ProblemStatement() {
  return (
    <section id="problem" className="relative py-28 md:py-36 px-6 md:px-8 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Why email is broken
          </h2>
          <p className="text-base text-zinc-500 max-w-xl">
            The problem isn&apos;t email itself. It&apos;s that we&apos;re using a 50-year-old protocol for work that demands real-time intelligence.
          </p>
        </div>

        {/* Numbered problems — editorial layout */}
        <div className="space-y-16 md:space-y-20 mb-28">
          {problems.map((p) => (
            <div key={p.num} className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-8">
              {/* Number */}
              <span className={`font-display text-5xl md:text-6xl ${p.accent} opacity-30 leading-none`}>
                {p.num}
              </span>
              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
                <p className="text-base text-zinc-400 leading-relaxed font-light max-w-2xl">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-28" />

        {/* Comparison — Signal vs Noise */}
        <div>
          <h3 className="font-display italic text-2xl md:text-3xl text-zinc-200 mb-14 text-center">
            The gap between signal and noise
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* BAD — what email shows */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <XCircle className="w-4 h-4 text-zinc-600" />
                <span className="text-sm text-zinc-500 uppercase tracking-wider font-medium">What email shows you</span>
              </div>

              <div className="p-6 rounded-xl border border-zinc-800/40 bg-zinc-950/70">
                <div className="font-mono text-xs space-y-3">
                  <p className="text-zinc-600">From: amazon@amazon.com</p>
                  <p className="text-zinc-400 text-sm">Your order has shipped</p>
                  <div className="pt-3 border-t border-zinc-800/50">
                    <p className="text-zinc-600 leading-relaxed">
                      Order #123–456–789 has left our facility and is on its way to you.
                      Track your package at amazon.com.
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-xs text-zinc-600 font-light">Generic. Context-free. Requires manual action.</p>
            </div>

            {/* GOOD — what you need */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <CheckCircle2 className="w-4 h-4 text-green-500/70" />
                <span className="text-sm text-zinc-500 uppercase tracking-wider font-medium">What you actually need</span>
              </div>

              <motion.div
                className="p-6 rounded-xl border border-green-500/20 bg-gradient-to-br from-green-950/20 to-green-900/5 shadow-lg shadow-green-500/[0.03]"
                whileHover={{ borderColor: 'rgba(34, 197, 94, 0.3)' }}
              >
                <div className="space-y-3">
                  <p className="text-[10px] text-green-600/60 uppercase tracking-widest font-medium">Delivery Update</p>
                  <p className="text-lg font-semibold text-green-200/90">
                    Your Nike Air Max 90s arrive tomorrow 2–4pm
                  </p>
                  <div className="pt-3 border-t border-green-500/10 grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-zinc-600 text-xs block mb-0.5">Carrier</span>
                      <span className="text-green-200/70">DHL Express</span>
                    </div>
                    <div>
                      <span className="text-zinc-600 text-xs block mb-0.5">Action</span>
                      <span className="text-green-200/70">Add to calendar</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              <p className="mt-4 text-xs text-zinc-600 font-light">Specific. Actionable. Integrated.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
