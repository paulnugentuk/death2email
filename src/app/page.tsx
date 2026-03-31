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
      <div className="border-t border-zinc-800/30" />
      <ProblemStatement />
      <div className="border-t border-zinc-800/30" />
      <InboxDemo />
      <div className="border-t border-zinc-800/30" />
      <WorkspacesShowcase />
      <div className="border-t border-zinc-800/30" />
      <AgentLayer />
      <div className="border-t border-zinc-800/30" />
      <DesignPrinciples />
      <div className="border-t border-zinc-800/30" />
      <TechnicalVision />
      <div className="border-t border-zinc-800/30" />
      <Footer />
    </main>
  )
}
