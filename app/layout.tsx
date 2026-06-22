import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'The Garage Guide — Expert Garage Improvement Advice for Homeowners',
  description: 'Independent resource for garage organization, improvement, and maintenance. Written for homeowners, not contractors.',
  keywords: 'garage organization, garage storage, garage floor, garage door, garage insulation, garage heater, garage conversion',
  openGraph: {
    title: 'The Garage Guide — Expert Garage Improvement Advice for Homeowners',
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
          <link rel="icon" href="/images/svgFavicon.svg" type="image/svg+xml" sizes="any" />
          <link rel="icon" href="/images/pngFavicon.png" type="image/png" />
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
        {/* TrustedForm Certify Script */}
        <Script
          id="trustedform"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var tf = document.createElement('script');
                tf.type = 'text/javascript';
                tf.async = true;
                tf.src = ("https:" == document.location.protocol ? 'https' : 'http') + '://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&use_tagged_consent=true&l=' + new Date().getTime() + Math.random();
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(tf, s);
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}
