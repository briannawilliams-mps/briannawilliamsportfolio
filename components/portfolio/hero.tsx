import Link from 'next/link'
import { profile } from '@/lib/portfolio'

const portraitUrl =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7011.PNG-a3i5wNrJm3ijpOWAUfX96mo9bmVuF4.png'

export function Hero() {
  return (
    <header id="home" className="relative isolate overflow-hidden bg-gradient-to-r from-[#1f2b1d] via-[#827653] to-[#f0dba9]">
      <nav aria-label="Main navigation" className="relative z-20 bg-[#1f2b1d] px-5 py-4 text-[#f7f3e8] sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-3">
          <Link href="/" className="font-serif text-xl italic sm:text-2xl">Brianna Williams</Link>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[0.62rem] font-semibold uppercase tracking-[0.14em] sm:gap-x-6 sm:text-xs">
            <a href="#about" className="transition-colors hover:text-[#e4b8a8]">About</a>
            <a href="#case-study" className="transition-colors hover:text-[#e4b8a8]">Case Study</a>
            <a href="#skills" className="transition-colors hover:text-[#e4b8a8]">What I Bring</a>
            <a href="#contact" className="transition-colors hover:text-[#e4b8a8]">Contact</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#e4b8a8]">LinkedIn</a>
            <Link href="/resume" className="transition-colors hover:text-[#e4b8a8]">Resume</Link>
          </div>
        </div>
      </nav>
      <div className="relative grid md:min-h-[500px] md:grid-cols-[1.2fr_.8fr]">
        <div className="relative z-10 flex flex-col items-center justify-center bg-gradient-to-r from-[#1f2b1d] via-[#61583c] to-[#827653] px-6 py-14 text-center sm:px-10 md:bg-none md:px-8 lg:px-14">
          <p className="w-full max-w-[22rem] text-balance text-xs font-semibold leading-relaxed tracking-[0.12em] text-[#e4b8a8] sm:max-w-none sm:text-sm">
            {profile.title}
          </p>
          <h1 className="mt-4 text-balance font-serif text-[clamp(2.5rem,7vw,5.25rem)] italic leading-[0.98] text-white">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-xl text-pretty font-serif text-lg leading-relaxed text-[#f0c4b3] sm:text-xl">
            {profile.tagline}
          </p>
        </div>
        <div className="relative h-[320px] overflow-hidden sm:h-[380px] md:h-full md:min-h-[500px]">
          <img
            src={portraitUrl}
            alt="Brianna Williams, marketing and public relations professional"
            width={1600}
            height={500}
            fetchPriority="high"
            className="absolute inset-0 size-full object-cover object-right md:object-[90%_center]"
          />
        </div>
      </div>
    </header>
  )
}
