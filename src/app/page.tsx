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
      <ProblemStatement />
      <InboxDemo />
      <WorkspacesShowcase />
      <AgentLayer />
      <DesignPrinciples />
      <TechnicalVision />
      <Footer />
    </main>
  )
}
