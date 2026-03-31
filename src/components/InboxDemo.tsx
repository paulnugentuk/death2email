'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Zap, AlertCircle, CheckCircle, Clock, Code } from 'lucide-react';
import { transformedEmails, rawEmails } from '../data/mock-emails';
import { TransformedEmail } from '../data/types';

type ViewMode = 'traditional' | 'death2email';

export default function InboxDemo() {
  const [viewMode, setViewMode] = useState<ViewMode>('death2email');
  const [selectedEmail, setSelectedEmail] = useState<TransformedEmail | null>(transformedEmails[0]);
  const [expandedEmail, setExpandedEmail] = useState<string | null>(transformedEmails[0].id);
  const [showRawEmail, setShowRawEmail] = useState(false);

  const getUrgencyColor = (urgency: string): string => {
    switch (urgency) {
      case 'critical':
        return 'from-red-500 to-red-600';
      case 'high':
        return 'from-orange-500 to-orange-600';
      case 'medium':
        return 'from-yellow-500 to-yellow-600';
      default:
        return 'from-blue-500 to-blue-600';
    }
  };

  const getUrgencyDot = (urgency: string): React.ReactNode => {
    const dotColor = {
      critical: 'bg-red-500',
      high: 'bg-orange-500',
      medium: 'bg-yellow-500',
      low: 'bg-blue-500',
    }[urgency] || 'bg-blue-500';

    return <div className={`w-3 h-3 rounded-full ${dotColor}`} />;
  };

  const getWorkspaceColor = (workspace: string): string => {
    const colors: Record<string, string> = {
      Travel: 'bg-blue-50 border-blue-200',
      Shopping: 'bg-purple-50 border-purple-200',
      Finance: 'bg-green-50 border-green-200',
      Events: 'bg-pink-50 border-pink-200',
    };
    return colors[workspace] || 'bg-gray-50 border-gray-200';
  };

  const getWorkspaceTagColor = (workspace: string): string => {
    const colors: Record<string, string> = {
      Travel: 'bg-blue-100 text-blue-700',
      Shopping: 'bg-purple-100 text-purple-700',
      Finance: 'bg-green-100 text-green-700',
      Events: 'bg-pink-100 text-pink-700',
    };
    return colors[workspace] || 'bg-gray-100 text-gray-700';
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

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">See the transformation</h2>
          <p className="text-xl text-gray-600">
            Click any email to see how death2email turns noise into action
          </p>
        </div>

        {/* Main Demo Container */}
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          {/* Phone Frame Mockup */}
          <div className="flex-shrink-0">
            <div className="relative w-[375px] h-[680px] bg-black rounded-[48px] shadow-2xl p-3 border-8 border-gray-900">
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20"></div>

              {/* Screen content */}
              <div className="w-full h-full bg-white rounded-[44px] overflow-hidden flex flex-col">
                {/* Header with toggle */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 pt-6 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Inbox</h3>
                    <div className="text-xs text-gray-400">
                      {transformedEmails.length} messages
                    </div>
                  </div>

                  {/* Toggle Tabs */}
                  <div className="bg-gray-700 rounded-full p-1 flex items-center gap-1">
                    {(['traditional', 'death2email'] as const).map((mode) => (
                      <motion.button
                        key={mode}
                        onClick={() => {
                          setViewMode(mode);
                          setSelectedEmail(null);
                          setExpandedEmail(null);
                        }}
                        className={`flex-1 py-2 px-3 rounded-full text-sm font-medium transition-all ${
                          viewMode === mode
                            ? 'bg-white text-gray-900'
                            : 'text-gray-300 hover:text-white'
                        }`}
                        layoutId="toggle"
                      >
                        {mode === 'traditional' ? 'Traditional' : 'death2email'}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Email List */}
                <div className="flex-1 overflow-y-auto">
                  <AnimatePresence mode="wait">
                    {viewMode === 'traditional' ? (
                      <motion.div
                        key="traditional"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="divide-y divide-gray-200"
                      >
                        {transformedEmails.slice(0, 8).map((email) => (
                          <div
                            key={email.id}
                            className="p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                          >
                            <div className="text-sm font-medium text-gray-900 truncate">
                              {email.rawEmail.from.split('@')[0]}
                            </div>
                            <div className="text-sm text-gray-600 truncate mt-1">
                              {email.rawEmail.subject}
                            </div>
                            <div className="text-xs text-gray-400 mt-2">
                              {formatDate(email.rawEmail.timestamp)}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="death2email"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="p-3 space-y-3"
                      >
                        {transformedEmails.slice(0, 8).map((email) => (
                          <motion.div
                            key={email.id}
                            onClick={() => {
                              setSelectedEmail(email);
                              setExpandedEmail(
                                expandedEmail === email.id ? null : email.id
                              );
                            }}
                            className={`rounded-lg p-3 cursor-pointer transition-all border-2 ${getWorkspaceColor(
                              email.workspace
                            )} ${expandedEmail === email.id ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
                            layoutId={`email-${email.id}`}
                          >
                            <div className="flex items-start gap-3">
                              {/* Urgency dot */}
                              <div className="flex-shrink-0 mt-1">
                                {getUrgencyDot(email.urgency)}
                              </div>

                              {/* Content */}
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-semibold text-gray-900">
                                  {email.aiSummary.substring(0, 45)}
                                  {email.aiSummary.length > 45 ? '...' : ''}
                                </div>

                                <div className="flex items-center gap-2 mt-2">
                                  <span
                                    className={`inline-block px-2 py-1 rounded text-xs font-medium ${getWorkspaceTagColor(
                                      email.workspace
                                    )}`}
                                  >
                                    {email.workspace}
                                  </span>
                                </div>
                              </div>

                              {/* CTA indicator */}
                              <div className="flex-shrink-0">
                                <ChevronDown
                                  size={18}
                                  className={`text-gray-400 transition-transform ${
                                    expandedEmail === email.id ? 'rotate-180' : ''
                                  }`}
                                />
                              </div>
                            </div>

                            {/* Expanded detail view */}
                            <AnimatePresence>
                              {expandedEmail === email.id && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="mt-3 pt-3 border-t border-gray-200 space-y-2"
                                >
                                  {/* Full summary */}
                                  <p className="text-sm text-gray-700">
                                    {email.aiSummary}
                                  </p>

                                  {/* Extracted data preview */}
                                  {email.extractedData &&
                                    Object.entries(email.extractedData).slice(0, 2)
                                      .length > 0 && (
                                      <div className="bg-gray-100 rounded p-2 text-xs space-y-1">
                                        {Object.entries(email.extractedData)
                                          .slice(0, 2)
                                          .map(([key, value]) => (
                                            <div key={key} className="text-gray-600">
                                              <span className="font-medium text-gray-700">
                                                {key}:
                                              </span>{' '}
                                              {value}
                                            </div>
                                          ))}
                                      </div>
                                    )}

                                  {/* Raw email toggle */}
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setShowRawEmail(!showRawEmail);
                                    }}
                                    className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                                  >
                                    {showRawEmail ? '⬆' : '⬇'} Open the coffin
                                  </button>

                                  {/* Raw email preview */}
                                  {showRawEmail && (
                                    <div className="bg-gray-900 text-gray-300 rounded p-2 text-xs max-h-24 overflow-y-auto font-mono space-y-1">
                                      <div className="font-semibold text-gray-400">
                                        From: {email.rawEmail.from}
                                      </div>
                                      <div className="font-semibold text-gray-400">
                                        Subject: {email.rawEmail.subject}
                                      </div>
                                      <div className="text-gray-500 line-clamp-3">
                                        {email.rawEmail.body}
                                      </div>
                                    </div>
                                  )}

                                  {/* Primary action button */}
                                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded mt-2 transition-colors">
                                    {email.action}
                                  </button>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          {/* Right side: Key transformation insights */}
          <div className="flex-1 space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertCircle className="text-red-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Noise to Signal</h3>
                  <p className="text-gray-600 text-sm">
                    Raw emails are verbose and hard to scan. death2email extracts the
                    one thing you need to know, instantly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Zap className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Actionable by Design</h3>
                  <p className="text-gray-600 text-sm">
                    Every email has one clear primary action. No hunting through menus
                    or reading fine print.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify justify-center">
                  <CheckCircle className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Structured Data</h3>
                  <p className="text-gray-600 text-sm">
                    Flight numbers, tracking codes, amounts — all extracted and
                    formatted. Use it anywhere, instantly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Code className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Open the Coffin</h3>
                  <p className="text-gray-600 text-sm">
                    Always have access to the original email. death2email is the
                    summary layer, not a replacement.
                  </p>
                </div>
              </div>
            </div>

            {/* Try it section */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mt-8">
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-blue-900">👈 Tap the phone screen</span> to
                switch between views. Click any email to see the full transformation and
                expanded detail panel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
