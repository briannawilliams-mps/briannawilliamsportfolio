import type { Metadata } from 'next'
import { OmnichannelCaseStudy } from '@/components/portfolio/omnichannel-case-study'

export const metadata: Metadata = {
  title: 'Omnichannel Marketing Case Study | Brianna Williams',
  description:
    'Explore Brianna Williams\'s Forage Omnichannel Marketing Job Simulation, including an ambassador marketing pitch, STYLEME retail experience concept, and certificate.',
}

export default function OmnichannelMarketingPage() {
  return <OmnichannelCaseStudy />
}
