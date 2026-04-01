import Hero from '../components/Hero'
import ProblemStatement from '../components/ProblemStatement'
import InboxDemo from '../components/InboxDemo'
import WorkspacesShowcase from '../components/WorkspacesShowcase'
import AgentLayer from '../components/AgentLayer'
import DesignPrinciples from '../components/DesignPrinciples'
import TechnicalVision from '../components/TechnicalVision'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Hero />

      {/* Editorial interstitial — the thesis */}
      <div className="py-20 md:py-28 px-6 md:px-12 lg:px-16 bg-[#0a0a0a]">
        <p className="max-w-4xl mx-auto text-center font-display italic text-2xl md:text-3xl lg:text-4xl text-zinc-300 leading-relaxed">
          Email is not a communication tool anymore &mdash; it&apos;s an unstructured task queue.
        </p>
      </div>

      <div className="section-divider" />
      <ProblemStatement />
      <div className="section-divider" />

      {/* Editorial interstitial — the possibility */}
      <div className="py-20 md:py-28 px-6 md:px-12 lg:px-16 bg-[#0a0a0a]">
        <p className="max-w-4xl mx-auto text-center font-display italic text-2xl md:text-3xl lg:text-4xl text-zinc-300 leading-relaxed">
          What if your inbox could think?
        </p>
      </div>

      <div className="section-divider" />
      <InboxDemo />
      <div className="section-divider" />
      <WorkspacesShowcase />
      <div className="section-divider" />
      <AgentLayer />
      <div className="section-divider" />
      <DesignPrinciples />
      <div className="section-divider" />
      <TechnicalVision />
      <Footer />
    </main>
  )
}
