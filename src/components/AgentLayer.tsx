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
    <section className="py-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
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
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-12">
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
                    <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-2">
                      <StepIcon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs text-zinc-400 text-center whitespace-nowrap">
                      {step.label}
                    </span>
                  </div>
                  {idx < 4 && (
                    <div className="w-8 h-0.5 bg-zinc-600 hidden md:block flex-shrink-0" />
                  )}
                  {idx < 4 && (
                    <div className="w-4 h-0.5 bg-zinc-600 md:hidden flex-shrink-0" />
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
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors">
      {/* Icon and Title */}
      <div className="flex items-start justify-between mb-4">
        <div className="text-white">
          {iconMap[agent.icon]}
        </div>
        <span className={`text-xs font-semibold px-2 py-1 rounded ${statusColor}`}>
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

      {/* Capabilities */}
      <div className="space-y-2">
        {agent.capabilities.slice(0, 4).map((capability, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <span className="text-zinc-500 text-xs mt-1">•</span>
            <span className="text-zinc-300 text-xs">{capability}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
