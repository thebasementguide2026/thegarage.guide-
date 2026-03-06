export const metadata = {
  title: 'Affiliate Disclosure | The Garage Guide',
  description: 'Affiliate disclosure for The Garage Guide website.',
}

export default function AffiliateDisclosurePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Affiliate Disclosure</h1>
          <p className="text-slate-300">Last updated: January 2026</p>
        </div>
      </section>
      <section className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg max-w-none text-slate-700">
          <p>The Garage Guide is a participant in affiliate advertising programs designed to provide a means for sites to earn advertising fees by advertising and linking to retail partners.</p>
          <h2 className="text-xl font-bold text-slate-900 mt-8">How It Works</h2>
          <p>When you click on certain links on our site and make a purchase, we may receive a small commission at no additional cost to you. This helps us maintain our website and continue providing free, high-quality content.</p>
          <h2 className="text-xl font-bold text-slate-900 mt-8">Our Commitment</h2>
          <p>Affiliate relationships do not influence our editorial content, product reviews, or recommendations. We only recommend products and services that we believe provide value to our readers.</p>
          <h2 className="text-xl font-bold text-slate-900 mt-8">Questions?</h2>
          <p>If you have questions about our affiliate relationships, please contact us at info@thegarage.guide.</p>
        </div>
      </section>
    </main>
  )
}
