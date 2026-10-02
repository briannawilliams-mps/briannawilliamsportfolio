import Image from 'next/image'
import { Mail, MapPin } from 'lucide-react'
import { profile } from '@/lib/portfolio'

export function Hero() {
  return (
    <header className="relative">
      <div className="relative h-64 w-full overflow-hidden sm:h-80 md:h-[26rem]">
        <Image
          src={profile.headerImage || '/placeholder.svg'}
          alt={profile.headerImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-espresso/10 via-transparent to-background"
        />
      </div>

      <div className="relative mx-auto -mt-12 max-w-3xl px-5 sm:-mt-28">
        <div className="rounded-3xl border border-border bg-card/95 px-6 py-10 text-center shadow-xl shadow-mocha/10 backdrop-blur sm:px-12">
          <div className="mx-auto -mt-20 mb-6 flex size-24 items-center justify-center rounded-full border-4 border-card bg-gradient-to-br from-tan to-mocha font-serif text-3xl text-primary-foreground shadow-lg">
            {profile.initials}
          </div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            {profile.title}
          </p>
          <h1 className="mt-3 text-balance font-serif text-5xl font-medium text-foreground sm:text-6xl">
            {profile.name}
          </h1>
          <div className="mx-auto my-6 h-px w-16 bg-tan" aria-hidden="true" />
          <p className="mx-auto max-w-xl text-pretty font-serif text-xl italic leading-relaxed text-[#C99F94]">
            {profile.tagline}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-espresso"
            >
              <Mail className="size-4" aria-hidden="true" />
              Get in touch
            </a>
            <a
              href="#case-study"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-secondary"
            >
              View case study
            </a>
          </div>
          <p className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-4" aria-hidden="true" />
            {profile.location}
          </p>
        </div>
      </div>
    </header>
  )
}
