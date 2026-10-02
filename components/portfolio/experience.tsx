import { experience } from '@/lib/portfolio'
import { SectionHeading } from './section-heading'

export function Experience() {
  return (
    <section aria-labelledby="experience-title" className="mx-auto max-w-4xl px-5">
      <SectionHeading eyebrow="Experience" title="Hospitality sales" id="experience-title" />
      <ol className="flex flex-col gap-6">
        {experience.map((job) => (
          <li
            key={job.role}
            className="rounded-2xl border border-border bg-card/80 p-6 sm:p-8"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-serif text-2xl font-medium">{job.role}</h3>
              <p className="text-sm font-medium text-primary">{job.period}</p>
            </div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground">{job.company}</p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {job.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-tan" />
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
