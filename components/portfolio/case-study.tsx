import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
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
              src={caseStudy.image}
              alt={caseStudy.imageAlt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-start gap-6 p-6 sm:p-10">
            <p className="text-pretty font-serif text-xl italic leading-relaxed text-foreground">
              {caseStudy.summary}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {caseStudy.sections[0].body}
            </p>
            <Link
              href="/case-studies/covara"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-espresso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Explore the case study
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
        <div className="border-t border-border bg-secondary/60 px-6 py-5 sm:px-10">
          <ul className="flex flex-wrap items-center gap-2" aria-label="Campaign highlights">
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
    </section>
  )
}
