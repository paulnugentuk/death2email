'use client';

import { GitBranch, Palette, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 md:px-8 bg-[#0a0a0a]">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center gap-8 mb-12">
          {/* Title and Tagline */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">
              death2email
            </h3>
            <p className="text-zinc-400">
              A product vision by Paul Nugent
            </p>
          </div>

          {/* Icon Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors px-3 py-2 hover:bg-zinc-900 rounded-lg"
              aria-label="GitHub"
            >
              <GitBranch className="w-5 h-5" />
              <span className="text-sm hidden group-hover:inline transition-all">GitHub</span>
            </a>
            <a
              href="https://www.figma.com/make/DH7aLB3FUD6p5Olqezc6yh/Death2Email"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors px-3 py-2 hover:bg-zinc-900 rounded-lg"
              aria-label="Figma prototype"
            >
              <Palette className="w-5 h-5" />
              <span className="text-sm hidden group-hover:inline transition-all">Figma</span>
            </a>
            <a
              href="mailto:pauldnugent84@gmail.com"
              className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors px-3 py-2 hover:bg-zinc-900 rounded-lg"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm hidden group-hover:inline transition-all">Contact</span>
            </a>
          </div>

          {/* Conviction Statement */}
          <p className="text-zinc-500 text-sm text-center max-w-2xl">
            Built with conviction that email deserves better.
          </p>
        </div>

        {/* Copyright Line */}
        <div className="border-t border-zinc-800 pt-8">
          <p className="text-zinc-600 text-xs text-center">
            &copy; 2026 death2email. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
