'use client';

import { Plane, ShoppingBag, Wallet, Calendar, RotateCcw, AlertCircle, ArrowRight, Mail, Zap, CheckCircle, Bell } from 'lucide-react';
import { mockAgents } from '@/data/mock-agents';
import { Agent } from '@/data/types';

const iconMap: Record<string, React.ReactNode> = {
  Plane: <Plane className="w-6 h-6" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6" />,
  Wallet: <Wallet className="w-6 h-6" />,
  Calendar: <Calendar className="w-6 h-6" />,
  RotateCcw: <RotateCcw className="w-6 h-6" />,
  AlertCircle: <AlertCircle className="w-6 h-6" />,
};

export default function AgentLayer() {
  return (
    <section id="agents" className="py-24 md:py-32 px-6 md:px-8 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Agents that act, not apps that wait
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Purpose-built AI agents that understand your intent and take action automatically.
          </p>
        </div>

        {/* Agent Cards Grid (2x3 or 3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {mockAgents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>

        {/* How Agents Work Flow */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-12">
          <h3 className="text-white font-semibold text-xl mb-12 text-center">
            How agents work
          </h3>

          {/* Flow Steps */}
          <div className="flex items-center justify-between overflow-x-auto gap-4 md:gap-0">
            {[
              { icon: Mail, label: 'Email arrives' },
              { icon: Zap, label: 'AI classifies' },
              { icon: CheckCircle, label: 'Agent activates' },
              { icon: ArrowRight, label: 'Action executed' },
              { icon: Bell, label: 'You\'re notified' },
            ].map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div key={idx} className="flex items-center gap-4 flex-shrink-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-2">
                      <StepIcon className="w-5 h-5 text-purple-400" />
                    </div>
                    <span className="text-xs text-zinc-400 text-center whitespace-nowrap">
                      {step.label}
                    </span>
                  </div>
                  {idx < 4 && (
                    <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500/40 to-purple-500/10 hidden md:block flex-shrink-0" />
                  )}
                  {idx < 4 && (
                    <div className="w-6 h-0.5 bg-gradient-to-r from-purple-500/40 to-purple-500/10 md:hidden flex-shrink-0" />
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
  const statusColor =
    agent.status === 'active'
      ? 'bg-green-900 text-green-200'
      : 'bg-amber-900 text-amber-200';
  const statusText = agent.status === 'active' ? 'Active' : 'Suggested';

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all duration-200 hover:-translate-y-0.5 min-h-[280px] flex flex-col">
      {/* Icon and Title */}
      <div className="flex items-start justify-between mb-4">
        <div className="text-white">
          {iconMap[agent.icon]}
        </div>
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusColor}`}>
          {statusText}
        </span>
      </div>

      {/* Name and Description */}
      <h3 className="text-white font-semibold text-lg mb-2">
        {agent.name}
      </h3>
      <p className="text-zinc-400 text-sm mb-6">
        {agent.description}
      </p>

      {/* Capabilities as pills */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {agent.capabilities.slice(0, 4).map((capability, idx) => (
          <span key={idx} className="inline-block px-2.5 py-1 rounded-full bg-zinc-800 border border-zinc-700/50 text-zinc-300 text-xs">
            {capability}
          </span>
        ))}
      </div>
    </div>
  );
}
