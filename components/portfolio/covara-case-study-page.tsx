import Link from 'next/link'
import { ArrowDown, ArrowLeft, ArrowUpRight, ChartNoAxesColumnIncreasing, Lightbulb, Target } from 'lucide-react'

const assets = {
  campaign: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4034ADD5-1B28-4330-880C-AA74DB854037-uelA5PvqXalFJ4qKU2PtlG5JySSLs7.jpg',
  results: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7053.PNG-w4gHjiWegMFvyZDURxTUozucI20zhq.png',
  manicure: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/214A5DCA-F43B-43EB-8DF6-65FE7EE26B6D.JPG-bxPXtqYk80vZU9y42krgpr3Sc0dQUM.jpeg',
  nailSets: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7054-uJKyT8kf579YfAnR1c5kcsWz7rebvv.jpg',
}

const metrics = [
  { value: '70K', label: 'Post views' },
  { value: '57.2K', label: 'Total viewers' },
  { value: '144', label: 'New followers' },
  { value: '247h 59m', label: 'Total play time' },
  { value: '95%', label: 'New viewers' },
  { value: '100%', label: 'Non-followers' },
]

const ageGroups = [
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

const strategySteps = [
  {
    title: 'Lead with usefulness',
    body: 'Create a practical "cheap items I recommend" carousel with approachable nail-care tips for aspiring nail technicians and people who do their own nails.',
  },
  {
    title: 'Show up where the audience is',
    body: 'Use TikTok\'s discovery potential and a casual, relatable format to introduce Covara Beauty to consumers who had not yet encountered the account.',
  },
]

const optimizations = [
  'Open with the strongest product visual',
  'Use a sharper hook on slide two',
  'Reduce unnecessary slides and build curiosity between each one',
  'Introduce the product and value proposition earlier',
  'Test shorter carousels against short-form video',
]

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-[#edd4d5] bg-white/75 p-5 sm:p-6">
      <p className="font-serif text-3xl font-semibold tracking-tight text-[#241d1d] sm:text-4xl">{value}</p>
      <p className="mt-2 text-sm font-medium text-[#665b59]">{label}</p>
    </div>
  )
}

function DataBar({ label, value, max = 100 }: { label: string; value: number; max?: number }) {
  return (
    <div className="grid grid-cols-[5.75rem_minmax(0,1fr)_3.5rem] items-center gap-3 text-sm">
      <span className="text-[#514847]">{label}</span>
      <span className="h-2.5 overflow-hidden rounded-full bg-[#f1e1df]" aria-hidden="true">
        <span className="block h-full rounded-full bg-[#df7090]" style={{ width: `${Math.max((value / max) * 100, 2)}%` }} />
      </span>
      <span className="text-right font-medium tabular-nums text-[#514847]">{value}%</span>
    </div>
  )
}

export function CovaraCaseStudyPage() {
  return (
    <main className="min-h-screen bg-[#fbf6f2] text-[#211d1d]">
      <header className="border-b border-[#eaded8] bg-[#fffaf7]">
        <nav aria-label="Portfolio navigation" className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link href="/" className="font-serif text-2xl italic text-[#302521] sm:text-3xl">Brianna Williams</Link>
          <div className="flex items-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#504747] sm:gap-8 sm:text-xs">
            <Link href="/" className="transition-colors hover:text-[#d35d80]">Home</Link>
            <a href="#results" className="border-b-2 border-[#df7090] pb-1 text-[#211d1d]">Case study</a>
            <a href="#impact" className="hidden transition-colors hover:text-[#d35d80] sm:inline">Impact</a>
          </div>
        </nav>
      </header>

      <section className="relative isolate overflow-hidden bg-[#ead9d2]">
        <div className="absolute inset-0 -z-10">
          <img src={assets.campaign} alt="" className="size-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fff7f2] via-[#fff7f2]/95 to-[#fff7f2]/20 md:via-[#fff7f2]/85" />
        </div>
        <div className="mx-auto grid min-h-[440px] max-w-7xl items-center px-5 py-16 sm:px-8 md:min-h-[500px] md:grid-cols-[1.1fr_.9fr]">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.23em] text-[#594c49]">Case study · TikTok</p>
            <h1 className="mt-4 font-serif text-5xl font-medium uppercase leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl">Covara<br className="hidden sm:block" /> Beauty</h1>
            <div className="mt-5 h-1 w-20 rounded-full bg-[#df7090]" />
            <p className="mt-5 max-w-lg text-sm font-semibold uppercase leading-relaxed tracking-[0.13em] text-[#4c4140] sm:text-base">
              Turning affordable beauty content into TikTok discovery
            </p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Campaign topics">
              {['Social media strategy', 'Content marketing', 'TikTok'].map((tag) => (
                <li key={tag} className="rounded-full border border-[#e9c4cb] bg-[#fff5f4]/90 px-3 py-1.5 text-xs font-medium text-[#554348]">{tag}</li>
              ))}
            </ul>
          </div>
          <div className="mt-12 flex justify-start md:mt-0 md:justify-end">
            <a href="#challenge" className="inline-flex items-center gap-2 rounded-full border border-[#5f504b]/25 bg-white/75 px-5 py-3 text-sm font-semibold text-[#342a28] backdrop-blur transition-colors hover:bg-white">
              Explore the campaign <ArrowDown aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:gap-12 sm:px-8 sm:py-14">
        <section id="challenge" aria-labelledby="challenge-heading" className="grid gap-8 rounded-[2rem] border border-[#eee2dc] bg-white/75 p-6 sm:p-9 lg:grid-cols-[.9fr_1.1fr] lg:gap-12 lg:p-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d35d80]">The brief</p>
            <h2 id="challenge-heading" className="mt-3 font-serif text-3xl sm:text-4xl">A more relatable way to reach beauty consumers</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#594f4c] sm:text-base">
              Covara Beauty needed to reach potential consumers beyond its existing audience. Rather than lead with a traditional product ad, the content used an affordable, useful recommendation format to give people an easy entry point into nail care.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#594f4c] sm:text-base">
              The strategy focused on meeting people where they already discover beauty ideas: TikTok.
            </p>
          </div>
          <div className="rounded-3xl bg-[#f8ecea] p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-full bg-[#df7090] text-white"><Target aria-hidden="true" className="size-5" /></span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a54665]">The strategy</p>
                <p className="font-serif text-xl italic sm:text-2xl">Value → Relatability → Discovery</p>
              </div>
            </div>
            <ol className="mt-6 flex flex-col gap-5">
              {strategySteps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#f1c6cf] text-sm font-bold text-[#51383e]">0{index + 1}</span>
                  <div>
                    <h3 className="text-sm font-bold">{step.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#655a57]">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <figure className="grid overflow-hidden rounded-[2rem] bg-[#211d1d] md:grid-cols-[1.1fr_.9fr]">
          <img src={assets.campaign} alt="Nail tools and colorful beauty products arranged in a pink organizer for the campaign's affordable beauty recommendations" className="h-full min-h-[280px] w-full object-cover sm:min-h-[380px]" />
          <figcaption className="flex flex-col justify-center p-7 text-white sm:p-10 lg:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f1a8bb]">The creative direction</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Useful first. Product-forward, not promotional.</h2>
            <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">
              A practical "cheap items I recommend" concept made affordable nail-care advice the hook. The carousel offered tips for aspiring nail technicians and people who enjoy doing their own nails, making the content helpful before it asked for attention.
            </p>
          </figcaption>
        </figure>

        <section id="results" aria-labelledby="results-heading" className="rounded-[2rem] border border-[#efd8dc] bg-gradient-to-br from-[#fff7f6] to-[#f9e8eb] p-6 sm:p-9 lg:p-12">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d35d80]">The results</p>
              <h2 id="results-heading" className="mt-2 font-serif text-4xl sm:text-5xl">Discovery at a glance</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#655a57]">One useful post reached far beyond the account's existing followers.</p>
          </div>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {metrics.map((metric) => <MetricCard key={metric.label} {...metric} />)}
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-3xl bg-white/80 p-6 sm:p-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.18em]">Who did the content reach?</h3>
              <div className="mt-6 grid gap-7 sm:grid-cols-2">
                <div>
                  <h4 className="mb-4 text-sm font-semibold">Gender</h4>
                  <div className="flex items-center gap-4">
                    <div className="relative flex size-24 shrink-0 items-center justify-center rounded-full" style={{ background: 'conic-gradient(#df7090 0 86%, #85747a 86% 98%, #d3b6bc 98% 100%)' }} aria-label="Audience gender: 86 percent female, 12 percent male, 2 percent other">
                      <div className="flex size-14 items-center justify-center rounded-full bg-white text-xs font-bold">86%</div>
                    </div>
                    <ul className="flex flex-col gap-2 text-xs text-[#554b49]">
                      <li><span className="mr-2 inline-block size-2 rounded-full bg-[#df7090]" />Female 86%</li>
                      <li><span className="mr-2 inline-block size-2 rounded-full bg-[#85747a]" />Male 12%</li>
                      <li><span className="mr-2 inline-block size-2 rounded-full bg-[#d3b6bc]" />Other 2%</li>
                    </ul>
                  </div>
                  <p className="mt-4 text-xs leading-5 text-[#716664]">Predominantly female viewers, relevant to a beauty and nail-care brand.</p>
                </div>
                <div>
                  <h4 className="mb-4 text-sm font-semibold">Age</h4>
                  <div className="flex flex-col gap-3">
                    {ageGroups.map((item) => <DataBar key={item.label} {...item} />)}
                  </div>
                  <p className="mt-4 text-xs leading-5 text-[#716664]">81% of viewers were between 18–34.</p>
                </div>
              </div>
              <div className="mt-8 border-t border-[#eadbd8] pt-6">
                <h4 className="mb-4 text-sm font-semibold">Geographic reach</h4>
                <div className="flex flex-col gap-3">
                  {locations.map((item) => <DataBar key={item.label} {...item} />)}
                </div>
                <p className="mt-4 text-xs leading-5 text-[#716664]">The audience was primarily U.S.-based, with additional discovery across Canada and other markets.</p>
              </div>
            </div>
            <figure className="flex flex-col overflow-hidden rounded-3xl border border-[#eedcdf] bg-white/80">
              <img src={assets.results} alt="Campaign results visual showing 70 thousand post views, 57.2 thousand viewers, 144 new followers, and a 95 percent new-viewer audience" className="h-full min-h-[250px] w-full object-cover object-center" />
              <figcaption className="px-5 py-4 text-xs leading-5 text-[#716664]">Campaign analytics snapshot supplied for this case study.</figcaption>
            </figure>
          </div>
        </section>

        <section aria-label="Covara beauty campaign imagery" className="grid gap-5 md:grid-cols-2">
          <figure className="overflow-hidden rounded-[2rem] bg-[#ead9d2]">
            <img src={assets.manicure} alt="A finished pink manicure displayed against a beauty studio shelf" className="h-[360px] w-full object-cover object-center sm:h-[480px]" loading="lazy" />
            <figcaption className="bg-white/80 px-5 py-4 text-sm font-medium text-[#554b49]">A real-world beauty moment behind the content.</figcaption>
          </figure>
          <figure className="overflow-hidden rounded-[2rem] bg-[#ead9d2]">
            <img src={assets.nailSets} alt="A collection of colorful handmade press-on nail designs arranged in a display case" className="h-[360px] w-full object-cover object-center sm:h-[480px]" loading="lazy" />
            <figcaption className="bg-white/80 px-5 py-4 text-sm font-medium text-[#554b49]">The creativity and variety of nail art the audience loves.</figcaption>
          </figure>
        </section>

        <section id="impact" aria-labelledby="insight-heading" className="grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-[#211d1d] p-7 text-white sm:p-9">
            <div className="flex items-center gap-3 text-[#f1a8bb]"><Lightbulb aria-hidden="true" className="size-6" /><p className="text-xs font-bold uppercase tracking-[0.2em]">What the data revealed</p></div>
            <h2 id="insight-heading" className="mt-4 font-serif text-3xl sm:text-4xl">Reach was strong. Retention is the next opportunity.</h2>
            <p className="mt-4 text-sm leading-7 text-white/75">Most viewers left after two photos. Although the post had seven slides, viewers saw four on average. That insight turns the results into a concrete next step for the content strategy.</p>
            <div className="mt-6 rounded-2xl bg-white/10 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#f1a8bb]">Next-step optimization</p>
              <ul className="mt-4 flex flex-col gap-3">
                {optimizations.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-white/85"><span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-[#f1a8bb]" />{item}</li>)}
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-[2rem] border border-[#efd8dc] bg-[#fff7f6] p-7 sm:p-9">
            <div>
              <div className="flex items-center gap-3 text-[#d35d80]"><ChartNoAxesColumnIncreasing aria-hidden="true" className="size-5" /><p className="text-xs font-bold uppercase tracking-[0.2em]">The bigger picture</p></div>
              <p className="mt-5 text-base leading-8 text-[#514847] sm:text-lg">The campaign showed how TikTok can work as a top-of-funnel discovery channel—introducing Covara Beauty to new consumers and building awareness beyond its existing follower base.</p>
              <p className="mt-4 text-base leading-8 text-[#514847] sm:text-lg">The audience profile and reach provided a strong foundation for future customer growth and revenue opportunities.</p>
            </div>
            <blockquote className="mt-8 border-t border-[#eadbd8] pt-7 font-serif text-3xl italic leading-tight text-[#a54665] sm:text-4xl">
              "Reach gets attention. Retention creates opportunity."
            </blockquote>
          </div>
        </section>

        <section aria-labelledby="impact-summary" className="rounded-[2rem] bg-[#f4e5e3] p-6 sm:p-9">
          <div className="grid gap-6 sm:grid-cols-[.8fr_1.2fr] sm:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a54665]">My impact</p>
              <h2 id="impact-summary" className="mt-2 font-serif text-3xl sm:text-4xl">From performance data to the next move</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                ['Audience growth', '70K views · 57.2K viewers'],
                ['Community growth', '144 new followers'],
                ['Audience discovery', '95% new viewers'],
                ['Strategic learning', 'Retention-led optimization'],
              ].map(([title, detail]) => (
                <div key={title} className="border-l border-[#d8bfc0] pl-4">
                  <p className="text-sm font-bold">{title}</p>
                  <p className="mt-2 text-xs leading-5 text-[#655a57]">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="flex flex-col items-start justify-between gap-4 border-t border-[#e6d7d0] pt-6 sm:flex-row sm:items-center">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#554b49] transition-colors hover:text-[#d35d80]"><ArrowLeft aria-hidden="true" className="size-4" /> Back to portfolio</Link>
          <a href="/#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#a54665] transition-colors hover:text-[#6b3043]">Let's build what's next <ArrowUpRight aria-hidden="true" className="size-4" /></a>
        </footer>
      </div>
    </main>
  )
}
