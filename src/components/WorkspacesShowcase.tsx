'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Plane, ShoppingBag, Wallet, Calendar, Clock, LayoutGrid, CheckSquare, BookOpen, PenTool } from 'lucide-react';
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

const progressColorMap: Record<string, string> = {
  travel: 'bg-blue-500',
  commerce: 'bg-purple-500',
  finance: 'bg-green-500',
  events: 'bg-pink-500',
};

export default function WorkspacesShowcase() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="workspaces" className="py-24 md:py-32 px-6 md:px-8 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
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
                  className={`bg-zinc-900 border border-zinc-800 ${borderColor} border-l-4 rounded-xl p-6 transition-all duration-200 hover:bg-zinc-800 hover:border-zinc-700 hover:-translate-y-0.5`}
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
                                className={`${progressColorMap[workspace.category] || 'bg-blue-500'} h-full rounded-full transition-all duration-300`}
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
            {[
              { name: 'Timeline', icon: Clock },
              { name: 'Kanban', icon: LayoutGrid },
              { name: 'Checklist', icon: CheckSquare },
              { name: 'Ledger', icon: BookOpen },
              { name: 'Canvas', icon: PenTool },
            ].map((view) => {
              const ViewIcon = view.icon;
              return (
                <div
                  key={view.name}
                  className="bg-zinc-900 border border-zinc-800 px-5 py-2.5 rounded-full text-white text-sm hover:border-zinc-600 hover:bg-zinc-800 transition-all duration-200 flex items-center gap-2 cursor-default"
                >
                  <ViewIcon className="w-3.5 h-3.5 text-zinc-500" />
                  {view.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
