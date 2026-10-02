import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowLeft, ArrowUpRight, Award, Handshake, Users } from 'lucide-react'

const highlights = [
  { value: '5+', label: 'Leads converted into consistent business accounts' },
  { value: 'Long-term', label: 'Client relationships strengthened' },
  { value: 'Recognized', label: 'Lead process shared with hotel leaders' },
]

const approach = [
  {
    number: '01',
    title: 'Build from strong relationships',
    body: 'I worked with our top accounts and identified businesses whose teams regularly traveled for work, creating relevant opportunities for our sales team.',
    icon: Handshake,
  },
  {
    number: '02',
    title: 'Make referrals worthwhile',
    body: 'I introduced a word-of-mouth referral program. When a referred guest stayed at least one night, the referring client earned points on their profile.',
    icon: Users,
  },
  {
    number: '03',
    title: 'Pass qualified leads forward',
    body: 'I carefully documented each lead and passed useful context to the sales team so they could follow up and continue building the relationship.',
    icon: Award,
  },
]

export function SalesCaseStudy() {
  return (
    <main className="min-h-screen bg-[#f7f3e8] text-[#1f2b1d]">
      <header className="border-b border-[#d1c0ab] bg-[#f7f3e8]">
        <nav aria-label="Portfolio navigation" className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link href="/" className="whitespace-nowrap font-serif text-base italic sm:text-2xl">Brianna Williams</Link>
          <div className="flex items-center gap-2.5 whitespace-nowrap text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-[#655b4f] sm:gap-7 sm:text-xs sm:tracking-[0.14em]">
            <Link href="/" className="transition-colors hover:text-[#8f7965]">Home</Link>
            <a href="#story" aria-current="page" className="border-b-2 border-[#8f7965] pb-1 text-[#1f2b1d]">Case study</a>
            <a href="/#contact" className="transition-colors hover:text-[#8f7965]">Contact</a>
          </div>
        </nav>
      </header>

      <section className="relative isolate overflow-hidden bg-[#1f2b1d]">
        <Image
          src="/images/header.png"
          alt="Open books and a gold pen on a warm linen desk beside coffee and dried flowers"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1f2b1d]/95 via-[#1f2b1d]/80 to-[#1f2b1d]/35" />
        <div className="mx-auto flex min-h-[420px] max-w-7xl flex-col items-start justify-center px-5 py-16 sm:min-h-[480px] sm:px-8 lg:min-h-[540px]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#e3c9b2]">Case study · Hospitality sales</p>
          <h1 className="mt-5 max-w-3xl text-balance font-serif text-5xl leading-[0.98] text-[#f7f3e8] sm:text-7xl lg:text-8xl">
            Lead Generation <span className="italic text-[#d8c2a8]">&amp;</span><br className="hidden sm:block" /> Sales Support
          </h1>
          <p className="mt-6 max-w-xl text-pretty font-serif text-xl italic leading-relaxed text-[#eadcca] sm:text-2xl">
            From connections to confirmed business
          </p>
          <a href="#story" className="mt-9 inline-flex items-center gap-2 rounded-full border border-[#f7f3e8]/40 bg-[#f7f3e8]/10 px-5 py-3 text-sm font-semibold text-[#f7f3e8] backdrop-blur transition-colors hover:bg-[#f7f3e8]/20">
            Explore the story <ArrowDown aria-hidden="true" className="size-4" />
          </a>
        </div>
      </section>

      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:gap-12 sm:px-8 sm:py-14">
        <section aria-label="Sales impact highlights" className="grid gap-4 sm:grid-cols-3">
          {highlights.map(({ value, label }) => (
            <article key={label} className="rounded-2xl border border-[#d1c0ab] bg-[#ece2d3] p-5 sm:p-6">
              <p className="font-serif text-3xl text-[#1f2b1d] sm:text-4xl">{value}</p>
              <p className="mt-2 max-w-xs text-sm leading-6 text-[#655b4f]">{label}</p>
            </article>
          ))}
        </section>

        <section id="story" aria-labelledby="story-heading" className="grid scroll-mt-6 gap-8 rounded-[2rem] border border-[#d1c0ab] bg-[#f7f3e8] p-6 sm:p-9 lg:grid-cols-[1.05fr_.95fr] lg:gap-12 lg:p-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8f7965]">The opportunity</p>
            <h2 id="story-heading" className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">Turning client relationships into lasting business</h2>
            <p className="mt-5 text-sm leading-7 text-[#655b4f] sm:text-base">
              I consistently turned customer relationships into new business opportunities, generating leads that converted into long term customers and increased revenue. By building relationships with our top accounts and identifying businesses that regularly traveled for work, I was able to create new opportunities for our sales team while strengthening our existing client relationships.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#655b4f] sm:text-base">
              I also introduced referral programs to our clients that were based on word of mouth referrals. The program encouraged clients to refer a colleague to our business, allowing us to build new relationships while also giving their profiles points when their referred guest stayed with us for at least one night.
            </p>
          </div>
          <aside aria-labelledby="approach-heading" className="rounded-3xl bg-[#ece2d3] p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8f7965]">My approach</p>
            <h3 id="approach-heading" className="mt-2 font-serif text-2xl sm:text-3xl">Relationships, referrals, follow-through</h3>
            <ol className="mt-6 flex flex-col gap-6">
              {approach.map(({ number, title, body, icon: Icon }) => (
                <li key={number} className="flex gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#1f2b1d] text-[#f7f3e8]">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#8f7965]">{number}</p>
                    <h4 className="mt-1 text-sm font-bold text-[#1f2b1d]">{title}</h4>
                    <p className="mt-1 text-sm leading-6 text-[#655b4f]">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </aside>
        </section>

        <section aria-labelledby="recognition-heading" className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
          <div className="rounded-[2rem] bg-[#1f2b1d] p-7 text-[#f7f3e8] sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d8c2a8]">The result</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Business built to come back</h2>
            <p className="mt-4 text-sm leading-7 text-[#eadcca]">More than a single introduction, each qualified lead created an opportunity to develop a dependable client relationship and encourage repeat stays.</p>
            <div className="mt-7 border-t border-[#f7f3e8]/20 pt-6">
              <p className="font-serif text-5xl text-[#d8c2a8]">5+</p>
              <p className="mt-2 text-sm font-medium text-[#f7f3e8]">Leads converted into consistent business accounts</p>
            </div>
          </div>
          <div className="rounded-[2rem] border border-[#d1c0ab] bg-[#ece2d3] p-7 sm:p-9">
            <div className="flex items-center gap-3 text-[#8f7965]">
              <Award aria-hidden="true" className="size-6" />
              <p className="text-xs font-bold uppercase tracking-[0.2em]">Recognition</p>
            </div>
            <h2 id="recognition-heading" className="mt-3 font-serif text-3xl sm:text-4xl">A lead process worth sharing</h2>
            <p className="mt-5 text-sm leading-7 text-[#655b4f] sm:text-base">
              I was also acknowledged by our Sales Manager and corporate team for how I documented and passed along my leads. My approach was used as an example during a managers’ retreat to show other hotels how they could improve their lead generation process. I was also recognized multiple times through email for the leads I brought in.
            </p>
          </div>
        </section>

        <section aria-labelledby="repeat-business-heading" className="flex flex-col gap-5 rounded-[2rem] border border-[#d1c0ab] bg-[#f7f3e8] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div className="flex items-start gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#d8c2a8] text-[#1f2b1d]"><Handshake aria-hidden="true" className="size-6" /></span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8f7965]">Long-term impact</p>
              <h2 id="repeat-business-heading" className="mt-2 font-serif text-2xl sm:text-3xl">Stronger relationships. Repeat business.</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-[#655b4f] sm:text-base">
                In addition, I turned 5+ leads into consistent business accounts, helping build long-term relationships that increased revenue and created repeat business for the hotel.
              </p>
            </div>
          </div>
          <Link href="/#contact" className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-[#1f2b1d] px-5 py-3 text-sm font-semibold text-[#f7f3e8] transition-colors hover:bg-[#34432f] sm:self-center">
            Get in touch <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </section>

        <footer className="flex flex-col items-start justify-between gap-4 border-t border-[#d1c0ab] pt-6 sm:flex-row sm:items-center">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#655b4f] transition-colors hover:text-[#1f2b1d]"><ArrowLeft aria-hidden="true" className="size-4" /> Back to portfolio</Link>
          <p className="font-serif text-lg italic text-[#8f7965]">Turning connections into opportunity</p>
        </footer>
      </div>
    </main>
  )
}
