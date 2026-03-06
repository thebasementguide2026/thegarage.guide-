import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About The Garage Guide | Expert Garage Improvement Resources',
  description: 'Learn about The Garage Guide - your trusted resource for garage organization, improvement, and maintenance information.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About The Garage Guide</h1>
          <p className="text-xl text-slate-300">
            Your trusted resource for garage improvement information and guidance
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
          <p className="text-slate-600 mb-6">
            The Garage Guide was created to help homeowners navigate the often overlooked world of garage improvement. Whether you are organizing your space, upgrading your floor, installing new storage, or dealing with repairs, we provide clear, expert-backed information to help you make informed decisions.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">What We Cover</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-2">Organization Guides</h3>
              <p className="text-slate-600 text-sm">Step-by-step guidance on garage organization, storage systems, and layout planning.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-2">Maintenance Tips</h3>
              <p className="text-slate-600 text-sm">Regular maintenance schedules, seasonal care, and preventive upkeep advice.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-2">Cost Information</h3>
              <p className="text-slate-600 text-sm">Detailed cost breakdowns for floor coatings, door replacements, conversions, and more.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-2">Problem Solving</h3>
              <p className="text-slate-600 text-sm">Troubleshooting common garage issues and knowing when to call a professional.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Get Expert Help</h2>
          <p className="text-slate-600 mb-6">
            Need professional assistance with your garage? We connect homeowners with qualified, local garage improvement professionals.
          </p>
          <Link href="/get-quote" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Free Quotes
          </Link>
        </div>
      </section>
    </main>
  );
}
