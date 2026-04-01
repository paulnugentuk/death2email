'use client';

import { useState } from 'react';
import {
  ChevronDown, ChevronUp, Plane, ShoppingBag, Wallet, Calendar,
  Clock, LayoutGrid, CheckSquare, BookOpen, PenTool,
} from 'lucide-react';
import { mockWorkspaces } from '@/data/mock-workspaces';

const iconMap: Record<string, React.ReactNode> = {
  Plane: <Plane className="w-5 h-5" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5" />,
  Wallet: <Wallet className="w-5 h-5" />,
  Calendar: <Calendar className="w-5 h-5" />,
};

const borderColors: Record<string, string> = {
  travel: 'border-l-blue-500',
  commerce: 'border-l-purple-500',
  finance: 'border-l-green-500',
  events: 'border-l-pink-500',
};

const progressColors: Record<string, string> = {
  travel: 'bg-blue-500',
  commerce: 'bg-purple-500',
  finance: 'bg-green-500',
  events: 'bg-pink-500',
};

const views = [
  { name: 'Timeline', icon: Clock },
  { name: 'Kanban', icon: LayoutGrid },
  { name: 'Checklist', icon: CheckSquare },
  { name: 'Ledger', icon: BookOpen },
  { name: 'Canvas', icon: PenTool },
];

export default function WorkspacesShowcase() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="workspaces" className="py-28 md:py-36 px-6 md:px-8 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Workspaces, not folders
          </h2>
          <p className="text-base text-zinc-500 max-w-xl">
            Organize by context, not inbox chaos. Each workspace groups related missions and actions together.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
          {mockWorkspaces.map((ws) => {
            const isExpanded = expandedId === ws.id;
            const border = borderColors[ws.category];
            const progress = progressColors[ws.category];

            return (
              <div
                key={ws.id}
                onClick={() => setExpandedId(isExpanded ? null : ws.id)}
                className={`card-lift cursor-pointer rounded-xl border border-l-4 ${border} border-zinc-800/50 bg-zinc-900/30 p-5 hover:border-zinc-700/50 hover:bg-zinc-900/50`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-zinc-400">{iconMap[ws.icon]}</span>
                    <div>
                      <h3 className="text-white font-semibold text-base">{ws.name}</h3>
                      <p className="text-zinc-600 text-xs mt-0.5">{ws.description}</p>
                    </div>
                  </div>
                  {isExpanded
                    ? <ChevronUp className="w-4 h-4 text-zinc-600" />
                    : <ChevronDown className="w-4 h-4 text-zinc-600" />
                  }
                </div>

                {/* Stats */}
                <div className="flex gap-5 text-xs mb-1">
                  <span className="text-zinc-600">
                    <span className="text-zinc-400 font-medium">{ws.emailCount}</span> emails
                  </span>
                  <span className="text-zinc-600">
                    <span className="text-zinc-400 font-medium">{ws.activeCount}</span> active
                  </span>
                </div>

                {/* Expanded missions */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-zinc-800/50 space-y-4">
                    {ws.missions.map((m) => (
                      <div key={m.id}>
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-sm text-zinc-300">{m.name}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] text-zinc-600">{m.emails.length} emails</span>
                            <span className="text-[10px] text-zinc-500 font-medium">{m.progress}%</span>
                          </div>
                        </div>
                        <div className="w-full bg-zinc-800/50 rounded-full h-1 overflow-hidden">
                          <div
                            className={`${progress} h-full rounded-full transition-all duration-500`}
                            style={{ width: `${m.progress}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Views */}
        <div>
          <p className="text-zinc-600 text-center text-sm mb-6">
            Every workspace supports multiple views
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {views.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.name}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800/50 bg-zinc-900/30 text-zinc-400 text-xs hover:border-zinc-700 hover:text-zinc-300 transition-all cursor-default"
                >
                  <Icon className="w-3 h-3" />
                  {v.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
