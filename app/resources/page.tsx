import Link from 'next/link'

export const metadata = {
  title: 'Garage Resources | The Garage Guide',
  description: 'Helpful garage resources including tools, calculators, and external links for homeowners.',
}

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section style={{ backgroundColor: '#2C3E50' }} className="text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Garage Resources</h1>
          <p className="text-xl text-slate-300">Helpful tools and resources for your garage projects.</p>
        </div>
      </section>
      <section className="container mx-auto px-4 max-w-3xl py-16">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-50 rounded-lg p-6">
            <h3 className="font-bold text-slate-900 mb-2">Cost Calculators</h3>
            <p className="text-slate-600 text-sm mb-3">Estimate costs for garage floor coatings, door replacements, and conversions.</p>
            <Link href="/cost-guides" className="text-blue-600 hover:underline text-sm">View Cost Guides</Link>
          </div>
          <div className="bg-slate-50 rounded-lg p-6">
            <h3 className="font-bold text-slate-900 mb-2">Maintenance Checklist</h3>
            <p className="text-slate-600 text-sm mb-3">Seasonal maintenance schedule to keep your garage in great shape.</p>
            <Link href="/maintenance" className="text-blue-600 hover:underline text-sm">View Checklist</Link>
          </div>
          <div className="bg-slate-50 rounded-lg p-6">
            <h3 className="font-bold text-slate-900 mb-2">Find a Professional</h3>
            <p className="text-slate-600 text-sm mb-3">Connect with qualified garage professionals in your area.</p>
            <Link href="/get-quote" className="text-blue-600 hover:underline text-sm">Get Free Quotes</Link>
          </div>
          <div className="bg-slate-50 rounded-lg p-6">
            <h3 className="font-bold text-slate-900 mb-2">Product Reviews</h3>
            <p className="text-slate-600 text-sm mb-3">Honest reviews of garage products tested by our team.</p>
            <Link href="/reviews" className="text-blue-600 hover:underline text-sm">View Reviews</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
