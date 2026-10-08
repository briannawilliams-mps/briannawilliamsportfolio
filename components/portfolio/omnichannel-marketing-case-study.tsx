import Link from 'next/link'
import { SectionHeading } from './section-heading'

const ambassadors = [
  {
    name: 'Jordan Ellis',
    audience: '18–35 · approximately 28K followers',
    focus: 'A former collegiate athlete turned high school track coach and creator, speaking to student-athletes and young professionals.',
    idea: '“Progress Over Perfection” — short-form, motivational storytelling about training, self-care, and community track clinics.',
  },
  {
    name: 'Naomi Reid',
    audience: '28–45 · approximately 60K followers',
    focus: 'An outdoor athlete and storyteller connecting an established audience with mindful adventure and environmental accountability.',
    idea: '“Leave No Trace Trail Run” — a video series on eco-conscious gear, low-waste preparation, and responsible trail running.',
  },
]

const pillars = [
  ['Inclusivity', 'Welcome different backgrounds, bodies, and experience levels in sport and fitness.'],
  ['Mental & physical well-being', 'Champion realistic progress and address mental health alongside physical training.'],
  ['Community leadership', 'Use local action to support equity in youth sports and sustainable habits.'],
]

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8F7965]">
      {children}
    </p>
  )
}

export function OmnichannelMarketingCaseStudy() {
  return (
    <main className="page-gradient min-h-screen px-5 py-8 sm:py-12">
      <div className="mx-auto flex max-w-5xl flex-col gap-12 sm:gap-16">
        <Link
          href="/"
          className="w-fit text-sm text-primary transition-colors hover:text-[#8F7965]"
        >
          ← Back to portfolio
        </Link>

        <header className="overflow-hidden rounded-3xl border border-border bg-card/90 shadow-lg shadow-mocha/10">
          <div className="bg-primary px-6 py-12 text-primary-foreground sm:px-12 sm:py-16">
            <SectionLabel>Marketing strategy · Job simulation</SectionLabel>
            <h1 className="mt-4 max-w-3xl text-balance font-serif text-4xl font-medium leading-tight sm:text-6xl">
              Omnichannel marketing, made personal.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#C99F94]">
              A Forage job simulation in brand strategy, creator partnerships, campaign concepts, and a STYLEME B2B retail pitch.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {['Brand positioning', 'Ambassador strategy', 'Campaign concepts', 'B2B pitch'].map((item) => (
                <span key={item} className="rounded-full border border-primary-foreground/25 px-4 py-2 text-xs text-primary-foreground/90">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-6 px-6 py-7 sm:grid-cols-3 sm:px-12">
            <div>
              <SectionLabel>Project</SectionLabel>
              <p className="mt-2 font-serif text-xl text-foreground">Omnichannel marketing</p>
            </div>
            <div>
              <SectionLabel>Brand concept</SectionLabel>
              <p className="mt-2 font-serif text-xl text-foreground">STYLEME</p>
            </div>
            <div>
              <SectionLabel>Format</SectionLabel>
              <p className="mt-2 font-serif text-xl text-foreground">Forage job simulation</p>
            </div>
          </div>
        </header>

        <section aria-labelledby="strategy-heading">
          <SectionHeading eyebrow="The strategy" title="A brand built around real life" id="strategy-heading" />
          <div className="rounded-3xl border border-border bg-card/90 p-6 shadow-lg shadow-mocha/10 sm:p-10">
            <p className="max-w-3xl font-serif text-xl leading-relaxed text-foreground sm:text-2xl">
              The brand mission was to help people lead balanced, mindful, and physically rewarding lives. The ambassador recommendation translated that mission into distinct voices, communities, and content formats.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {pillars.map(([title, description], index) => (
                <article key={title} className="rounded-2xl border border-border bg-secondary/60 p-5">
                  <p className="font-serif text-2xl text-primary">0{index + 1}</p>
                  <h3 className="mt-3 font-serif text-xl text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="ambassadors-heading">
          <SectionHeading eyebrow="Creator partnership proposal" title="Two voices, one shared purpose" id="ambassadors-heading" />
          <div className="grid gap-5 md:grid-cols-2">
            {ambassadors.map((ambassador) => (
              <article key={ambassador.name} className="rounded-3xl border border-border bg-card/90 p-6 shadow-lg shadow-mocha/10 sm:p-8">
                <SectionLabel>Proposed brand ambassador</SectionLabel>
                <h3 className="mt-3 font-serif text-3xl text-foreground">{ambassador.name}</h3>
                <p className="mt-2 text-sm font-medium text-[#8F7965]">{ambassador.audience}</p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{ambassador.focus}</p>
                <div className="mt-6 rounded-2xl bg-secondary/70 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Campaign concept</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">{ambassador.idea}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
            Ambassador profiles and audience figures are presented as supplied in the simulation materials.
          </p>
        </section>

        <section aria-labelledby="deck-heading">
          <SectionHeading eyebrow="Selected slides" title="The ambassador pitch deck" id="deck-heading" />
          <div className="flex flex-col gap-6">
            <article className="overflow-hidden rounded-3xl border border-border bg-card/90 shadow-lg shadow-mocha/10">
              <div className="border-b border-border px-6 py-5 sm:px-8">
                <SectionLabel>Brand strategy & ambassador overview</SectionLabel>
                <h3 className="mt-2 font-serif text-2xl text-foreground">Mission, pillars, and creator fit</h3>
              </div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7236-cVJ87GrqFUL7NBhyDyG5Y9oxTjl79N.jpg"
                alt="Preview of the ambassador strategy deck: brand strategy and mission, Jordan Ellis profile, audience matrix, content formats, and campaign concepts."
                className="block h-auto w-full"
                loading="lazy"
              />
            </article>
            <article className="overflow-hidden rounded-3xl border border-border bg-card/90 shadow-lg shadow-mocha/10">
              <div className="border-b border-border px-6 py-5 sm:px-8">
                <SectionLabel>Audience & activation</SectionLabel>
                <h3 className="mt-2 font-serif text-2xl text-foreground">A campaign direction for each ambassador</h3>
              </div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7237-mdVDxCwj48sZleqxniiwPFCz0raFV0.jpg"
                alt="Preview of the ambassador deck: audience backgrounds, content styles, and campaign concepts for Jordan Ellis and Naomi Reid."
                className="block h-auto w-full"
                loading="lazy"
              />
            </article>
          </div>
        </section>

        <section aria-labelledby="styleme-heading">
          <SectionHeading eyebrow="B2B retail pitch" title="STYLEME, in the omnichannel mix" id="styleme-heading" />
          <article className="overflow-hidden rounded-3xl border border-border bg-card/90 shadow-lg shadow-mocha/10">
            <div className="grid gap-0 md:grid-cols-[1fr_1.15fr]">
              <div className="flex flex-col justify-center p-6 sm:p-9">
                <SectionLabel>Partner proposal</SectionLabel>
                <h3 className="mt-3 font-serif text-3xl text-foreground">Bring the product story into the store.</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  The STYLEME pitch connects digital discovery with an in-store experience, giving retail partners a clear way to introduce the concept, engage shoppers, and continue the conversation across channels.
                </p>
                <ul className="mt-6 flex flex-col gap-3 text-sm text-foreground">
                  <li className="border-l-2 border-[#8F7965] pl-4">Lead with a concise partner value proposition.</li>
                  <li className="border-l-2 border-[#8F7965] pl-4">Link in-store discovery with digital storytelling.</li>
                  <li className="border-l-2 border-[#8F7965] pl-4">Make the next step clear for a prospective retail partner.</li>
                </ul>
                <a
                  href="/styleme-b2b-pitch.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex w-fit items-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-espresso"
                >
                  Open STYLEME pitch PDF <span className="ml-2" aria-hidden="true">↗</span>
                </a>
              </div>
              <div className="min-h-[420px] border-t border-border bg-secondary/40 md:border-l md:border-t-0">
                <iframe
                  src="/styleme-b2b-pitch.pdf#view=FitH"
                  title="STYLEME B2B retail pitch deck"
                  className="h-[560px] w-full md:h-full md:min-h-[600px]"
                />
              </div>
            </div>
          </article>
        </section>

        <section aria-labelledby="certificate-heading">
          <SectionHeading eyebrow="Learning & development" title="Omnichannel marketing certificate" id="certificate-heading" />
          <article className="overflow-hidden rounded-3xl border border-border bg-card/90 shadow-lg shadow-mocha/10">
            <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <SectionLabel>Forage job simulation</SectionLabel>
                <h3 className="mt-2 font-serif text-2xl text-foreground">Certificate of completion</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  View the certificate alongside the practical campaign strategy and STYLEME B2B pitch developed for the simulation.
                </p>
              </div>
              <a
                href="/omnichannel-marketing-certificate.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit shrink-0 items-center rounded-full border border-primary/30 px-5 py-3 text-sm font-medium text-primary transition-colors hover:bg-secondary"
              >
                View certificate <span className="ml-2" aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="border-t border-border bg-secondary/40 p-3 sm:p-6">
              <iframe
                src="/omnichannel-marketing-certificate.pdf#view=FitH"
                title="Forage omnichannel marketing job simulation certificate"
                className="h-[560px] w-full rounded-2xl bg-card sm:h-[680px]"
              />
            </div>
          </article>
        </section>

        <footer className="border-t border-primary/15 py-6 text-center">
          <Link href="/" className="text-sm font-medium text-primary transition-colors hover:text-[#8F7965]">
            Back to Brianna&apos;s portfolio
          </Link>
        </footer>
      </div>
    </main>
  )
}
