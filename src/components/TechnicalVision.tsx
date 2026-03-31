'use client';

import { CheckCircle } from 'lucide-react';

export default function TechnicalVision() {
  return (
    <section className="py-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical approach
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl">
            A two-phase roadmap that builds from solid foundations to intelligent automation.
          </p>
        </div>

        {/* Two-Phase Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Phase 1: Foundation */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 hover:border-zinc-700 transition-colors">
            <h3 className="text-white font-semibold text-xl mb-6">
              Phase 1: Foundation
            </h3>
            <div className="space-y-4">
              {[
                'Email ingestion',
                'LLM summaries',
                'Workspace grouping',
                'Manual agents',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Phase 2: Intelligence */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 hover:border-zinc-700 transition-colors">
            <h3 className="text-white font-semibold text-xl mb-6">
              Phase 2: Intelligence
            </h3>
            <div className="space-y-4">
              {[
                'Structured extraction',
                'Identity layer',
                'Automated execution',
                'Real-time updates',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border border-zinc-600 flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-zinc-600" />
                  </div>
                  <span className="text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Now Section */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-8">
            Why now
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AI Capability Shift */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 hover:border-zinc-700 transition-colors">
              <h4 className="text-white font-semibold text-base mb-3">
                AI capability shift
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                LLMs can now reliably extract structured data from unstructured emails. Vision models can parse attachments. The foundation for email intelligence that wasn't possible 18 months ago is here.
              </p>
            </div>

            {/* Behaviour Shift */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 hover:border-zinc-700 transition-colors">
              <h4 className="text-white font-semibold text-base mb-3">
                Behaviour shift
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Users expect tools to take action, not just inform. Email remains the inbox of record for transactional information. A system that extracts, organizes, and acts on email is where work happens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
