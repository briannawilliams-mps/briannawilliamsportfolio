import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Download,
  Camera,
  MapPin,
  ScanFace,
  ShoppingBag,
  Sparkles,
  Users,
} from 'lucide-react'

const ambassadorSlides = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7236-cVJ87GrqFUL7NBhyDyG5Y9oxTjl79N.jpg',
    alt: 'Opening slide of the brand strategy and ambassador overview deck, with a dark navy title page and green subtitle.',
    caption: 'Brand strategy & ambassador overview',
    number: '01',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7237-mdVDxCwj48sZleqxniiwPFCz0raFV0.jpg',
    alt: 'Slides comparing the two ambassador audiences, content styles, and campaign concepts for Jordan Ellis and Naomi Reid.',
    caption: 'Audience matrix & campaign concepts',
    number: '02',
  },
]

const certificateUrl = '/omnichannel-marketing-certificate.pdf'
const pitchUrl = '/styleme-b2b-pitch.pdf'

export function OmnichannelCaseStudy() {
  return (
      <section id="omnichannel-marketing" className="page-gradient scroll-mt-8">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6 sm:px-8">
        <Link
          href="/#case-study"
          className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/75 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-card"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Back to portfolio
        </Link>
        <span className="hidden text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground sm:block">
          Brianna Williams · Selected work
        </span>
      </header>

      <section className="mx-auto max-w-6xl px-5 pb-16 pt-8 sm:px-8 sm:pb-24 sm:pt-12">
        <div className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-card/90 shadow-xl shadow-espresso/10">
          <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-2/5 bg-gradient-to-br from-[#D8C2A8]/35 via-[#C99F94]/15 to-transparent lg:block" />
          <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:p-16">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-[#8F7965]/30 bg-[#D8C2A8]/20 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#705b48]">
                <Sparkles aria-hidden="true" className="size-3.5" />
                Forage · Job simulation
              </p>
              <h1 className="mt-6 max-w-3xl text-balance font-serif text-5xl font-medium leading-[0.98] text-foreground sm:text-6xl lg:text-7xl">
                Omnichannel marketing, made tangible.
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
                A practical marketing simulation exploring how connected retail experiences and the right ambassador stories can turn customer insight into a more thoughtful brand journey.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#ambassador-strategy"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-espresso"
                >
                  Explore the work <ArrowRight aria-hidden="true" className="size-4" />
                </a>
                <a
                  href={certificateUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/25 px-5 py-3 text-sm font-medium text-primary transition-colors hover:bg-secondary"
                >
                  View certificate <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              </div>
            </div>

            <aside className="rounded-2xl border border-border bg-[#F7F3E8]/85 p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7965]">Project snapshot</p>
              <dl className="mt-5 flex flex-col gap-4">
                <div className="flex gap-3">
                  <BadgeCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <dt className="font-medium text-foreground">Omnichannel Marketing Job Simulation</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">Forage · October 2026</dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <dt className="font-medium text-foreground">Two connected concepts</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">Ambassador strategy + retail experience</dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Sparkles aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <dt className="font-medium text-foreground">Focus</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">Brand storytelling, digital transformation, and customer insight</dd>
                  </div>
                </div>
              </dl>
              <p className="mt-6 border-t border-border pt-4 text-xs leading-5 text-muted-foreground">
                Coursework and proposed concepts from a job simulation—not a live client campaign or implemented retail technology.
              </p>
            </aside>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['01', 'Integrated marketing plan'],
            ['02', 'Retail guest experience'],
            ['03', 'Local ambassador pitch'],
            ['04', 'Marketing data analysis'],
          ].map(([number, item]) => (
            <div key={number} className="flex items-start gap-3 rounded-2xl border border-primary/10 bg-card/70 p-5">
              <span className="font-serif text-lg italic text-[#8F7965]">{number}</span>
              <p className="pt-0.5 text-sm font-medium leading-5 text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="ambassador-strategy" aria-labelledby="ambassador-heading" className="scroll-mt-8 bg-[#1F2B1D] text-[#F7F3E8]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C99F94]">01 / Ambassador strategy</p>
              <h2 id="ambassador-heading" className="mt-4 text-balance font-serif text-4xl font-medium leading-tight sm:text-5xl">
                People first. Purpose in every partnership.
              </h2>
            </div>
            <div className="max-w-2xl lg:justify-self-end">
              <p className="font-serif text-xl italic leading-relaxed text-[#F7F3E8]/90">
                The deck begins with a simple brand mission: empower people to lead balanced, mindful, and physically rewarding lives.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Inclusivity', 'Mental & physical well-being', 'Community leadership'].map((pillar) => (
                  <span key={pillar} className="rounded-full border border-[#F7F3E8]/20 px-3.5 py-2 text-xs text-[#F7F3E8]/90">{pillar}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-[#F7F3E8]/15 bg-[#F7F3E8]/[0.06] p-7 sm:p-9">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-[#C99F94]/15 px-3 py-1.5 text-xs font-medium text-[#E6C4B9]">Performance · youth sport</span>
                <Users aria-hidden="true" className="size-5 text-[#C99F94]" />
              </div>
              <h3 className="mt-6 font-serif text-3xl text-[#F7F3E8]">Jordan Ellis</h3>
              <p className="mt-2 text-sm leading-6 text-[#F7F3E8]/75">Former collegiate athlete turned high school track coach and creator.</p>
              <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-[#F7F3E8]/15 pt-5">
                <div><dt className="text-xs uppercase tracking-[0.14em] text-[#C99F94]">Audience</dt><dd className="mt-1 text-sm">~28K · ages 18–35</dd></div>
                <div><dt className="text-xs uppercase tracking-[0.14em] text-[#C99F94]">Format</dt><dd className="mt-1 text-sm">Short-form video</dd></div>
              </dl>
              <p className="mt-5 text-sm leading-6 text-[#F7F3E8]/75">Campaign direction: "Progress Over Perfection"—honest training, self-care, and community track clinics.</p>
            </article>

            <article className="rounded-3xl border border-[#F7F3E8]/15 bg-[#F7F3E8]/[0.06] p-7 sm:p-9">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-[#C99F94]/15 px-3 py-1.5 text-xs font-medium text-[#E6C4B9]">Outdoors · mindful adventure</span>
                <Camera aria-hidden="true" className="size-5 text-[#C99F94]" />
              </div>
              <h3 className="mt-6 font-serif text-3xl text-[#F7F3E8]">Naomi Reid</h3>
              <p className="mt-2 text-sm leading-6 text-[#F7F3E8]/75">Outdoor athlete and storyteller connecting adventure with environmental accountability.</p>
              <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-[#F7F3E8]/15 pt-5">
                <div><dt className="text-xs uppercase tracking-[0.14em] text-[#C99F94]">Audience</dt><dd className="mt-1 text-sm">~60K · ages 28–45</dd></div>
                <div><dt className="text-xs uppercase tracking-[0.14em] text-[#C99F94]">Format</dt><dd className="mt-1 text-sm">Long-form video</dd></div>
              </dl>
              <p className="mt-5 text-sm leading-6 text-[#F7F3E8]/75">Campaign direction: "Leave No Trace Trail Run"—eco-conscious gear, low-waste preparation, and responsible trails.</p>
            </article>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {ambassadorSlides.map((slide) => (
              <figure key={slide.number} className="overflow-hidden rounded-2xl border border-[#F7F3E8]/15 bg-[#F7F3E8]/[0.06]">
                <img src={slide.src} alt={slide.alt} className="aspect-[1.48] w-full object-cover object-top" loading="lazy" />
                <figcaption className="flex items-center gap-3 px-5 py-4">
                  <span className="font-serif text-lg italic text-[#C99F94]">{slide.number}</span>
                  <span className="text-sm text-[#F7F3E8]/85">{slide.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-4 text-xs text-[#F7F3E8]/55">Selected pages from the ambassador strategy presentation.</p>
        </div>
      </section>

      <section aria-labelledby="styleme-heading" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8F7965]">02 / B2B retail experience pitch</p>
            <h2 id="styleme-heading" className="mt-4 text-balance font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl">
              STYLEME: make "not in stock" a new way to shop.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground">
              A proposed in-store augmented reality fitting experience that helps retailers serve the sale even when the right size, color, or item is not on the rack.
            </p>
            <a
              href={pitchUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-espresso"
            >
              <Download aria-hidden="true" className="size-4" />
              Read the STYLEME pitch
            </a>
            <p className="mt-3 text-xs text-muted-foreground">Opens the original pitch PDF in a new tab.</p>
          </div>

          <div className="flex flex-col gap-5">
            <article className="rounded-3xl border border-border bg-card/90 p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-full bg-[#D8C2A8]/45 text-primary"><ScanFace aria-hidden="true" className="size-5" /></span>
                <div><p className="text-xs uppercase tracking-[0.2em] text-[#8F7965]">The concept</p><h3 className="mt-1 font-serif text-2xl text-foreground">A fitting room that follows through</h3></div>
              </div>
              <p className="mt-5 text-sm leading-6 text-muted-foreground">STYLEME pairs an AR mirror that lets customers privately preview selected clothing with an associate handheld device for inventory checks and ordering. Home delivery or store pickup completes the journey.</p>
            </article>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: ScanFace, title: 'Select & try on', body: 'An associate helps choose items; the mirror offers a virtual try-on and simple Yes / No choices.' },
                { icon: ShoppingBag, title: 'Notify & order', body: 'The customer calls the associate when ready, reviews preferred items, and selects delivery or pickup.' },
                { icon: Users, title: 'Designed for comfort', body: 'A private fitting area keeps the virtual try-on out of the associate\'s view.' },
                { icon: Sparkles, title: 'Retail opportunity', body: 'A potential way to retain out-of-stock demand, support more sizes, and learn from product preferences.' },
              ].map(({ icon: Icon, title, body }) => (
                <article key={title} className="rounded-2xl border border-primary/10 bg-card/75 p-6">
                  <Icon aria-hidden="true" className="size-5 text-[#8F7965]" />
                  <h3 className="mt-4 font-serif text-xl text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
                </article>
              ))}
            </div>

            <div className="rounded-2xl border border-[#C99F94]/40 bg-[#C99F94]/10 p-5 text-sm leading-6 text-foreground/80">
              <strong className="font-semibold text-foreground">Considerations built into the pitch:</strong> customer consent and body-scan privacy, realistic fit expectations, accessible non-digital alternatives, and reliable technology maintenance.
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="certificate-heading" className="bg-[#D8C2A8]/55">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#705b48]">03 / Certification</p>
            <h2 id="certificate-heading" className="mt-4 text-balance font-serif text-4xl font-medium text-foreground sm:text-5xl">Learning, put into practice.</h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-foreground/75">Completed Forage's Omnichannel Marketing Job Simulation in October 2026, applying marketing strategy across integrated planning, retail guest experience, ambassador pitching, and data analysis.</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {['Integrated marketing plan', 'Retail guest experience', 'Ambassador strategy', 'Data analysis'].map((item) => (
                <span key={item} className="rounded-full border border-primary/15 bg-[#F7F3E8]/70 px-3 py-1.5 text-xs font-medium text-primary">{item}</span>
              ))}
            </div>
            <a href={certificateUrl} download className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-[#F7F3E8]/70 px-5 py-3 text-sm font-medium text-primary transition-colors hover:bg-[#F7F3E8]">
              <Download aria-hidden="true" className="size-4" />
              Download certificate
            </a>
          </div>

          <figure className="overflow-hidden rounded-3xl border border-primary/15 bg-[#F7F3E8] p-3 shadow-xl shadow-espresso/10 sm:p-5">
            <iframe
              src={`${certificateUrl}#toolbar=0&navpanes=0`}
              title="Forage Omnichannel Marketing Job Simulation certificate of completion for Brianna Williams"
              className="h-[440px] w-full rounded-xl border border-primary/10 bg-[#F7F3E8] sm:h-[540px]"
            />
            <figcaption className="flex flex-wrap items-center justify-between gap-3 px-2 pt-4 text-xs text-muted-foreground">
              <span>Forage · Certificate of Completion · October 8, 2026</span>
              <a href={certificateUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-medium text-primary hover:underline">
                Open full certificate <ArrowUpRight aria-hidden="true" className="size-3.5" />
              </a>
            </figcaption>
          </figure>
        </div>
      </section>

      <footer className="bg-[#1F2B1D] px-5 py-10 text-[#F7F3E8] sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-xl">Brianna Williams <span className="text-[#C99F94]">·</span> Omnichannel marketing</p>
          <Link href="/#case-study" className="inline-flex items-center gap-2 text-sm text-[#F7F3E8]/75 transition-colors hover:text-[#F7F3E8]">
            Return to portfolio <ArrowLeft aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </footer>
      </section>
  )
}
