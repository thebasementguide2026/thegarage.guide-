import Link from 'next/link'

export const metadata = {
  title: 'Garage Problems & Solutions | The Garage Guide',
  description: 'Troubleshoot common garage problems including door openers, water leaks, and more.',
}

const problems = [
  { title: 'Garage Door Opener Not Working?', href: '/problems/garage-door-opener-not-working', description: 'Diagnose and fix common garage door opener problems including remote failures and sensor issues.' },
  { title: 'Water Leaking Into Garage', href: '/problems/water-leaking-into-garage', description: 'Learn the 6 most common causes of water in your garage and how to fix each one.' },
  { title: "Garage Door Won't Close?", href: '/problems/garage-door-wont-close', description: "Your garage door opens fine but won't close. Diagnose all 10 causes ranked easiest to hardest with fix costs from $0 to $350." },
    { title: 'Cracked Garage Floor', href: '/problems/cracked-garage-floor', description: 'Every concrete garage floor cracks eventually. Learn which cracks are cosmetic vs structural, DIY repair steps, and when to resurface or replace.' },
]

export default function ProblemsPage() {
  return (
    <>
      <section style={{ backgroundColor: '#2C3E50' }} className="text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">Garage Problems &amp; Solutions</h1>
          <p className="text-xl text-gray-300">Troubleshooting guides for common garage issues.</p>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid gap-6">
            {problems.map((problem) => (
              <Link key={problem.href} href={problem.href} className="block border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{problem.title}</h2>
                <p className="text-gray-600">{problem.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
