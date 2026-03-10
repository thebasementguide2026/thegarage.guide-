import Link from 'next/link'

export const metadata = {
  title: 'Garage Product Reviews | The Garage Guide',
  description: 'Honest, tested reviews of garage storage systems, floor epoxy kits, lighting, and more.',
}

const reviews = [
  { title: 'Best Garage Storage Systems 2026', href: '/reviews/best-garage-storage-systems', description: 'We reviewed wall-mounted tracks, overhead ceiling racks, and modular cabinets.' },
  { title: 'Best Garage Floor Epoxy Kits 2026', href: '/reviews/best-garage-floor-epoxy', description: 'We tested the top DIY garage floor epoxy kits and ranked them.' },
  { title: 'Best Garage Lighting 2026', href: '/reviews/best-garage-lighting', description: 'LED shop lights, wraparound fixtures, and panel lights tested and compared.' },
  { title: 'Best Garage Cabinets 2026', href: '/reviews/best-garage-cabinets', description: 'Steel systems, freestanding lockers, and wall-mount picks compared.' },
  { title: 'Best Garage Workbenches 2026', href: '/reviews/best-garage-workbenches', description: '7 picks for every budget and project. Adjustable, heavy-duty, mobile, and budget options.' },
]

export default function ReviewsPage() {
  return (
    <>
      <section style={{ backgroundColor: '#2C3E50' }} className="text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Garage Product Reviews</h1>
          <p className="text-xl text-slate-300">Honest, tested reviews to help you choose the right products for your garage.</p>
        </div>
      </section>
      <section className="container mx-auto px-4 max-w-4xl py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <Link key={review.href} href={review.href} className="block bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-bold text-slate-900 mb-2">{review.title}</h2>
              <p className="text-slate-600">{review.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
