import type { Metadata } from 'next'
import { OmnichannelMarketingCaseStudy } from '@/components/portfolio/omnichannel-marketing-case-study'

export const metadata: Metadata = {
  title: 'Omnichannel Marketing Case Study | Brianna Williams',
  description:
    'Explore Brianna Williams\'s Forage Omnichannel Marketing Job Simulation, including an ambassador marketing pitch, STYLEME retail experience concept, and certificate.',
}

export default function OmnichannelMarketingPage() {
  return <OmnichannelMarketingCaseStudy />
}
