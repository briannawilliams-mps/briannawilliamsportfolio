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
            <h3 className="font-serif text-2xl font-medium">{job.role}</h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {job.summary}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}
