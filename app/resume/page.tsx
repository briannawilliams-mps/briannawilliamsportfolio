import Image from 'next/image'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resume | Brianna Williams',
  description: 'View Brianna Williams’ marketing, public relations, and customer service resume.',
}

export default function ResumePage() {
  return (
    <main className="page-gradient min-h-screen px-5 py-8 sm:px-8 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-7 flex flex-col gap-5 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ArrowLeft aria-hidden="true" className="size-4" />
              Home
            </Link>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Curriculum vitae</p>
            <h1 className="mt-2 font-serif text-4xl sm:text-5xl">Brianna Williams</h1>
            <p className="mt-2 text-sm text-muted-foreground">Marketing · Public Relations · Customer Service</p>
          </div>
          <a
            href="/resume.pdf"
            download="Brianna-Williams-Resume.pdf"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-espresso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Download aria-hidden="true" className="size-4" />
            Download resume
          </a>
        </header>
        <section aria-label="Resume document" className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg shadow-mocha/10">
          <a
            href="/resume-preview.png"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open the full-size resume image in a new tab"
            className="block"
          >
            <Image
              src="/resume-preview.png"
              alt="Brianna Williams’ one-page resume, including experience, education, and technical and professional skills"
              width={1200}
              height={1550}
              sizes="(min-width: 1280px) 1152px, 100vw"
              priority
              className="h-auto w-full"
            />
          </a>
        </section>
      </div>
    </main>
  )
}
