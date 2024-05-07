import './css/style.css'

import { Inter, Architects_Daughter } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"

import Header from '@/components/ui/header'
import Banner from '@/components/banner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export const metadata = {
  title: 'BackLink Africa | Marketplace for African websites & Blogs',
  description: 'We are a one-stop shop for advertisers interested in African websites, and content creators interested in monetizing their website. Visit our website if you are an advertiser interested in link building, sponsored content posts or are a publisher interested in making money from your content.',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-7JZZ8HD713"></script>
      <script>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());
        gtag('config', 'G-7JZZ8HD713');`}
      </script>
      <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-200 text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
          <Toaster/>
          {/* <Banner /> */}
        </div>
      </body>
    </html>
  )
}
 