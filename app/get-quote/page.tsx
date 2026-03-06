import QuoteForm from '@/components/QuoteForm'

export const metadata = {
  title: 'Get a Free Garage Quote | The Garage Guide',
  description: 'Connect with qualified garage professionals in your area. Get free, no-obligation quotes for garage doors, floor coatings, organization, and more.',
}

export default function GetQuotePage() {
  return (
    <>
      <section style={{ backgroundColor: '#2C3E50' }} className="text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-extrabold mb-4">Get Your Free Garage Quote</h1>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">Fill out the form below and we&apos;ll connect you with qualified garage professionals in your area.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-custom max-w-2xl">
          <div className="bg-white rounded-xl p-8 shadow-md border border-[#E8E4DE]">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  )
}
