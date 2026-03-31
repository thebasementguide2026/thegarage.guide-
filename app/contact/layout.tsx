import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | The Garage Guide',
  description: 'Get in touch with The Garage Guide. Send us your questions, feedback, or suggestions.',
  alternates: { canonical: 'https://thegarage.guide/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{}{children}</>
}
