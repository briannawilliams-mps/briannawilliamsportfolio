import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { forageCaseStudy } from '@/lib/portfolio'
import { SectionHeading } from './section-heading'

export function ForageCaseStudy() {
  return (
    <section
      id="forage"
      aria-labelledby="forage-title"
      className="mx-auto max-w-5xl scroll-mt-8 px-5"
    >
      <SectionHeading eyebrow={forageCaseStudy.label} title={forageCaseStudy.client} id="forage-title" />
      <article className="overflow-hidden rounded-3xl border border-border bg-card/90 shadow-lg shadow-mocha/10">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden bg-black md:aspect-auto">
            <Image
              src={forageCaseStudy.image || '/placeholder.svg'}
              alt={forageCaseStudy.imageAlt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-top"
            />
          </div>
          <div className="flex flex-col items-start gap-6 p-6 sm:p-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                {forageCaseStudy.program} &middot; {forageCaseStudy.completionDate}
              </p>
              <p className="mt-2 text-pretty font-serif text-xl italic leading-relaxed text-foreground">
                {forageCaseStudy.summary}
              </p>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Includes an ambassador marketing strategy, a B2B augmented-reality retail pitch called
              STYLEME, and a Forage certificate of completion &mdash; concepts developed through a
              self-directed simulation, not a client engagement.
            </p>
            <Link
              href="/case-studies/forage"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-espresso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Explore the simulation
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
        <div className="border-t border-border bg-secondary/60 px-6 py-5 sm:px-10">
          <ul className="flex flex-wrap items-center gap-2" aria-label="Simulation highlights">
            {forageCaseStudy.deliverables.map((item) => (
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
