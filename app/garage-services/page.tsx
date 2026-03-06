import Link from 'next/link'

export const metadata = {
  title: 'Garage Services | The Garage Guide',
  description: 'Find qualified garage professionals for door installation, floor coating, organization, and more.',
}

const services = [
  { name: 'Garage Door Installation & Repair', description: 'Professional garage door installation, replacement, and repair services.' },
  { name: 'Floor Coating & Epoxy', description: 'Expert garage floor coating including epoxy, polyurea, and polyaspartic applications.' },
  { name: 'Garage Organization', description: 'Custom storage solutions including wall systems, ceiling racks, and cabinets.' },
  { name: 'Garage Conversions', description: 'Convert your garage into living space, home office, gym, or ADU.' },
  { name: 'Insulation & Weatherproofing', description: 'Garage insulation, weather stripping, and climate control solutions.' },
  { name: 'Electrical & Lighting', description: 'Garage electrical upgrades, LED lighting, and outlet installation.' },
]

export default function GarageServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section style={{ backgroundColor: '#2C3E50' }} className="text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Garage Services</h1>
          <p className="text-xl text-slate-300">Find qualified professionals for any garage project.</p>
        </div>
      </section>
      <section className="container mx-auto px-4 max-w-4xl py-12">
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((service) => (
            <div key={service.name} className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-2">{service.name}</h3>
              <p className="text-slate-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/get-quote" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
            Get Free Quotes From Local Pros
          </Link>
        </div>
      </section>
    </main>
  )
}
