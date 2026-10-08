import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  Award,
  Download,
  Eye,
  FileText,
  Leaf,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
} from 'lucide-react'
import { forageCaseStudy } from '@/lib/portfolio'

function DocumentCard({
  icon: Icon,
  eyebrow,
  title,
  subtitle,
  file,
  viewLabel,
  downloadLabel,
  children,
}: {
  icon: typeof FileText
  eyebrow: string
  title: string
  subtitle?: string
  file: string
  viewLabel: string
  downloadLabel: string
  children?: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-6 rounded-3xl border border-[#d1c0ab] bg-[#f7f3e8] p-6 sm:p-9">
      <div className="flex items-start gap-4">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#1f2b1d] text-[#f7f3e8]">
          <Icon aria-hidden="true" className="size-6" />
        </span>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8f7965]">{eyebrow}</p>
          <h3 className="mt-1 font-serif text-2xl leading-tight text-[#1f2b1d] sm:text-3xl">{title}</h3>
          {subtitle && <p className="mt-1 text-sm text-[#655b4f]">{subtitle}</p>}
        </div>
      </div>
      {children}
      <div className="flex flex-wrap gap-3 border-t border-[#d1c0ab] pt-6">
        <a
          href={file}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#1f2b1d] px-5 py-3 text-sm font-semibold text-[#f7f3e8] transition-colors hover:bg-[#34432f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f7965] focus-visible:ring-offset-2"
        >
          <Eye aria-hidden="true" className="size-4" />
          {viewLabel}
          <span className="sr-only">(opens PDF in a new tab)</span>
        </a>
        <a
          href={file}
          download
          className="inline-flex items-center gap-2 rounded-full border border-[#1f2b1d]/30 bg-transparent px-5 py-3 text-sm font-semibold text-[#1f2b1d] transition-colors hover:bg-[#ece2d3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f7965] focus-visible:ring-offset-2"
        >
          <Download aria-hidden="true" className="size-4" />
          {downloadLabel}
          <span className="sr-only">(downloads PDF file)</span>
        </a>
      </div>
    </div>
  )
}

export function ForageCaseStudyPage() {
  const { mission, pillars, ambassadors, slides, styleMe, certificate } = forageCaseStudy

  return (
    <main className="min-h-screen bg-[#f7f3e8] text-[#1f2b1d]">
      <header className="border-b border-[#d1c0ab] bg-[#f7f3e8]">
        <nav
          aria-label="Case study navigation"
          className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8"
        >
          <Link href="/#forage" className="font-serif text-2xl italic tracking-tight text-[#1f2b1d] sm:text-3xl">
            Brianna Williams
          </Link>
          <div className="hidden items-center gap-8 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#655b4f] sm:flex">
            <a className="transition-colors hover:text-[#8f7965]" href="#overview">Overview</a>
            <a className="transition-colors hover:text-[#8f7965]" href="#ambassadors">Ambassadors</a>
            <a className="transition-colors hover:text-[#8f7965]" href="#styleme">STYLEME</a>
            <a className="transition-colors hover:text-[#8f7965]" href="#certificate">Certificate</a>
          </div>
          <Link
            href="/#forage"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#655b4f] transition-colors hover:text-[#8f7965]"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            <span className="hidden sm:inline">Portfolio</span>
          </Link>
        </nav>
      </header>

      <section id="overview" className="relative isolate overflow-hidden bg-[#1f2b1d] scroll-mt-6">
        <div className="mx-auto grid min-h-[480px] max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-[1.1fr_.9fr]">
          <div className="max-w-2xl text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c99f94]">
              Forage Job Simulation &middot; Omnichannel Marketing
            </p>
            <h1 className="mt-5 text-balance font-serif text-5xl leading-[0.95] tracking-[-0.03em] sm:text-6xl md:text-7xl">
              Ambassador Strategy
              <span className="mt-1 block italic text-[#f7f3e8]">&amp; B2B Retail Innovation</span>
            </h1>
            <div className="mt-7 h-1 w-20 rounded-full bg-[#8f7965]" />
            <p className="mt-6 max-w-xl text-pretty text-sm leading-relaxed text-white/85 sm:text-base">
              A self-directed Forage job simulation covering three practical marketing tasks: building a
              brand strategy and ambassador plan, pitching an in-store augmented reality concept
              (STYLEME) to a B2B retail audience, and completing a certified program of work.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {forageCaseStudy.deliverables.map((tag) => (
                <span key={tag} className="rounded-full bg-[#ece2d3] px-4 py-2 text-xs font-semibold text-[#1f2b1d]">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="#ambassadors"
              className="mt-9 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Explore the strategy <ArrowDown aria-hidden="true" className="size-4" />
            </a>
          </div>
          <div className="relative mx-auto aspect-[3/5] w-full max-w-xs overflow-hidden rounded-2xl border border-white/10 shadow-2xl sm:max-w-sm">
            <Image
              src={forageCaseStudy.image || '/placeholder.svg'}
              alt={forageCaseStudy.imageAlt}
              fill
              priority
              sizes="(min-width: 768px) 380px, 80vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      <section
        aria-label="Simulation disclosure"
        className="border-b border-[#d1c0ab] bg-[#ece2d3] px-5 py-5 text-center sm:px-8"
      >
        <p className="mx-auto flex max-w-3xl flex-col items-center gap-2 text-xs leading-relaxed text-[#655b4f] sm:flex-row sm:justify-center sm:gap-2 sm:text-sm">
          <ShieldCheck aria-hidden="true" className="size-4 shrink-0 text-[#8f7965]" />
          This work was completed independently as a Forage virtual job simulation for practice and
          skill-building. It is a strategic concept exercise, not a campaign commissioned or executed
          by a real employer, and no results below reflect live performance.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8f7965]">01 / Brand strategy framework</p>
        <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
          Core mission: {mission}
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {pillars.map((pillar, index) => (
            <div key={pillar.title} className="rounded-2xl border border-[#d1c0ab] bg-[#f7f3e8] p-6 sm:p-7">
              <span className="flex size-10 items-center justify-center rounded-full bg-[#8f7965] text-sm font-bold text-white">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 font-serif text-xl font-medium leading-tight">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#655b4f]">{pillar.body}</p>
            </div>
          ))}
        </div>

        <figure className="mt-10 overflow-hidden rounded-3xl border border-[#d1c0ab] bg-white">
          <div className="relative aspect-[1170/1959] w-full sm:aspect-[21/9]">
            <Image
              src={slides[0].src || '/placeholder.svg'}
              alt={slides[0].alt}
              fill
              sizes="(min-width: 768px) 1000px, 100vw"
              className="object-contain object-top sm:object-cover sm:object-top"
            />
          </div>
          <figcaption className="border-t border-[#d1c0ab] bg-[#ece2d3] px-6 py-4 text-xs leading-relaxed text-[#655b4f] sm:text-sm">
            Deck exhibit: {slides[0].caption}
          </figcaption>
        </figure>
      </section>

      <section id="ambassadors" className="scroll-mt-6 bg-[#ece2d3] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8f7965]">02 / Ambassador strategy</p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
            Two creators, one shared mission.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#655b4f] sm:text-base">
            Profiles developed to pair high-energy, youth-focused content with immersive, sustainability-minded
            storytelling &mdash; reaching distinct but complementary audience segments.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {ambassadors.map((ambassador) => (
              <article key={ambassador.name} className="flex flex-col gap-5 rounded-3xl border border-[#d1c0ab] bg-[#f7f3e8] p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#1f2b1d] text-[#f7f3e8]">
                    {ambassador.name.includes('Reid') ? (
                      <Leaf aria-hidden="true" className="size-6" />
                    ) : (
                      <Users aria-hidden="true" className="size-6" />
                    )}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl leading-tight sm:text-3xl">{ambassador.name}</h3>
                    <p className="mt-1 text-sm text-[#655b4f]">{ambassador.role}</p>
                  </div>
                </div>

                <dl className="grid grid-cols-2 gap-4 border-y border-[#d1c0ab] py-5 text-sm">
                  <div>
                    <dt className="text-xs uppercase tracking-[0.14em] text-[#8f7965]">Audience</dt>
                    <dd className="mt-1 font-semibold text-[#1f2b1d]">{ambassador.audience}</dd>
                    <dd className="text-xs text-[#655b4f]">{ambassador.audienceDetail}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.14em] text-[#8f7965]">Primary ages</dt>
                    <dd className="mt-1 font-semibold text-[#1f2b1d]">{ambassador.ageRange.replace('Primary audience ages ', '')}</dd>
                  </div>
                </dl>

                <p className="text-sm leading-6 text-[#655b4f]">{ambassador.details}</p>
                <p className="text-sm leading-6 text-[#655b4f]">
                  <span className="font-semibold text-[#1f2b1d]">Brand alignment: </span>
                  {ambassador.alignment}
                </p>

                <div className="mt-auto rounded-2xl bg-[#1f2b1d] p-5 text-white sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#c99f94]">Content concept</p>
                  <p className="mt-2 font-serif text-xl italic leading-snug">{ambassador.contentIdea.title}</p>
                  <p className="mt-2 text-sm leading-6 text-white/80">{ambassador.contentIdea.body}</p>
                </div>
              </article>
            ))}
          </div>

          <figure className="mt-10 overflow-hidden rounded-3xl border border-[#d1c0ab] bg-white">
            <div className="relative aspect-[1170/1855] w-full sm:aspect-[21/9]">
              <Image
                src={slides[1].src || '/placeholder.svg'}
                alt={slides[1].alt}
                fill
                sizes="(min-width: 768px) 1000px, 100vw"
                className="object-contain object-top sm:object-cover sm:object-top"
              />
            </div>
            <figcaption className="border-t border-[#d1c0ab] bg-[#f7f3e8] px-6 py-4 text-xs leading-relaxed text-[#655b4f] sm:text-sm">
              Deck exhibit: {slides[1].caption}
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="styleme" className="scroll-mt-6 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.95fr_1.05fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8f7965]">03 / B2B retail pitch</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
              {styleMe.name} &mdash; <span className="italic">&ldquo;{styleMe.tagline}&rdquo;</span>
            </h2>
            <p className="mt-6 text-sm leading-7 text-[#655b4f] sm:text-base">{styleMe.summary}</p>

            <div className="mt-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#8f7965]">How it works</h3>
              <ol className="mt-4 flex flex-col gap-3">
                {styleMe.howItWorks.map((step, index) => (
                  <li key={step} className="flex gap-3 text-sm leading-6 text-[#655b4f]">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#8f7965] text-[0.65rem] font-bold text-white">
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-[#d1c0ab] bg-[#ece2d3] p-6 sm:p-8">
              <div className="flex items-center gap-3 text-[#8f7965]">
                <Smartphone aria-hidden="true" className="size-5" />
                <p className="text-xs font-bold uppercase tracking-[0.18em]">Value to the business</p>
              </div>
              <ul className="mt-5 flex flex-col gap-3">
                {styleMe.valueToBusiness.map((value) => (
                  <li key={value} className="flex gap-3 text-sm leading-6 text-[#655b4f]">
                    <Sparkles aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#8f7965]" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>

            <DocumentCard
              icon={FileText}
              eyebrow="Pitch deck · PDF"
              title="STYLEME B2B Pitch"
              subtitle="Full written pitch, including challenge, value proposition, and key features"
              file={styleMe.file}
              viewLabel="View pitch"
              downloadLabel="Download PDF"
            />
          </div>
        </div>
      </section>

      <section id="certificate" className="scroll-mt-6 bg-[#1f2b1d] px-5 py-16 text-white sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c99f94]">04 / Verified completion</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
              Certificate of Completion
            </h2>
            <p className="mt-6 text-sm leading-7 text-white/80 sm:text-base">
              Issued by Forage on {certificate.date} for completing practical tasks across an integrated
              marketing plan, digital retail transformation, ambassador strategy, and data analysis.
            </p>
            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-white/10 p-4">
              <Award aria-hidden="true" className="size-6 shrink-0 text-[#c99f94]" />
              <p className="text-sm text-white/85">
                Signed by <span className="font-semibold text-white">{certificate.signer}</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-3xl bg-white/[0.07] p-6 sm:p-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#c99f94]">Tasks completed</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {certificate.tasks.map((task) => (
                  <li key={task} className="flex gap-3 text-sm leading-6 text-white/85">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-[#c99f94]" />
                    {task}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/[0.04] p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#f7f3e8] text-[#1f2b1d]">
                  <FileText aria-hidden="true" className="size-6" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c99f94]">Certificate · PDF</p>
                  <h3 className="mt-1 font-serif text-2xl leading-tight sm:text-3xl">{certificate.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{certificate.subtitle}</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 border-t border-white/15 pt-6">
                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#f7f3e8] px-5 py-3 text-sm font-semibold text-[#1f2b1d] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c99f94] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f2b1d]"
                >
                  <Eye aria-hidden="true" className="size-4" />
                  View certificate
                  <span className="sr-only">(opens PDF in a new tab)</span>
                </a>
                <a
                  href={certificate.file}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c99f94] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f2b1d]"
                >
                  <Download aria-hidden="true" className="size-4" />
                  Download PDF
                  <span className="sr-only">(downloads PDF file)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8f7965]">The takeaway</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
            Strategy practice across the full funnel.
          </h2>
          <p className="mt-6 text-sm leading-7 text-[#655b4f] sm:text-base">
            From ambassador selection to in-store technology pitches, this simulation gave me hands-on
            practice connecting brand mission to audience strategy, translating a customer pain point
            into a B2B retail concept, and communicating both clearly in writing.
          </p>
          <Link
            href="/#forage"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#1f2b1d] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#8f7965] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f7965] focus-visible:ring-offset-2"
          >
            Back to portfolio
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </section>

      <footer className="bg-[#172016] px-5 py-6 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="font-serif text-xl italic">Brianna Williams</p>
          <p className="text-[0.62rem] font-medium uppercase tracking-[0.19em] text-white/60">Marketing · Communications · Creative strategy</p>
          <a href="/#contact" className="font-serif text-lg italic text-[#c99f94]">Let&apos;s build what&apos;s next</a>
        </div>
      </footer>
    </main>
  )
}
