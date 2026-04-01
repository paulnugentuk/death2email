'use client';

import {
  Plane, ShoppingBag, Wallet, Calendar, RotateCcw, AlertCircle,
  Mail, Zap, CheckCircle, ArrowRight, Bell,
} from 'lucide-react';
import { mockAgents } from '@/data/mock-agents';
import { Agent } from '@/data/types';

const iconMap: Record<string, React.ReactNode> = {
  Plane: <Plane className="w-5 h-5" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5" />,
  Wallet: <Wallet className="w-5 h-5" />,
  Calendar: <Calendar className="w-5 h-5" />,
  RotateCcw: <RotateCcw className="w-5 h-5" />,
  AlertCircle: <AlertCircle className="w-5 h-5" />,
};

const flowSteps = [
  { icon: Mail, label: 'Email arrives' },
  { icon: Zap, label: 'AI classifies' },
  { icon: CheckCircle, label: 'Agent activates' },
  { icon: ArrowRight, label: 'Action executed' },
  { icon: Bell, label: 'You\'re notified' },
];

export default function AgentLayer() {
  return (
    <section id="agents" className="py-28 md:py-36 px-6 md:px-8 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Agents that act, not apps that wait
          </h2>
          <p className="text-base text-zinc-500 max-w-xl">
            Purpose-built AI agents that understand intent and take action automatically.
          </p>
        </div>

        {/* Agent cards — 3x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {mockAgents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>

        {/* How agents work */}
        <div className="rounded-xl border border-zinc-800/50 bg-zinc-900/20 p-8 md:p-12">
          <h3 className="text-white font-semibold text-lg mb-10 text-center">
            How agents work
          </h3>

          <div className="flex items-center justify-between overflow-x-auto gap-2 md:gap-0">
            {flowSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div key={idx} className="flex items-center gap-3 flex-shrink-0">
                  <div className="flex flex-col items-center">
                    <div className="w-11 h-11 rounded-full bg-purple-500/8 border border-purple-500/15 flex items-center justify-center mb-2">
                      <StepIcon className="w-4 h-4 text-purple-400" />
                    </div>
                    <span className="text-[10px] text-zinc-500 whitespace-nowrap">{step.label}</span>
                  </div>
                  {idx < 4 && (
                    <div className="w-8 md:w-14 h-px bg-gradient-to-r from-purple-500/30 to-purple-500/5 flex-shrink-0" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function AgentCard({ agent }: { agent: Agent }) {
  const isActive = agent.status === 'active';

  return (
    <div className="card-lift rounded-xl border border-zinc-800/50 bg-zinc-900/20 p-5 hover:border-zinc-700/50 min-h-[240px] flex flex-col">
      {/* Top row */}
      <div className="flex items-start justify-between mb-3">
        <span className="text-zinc-500">{iconMap[agent.icon]}</span>
        <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
          isActive
            ? 'bg-green-500/10 text-green-400 border border-green-500/20'
            : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
        }`}>
          {isActive ? 'Active' : 'Suggested'}
        </span>
      </div>

      <h3 className="text-white font-semibold text-base mb-1.5">{agent.name}</h3>
      <p className="text-zinc-500 text-xs leading-relaxed mb-4 font-light">{agent.description}</p>

      {/* Capability pills */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {agent.capabilities.slice(0, 3).map((cap, idx) => (
          <span key={idx} className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-800/60 border border-zinc-700/30 text-zinc-400">
            {cap}
          </span>
        ))}
        {agent.capabilities.length > 3 && (
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-800/40 text-zinc-600">
            +{agent.capabilities.length - 3}
          </span>
        )}
      </div>
    </div>
  );
}
