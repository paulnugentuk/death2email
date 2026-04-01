'use client';

import { CheckCircle, Circle, Cpu, Users } from 'lucide-react';

export default function TechnicalVision() {
  return (
    <section id="technical" className="py-28 md:py-36 px-6 md:px-8 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical approach
          </h2>
          <p className="text-base text-zinc-500 max-w-xl">
            A two-phase roadmap from solid foundations to intelligent automation.
          </p>
        </div>

        {/* Phases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
          {/* Phase 1 — solid */}
          <div className="rounded-xl border-2 border-green-500/15 bg-zinc-900/20 p-7 card-lift hover:border-green-500/25">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[10px] font-medium text-green-400/70 uppercase tracking-widest">Phase 1</span>
              <span className="text-[10px] text-zinc-700">Foundation</span>
            </div>
            <div className="space-y-3.5">
              {['Email ingestion', 'LLM summaries', 'Workspace grouping', 'Manual agents'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500/60 flex-shrink-0" />
                  <span className="text-sm text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Phase 2 — upcoming */}
          <div className="rounded-xl border-2 border-dashed border-zinc-700/50 bg-zinc-900/20 p-7 card-lift hover:border-zinc-600/50">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[10px] font-medium text-zinc-500 uppercase tracking-widest">Phase 2</span>
              <span className="text-[10px] text-zinc-700">Intelligence</span>
            </div>
            <div className="space-y-3.5">
              {['Structured extraction', 'Identity layer', 'Automated execution', 'Real-time updates'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <Circle className="w-4 h-4 text-zinc-600 flex-shrink-0" />
                  <span className="text-sm text-zinc-400">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Now */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-8">Why now</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-xl border border-zinc-800/50 bg-zinc-900/20 p-6 card-lift hover:border-zinc-700/50">
              <div className="mb-4 inline-flex p-2.5 rounded-lg bg-blue-500/8 border border-blue-500/10">
                <Cpu className="w-4 h-4 text-blue-400" />
              </div>
              <h4 className="text-white font-semibold text-sm mb-2">AI capability shift</h4>
              <p className="text-zinc-500 text-xs leading-relaxed font-light">
                LLMs can now reliably extract structured data from unstructured emails. Vision models can parse attachments. The foundation for email intelligence wasn&apos;t possible 18 months ago.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800/50 bg-zinc-900/20 p-6 card-lift hover:border-zinc-700/50">
              <div className="mb-4 inline-flex p-2.5 rounded-lg bg-amber-500/8 border border-amber-500/10">
                <Users className="w-4 h-4 text-amber-400" />
              </div>
              <h4 className="text-white font-semibold text-sm mb-2">Behaviour shift</h4>
              <p className="text-zinc-500 text-xs leading-relaxed font-light">
                Users expect tools to take action, not just inform. Email remains the inbox of record for transactional data. A system that extracts, organises, and acts is where work happens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
