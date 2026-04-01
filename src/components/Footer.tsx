'use client';

import { GitBranch, Palette, Mail } from 'lucide-react';

const links = [
  { href: '#', icon: GitBranch, label: 'GitHub' },
  { href: 'https://www.figma.com/make/DH7aLB3FUD6p5Olqezc6yh/Death2Email', icon: Palette, label: 'Figma' },
  { href: 'mailto:pauldnugent84@gmail.com', icon: Mail, label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="relative py-20 px-6 md:px-8 bg-[#0a0a0a]">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-5xl mx-auto text-center">
        {/* Brand */}
        <h3 className="font-display text-2xl text-white mb-2">death2email</h3>
        <p className="text-zinc-600 text-sm mb-8">A product vision by Paul Nugent</p>

        {/* Links */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-2 px-3 py-2 rounded-lg text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50 transition-all"
              >
                <Icon className="w-4 h-4" />
                <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">{link.label}</span>
              </a>
            );
          })}
        </div>

        {/* Conviction */}
        <p className="text-zinc-700 text-xs mb-12">
          Built with conviction that email deserves better.
        </p>

        {/* Copyright */}
        <p className="text-zinc-800 text-[11px]">
          &copy; 2026 death2email
        </p>
      </div>
    </footer>
  );
}
