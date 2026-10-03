import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowLeft, ArrowUpRight, Heart } from 'lucide-react'

const campaignImage =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4034ADD5-1B28-4330-880C-AA74DB854037-uelA5PvqXalFJ4qKU2PtlG5JySSLs7.jpg'
const manicureImage =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/214A5DCA-F43B-43EB-8DF6-65FE7EE26B6D.JPG-bxPXtqYk80vZU9y42krgpr3Sc0dQUM.jpeg'
const nailArtImage =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7054-uJKyT8kf579YfAnR1c5kcsWz7rebvv.jpg'

const results = [
  { value: '70K', label: 'Post views' },
  { value: '57.2K', label: 'Total viewers' },
  { value: '144', label: 'New followers' },
  { value: '95%', label: 'New viewers' },
  { value: '100%', label: 'Non-followers' },
]

const gender = [
  { label: 'Female', value: 86 },
  { label: 'Male', value: 12 },
  { label: 'Other', value: 2 },
]

const age = [
  { label: '18–24', value: 55 },
  { label: '25–34', value: 26 },
  { label: '35–44', value: 14 },
  { label: '45–54', value: 4 },
  { label: '55+', value: 1 },
]

const locations = [
  { label: 'United States', value: 90 },
  { label: 'Canada', value: 5.2 },
  { label: 'Australia', value: 0.9 },
  { label: 'Mexico', value: 0.5 },
  { label: 'Other', value: 3.4 },
]

const optimizations = [
  'Lead with the strongest product visual on slide one.',
  'Create a stronger curiosity hook on slide two.',
  'Shorten the carousel and remove unnecessary slides.',
  'Introduce the product and value proposition earlier.',
  'Test shorter carousel formats against short-form video.',
]

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-[#d1c0ab] bg-[#f7f3e8]/90 p-5 sm:p-6">
      <p className="font-serif text-4xl leading-none text-[#1f2b1d] sm:text-5xl">{value}</p>
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#655b4f]">{label}</p>
    </div>
  )
}

function AudienceBars({
  title,
  rows,
  max = 100,
}: {
  title: string
  rows: { label: string; value: number }[]
  max?: number
}) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#655b4f]">{title}</h3>
      <ul className="flex flex-col gap-4">
        {rows.map(({ label, value }) => (
          <li key={label}>
            <div className="mb-1.5 flex items-baseline justify-between gap-3 text-sm">
              <span className="text-[#655b4f]">{label}</span>
              <span className="font-semibold tabular-nums text-[#655b4f]">{value}%</span>
            </div>
            <div
              className="h-2 overflow-hidden rounded-full bg-[#ece2d3]"
              role="img"
              aria-label={`${label}: ${value}%`}
            >
              <div
                className="h-full rounded-full bg-[#8f7965]"
                style={{ width: `${Math.max((value / max) * 100, value > 0 ? 2 : 0)}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function CovaraCaseStudy() {
  return (
    <main className="min-h-screen bg-[#f7f3e8] text-[#1f2b1d]">
      <header className="border-b border-[#d1c0ab] bg-[#f7f3e8]">
        <nav
          aria-label="Case study navigation"
          className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8"
        >
          <Link
            href="/#case-study"
            className="font-serif text-2xl italic tracking-tight text-[#1f2b1d] sm:text-3xl"
          >
            Brianna Williams
          </Link>
          <div className="hidden items-center gap-8 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#655b4f] sm:flex">
            <a className="transition-colors hover:text-[#8f7965]" href="#overview">Overview</a>
            <a className="transition-colors hover:text-[#8f7965]" href="#results">Results</a>
            <a className="transition-colors hover:text-[#8f7965]" href="#insights">Insights</a>
          </div>
          <Link
            href="/#case-study"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#655b4f] transition-colors hover:text-[#8f7965]"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            <span className="hidden sm:inline">Portfolio</span>
          </Link>
        </nav>
      </header>

      <section id="overview" className="relative isolate overflow-hidden bg-[#1f2b1d]">
        <div className="absolute inset-0 -z-10">
          <Image
            src={campaignImage}
            alt="An assortment of colorful nail tools and affordable nail-care essentials arranged in a work organizer"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1f2b1d]/90 via-[#1f2b1d]/60 to-[#1f2b1d]/10" />
        </div>
        <div className="mx-auto grid min-h-[520px] max-w-7xl items-end gap-10 px-5 pb-12 pt-20 sm:px-8 sm:pb-16 md:min-h-[590px] md:grid-cols-[1.1fr_.9fr] md:items-center md:py-20">
          <div className="max-w-2xl text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c99f94]">Case study · TikTok</p>
            <h1 className="mt-5 font-serif text-6xl leading-[0.9] tracking-[-0.045em] sm:text-7xl md:text-8xl">
              Covara
              <span className="mt-1 block italic text-[#f7f3e8]">Beauty</span>
            </h1>
            <div className="mt-7 h-1 w-20 rounded-full bg-[#8f7965]" />
            <p className="mt-6 max-w-xl text-sm font-medium uppercase leading-relaxed tracking-[0.12em] text-white/90 sm:text-base">
              Turning affordable nail-care recommendations into a discovery-first TikTok campaign for Covara Beauty.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {['Social media strategy', 'Content marketing', 'TikTok'].map((tag) => (
                <span key={tag} className="rounded-full bg-[#ece2d3] px-4 py-2 text-xs font-semibold text-[#1f2b1d]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <p className="text-right font-serif text-5xl italic leading-none text-white/90 lg:text-6xl">
              Covara
              <span className="mt-2 block font-sans text-sm not-italic uppercase tracking-[0.48em] text-[#c99f94]">Beauty</span>
              <Heart aria-hidden="true" className="ml-auto mt-5 size-8 text-[#c99f94]" />
            </p>
          </div>
          <a
            href="#challenge"
            className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/80 md:flex"
          >
            Explore the story
            <ArrowDown aria-hidden="true" className="size-4" />
          </a>
        </div>
      </section>

      <section id="challenge" className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-[.85fr_1.15fr] md:gap-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8f7965]">01 / The challenge</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Make useful beauty content feel like a recommendation.</h2>
          <p className="mt-6 text-sm leading-7 text-[#655b4f] sm:text-base">
            Covara Beauty needed to reach potential consumers beyond its existing audience. Rather than lead with a traditional product advertisement, the campaign used a “cheap items I recommend” format to share affordable, practical nail-care picks.
          </p>
          <p className="mt-4 text-sm leading-7 text-[#655b4f] sm:text-base">
            The idea was to meet people where they already discover beauty: TikTok—and make the content feel accessible, relatable, and genuinely useful.
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-[#d1c0ab] pt-6 text-sm">
            <div><dt className="text-xs uppercase tracking-[0.14em] text-[#655b4f]">Role</dt><dd className="mt-2 font-medium">Social media marketing & content strategy</dd></div>
            <div><dt className="text-xs uppercase tracking-[0.14em] text-[#655b4f]">Platform</dt><dd className="mt-2 font-medium">TikTok</dd></div>
          </dl>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          <figure className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-2xl sm:rounded-3xl">
            <Image src={manicureImage} alt="A finished pink manicure shown in a beauty creator’s workspace" fill sizes="(min-width: 768px) 60vw, 100vw" className="object-cover object-center" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-5 pb-4 pt-14 text-xs font-medium text-white">Beauty content grounded in real tools, real work, and real recommendations.</figcaption>
          </figure>
          <figure className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:rounded-3xl">
            <Image src={nailArtImage} alt="A collection of colorful handmade press-on nail designs arranged in a display case" fill sizes="(min-width: 768px) 30vw, 50vw" className="object-cover" />
          </figure>
          <div className="flex flex-col justify-center rounded-2xl bg-[#ece2d3] p-5 sm:rounded-3xl sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8f7965]">The creative idea</p>
            <p className="mt-4 font-serif text-2xl italic leading-snug sm:text-3xl">“Cheap items I recommend from the dollar store that I use on my nails.”</p>
            <p className="mt-4 text-sm leading-6 text-[#655b4f]">A specific, value-first hook made affordable nail essentials the starting point for discovery.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#ece2d3] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8f7965]">02 / The strategy</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Value first. Relatable always. Built for discovery.</h2>
            <p className="mt-6 text-sm leading-7 text-[#655b4f] sm:text-base">
              Through research into effective TikTok content, I identified carousel posts as a strong format for sharing useful information. I developed an educational carousel with practical tips for aspiring nail technicians and people who enjoy doing their own nails.
            </p>
          </div>
          <ol className="flex flex-col gap-6">
            {[
              ['01', 'Publish something useful', 'Give viewers an affordable, practical reason to stop and explore.'],
              ['02', 'Make it feel native', 'Use a casual recommendation style that belongs in the TikTok feed.'],
              ['03', 'Expand the audience', 'Prioritize non-followers and new viewers to introduce Covara to future customers.'],
            ].map(([number, title, text]) => (
              <li key={number} className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#8f7965] text-sm font-bold text-white">{number}</span>
                <div><h3 className="font-semibold text-[#1f2b1d]">{title}</h3><p className="mt-1 text-sm leading-6 text-[#655b4f]">{text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="results" className="mx-auto max-w-7xl scroll-mt-8 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8f7965]">03 / The results</p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">A new audience found the content.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#655b4f]">The campaign reached far beyond the existing follower base, showing the discovery potential of value-led beauty content.</p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {results.map((metric) => <MetricCard key={metric.label} {...metric} />)}
        </div>
        <div className="mt-8 grid gap-8 rounded-3xl border border-[#d1c0ab] bg-[#f7f3e8]/90 p-6 sm:p-9 md:grid-cols-3">
          <AudienceBars title="Gender" rows={gender} />
          <AudienceBars title="Age" rows={age} />
          <AudienceBars title="Top locations" rows={locations} />
        </div>
        <p className="mt-5 text-xs leading-5 text-[#655b4f]">Audience percentages are based on the TikTok analytics provided for this campaign. Rounded location shares total 100%.</p>
      </section>

      <section id="insights" className="scroll-mt-8 bg-[#1f2b1d] px-5 py-16 text-white sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[.85fr_1.15fr] md:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c99f94]">04 / What the data revealed</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Reach gets attention. Retention creates opportunity.</h2>
            <p className="mt-6 text-sm leading-7 text-white/75 sm:text-base">
              The post had seven photos available, but viewers saw four on average. Most left after the second photo. Strong reach brought new people in; the next opportunity is to keep them swiping and bring the product value forward sooner.
            </p>
          </div>
          <div className="rounded-3xl bg-white/[0.07] p-6 sm:p-9">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#c99f94]">Next-step optimization</h3>
            <ul className="mt-6 flex flex-col gap-4">
              {optimizations.map((optimization) => (
                <li key={optimization} className="flex gap-3 text-sm leading-6 text-white/85">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-[#c99f94]" />
                  {optimization}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8f7965]">The bigger picture</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">A content result—and a business opportunity.</h2>
          <p className="mt-6 text-sm leading-7 text-[#655b4f] sm:text-base">
            The campaign introduced Covara Beauty to a predominantly female audience, with 81% of viewers aged 18–34. The work helped increase visibility, attract new customers, and contribute to business revenue. Most importantly, the analytics turned a successful reach moment into clear next steps for stronger retention and future content.
          </p>
          <p className="mt-8 font-serif text-3xl italic text-[#8f7965]">“Reach gets attention. Retention creates opportunity.”</p>
          <Link href="/#case-study" className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#1f2b1d] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#8f7965] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f7965] focus-visible:ring-offset-2">
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
