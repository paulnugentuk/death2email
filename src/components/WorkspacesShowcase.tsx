'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Plane, ShoppingBag, Wallet, Calendar } from 'lucide-react';
import { mockWorkspaces } from '@/data/mock-workspaces';
import { Workspace, Mission } from '@/data/types';

const iconMap: Record<string, React.ReactNode> = {
  Plane: <Plane className="w-6 h-6" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6" />,
  Wallet: <Wallet className="w-6 h-6" />,
  Calendar: <Calendar className="w-6 h-6" />,
};

const colorMap: Record<string, string> = {
  travel: 'border-blue-500',
  commerce: 'border-purple-500',
  finance: 'border-green-500',
  events: 'border-pink-500',
};

export default function WorkspacesShowcase() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Workspaces, not folders
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Organize email by context, not inbox chaos. Each workspace groups related missions and actions together.
          </p>
        </div>

        {/* 2x2 Grid of Workspace Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {mockWorkspaces.map((workspace) => {
            const isExpanded = expandedId === workspace.id;
            const borderColor = colorMap[workspace.category];

            return (
              <div
                key={workspace.id}
                className="group cursor-pointer"
                onClick={() => toggleExpand(workspace.id)}
              >
                <div
                  className={`bg-zinc-900 border border-zinc-800 ${borderColor} border-l-4 rounded-lg p-6 transition-all duration-200 hover:bg-zinc-800 hover:border-zinc-700`}
                >
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="text-white">
                        {iconMap[workspace.icon]}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-lg mb-1">
                          {workspace.name}
                        </h3>
                        <p className="text-zinc-400 text-sm">
                          {workspace.description}
                        </p>
                      </div>
                    </div>
                    <div className="text-zinc-400">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex gap-6 text-sm mb-4">
                    <div>
                      <span className="text-zinc-400">Emails</span>
                      <div className="text-white font-semibold">{workspace.emailCount}</div>
                    </div>
                    <div>
                      <span className="text-zinc-400">Active</span>
                      <div className="text-white font-semibold">{workspace.activeCount}</div>
                    </div>
                  </div>

                  {/* Expanded Missions */}
                  {isExpanded && (
                    <div className="border-t border-zinc-800 pt-4 mt-4">
                      <div className="space-y-4">
                        {workspace.missions.map((mission) => (
                          <div key={mission.id}>
                            <div className="flex justify-between mb-2">
                              <span className="text-sm text-white">{mission.name}</span>
                              <span className="text-xs text-zinc-400">{mission.progress}%</span>
                            </div>
                            <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
                              <div
                                className="bg-blue-500 h-full rounded-full transition-all duration-300"
                                style={{ width: `${mission.progress}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Views Section */}
        <div className="mt-20">
          <p className="text-zinc-400 text-center mb-8">
            Every workspace supports multiple views
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Timeline', 'Kanban', 'Checklist', 'Ledger', 'Canvas'].map((view) => (
              <div
                key={view}
                className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full text-white text-sm hover:border-zinc-700 transition-colors"
              >
                {view}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
