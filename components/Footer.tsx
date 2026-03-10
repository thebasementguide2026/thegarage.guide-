import Link from 'next/link'

const footerSections = [
  {
    title: 'GUIDES',
    links: [
      { label: 'Garage Organization', href: '/articles/complete-garage-organization-guide' },
      { label: 'Insulation Guide', href: '/guides/how-to-insulate-garage' },
      { label: 'Heater Guide', href: '/guides/garage-heater-guide' },
    ],
  },
  {
    title: 'COST GUIDES',
    links: [
      { label: 'Floor Coating Cost', href: '/cost-guides/garage-floor-coating-cost' },
      { label: 'Conversion Cost', href: '/cost-guides/garage-conversion-cost' },
      { label: 'Door Replacement Cost', href: '/cost-guides/garage-door-replacement-cost' },
    ],
  },
  {
    title: 'PROBLEMS',
    links: [
      { label: 'Door Opener Issues', href: '/problems/garage-door-opener-not-working' },
      { label: 'Water Leaks', href: '/problems/water-leaking-into-garage' },
            { label: "Door Won't Close", href: '/problems/garage-door-wont-close' },
    ],
  },
  {
    title: 'REVIEWS',
    links: [
      { label: 'Best Storage Systems', href: '/reviews/best-garage-storage-systems' },
      { label: 'Best Floor Epoxy', href: '/reviews/best-garage-floor-epoxy' },
      { label: 'Best Lighting', href: '/reviews/best-garage-lighting' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#2B3A4A] text-white mt-16">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="font-bold text-xl mb-3">
              The <span className="text-[#C45B3B]">Garage</span> Guide
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Independent resource for garage organization, improvement, and maintenance. Written for homeowners, not contractors.
            </p>
          </div>
          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-xs tracking-wider text-gray-400 mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Sister Sites */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-sm text-gray-400">
          Our Network: <Link href="https://thebasement.guide/" className="text-gray-300 hover:text-white">The Basement Guide</Link> | <Link href="https://theseptic.guide/" className="text-gray-300 hover:text-white">The Septic Guide</Link>
        </div>
        {/* Bottom */}
        <div className="border-t border-gray-700 mt-4 pt-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-gray-400">
          <span>&copy; {new Date().getFullYear()} The Garage Guide. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Use</Link>
            <Link href="/affiliate-disclosure" className="hover:text-white">Affiliate Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
