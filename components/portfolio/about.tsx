import { GraduationCap } from 'lucide-react'
import { about } from '@/lib/portfolio'
import { SectionHeading } from './section-heading'

export function About() {
  const { education } = about
  return (
    <section aria-labelledby="about-title" className="mx-auto max-w-4xl px-5">
      <SectionHeading eyebrow="About" title="A communicator at heart" id="about-title" />
      <div className="grid gap-6 md:grid-cols-5">
        <p className="text-pretty text-lg leading-relaxed text-muted-foreground md:col-span-3">
          {about.intro}
        </p>
        <div className="rounded-2xl border border-border bg-card/80 p-6 md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-primary">
              <GraduationCap className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-serif text-xl font-medium leading-tight">{education.degree}</h3>
              {(education.school || education.year) && (
                <p className="text-sm text-muted-foreground">
                  {[education.school, education.year].filter(Boolean).join(' · ')}
                </p>
              )}
            </div>
          </div>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Areas of focus">
            {education.focus.map((item) => (
              <li
                key={item}
                className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
