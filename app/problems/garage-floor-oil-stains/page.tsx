import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Garage Floor Oil Stains: How to Remove Them for Good | The Garage Guide',
  description: 'Remove garage floor oil stains with the right method for your stain\'s age. Fresh spills, set stains, and years-old patches all need different treatment. Step-by-step guide.',
  alternates: {
    canonical: 'https://thegarage.guide/problems/garage-floor-oil-stains',
  },
  openGraph: {
    title: 'Garage Floor Oil Stains: How to Remove Them for Good | The Garage Guide',
    description: 'Remove garage floor oil stains with the right method for your stain\'s age. Fresh spills, set stains, and years-old patches all need different treatment. Step-by-step guide.',
    url: 'https://thegarage.guide/problems/garage-floor-oil-stains',
    siteName: 'The Garage Guide',
    type: 'article',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do I remove oil stains from a garage floor?', acceptedAnswer: { '@type': 'Answer', text: 'The method depends entirely on how old the stain is. Fresh spills under 48 hours old respond to dry absorption with clay cat litter followed by an alkaline degreaser and scrub. Stains that are days to weeks old need an alkaline degreaser plus a poultice made from an absorbent powder and acetone. Stains that have been sitting for 6 months or more require a microbial enzyme cleaner applied over several weeks. The single most common mistake is going straight to scrubbing without absorbing first, which drives oil deeper into the porous concrete.' } },
    { '@type': 'Question', name: 'Will WD-40 remove oil stains from concrete?', acceptedAnswer: { '@type': 'Answer', text: 'No. WD-40 is a petroleum-based solvent that spreads oil further across the surface rather than lifting it. It temporarily darkens the stained area, which some people interpret as cleaning, but it does not remove the oil. Use an alkaline concrete degreaser instead. For fresh spills, absorb with cat litter first, then apply degreaser.' } },
    { '@type': 'Question', name: 'Can you use dish soap to remove oil from a garage floor?', acceptedAnswer: { '@type': 'Answer', text: 'Dish soap is better than nothing on a very fresh, light spill, but it is the wrong tool for garage floor oil stains. It does not have the alkalinity needed to break down motor oil\'s chemical bond with concrete, and it tends to push oil into pores rather than emulsifying it for removal. An alkaline degreaser specifically formulated for concrete is significantly more effective and costs about the same.' } },
    { '@type': 'Question', name: 'How do you remove oil stains that have been there for years?', acceptedAnswer: { '@type': 'Answer', text: 'Years-old oil stains on unsealed concrete require a microbial enzyme cleaner such as ACT Concrete Cleaner or Terminator-HSD. These products use microorganisms that consume petroleum hydrocarbons over 3 to 4 weeks of treatment. Results are significant but not always complete on stains that have saturated the full depth of the slab. After treatment, applying an epoxy floor coating covers any remaining discoloration and permanently protects the floor.' } },
    { '@type': 'Question', name: 'Does bleach remove oil stains from concrete?', acceptedAnswer: { '@type': 'Answer', text: 'No. Bleach is an oxidizing agent that can temporarily lighten the color of an oil stain by bleaching the surface, but it does not break down oil chemistry and does not remove the contamination. The stain will reappear or darken again within days. Use an alkaline concrete degreaser for oil stains. Bleach is appropriate for biological stains like mold and mildew, not petroleum stains.' } },
    { '@type': 'Question', name: 'Is it safe to pressure wash oil off a garage floor?', acceptedAnswer: { '@type': 'Answer', text: 'A pressure washer is a useful rinsing tool, not a cleaning tool for oil stains. Pressure washing without a degreaser spreads oil across a larger surface area without removing it. Always apply an alkaline degreaser, let it dwell for 10 to 15 minutes, scrub with a brush, and then use the pressure washer to rinse. Oil-contaminated water from pressure washing should not enter storm drains. Collect runoff and take it to a used oil collection facility.' } },
    { '@type': 'Question', name: 'How long does it take for oil to permanently stain concrete?', acceptedAnswer: { '@type': 'Answer', text: 'On unsealed concrete, oil begins bonding with the mineral structure within 48 hours. After 2 weeks, it has penetrated 1/4 to 1/2 inch and full removal becomes unlikely without a poultice. After 6 months, it may have penetrated the full depth of the slab. The surface layers can be cleaned to a significant degree, but ghost staining often remains in the deeper pores. On sealed concrete, oil sits in the sealer layer and does not reach the concrete itself, making even old stains much easier to remove.' } },
    { '@type': 'Question', name: 'What is the best product to remove oil stains from a garage floor?', acceptedAnswer: { '@type': 'Answer', text: 'For fresh stains, any alkaline concrete degreaser works well. Oil Eater Original, Zep Heavy-Duty Powder, and Simple Green Oxy Solve are reliable choices at $10 to $20. For set stains, combine a degreaser with a poultice. For deep, old stains, ACT Concrete Cleaner and Terminator-HSD are the best microbial options at $20 to $40. For sealed or coated floors, use a pH-neutral cleaner or a mild alkaline degreaser specifically labeled safe for sealed surfaces.' } },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Garage Floor Oil Stains: How to Remove Them for Good',
  description: 'Remove garage floor oil stains with the right method for your stain\'s age. Fresh spills, set stains, and years-old patches all need different treatment.',
  url: 'https://thegarage.guide/problems/garage-floor-oil-stains',
  publisher: {
    '@type': 'Organization',
    name: 'The Garage Guide',
    url: 'https://thegarage.guide',
  },
}

export default function GarageFloorOilStains() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Problems', href: '/problems' }, { label: 'Garage Floor Oil Stains' }]} />
      <article className='container-custom py-8 max-w-4xl mx-auto'>
        {/* Hero Section */}
        <div className='relative rounded-xl overflow-hidden mb-8' style={{ minHeight: '400px' }}>
          <Image src='/images/Garage Floor Oil Stain.jpg' alt='Motor oil stain on a concrete garage floor' fill className='object-cover' priority />
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent' />
          <div className='absolute bottom-0 left-0 right-0 p-6 md:p-10'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center text-white font-bold text-sm'>GG</div>
              <div>
                <p className='text-white font-semibold text-sm'>The Garage Guide</p>
                <p className='text-gray-300 text-xs'>Updated Mar 2026 · 12 min read</p>
              </div>
            </div>
            <span className='text-amber-700 font-bold text-xs uppercase tracking-wider'>Problem</span>
            <h1 className='text-3xl md:text-4xl font-bold text-white mt-1'>Garage Floor Oil Stains: <span className='text-amber-500'>How to Remove Them for Good</span></h1>
            <p className='text-gray-200 mt-2 text-sm md:text-base max-w-2xl'>Remove garage floor oil stains with the right method for your stain&apos;s age. Fresh spills, set stains, and years-old patches all need different treatment.</p>
          </div>
        </div>

        {/* TL;DR */}
        <div style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75', padding: '16px 20px' }} className='rounded-r-lg mb-4'>
          <p style={{ color: '#1D9E75' }} className='text-sm font-bold mb-2'>TL;DR</p>
          <p className='text-slate-700 text-sm leading-relaxed'>Fresh oil spills (under 48 hours) come up with an absorbent and a degreaser. Set stains (weeks to months old) need a commercial concrete degreaser and heavy scrubbing. Old stains (years old) require a poultice to pull oil out of the concrete&apos;s pores. The method matters more than the product. Using the wrong approach on the wrong stain age wastes time and can push oil deeper into the concrete.</p>
        </div>

        {/* Opening Paragraph */}
        <section className='mb-8'>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>You scrubbed it. You poured dish soap on it. Maybe you tried WD-40 because someone online said it works. The stain is still there, possibly darker than before. This is the experience of nearly every homeowner who tries to remove an oil stain from a garage floor, and it happens for one reason: the method they used was designed for the wrong stain.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>There is no single way to remove oil from concrete. A spill you catch in the first hour needs dry absorption and a light degreaser. A stain that has been sitting for two weeks needs an alkaline degreaser and a poultice. A dark patch that has been soaking into unsealed concrete for a year needs a microbial enzyme cleaner and several weeks of patience. Use the fresh-stain method on an old stain and nothing happens. Use a heavy solvent on a sealed floor and you strip the sealer. Add water to a fresh spill before absorbing it and you push the oil deeper into the pores.</p>
          <p className='text-slate-700 text-sm leading-relaxed'>The method has to match the stain. That is what this guide does.</p>
        </section>

        {/* First: Identify Your Stain */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>First: Identify Your Stain Before You Do Anything</h2>

          {/* Critical Callout Box */}
          <div className='bg-red-50 border-l-4 border-red-600 p-4 rounded mb-6'>
            <p className='text-slate-700 text-sm leading-relaxed'>Do not start cleaning until you know how old the stain is. Using an absorbent on a year-old stain does nothing. Using a degreaser on a fresh wet spill spreads it. The three stain categories below require completely different approaches, and starting with the wrong one wastes time and can drive oil deeper into the concrete.</p>
          </div>

          {/* Stain Age Diagnosis Table */}
          <h3 className='text-lg font-semibold text-slate-800 mb-3'>Stain Age Diagnosis Table</h3>
          <div className='overflow-x-auto mb-6'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Stain Type</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>How It Looks</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Age</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Right Method</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Fresh spill</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Wet, shiny, darkened concrete, oil pools visible</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Under 48 hours</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Absorb first, then degrease</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Set stain</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Dark patch, dry to the touch, no surface shine</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Days to months old</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Commercial degreaser plus stiff brush</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Old embedded stain</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Dark gray or black patch, faded edges, part of the floor</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Months to years old</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Poultice method</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Years-old stain</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Near-black, may have ring edges from old treatment attempts</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>1 or more years</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Poultice plus possible acid wash; may not fully remove</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Also Identify Your Floor Surface */}
          <h3 className='text-lg font-semibold text-slate-800 mb-3'>Also Identify Your Floor Surface</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'>Your floor type changes the approach:</p>
          <ul className='space-y-2 mb-4'>
            <li className='text-slate-700 text-sm leading-relaxed'><strong>Bare unsealed concrete:</strong> The most porous surface. Oil soaks in fast and deep. All methods work, but require more dwell time.</li>
            <li className='text-slate-700 text-sm leading-relaxed'><strong>Sealed concrete (clear or acrylic sealer):</strong> Oil sits on top longer before penetrating. Fresh spills are much easier to clean. Sealed surfaces respond well to degreasers. Avoid acidic cleaners.</li>
            <li className='text-slate-700 text-sm leading-relaxed'><strong>Epoxy or polyurea coated floor:</strong> Oil does not penetrate the coating. Clean with a degreaser and mop only. Do not use solvents, abrasive brushes, or pressure washing above 1,500 PSI, which can lift the coating.</li>
            <li className='text-slate-700 text-sm leading-relaxed'><strong>Painted concrete:</strong> Similar to coated floors. Avoid solvents that can strip paint. Use mild degreaser only.</li>
          </ul>
        </section>

        {/* The 48-Hour Rule: Fresh Spills */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>The 48-Hour Rule: Fresh Spills</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>If you get to an oil spill within 48 hours, you have the best possible chance of full removal. After 48 hours, oil begins penetrating beyond the top layer of concrete pores, making complete removal increasingly difficult with each passing day.</p>

          <h3 className='text-lg font-semibold text-slate-800 mb-3'>Step 1: Absorb the Surface Oil First</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'>Never wipe, mop, or scrub a fresh oil spill. Wiping spreads the oil and pushes it into a larger area. Instead, cover the entire spill with an absorbent material and leave it alone.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>Best absorbents for fresh oil:</strong></p>
          <ul className='space-y-2 mb-4'>
            <li className='text-slate-700 text-sm leading-relaxed'><strong>Clay cat litter</strong> (not clumping or silica type) — the most commonly available and effective option. Pour a 1/2 inch layer over the entire spill, press down lightly with your foot to increase contact, and leave for a minimum of 1 hour. For large spills, leave overnight.</li>
            <li className='text-slate-700 text-sm leading-relaxed'><strong>Oil-dry or floor dry absorbent</strong> — a commercial product made specifically for garage oil spills. Works faster than cat litter on fresh spills.</li>
            <li className='text-slate-700 text-sm leading-relaxed'><strong>Baking soda</strong> — works on very small, very fresh spills. Less effective on large volumes of oil.</li>
            <li className='text-slate-700 text-sm leading-relaxed'><strong>Sawdust</strong> — works but leaves residue; requires more cleanup than cat litter.</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>What not to use:</strong> Paper towels, rags, or mops. These spread oil over a wider area and drive it into the pores rather than lifting it off the surface.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>After the dwell time, sweep up the absorbent completely and dispose of it in a sealed bag in the trash. Do not wash it into a floor drain. Under the <a href='https://www.epa.gov/hw/managing-used-oil-answers-frequent-questions-businesses' target='_blank' rel='noopener noreferrer' className='text-amber-700 underline'>EPA&apos;s Clean Water Act</a>, washing oil into storm drains is prohibited. Oil that reaches storm drains can contaminate waterways. Dispose of oil-soaked absorbents as solid waste.</p>

          <h3 className='text-lg font-semibold text-slate-800 mb-3'>Step 2: Apply a Degreaser</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'>After the absorbent is swept up, a dark stain mark will remain. This is oil that has begun penetrating the top layer of the concrete. Treat it immediately with a concrete degreaser.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>Recommended degreasers for fresh stains:</strong></p>
          <ul className='space-y-1 mb-4'>
            <li className='text-slate-700 text-sm leading-relaxed'>Simple Green Concrete and Driveway Cleaner ($10 to $15) — effective, low-VOC, safe for most surfaces</li>
            <li className='text-slate-700 text-sm leading-relaxed'>Zep Driveway and Concrete Cleaner ($10 to $15) — concentrated, works well on fresh-to-medium stains</li>
            <li className='text-slate-700 text-sm leading-relaxed'>Krud Kutter Concrete Cleaner ($12 to $18) — strong citrus-based formula, good on fresh spills</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>How to apply:</strong></p>
          <ol className='list-decimal list-inside space-y-1 mb-4'>
            <li className='text-slate-700 text-sm leading-relaxed'>Wet the stained area with water first. This prevents the degreaser from spreading the stain by drawing more oil to the surface.</li>
            <li className='text-slate-700 text-sm leading-relaxed'>Apply the degreaser full strength directly to the stain.</li>
            <li className='text-slate-700 text-sm leading-relaxed'>Let it dwell for 10 to 15 minutes. Do not let it dry completely.</li>
            <li className='text-slate-700 text-sm leading-relaxed'>Scrub vigorously with a stiff-bristle brush or push broom with stiff nylon bristles. Use circular motion, working from the outside of the stain inward.</li>
            <li className='text-slate-700 text-sm leading-relaxed'>Rinse thoroughly with clean water. A garden hose with a high-pressure nozzle works well. If you have a pressure washer, use it at 1,500 to 2,000 PSI.</li>
            <li className='text-slate-700 text-sm leading-relaxed'>Let dry completely and inspect. Repeat if needed.</li>
          </ol>
          <p className='text-slate-700 text-sm leading-relaxed'>For a fresh stain treated within 48 hours, one or two degreaser applications typically produce near-complete removal on unsealed concrete.</p>
        </section>

        {/* Set Stains */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Set Stains: Days to Months Old</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>A stain that has been there for more than 48 hours has moved past the top layer of concrete pores. Surface degreasing alone will lighten it but is unlikely to remove it completely. You need a product with stronger penetrating ability and longer dwell time.</p>

          <h3 className='text-lg font-semibold text-slate-800 mb-3'>Commercial Degreaser Method for Days to a Few Weeks Old</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>Products that work on set stains:</strong></p>
          <ul className='space-y-1 mb-4'>
            <li className='text-slate-700 text-sm leading-relaxed'>Oil Eater Original ($15 to $20) — concentrated alkaline degreaser, safe for concrete, effective on stains up to several months old</li>
            <li className='text-slate-700 text-sm leading-relaxed'>Purple Power Industrial Strength Cleaner ($10 to $15) — very strong, good on greasy set stains</li>
            <li className='text-slate-700 text-sm leading-relaxed'>Spray Nine Heavy Duty Cleaner ($12 to $18) — works well on petroleum-based stains</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>Process:</strong></p>
          <ol className='list-decimal list-inside space-y-1 mb-4'>
            <li className='text-slate-700 text-sm leading-relaxed'>Wet the area with water.</li>
            <li className='text-slate-700 text-sm leading-relaxed'>Apply degreaser undiluted directly on the stain. For stubborn stains, mix with a small amount of powdered laundry detergent to create a paste.</li>
            <li className='text-slate-700 text-sm leading-relaxed'>Cover with plastic sheeting and let dwell for 30 minutes to 1 hour. Covering prevents evaporation and keeps the product active longer.</li>
            <li className='text-slate-700 text-sm leading-relaxed'>Scrub hard with a stiff brush. A drill-mounted scrub brush attachment significantly reduces effort on large stains.</li>
            <li className='text-slate-700 text-sm leading-relaxed'>Rinse thoroughly.</li>
            <li className='text-slate-700 text-sm leading-relaxed'>Repeat up to 3 times. Let the surface dry fully between applications so you can see progress.</li>
          </ol>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>The powdered laundry detergent method:</strong> Mix powdered laundry detergent (Tide or similar) with just enough hot water to create a thick paste. Trowel it onto the stain, let it dry completely overnight, and sweep it up. The alkaline detergent breaks down oil while the powdered formula absorbs it as it dries. This works well on stains up to a few months old. Do not substitute liquid dish soap — it lacks the drawing action of powdered detergent and can push oil deeper.</p>

          <h3 className='text-lg font-semibold text-slate-800 mb-3'>Trisodium Phosphate (TSP) for Stubborn Set Stains</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>TSP is a heavy-duty alkaline cleaner that cuts through oil stains that standard degreasers cannot fully remove. Available at hardware stores for $8 to $12 per box.</p>
          <p className='text-slate-700 text-sm leading-relaxed'>Mix 1/2 cup of TSP per gallon of hot water. Apply to the stain, let dwell for 20 to 30 minutes, scrub hard, and rinse thoroughly. Wear rubber gloves and eye protection — TSP is caustic and irritates skin and eyes on contact. Do not use TSP on sealed, painted, or epoxy-coated floors, as it will strip finishes.</p>
        </section>

        {/* Old and Embedded Stains */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Old and Embedded Stains: The Poultice Method</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>For stains months to years old, oil has migrated deep into the concrete&apos;s pore structure. A degreaser applied to the surface cannot reach it. The solution is a poultice — a paste that uses osmosis to pull oil back up through the pores and into an absorbent material.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>A poultice works by reversing the direction of oil travel. When applied wet, the solvent in the poultice breaks down the oil deep in the concrete. As the poultice dries slowly under plastic sheeting, it creates a drawing effect that pulls dissolved oil upward into the absorbent material. This process takes 24 to 48 hours but reaches oil that no surface treatment can touch.</p>

          <h3 className='text-lg font-semibold text-slate-800 mb-3'>How to Make and Apply a Poultice</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>Materials needed:</strong></p>
          <ul className='space-y-1 mb-4'>
            <li className='text-slate-700 text-sm leading-relaxed'>Absorbent material: pool filter media (diatomaceous earth), powdered cat litter, sawdust, or powdered laundry detergent</li>
            <li className='text-slate-700 text-sm leading-relaxed'>Solvent: acetone, lacquer thinner, or a commercial product like Pour-N-Restore ($15 to $20) or Prosoco Oil and Grease Stain Remover ($25 to $35)</li>
            <li className='text-slate-700 text-sm leading-relaxed'>Plastic sheeting and tape</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>Step-by-step:</strong></p>
          <ol className='list-decimal list-inside space-y-1 mb-4'>
            <li className='text-slate-700 text-sm leading-relaxed'>Wet the stain with water. This prevents the stain from spreading when the solvent is applied.</li>
            <li className='text-slate-700 text-sm leading-relaxed'>Mix the absorbent material with your solvent until the consistency is similar to peanut butter — thick enough to hold its shape, wet enough to make full contact with the concrete.</li>
            <li className='text-slate-700 text-sm leading-relaxed'>Spread the poultice 1/4 to 1/2 inch thick over the entire stain, extending at least 1 inch beyond the stain&apos;s visible edges.</li>
            <li className='text-slate-700 text-sm leading-relaxed'>Cover completely with plastic sheeting and tape down all edges. This slows evaporation and gives the poultice more time to draw oil upward.</li>
            <li className='text-slate-700 text-sm leading-relaxed'>Leave undisturbed for 24 to 48 hours. Do not lift the plastic to check progress.</li>
            <li className='text-slate-700 text-sm leading-relaxed'>Remove the plastic. The poultice should be dry or semi-dry. If it is still wet, recover and leave another 12 hours.</li>
            <li className='text-slate-700 text-sm leading-relaxed'>Use a plastic scraper to remove the dried poultice. The material should be discolored where it drew oil out of the concrete.</li>
            <li className='text-slate-700 text-sm leading-relaxed'>Scrub the area with a stiff brush and degreaser, then rinse thoroughly.</li>
            <li className='text-slate-700 text-sm leading-relaxed'>Let dry completely and assess. For deep or long-standing stains, a second or third application is usually needed.</li>
          </ol>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Commercial poultice shortcut:</strong> Pour-N-Restore is a ready-made poultice. Pour it on, spread with a putty knife, let it dry to a powder (4 to 8 hours), and sweep it up. Works well on stains up to a few years old. Not recommended for asphalt.</p>

          <h3 className='text-lg font-semibold text-slate-800 mb-3'>What to Expect From Old Stains</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Set realistic expectations before starting. A stain in the concrete for several years has penetrated deeply and may have stained the concrete at a chemical level. Multiple poultice applications will typically reduce these stains by 70 to 90 percent. Complete removal is often not achievable on bare concrete stains more than 2 years old.</p>
          <p className='text-slate-700 text-sm leading-relaxed'>If a stain cannot be fully removed, sealing the floor after treatment locks in the remaining discoloration and prevents new oil from penetrating. Applying an epoxy or polyurea floor coating is the most effective solution for severe long-term staining — it covers the stain entirely and makes future spills trivial to wipe up.</p>
        </section>

        {/* What Not to Do */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>What Not to Do</h2>
          <div className='overflow-x-auto mb-4'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Mistake</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Why It Makes Things Worse</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Wiping a fresh spill with rags or paper towels</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Spreads oil over a larger area and drives it deeper into pores</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Using dish soap on an old stain</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Does not penetrate concrete; can push oil deeper</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Pressure washing without treating first</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Drives oil further into the concrete rather than removing it</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Applying bleach to oil stains</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Bleach does not remove oil; it bleaches surrounding concrete, making the stain more visible</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Sealing or painting over an untreated stain</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Oil wicks back through any sealer or paint within weeks to months</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Using WD-40 to remove oil</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>WD-40 is a petroleum lubricant, not a cleaner; it adds more oil</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Leaving cat litter for only a few minutes</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Needs at least 1 hour on a fresh spill; overnight is better for large spills</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Disposal */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Disposal: Do Not Wash Oil Into the Drain</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Oil-soaked cleaning materials and rinse water must be disposed of correctly. Under the <a href='https://www.epa.gov/hw/managing-used-oil-answers-frequent-questions-businesses' target='_blank' rel='noopener noreferrer' className='text-amber-700 underline'>EPA&apos;s Clean Water Act</a>, discharging oil into storm drains is prohibited. Oil that reaches storm drains flows directly to waterways without treatment. Less than 1 quart of motor oil can contaminate up to 250,000 gallons of drinking water.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>Correct disposal:</strong></p>
          <ul className='space-y-1 mb-4'>
            <li className='text-slate-700 text-sm leading-relaxed'>Oil-soaked cat litter, sawdust, or absorbents: seal in a plastic bag and place in regular household trash</li>
            <li className='text-slate-700 text-sm leading-relaxed'>Oil-soaked rags: seal in a plastic bag and place in household trash, or bring to a hazardous waste collection event</li>
            <li className='text-slate-700 text-sm leading-relaxed'>Rinse water with degreaser or solvent residue: do not wash into floor drains that connect to storm systems. If your garage floor drain connects to a sanitary sewer, small amounts of degreaser rinse are typically acceptable — check with your municipality first.</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed'>Most counties hold free household hazardous waste collection events for motor oil, solvents, and contaminated materials. Check your county&apos;s website for schedule and accepted materials.</p>
        </section>

        {/* How to Seal Your Floor After Treatment */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>How to Seal Your Floor After Treatment</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Cleaning an oil stain on bare concrete and leaving the floor unsealed guarantees the next spill becomes a permanent stain. After any oil stain treatment, seal the floor to prevent future penetration.</p>

          <h3 className='text-lg font-semibold text-slate-800 mb-3'>Sealer Options by Budget and Use Case</h3>
          <div className='overflow-x-auto mb-4'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Sealer Type</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Cost (Two-Car Garage)</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Protection Level</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>DIY?</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Acrylic concrete sealer</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$40 to $80</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Moderate</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Yes</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Easy to apply; re-seal every 2 to 3 years</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Penetrating silane/siloxane sealer</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$60 to $120</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Good</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Yes</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Soaks in rather than coating; invisible finish; lasts 5 to 10 years</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Epoxy floor coating</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$150 to $400 DIY</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Excellent</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>DIY possible</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Requires thorough surface prep; oil beads on surface</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Polyurea floor coating</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$1,500 to $3,500 professional</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Best</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Pro recommended</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>4x harder than epoxy; same-day installation; resists chemicals</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Before sealing:</strong> The concrete must be completely clean and dry. Any residual oil under a sealer will bleed back through within weeks. After cleaning, wait at least 72 hours before applying sealer. Do a water test — sprinkle water on the surface. If it beads, existing sealer is still present. If it soaks in, the surface is ready.</p>
          <p className='text-slate-700 text-sm leading-relaxed'>For full cost details, see our <Link href='/cost-guides/garage-floor-coating-cost' className='text-amber-700 underline'>garage floor coating cost guide</Link> and <Link href='/cost-guides/epoxy-garage-floor-cost' className='text-amber-700 underline'>epoxy garage floor cost guide</Link>.</p>
        </section>

        {/* FAQ */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Frequently Asked Questions</h2>
          <div className='space-y-4'>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>How do I remove fresh oil from a garage floor?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Cover the wet spill immediately with clay cat litter, oil-dry absorbent, or baking soda. Press it lightly into the oil and leave for at least 1 hour — overnight for large spills. Sweep up the absorbent and dispose of it in a sealed bag in the trash. Then apply a commercial concrete degreaser, wet the area first, scrub with a stiff brush, and rinse. Fresh spills treated within 48 hours can usually be removed near-completely on unsealed concrete.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>What removes old oil stains from concrete?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Old embedded oil stains require a poultice — a thick paste of absorbent material and solvent spread over the stain, covered with plastic sheeting, and left for 24 to 48 hours. As the poultice dries slowly, it pulls oil up from deep in the concrete&apos;s pores through osmosis. Commercial options include Pour-N-Restore ($15 to $20) and Prosoco Oil and Grease Stain Remover ($25 to $35). Multiple applications are usually needed for stains more than 6 months old. Surface degreasers alone cannot reach deeply embedded oil.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Does WD-40 remove oil stains from concrete?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>No. WD-40 is a petroleum-based product — using it on an oil stain adds more oil to the problem. Some sources suggest WD-40 can loosen old oil, but in practice it leaves the concrete more contaminated. Use a commercial alkaline degreaser or a poultice instead.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Can I use bleach to remove oil stains from my garage floor?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>No. Bleach does not break down or remove oil. It bleaches the concrete around the stain, which can make the dark oil stain appear even more prominent against lighter surrounding concrete. Bleach is appropriate for mold, mildew, and general concrete discoloration but has no effect on petroleum-based oil stains.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Why does my garage floor keep showing oil stains after I clean them?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Oil that was not fully removed from deep in the concrete wicks back to the surface as the concrete dries. This is called oil bleedback. It happens when surface treatment was used without a poultice on a deep, old stain. The degreaser removes oil from the top layer, but oil in the lower pores eventually migrates back up. The solution is multiple poultice applications followed by sealing the floor after treatment.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>How do I get oil stains off an epoxy garage floor?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Epoxy and polyurea coated floors do not absorb oil — the coating prevents penetration. Clean with a commercial degreaser and a mop or soft brush. Do not use solvents like acetone or lacquer thinner, as these can damage or cloud the coating. Do not use pressure washing above 1,500 PSI, which can lift coating at edges or weak spots.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Is it safe to wash oil-stained water down the floor drain?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>It depends on where your floor drain connects. If it connects to a sanitary sewer, small amounts of degreaser rinse water are typically acceptable — check with your municipality first. If the drain connects to a storm system or leads outside, do not wash oily water into it. Under the EPA&apos;s Clean Water Act, discharging oil into storm drains is prohibited. Contain rinse water and dispose of it through your local household hazardous waste program.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>How much does it cost to remove oil stains from a garage floor professionally?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Professional concrete cleaning and degreasing for a two-car garage typically costs $150 to $400, depending on stain severity and floor condition. Full floor coating installation — epoxy or polyurea — runs $1,500 to $3,500 professionally and eliminates oil stain problems permanently, since oil cannot penetrate a coated surface. DIY supplies for the poultice method and a degreaser cost $20 to $50 for most stains.</p>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Related Guides</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Link href='/cost-guides/garage-floor-coating-cost' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Cost Guide</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Floor Coating Cost</p>
              <p className='text-slate-500 text-xs mt-1'>What epoxy and other coatings cost installed in 2026.</p>
            </Link>
            <Link href='/cost-guides/epoxy-garage-floor-cost' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Cost Guide</span>
              <p className='font-semibold text-slate-800 text-sm'>Epoxy Garage Floor Cost</p>
              <p className='text-slate-500 text-xs mt-1'>Full breakdown of DIY vs professional epoxy.</p>
            </Link>
            <Link href='/problems/cracked-garage-floor' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Problem</span>
              <p className='font-semibold text-slate-800 text-sm'>Cracked Garage Floor</p>
              <p className='text-slate-500 text-xs mt-1'>How to assess and repair concrete cracks.</p>
            </Link>
            <Link href='/problems/water-leaking-into-garage' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Problem</span>
              <p className='font-semibold text-slate-800 text-sm'>Water Leaking Into Garage</p>
              <p className='text-slate-500 text-xs mt-1'>Finding and fixing garage water intrusion.</p>
            </Link>
            <Link href='/guides/complete-garage-guide' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Guide</span>
              <p className='font-semibold text-slate-800 text-sm'>Complete Garage Guide</p>
              <p className='text-slate-500 text-xs mt-1'>Everything a homeowner needs to know about their garage.</p>
            </Link>
          </div>
        </section>

        {/* Glossary */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Glossary</h2>
          <div className='space-y-3'>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Poultice</p>
              <p className='text-slate-700 text-sm'>A thick paste made from an absorbent material (such as diatomaceous earth, sawdust, or powdered cat litter) combined with a solvent (acetone, lacquer thinner, or a commercial oil remover). Applied over an embedded oil stain and covered with plastic, a poultice uses osmosis to reverse oil migration. The solvent breaks down oil deep in the concrete while the absorbent material draws it upward as the poultice dries. Dwell time is 24 to 48 hours. The primary method for removing old, deep stains that surface degreasers cannot reach.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Concrete degreaser</p>
              <p className='text-slate-700 text-sm'>An alkaline cleaning product formulated to break down petroleum-based oils and lift them from concrete pores. Works by emulsifying oil so it can be rinsed away with water. Most effective on fresh to medium-age stains (up to a few months old). Commercial options include Simple Green Concrete Cleaner, Oil Eater, Purple Power, and Zep Driveway Cleaner. Not effective alone on deeply embedded stains without a poultice step.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Trisodium phosphate (TSP)</p>
              <p className='text-slate-700 text-sm'>A heavy-duty alkaline cleaner available at hardware stores for $8 to $12. Mixed with hot water at 1/2 cup per gallon and applied to oil stains, TSP penetrates deeper than most household degreasers. Particularly effective on set stains that standard degreasers have not fully removed. Requires rubber gloves and eye protection. Not safe on sealed, painted, or epoxy-coated floors, as it strips finishes.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Oil bleedback</p>
              <p className='text-slate-700 text-sm'>The process by which oil that was not fully removed from the deep pores of concrete migrates back to the surface over days or weeks. Causes a stain to reappear after cleaning. The only remedy is complete oil removal using a poultice, followed by sealing the floor to block future migration. Oil bleedback is the primary reason stains appear to return after treatment with surface-only degreasers.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Concrete porosity</p>
              <p className='text-slate-700 text-sm'>The degree to which concrete absorbs liquids through its network of microscopic pores and channels. Unsealed concrete is highly porous — a fresh oil spill begins penetrating immediately and reaches 1 to 2 inches deep within 48 hours. Sealed concrete is less porous; oil sits on the surface longer. Epoxy and polyurea coated floors are non-porous at the surface — oil cannot penetrate at all.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Acrylic concrete sealer</p>
              <p className='text-slate-700 text-sm'>A clear or pigmented surface coating applied to concrete to reduce porosity and protect against stain penetration. Sits on top of the concrete rather than soaking in. Needs reapplication every 2 to 3 years. Easy to apply with a roller or sprayer. Provides moderate protection against oil — oil that sits on an acrylic-sealed floor for more than a few hours can still penetrate if the sealer is worn in high-traffic areas.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Epoxy floor coating</p>
              <p className='text-slate-700 text-sm'>A two-part coating system (resin plus hardener) applied to concrete floors to create a hard, non-porous surface. Oil cannot penetrate epoxy and can be cleaned with a degreaser and mop. Standard epoxy costs $150 to $400 for a DIY two-car garage installation and lasts 5 to 10 years with proper surface preparation. Requires thorough oil removal before application — residual oil prevents adhesion and causes peeling.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Osmosis (poultice context)</p>
              <p className='text-slate-700 text-sm'>The movement of a substance from an area of higher concentration to an area of lower concentration through a permeable medium. In a poultice applied to concrete, the solvent creates a high concentration of dissolved oil at the concrete surface while the dry absorbent material above creates a low-concentration zone. Oil migrates upward from the concrete into the drying poultice, pulling embedded stains to the surface where they can be swept away.</p>
            </div>
            <div>
              <p className='font-semibold text-slate-800 text-sm'>Polyurea floor coating</p>
              <p className='text-slate-700 text-sm'>A professional-grade, two-component floor coating that is approximately four times harder than epoxy. Applied by professionals in a single day, polyurea creates a completely non-porous surface that resists chemicals, hot tire marks, and oil stains permanently. Costs $1,500 to $3,500 for a two-car garage. The most durable residential garage floor coating available and the most effective long-term solution for garages with chronic oil staining.</p>
            </div>
          </div>
        </section>

      </article>

      <LeadForm />

      {/* Schema Scripts */}
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </>
  )
}
