import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'How to Paint a Garage Door: A Complete Guide to Prep, Paint, and a Finish That Lasts | The Garage Guide',
  description: 'How to paint a garage door the right way. Material-specific prep, primer selection, brush vs roller vs sprayer, color and heat warnings, and how long it lasts.',
  alternates: {
    canonical: 'https://thegarage.guide/guides/how-to-paint-a-garage-door',
  },
  openGraph: {
    title: 'How to Paint a Garage Door: A Complete Guide to Prep, Paint, and a Finish That Lasts | The Garage Guide',
    description: 'How to paint a garage door the right way. Material-specific prep, primer selection, brush vs roller vs sprayer, color and heat warnings, and how long it lasts.',
    url: 'https://thegarage.guide/guides/how-to-paint-a-garage-door',
    siteName: 'The Garage Guide',
    type: 'article',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the best paint for a garage door?', acceptedAnswer: { '@type': 'Answer', text: '100% acrylic exterior latex paint in a semi-gloss or gloss finish is the best choice for any garage door material. Semi-gloss is more forgiving of surface imperfections and easier to apply without lap marks. Gloss provides maximum durability and UV resistance and cleans up more easily. Avoid flat or eggshell finishes. They do not shed water or resist dirt effectively on an exterior surface that faces weather and exhaust daily.' } },
    { '@type': 'Question', name: 'Do I need to prime a garage door before painting?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, in most cases. Primer is required for bare metal, aluminum, fiberglass, and any area where existing paint has been removed down to the substrate. It is optional if the existing paint is in sound condition, not changing color dramatically, and passes the tape test. Never skip primer on aluminum or fiberglass. Latex paint applied directly to these materials without a bonding primer will peel within weeks regardless of quality.' } },
    { '@type': 'Question', name: 'How do I paint a garage door without brush marks?', acceptedAnswer: { '@type': 'Answer', text: 'Use a 3/8-inch foam roller on flat panel surfaces and a quality nylon/polyester brush for panel edges and recesses. Apply thin coats. Thick coats are the primary cause of brush marks and runs. Thin latex paint slightly with water (no more than 10 percent) if brush marks persist. Work in the shade or on an overcast day. Heat and direct sun cause paint to skin over before you can brush it out. Never go back over a section that has started to dry.' } },
    { '@type': 'Question', name: 'Can I paint a garage door without removing it?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Disconnect the opener by pulling the red emergency release cord and move the door manually to different positions as needed to access different sections. Painting with the door in place is standard practice. The only reason to remove a door for painting is if you are using a spray booth for a showroom-quality finish.' } },
    { '@type': 'Question', name: 'How long does it take to paint a garage door?', acceptedAnswer: { '@type': 'Answer', text: 'A single-car door (8x7 feet) takes 4 to 6 hours total across two days (one for prep and priming, one for two coats of paint with dry time in between). A double door (16x7 feet) takes 6 to 8 hours across the same two-day window. Rushing the project into a single day by shortcutting dry times between coats is the most reliable way to cause peeling.' } },
    { '@type': 'Question', name: 'Should I paint my garage door with a brush or roller?', acceptedAnswer: { '@type': 'Answer', text: 'Use both. A 2-inch angled brush for panel recesses and edges, followed immediately by a 3/8-inch foam roller on the flat panel surfaces. The roller smooths out brush marks left by the cut-in work and produces a consistent finish across the full panel. This combination produces better results than either tool alone and is the technique professional painters use on paneled garage doors.' } },
    { '@type': 'Question', name: 'How much does it cost to paint a garage door?', acceptedAnswer: { '@type': 'Answer', text: 'DIY materials for a single-car garage door run $75 to $100. A double door runs $100 to $150. Hiring a professional painter costs $200 to $500 for a standard door depending on condition and location. The professional cost is worth considering if the door has significant peeling, rust, or surface damage that requires extensive prep.' } },
    { '@type': 'Question', name: 'What happens if I paint a garage door in cold weather?', acceptedAnswer: { '@type': 'Answer', text: 'Latex paint applied below 50 degrees Fahrenheit does not form a proper film. The paint thickens, brush and roller marks remain visible in the dried surface, and the finish becomes brittle and prone to cracking in the first freeze-thaw cycle of winter. Paint applied in cold weather often peels within the first season. If your project window falls below 50 degrees, reschedule for spring.' } },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Paint a Garage Door: A Complete Guide to Prep, Paint, and a Finish That Lasts',
  description: 'How to paint a garage door the right way. Material-specific prep, primer selection, brush vs roller vs sprayer, color and heat warnings, and how long it lasts.',
  url: 'https://thegarage.guide/guides/how-to-paint-a-garage-door',
  publisher: { '@type': 'Organization', name: 'The Garage Guide', url: 'https://thegarage.guide' },
}

export default function HowToPaintGarageDoorPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'How to Paint a Garage Door' }]} />
      <article className='container-custom py-8 max-w-4xl mx-auto'>
        {/* Hero Section */}
        <div className='relative rounded-xl overflow-hidden mb-8' style={{ minHeight: '400px' }}>
          <Image src='/images/how-to-paint-garage-door.jpg' alt='Homeowner painting a garage door panel with a brush and paint tray on a step ladder' fill className='object-cover' priority />
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent' />
          <div className='absolute bottom-0 left-0 right-0 p-6 md:p-10'>
            <span className='text-amber-700 font-bold text-xs uppercase tracking-wider'>Guide</span>
            <h1 className='text-3xl md:text-4xl font-bold text-white mt-1'>How to Paint a Garage Door: <span className='text-amber-500'>A Complete Guide to Prep, Paint, and a Finish That Lasts</span></h1>
            <p className='text-gray-200 mt-2 text-sm md:text-base max-w-2xl'>How to paint a garage door the right way. Material-specific prep, primer selection, brush vs roller vs sprayer, color and heat warnings, and how long it lasts.</p>
          </div>
        </div>

        {/* Byline Row */}
        <div className='flex items-center gap-3 mb-4'>
          <div className='w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center text-white font-bold text-sm'>GG</div>
          <div>
            <p className='text-slate-800 font-semibold text-sm'>The Garage Guide</p>
            <p className='text-gray-500 text-xs'>Updated Mar 2026 · 14 min read</p>
          </div>
          <span className='ml-auto inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded'>Guide</span>
        </div>

        {/* TL;DR */}
        <div style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75', padding: '16px 20px' }} className='rounded-r-lg mb-4'>
          <p style={{ color: '#1D9E75' }} className='text-sm font-bold mb-2'>TL;DR</p>
          <p className='text-slate-700 text-sm leading-relaxed'>Painting a garage door is a full weekend project, not an afternoon one. The prep takes longer than the painting. You need 100% acrylic exterior paint matched to your door material (steel, aluminum, wood, or fiberglass), a rust-inhibiting primer if there is any bare metal, and a temperature window of 50 to 85 degrees Fahrenheit with no rain in the 24-hour forecast. Expect 1 coat of primer and 2 coats of paint with full drying time between each. Done correctly, a painted garage door lasts 5 to 7 years on a south-facing exposure and 8 to 10 years on a north-facing one.</p>
        </div>

        {/* Intro */}
        <p className='text-slate-700 text-sm leading-relaxed mb-4'>Your garage door takes up more visual real estate on the front of your home than almost anything else. When the paint is faded, chipped, or peeling, it is not just the door that looks bad. It is the whole house. When the paint is fresh, clean, and the right color, the entire front elevation looks intentional.</p>
        <p className='text-slate-700 text-sm leading-relaxed mb-4'>The good news is that painting a garage door is one of the highest-return weekend projects you can do. A gallon of quality exterior paint costs $40 to $60. A quart of primer is $15 to $25. The whole job, done right, costs $75 to $150 in materials and gives you 5 to 10 years of curb appeal before you need to do it again.</p>
        <p className='text-slate-700 text-sm leading-relaxed mb-6'>The bad news is that most DIY garage door paint jobs fail early, not because of the paint, but because of the prep. Surface contamination, wrong primer, bad weather timing, or too-thick coats cause peeling within months on a job that should last years. This guide walks through all of it in the right order, starting with the decisions that determine the outcome before a brush touches the door.</p>

        {/* Step 1: Know Your Door Material */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Step 1: Know Your Door Material</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>The single most important decision in this project is matching your approach to your door material. Steel, aluminum, wood, and fiberglass all behave differently, need different primers, and accept paint differently. Skipping this step and grabbing whatever primer is on sale causes adhesion failure.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>How to identify your door material:</strong> Check the sticker on the inside face of the door. Most doors have a manufacturer label that lists the material. If the label is gone, tap the door. Steel sounds solid and dense, aluminum sounds lighter and slightly hollow, wood sounds definitively wooden, and fiberglass can sound similar to steel but feels lighter.</p>

          {/* Door Material Table */}
          <div className='overflow-x-auto mb-4'>
            <table className='w-full text-sm border-collapse border border-slate-300'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Door Material</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Paint Type</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Primer Required</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Special Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Steel</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>100% acrylic exterior latex</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Rust-inhibiting primer on bare or rusted spots</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Most common door type. Sand glossy surfaces before priming</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Aluminum</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>100% acrylic exterior latex</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Bonding primer required (acrylic does not adhere to bare aluminum)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Never skip primer on aluminum (paint will peel within weeks)</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Wood</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>100% acrylic exterior latex or oil-based</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Stain-blocking primer if wood has tannin bleed or dark staining</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Check for rot before painting (paint will not fix structural damage)</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Fiberglass</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>100% acrylic exterior latex</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Bonding primer or manufacturer-specified primer</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Avoid oil-based paint on fiberglass (it can cause surface cracking over time)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Galvanized steel exception:</strong> If your door is galvanized (shiny, zinc-coated raw steel), standard primer and paint will not bond to the surface properly. Either use a specific galvanized metal primer or apply an etching primer first. Painting over galvanized metal without the right primer results in peeling within weeks regardless of paint quality.</p>
        </section>

        {/* Step 2: The Surface Test */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Step 2: The Surface Test: Is Your Existing Paint Sound?</h2>

          <div className='bg-red-50 border-l-4 border-red-500 p-4 rounded mb-4'>
            <h3 className='font-semibold text-red-800 text-sm mb-1'>Critical First Test</h3>
            <p className='text-slate-700 text-sm'>Before buying a drop of paint, do this test. Press a piece of painter&apos;s tape firmly against the existing painted surface and pull it off sharply. If paint comes up on the tape, the existing coat has failed its bond with the door and must be removed before repainting. Painting over a failing surface buries the problem for 6 to 8 weeks before the new coat fails the same way. If the tape pulls clean, the existing surface is sound and you can paint over it after washing and light sanding.</p>
          </div>

          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>If the existing paint passes the tape test:</strong> The surface is sound. Clean it, scuff it lightly with 150-grit sandpaper to create adhesion, wash off the dust, and you can apply new paint directly (primer is optional if you are not changing color dramatically).</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>If the existing paint fails the tape test:</strong> You must remove the failing paint before proceeding. Options by severity:</p>
          <ul className='list-disc pl-6 mb-4 space-y-1'>
            <li className='text-slate-700 text-sm'><strong>Light peeling:</strong> 80 to 120-grit sandpaper or a paint scraper. Sand until all loose paint is removed and edges are feathered smooth.</li>
            <li className='text-slate-700 text-sm'><strong>Moderate peeling across multiple panels:</strong> Chemical paint stripper applied per the manufacturer instructions, then neutralized and rinsed completely.</li>
            <li className='text-slate-700 text-sm'><strong>Severe or widespread failure:</strong> Consider whether the door is a good candidate for painting at all. A door with widespread adhesion failure may have underlying surface damage (rust, rot, or delamination) that paint will not solve.</li>
          </ul>
        </section>

        {/* Step 3: Pick the Right Weather Window */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Step 3: Pick the Right Weather Window</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Paint applied outside the correct temperature and humidity window fails regardless of quality. This is the mistake most often made on a project that works around a homeowner&apos;s schedule instead of around the forecast.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>The correct conditions:</strong></p>
          <ul className='list-disc pl-6 mb-4 space-y-1'>
            <li className='text-slate-700 text-sm'>Temperature: 50 to 85 degrees Fahrenheit during application and for at least 24 hours after</li>
            <li className='text-slate-700 text-sm'>Humidity: Below 70 percent</li>
            <li className='text-slate-700 text-sm'>No rain in the 24-hour forecast before or after painting</li>
            <li className='text-slate-700 text-sm'>No direct sunlight hitting the door surface while you are painting</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>Why each condition matters:</strong></p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Below 50 degrees, latex paint thickens, brush marks stay visible, and the paint film does not form correctly, resulting in a brittle finish that peels in the first freeze-thaw cycle.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Above 85 degrees, the paint surface skins over before the underlying layer cures, trapping moisture and solvents that cause bubbling and peeling. Direct sunlight on the door surface while painting causes the same problem even at lower air temperatures.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>High humidity prevents proper evaporation of water from latex paint, extending dry time unpredictably and increasing the risk of sagging, runs, and adhesion failure.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>The ideal scenario:</strong> An overcast morning in spring or fall, temperatures in the 60s, with a dry 48-hour window. If you cannot hit this window, reschedule. Weather-related paint failures cannot be fixed without stripping and repainting.</p>
        </section>

        {/* Step 4: Gather Materials */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Step 4: Gather Materials</h2>
          <div className='overflow-x-auto mb-4'>
            <table className='w-full text-sm border-collapse border border-slate-300'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Item</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Specification</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Exterior acrylic paint</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>100% acrylic, semi-gloss or gloss finish</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$40 to $60 per gallon</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Primer</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Rust-inhibiting for steel; bonding primer for aluminum and fiberglass</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$15 to $25 per quart</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Sandpaper</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>80-grit (heavy sanding), 150-grit (scuffing), 220-grit (final smoothing)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$8 to $15</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>TSP cleaner or degreaser</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Removes grease, exhaust residue, and chalk</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$8 to $12</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Painter&apos;s tape</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>1.5-inch, exterior grade</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$6 to $10</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Drop cloth</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Canvas or plastic, for floor and driveway</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$10 to $20</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Brush (2 to 2.5 inch angled sash)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Nylon/polyester for latex paint</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$8 to $15</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Foam roller (3/8-inch nap)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>For flat panel areas</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$5 to $10</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Wire brush</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>For rust removal on steel doors</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$5 to $8</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Rust-inhibiting spot primer</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>For bare metal or rusted areas only</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$10 to $15</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Total materials cost: $75 to $150</strong> for a standard two-car garage door, assuming one coat of primer and two coats of paint.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>How much paint do you need:</strong> A standard 8x7-foot single garage door requires approximately 1 quart of paint per coat. A 16x7-foot double door requires approximately 1 gallon per coat. Buy slightly more than calculated. Running short during a coat and introducing a new can mid-panel creates visible lap lines.</p>
        </section>

        {/* Step 5: Prep the Surface */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Step 5: Prep the Surface</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Prep determines how long the paint lasts. A paint job over a clean, properly sanded, fully dry surface lasts 5 to 10 years. The same paint over an improperly prepared surface may last 6 months. Take the time here.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Clean the Door</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Mix 1/4 cup of TSP cleaner (trisodium phosphate) with 1 gallon of warm water. For mildew stains, substitute a solution of 1 part bleach to 4 parts water. Wash the entire door surface with a soft brush or sponge, getting into all panel recesses and edges. Rinse thoroughly with clean water and allow to dry completely, at minimum 24 hours in dry weather, longer in high humidity.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Do not use a pressure washer directly on the door surface. Pressure washing can drive water behind panels, damage weatherstripping, and chip existing paint. Use a garden hose with a standard nozzle for rinsing.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Remove Rust (Steel Doors)</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Any rust must be addressed before priming. Use a wire brush to remove loose rust down to clean metal. Feather the edges of the sound paint surrounding the rust spot with 80-grit sandpaper until there is no ridge between bare metal and existing paint. Apply a rust-inhibiting spot primer to all bare metal areas. Allow to dry fully before applying full-surface primer.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Sand the Surface</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Lightly sand the entire door surface with 150-grit sandpaper. The goal is not to remove paint. It is to dull the existing finish so the new paint has something to grip. Pay particular attention to any glossy sections where the original finish is intact. A glossy surface has almost no mechanical adhesion. New paint applied over a gloss finish without sanding tends to peel in sheets.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>After sanding, wipe the surface with a tack cloth or damp rag to remove all dust. Allow to dry before priming.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Tape and Protect</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Apply painter&apos;s tape to all hardware, hinges, windows (if any), and the door frame perimeter. Lay a drop cloth on the driveway and ground beneath the door. Disconnect the <Link href='/reviews/best-garage-door-openers' className='text-amber-700 underline'>garage door opener</Link> by pulling the red emergency release cord so you can move the door manually to different positions while painting.</p>
        </section>

        {/* Step 6: Apply Primer */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Step 6: Apply Primer</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Primer is not optional for bare metal, aluminum, fiberglass, or any surface with repaired spots. It is the foundation that the finish coat bonds to. Skipping it on these surfaces is the most reliable way to cause premature peeling.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Apply primer starting at the top panel and working down. Use a 2-inch angled brush to cut in around panel edges and recesses. Fill panel centers with a 3/8-inch foam roller. Keep a wet edge at all times. Primer that dries before you blend the adjacent section creates visible ridges.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Allow primer to dry for the full time specified on the label, typically 2 to 4 hours for fast-dry primers, 12 hours for standard. Do not rush this. Painting over undercured primer traps solvents and causes adhesion failure.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>One coat of primer is sufficient for most surfaces. Two coats may be needed if you are covering bare metal that was heavily rusted, or if the new color is dramatically lighter than the existing surface.</p>
        </section>

        {/* Step 7: Paint Application */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Step 7: Paint Application: Brush, Roller, or Sprayer?</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Each application method has a place in this project. The best result comes from combining two of them, not choosing one.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Brush Only</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Best for: Doors with heavy panel detail, recesses, and molding. Gives the most control. Slowest method. Higher risk of brush marks if paint is too thick or technique is inconsistent.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>To avoid brush marks:</strong> Use a high-quality nylon/polyester brush. Thin the paint slightly with water (no more than 10 percent by volume for latex). Apply in long, smooth strokes in one direction. Never go back over a section that has begun to dry.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Roller Only</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Best for: Flat or low-profile doors. Significantly faster than brush. Leaves a slight orange-peel texture that is typical for exterior surfaces and actually aids durability by providing more surface area.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>3/8-inch nap</strong> is the correct roller cover for most garage door surfaces. Thicker nap leaves too much texture. Thinner nap does not hold enough paint for adequate coverage.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Brush and Roller Combined (Recommended)</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Use a brush to cut in all recessed panel areas, edges, and trim. Immediately follow with a roller on all flat panel surfaces. The roller smooths out brush marks from the cut-in work and produces a consistent finish across the full panel. This is the method professionals use.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Sprayer</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Best for: A perfectly smooth finish on flat or low-profile doors. Produces the most professional result. Requires the most prep (masking everything within spray drift range, 6 to 10 feet in all directions), the most experience, and the most cleanup. A sprayer in the hands of someone unfamiliar with technique produces runs, uneven coverage, and overspray on the driveway and siding.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>If you want to use a sprayer: Apply two thin passes rather than one heavy one. Keep the sprayer moving at all times. Never stop moving while spraying. Pausing with the trigger held produces runs instantly.</p>
        </section>

        {/* Step 8: Apply Two Coats */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Step 8: Apply Two Coats</h2>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>First Coat</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Start at the top panel and work down. Paint all recessed areas first with the brush, then roll or brush the flat surfaces. Work one panel at a time, keeping a wet edge between panels to avoid lap marks.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Allow the first coat to dry completely before applying the second. Latex exterior paint typically requires 2 to 4 hours of dry time between coats at 70 degrees Fahrenheit. In cooler temperatures or higher humidity, add 50 to 100 percent to that estimate.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Do not assess coverage after the first coat.</strong> Latex paint looks patchy and uneven when wet. It looks different, often significantly better, when fully dry. Wait until the first coat is dry before deciding whether a second coat is needed.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Second Coat</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Apply in the same order and technique as the first coat. The second coat is what delivers the final color depth, gloss level, and durability. Do not skip it. A single coat of exterior paint, even a thick one, does not provide adequate UV protection or water resistance on an exterior surface that gets daily weather exposure.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Remove painter&apos;s tape while the second coat is still slightly tacky (not fully wet, not fully dry). Removing tape from fully dry paint pulls paint edges and leaves ragged lines. The ideal time is 30 to 60 minutes after the final coat.</p>
        </section>

        {/* The Color and Heat Warning */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>The Color and Heat Warning</h2>

          <div className='bg-red-50 border-l-4 border-red-500 p-4 rounded mb-4'>
            <h3 className='font-semibold text-red-800 text-sm mb-1'>Heat Warning for Dark Colors</h3>
            <p className='text-slate-700 text-sm'>If your garage door faces south or west and receives direct afternoon sun, dark colors (black, dark navy, hunter green, dark brown) cause significant heat buildup on metal doors. Surface temperatures on a dark south-facing steel door can reach 150 to 160 degrees Fahrenheit on a 90-degree summer day. This level of heat causes panel warping, paint breakdown, and in some cases voids the manufacturer warranty on the door itself. Some manufacturers will not honor warranty claims on doors painted dark colors in high-sun exposures. If you want a dark color on a south or west-facing door, use a paint specifically rated for high solar reflectance, and confirm with your door manufacturer that it does not affect your warranty.</p>
          </div>

          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Safe color choices for south-facing doors:</strong> White, off-white, light gray, beige, light sage, and similar light tones with Light Reflective Values (LRV) above 50.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Direction check:</strong> Stand in your driveway facing the garage door. Use your phone&apos;s compass. If you are facing north (the door faces south), be cautious with dark colors. If you are facing south (the door faces north), you have full latitude on color choices. North-facing doors get limited direct sun and handle dark colors without issue.</p>
        </section>

        {/* How Long Does Garage Door Paint Last? */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>How Long Does Garage Door Paint Last?</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Paint longevity depends primarily on sun exposure and surface prep quality. A correctly prepped door with quality 100% acrylic exterior paint lasts:</p>

          <div className='overflow-x-auto mb-4'>
            <table className='w-full text-sm border-collapse border border-slate-300'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Door Orientation</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Expected Paint Life</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>North-facing (minimal sun)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>8 to 10 years</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>East-facing (morning sun only)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>7 to 9 years</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>West-facing (afternoon sun)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>5 to 7 years</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>South-facing (full sun)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>4 to 6 years</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>Signs it is time to repaint:</strong></p>
          <ul className='list-disc pl-6 mb-4 space-y-1'>
            <li className='text-slate-700 text-sm'>Visible fading or chalking (a chalky residue that comes off on your hand when you touch the door)</li>
            <li className='text-slate-700 text-sm'>Peeling or flaking in any area</li>
            <li className='text-slate-700 text-sm'>Bare metal or wood visible anywhere</li>
            <li className='text-slate-700 text-sm'>The color looks significantly different from the house trim or body</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Touch-up between full repaints:</strong> Small chips and scratches can be touched up with a small brush using the original paint color. Touch up within the first year catches damage before moisture gets under the paint film and causes the chip to spread. For more on keeping your door in top shape between repaints, see the <Link href='/guides/garage-door-maintenance' className='text-amber-700 underline'>garage door maintenance checklist</Link>.</p>
        </section>

        {/* FAQ Section */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Frequently Asked Questions</h2>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>What is the best paint for a garage door?</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>100% acrylic exterior latex paint in a semi-gloss or gloss finish is the best choice for any garage door material. Semi-gloss is more forgiving of surface imperfections and easier to apply without lap marks. Gloss provides maximum durability and UV resistance and cleans up more easily. Avoid flat or eggshell finishes. They do not shed water or resist dirt effectively on an exterior surface that faces weather and exhaust daily.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Do I need to prime a garage door before painting?</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Yes, in most cases. Primer is required for bare metal, aluminum, fiberglass, and any area where existing paint has been removed down to the substrate. It is optional if the existing paint is in sound condition, not changing color dramatically, and passes the tape test. Never skip primer on aluminum or fiberglass. Latex paint applied directly to these materials without a bonding primer will peel within weeks regardless of quality.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>How do I paint a garage door without brush marks?</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Use a 3/8-inch foam roller on flat panel surfaces and a quality nylon/polyester brush for panel edges and recesses. Apply thin coats. Thick coats are the primary cause of brush marks and runs. Thin latex paint slightly with water (no more than 10 percent) if brush marks persist. Work in the shade or on an overcast day. Heat and direct sun cause paint to skin over before you can brush it out. Never go back over a section that has started to dry.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Can I paint a garage door without removing it?</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Yes. Disconnect the opener by pulling the red emergency release cord and move the door manually to different positions as needed to access different sections. Painting with the door in place is standard practice. The only reason to remove a door for painting is if you are using a spray booth for a showroom-quality finish.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>How long does it take to paint a garage door?</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>A single-car door (8x7 feet) takes 4 to 6 hours total across two days (one for prep and priming, one for two coats of paint with dry time in between). A double door (16x7 feet) takes 6 to 8 hours across the same two-day window. Rushing the project into a single day by shortcutting dry times between coats is the most reliable way to cause peeling.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Should I paint my garage door with a brush or roller?</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Use both. A 2-inch angled brush for panel recesses and edges, followed immediately by a 3/8-inch foam roller on the flat panel surfaces. The roller smooths out brush marks left by the cut-in work and produces a consistent finish across the full panel. This combination produces better results than either tool alone and is the technique professional painters use on paneled garage doors.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>How much does it cost to paint a garage door?</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>DIY materials for a single-car garage door run $75 to $100. A double door runs $100 to $150. Hiring a professional painter costs $200 to $500 for a standard door depending on condition and location. The professional cost is worth considering if the door has significant peeling, rust, or surface damage that requires extensive prep. That prep work is where most DIY jobs go wrong. If the door is too far gone for paint, see the <Link href='/cost-guides/garage-door-replacement-cost' className='text-amber-700 underline'>garage door replacement cost guide</Link> for a full breakdown.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>What happens if I paint a garage door in cold weather?</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Latex paint applied below 50 degrees Fahrenheit does not form a proper film. The paint thickens, brush and roller marks remain visible in the dried surface, and the finish becomes brittle and prone to cracking in the first freeze-thaw cycle of winter. Paint applied in cold weather often peels within the first season. If your project window falls below 50 degrees, reschedule for spring. For more on protecting your garage through cold months, see <Link href='/guides/how-to-winterize-your-garage' className='text-amber-700 underline'>how to winterize your garage</Link>.</p>
        </section>

        {/* Related Guides */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Related Guides</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Link href='/guides/garage-door-maintenance' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Guide</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Door Maintenance</p>
              <p className='text-slate-500 text-xs mt-1'>Annual maintenance that extends the life of the surface you just painted.</p>
            </Link>
            <Link href='/reviews/best-garage-door-openers' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Review</span>
              <p className='font-semibold text-slate-800 text-sm'>Best Garage Door Openers</p>
              <p className='text-slate-500 text-xs mt-1'>If you are updating the exterior, the opener is the next upgrade.</p>
            </Link>
            <Link href='/cost-guides/garage-door-replacement-cost' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Cost Guide</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Door Replacement Cost</p>
              <p className='text-slate-500 text-xs mt-1'>When painting is not enough and replacement makes more sense.</p>
            </Link>
            <Link href='/guides/how-to-winterize-your-garage' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Guide</span>
              <p className='font-semibold text-slate-800 text-sm'>How to Winterize Your Garage</p>
              <p className='text-slate-500 text-xs mt-1'>Protect the paint job through winter with proper sealing.</p>
            </Link>
            <Link href='/problems/garage-door-wont-open' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Problem</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Door Won&apos;t Open</p>
              <p className='text-slate-500 text-xs mt-1'>If the door is having problems beyond cosmetics.</p>
            </Link>
          </div>
        </section>

        {/* Glossary */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Glossary</h2>
          <div className='space-y-3'>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Acrylic latex paint</p>
              <p className='text-slate-700 text-sm'>A water-based exterior paint formulated with 100% acrylic resins. The best choice for garage doors of any material. Acrylic latex adheres well to properly prepared surfaces, resists UV degradation, remains flexible through temperature swings (preventing cracking), and cleans up with water. Always specify 100% acrylic rather than vinyl acrylic or acrylic blend for exterior use.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Bonding primer</p>
              <p className='text-slate-700 text-sm'>A primer formulated to adhere to low-porosity, difficult-to-bond surfaces including aluminum, fiberglass, galvanized metal, and glossy existing paint. Standard primer does not adhere reliably to these surfaces. Bonding primer is required on aluminum and fiberglass garage doors before any topcoat. Skipping it causes peeling within weeks.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Rust-inhibiting primer</p>
              <p className='text-slate-700 text-sm'>A primer formulated for bare or rusted steel that contains rust-inhibiting additives (commonly zinc chromate or zinc phosphate) that slow the progression of oxidation under the paint film. Required on any bare steel or rusted spots before topcoat application. Apply it only to bare or rusted areas, not as a full-surface primer on already-painted steel.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>TSP (trisodium phosphate)</p>
              <p className='text-slate-700 text-sm'>A heavy-duty degreasing cleaner used to prepare exterior surfaces before painting. Removes grease, oil, exhaust residue, chalk, and mildew from garage door surfaces. Available at hardware stores in powder form ($8 to $12). Mix 1/4 cup per gallon of warm water. Always rinse thoroughly after TSP cleaning. Residual TSP interferes with paint adhesion.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Chalk</p>
              <p className='text-slate-700 text-sm'>The powdery white residue that forms on the surface of aged exterior paint as UV radiation breaks down the paint binder. A chalky surface must be cleaned before repainting. New paint applied over chalk bonds to the chalk, not the door, and peels when the chalk layer releases. Test for chalk by rubbing your hand across the door surface.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Light Reflective Value (LRV)</p>
              <p className='text-slate-700 text-sm'>A scale from 0 (black, absorbs all light) to 100 (white, reflects all light) that measures how much light a paint color reflects. Relevant for south and west-facing garage doors because low-LRV colors (below 25) cause significant heat buildup on metal doors. For south-facing metal doors, choose colors with LRV above 50 to minimize heat-related warping and paint degradation.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Semi-gloss finish</p>
              <p className='text-slate-700 text-sm'>A paint sheen level between satin and gloss. The recommended finish for garage doors. Semi-gloss provides good UV resistance and water shedding, cleans up easily, and is more forgiving of surface imperfections than full gloss. Flat and eggshell finishes are not appropriate for exterior door surfaces.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Lap mark</p>
              <p className='text-slate-700 text-sm'>A visible line or stripe in a dried paint surface caused by overlapping wet paint onto a section that has partially dried. Prevented by maintaining a wet edge, always overlapping the previous brush or roller stroke while it is still wet. Working in cooler temperatures and avoiding direct sun on the door surface while painting significantly reduces lap mark risk.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>EPA Safer Choice</p>
              <p className='text-slate-700 text-sm'>A certification program run by the <a href='https://www.epa.gov/saferchoice' target='_blank' rel='noopener noreferrer' className='text-amber-700 underline'>U.S. Environmental Protection Agency</a> that identifies products with safer chemical ingredients. When selecting paint and primer products, look for the Safer Choice label for formulations with lower volatile organic compound (VOC) levels and reduced environmental impact. Particularly relevant if you are painting with the garage door in the down position in a partially enclosed space.</p>
            </div>
          </div>
        </section>

        {/* Get Quote Form */}
        <LeadForm />

        {/* JSON-LD Schemas */}
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      </article>
    </>
  )
}
