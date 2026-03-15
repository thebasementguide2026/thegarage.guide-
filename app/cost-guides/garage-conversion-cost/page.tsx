import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Garage Conversion Cost 2026: Turn Your Garage Into Living Space | The Garage Guide',
  description: 'A garage conversion costs $6,000 to $50,000 depending on scope. Full cost breakdown for ADU, bedroom, home office, gym, and rental unit conversions with permits, ROI, and timeline.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does it cost to convert a garage into a bedroom?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A basic garage-to-bedroom conversion costs $8,000 to $25,000. This includes insulation, drywall, flooring, electrical, HVAC, an egress window, and a closet. Adding a bathroom increases the cost by $5,000 to $15,000.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a permit to convert my garage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Nearly all garage conversions require a building permit because they involve changing the use of the space. Electrical, plumbing, and structural changes each require separate permits in most jurisdictions. Converting without permits can result in fines and problems when selling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does a garage conversion add value to a home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A permitted garage conversion typically recovers 60-80% of its cost in added home value. A full ADU conversion with kitchen and bathroom can generate rental income of $800-$2,500 per month, providing ongoing ROI beyond the property value increase.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a garage conversion take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A basic conversion (home office or gym) takes 2-4 weeks. A bedroom conversion takes 4-8 weeks. A full ADU with kitchen and bathroom takes 8-16 weeks. Permit approval adds 2-12 weeks depending on your jurisdiction.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I convert my garage back later?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but reversing a conversion costs $3,000 to $10,000 depending on how extensively the space was modified. Keeping the garage door opening intact (even if walled over) makes reversal easier and cheaper.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Garage Conversion Cost 2026: Turn Your Garage Into Living Space',
  description: 'Complete cost breakdown for garage conversions including ADU, bedroom, office, gym, and rental units.',
  image: 'https://thegarage.guide/images/garageconversion.jpg',
  datePublished: '2026-03-10',
  dateModified: '2026-03-10',
  author: { '@type': 'Organization', name: 'The Garage Guide', url: 'https://thegarage.guide' },
  publisher: { '@type': 'Organization', name: 'The Garage Guide', url: 'https://thegarage.guide' },
}

const datasetSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Garage Conversion Cost Comparison 2026',
  description: 'Cost comparison data for different types of garage conversions including typical cost ranges, value added, ROI percentages, and income potential.',
  creator: { '@type': 'Organization', name: 'The Garage Guide' },
  variableMeasured: [
    { '@type': 'PropertyValue', name: 'Conversion Type', description: 'Type of garage conversion project' },
    { '@type': 'PropertyValue', name: 'Typical Cost', unitText: 'USD', description: 'Typical total cost range' },
    { '@type': 'PropertyValue', name: 'Value Added', unitText: 'USD', description: 'Estimated home value increase' },
    { '@type': 'PropertyValue', name: 'ROI', unitText: 'percent', description: 'Return on investment percentage' },
    { '@type': 'PropertyValue', name: 'Income Potential', unitText: 'USD/month', description: 'Monthly rental income potential' },
  ],
  data: [
    { 'Conversion Type': 'Home Office/Gym', 'Typical Cost': '$6,000-$15,000', 'Value Added': '$4,000-$10,000', 'ROI': '60-70%', 'Income Potential': 'N/A' },
    { 'Conversion Type': 'Bedroom (no bath)', 'Typical Cost': '$8,000-$25,000', 'Value Added': '$6,000-$18,000', 'ROI': '65-75%', 'Income Potential': 'N/A' },
    { 'Conversion Type': 'Bedroom + Bathroom', 'Typical Cost': '$15,000-$40,000', 'Value Added': '$12,000-$30,000', 'ROI': '70-80%', 'Income Potential': '$800-$1,500/mo' },
    { 'Conversion Type': 'Full ADU (kitchen + bath)', 'Typical Cost': '$25,000-$50,000', 'Value Added': '$20,000-$45,000', 'ROI': '75-90%', 'Income Potential': '$1,200-$2,500/mo' },
    { 'Conversion Type': 'Basic Studio/Rental', 'Typical Cost': '$20,000-$35,000', 'Value Added': '$15,000-$28,000', 'ROI': '70-80%', 'Income Potential': '$1,000-$2,000/mo' },
  ],
}

export default function GarageConversionCost() {
  return (
    <>
              <Breadcrumbs items={[{ label: 'Cost Guides', href: '/cost-guides' }, { label: 'Garage Conversion Cost' }]} />
      {/* Hero Section */}
      <div className='relative w-full h-[340px] md:h-[430px]'>
        <Image src='/images/garageconversion.jpg' alt='Garage Conversion Cost 2026 - Complete Guide' fill className='object-cover' priority />
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent' />
        <div className='absolute bottom-6 left-6 right-6'>
          <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-0.5 rounded mb-2'>GG</span>
          <span className='text-white/80 text-xs ml-2'>The Garage Guide</span>
          <p className='text-white/70 text-xs mt-1'>Updated Mar 2026 &middot; 25 min read</p>
        </div>
      </div>

      <div className='max-w-3xl mx-auto px-4'>
        {/* Title */}
        <section className='mb-8 mt-8'>
          <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-0.5 rounded mb-2'>Cost Guide</span>
          <h1 className='text-3xl md:text-4xl font-bold text-slate-900 mb-3'>Garage Conversion Cost 2026</h1>
          <p className='text-lg text-slate-600'>Turn your garage into living space — full cost breakdown, permits, ROI, and what to expect.</p>
        </section>

        {/* Intro */}
        <section className='mb-8'>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>A garage conversion is one of the most cost-effective ways to add living space to your home. Converting an existing structure avoids the foundation, framing, and roofing costs of a traditional addition, cutting the per-square-foot price by 40-60%.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Total costs range from $6,000 for a basic home office conversion to $50,000 or more for a full ADU with kitchen and bathroom. The biggest cost variables are plumbing (adding a bathroom), HVAC, and local permit requirements.</p>
          <p className='text-slate-700 text-sm leading-relaxed'>This guide breaks down every cost category, compares conversion types, covers permit requirements, and calculates the ROI so you can make an informed decision.</p>
        </section>

        {/* Cost Breakdown by Category */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Cost Breakdown by Category</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Every garage conversion shares the same core cost categories. The table below shows what each category typically costs and which conversion types require it.</p>
          <div className='overflow-x-auto mb-4'>
            <table className='w-full border border-slate-200 rounded-lg text-sm'>
              <thead className='bg-slate-100'>
                <tr>
                  <th className='p-3 text-left text-slate-800'>Category</th>
                  <th className='p-3 text-left text-slate-800'>Cost Range</th>
                  <th className='p-3 text-left text-slate-800'>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-3 text-slate-700'>Permits & Plans</td><td className='p-3 text-slate-700'>$500-$3,000</td><td className='p-3 text-slate-600'>Required for all conversions; ADU permits cost more</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-3 text-slate-700'>Insulation</td><td className='p-3 text-slate-700'>$1,000-$3,000</td><td className='p-3 text-slate-600'>Walls, ceiling, and garage door or replacement wall</td></tr>
                <tr className='border-b border-slate-200'><td className='p-3 text-slate-700'>Drywall & Finishing</td><td className='p-3 text-slate-700'>$1,500-$4,000</td><td className='p-3 text-slate-600'>Includes taping, mudding, and painting</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-3 text-slate-700'>Flooring</td><td className='p-3 text-slate-700'>$1,000-$4,000</td><td className='p-3 text-slate-600'>LVP or tile over leveled concrete slab</td></tr>
                <tr className='border-b border-slate-200'><td className='p-3 text-slate-700'>Electrical</td><td className='p-3 text-slate-700'>$1,000-$4,000</td><td className='p-3 text-slate-600'>New circuits, outlets, lighting, and panel upgrade if needed</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-3 text-slate-700'>HVAC</td><td className='p-3 text-slate-700'>$1,500-$5,000</td><td className='p-3 text-slate-600'>Mini-split is most common; ductwork extension is alternative</td></tr>
                <tr className='border-b border-slate-200'><td className='p-3 text-slate-700'>Plumbing (bathroom)</td><td className='p-3 text-slate-700'>$3,000-$10,000</td><td className='p-3 text-slate-600'>Only if adding bathroom; proximity to existing lines matters</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-3 text-slate-700'>Plumbing (kitchen)</td><td className='p-3 text-slate-700'>$2,000-$8,000</td><td className='p-3 text-slate-600'>ADU only; sink, dishwasher, gas line if needed</td></tr>
                <tr className='border-b border-slate-200'><td className='p-3 text-slate-700'>Windows & Egress</td><td className='p-3 text-slate-700'>$500-$3,000</td><td className='p-3 text-slate-600'>Bedrooms require egress window per building code</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-3 text-slate-700'>Garage Door Removal</td><td className='p-3 text-slate-700'>$1,000-$4,000</td><td className='p-3 text-slate-600'>Framing and finishing the wall where the door was</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Conversion Types */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Conversion Types & Total Costs</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>The total cost depends on what you are converting the garage into. Here are the five most common conversion types with realistic cost ranges.</p>

          {/* Home Office / Gym */}
          <div className='bg-slate-50 border border-slate-200 rounded-lg p-5 mb-4'>
            <h3 className='text-lg font-semibold text-slate-900 mb-2'>Home Office or Gym — $6,000 to $15,000</h3>
            <p className='text-slate-700 text-sm leading-relaxed mb-3'>The simplest and cheapest conversion. No plumbing needed. The scope includes insulation, drywall, flooring, electrical upgrades (dedicated circuits for equipment), HVAC, and lighting. Many homeowners keep the garage door functional for flexibility.</p>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
              <div className='bg-white border border-slate-200 rounded p-3'><p className='text-xs text-slate-500'>Timeline</p><p className='text-sm font-semibold text-slate-800'>2-4 weeks</p></div>
              <div className='bg-white border border-slate-200 rounded p-3'><p className='text-xs text-slate-500'>Permits</p><p className='text-sm font-semibold text-slate-800'>Basic</p></div>
              <div className='bg-white border border-slate-200 rounded p-3'><p className='text-xs text-slate-500'>Plumbing</p><p className='text-sm font-semibold text-slate-800'>None</p></div>
              <div className='bg-white border border-slate-200 rounded p-3'><p className='text-xs text-slate-500'>ROI</p><p className='text-sm font-semibold text-slate-800'>60-70%</p></div>
            </div>
          </div>

          {/* Bedroom */}
          <div className='bg-slate-50 border border-slate-200 rounded-lg p-5 mb-4'>
            <h3 className='text-lg font-semibold text-slate-900 mb-2'>Bedroom (No Bathroom) — $8,000 to $25,000</h3>
            <p className='text-slate-700 text-sm leading-relaxed mb-3'>Requires everything in the office conversion plus an egress window (building code requirement for bedrooms), a closet, and the garage door replaced with a framed, insulated wall. Sound insulation between the new bedroom and the house is important if the garage shares a wall with living spaces.</p>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
              <div className='bg-white border border-slate-200 rounded p-3'><p className='text-xs text-slate-500'>Timeline</p><p className='text-sm font-semibold text-slate-800'>4-8 weeks</p></div>
              <div className='bg-white border border-slate-200 rounded p-3'><p className='text-xs text-slate-500'>Permits</p><p className='text-sm font-semibold text-slate-800'>Building + Electrical</p></div>
              <div className='bg-white border border-slate-200 rounded p-3'><p className='text-xs text-slate-500'>Plumbing</p><p className='text-sm font-semibold text-slate-800'>None</p></div>
              <div className='bg-white border border-slate-200 rounded p-3'><p className='text-xs text-slate-500'>ROI</p><p className='text-sm font-semibold text-slate-800'>65-75%</p></div>
            </div>
          </div>

          {/* Bedroom + Bathroom */}
          <div className='bg-slate-50 border border-slate-200 rounded-lg p-5 mb-4'>
            <h3 className='text-lg font-semibold text-slate-900 mb-2'>Bedroom + Bathroom — $15,000 to $40,000</h3>
            <p className='text-slate-700 text-sm leading-relaxed mb-3'>Adding a bathroom is the single biggest cost jump in any garage conversion. You need to tie into existing drain lines (or install new ones), add a water heater or extend hot water, and meet ventilation requirements. Costs are lower when the garage shares a wall with an existing bathroom because the plumbing lines are closer.</p>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
              <div className='bg-white border border-slate-200 rounded p-3'><p className='text-xs text-slate-500'>Timeline</p><p className='text-sm font-semibold text-slate-800'>6-10 weeks</p></div>
              <div className='bg-white border border-slate-200 rounded p-3'><p className='text-xs text-slate-500'>Permits</p><p className='text-sm font-semibold text-slate-800'>Building + Plumbing</p></div>
              <div className='bg-white border border-slate-200 rounded p-3'><p className='text-xs text-slate-500'>Plumbing</p><p className='text-sm font-semibold text-slate-800'>Full bathroom</p></div>
              <div className='bg-white border border-slate-200 rounded p-3'><p className='text-xs text-slate-500'>ROI</p><p className='text-sm font-semibold text-slate-800'>70-80%</p></div>
            </div>
          </div>

          {/* Full ADU */}
          <div className='bg-slate-50 border border-slate-200 rounded-lg p-5 mb-4'>
            <h3 className='text-lg font-semibold text-slate-900 mb-2'>Full ADU (Kitchen + Bathroom) — $25,000 to $50,000</h3>
            <p className='text-slate-700 text-sm leading-relaxed mb-3'>A full accessory dwelling unit includes a kitchen, bathroom, living area, and sleeping area. This is the most expensive conversion but also offers the highest ROI through rental income. ADU-specific permits are required in most jurisdictions, and some areas have streamlined the approval process in recent years.</p>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
              <div className='bg-white border border-slate-200 rounded p-3'><p className='text-xs text-slate-500'>Timeline</p><p className='text-sm font-semibold text-slate-800'>8-16 weeks</p></div>
              <div className='bg-white border border-slate-200 rounded p-3'><p className='text-xs text-slate-500'>Permits</p><p className='text-sm font-semibold text-slate-800'>ADU + All trades</p></div>
              <div className='bg-white border border-slate-200 rounded p-3'><p className='text-xs text-slate-500'>Plumbing</p><p className='text-sm font-semibold text-slate-800'>Kitchen + Bath</p></div>
              <div className='bg-white border border-slate-200 rounded p-3'><p className='text-xs text-slate-500'>Income</p><p className='text-sm font-semibold text-slate-800'>$1,200-$2,500/mo</p></div>
            </div>
          </div>

          {/* Basic Studio */}
          <div className='bg-slate-50 border border-slate-200 rounded-lg p-5 mb-4'>
            <h3 className='text-lg font-semibold text-slate-900 mb-2'>Basic Studio / Rental Unit — $20,000 to $35,000</h3>
            <p className='text-slate-700 text-sm leading-relaxed mb-3'>A studio conversion includes a bathroom and a kitchenette (small sink, mini-fridge, microwave) but not a full kitchen. This is the sweet spot for rental income: lower build cost than a full ADU with rental rates that are 70-80% of a full unit in most markets.</p>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
              <div className='bg-white border border-slate-200 rounded p-3'><p className='text-xs text-slate-500'>Timeline</p><p className='text-sm font-semibold text-slate-800'>6-12 weeks</p></div>
              <div className='bg-white border border-slate-200 rounded p-3'><p className='text-xs text-slate-500'>Permits</p><p className='text-sm font-semibold text-slate-800'>Building + Plumbing</p></div>
              <div className='bg-white border border-slate-200 rounded p-3'><p className='text-xs text-slate-500'>Plumbing</p><p className='text-sm font-semibold text-slate-800'>Bath + Kitchenette</p></div>
              <div className='bg-white border border-slate-200 rounded p-3'><p className='text-xs text-slate-500'>Income</p><p className='text-sm font-semibold text-slate-800'>$1,000-$2,000/mo</p></div>
            </div>
          </div>
        </section>

        {/* ROI */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Return on Investment</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>The ROI varies significantly by conversion type. Simple conversions recover less of their cost in home value, but conversions that generate rental income can pay for themselves within a few years.</p>
          <div className='overflow-x-auto mb-4'>
            <table className='w-full border border-slate-200 rounded-lg text-sm'>
              <thead className='bg-slate-100'>
                <tr>
                  <th className='p-3 text-left text-slate-800'>Conversion Type</th>
                  <th className='p-3 text-left text-slate-800'>Typical Cost</th>
                  <th className='p-3 text-left text-slate-800'>Value Added</th>
                  <th className='p-3 text-left text-slate-800'>ROI</th>
                  <th className='p-3 text-left text-slate-800'>Income Potential</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-3 text-slate-700'>Home Office/Gym</td><td className='p-3 text-slate-700'>$6,000-$15,000</td><td className='p-3 text-slate-700'>$4,000-$10,000</td><td className='p-3 text-slate-700'>60-70%</td><td className='p-3 text-slate-600'>N/A</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-3 text-slate-700'>Bedroom (no bath)</td><td className='p-3 text-slate-700'>$8,000-$25,000</td><td className='p-3 text-slate-700'>$6,000-$18,000</td><td className='p-3 text-slate-700'>65-75%</td><td className='p-3 text-slate-600'>N/A</td></tr>
                <tr className='border-b border-slate-200'><td className='p-3 text-slate-700'>Bedroom + Bathroom</td><td className='p-3 text-slate-700'>$15,000-$40,000</td><td className='p-3 text-slate-700'>$12,000-$30,000</td><td className='p-3 text-slate-700'>70-80%</td><td className='p-3 text-slate-600'>$800-$1,500/mo</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-3 text-slate-700'>Full ADU</td><td className='p-3 text-slate-700'>$25,000-$50,000</td><td className='p-3 text-slate-700'>$20,000-$45,000</td><td className='p-3 text-slate-700'>75-90%</td><td className='p-3 text-slate-600'>$1,200-$2,500/mo</td></tr>
                <tr className='border-b border-slate-200'><td className='p-3 text-slate-700'>Basic Studio/Rental</td><td className='p-3 text-slate-700'>$20,000-$35,000</td><td className='p-3 text-slate-700'>$15,000-$28,000</td><td className='p-3 text-slate-700'>70-80%</td><td className='p-3 text-slate-600'>$1,000-$2,000/mo</td></tr>
              </tbody>
            </table>
          </div>
          <div className='bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4'>
            <p className='text-slate-800 text-sm font-semibold mb-1'>The Rental Income Factor</p>
            <p className='text-slate-700 text-sm leading-relaxed'>A full ADU that costs $40,000 and rents for $1,500/month generates $18,000/year in gross income. Even after expenses, the conversion pays for itself in 3-4 years. This makes ADU conversions one of the highest-ROI home improvement projects available.</p>
          </div>
        </section>

        {/* What You Lose */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>What You Lose When Converting a Garage</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Converting a garage is not free space. You are trading existing functionality for new functionality. Consider these tradeoffs before committing.</p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
            <div className='border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-800 text-sm font-semibold mb-2'>Parking</p>
              <p className='text-slate-700 text-sm leading-relaxed'>You lose covered, secure parking. In areas with street parking restrictions, HOA rules, or harsh weather, this matters. Some buyers will walk away from a home without a functioning garage.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-800 text-sm font-semibold mb-2'>Storage</p>
              <p className='text-slate-700 text-sm leading-relaxed'>Garages store mowers, tools, bikes, holiday decorations, and overflow household items. You will need an alternative storage solution, which may mean building a shed ($1,500-$5,000) or renting a storage unit ($75-$200/month).</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-800 text-sm font-semibold mb-2'>Workshop Space</p>
              <p className='text-slate-700 text-sm leading-relaxed'>If you currently use the garage as a workshop, you lose that capability. Woodworking, car maintenance, and hobby projects need a dedicated space with ventilation and durable flooring that is hard to replicate elsewhere on your property.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-800 text-sm font-semibold mb-2'>Resale Considerations</p>
              <p className='text-slate-700 text-sm leading-relaxed'>Some buyers specifically want a garage. An unpermitted conversion can reduce your home value rather than increase it. Always pull permits and ensure the conversion meets code so it adds value at resale.</p>
            </div>
          </div>
        </section>

        {/* Permits */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Permits and Building Codes</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Permits are not optional for garage conversions. Converting without permits creates legal, insurance, and resale problems that far exceed the permit cost.</p>
          <div className='bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4'>
            <h3 className='text-sm font-semibold text-slate-800 mb-2'>What You Typically Need</h3>
            <ul className='list-disc list-inside text-slate-700 text-sm space-y-1'>
              <li>Building permit (required for all conversions that change the use of space)</li>
              <li>Electrical permit (new circuits, panel upgrades, hardwired fixtures)</li>
              <li>Plumbing permit (any new water supply or drain lines)</li>
              <li>Mechanical permit (HVAC installation or modification)</li>
              <li>ADU-specific permit (required in many jurisdictions for rental units)</li>
            </ul>
          </div>
          <div className='bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4'>
            <h3 className='text-sm font-semibold text-slate-800 mb-2'>Common Code Requirements</h3>
            <ul className='list-disc list-inside text-slate-700 text-sm space-y-1'>
              <li>Minimum ceiling height of 7 feet 6 inches for habitable space</li>
              <li>Egress window in every bedroom (minimum 5.7 sq ft opening)</li>
              <li>Smoke and carbon monoxide detectors</li>
              <li>Adequate ventilation in bathrooms and kitchens</li>
              <li>Energy code compliance (insulation R-values vary by climate zone)</li>
              <li>Fire separation between garage and living space if partial conversion</li>
            </ul>
          </div>
          <p className='text-slate-700 text-sm leading-relaxed'>Permit costs range from $500 to $3,000 depending on your jurisdiction and the scope of the conversion. ADU permits tend to cost more because they require additional plan review. Budget 2-12 weeks for permit approval.</p>
        </section>

        {/* FAQ */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Frequently Asked Questions</h2>

          <h3 className='text-base font-semibold text-slate-800 mb-2'>How much does it cost to convert a garage into a bedroom?</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>A basic garage-to-bedroom conversion costs $8,000 to $25,000. This includes insulation, drywall, flooring, electrical, HVAC, an egress window, and a closet. Adding a bathroom increases the cost by $5,000 to $15,000.</p>

          <h3 className='text-base font-semibold text-slate-800 mb-2'>Do I need a permit to convert my garage?</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Yes. Nearly all garage conversions require a building permit because they involve changing the use of the space. Converting without permits can result in fines and problems when selling your home.</p>

          <h3 className='text-base font-semibold text-slate-800 mb-2'>Does a garage conversion add value to a home?</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>A permitted garage conversion typically recovers 60-80% of its cost in added home value. A full ADU conversion can generate rental income of $800-$2,500 per month, providing ongoing ROI beyond the property value increase.</p>

          <h3 className='text-base font-semibold text-slate-800 mb-2'>How long does a garage conversion take?</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>A basic conversion takes 2-4 weeks. A bedroom conversion takes 4-8 weeks. A full ADU with kitchen and bathroom takes 8-16 weeks. Permit approval adds 2-12 weeks depending on your jurisdiction.</p>

          <h3 className='text-base font-semibold text-slate-800 mb-2'>Can I convert my garage back later?</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Yes, but reversing a conversion costs $3,000 to $10,000 depending on how extensively the space was modified. Keeping the garage door opening intact makes reversal easier and cheaper.</p>
        </section>

        {/* Related */}
        <section className='mb-12'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Related Articles</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Link href='/guides/attached-vs-detached-garage' className='block border border-slate-200 rounded-lg p-4 hover:border-amber-300 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-0.5 rounded mb-2'>Guide</span>
              <h3 className='text-base font-semibold text-slate-900 mb-1'>Attached vs Detached Garage</h3>
              <p className='text-slate-600 text-sm'>Pros, cons, costs, and resale value compared.</p>
            </Link>
            <Link href='/guides/garage-heater-guide' className='block border border-slate-200 rounded-lg p-4 hover:border-amber-300 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-0.5 rounded mb-2'>Guide</span>
              <h3 className='text-base font-semibold text-slate-900 mb-1'>Garage Heater Guide 2026</h3>
              <p className='text-slate-600 text-sm'>Types, BTU sizing, costs, and installation.</p>
            </Link>
            <Link href='/reviews/best-garage-heaters' className='block border border-slate-200 rounded-lg p-4 hover:border-amber-300 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-0.5 rounded mb-2'>Review</span>
              <h3 className='text-base font-semibold text-slate-900 mb-1'>Best Garage Heaters 2026</h3>
              <p className='text-slate-600 text-sm'>Top picks for every budget and garage size.</p>
            </Link>
            <Link href='/problems/garage-door-opener-not-working' className='block border border-slate-200 rounded-lg p-4 hover:border-amber-300 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-0.5 rounded mb-2'>Troubleshooting</span>
              <h3 className='text-base font-semibold text-slate-900 mb-1'>Garage Door Opener Not Working?</h3>
              <p className='text-slate-600 text-sm'>Complete troubleshooting guide for common issues.</p>
            </Link>
          </div>
        </section>

      </div>

                <LeadForm />

      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />
    </>
  )
}
