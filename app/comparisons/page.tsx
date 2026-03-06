import Link from 'next/link'

export const metadata = {
  title: 'Garage Comparisons | The Garage Guide',
  description: 'Side-by-side comparisons of garage types, materials, and options to help you decide.',
}

const comparisons = [
  { title: 'Attached vs Detached Garage', href: '/comparisons/attached-vs-detached-garage', description: 'Complete comparison of costs, convenience, safety, and home value for attached vs detached garages.' },
]

export default function ComparisonsPage() {
  return (
    <>
      <section style={{ backgroundColor: '#2C3E50' }} className="text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Garage Comparisons</h1>
          <p className="text-xl text-slate-300">Side-by-side comparisons to help you make the right choice.</p>
        </div>
      </section>
      <section className="container mx-auto px-4 max-w-4xl py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {comparisons.map((item) => (
            <Link key={item.href} href={item.href} className="block bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h2>
              <p className="text-slate-600">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
