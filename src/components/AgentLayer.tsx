'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Plane,
  ShoppingBag,
  Wallet,
  Calendar,
  RotateCcw,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Mail,
  Zap,
  CheckCircle2,
  Bell,
} from 'lucide-react';
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10);
  };

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 400;
    const newScroll = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);

    container.scrollTo({
      left: newScroll,
      behavior: 'smooth',
    });

    setTimeout(checkScroll, 50);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-3">
          Agents that act, not apps that wait
        </h2>
        <p className="text-lg text-zinc-400">
          Context-aware AI agents suggest themselves based on your email content
        </p>
      </div>

      {/* Agent Cards - Scrollable */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="relative group">
          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-4 -mb-4 px-4 -mx-4"
            style={{ scrollBehavior: 'smooth', scrollSnapType: 'x mandatory' }}
          >
            {mockAgents.map((agent, index) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                style={{ scrollSnapAlign: 'start' }}
                className="flex-shrink-0 w-80"
              >
                <AgentCard agent={agent} />
              </motion.div>
            ))}
          </div>

          {/* Scroll Buttons */}
          {canScrollLeft && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
          )}

          {canScrollRight && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          )}
        </div>
      </div>

      {/* How Agents Work Flow */}
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-white mb-4">How agents work</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 md:gap-2">
          {[
            { icon: Mail, label: 'Email arrives' },
            { icon: Zap, label: 'AI classifies' },
            { icon: AlertCircle, label: 'Agent activates' },
            { icon: CheckCircle2, label: 'Action executed' },
            { icon: Bell, label: "You're notified" },
          ].map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <motion.div
                whileHover={{ scale: 1.1, translateY: -4 }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white mb-3 cursor-pointer"
              >
                <step.icon className="w-5 h-5" />
              </motion.div>
              <p className="text-center text-sm font-medium text-white mb-3">{step.label}</p>

              {index < 4 && (
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="hidden md:block text-zinc-600 mb-4"
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface AgentCardProps {
  agent: Agent;
}

function AgentCard({ agent }: AgentCardProps) {
  const [hovered, setHovered] = useState(false);

  const statusColors: Record<string, { bg: string; text: string; label: string }> = {
    active: { bg: 'bg-green-900/30', text: 'text-green-400', label: 'Active' },
    suggested: { bg: 'bg-amber-900/30', text: 'text-amber-400', label: 'Suggested' },
    disabled: { bg: 'bg-zinc-800', text: 'text-zinc-400', label: 'Disabled' },
  };

  const status = statusColors[agent.status] || statusColors.suggested;

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ translateY: -8, transition: { duration: 0.3 } }}
      className="h-full rounded-lg border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 p-6 cursor-pointer hover:border-zinc-700 transition-all duration-300 backdrop-blur-sm group"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="relative z-10 space-y-4">
        {/* Icon & Status */}
        <div className="flex items-start justify-between">
          <motion.div
            animate={hovered ? { rotate: 12, scale: 1.1 } : { rotate: 0, scale: 1 }}
            className="text-white/70"
          >
            {iconMap[agent.icon]}
          </motion.div>
          <span className={`text-xs px-2 py-1 rounded-full ${status.bg} ${status.text} font-medium`}>
            {status.label}
          </span>
        </div>

        {/* Title & Description */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">{agent.name}</h3>
          <p className="text-sm text-zinc-400 line-clamp-2">{agent.description}</p>
        </div>

        {/* Capabilities */}
        <motion.div
          animate={hovered ? { opacity: 1 } : { opacity: 0.7 }}
          className="space-y-2"
        >
          <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
            Key Capabilities
          </p>
          <ul className="space-y-1">
            {agent.capabilities.slice(0, 3).map((capability, index) => (
              <motion.li
                key={index}
                initial={false}
                animate={hovered ? { x: 4 } : { x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="text-xs text-zinc-400 flex items-start gap-2"
              >
                <span className="text-blue-400/60 mt-0.5 flex-shrink-0">•</span>
                <span>{capability}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Hover action */}
        <motion.div
          animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
          transition={{ duration: 0.2 }}
          className="pt-4 border-t border-zinc-800/50"
        >
          <button className="w-full text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors flex items-center justify-center gap-2">
            Learn more
            <ArrowRight className="w-3 h-3" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
