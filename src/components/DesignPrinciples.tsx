'use client';

import { motion } from 'framer-motion';

const fadeInUp = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const staggeredFadeInUp = (delay: number) => ({
  animation: `fadeInUp 0.8s ease forwards`,
  animationDelay: `${delay}s`,
});

export default function DesignPrinciples() {
  const principles = [
    {
      number: '01',
      title: 'Brutal simplicity',
      description: 'Text-first. Minimal UI. No brand clutter. The interface disappears so the information can breathe.',
      hoverColor: 'group-hover:border-t-blue-500/50',
    },
    {
      number: '02',
      title: 'Meaning over metadata',
      description: 'No subject lines. No sender emphasis. Focus on intent and action. What matters is what you need to do, not who sent it.',
      hoverColor: 'group-hover:border-t-purple-500/50',
    },
    {
      number: '03',
      title: 'Action-first',
      description: "Every item drives toward a next step. If there's no action, it doesn't need your attention.",
      hoverColor: 'group-hover:border-t-green-500/50',
    },
    {
      number: '04',
      title: 'Raw email is secondary',
      description: "\"Open the coffin\" — the original email is always there as a fallback, but it's not where you live anymore.",
      hoverColor: 'group-hover:border-t-amber-500/50',
    },
  ];

  return (
    <>
      <style>{fadeInUp}</style>
      <section id="principles" className="relative w-full py-24 md:py-32 px-6 md:px-8 bg-[#0a0a0a]">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-16" style={staggeredFadeInUp(0)}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Design principles
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl">
              Every decision flows from these beliefs
            </p>
          </div>

          {/* 2x2 Grid of principles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, idx) => (
              <motion.div
                key={idx}
                className={`group relative p-8 md:p-10 rounded-xl border border-t-2 border-zinc-800 border-t-transparent ${principle.hoverColor} bg-gradient-to-br from-zinc-900/50 to-zinc-900/20 backdrop-blur-sm hover:border-zinc-700 hover:bg-gradient-to-br hover:from-zinc-800/50 hover:to-zinc-900/30 transition-all duration-300 overflow-hidden`}
                style={staggeredFadeInUp(0.15 + idx * 0.1)}
                whileHover={{ y: -4 }}
              >
                {/* Large watermark number */}
                <span className="absolute top-2 right-4 text-8xl md:text-9xl font-black text-zinc-800/20 tracking-tight leading-none pointer-events-none select-none">
                  {principle.number}
                </span>

                {/* Title */}
                <h3 className="relative text-xl md:text-2xl font-bold text-white mb-4 mt-6">
                  {principle.title}
                </h3>

                {/* Description */}
                <p className="relative text-sm md:text-base text-zinc-400 leading-relaxed font-light">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
