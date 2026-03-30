import Link from 'next/link'

const footerSections = [
  {
    title: 'GUIDES',
    links: [
      { label: 'Complete Garage Guide', href: '/guides/complete-garage-guide' },
      { label: 'Garage Organization', href: '/guides/complete-garage-organization-guide' },
      { label: 'Insulation Guide', href: '/guides/how-to-insulate-garage' },
      { label: 'Heater Guide', href: '/guides/garage-heater-guide' },
      { label: 'EV Charger Installation', href: '/guides/ev-charger-installation' },
      { label: 'Garage Too Hot', href: '/guides/garage-too-hot-in-summer' },
      { label: 'Garage Ventilation Guide', href: '/guides/garage-ventilation-guide' },
      { label: 'Door Maintenance', href: '/guides/garage-door-maintenance' },
    ],
  },
  {
    title: 'COST GUIDES',
    links: [
      { label: 'Floor Coating Cost', href: '/cost-guides/garage-floor-coating-cost' },
      { label: 'Epoxy Floor Cost', href: '/cost-guides/epoxy-garage-floor-cost' },
      { label: 'Conversion Cost', href: '/cost-guides/garage-conversion-cost' },
      { label: 'Door Replacement Cost', href: '/cost-guides/garage-door-replacement-cost' },
      { label: 'Garage Addition Cost', href: '/cost-guides/garage-addition-cost' },
    ],
  },
  {
    title: 'PROBLEMS',
    links: [
      { label: 'Door Opener Issues', href: '/problems/garage-door-opener-not-working' },
      { label: 'Water Leaks', href: '/problems/water-leaking-into-garage' },
      { label: "Door Won't Close", href: '/problems/garage-door-wont-close' },
      { label: 'Cracked Floor', href: '/problems/cracked-garage-floor' },
      { label: 'Oil Stains', href: '/problems/garage-floor-oil-stains' },
      { label: "Door Won't Open", href: '/problems/garage-door-wont-open' },
    ],
  },
  {
    title: 'REVIEWS',
    links: [
      { label: 'Best Storage Systems', href: '/reviews/best-garage-storage-systems' },
      { label: 'Best Floor Epoxy', href: '/reviews/best-garage-floor-epoxy' },
      { label: 'Best Lighting', href: '/reviews/best-garage-lighting' },
      { label: 'Best Door Openers', href: '/reviews/best-garage-door-openers' },
      { label: 'Best Heaters', href: '/reviews/best-garage-heaters' },
      { label: 'Best Cabinets', href: '/reviews/best-garage-cabinets' },
      { label: 'Best Workbenches', href: '/reviews/best-garage-workbenches' },
            { label: 'Best Door Keypads', href: '/reviews/best-garage-door-keypads' },
    ],
  },
  {
    title: 'COMPARISONS',
    links: [
      { label: 'Attached vs Detached', href: '/comparisons/attached-vs-detached-garage' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-16">
      <div className="container mx-auto px-4 max-w-6xl py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="text-white text-xl font-bold">
              The <span className="text-orange-500">Garage</span> Guide
            </Link>
            <p className="mt-3 text-sm text-slate-400">
              Independent resource for garage organization, improvement, and maintenance. Written for homeowners, not contractors.
            </p>
          </div>
          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-semibold text-slate-400 tracking-wider mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Sister Sites */}
        <div className="border-t border-slate-800 mt-10 pt-6 text-sm text-slate-400">
          Our Network:{' '}
          <a href="https://thebasement.guide" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white">The Basement Guide</a>
          {' | '}
          <a href="https://theseptic.guide" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white">The Septic Guide</a>
          {' | '}
          <a href="https://www.thewell.guide" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white">The Well Guide</a>
        </div>
        {/* Bottom */}
        <div className="border-t border-slate-800 mt-6 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} The Garage Guide. All rights reserved.</p>
          <div className="flex gap-4 mt-3 sm:mt-0">
            <Link href="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300">Terms of Use</Link>
            <Link href="/affiliate-disclosure" className="hover:text-slate-300">Affiliate Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
