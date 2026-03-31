'use client';

import { GitBranch, Palette, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-[#0a0a0a] border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
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
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-zinc-400 hover:text-white transition-colors p-2 hover:bg-zinc-900 rounded-lg"
              aria-label="GitHub"
            >
              <GitBranch className="w-5 h-5" />
            </a>
            <a
              href="https://www.figma.com/make/DH7aLB3FUD6p5Olqezc6yh/Death2Email"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors p-2 hover:bg-zinc-900 rounded-lg"
              aria-label="Figma prototype"
            >
              <Palette className="w-5 h-5" />
            </a>
            <a
              href="mailto:pauldnugent84@gmail.com"
              className="text-zinc-400 hover:text-white transition-colors p-2 hover:bg-zinc-900 rounded-lg"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
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
