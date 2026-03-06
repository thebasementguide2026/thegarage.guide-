import Link from 'next/link'

export const metadata = {
  title: 'Garage Guides | The Garage Guide',
  description: 'Comprehensive guides for homeowners on garage organization, improvement, insulation, and more.',
}

const guides = [
  { title: 'Complete Guide to Garage Organization', href: '/articles/complete-garage-organization-guide', description: 'Transform your garage from a cluttered mess into an organized, functional space.' },
  { title: 'How to Insulate Your Garage', href: '/guides/how-to-insulate-garage', description: 'Complete DIY guide to insulating your garage walls, ceiling, and door.' },
  { title: 'Garage Heater Guide', href: '/guides/garage-heater-guide', description: 'Compare forced air, infrared, mini-split, and portable garage heaters for your setup.' },
]

export default function GuidesPage() {
  return (
    <>
      <section style={{ backgroundColor: '#2C3E50' }} className="text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Garage Guides</h1>
          <p className="text-xl text-slate-300">Comprehensive, homeowner-focused guides on every aspect of garage improvement.</p>
        </div>
      </section>
      <section className="container mx-auto px-4 max-w-4xl py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {guides.map((guide) => (
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
