'use client';

import { motion } from 'framer-motion';

const principles = [
  {
    num: '01',
    title: 'Brutal simplicity',
    body: 'Text-first. Minimal UI. No brand clutter. The interface disappears so the information can breathe.',
    accent: 'group-hover:border-t-blue-500/40',
  },
  {
    num: '02',
    title: 'Meaning over metadata',
    body: 'No subject lines. No sender emphasis. Focus on intent and action. What matters is what you need to do, not who sent it.',
    accent: 'group-hover:border-t-purple-500/40',
  },
  {
    num: '03',
    title: 'Action-first',
    body: "Every item drives toward a next step. If there's no action, it doesn't need your attention.",
    accent: 'group-hover:border-t-green-500/40',
  },
  {
    num: '04',
    title: 'Raw email is secondary',
    body: '"Open the coffin" — the original email is always there as a fallback, but it\'s not where you live anymore.',
    accent: 'group-hover:border-t-red-500/40',
  },
];

export default function DesignPrinciples() {
  return (
    <section id="principles" className="py-28 md:py-36 px-6 md:px-8 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Design principles
          </h2>
          <p className="text-base text-zinc-500 max-w-xl">
            Every decision flows from these beliefs
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {principles.map((p, idx) => (
            <motion.div
              key={idx}
              className={`group relative rounded-xl border border-t-2 border-zinc-800/50 border-t-transparent ${p.accent} bg-zinc-900/20 p-7 md:p-8 overflow-hidden card-lift hover:border-zinc-700/50`}
              whileHover={{ y: -3 }}
            >
              {/* Watermark number */}
              <span className="absolute top-3 right-5 text-[7rem] md:text-[8rem] font-display text-zinc-800/[0.08] leading-none pointer-events-none select-none">
                {p.num}
              </span>

              {/* Content */}
              <div className="relative">
                <h3 className="text-lg font-bold text-white mb-3 mt-4">{p.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-light">{p.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
