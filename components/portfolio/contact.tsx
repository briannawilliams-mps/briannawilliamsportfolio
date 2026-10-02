import { ArrowUpRight, Mail } from 'lucide-react'
import { profile } from '@/lib/portfolio'
import { SectionHeading } from './section-heading'

const links = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'LinkedIn', value: 'Connect with me', href: profile.linkedin, icon: ArrowUpRight, external: true },
]

export function Contact() {
  return (
    <section aria-labelledby="contact-title" className="mx-auto max-w-4xl px-5 pb-16">
      <SectionHeading eyebrow="Contact" title="Let’s work together" id="contact-title" light />
      <ul className="grid gap-4 sm:grid-cols-2">
        {links.map(({ label, value, href, icon: Icon, external }) => (
          <li key={label}>
            <a
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-primary-foreground/20 bg-espresso/30 p-6 text-center text-primary-foreground backdrop-blur transition-colors hover:bg-espresso/50"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-primary-foreground/10">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span className="text-xs uppercase tracking-[0.25em] text-primary-foreground/75">{label}</span>
              <span className="text-sm font-medium">{value}</span>
            </a>
          </li>
        ))}
      </ul>
      <footer className="mt-16 text-center text-xs text-primary-foreground/70">
        &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
      </footer>
    </section>
  )
}
