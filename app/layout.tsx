import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'
import Script from 'next/script'
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
      <head>
          <link rel="icon" href="/svgFavicon.svg" type="image/svg+xml" sizes="any" />
          <link rel="icon" href="/pngFavicon.png" type="image/png" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X8W1PP5XER"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X8W1PP5XER');
          `}
        </Script>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
