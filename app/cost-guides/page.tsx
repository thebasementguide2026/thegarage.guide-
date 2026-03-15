import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Garage Cost Guides | The Garage Guide',
  description: 'Detailed cost breakdowns for garage floor coatings, door replacements, conversions, and more.',
}

const costGuides = [
  { title: 'Garage Floor Coating Cost 2026', href: '/cost-guides/garage-floor-coating-cost', description: 'Garage floor coating costs $3 to $12 per square foot installed. Compare epoxy, polyurea, and DIY options.' },
  { title: 'Garage Conversion Cost 2026', href: '/cost-guides/garage-conversion-cost', description: 'A garage conversion costs $10,000 to $50,000. Complete cost breakdown by project type.' },
  { title: 'Garage Door Replacement Cost 2026', href: '/cost-guides/garage-door-replacement-cost', description: 'A new garage door costs $800 to $4,000 installed. Pricing by material, style, and size.' },
]

export default function CostGuidesPage() {
  return (
    <>
              <Breadcrumbs items={[{ label: 'Cost Guides' }]} />
      <section style={{ backgroundColor: '#2C3E50' }} className="text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Garage Cost Guides</h1>
          <p className="text-xl text-slate-300">Real pricing data to help you budget for your garage project.</p>
        </div>
      </section>
      <section className="container mx-auto px-4 max-w-4xl py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {costGuides.map((guide) => (
            <Link key={guide.href} href={guide.href} className="block bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-bold text-slate-900 mb-2">{guide.title}</h2>
              <p className="text-slate-600">{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
