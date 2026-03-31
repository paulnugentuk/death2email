'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

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

export default function Hero() {
  const chevronVariants = {
    animate: {
      y: [0, 8, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  return (
    <>
      <style>{fadeInUp}</style>
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/20 via-transparent to-transparent pointer-events-none" />

        <div
          className="relative z-10 text-center max-w-4xl px-8"
          style={{
            animation: 'fadeInUp 1s ease forwards',
          }}
        >
          {/* Main Heading */}
          <div style={{ animationDelay: '0s' }}>
            <h1 className="text-7xl md:text-9xl font-black tracking-tight mb-6">
              <span className="text-white">death</span>
              <span className="relative">
                <span className="text-white">2</span>
              </span>
              <span className="relative text-white">
                email
                {/* Red glow effect */}
                <span className="absolute inset-0 blur-2xl bg-red-500/30 -z-10" />
                <span className="absolute inset-0 blur-xl bg-gradient-to-r from-red-500/40 to-red-600/40 -z-10 animate-pulse" />
              </span>
            </h1>
          </div>

          {/* Subheading */}
          <p
            className="text-xl md:text-2xl text-zinc-400 mb-8 font-light tracking-wide"
            style={{
              opacity: 0,
              animation: 'fadeInUp 1s ease forwards',
              animationDelay: '0.15s',
            }}
          >
            The post-inbox interface
          </p>

          {/* Core Thesis */}
          <p
            className="text-lg md:text-xl text-zinc-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
            style={{
              opacity: 0,
              animation: 'fadeInUp 1s ease forwards',
              animationDelay: '0.3s',
            }}
          >
            Email is not a communication tool anymore — it's an unstructured task queue.
          </p>

          {/* Pills */}
          <div
            className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16"
            style={{
              opacity: 0,
              animation: 'fadeInUp 1s ease forwards',
              animationDelay: '0.45s',
            }}
          >
            {['Interprets', 'Extracts', 'Acts'].map((pill) => (
              <motion.div
                key={pill}
                className="px-6 py-3 rounded-full border border-zinc-700 bg-zinc-900/50 backdrop-blur-sm hover:border-zinc-600 hover:bg-zinc-800/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-sm md:text-base font-medium text-zinc-200">{pill}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          style={{
            animation: 'fadeInUp 1s ease forwards',
            animationDelay: '0.6s',
          }}
        >
          <motion.div variants={chevronVariants} animate="animate">
            <ChevronDown className="w-6 h-6 text-zinc-600 hover:text-zinc-400 transition-colors" />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
