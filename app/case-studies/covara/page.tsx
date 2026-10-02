import type { Metadata } from 'next'
import { CovaraCaseStudy } from '@/components/portfolio/covara-case-study'

export const metadata: Metadata = {
  title: 'Covara Beauty Case Study | Brianna Williams',
  description:
    'How a value-led TikTok carousel strategy helped Covara Beauty reach new audiences, earn 70K post views, and identify next-step content optimizations.',
}

export default function CovaraCaseStudyPage() {
  return <CovaraCaseStudy />
}
