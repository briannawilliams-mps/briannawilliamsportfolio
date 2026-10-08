import Image from 'next/image'
import { caseStudy } from '@/lib/portfolio'
import { SectionHeading } from './section-heading'

export function CaseStudy() {
  return (
    <section
      id="case-study"
      aria-labelledby="case-study-title"
      className="mx-auto max-w-5xl scroll-mt-8 px-5"
    >
      <SectionHeading eyebrow={caseStudy.label} title={caseStudy.client} id="case-study-title" />
      <article className="overflow-hidden rounded-3xl border border-border bg-card/90 shadow-lg shadow-mocha/10">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-[4/3] md:aspect-auto">
            <Image
              src={caseStudy.image || '/placeholder.svg'}
              alt={caseStudy.imageAlt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-6 p-6 sm:p-10">
            <p className="text-pretty font-serif text-xl italic leading-relaxed text-foreground">
              {caseStudy.summary}
            </p>
            <dl className="flex flex-col gap-5">
              {caseStudy.sections.map((section) => (
                <div key={section.heading} className="border-l-2 border-tan pl-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    {section.heading}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {section.body}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="border-t border-border bg-secondary/60 px-6 py-5 sm:px-10">
          <h3 className="sr-only">Deliverables</h3>
          <ul className="flex flex-wrap items-center gap-2" aria-label="Deliverables">
            {caseStudy.deliverables.map((item) => (
              <li
                key={item}
                className="rounded-full border border-primary/20 bg-card px-4 py-1.5 text-xs font-medium text-primary"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </article>
      <div className="mt-6 text-center">
        <a
          href="/case-studies/omnichannel-marketing"
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/80 px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-secondary"
        >
          Explore my omnichannel marketing case study <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  )
}
