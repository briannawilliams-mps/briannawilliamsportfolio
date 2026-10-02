import { Hero } from '@/components/portfolio/hero'
import { About } from '@/components/portfolio/about'
import { Experience } from '@/components/portfolio/experience'
import { CaseStudy } from '@/components/portfolio/case-study'
import { Skills } from '@/components/portfolio/skills'
import { Contact } from '@/components/portfolio/contact'

export default function Page() {
  return (
    <main className="page-gradient min-h-screen">
      <Hero />
      <div className="flex flex-col gap-24 pt-24">
        <About />
        <Experience />
        <CaseStudy />
        <Skills />
        <Contact />
      </div>
    </main>
  )
}
