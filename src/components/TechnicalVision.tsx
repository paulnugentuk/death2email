'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Mail, Zap, Brain, Lock, Bell } from 'lucide-react';

export default function TechnicalVision() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const phase1Items = [
    { icon: Mail, label: 'Email ingestion (Gmail/IMAP)' },
    { icon: Brain, label: 'LLM-powered summaries and classification' },
    { icon: Lock, label: 'Basic workspace grouping' },
    { icon: Zap, label: 'Manual agent triggers' },
  ];

  const phase2Items = [
    { icon: Brain, label: 'Structured extraction by email type' },
    { icon: Lock, label: 'Identity layer (logins, sessions)' },
    { icon: Zap, label: 'Automated agent execution' },
    { icon: Bell, label: 'Real-time updates and notifications' },
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
            Technical approach
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl font-light">
            Built for the AI-native era
          </p>
        </motion.div>

        {/* Roadmap timeline */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Phase 1 */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-lg bg-gradient-to-br from-blue-600/30 to-blue-700/30 border border-blue-600/50">
                  <span className="text-blue-300 font-bold text-lg">1</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Phase 1 — Foundation</h3>
              </div>

              <div className="space-y-3">
                {phase1Items.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 rounded-lg border border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 hover:bg-zinc-900/50 transition-all duration-300"
                    >
                      <div className="p-2 rounded-md bg-zinc-800 mt-0.5">
                        <Icon className="w-4 h-4 text-zinc-400" />
                      </div>
                      <span className="text-sm md:text-base text-zinc-300 font-light">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Phase 2 */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-lg bg-gradient-to-br from-emerald-600/30 to-emerald-700/30 border border-emerald-600/50">
                  <span className="text-emerald-300 font-bold text-lg">2</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Phase 2 — Intelligence</h3>
              </div>

              <div className="space-y-3">
                {phase2Items.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 rounded-lg border border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 hover:bg-zinc-900/50 transition-all duration-300"
                    >
                      <div className="p-2 rounded-md bg-zinc-800 mt-0.5">
                        <Icon className="w-4 h-4 text-zinc-400" />
                      </div>
                      <span className="text-sm md:text-base text-zinc-300 font-light">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent my-20" />

        {/* Why now section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-12 text-center">
            Why now
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* AI capability shift */}
            <motion.div
              className="group relative p-8 md:p-10 rounded-lg border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-900/20 backdrop-blur-sm hover:border-zinc-700 hover:bg-gradient-to-br hover:from-zinc-800/50 hover:to-zinc-900/30 transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              <h4 className="text-xl font-bold text-white mb-4">AI capability shift</h4>
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-light">
                LLMs can now interpret unstructured data at scale. Agents can act across systems without APIs.
              </p>
              <div className="absolute inset-0 rounded-lg border border-zinc-600/0 group-hover:border-zinc-600/30 transition-all duration-300 pointer-events-none" />
            </motion.div>

            {/* Behaviour shift */}
            <motion.div
              className="group relative p-8 md:p-10 rounded-lg border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-900/20 backdrop-blur-sm hover:border-zinc-700 hover:bg-gradient-to-br hover:from-zinc-800/50 hover:to-zinc-900/30 transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              <h4 className="text-xl font-bold text-white mb-4">Behaviour shift</h4>
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-light">
                Users want summaries over feeds, actions over information, automation over interfaces.
              </p>
              <div className="absolute inset-0 rounded-lg border border-zinc-600/0 group-hover:border-zinc-600/30 transition-all duration-300 pointer-events-none" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
