import type { Metadata } from 'next'
import { ForageCaseStudyPage } from '@/components/portfolio/forage-case-study-page'

export const metadata: Metadata = {
  title: 'Omnichannel Marketing Job Simulation | Brianna Williams',
  description:
    'A Forage job simulation covering ambassador marketing strategy, a B2B augmented-reality retail pitch (STYLEME), and a certificate of completion.',
}

export default function Page() {
  return <ForageCaseStudyPage />
}
