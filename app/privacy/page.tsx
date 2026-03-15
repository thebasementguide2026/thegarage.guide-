import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Privacy Policy | The Garage Guide',
  description: 'Privacy policy for The Garage Guide website.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
            <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-slate-300">Last updated: January 2026</p>
        </div>
      </section>
      <section className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg max-w-none text-slate-700">
          <h2 className="text-xl font-bold text-slate-900">Information We Collect</h2>
          <p>When you use The Garage Guide, we may collect information you provide directly, such as your name, email address, phone number, and zip code when you submit a quote request form.</p>
          <h2 className="text-xl font-bold text-slate-900 mt-8">How We Use Your Information</h2>
          <p>We use the information we collect to connect you with qualified garage professionals, improve our content and services, and communicate with you about your requests.</p>
          <h2 className="text-xl font-bold text-slate-900 mt-8">Third-Party Services</h2>
          <p>We may share your quote request information with qualified garage professionals in your area. We also use analytics services to understand how visitors use our site.</p>
          <h2 className="text-xl font-bold text-slate-900 mt-8">Cookies</h2>
          <p>We use cookies and similar technologies to analyze traffic and improve your experience on our site.</p>
          <h2 className="text-xl font-bold text-slate-900 mt-8">Contact Us</h2>
          <p>If you have questions about this privacy policy, please contact us at privacy@thegarage.guide.</p>
        </div>
      </section>
    </main>
  )
}
