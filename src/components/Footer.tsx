'use client';

import { motion } from 'framer-motion';
import { GitBranch, Palette, Mail } from 'lucide-react';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const links = [
    {
      icon: GitBranch,
      label: 'GitHub',
      href: 'https://github.com',
      external: true,
    },
    {
      icon: Palette,
      label: 'Figma',
      href: 'https://www.figma.com/make/DH7aLB3FUD6p5Olqezc6yh/Death2Email',
      external: true,
    },
    {
      icon: Mail,
      label: 'Contact',
      href: 'mailto:pauldnugent84@gmail.com',
      external: true,
    },
  ];

  return (
    <footer className="relative w-full py-16 px-8 bg-[#0a0a0a] border-t border-zinc-800/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col items-center gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo and tagline */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-2">
              <span className="text-white">death</span>
              <span className="text-white">2</span>
              <span className="relative">
                email
                <span className="absolute inset-0 blur-xl bg-gradient-to-r from-red-500/20 to-red-600/20 -z-10" />
              </span>
            </h3>
            <p className="text-sm text-zinc-500 font-light">A product vision by Paul Nugent</p>
          </motion.div>

          {/* Links */}
          <motion.div variants={itemVariants} className="flex items-center gap-6">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="group p-2 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 hover:bg-zinc-800/50 transition-all duration-300"
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5 text-zinc-400 group-hover:text-zinc-200 transition-colors" />
                </a>
              );
            })}
          </motion.div>

          {/* Footer text */}
          <motion.p variants={itemVariants} className="text-xs md:text-sm text-zinc-600 text-center max-w-md font-light">
            Built with conviction that email deserves better.
          </motion.p>
        </motion.div>

        {/* Bottom divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mt-12" />

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="mt-8 text-center text-xs text-zinc-700 font-light"
        >
          <p>© 2026. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
