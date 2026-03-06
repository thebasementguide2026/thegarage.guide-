import Link from 'next/link'

export const metadata = {
  title: 'Garage Problems & Solutions | The Garage Guide',
  description: 'Troubleshoot common garage problems including door openers, water leaks, and more.',
}

const problems = [
  { title: 'Garage Door Opener Not Working?', href: '/problems/garage-door-opener-not-working', description: 'Diagnose and fix common garage door opener problems including remote failures and sensor issues.' },
  { title: 'Water Leaking Into Garage', href: '/problems/water-leaking-into-garage', description: 'Learn the 6 most common causes of water in your garage and how to fix each one.' },
]

export default function ProblemsPage() {
  return (
    <>
      <section style={{ backgroundColor: '#2C3E50' }} className="text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Garage Problems & Solutions</h1>
          <p className="text-xl text-slate-300">Troubleshooting guides for common garage issues.</p>
        </div>
      </section>
      <section className="container mx-auto px-4 max-w-4xl py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem) => (
            <Link key={problem.href} href={problem.href} className="block bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-bold text-slate-900 mb-2">{problem.title}</h2>
              <p className="text-slate-600">{problem.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
