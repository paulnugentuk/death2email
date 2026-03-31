'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, ShoppingBag, Wallet, Calendar, ChevronDown, Mail } from 'lucide-react';
import { mockWorkspaces } from '@/data/mock-workspaces';
import { Workspace, Mission } from '@/data/types';

const iconMap: Record<string, React.ReactNode> = {
  Plane: <Plane className="w-6 h-6" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6" />,
  Wallet: <Wallet className="w-6 h-6" />,
  Calendar: <Calendar className="w-6 h-6" />,
};

interface ExpandedWorkspace {
  id: string;
  expanded: boolean;
}

export default function WorkspacesShowcase() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-3">
          Workspaces, not folders
        </h2>
        <p className="text-lg text-zinc-400">
          Emails are automatically grouped into dynamic, contextual spaces
        </p>
      </div>

      {/* Workspace Grid */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {mockWorkspaces.map((workspace) => (
            <WorkspaceCard
              key={workspace.id}
              workspace={workspace}
              isExpanded={expanded[workspace.id] || false}
              onToggle={() => toggleExpand(workspace.id)}
            />
          ))}
        </div>
      </div>

      {/* Views Concept */}
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-white mb-2">
            Every workspace supports multiple views
          </h3>
          <p className="text-zinc-400 mb-6">
            Switch between perspectives to manage your workspace the way you work
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {['Timeline', 'Kanban', 'Checklist', 'Ledger', 'Canvas'].map((view) => (
            <motion.div
              key={view}
              whileHover={{ scale: 1.05, translateY: -2 }}
              className="px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700 text-white text-sm font-medium cursor-pointer hover:bg-zinc-700 transition-colors"
            >
              {view}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface WorkspaceCardProps {
  workspace: Workspace;
  isExpanded: boolean;
  onToggle: () => void;
}

function WorkspaceCard({ workspace, isExpanded, onToggle }: WorkspaceCardProps) {
  const colorClasses: Record<string, string> = {
    'bg-blue-50 border-blue-200': 'border-blue-500/50 hover:border-blue-500/80',
    'bg-orange-50 border-orange-200': 'border-orange-500/50 hover:border-orange-500/80',
    'bg-green-50 border-green-200': 'border-green-500/50 hover:border-green-500/80',
    'bg-purple-50 border-purple-200': 'border-purple-500/50 hover:border-purple-500/80',
  };

  const borderColor = colorClasses[workspace.color] || 'border-zinc-700';

  return (
    <motion.div
      layout
      className={`group relative rounded-lg border-2 ${borderColor} bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 p-6 cursor-pointer transition-all duration-300 backdrop-blur-sm`}
      onClick={onToggle}
      whileHover={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
    >
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-start justify-between mb-4">
        <div className="flex items-start gap-4 flex-1">
          <div className="text-white/70 mt-1">{iconMap[workspace.icon]}</div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-1">{workspace.name}</h3>
            <p className="text-sm text-zinc-400">{workspace.description}</p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-zinc-500"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </div>

      {/* Stats */}
      <div className="relative z-10 flex gap-6 mb-6 pb-6 border-b border-zinc-800/50">
        <div>
          <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">
            Total Emails
          </div>
          <div className="text-2xl font-bold text-white">{workspace.emailCount}</div>
        </div>
        <div>
          <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">
            Active
          </div>
          <div className="text-2xl font-bold text-white">{workspace.activeCount}</div>
        </div>
      </div>

      {/* Expanded Missions */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 space-y-3"
          >
            <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
              Missions
            </div>
            {workspace.missions.map((mission) => (
              <MissionRow key={mission.id} mission={mission} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function MissionRow({ mission }: { mission: Mission }) {
  const emailSummary = mission.emails.length
    ? `${mission.emails.length} email${mission.emails.length !== 1 ? 's' : ''}`
    : 'No emails';

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-2"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-white">{mission.name}</p>
          <p className="text-xs text-zinc-500 flex items-center gap-1 mt-1">
            <Mail className="w-3 h-3" /> {emailSummary}
          </p>
        </div>
        <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-zinc-300 capitalize">
          {mission.status}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${mission.progress}%` }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
        />
      </div>
      <div className="text-xs text-zinc-500">{mission.progress}% complete</div>
    </motion.div>
  );
}
