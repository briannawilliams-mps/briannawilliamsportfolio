import type { Metadata } from 'next'
import { SalesCaseStudy } from '@/components/portfolio/sales-case-study'

export const metadata: Metadata = {
  title: 'Lead Generation & Sales Support | Brianna Williams',
  description:
    'How relationship-led prospecting, client referrals, and thoughtful lead handoffs helped create long-term hotel customers and repeat business.',
}

export default function SalesSupportCaseStudyPage() {
  return <SalesCaseStudy />
}
