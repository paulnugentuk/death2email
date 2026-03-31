'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, Brain, Zap, CheckCircle2, XCircle } from 'lucide-react';

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

export default function ProblemStatement() {
  const problemCards = [
    {
      icon: AlertTriangle,
      title: 'Structural Issues',
      description:
        'Built for messaging, not task execution. Each email is an isolated unit with no system-level context. No native concept of workflows.',
      color: 'text-amber-400',
    },
    {
      icon: Brain,
      title: 'User Pain',
      description:
        'Cognitive overload. Important updates buried in threads. Manual effort to extract meaning and act.',
      color: 'text-blue-400',
    },
    {
      icon: Zap,
      title: 'Modern Mismatch',
      description:
        'Most emails are system notifications — orders, bookings, alerts — still processed like human conversations.',
      color: 'text-cyan-400',
    },
  ];

  return (
    <>
      <style>{fadeInUp}</style>
      <section className="relative w-full py-24 px-8 bg-[#0a0a0a] border-t border-zinc-800/50">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section title */}
          <div className="mb-20" style={staggeredFadeInUp(0)}>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-4">
              Why email is broken
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl font-light">
              The problem isn't email itself. It's that we're using a 50-year-old protocol for work that demands real-time intelligence.
            </p>
          </div>

          {/* Three-column problem cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {problemCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  className="group relative p-8 rounded-lg border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-900/20 backdrop-blur-sm hover:border-zinc-700 hover:bg-gradient-to-br hover:from-zinc-800/50 hover:to-zinc-900/30 transition-all duration-300"
                  style={staggeredFadeInUp(0.15 + idx * 0.1)}
                  whileHover={{ y: -4 }}
                >
                  {/* Icon */}
                  <div className="mb-6 inline-block p-3 rounded-lg bg-zinc-800/50 group-hover:bg-zinc-700/50 transition-colors">
                    <Icon className={`w-6 h-6 ${card.color}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-light">
                    {card.description}
                  </p>

                  {/* Border accent on hover */}
                  <div className="absolute inset-0 rounded-lg border border-zinc-600/0 group-hover:border-zinc-600/30 transition-all duration-300 pointer-events-none" />
                </motion.div>
              );
            })}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent my-20" />

          {/* Visual Comparison */}
          <div className="mt-20">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-12 text-center" style={staggeredFadeInUp(0.5)}>
              The gap between signal and noise
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* What email shows you */}
              <div style={staggeredFadeInUp(0.65)}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-zinc-800">
                    <XCircle className="w-5 h-5 text-red-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-zinc-200">What email shows you</h4>
                </div>

                <div className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium">From: amazon@amazon.com</p>
                      <p className="text-sm font-semibold text-zinc-300">Your order has shipped</p>
                    </div>
                    <div className="pt-4 border-t border-zinc-700/50">
                      <p className="text-xs text-zinc-500">
                        Order #123–456–789 has left our facility and is on its way to you. Track your package at amazon.com.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-zinc-500 font-light">Generic. Context-free. Requires manual action.</p>
              </div>

              {/* What you actually need */}
              <div style={staggeredFadeInUp(0.8)}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-zinc-800">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-zinc-200">What you actually need</h4>
                </div>

                <div className="p-6 rounded-lg border border-green-600/30 bg-gradient-to-br from-green-950/20 to-green-900/10 backdrop-blur-sm">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-xs text-green-600/70 uppercase tracking-wider font-medium">Delivery Update</p>
                      <p className="text-lg font-bold text-green-300">
                        Your Nike Air Max 90s arrive tomorrow 2–4pm
                      </p>
                    </div>
                    <div className="pt-4 border-t border-green-600/20">
                      <div className="flex flex-col gap-3 text-sm text-green-200/80">
                        <p>
                          <span className="font-medium">Tracking:</span> DHL Express
                        </p>
                        <p>
                          <span className="font-medium">Action:</span> Add to calendar
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-zinc-500 font-light">Specific. Actionable. Integrated.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
