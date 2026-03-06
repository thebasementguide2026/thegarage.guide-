import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'The Garage Guide \u2014 Expert Garage Improvement Advice for Homeowners',
  description: 'Independent resource for garage organization, improvement, and maintenance. Written for homeowners, not contractors.',
  keywords: 'garage organization, garage storage, garage floor, garage door, garage insulation, garage heater, garage conversion',
  openGraph: {
    title: 'The Garage Guide \u2014 Expert Garage Improvement Advice for Homeowners',
    description: 'Independent resource for garage organization, improvement, and maintenance. Written for homeowners, not contractors.',
    siteName: 'The Garage Guide',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
