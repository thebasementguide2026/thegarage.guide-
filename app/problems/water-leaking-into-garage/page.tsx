import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: 'Water Leaking Into Garage: Causes, Fixes, and Prevention | The Garage Guide',
  description: 'Water in your garage can come from the door seal, floor cracks, walls, or poor drainage. Learn the 6 most common causes and how to fix each one permanently.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Why is water coming into my garage when it rains?', acceptedAnswer: { '@type': 'Answer', text: 'The most common cause is a worn garage door bottom seal ($15 to $40 to replace) or poor exterior drainage directing rainwater toward the garage. Check the door seal for gaps first. Then watch where water flows during rain to determine if grading, gutters, or the driveway slope are directing water toward the garage.' } },
    { '@type': 'Question', name: 'How do I stop water from coming under my garage door?', acceptedAnswer: { '@type': 'Answer', text: 'Replace the bottom weatherstrip if it is worn or cracked ($15 to $40). Install a threshold seal on the floor for added protection ($20 to $50). If the driveway slopes toward the garage, a trench drain in front of the door ($100 to $300 DIY) is the permanent solution.' } },
    { '@type': 'Question', name: 'Why is water seeping up through my garage floor?', acceptedAnswer: { '@type': 'Answer', text: 'Groundwater is pushing up through cracks in the concrete slab due to hydrostatic pressure. This is most common during heavy rain or spring snowmelt when the water table rises. Seal visible cracks with epoxy or polyurethane filler ($10 to $25). For persistent seepage, a waterproof concrete sealer ($30 to $80) or a sump pump ($200 to $500) may be needed.' } },
    { '@type': 'Question', name: 'Is water in the garage a serious problem?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Standing water causes concrete deterioration, mold growth which can spread to the house, rust damage to tools and stored items, and potential structural issues if water is entering through the foundation. Even small amounts of recurring water should be addressed to prevent escalation.' } },
    { '@type': 'Question', name: 'Can I waterproof my garage floor?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A penetrating concrete sealer ($30 to $80 per gallon) blocks moisture from absorbing into the concrete from above. An epoxy floor coating provides a waterproof surface layer. Neither option stops water pressure from below (hydrostatic pressure) through cracks, which requires crack sealing, drainage improvements, or a sump pump.' } },
    { '@type': 'Question', name: 'Should I call a professional or DIY?', acceptedAnswer: { '@type': 'Answer', text: 'Most garage water problems are DIY-fixable. Seal replacement, gutter cleaning, downspout extensions, crack filling, and grading adjustments all require basic tools and under $200 in materials. Call a professional for roof repairs, foundation crack injection, sump pump installation, or trench drain installation in concrete.' } },
  ],
}

const diagnosticTableSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Garage Water Leak Diagnosis by Location',
  description: 'Diagnostic table matching where water appears in a garage to the most likely cause, DIY fix, and estimated repair cost.',
  variableMeasured: [
    { '@type': 'PropertyValue', name: 'Along the bottom of the garage door', value: 'Worn door seal or threshold gap. Replace bottom weatherstrip or install threshold seal. Cost: $15-$50' },
    { '@type': 'PropertyValue', name: 'Pooling in front of the door inside', value: 'Driveway slopes toward garage. Install a channel/trench drain in front of the door. Cost: $100-$300 DIY' },
    { '@type': 'PropertyValue', name: 'Spreading across the floor after rain', value: 'Exterior grading directs water toward garage. Re-grade soil to slope away from foundation, extend downspouts. Cost: $50-$500' },
    { '@type': 'PropertyValue', name: 'Seeping up through floor cracks', value: 'Hydrostatic pressure or rising water table. Seal cracks with epoxy/polyurethane filler, may need sump pump. Cost: $25-$500' },
    { '@type': 'PropertyValue', name: 'Damp or wet patches on floor (no rain)', value: 'Condensation or sub-slab moisture. Improve ventilation, run dehumidifier, apply concrete sealer. Cost: $30-$300' },
    { '@type': 'PropertyValue', name: 'Running down interior wall', value: 'Roof leak, failed flashing, or gutter overflow. Fix roof/flashing, clean/extend gutters. Cost: $50-$500' },
    { '@type': 'PropertyValue', name: 'Wet spot on wall near plumbing', value: 'Hidden pipe leak. Call a plumber. Cost: $150-$500' },
    { '@type': 'PropertyValue', name: 'Puddle under water heater or appliance', value: 'Appliance leak. Repair or replace the appliance. Cost: Varies' },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Water Leaking Into Garage: Causes, Fixes, and Prevention',
  description: 'Water in your garage can come from the door seal, floor cracks, walls, or poor drainage. Learn the 6 most common causes and how to fix each one permanently.',
  image: 'https://thegarage.guide/images/garage leak .jpg',
  datePublished: '2026-03-07',
  dateModified: '2026-03-07',
  author: { '@type': 'Organization', name: 'The Garage Guide', url: 'https://thegarage.guide' },
  publisher: { '@type': 'Organization', name: 'The Garage Guide', url: 'https://thegarage.guide' },
}

export default function WaterLeakingIntoGarage() {
  return (
    <>

          {/* Schema Scripts */}
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(diagnosticTableSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero Section */}
      <section className='relative h-[400px] md:h-[500px] flex items-end'>
        <Image
          src='/images/garage leak .jpg'
          alt='Water leaking into garage on concrete floor'
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent' />
        <div className='container-custom relative z-10 pb-10'>
          <div className='flex items-center gap-3 mb-4'>
            <Image src='/gg.svg' alt='GG' width={32} height={32} />
            <span className='text-white/80 text-sm font-medium'>The Garage Guide</span>
          </div>
          <p className='text-white/70 text-sm mb-3'>Updated Mar 2026 · 18 min read</p>
          <span className='inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4'>Problem</span>
          <h1 className='text-3xl md:text-5xl font-black text-white leading-tight'>
            Water Leaking Into Garage:<br className='hidden md:block' /> Causes, Fixes, and Prevention
          </h1>
          <p className='text-lg text-white/80 mt-4 max-w-2xl'>
            Water in your garage is caused by one of six things. Most are fixable for under $200 in materials.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className='container-custom py-12'>
        <div className='max-w-3xl mx-auto'>

          {/* Intro */}
          <p className='text-lg text-slate-700 leading-relaxed mb-4'>
            Water in your garage is caused by one of six things: a worn garage door seal, poor exterior drainage, floor cracks, foundation seepage, roof leaks traveling down walls, or a hidden plumbing leak.
          </p>
          <p className='text-lg text-slate-700 leading-relaxed mb-4'>
            The fastest way to diagnose the problem is by where the water appears. Water along the bottom of the door is a seal or drainage issue. Water seeping up through the floor is a crack or a groundwater issue. Water running down a wall is a roof, flashing, or plumbing issue.
          </p>
          <p className='text-lg text-slate-700 leading-relaxed mb-8'>
            Most garage water problems are fixable for under $200 in materials. A few require professional help. This guide walks you through diagnosis by location, the specific fix for each cause, and how to prevent the problem from returning.
          </p>

          {/* Diagnose by Location Table */}
          <h2 className='text-2xl md:text-3xl font-black text-slate-900 mb-6'>Diagnose by Where the Water Appears</h2>
          <p className='text-slate-700 mb-4'>Find where your water is showing up. The location tells you the cause.</p>
          <div className='overflow-x-auto mb-10'>
            <table className='w-full border-collapse text-sm'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='border border-slate-300 px-4 py-3 text-left font-bold text-slate-700'>Where Water Appears</th>
                  <th className='border border-slate-300 px-4 py-3 text-left font-bold text-slate-700'>Most Likely Cause</th>
                  <th className='border border-slate-300 px-4 py-3 text-left font-bold text-slate-700'>DIY Fix &amp; Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className='border border-slate-300 px-4 py-3'>Along the bottom of the garage door</td><td className='border border-slate-300 px-4 py-3'>Worn door seal or threshold gap</td><td className='border border-slate-300 px-4 py-3'>Replace bottom weatherstrip or install threshold seal — $15 to $50</td></tr>
                <tr className='bg-slate-50'><td className='border border-slate-300 px-4 py-3'>Pooling in front of the door (inside)</td><td className='border border-slate-300 px-4 py-3'>Driveway slopes toward garage</td><td className='border border-slate-300 px-4 py-3'>Install a channel/trench drain in front of the door — $100 to $300 DIY</td></tr>
                <tr><td className='border border-slate-300 px-4 py-3'>Spreading across the floor after rain</td><td className='border border-slate-300 px-4 py-3'>Exterior grading directs water toward garage</td><td className='border border-slate-300 px-4 py-3'>Re-grade soil to slope away from foundation, extend downspouts — $50 to $500</td></tr>
                <tr className='bg-slate-50'><td className='border border-slate-300 px-4 py-3'>Seeping up through floor cracks</td><td className='border border-slate-300 px-4 py-3'>Hydrostatic pressure or rising water table</td><td className='border border-slate-300 px-4 py-3'>Seal cracks with epoxy/polyurethane filler (may need sump pump) — $25 to $500</td></tr>
                <tr><td className='border border-slate-300 px-4 py-3'>Damp or wet patches on floor (no rain)</td><td className='border border-slate-300 px-4 py-3'>Condensation or sub-slab moisture</td><td className='border border-slate-300 px-4 py-3'>Improve ventilation, run dehumidifier, apply concrete sealer — $30 to $300</td></tr>
                <tr className='bg-slate-50'><td className='border border-slate-300 px-4 py-3'>Running down interior wall</td><td className='border border-slate-300 px-4 py-3'>Roof leak, failed flashing, or gutter overflow</td><td className='border border-slate-300 px-4 py-3'>Fix roof/flashing, clean/extend gutters — $50 to $500</td></tr>
                <tr><td className='border border-slate-300 px-4 py-3'>Wet spot on wall near plumbing</td><td className='border border-slate-300 px-4 py-3'>Hidden pipe leak</td><td className='border border-slate-300 px-4 py-3'>Call a plumber — $150 to $500</td></tr>
                <tr className='bg-slate-50'><td className='border border-slate-300 px-4 py-3'>Puddle under water heater or appliance</td><td className='border border-slate-300 px-4 py-3'>Appliance leak</td><td className='border border-slate-300 px-4 py-3'>Repair or replace the appliance — Varies</td></tr>
              </tbody>
            </table>
          </div>

          {/* Fix 1: Door Bottom Seal */}
          <h2 className='text-2xl md:text-3xl font-black text-slate-900 mb-4'>Fix 1: Replace the Garage Door Bottom Seal</h2>
          <h3 className='text-xl font-bold text-slate-800 mb-3'>The Problem</h3>
          <p className='text-slate-700 mb-4'>The rubber weatherstrip along the bottom of the garage door is the first line of defense against water. After 5 to 10 years, it compresses, cracks, hardens, or tears. When the seal fails, rainwater, snowmelt, and wind-driven water flow under the door.</p>
          <h3 className='text-xl font-bold text-slate-800 mb-3'>How to Diagnose</h3>
          <p className='text-slate-700 mb-4'>Close the door and look at the bottom from inside. You should see a flexible rubber seal pressing firmly against the floor with no daylight gaps. If you see gaps, cracks, or sections where the rubber is stiff and no longer makes contact, the seal needs replacement.</p>
          <h3 className='text-xl font-bold text-slate-800 mb-3'>The Fix</h3>
          <p className='text-slate-700 mb-4'>Replacement bottom seals cost $15 to $40 at any home improvement store. The seal slides into a channel retainer on the bottom of the door. To replace it, open the door, slide the old seal out from one end, slide the new seal in, and trim to length. Takes 15 to 30 minutes. No tools needed beyond a utility knife.</p>
          <div className='bg-blue-50 border-l-4 border-blue-500 p-4 mb-8'>
            <p className='text-slate-700'><strong>For extra protection:</strong> Install a <Link href='/cost-guides/garage-door-replacement-cost' className='text-blue-600 hover:underline'>garage door threshold seal</Link> ($20 to $50) on the floor where the door meets the concrete. This creates a raised rubber barrier that the door presses down onto when closed, blocking water even if the bottom seal has minor gaps. Threshold seals adhere to the concrete floor with included adhesive.</p>
          </div>

          {/* Fix 2: Driveway and Grading */}
          <h2 className='text-2xl md:text-3xl font-black text-slate-900 mb-4'>Fix 2: Address Driveway and Grading Issues</h2>
          <h3 className='text-xl font-bold text-slate-800 mb-3'>The Problem</h3>
          <p className='text-slate-700 mb-4'>If your driveway slopes toward the garage even slightly, every rainstorm funnels water directly at the door. If the soil around the garage foundation slopes toward the structure instead of away from it, surface runoff soaks the foundation and seeps inside.</p>
          <h3 className='text-xl font-bold text-slate-800 mb-3'>How to Diagnose</h3>
          <p className='text-slate-700 mb-4'>During a rainstorm, watch where water flows. Does it pool in front of the garage door? Does it run along the foundation walls? The ground should slope away from the garage at a rate of at least 1 inch per foot for the first 6 feet.</p>
          <h3 className='text-xl font-bold text-slate-800 mb-3'>The Fixes</h3>
          <ul className='space-y-4 mb-4'>
            <li className='text-slate-700'><strong>Trench drain ($100 to $300 DIY, $500 to $1,500 professional):</strong> A channel drain installed in the concrete in front of the garage door intercepts water before it reaches the door. This is the most effective solution for driveways that slope toward the garage.</li>
            <li className='text-slate-700'><strong>Re-grade soil ($50 to $300 DIY):</strong> Add topsoil along the foundation perimeter to create a slope away from the garage. The ground should drop at least 6 inches over the first 6 feet from the foundation wall.</li>
            <li className='text-slate-700'><strong>Extend downspouts ($10 to $30 per downspout):</strong> Downspouts should discharge water at least 5 feet from the foundation. If yours dump water right next to the garage, add extensions or splash blocks. This is the cheapest and easiest drainage fix.</li>
          </ul>
          <p className='text-slate-600 text-sm italic mb-8'>According to the <a href='https://www.fema.gov/' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>Federal Emergency Management Agency (FEMA)</a>, proper drainage around structures is one of the most effective measures for preventing water intrusion and flood damage.</p>

          {/* Fix 3: Floor Cracks */}
          <h2 className='text-2xl md:text-3xl font-black text-slate-900 mb-4'>Fix 3: Seal Floor Cracks</h2>
          <h3 className='text-xl font-bold text-slate-800 mb-3'>The Problem</h3>
          <p className='text-slate-700 mb-4'>Concrete garage floors develop cracks over time from settling, freeze-thaw cycles, and shrinkage. These cracks allow groundwater to seep up into the garage, especially during heavy rain or spring snowmelt when the water table rises.</p>
          <h3 className='text-xl font-bold text-slate-800 mb-3'>How to Diagnose</h3>
          <p className='text-slate-700 mb-4'>Inspect the floor for visible cracks. If water appears along crack lines during or after rain, groundwater is pushing up through the cracks.</p>
          <h3 className='text-xl font-bold text-slate-800 mb-3'>The Fix</h3>
          <p className='text-slate-700 mb-4'>Clean the cracks thoroughly (remove loose debris, dust, and moisture). Apply an epoxy or polyurethane concrete crack filler ($10 to $25 per tube). For cracks wider than 1/4 inch, use a backer rod first, then fill with sealant.</p>
          <p className='text-slate-700 mb-4'>For persistent seepage through multiple cracks, apply a waterproof concrete sealer ($30 to $80 per gallon) across the entire floor surface after repairing individual cracks.</p>
          <div className='bg-amber-50 border-l-4 border-amber-500 p-4 mb-8'>
            <p className='text-slate-700'><strong>If seepage continues after sealing:</strong> You may have a high water table or hydrostatic pressure issue. A sump pump ($200 to $500 installed) may be needed to manage subsurface water. This is a situation where homeowners with basements face the exact same challenge. If you also have a basement with water issues, our sister site covers the full range of solutions in their <a href='https://thebasement.guide/articles/complete-basement-waterproofing-guide' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>basement waterproofing guide</a>.</p>
          </div>

          {/* Fix 4: Wall Leaks */}
          <h2 className='text-2xl md:text-3xl font-black text-slate-900 mb-4'>Fix 4: Stop Wall Leaks</h2>
          <h3 className='text-xl font-bold text-slate-800 mb-3'>The Problem</h3>
          <p className='text-slate-700 mb-4'>Water running down the interior of a garage wall is almost never a wall problem. It is a roof, flashing, or gutter problem. Water enters at the roofline, travels down the inside of the wall framing, and appears at the base of the wall or as damp spots on the drywall.</p>
          <h3 className='text-xl font-bold text-slate-800 mb-3'>How to Diagnose</h3>
          <p className='text-slate-700 mb-4'>Look for water stains, discoloration, or bubbling paint on the wall. Check if the wet area aligns with the roofline above. From outside, inspect the roof edge, flashing, and gutters directly above the wet spot.</p>
          <h3 className='text-xl font-bold text-slate-800 mb-3'>Common Causes and Fixes</h3>
          <ul className='space-y-4 mb-8'>
            <li className='text-slate-700'><strong>Clogged gutters ($0 DIY):</strong> If gutters overflow during rain, water cascades down the exterior wall and finds its way inside through gaps. Clean the gutters. Check that downspouts are clear and flowing.</li>
            <li className='text-slate-700'><strong>Failed flashing ($50 to $200 DIY, $200 to $500 pro):</strong> Flashing where the roof meets the garage wall can separate, rust, or lift over time. Resealing with roofing caulk is a temporary fix. Replacing the flashing is the permanent solution.</li>
            <li className='text-slate-700'><strong>Roof damage ($200 to $1,000 depending on scope):</strong> Missing shingles, cracked vent boots, or damaged roof sections above the garage allow direct water entry. Inspect the roof or have a roofer assess it.</li>
            <li className='text-slate-700'><strong>Sill plate seepage ($10 to $30):</strong> The sill plate is where the wall framing meets the concrete foundation. Gaps here let water in. Seal with caulk or expanding foam from the inside.</li>
          </ul>

          {/* Fix 5: Condensation */}
          <h2 className='text-2xl md:text-3xl font-black text-slate-900 mb-4'>Fix 5: Handle Condensation</h2>
          <h3 className='text-xl font-bold text-slate-800 mb-3'>The Problem</h3>
          <p className='text-slate-700 mb-4'>Sometimes the leak is not a leak at all. In humid climates or during temperature swings (cold concrete floor, warm moist air), condensation forms on the garage floor and walls. It looks like seepage but the water is coming from the air, not the ground.</p>
          <h3 className='text-xl font-bold text-slate-800 mb-3'>How to Diagnose</h3>
          <p className='text-slate-700 mb-4'>The water appears during humid weather but not specifically during rain. The floor or walls feel damp uniformly rather than along cracks or specific entry points. The garage may have a musty smell.</p>
          <h3 className='text-xl font-bold text-slate-800 mb-3'>The Fix</h3>
          <p className='text-slate-700 mb-4'>Improve air circulation by opening windows or installing a ventilation fan ($50 to $150). Run a dehumidifier ($150 to $300) to reduce moisture levels. Apply a concrete sealer to the floor to reduce moisture absorption. If your garage is <Link href='/guides/how-to-insulate-garage' className='text-blue-600 hover:underline'>insulated</Link>, ensure the vapor barrier is installed correctly.</p>

          {/* Prevention Checklist */}
          <h2 className='text-2xl md:text-3xl font-black text-slate-900 mt-12 mb-6'>Prevention Checklist</h2>
          <p className='text-slate-700 mb-6'>These items prevent most garage water problems before they start. Run through this list seasonally.</p>
          <div className='space-y-6 mb-10'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 mb-2'>Gutters and Downspouts</h3>
              <p className='text-slate-700 text-sm'>Clean gutters twice per year (spring and fall). Verify downspouts discharge at least 5 feet from the foundation. Check for clogs after storms.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 mb-2'>Garage Door Seal</h3>
              <p className='text-slate-700 text-sm'>Inspect the bottom weatherstrip every 6 months. Replace when it shows cracks, gaps, or permanent compression. Budget $15 to $40 every 5 to 7 years.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 mb-2'>Exterior Grading</h3>
              <p className='text-slate-700 text-sm'>Walk the perimeter of the garage annually. Soil should slope away from the foundation at 1 inch per foot for 6 feet. Add topsoil where settling has reversed the slope.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 mb-2'>Floor Cracks</h3>
              <p className='text-slate-700 text-sm'>Seal new cracks promptly. Small cracks that are ignored become big cracks that let water in.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 mb-2'>Roof and Flashing</h3>
              <p className='text-slate-700 text-sm'>Inspect the roof above the garage once per year, especially after severe storms. Look for missing shingles, lifted flashing, and cracked vent boots.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 mb-2'>Epoxy Floor Coating</h3>
              <p className='text-slate-700 text-sm'>While <Link href='/cost-guides/garage-floor-coating-cost' className='text-blue-600 hover:underline'>epoxy</Link> does not stop water from below (hydrostatic pressure), it does prevent surface water from penetrating the concrete. A sealed floor is easier to dry and resists mold growth.</p>
            </div>
          </div>

          {/* FAQ Section */}
          <h2 className='text-2xl md:text-3xl font-black text-slate-900 mt-12 mb-6'>Frequently Asked Questions</h2>
          <div className='space-y-6 mb-10'>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Why is water coming into my garage when it rains?</h3>
              <p className='text-slate-700'>The most common cause is a worn garage door bottom seal ($15 to $40 to replace) or poor exterior drainage directing rainwater toward the garage. Check the door seal for gaps first. Then watch where water flows during rain to determine if grading, gutters, or the driveway slope are directing water toward the garage.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>How do I stop water from coming under my garage door?</h3>
              <p className='text-slate-700'>Replace the bottom weatherstrip if it is worn or cracked ($15 to $40). Install a threshold seal on the floor for added protection ($20 to $50). If the driveway slopes toward the garage, a trench drain in front of the door ($100 to $300 DIY) is the permanent solution.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Why is water seeping up through my garage floor?</h3>
              <p className='text-slate-700'>Groundwater is pushing up through cracks in the concrete slab due to hydrostatic pressure. This is most common during heavy rain or spring snowmelt when the water table rises. Seal visible cracks with epoxy or polyurethane filler ($10 to $25). For persistent seepage, a waterproof concrete sealer ($30 to $80) or a sump pump ($200 to $500) may be needed.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Is water in the garage a serious problem?</h3>
              <p className='text-slate-700'>Yes. Standing water causes concrete deterioration, mold growth which can spread to the house, rust damage to tools and stored items, and potential structural issues if water is entering through the foundation. Even small amounts of recurring water should be addressed to prevent escalation.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Can I waterproof my garage floor?</h3>
              <p className='text-slate-700'>Yes. A penetrating concrete sealer ($30 to $80 per gallon) blocks moisture from absorbing into the concrete from above. An <Link href='/cost-guides/epoxy-garage-floor-cost' className='text-blue-600 hover:underline'>epoxy floor coating</Link> provides a waterproof surface layer. Neither option stops water pressure from below (hydrostatic pressure) through cracks, which requires crack sealing, drainage improvements, or a sump pump.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Should I call a professional or DIY?</h3>
              <p className='text-slate-700'>Most garage water problems are DIY-fixable. Seal replacement, gutter cleaning, downspout extensions, crack filling, and grading adjustments all require basic tools and under $200 in materials. Call a professional for roof repairs, foundation crack injection, sump pump installation, or trench drain installation in concrete.</p>
            </div>
          </div>

          {/* Glossary */}
          <h2 className='text-2xl md:text-3xl font-black text-slate-900 mt-12 mb-6'>Glossary</h2>
          <div className='space-y-4 mb-10'>
            <div><h3 className='font-bold text-slate-900'>Weatherstrip (bottom seal)</h3><p className='text-slate-600 text-sm'>A flexible rubber gasket attached to the bottom of the garage door that creates a watertight seal against the floor when closed. Wears out every 5 to 10 years and is the most common cause of water leaking under a garage door.</p></div>
            <div><h3 className='font-bold text-slate-900'>Threshold seal</h3><p className='text-slate-600 text-sm'>A rubber strip adhered to the garage floor where the door meets the concrete. Creates a raised barrier that the door presses against when closed. Provides a secondary water barrier in addition to the bottom seal.</p></div>
            <div><h3 className='font-bold text-slate-900'>Hydrostatic pressure</h3><p className='text-slate-600 text-sm'>The force of underground water pushing upward against the bottom of a concrete slab. Causes water to seep through cracks and joints in the floor, especially during periods of high rainfall or elevated water table.</p></div>
            <div><h3 className='font-bold text-slate-900'>Trench drain (channel drain)</h3><p className='text-slate-600 text-sm'>A long, narrow drain recessed into the concrete in front of the garage door. Intercepts surface water before it reaches the door and channels it to a drainage outlet.</p></div>
            <div><h3 className='font-bold text-slate-900'>Grading</h3><p className='text-slate-600 text-sm'>The slope of the soil around a structure. Proper grading directs surface water away from the foundation. The recommended grade is a 1-inch drop per foot for the first 6 feet from the foundation wall.</p></div>
            <div><h3 className='font-bold text-slate-900'>Flashing</h3><p className='text-slate-600 text-sm'>Thin metal strips installed where the roof meets a wall to direct water away from the joint. Failed or lifted flashing is a common cause of water entering through garage walls from above.</p></div>
            <div><h3 className='font-bold text-slate-900'>Sump pump</h3><p className='text-slate-600 text-sm'>A pump installed in a pit below the garage floor that collects subsurface water and discharges it away from the foundation. Used when hydrostatic pressure causes persistent floor seepage.</p></div>
            <div><h3 className='font-bold text-slate-900'>Concrete sealer</h3><p className='text-slate-600 text-sm'>A liquid coating applied to concrete surfaces that fills pores and blocks moisture absorption. Penetrating sealers soak into the concrete. Film-forming sealers create a surface barrier. Neither type stops hydrostatic pressure from below.</p></div>
          </div>

          {/* Related Articles */}
          <h2 className='text-2xl md:text-3xl font-black text-slate-900 mt-12 mb-6'>Related Articles</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-12'>
            <Link href='/problems/garage-door-opener-not-working' className='block bg-white border border-slate-200 rounded-lg p-5 hover:shadow-md transition-shadow'>
              <span className='text-xs font-bold text-red-600 mb-1 block'>PROBLEM</span>
              <h3 className='font-bold text-slate-900 mb-1'>Garage Door Opener Not Working?</h3>
              <p className='text-slate-600 text-sm'>Diagnose and fix common opener problems including remote failures, sensor issues, and grinding noises.</p>
            </Link>
            <Link href='/cost-guides/garage-floor-coating-cost' className='block bg-white border border-slate-200 rounded-lg p-5 hover:shadow-md transition-shadow'>
              <span className='text-xs font-bold text-green-600 mb-1 block'>COST GUIDE</span>
              <h3 className='font-bold text-slate-900 mb-1'>Garage Floor Coating Cost 2026</h3>
              <p className='text-slate-600 text-sm'>Compare epoxy, polyurea, and polyaspartic options with real pricing and pros and cons.</p>
            </Link>
            <Link href='/reviews/best-garage-floor-epoxy' className='block bg-white border border-slate-200 rounded-lg p-5 hover:shadow-md transition-shadow'>
              <span className='text-xs font-bold text-blue-600 mb-1 block'>REVIEW</span>
              <h3 className='font-bold text-slate-900 mb-1'>Best Garage Floor Epoxy Kits 2026</h3>
              <p className='text-slate-600 text-sm'>We tested and ranked 5 DIY epoxy kits by durability, ease of use, and value.</p>
            </Link>
            <Link href='/guides/how-to-insulate-garage' className='block bg-white border border-slate-200 rounded-lg p-5 hover:shadow-md transition-shadow'>
              <span className='text-xs font-bold text-purple-600 mb-1 block'>GUIDE</span>
              <h3 className='font-bold text-slate-900 mb-1'>How to Insulate Your Garage</h3>
              <p className='text-slate-600 text-sm'>Complete DIY guide including vapor barriers, R-values by climate zone, and step-by-step installation.</p>
            </Link>
            <Link href='/cost-guides/garage-door-replacement-cost' className='block bg-white border border-slate-200 rounded-lg p-5 hover:shadow-md transition-shadow'>
              <span className='text-xs font-bold text-green-600 mb-1 block'>COST GUIDE</span>
              <h3 className='font-bold text-slate-900 mb-1'>Garage Door Replacement Cost 2026</h3>
              <p className='text-slate-600 text-sm'>A new garage door costs $800 to $4,000 installed. Complete pricing by material, style, and size.</p>
            </Link>
            <Link href='/guides/garage-heater-guide' className='block bg-white border border-slate-200 rounded-lg p-5 hover:shadow-md transition-shadow'>
              <span className='text-xs font-bold text-purple-600 mb-1 block'>GUIDE</span>
              <h3 className='font-bold text-slate-900 mb-1'>Garage Heater Guide</h3>
              <p className='text-slate-600 text-sm'>Compare forced air, infrared, mini-split, and portable garage heaters with costs and BTU requirements.</p>
            </Link>
          </div>

          {/* Lead Form */}
          <div className='bg-slate-50 rounded-xl p-8 mb-12'>
            <h2 className='text-2xl font-black text-slate-900 mb-2'>Get Free Quotes for Garage Water Repair</h2>
            <p className='text-slate-600 mb-6'>Connect with local contractors who specialize in garage drainage, waterproofing, and repair.</p>
            <QuoteForm />
          </div>

        </div>
      </div>
    </>
  )
}
