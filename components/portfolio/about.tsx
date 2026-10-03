import { GraduationCap } from 'lucide-react'
import { about } from '@/lib/portfolio'
import { SectionHeading } from './section-heading'

export function About() {
  const { education } = about
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-4xl px-5">
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
            <ul className="space-y-4">
              {education.degrees.map((degree) => (
                <li key={degree.degree}>
                  <h3 className="font-serif text-lg font-medium leading-tight">{degree.degree}</h3>
                  {degree.school && degree.year && (
                    <p className="text-sm text-muted-foreground">
                      {degree.school} &middot; {degree.year}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5 border-t border-border pt-5">
            <h3 className="font-serif text-lg font-medium">PRSSA leadership</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {education.leadership.role}, {education.leadership.organization} · {education.leadership.period}
            </p>
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
