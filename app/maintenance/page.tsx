import Link from 'next/link'

export const metadata = {
  title: 'Garage Maintenance Guide | The Garage Guide',
  description: 'Seasonal garage maintenance checklist and tips to keep your garage in top shape year-round.',
}

export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-white">
      <section style={{ backgroundColor: '#2C3E50' }} className="text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Garage Maintenance Guide</h1>
          <p className="text-xl text-slate-300">Keep your garage in top condition with our seasonal maintenance checklist.</p>
        </div>
      </section>
      <section className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Seasonal Maintenance Checklist</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-2">Spring</h3>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>Inspect and clean garage door tracks</li>
                <li>Test garage door safety sensors</li>
                <li>Check weather stripping and seals</li>
                <li>Clean and organize storage areas</li>
                <li>Inspect floor for cracks or damage</li>
              </ul>
            </div>
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-2">Summer</h3>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>Lubricate garage door hinges and springs</li>
                <li>Check ventilation and airflow</li>
                <li>Inspect for pest entry points</li>
                <li>Clean and reseal floor coating if needed</li>
                <li>Test and maintain garage door opener</li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-2">Fall</h3>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>Prepare for winter weather</li>
                <li>Check insulation and weatherproofing</li>
                <li>Test heating systems if applicable</li>
                <li>Organize seasonal items</li>
                <li>Inspect lighting and replace bulbs</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-2">Winter</h3>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>Keep floor clear of salt and moisture</li>
                <li>Monitor for ice dams near door</li>
                <li>Check door seal against drafts</li>
                <li>Maintain safe walkways</li>
                <li>Inspect for condensation issues</li>
              </ul>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
            <h3 className="font-bold text-slate-900 mb-2">Need Professional Help?</h3>
            <p className="text-slate-600 mb-4">Connect with qualified garage professionals in your area for maintenance and repairs.</p>
            <Link href="/get-quote" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Free Quotes
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
