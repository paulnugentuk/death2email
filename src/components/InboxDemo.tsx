'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Zap } from 'lucide-react';
import { transformedEmails } from '../data/mock-emails';
import { TransformedEmail } from '../data/types';

type ViewMode = 'traditional' | 'death2email';

export default function InboxDemo() {
  const [viewMode, setViewMode] = useState<ViewMode>('traditional');
  const [expandedEmailId, setExpandedEmailId] = useState<string | null>(null);
  const [showRawEmail, setShowRawEmail] = useState<string | null>(null);

  const emails = transformedEmails.slice(0, 8);

  const actionCount = emails.filter(e => e.urgency === 'critical' || e.urgency === 'high').length;
  const workspaceCount = new Set(emails.map(e => e.workspace)).size;

  const getUrgencyDot = (urgency: string): React.ReactNode => {
    const dotColor = {
      critical: 'bg-red-500',
      high: 'bg-orange-500',
      medium: 'bg-yellow-500',
      low: 'bg-blue-500',
    }[urgency] || 'bg-blue-500';

    const shouldPulse = urgency === 'critical' || urgency === 'high';

    return (
      <div className="relative flex-shrink-0">
        <div className={`w-2.5 h-2.5 rounded-full ${dotColor}`} />
        {shouldPulse && (
          <div className={`absolute inset-0 w-2.5 h-2.5 rounded-full ${dotColor} animate-ping opacity-75`} />
        )}
      </div>
    );
  };

  const getWorkspaceTagColor = (workspace: string): string => {
    const colors: Record<string, string> = {
      Travel: 'bg-blue-500/20 text-blue-400',
      Shopping: 'bg-purple-500/20 text-purple-400',
      Finance: 'bg-green-500/20 text-green-400',
      Events: 'bg-pink-500/20 text-pink-400',
    };
    return colors[workspace] || 'bg-zinc-700/50 text-zinc-300';
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const toggleExpanded = (emailId: string) => {
    setExpandedEmailId(expandedEmailId === emailId ? null : emailId);
    if (showRawEmail === emailId) {
      setShowRawEmail(null);
    }
  };

  return (
    <section id="demo" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">See the transformation</h2>
          <p className="text-lg text-zinc-400">
            Click any email to see how death2email turns noise into action
          </p>
        </div>

        {/* Mobile Tab Switcher (visible on lg and below) */}
        <div className="lg:hidden mb-8 flex items-center justify-center">
          <div className="inline-flex bg-zinc-800 rounded-lg p-1 border border-zinc-700">
            {(['traditional', 'death2email'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-4 py-2 rounded font-medium text-sm transition-colors ${
                  viewMode === mode
                    ? 'bg-zinc-700 text-white'
                    : 'text-zinc-400 hover:text-zinc-300'
                }`}
              >
                {mode === 'traditional' ? 'Traditional' : 'death2email'}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop: Side-by-side columns */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8">
          {/* Left Column: Traditional Inbox */}
          <div className="flex flex-col">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col h-full">
              {/* Header */}
              <div className="bg-zinc-800 px-6 py-4 border-b border-zinc-700">
                <h3 className="text-white font-semibold text-lg">Traditional Inbox</h3>
              </div>

              {/* Email List */}
              <div className="flex-1 overflow-y-auto divide-y divide-zinc-800">
                {emails.map((email) => (
                  <div
                    key={email.id}
                    className="px-6 py-4 hover:bg-zinc-800/50 transition-colors border-b border-zinc-800 last:border-b-0"
                  >
                    <div className="text-sm font-medium text-zinc-300 truncate">
                      {email.rawEmail.from.split('@')[0]}
                    </div>
                    <div className="text-sm text-zinc-400 truncate mt-1.5">
                      {email.rawEmail.subject}
                    </div>
                    <div className="text-xs text-zinc-500 mt-2">
                      {formatDate(email.rawEmail.timestamp)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: death2email */}
          <div className="flex flex-col">
            <div className="bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden flex flex-col h-full shadow-2xl shadow-purple-500/10">
              {/* Header with glow */}
              <div className="bg-gradient-to-r from-zinc-800 to-zinc-800 px-6 py-4 border-b border-zinc-700">
                <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                  death2email
                  <span className="inline-block w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                </h3>
              </div>

              {/* Summary Stats Bar */}
              {!expandedEmailId && (
                <div className="mx-4 mt-4 p-4 rounded-lg bg-purple-500/5 border border-purple-500/10">
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-zinc-400">
                      <span className="text-white font-semibold">{emails.length}</span> emails processed
                    </div>
                    <div className="text-zinc-400">
                      <span className="text-purple-400 font-semibold">{actionCount}</span> actions needed
                    </div>
                    <div className="text-zinc-400">
                      <span className="text-zinc-300 font-semibold">{workspaceCount}</span> workspaces
                    </div>
                  </div>
                </div>
              )}

              {/* Email List */}
              <div className="flex-1 overflow-y-auto space-y-3 p-4">
                {emails.map((email) => (
                  <div key={email.id} className="space-y-2">
                    {/* Email Card */}
                    <motion.div
                      onClick={() => toggleExpanded(email.id)}
                      className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4 cursor-pointer hover:border-zinc-600 hover:bg-zinc-800/70 transition-all group"
                    >
                      {/* Header Row */}
                      <div className="flex items-start gap-3">
                        {/* Urgency Dot */}
                        {getUrgencyDot(email.urgency)}

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-white leading-tight">
                            {email.aiSummary.substring(0, 50)}
                            {email.aiSummary.length > 50 ? '...' : ''}
                          </div>

                          {/* Tags Row */}
                          <div className="flex items-center gap-2 mt-3 flex-wrap">
                            <span
                              className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getWorkspaceTagColor(
                                email.workspace
                              )}`}
                            >
                              {email.workspace}
                            </span>
                            {email.mission && (
                              <span className="text-xs text-zinc-400">
                                {email.mission}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Chevron */}
                        <ChevronDown
                          size={18}
                          className={`text-zinc-500 flex-shrink-0 transition-transform ${
                            expandedEmailId === email.id ? 'rotate-180' : ''
                          }`}
                        />
                      </div>

                      {/* Expanded Details */}
                      <AnimatePresence>
                        {expandedEmailId === email.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-4 pt-4 border-t border-zinc-700 space-y-4 overflow-hidden"
                          >
                            {/* Full Summary */}
                            <p className="text-sm text-zinc-300 leading-relaxed">
                              {email.aiSummary}
                            </p>

                            {/* Extracted Data Grid */}
                            {email.extractedData &&
                              Object.keys(email.extractedData).length > 0 && (
                                <div className="bg-zinc-900/50 rounded-lg p-3 space-y-2.5">
                                  {Object.entries(email.extractedData)
                                    .slice(0, 4)
                                    .map(([key, value]) => (
                                      <div
                                        key={key}
                                        className="flex justify-between items-start gap-3"
                                      >
                                        <span className="text-xs text-zinc-500 capitalize">
                                          {key.replace(/([A-Z])/g, ' $1').trim()}
                                        </span>
                                        <span className="text-xs text-zinc-200 font-medium text-right">
                                          {value}
                                        </span>
                                      </div>
                                    ))}
                                </div>
                              )}

                            {/* Raw Email Toggle */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowRawEmail(
                                  showRawEmail === email.id ? null : email.id
                                );
                              }}
                              className="text-xs text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1 transition-colors"
                            >
                              {showRawEmail === email.id ? '⬆' : '⬇'} Open the
                              coffin
                            </button>

                            {/* Raw Email Content */}
                            {showRawEmail === email.id && (
                              <div className="bg-black/40 rounded-lg p-3 font-mono text-xs space-y-2 max-h-32 overflow-y-auto border border-zinc-800">
                                <div>
                                  <span className="text-zinc-500">From:</span>{' '}
                                  <span className="text-zinc-300">
                                    {email.rawEmail.from}
                                  </span>
                                </div>
                                <div>
                                  <span className="text-zinc-500">Subject:</span>{' '}
                                  <span className="text-zinc-300">
                                    {email.rawEmail.subject}
                                  </span>
                                </div>
                                <div>
                                  <span className="text-zinc-500">Body:</span>
                                  <p className="text-zinc-400 mt-1 line-clamp-4">
                                    {email.rawEmail.body}
                                  </p>
                                </div>
                              </div>
                            )}

                            {/* Primary Action Button */}
                            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium py-2.5 rounded-lg transition-colors">
                              {email.action}
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Tab-based view */}
        <div className="lg:hidden">
          <AnimatePresence mode="wait">
            {viewMode === 'traditional' ? (
              <motion.div
                key="traditional-mobile"
                className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden"
              >
                {/* Header */}
                <div className="bg-zinc-800 px-6 py-4 border-b border-zinc-700">
                  <h3 className="text-white font-semibold text-lg">
                    Traditional Inbox
                  </h3>
                </div>

                {/* Email List */}
                <div className="divide-y divide-zinc-800">
                  {emails.map((email) => (
                    <div
                      key={email.id}
                      className="px-6 py-4 hover:bg-zinc-800/50 transition-colors"
                    >
                      <div className="text-sm font-medium text-zinc-300 truncate">
                        {email.rawEmail.from.split('@')[0]}
                      </div>
                      <div className="text-sm text-zinc-400 truncate mt-1.5">
                        {email.rawEmail.subject}
                      </div>
                      <div className="text-xs text-zinc-500 mt-2">
                        {formatDate(email.rawEmail.timestamp)}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="d2e-mobile"
                className="bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-zinc-800 to-zinc-800 px-6 py-4 border-b border-zinc-700">
                  <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                    death2email
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                  </h3>
                </div>

                {/* Email List */}
                <div className="space-y-3 p-4">
                  {emails.map((email) => (
                    <div key={email.id}>
                      <motion.div
                        onClick={() => toggleExpanded(email.id)}
                        className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4 cursor-pointer hover:border-zinc-600 hover:bg-zinc-800/70 transition-all"
                      >
                        {/* Header Row */}
                        <div className="flex items-start gap-3">
                          {getUrgencyDot(email.urgency)}

                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-semibold text-white leading-tight">
                              {email.aiSummary.substring(0, 45)}
                              {email.aiSummary.length > 45 ? '...' : ''}
                            </div>

                            <div className="flex items-center gap-2 mt-3 flex-wrap">
                              <span
                                className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getWorkspaceTagColor(
                                  email.workspace
                                )}`}
                              >
                                {email.workspace}
                              </span>
                            </div>
                          </div>

                          <ChevronDown
                            size={18}
                            className={`text-zinc-500 flex-shrink-0 transition-transform ${
                              expandedEmailId === email.id ? 'rotate-180' : ''
                            }`}
                          />
                        </div>

                        {/* Expanded Details */}
                        <AnimatePresence>
                          {expandedEmailId === email.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="mt-4 pt-4 border-t border-zinc-700 space-y-4 overflow-hidden"
                            >
                              <p className="text-sm text-zinc-300 leading-relaxed">
                                {email.aiSummary}
                              </p>

                              {email.extractedData &&
                                Object.keys(email.extractedData).length > 0 && (
                                  <div className="bg-zinc-900/50 rounded-lg p-3 space-y-2.5">
                                    {Object.entries(email.extractedData)
                                      .slice(0, 3)
                                      .map(([key, value]) => (
                                        <div
                                          key={key}
                                          className="flex justify-between items-start gap-3"
                                        >
                                          <span className="text-xs text-zinc-500 capitalize">
                                            {key
                                              .replace(/([A-Z])/g, ' $1')
                                              .trim()}
                                          </span>
                                          <span className="text-xs text-zinc-200 font-medium text-right">
                                            {value}
                                          </span>
                                        </div>
                                      ))}
                                  </div>
                                )}

                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setShowRawEmail(
                                    showRawEmail === email.id ? null : email.id
                                  );
                                }}
                                className="text-xs text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1"
                              >
                                {showRawEmail === email.id ? '⬆' : '⬇'} Open
                                the coffin
                              </button>

                              {showRawEmail === email.id && (
                                <div className="bg-black/40 rounded-lg p-3 font-mono text-xs space-y-2 max-h-32 overflow-y-auto border border-zinc-800">
                                  <div>
                                    <span className="text-zinc-500">From:</span>{' '}
                                    <span className="text-zinc-300">
                                      {email.rawEmail.from}
                                    </span>
                                  </div>
                                  <div>
                                    <span className="text-zinc-500">Subject:</span>{' '}
                                    <span className="text-zinc-300">
                                      {email.rawEmail.subject}
                                    </span>
                                  </div>
                                  <div>
                                    <span className="text-zinc-500">Body:</span>
                                    <p className="text-zinc-400 mt-1 line-clamp-3">
                                      {email.rawEmail.body}
                                    </p>
                                  </div>
                                </div>
                              )}

                              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium py-2.5 rounded-lg transition-colors">
                                {email.action}
                              </button>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Help Text */}
        <div className="mt-12 text-center">
          <p className="text-sm text-zinc-400 max-w-2xl mx-auto">
            <Zap className="inline-block w-4 h-4 mr-1 text-yellow-500" />
            Click any email to expand and see the full transformation. Use the tabs on mobile to
            switch views.
          </p>
        </div>
      </div>
    </section>
  );
}
