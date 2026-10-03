import { skills } from '@/lib/portfolio'
import { SectionHeading } from './section-heading'

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="mx-auto max-w-3xl px-5">
      <SectionHeading eyebrow="Strengths" title="What I bring" id="skills-title" />
      <ul className="flex flex-wrap justify-center gap-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-espresso/15 bg-card/70 px-5 py-2 text-sm font-medium text-foreground"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
