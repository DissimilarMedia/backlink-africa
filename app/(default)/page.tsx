export const metadata = {
  title: 'BackLink Africa | Marketplace for African websites & Blogs',
  description: 'We are a one-stop shop for advertisers interested in African websites, and content creators interested in monetizing their website. Visit our website if you are an advertiser interested in link building, sponsored content posts or are a publisher interested in making money from your content.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import { Toaster } from '@/components/ui/toaster'

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Features /> */}
      <Zigzag />
      {/* <Testimonials /> */}
      <Newsletter />
      <Toaster />
    </>
  )
}
