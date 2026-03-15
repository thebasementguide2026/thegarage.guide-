import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Terms of Use | The Garage Guide',
  description: 'Terms of use for The Garage Guide website.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumbs items={[{ label: 'Terms of Use' }]} />
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Use</h1>
          <p className="text-slate-300">Last updated: January 2026</p>
        </div>
      </section>
      <section className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg max-w-none text-slate-700">
          <h2 className="text-xl font-bold text-slate-900">Acceptance of Terms</h2>
          <p>By accessing and using The Garage Guide website, you accept and agree to be bound by these terms of use.</p>
          <h2 className="text-xl font-bold text-slate-900 mt-8">Use of Content</h2>
          <p>The content on this website is for informational purposes only. While we strive to provide accurate and up-to-date information, we make no warranties about the completeness or accuracy of the content.</p>
          <h2 className="text-xl font-bold text-slate-900 mt-8">Professional Advice</h2>
          <p>The information on this site is not a substitute for professional advice. Always consult with qualified professionals before undertaking any garage improvement project.</p>
          <h2 className="text-xl font-bold text-slate-900 mt-8">Limitation of Liability</h2>
          <p>The Garage Guide shall not be liable for any damages arising from the use of this website or reliance on the information provided.</p>
          <h2 className="text-xl font-bold text-slate-900 mt-8">Contact</h2>
          <p>For questions about these terms, contact us at terms@thegarage.guide.</p>
        </div>
      </section>
    </main>
  )
}
