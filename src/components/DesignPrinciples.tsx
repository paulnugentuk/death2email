'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function DesignPrinciples() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const principles = [
    {
      number: '01',
      title: 'Brutal simplicity',
      description: 'Text-first. Minimal UI. No brand clutter. The interface disappears so the information can breathe.',
    },
    {
      number: '02',
      title: 'Meaning over metadata',
      description: 'No subject lines. No sender emphasis. Focus on intent and action. What matters is what you need to do, not who sent it.',
    },
    {
      number: '03',
      title: 'Action-first',
      description: "Every item drives toward a next step. If there's no action, it doesn't need your attention.",
    },
    {
      number: '04',
      title: 'Raw email is secondary',
      description: "\"Open the coffin\" — the original email is always there as a fallback, but it's not where you live anymore.",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative w-full py-24 px-8 bg-[#0a0a0a] border-t border-zinc-800/50"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-4">
            Design principles
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl font-light">
            Every decision flows from these beliefs
          </p>
        </motion.div>

        {/* 2x2 Grid of principles */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {principles.map((principle, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group relative p-8 md:p-10 rounded-lg border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-900/20 backdrop-blur-sm hover:border-zinc-700 hover:bg-gradient-to-br hover:from-zinc-800/50 hover:to-zinc-900/30 transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              {/* Large faded number */}
              <div className="mb-6 md:mb-8">
                <span className="text-6xl md:text-7xl font-black text-zinc-800/40 tracking-tight">
                  {principle.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                {principle.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-light">
                {principle.description}
              </p>

              {/* Border accent on hover */}
              <div className="absolute inset-0 rounded-lg border border-zinc-600/0 group-hover:border-zinc-600/30 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
