import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cracked Garage Floor: When to Worry, How to Fix It, and What It Costs | The Garage Guide',
  description: 'Every concrete garage floor cracks eventually. Learn which cracks are cosmetic vs structural, DIY repair steps, and when to resurface or replace. Fix costs from $5 to $7,000.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Are cracks in a garage floor normal?', acceptedAnswer: { '@type': 'Answer', text: 'Hairline cracks are completely normal. Nearly every concrete garage floor develops some shrinkage cracks within the first few years. As long as both sides of the crack are level and the crack is under 1/8 inch wide, there is no structural concern. Fill them to prevent water infiltration and widening, or leave them alone.' } },
    { '@type': 'Question', name: 'When should I worry about a cracked garage floor?', acceptedAnswer: { '@type': 'Answer', text: 'Worry when the crack is wider than 1/4 inch, one side is higher than the other, multiple new cracks appear over a short period, the floor is sinking or heaving, or water is seeping through the crack. These symptoms indicate movement in the subgrade or structural stress that needs professional evaluation.' } },
    { '@type': 'Question', name: 'How much does it cost to fix a cracked garage floor?', acceptedAnswer: { '@type': 'Answer', text: 'DIY crack filling costs $5 to $40 per crack depending on the product. Professional crack repair runs $200 to $600. Resurfacing a 2-car garage costs $1,500 to $4,000. Full slab replacement costs $3,000 to $7,000. Most homeowners with normal cosmetic cracks spend under $50 on DIY repairs.' } },
    { '@type': 'Question', name: 'Can I epoxy over a cracked garage floor?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, but repair the cracks first. Epoxy coatings are self-leveling but will not fill or bridge cracks. If you coat over unrepaired cracks, the cracks will telegraph through the epoxy within months. Repair all cracks, let the filler cure completely, then apply the coating system.' } },
    { '@type': 'Question', name: 'Does a cracked garage floor affect home value?', acceptedAnswer: { '@type': 'Answer', text: 'Minor cosmetic cracks typically do not affect home value. Significant structural cracks, sinking, or heaving can raise concerns during a home inspection and may reduce value or require repair before closing. A floor that has been properly repaired and coated actually looks better than an untreated concrete floor and can be a selling point.' } },
    { '@type': 'Question', name: 'Can I pour new concrete over a cracked garage floor?', acceptedAnswer: { '@type': 'Answer', text: 'In some cases, yes. A new concrete overlay (minimum 2 inches thick) can be poured over an existing slab if the existing slab is structurally sound and stable (not sinking or heaving). The existing surface must be cleaned and roughened for the new concrete to bond. This is less expensive than full replacement but adds height to the floor, which can create clearance issues at the garage door.' } },
    { '@type': 'Question', name: 'Why is my garage floor cracking in winter?', acceptedAnswer: { '@type': 'Answer', text: 'Freeze-thaw cycles are the most common cause of winter cracking. Water enters small pores and existing cracks, freezes and expands (increasing in volume by about 9%), widening the crack. Deicing salt tracked in by tires makes this worse by increasing the number of freeze-thaw cycles at the concrete surface. Seal cracks before winter and keep salt off the floor.' } },
    { '@type': 'Question', name: 'Is mudjacking or foam jacking worth it for a sunken garage floor?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, if the slab is structurally sound but has sunk due to soil settlement. Mudjacking ($3 to $6 per sq ft) pumps a cement slurry beneath the slab to lift it. Foam jacking ($5 to $25 per sq ft) uses expanding polyurethane foam, which is lighter and more precise. Both are significantly cheaper than slab replacement and can be completed in a few hours. Results typically last 5 to 10 years.' } },
  ],
}

const repairCostSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Garage Floor Crack Repair Methods: Cost Comparison',
  description: 'Comparison of garage floor crack repair methods with DIY and professional costs, best use cases, and expected longevity.',
  variableMeasured: [
    { '@type': 'PropertyValue', name: 'Concrete caulk or sealant', value: 'Best for: Hairline to 1/4 inch cracks. DIY: $5-$15/tube. Pro: $100-$300. Lasts 3-5 years' },
    { '@type': 'PropertyValue', name: 'Epoxy crack filler (pourable)', value: 'Best for: Cracks up to 1/2 inch. DIY: $10-$30/crack. Pro: $200-$500. Lasts 5-10 years' },
    { '@type': 'PropertyValue', name: 'Polyurethane crack filler', value: 'Best for: Cracks that may continue moving. DIY: $15-$40/crack. Pro: $200-$600. Lasts 5-10 years (flexible)' },
    { '@type': 'PropertyValue', name: 'Patching compound', value: 'Best for: Spalled areas, pitting, small holes. DIY: $15-$50/area. Pro: $200-$500. Lasts 3-7 years' },
    { '@type': 'PropertyValue', name: 'Concrete resurfacing overlay', value: 'Best for: Widespread surface damage. DIY: $200-$500 materials. Pro: $1,500-$4,000. Lasts 10-15 years' },
    { '@type': 'PropertyValue', name: 'Slabjacking (mudjacking or foam)', value: 'Best for: Sunken sections. Pro only: $500-$2,500. Lasts 5-10 years' },
    { '@type': 'PropertyValue', name: 'Epoxy or polyaspartic floor coating', value: 'Best for: Hiding repaired cracks, protection. DIY: $100-$300. Pro: $1,500-$5,000. Lasts 2-5yr DIY, 10-20yr pro' },
    { '@type': 'PropertyValue', name: 'Full slab replacement', value: 'Best for: Severely damaged/structural failure. Pro only: $3,000-$7,000. Lasts 30+ years' },
  ],
}

const diagnosticSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Garage Floor Crack Diagnostic Table',
  description: 'Visual diagnostic guide matching crack appearance to type, worry level, and recommended action.',
  variableMeasured: [
    { '@type': 'PropertyValue', name: 'Hairline cracks under 1/8 inch, no height difference', value: 'Shrinkage crack (cosmetic). Worry: Low. Optional fill with concrete caulk.' },
    { '@type': 'PropertyValue', name: 'Crack along a control joint', value: 'Designed crack (intentional). Worry: None. Working as intended.' },
    { '@type': 'PropertyValue', name: 'Crack 1/8 to 1/4 inch wide, both sides level', value: 'Moderate shrinkage or minor settlement. Worry: Low-Moderate. Fill with epoxy or polyurethane.' },
    { '@type': 'PropertyValue', name: 'Crack wider than 1/4 inch', value: 'Significant settlement or structural. Worry: Moderate-High. Professional evaluation recommended.' },
    { '@type': 'PropertyValue', name: 'One side higher than the other', value: 'Differential settlement. Worry: High. Professional evaluation required.' },
    { '@type': 'PropertyValue', name: 'Multiple new cracks appearing quickly', value: 'Active movement. Worry: High. Professional evaluation required.' },
    { '@type': 'PropertyValue', name: 'Spider web pattern across large area', value: 'Subgrade failure. Worry: High. Likely needs resurfacing or replacement.' },
    { '@type': 'PropertyValue', name: 'Crack with water seeping through', value: 'Hydrostatic pressure. Worry: Moderate-High. Seal crack and address water source.' },
    { '@type': 'PropertyValue', name: 'Floor heaving upward', value: 'Frost heave or expansive soil. Worry: High. Professional evaluation required.' },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cracked Garage Floor: When to Worry, How to Fix It, and What It Costs',
  description: 'Every concrete garage floor cracks eventually. Learn which cracks are cosmetic vs structural, DIY repair steps, and when to resurface or replace.',
  image: 'https://thegarage.guide/images/crackedgarage.jpg',
  datePublished: '2026-03-10',
  dateModified: '2026-03-10',
  author: { '@type': 'Organization', name: 'The Garage Guide', url: 'https://thegarage.guide' },
  publisher: { '@type': 'Organization', name: 'The Garage Guide', url: 'https://thegarage.guide' },
}

export default function CrackedGarageFloor() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(repairCostSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(diagnosticSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
<main>
      {/* Hero Section */}
      <div className='relative w-full' style={{ minHeight: '420px' }}>
        <Image src='/images/crackedgarage.jpg' alt='Cracked concrete garage floor showing various crack types' fill className='object-cover' priority />
        <div className='absolute inset-0 bg-black/55' />
        <div className='relative z-10 flex flex-col justify-end h-full px-6 py-10 max-w-4xl mx-auto'>
          <span className='inline-block bg-orange-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded mb-3 w-fit'>Problem</span>
          <h1 className='text-3xl md:text-5xl font-bold text-white leading-tight'>Cracked Garage Floor: <span className='text-orange-400'>When to Worry, How to Fix It, and What It Costs</span></h1>
          <p className='mt-3 text-lg text-slate-200 max-w-2xl'>Every concrete garage floor cracks. Learn which ones matter and what each repair costs.</p>
          <div className='flex items-center gap-3 mt-5'>
            <div className='w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm'>GG</div>
            <div>
              <p className='text-white font-semibold text-sm'>The Garage Guide</p>
              <p className='text-slate-300 text-xs'>Updated Mar 2026 &middot; 22 min read</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='max-w-4xl mx-auto px-4 py-10'>

        {/* Intro */}
        <p className='text-lg text-slate-700 mb-4'>Every concrete garage floor cracks eventually. Concrete shrinks as it cures, expands and contracts with temperature changes, and settles as the soil beneath it shifts. The question is not whether your floor will crack. The question is whether the cracks you have are cosmetic &mdash; ignore or cheap fix &mdash; or structural &mdash; fix now before they get expensive.</p>
        <p className='text-slate-700 mb-6'>This guide covers every type of garage floor crack, how to tell which ones matter, what each repair costs, and when it makes more sense to resurface or replace the floor entirely. If you are considering a floor coating to cover repaired cracks, see our <Link href='/cost-guides/garage-floor-coating-cost' className='text-orange-600 hover:underline font-medium'>garage floor coating cost guide</Link> and <Link href='/reviews/best-garage-floor-epoxy' className='text-orange-600 hover:underline font-medium'>best epoxy kits</Link>.</p>

        {/* Cosmetic vs Structural Diagnostic Table */}
        <section className='mb-10'>
          <h2 className='text-2xl font-bold text-slate-900 mb-2'>Cosmetic vs Structural: How to Tell the Difference</h2>
          <p className='text-slate-600 mb-4'>This is the only thing that matters. Use this table to classify your cracks in 30 seconds.</p>
          <div className='overflow-x-auto rounded-xl border border-slate-200'>
            <table className='w-full text-sm'>
              <thead className='bg-slate-800 text-white'>
                <tr><th className='px-4 py-3 text-left'>What You See</th><th className='px-4 py-3 text-left'>Type</th><th className='px-4 py-3 text-left'>Worry Level</th><th className='px-4 py-3 text-left'>What to Do</th></tr>
              </thead>
              <tbody className='divide-y divide-slate-200'>
                <tr className='bg-green-50'><td className='px-4 py-3'>Hairline cracks under 1/8 inch wide, no height difference between sides</td><td className='px-4 py-3'>Shrinkage crack (cosmetic)</td><td className='px-4 py-3 font-semibold text-green-700'>Low</td><td className='px-4 py-3'>Optional fill with concrete caulk for appearance. No structural concern.</td></tr>
                <tr className='bg-green-50'><td className='px-4 py-3'>Crack along a control joint (the scored lines in the floor)</td><td className='px-4 py-3'>Designed crack (intentional)</td><td className='px-4 py-3 font-semibold text-green-700'>None</td><td className='px-4 py-3'>This is working as intended. The control joint exists to control where cracks form.</td></tr>
                <tr className='bg-yellow-50'><td className='px-4 py-3'>Crack 1/8 to 1/4 inch wide, both sides level</td><td className='px-4 py-3'>Moderate shrinkage or minor settlement</td><td className='px-4 py-3 font-semibold text-yellow-700'>Low to Moderate</td><td className='px-4 py-3'>Fill with epoxy or polyurethane crack filler to prevent water infiltration and further widening.</td></tr>
                <tr className='bg-orange-50'><td className='px-4 py-3'>Crack wider than 1/4 inch</td><td className='px-4 py-3'>Significant settlement or structural movement</td><td className='px-4 py-3 font-semibold text-orange-700'>Moderate to High</td><td className='px-4 py-3'>Professional evaluation recommended. Fill and monitor at minimum.</td></tr>
                <tr className='bg-red-50'><td className='px-4 py-3'>One side of the crack is higher than the other</td><td className='px-4 py-3'>Differential settlement</td><td className='px-4 py-3 font-semibold text-red-700'>High</td><td className='px-4 py-3'>Professional evaluation required. The subgrade has shifted.</td></tr>
                <tr className='bg-red-50'><td className='px-4 py-3'>Multiple new cracks appearing over a short period</td><td className='px-4 py-3'>Active movement</td><td className='px-4 py-3 font-semibold text-red-700'>High</td><td className='px-4 py-3'>Professional evaluation required. Something beneath the slab is changing.</td></tr>
                <tr className='bg-red-50'><td className='px-4 py-3'>Spider web pattern of cracks across a large area</td><td className='px-4 py-3'>Subgrade failure or original pour issue</td><td className='px-4 py-3 font-semibold text-red-700'>High</td><td className='px-4 py-3'>Likely needs resurfacing or replacement. The slab integrity is compromised.</td></tr>
                <tr className='bg-orange-50'><td className='px-4 py-3'>Crack with water seeping through</td><td className='px-4 py-3'>Hydrostatic pressure from below</td><td className='px-4 py-3 font-semibold text-orange-700'>Moderate to High</td><td className='px-4 py-3'>Seal the crack and address the water source. May need drainage improvements.</td></tr>
                <tr className='bg-red-50'><td className='px-4 py-3'>Floor heaving upward (sections pushed up)</td><td className='px-4 py-3'>Frost heave or expansive soil</td><td className='px-4 py-3 font-semibold text-red-700'>High</td><td className='px-4 py-3'>Professional evaluation required. Structural concern.</td></tr>
              </tbody>
            </table>
          </div>
          <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4'>
            <p className='text-blue-800 font-semibold'>The quick rule:</p>
            <p className='text-blue-700 text-sm'>If both sides of the crack are level with each other and the crack is under 1/4 inch wide, you can DIY the repair. If one side is higher, the crack is growing, or the floor is sinking or heaving, call a professional.</p>
          </div>
        </section>

        {/* Why Garage Floors Crack */}
        <section className='mb-10'>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Why Garage Floors Crack</h2>
          <p className='text-slate-600 mb-4'>Understanding the cause helps you choose the right fix and prevent future cracks.</p>
          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-xl p-5'><h3 className='font-bold text-slate-900 mb-1'>Shrinkage during curing</h3><p className='text-slate-700 text-sm'>Concrete loses moisture as it cures, and it shrinks as it dries. This shrinkage creates hairline cracks, especially if the concrete was mixed with too much water, cured too quickly, or was poured in hot weather. These are the most common cracks and are almost always cosmetic.</p></div>
            <div className='bg-white border border-slate-200 rounded-xl p-5'><h3 className='font-bold text-slate-900 mb-1'>Settlement</h3><p className='text-slate-700 text-sm'>The soil beneath the slab compacts over time, especially if it was not properly compacted before the pour. Some areas settle more than others, creating uneven support. The slab cracks where the supported and unsupported zones meet. Settlement cracks are wider than shrinkage cracks and often show a height difference between sides.</p></div>
            <div className='bg-white border border-slate-200 rounded-xl p-5'><h3 className='font-bold text-slate-900 mb-1'>Freeze-thaw cycles</h3><p className='text-slate-700 text-sm'>Water enters small cracks and pores in the concrete. When it freezes, it expands, widening the crack. When it thaws, more water enters the now-larger crack. Over years, this cycle progressively destroys concrete. This is the primary cause of spalling (surface flaking) and crack widening in cold climates.</p></div>
            <div className='bg-white border border-slate-200 rounded-xl p-5'><h3 className='font-bold text-slate-900 mb-1'>Heavy loads</h3><p className='text-slate-700 text-sm'>Your garage floor was designed for a specific load. Repeatedly parking heavy vehicles, storing dense materials, or using a car lift without a reinforced pad can stress the slab beyond its capacity.</p></div>
            <div className='bg-white border border-slate-200 rounded-xl p-5'><h3 className='font-bold text-slate-900 mb-1'>Missing or insufficient control joints</h3><p className='text-slate-700 text-sm'>Control joints are the scored lines cut into a garage floor that create intentional weak points. Cracks follow these joints instead of forming randomly. If the builder did not cut enough joints (a standard 2-car garage should have at least 4 to 6 sections), cracks will form unpredictably across the surface.</p></div>
            <div className='bg-white border border-slate-200 rounded-xl p-5'><h3 className='font-bold text-slate-900 mb-1'>Tree root pressure</h3><p className='text-slate-700 text-sm'>Roots from nearby trees can grow beneath the slab and push upward, cracking and heaving sections of the floor. This is more common in garages built near mature trees with aggressive root systems.</p></div>
            <div className='bg-white border border-slate-200 rounded-xl p-5'><h3 className='font-bold text-slate-900 mb-1'>Poor original construction</h3><p className='text-slate-700 text-sm'>Insufficient slab thickness (less than 4 inches), missing or inadequate wire mesh/rebar reinforcement, poor subgrade preparation, and wrong concrete mix all contribute to premature cracking. Unfortunately, you cannot fix bad construction after the fact. You can only repair the symptoms.</p></div>
          </div>
        </section>

        {/* Repair Options Table */}
        <section className='mb-10'>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Repair Options Ranked by Cost</h2>
          <div className='overflow-x-auto rounded-xl border border-slate-200'>
            <table className='w-full text-sm'>
              <thead className='bg-slate-800 text-white'>
                <tr><th className='px-4 py-3 text-left'>Repair Method</th><th className='px-4 py-3 text-left'>Best For</th><th className='px-4 py-3 text-left'>DIY?</th><th className='px-4 py-3 text-left'>Cost (DIY)</th><th className='px-4 py-3 text-left'>Cost (Pro)</th><th className='px-4 py-3 text-left'>Longevity</th></tr>
              </thead>
              <tbody className='divide-y divide-slate-200'>
                <tr className='bg-white'><td className='px-4 py-3 font-medium'>Concrete caulk or sealant</td><td className='px-4 py-3'>Hairline to 1/4&quot; cracks</td><td className='px-4 py-3 text-green-700 font-semibold'>Yes</td><td className='px-4 py-3'>$5 &ndash; $15/tube</td><td className='px-4 py-3'>$100 &ndash; $300</td><td className='px-4 py-3'>3 &ndash; 5 years</td></tr>
                <tr className='bg-slate-50'><td className='px-4 py-3 font-medium'>Epoxy crack filler (pourable)</td><td className='px-4 py-3'>Cracks up to 1/2&quot;</td><td className='px-4 py-3 text-green-700 font-semibold'>Yes</td><td className='px-4 py-3'>$10 &ndash; $30/crack</td><td className='px-4 py-3'>$200 &ndash; $500</td><td className='px-4 py-3'>5 &ndash; 10 years</td></tr>
                <tr className='bg-white'><td className='px-4 py-3 font-medium'>Polyurethane crack filler</td><td className='px-4 py-3'>Cracks that may continue moving</td><td className='px-4 py-3 text-green-700 font-semibold'>Yes</td><td className='px-4 py-3'>$15 &ndash; $40/crack</td><td className='px-4 py-3'>$200 &ndash; $600</td><td className='px-4 py-3'>5 &ndash; 10 years (flexible)</td></tr>
                <tr className='bg-slate-50'><td className='px-4 py-3 font-medium'>Patching compound</td><td className='px-4 py-3'>Spalled areas, pitting, small holes</td><td className='px-4 py-3 text-green-700 font-semibold'>Yes</td><td className='px-4 py-3'>$15 &ndash; $50/area</td><td className='px-4 py-3'>$200 &ndash; $500</td><td className='px-4 py-3'>3 &ndash; 7 years</td></tr>
                <tr className='bg-white'><td className='px-4 py-3 font-medium'>Concrete resurfacing overlay</td><td className='px-4 py-3'>Widespread surface damage</td><td className='px-4 py-3 text-yellow-700 font-semibold'>Maybe</td><td className='px-4 py-3'>$200 &ndash; $500 materials</td><td className='px-4 py-3'>$1,500 &ndash; $4,000</td><td className='px-4 py-3'>10 &ndash; 15 years</td></tr>
                <tr className='bg-slate-50'><td className='px-4 py-3 font-medium'>Slabjacking (mudjacking or foam)</td><td className='px-4 py-3'>Sunken sections needing leveling</td><td className='px-4 py-3 text-red-700 font-semibold'>No</td><td className='px-4 py-3'>N/A</td><td className='px-4 py-3'>$500 &ndash; $2,500</td><td className='px-4 py-3'>5 &ndash; 10 years</td></tr>
                <tr className='bg-white'><td className='px-4 py-3 font-medium'>Epoxy or polyaspartic floor coating</td><td className='px-4 py-3'>Hiding repaired cracks, protection</td><td className='px-4 py-3 text-yellow-700 font-semibold'>Maybe</td><td className='px-4 py-3'>$100 &ndash; $300 kit</td><td className='px-4 py-3'>$1,500 &ndash; $5,000</td><td className='px-4 py-3'>2 &ndash; 5yr DIY / 10 &ndash; 20yr pro</td></tr>
                <tr className='bg-slate-50'><td className='px-4 py-3 font-medium'>Full slab replacement</td><td className='px-4 py-3'>Severely damaged or structural failure</td><td className='px-4 py-3 text-red-700 font-semibold'>No</td><td className='px-4 py-3'>N/A</td><td className='px-4 py-3'>$3,000 &ndash; $7,000</td><td className='px-4 py-3'>30+ years</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* DIY Crack Repair Step by Step */}
        <section className='mb-10'>
          <h2 className='text-2xl font-bold text-slate-900 mb-2'>DIY Crack Repair Step by Step</h2>
          <p className='text-slate-600 mb-4'>For cracks under 1/2 inch wide with no height difference between sides.</p>
          <div className='bg-slate-50 border border-slate-200 rounded-xl p-5 mb-4'>
            <p className='font-semibold text-slate-800 mb-2'>What you need:</p>
            <p className='text-slate-700 text-sm'>Wire brush or angle grinder with diamond wheel, shop vac, crack filler (epoxy or polyurethane), caulk gun or pour bottle, putty knife or trowel, and backer rod for cracks deeper than 1/2 inch.</p>
          </div>
          <div className='space-y-4'>
            <div className='flex gap-4 items-start bg-white border border-slate-200 rounded-xl p-5'><div className='w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0'>1</div><div><h3 className='font-bold text-slate-900'>Clean the crack</h3><p className='text-slate-700 text-sm'>Use a wire brush or angle grinder to remove loose concrete and debris from the crack edges. The goal is clean, solid concrete on both sides. Vacuum all dust and debris with a shop vac.</p></div></div>
            <div className='flex gap-4 items-start bg-white border border-slate-200 rounded-xl p-5'><div className='w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0'>2</div><div><h3 className='font-bold text-slate-900'>Widen narrow cracks slightly (routing)</h3><p className='text-slate-700 text-sm'>For hairline cracks, use an angle grinder with a diamond blade to create a small groove (1/4 inch wide, 1/4 inch deep). This gives the filler material something to grip. This step dramatically improves repair longevity.</p></div></div>
            <div className='flex gap-4 items-start bg-white border border-slate-200 rounded-xl p-5'><div className='w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0'>3</div><div><h3 className='font-bold text-slate-900'>Insert backer rod if needed</h3><p className='text-slate-700 text-sm'>For cracks deeper than 1/2 inch, push foam backer rod into the crack to a depth of about 1/2 inch below the surface. This prevents the filler from sinking too deep and wasting material.</p></div></div>
            <div className='flex gap-4 items-start bg-white border border-slate-200 rounded-xl p-5'><div className='w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0'>4</div><div><h3 className='font-bold text-slate-900'>Apply the filler</h3><p className='text-slate-700 text-sm'>For pourable epoxy or polyurethane, squeeze slowly along the length of the crack, slightly overfilling. For caulk-style products, apply in a continuous bead. Allow the filler to settle for 10 to 15 minutes and add more if it sinks.</p></div></div>
            <div className='flex gap-4 items-start bg-white border border-slate-200 rounded-xl p-5'><div className='w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0'>5</div><div><h3 className='font-bold text-slate-900'>Smooth the surface</h3><p className='text-slate-700 text-sm'>Use a putty knife or trowel to scrape excess filler flush with the floor surface. Work quickly before the filler begins to set.</p></div></div>
            <div className='flex gap-4 items-start bg-white border border-slate-200 rounded-xl p-5'><div className='w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0'>6</div><div><h3 className='font-bold text-slate-900'>Let it cure</h3><p className='text-slate-700 text-sm'>Follow the product&apos;s cure time &mdash; typically 4 to 24 hours for foot traffic, 48 to 72 hours for vehicle traffic. Do not park on repaired cracks until fully cured.</p></div></div>
          </div>
          <div className='bg-orange-50 border border-orange-200 rounded-lg p-4 mt-4'>
            <p className='text-orange-800 font-semibold'>Pro tip:</p>
            <p className='text-orange-700 text-sm'>If you plan to apply a floor coating afterward, do all crack repairs first and let them fully cure. Then apply the coating system over the repaired surface. For product picks, see our <Link href='/reviews/best-garage-floor-epoxy' className='text-orange-600 hover:underline font-medium'>best epoxy kits guide</Link>, and our <Link href='/cost-guides/epoxy-garage-floor-cost' className='text-orange-600 hover:underline font-medium'>epoxy floor cost guide</Link> breaks down DIY vs professional coating pricing.</p>
          </div>
        </section>

        {/* When to Resurface vs Replace */}
        <section className='mb-10'>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>When to Resurface vs Replace</h2>
          <div className='overflow-x-auto rounded-xl border border-slate-200'>
            <table className='w-full text-sm'>
              <thead className='bg-slate-800 text-white'>
                <tr><th className='px-4 py-3 text-left'>Factor</th><th className='px-4 py-3 text-left'>Resurface</th><th className='px-4 py-3 text-left'>Replace</th></tr>
              </thead>
              <tbody className='divide-y divide-slate-200'>
                <tr className='bg-white'><td className='px-4 py-3 font-medium'>Age of floor</td><td className='px-4 py-3'>Under 20 years</td><td className='px-4 py-3'>Over 20 years with widespread damage</td></tr>
                <tr className='bg-slate-50'><td className='px-4 py-3 font-medium'>Crack severity</td><td className='px-4 py-3'>Surface cracks, no height differences</td><td className='px-4 py-3'>Structural cracks, sinking, heaving</td></tr>
                <tr className='bg-white'><td className='px-4 py-3 font-medium'>% of floor affected</td><td className='px-4 py-3'>Less than 30% of surface</td><td className='px-4 py-3'>More than 30% of surface</td></tr>
                <tr className='bg-slate-50'><td className='px-4 py-3 font-medium'>Subgrade condition</td><td className='px-4 py-3'>Stable (no sinking or heaving)</td><td className='px-4 py-3'>Unstable (active settlement, drainage issues)</td></tr>
                <tr className='bg-white'><td className='px-4 py-3 font-medium'>Budget</td><td className='px-4 py-3'>$1,500 &ndash; $4,000</td><td className='px-4 py-3'>$3,000 &ndash; $7,000</td></tr>
                <tr className='bg-slate-50'><td className='px-4 py-3 font-medium'>Goal</td><td className='px-4 py-3'>Cosmetic restoration + protection</td><td className='px-4 py-3'>Structural reset + long-term solution</td></tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 text-sm mt-4'><strong>Resurfacing</strong> involves repairing cracks, then applying a thin (1/4 to 1/2 inch) concrete or polymer overlay that bonds to the existing slab. It restores the surface and can be coated with epoxy or polyaspartic for a finished look. It does NOT fix structural problems beneath the slab.</p>
          <p className='text-slate-700 text-sm mt-2'><strong>Replacement</strong> involves demolishing and removing the old slab, addressing subgrade issues (compaction, drainage, gravel base), and pouring a new slab with proper reinforcement and control joints. It is the only fix for structural failure.</p>
        </section>

                {/* How to Prevent Future Cracks */}
        <section className='mb-10'>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>How to Prevent Future Cracks</h2>
          <p className='text-slate-600 mb-4'>You cannot completely prevent concrete from cracking, but you can significantly reduce the risk and severity with these measures.</p>
          <div className='space-y-4'>
            <div className='flex gap-4 items-start bg-white border border-slate-200 rounded-xl p-5'>
              <div className='w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-sm flex-shrink-0'>1</div>
              <div><h3 className='font-bold text-slate-900'>Control water drainage</h3><p className='text-slate-700 text-sm'>Keep gutters and downspouts directing water away from the garage. Grade soil so it slopes away from the foundation. Standing water near the slab edge is the number one cause of preventable cracking.</p></div>
            </div>
            <div className='flex gap-4 items-start bg-white border border-slate-200 rounded-xl p-5'>
              <div className='w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-sm flex-shrink-0'>2</div>
              <div><h3 className='font-bold text-slate-900'>Seal the floor</h3><p className='text-slate-700 text-sm'>Apply a penetrating concrete sealer every 2 to 3 years. This prevents moisture from entering the slab, which reduces freeze-thaw damage and efflorescence. For full protection, consider an epoxy or polyaspartic coating — see our <Link href='/reviews/best-garage-floor-epoxy' className='text-orange-600 hover:underline font-medium'>best epoxy kits guide</Link>.</p></div>
            </div>
            <div className='flex gap-4 items-start bg-white border border-slate-200 rounded-xl p-5'>
              <div className='w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-sm flex-shrink-0'>3</div>
              <div><h3 className='font-bold text-slate-900'>Maintain control joints</h3><p className='text-slate-700 text-sm'>Control joints (the lines cut into the slab) are designed to direct cracking to predictable locations. Keep them clean and filled with flexible sealant. If your slab has no control joints, consider having them cut by a professional.</p></div>
            </div>
            <div className='flex gap-4 items-start bg-white border border-slate-200 rounded-xl p-5'>
              <div className='w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-sm flex-shrink-0'>4</div>
              <div><h3 className='font-bold text-slate-900'>Avoid heavy point loads</h3><p className='text-slate-700 text-sm'>Use jack stands with wide bases. Place plywood under vehicle jacks. Distribute weight from heavy equipment like car lifts across a larger area to prevent stress cracking.</p></div>
            </div>
            <div className='flex gap-4 items-start bg-white border border-slate-200 rounded-xl p-5'>
              <div className='w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-sm flex-shrink-0'>5</div>
              <div><h3 className='font-bold text-slate-900'>Address tree roots</h3><p className='text-slate-700 text-sm'>Large trees near the garage can push roots under the slab, causing heaving and cracking. Consider root barriers or removal if trees are within 10 to 15 feet of the slab edge.</p></div>
            </div>
            <div className='flex gap-4 items-start bg-white border border-slate-200 rounded-xl p-5'>
              <div className='w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-sm flex-shrink-0'>6</div>
              <div><h3 className='font-bold text-slate-900'>Use de-icing products carefully</h3><p className='text-slate-700 text-sm'>Avoid calcium chloride and rock salt on garage floors — they accelerate surface spalling and can worsen existing cracks. Use sand for traction instead, or apply a sealer before winter.</p></div>
            </div>
          </div>
        </section>

                {/* FAQ Section */}
        <section className='mb-10'>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Frequently Asked Questions</h2>
          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-xl p-5'>
              <h3 className='font-bold text-slate-900 mb-2'>Are cracks in a garage floor normal?</h3>
              <p className='text-slate-700 text-sm'>Yes. Nearly every concrete garage floor will develop some cracks over time. Shrinkage cracks that appear within the first year are especially common and are usually cosmetic. Hairline cracks under 1/8 inch with no height difference between sides are generally not a structural concern.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-xl p-5'>
              <h3 className='font-bold text-slate-900 mb-2'>When should I worry about a cracked garage floor?</h3>
              <p className='text-slate-700 text-sm'>Worry when cracks are wider than 1/4 inch, when one side is higher than the other (differential settlement), when cracks are growing or spreading rapidly, or when water is actively seeping through. These signs suggest a structural or drainage issue that needs professional evaluation.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-xl p-5'>
              <h3 className='font-bold text-slate-900 mb-2'>How much does it cost to fix a cracked garage floor?</h3>
              <p className='text-slate-700 text-sm'>DIY crack filling costs $20 to $50 per crack. Professional crack injection runs $150 to $500 per crack. Full resurfacing costs $1,500 to $4,000. Complete slab replacement ranges from $3,000 to $7,000 depending on garage size and local labor rates.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-xl p-5'>
              <h3 className='font-bold text-slate-900 mb-2'>Can I epoxy over a cracked garage floor?</h3>
              <p className='text-slate-700 text-sm'>Yes, but you must repair the cracks first. Fill all cracks with a flexible filler and let it fully cure before applying epoxy. Epoxy alone will not bridge or hide cracks — they will telegraph through the coating. For product recommendations, see our <Link href='/reviews/best-garage-floor-epoxy' className='text-orange-600 hover:underline font-medium'>best epoxy kits guide</Link>.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-xl p-5'>
              <h3 className='font-bold text-slate-900 mb-2'>Does a cracked garage floor affect home value?</h3>
              <p className='text-slate-700 text-sm'>Minor cosmetic cracks rarely affect home value. However, large structural cracks, heaving, or sinking floors can reduce value and may be flagged during a home inspection. Repairing cracks before listing is a low-cost improvement that eliminates buyer concerns.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-xl p-5'>
              <h3 className='font-bold text-slate-900 mb-2'>Can I pour new concrete over a cracked garage floor?</h3>
              <p className='text-slate-700 text-sm'>You can apply a thin resurfacing overlay (1/4 to 1/2 inch) over a cracked floor if the cracks are cosmetic and the slab is structurally sound. You cannot simply pour a thick new layer on top — it will not bond properly and will crack again. For structural issues, the old slab must be removed first.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-xl p-5'>
              <h3 className='font-bold text-slate-900 mb-2'>Why is my garage floor cracking in winter?</h3>
              <p className='text-slate-700 text-sm'>Winter cracking is typically caused by freeze-thaw cycles. Water enters small pores or existing cracks in the concrete, freezes and expands, then thaws. This repeated expansion and contraction widens cracks over time. Road salt tracked in by vehicles accelerates the damage by increasing the number of freeze-thaw cycles at the surface.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-xl p-5'>
              <h3 className='font-bold text-slate-900 mb-2'>Is mudjacking or foam jacking worth it for a cracked garage floor?</h3>
              <p className='text-slate-700 text-sm'>Yes, if the cracks are caused by a sinking slab (settlement). Mudjacking ($500 to $1,300) or polyurethane foam jacking ($1,000 to $2,500) can lift a sunken slab back to level without full replacement. These methods address the symptom (uneven slab) but not always the root cause (poor drainage or unstable soil), so ensure drainage issues are corrected as well.</p>
            </div>
          </div>
        </section>

                {/* Related Articles */}
        <section className='mb-10'>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Related Articles</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <Link href='/cost-guides/epoxy-garage-floor-cost' className='block bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1'>Epoxy Garage Floor Cost</h3>
              <p className='text-slate-600 text-sm'>DIY vs professional pricing for epoxy coatings.</p>
            </Link>
            <Link href='/reviews/best-garage-floor-epoxy' className='block bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1'>Best Garage Floor Epoxy Kits</h3>
              <p className='text-slate-600 text-sm'>Top-rated epoxy kits tested and reviewed.</p>
            </Link>
            <Link href='/cost-guides/garage-floor-replacement-cost' className='block bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1'>Garage Floor Replacement Cost</h3>
              <p className='text-slate-600 text-sm'>Full breakdown of slab replacement pricing.</p>
            </Link>
            <Link href='/problems/water-leaking-into-garage' className='block bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow'>
              <h3 className='font-bold text-slate-900 mb-1'>Water Leaking Into Garage</h3>
              <p className='text-slate-600 text-sm'>How to find and fix garage water intrusion.</p>
            </Link>
          </div>
        </section>

      </div>
    </main>
        </>
  )
}

export default CrackedGarageFloorPage
