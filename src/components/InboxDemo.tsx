'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { transformedEmails } from '../data/mock-emails';

type ViewMode = 'traditional' | 'death2email';

const urgencyColors: Record<string, string> = {
  critical: 'bg-red-500',
  high: 'bg-orange-500',
  medium: 'bg-amber-500',
  low: 'bg-zinc-600',
};

const workspaceColors: Record<string, string> = {
  Travel: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  Shopping: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  Finance: 'text-green-400 bg-green-500/10 border-green-500/20',
  Events: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
};

export default function InboxDemo() {
  const [viewMode, setViewMode] = useState<ViewMode>('traditional');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showRaw, setShowRaw] = useState<string | null>(null);

  const emails = transformedEmails.slice(0, 8);
  const actionCount = emails.filter(e => e.urgency === 'critical' || e.urgency === 'high').length;
  const workspaceCount = new Set(emails.map(e => e.workspace)).size;

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
    if (showRaw === id) setShowRaw(null);
  };

  const formatDate = (ts: string) => {
    const diff = Math.floor((Date.now() - new Date(ts).getTime()) / 86400000);
    if (diff < 1) return 'Today';
    if (diff < 7) return `${diff}d ago`;
    return new Date(ts).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
  };

  return (
    <section id="demo" className="py-28 md:py-36 px-6 md:px-12 lg:px-16 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See the transformation
          </h2>
          <p className="text-base text-zinc-500 max-w-md mx-auto">
            The same emails. One as noise, one as signal.
          </p>
        </div>

        {/* Mobile tabs */}
        <div className="lg:hidden mb-6 flex justify-center">
          <div className="inline-flex bg-zinc-900 rounded-lg p-1 border border-zinc-800">
            {(['traditional', 'death2email'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-4 py-2 rounded-md text-sm transition-all ${
                  viewMode === mode
                    ? 'bg-zinc-800 text-white'
                    : 'text-zinc-500 hover:text-zinc-400'
                }`}
              >
                {mode === 'traditional' ? 'Traditional' : 'death2email'}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop side-by-side */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6">
          {/* LEFT — Traditional (deliberately flat) */}
          <div>
            <div className="rounded-xl border border-zinc-800/50 bg-zinc-950/50 overflow-hidden">
              <div className="px-5 py-3.5 border-b border-zinc-800/50 bg-zinc-900/30">
                <span className="text-sm text-zinc-500 font-medium">Inbox</span>
                <span className="text-xs text-zinc-700 ml-2">({emails.length})</span>
              </div>
              <div className="divide-y divide-zinc-800/30">
                {emails.map((email) => (
                  <div key={email.id} className="px-5 py-3.5 hover:bg-zinc-900/30 transition-colors">
                    <div className="flex items-baseline justify-between gap-4 mb-1">
                      <span className="text-xs text-zinc-600 font-mono truncate">
                        {email.rawEmail.from}
                      </span>
                      <span className="text-[10px] text-zinc-700 flex-shrink-0">{formatDate(email.rawEmail.timestamp)}</span>
                    </div>
                    <p className="text-sm text-zinc-400 truncate leading-snug">
                      {email.rawEmail.subject}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — death2email (alive) */}
          <div>
            <div className="rounded-xl border border-purple-500/15 bg-zinc-950/50 overflow-hidden shadow-xl shadow-purple-500/[0.04]">
              {/* Header */}
              <div className="px-5 py-3.5 border-b border-zinc-800/50 bg-zinc-900/30 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="text-sm text-white font-medium">death2email</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 dot-breathe" />
                </div>
                <span className="text-[10px] text-zinc-600">{emails.length} processed</span>
              </div>

              {/* Stats bar */}
              {!expandedId && (
                <div className="px-5 py-3 border-b border-zinc-800/30 bg-purple-500/[0.02] flex items-center gap-6 text-xs">
                  <span className="text-zinc-500">
                    <span className="text-purple-400 font-medium">{actionCount}</span> actions needed
                  </span>
                  <span className="text-zinc-500">
                    <span className="text-zinc-400 font-medium">{workspaceCount}</span> workspaces
                  </span>
                </div>
              )}

              {/* Email list */}
              <div className="p-3 space-y-2 max-h-[520px] overflow-y-auto">
                {emails.map((email) => {
                  const isExpanded = expandedId === email.id;
                  const dotColor = urgencyColors[email.urgency] || 'bg-zinc-600';
                  const tagColor = workspaceColors[email.workspace] || 'text-zinc-400 bg-zinc-800 border-zinc-700';
                  const shouldPulse = email.urgency === 'critical' || email.urgency === 'high';

                  return (
                    <div
                      key={email.id}
                      onClick={() => toggleExpanded(email.id)}
                      className={`rounded-lg border p-3.5 cursor-pointer transition-all duration-200 ${
                        isExpanded
                          ? 'border-zinc-700 bg-zinc-900/60'
                          : 'border-zinc-800/40 bg-zinc-900/20 hover:border-zinc-700/50 hover:bg-zinc-900/40'
                      }`}
                    >
                      {/* Top row */}
                      <div className="flex items-start gap-3">
                        {/* Urgency dot */}
                        <div className="relative mt-1.5 flex-shrink-0">
                          <div className={`w-2 h-2 rounded-full ${dotColor}`} />
                          {shouldPulse && (
                            <div className={`absolute inset-0 w-2 h-2 rounded-full ${dotColor} animate-ping opacity-60`} />
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-white leading-snug mb-2">
                            {email.aiSummary.substring(0, 55)}{email.aiSummary.length > 55 ? '...' : ''}
                          </p>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${tagColor}`}>
                              {email.workspace}
                            </span>
                            {email.mission && (
                              <span className="text-[10px] text-zinc-600">{email.mission}</span>
                            )}
                          </div>
                        </div>

                        {/* Chevron */}
                        <ChevronDown
                          size={14}
                          className={`text-zinc-600 flex-shrink-0 mt-1 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </div>

                      {/* Expanded detail */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 pt-4 border-t border-zinc-800/50 space-y-4">
                              {/* Full summary */}
                              <p className="text-sm text-zinc-300 leading-relaxed font-light">
                                {email.aiSummary}
                              </p>

                              {/* Extracted data grid */}
                              {email.extractedData && Object.keys(email.extractedData).length > 0 && (
                                <div className="rounded-lg bg-zinc-950/50 border border-zinc-800/30 p-3">
                                  <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
                                    {Object.entries(email.extractedData).slice(0, 6).map(([key, value]) => (
                                      <div key={key}>
                                        <span className="text-[10px] text-zinc-600 uppercase tracking-wider block mb-0.5">
                                          {key.replace(/([A-Z])/g, ' $1').trim()}
                                        </span>
                                        <span className="text-xs text-zinc-300">{value}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Raw email toggle */}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setShowRaw(showRaw === email.id ? null : email.id);
                                }}
                                className="text-[11px] text-zinc-600 hover:text-zinc-400 transition-colors"
                              >
                                {showRaw === email.id ? '↑ Close' : '↓ Open the coffin'}
                              </button>

                              {/* Raw email */}
                              {showRaw === email.id && (
                                <div className="rounded-lg bg-black/30 border border-zinc-800/30 p-3 font-mono text-[11px] text-zinc-600 space-y-1 max-h-28 overflow-y-auto">
                                  <p><span className="text-zinc-700">From:</span> {email.rawEmail.from}</p>
                                  <p><span className="text-zinc-700">Subject:</span> {email.rawEmail.subject}</p>
                                  <p className="text-zinc-700 mt-1 line-clamp-3">{email.rawEmail.body}</p>
                                </div>
                              )}

                              {/* Action button */}
                              <button
                                onClick={(e) => e.stopPropagation()}
                                className="w-full bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium py-2.5 rounded-lg transition-colors"
                              >
                                {email.action}
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile view */}
        <div className="lg:hidden">
          {viewMode === 'traditional' ? (
            <div className="rounded-xl border border-zinc-800/50 bg-zinc-950/50 overflow-hidden">
              <div className="px-5 py-3.5 border-b border-zinc-800/50 bg-zinc-900/30">
                <span className="text-sm text-zinc-500 font-medium">Inbox</span>
              </div>
              <div className="divide-y divide-zinc-800/30">
                {emails.map((email) => (
                  <div key={email.id} className="px-5 py-3.5">
                    <span className="text-xs text-zinc-600 font-mono">{email.rawEmail.from.split('@')[0]}</span>
                    <p className="text-sm text-zinc-400 truncate mt-1">{email.rawEmail.subject}</p>
                    <span className="text-[10px] text-zinc-700 mt-1 block">{formatDate(email.rawEmail.timestamp)}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="rounded-xl border border-purple-500/15 bg-zinc-950/50 overflow-hidden shadow-xl shadow-purple-500/[0.04]">
              <div className="px-5 py-3.5 border-b border-zinc-800/50 bg-zinc-900/30 flex items-center gap-2.5">
                <span className="text-sm text-white font-medium">death2email</span>
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 dot-breathe" />
              </div>
              <div className="p-3 space-y-2">
                {emails.map((email) => {
                  const isExpanded = expandedId === email.id;
                  const dotColor = urgencyColors[email.urgency] || 'bg-zinc-600';
                  const tagColor = workspaceColors[email.workspace] || 'text-zinc-400 bg-zinc-800 border-zinc-700';

                  return (
                    <div
                      key={email.id}
                      onClick={() => toggleExpanded(email.id)}
                      className={`rounded-lg border p-3.5 cursor-pointer transition-all ${
                        isExpanded ? 'border-zinc-700 bg-zinc-900/60' : 'border-zinc-800/40 bg-zinc-900/20'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full ${dotColor} mt-1.5 flex-shrink-0`} />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-white leading-snug mb-2">
                            {email.aiSummary.substring(0, 50)}{email.aiSummary.length > 50 ? '...' : ''}
                          </p>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${tagColor}`}>
                            {email.workspace}
                          </span>
                        </div>
                        <ChevronDown
                          size={14}
                          className={`text-zinc-600 flex-shrink-0 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </div>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 pt-4 border-t border-zinc-800/50 space-y-4">
                              <p className="text-sm text-zinc-300 leading-relaxed font-light">{email.aiSummary}</p>

                              {email.extractedData && Object.keys(email.extractedData).length > 0 && (
                                <div className="rounded-lg bg-zinc-950/50 border border-zinc-800/30 p-3">
                                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                                    {Object.entries(email.extractedData).slice(0, 4).map(([key, value]) => (
                                      <div key={key}>
                                        <span className="text-[10px] text-zinc-600 uppercase tracking-wider block mb-0.5">
                                          {key.replace(/([A-Z])/g, ' $1').trim()}
                                        </span>
                                        <span className="text-xs text-zinc-300">{value}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              <button
                                onClick={(e) => e.stopPropagation()}
                                className="w-full bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium py-2.5 rounded-lg transition-colors"
                              >
                                {email.action}
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Hint */}
        <p className="text-center text-xs text-zinc-700 mt-10">
          Click any email on the right to see the full transformation
        </p>
      </div>
    </section>
  );
}
