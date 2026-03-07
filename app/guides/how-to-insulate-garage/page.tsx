import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Insulate Your Garage: Complete DIY Guide | The Garage Guide',
  description: 'Insulating your garage costs $1 to $3 per square foot for walls and $2 to $5 for the garage door. Learn which insulation type works best and how to install it yourself.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does it cost to insulate a garage?', acceptedAnswer: { '@type': 'Answer', text: 'DIY materials for a 2-car garage cost $300 to $1,500 depending on insulation type and areas covered. Professional installation costs $800 to $5,000. Fiberglass batts are the most affordable option ($0.50 to $1.50 per square foot). Spray foam is the most expensive ($2.00 to $5.00 per square foot) but provides the highest performance.' } },
    { '@type': 'Question', name: 'Is it worth insulating a garage?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, especially if the garage is attached to your house. Insulating the shared wall and ceiling (if there is a room above) directly reduces your home heating and cooling costs. If you use the garage as a workshop, home gym, or hobby space, insulation makes the space usable year-round.' } },
    { '@type': 'Question', name: 'What is the best insulation for a garage?', acceptedAnswer: { '@type': 'Answer', text: 'Fiberglass batts are the best choice for most DIY homeowners due to low cost, wide availability, and easy installation. For maximum performance, closed-cell spray foam provides the highest R-value per inch, acts as a moisture and air barrier, and adds structural rigidity. For garage doors, rigid foam board or a pre-made insulation kit is the best option.' } },
    { '@type': 'Question', name: 'Should I insulate my garage if it is not heated?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, if it is attached to your house. Even without heating the garage, insulation prevents the garage from becoming a cold or hot zone that affects adjacent living spaces. If the garage is detached and unheated, insulation is less critical but still helps protect stored items from temperature extremes and condensation.' } },
    { '@type': 'Question', name: 'Do I need a vapor barrier in my garage?', acceptedAnswer: { '@type': 'Answer', text: 'In cold climates (zones 5-7), yes. A vapor barrier on the warm side of the insulation prevents moisture from condensing inside the wall cavity, which can cause mold and rot. In hot or mixed climates (zones 1-4), a vapor barrier is generally not required on garage walls, but check your local building code.' } },
    { '@type': 'Question', name: 'Can I insulate my garage myself?', acceptedAnswer: { '@type': 'Answer', text: 'Yes for fiberglass batts, rigid foam, and garage door insulation kits. These are all standard DIY projects requiring basic tools and 1 to 2 days of work. Spray foam insulation should be installed by a professional due to the specialized equipment, safety requirements, and precision needed.' } },
  ],
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Insulate Garage Walls',
  description: 'Step-by-step guide to insulating garage walls with fiberglass batts.',
  totalTime: 'PT8H',
  estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '200-500' },
  supply: [
    { '@type': 'HowToSupply', name: 'Fiberglass batts (faced or unfaced)' },
    { '@type': 'HowToSupply', name: 'Vapor barrier (if required)' },
    { '@type': 'HowToSupply', name: 'Staples' },
    { '@type': 'HowToSupply', name: 'Expanding foam sealant' },
  ],
  tool: [
    { '@type': 'HowToTool', name: 'Utility knife' },
    { '@type': 'HowToTool', name: 'Tape measure' },
    { '@type': 'HowToTool', name: 'Staple gun' },
    { '@type': 'HowToTool', name: 'Safety glasses, gloves, dust mask' },
  ],
  step: [
    { '@type': 'HowToStep', name: 'Measure and inspect', text: 'Measure the cavity between each pair of studs (width and height). Check for electrical wiring, plumbing, and junction boxes.' },
    { '@type': 'HowToStep', name: 'Cut batts to fit', text: 'Cut fiberglass batts 1 inch longer than the cavity height so they friction-fit snugly. Never compress insulation.' },
    { '@type': 'HowToStep', name: 'Install batts', text: 'Press each batt into the cavity between studs. Fill completely with no gaps, voids, or compression.' },
    { '@type': 'HowToStep', name: 'Seal around penetrations', text: 'Use expanding foam sealant around electrical boxes, pipes, and any holes that pass through the wall.' },
    { '@type': 'HowToStep', name: 'Install vapor barrier if required', text: 'In cold climates (zones 5-7), staple a polyethylene vapor barrier over the insulated wall and seal all seams.' },
    { '@type': 'HowToStep', name: 'Cover with drywall', text: 'Most building codes require insulation on garage walls to be covered with 1/2-inch drywall or another fire-rated barrier.' },
  ],
}

const tableSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Garage Insulation Materials Comparison',
  description: 'Comparison of garage insulation materials including R-value, cost, DIY friendliness, and best uses.',
  variableMeasured: [
    { '@type': 'PropertyValue', name: 'Fiberglass batts', value: 'R-3.2 to R-3.8 per inch, $0.50-$1.50/sq ft, DIY friendly, Best for walls with open studs' },
    { '@type': 'PropertyValue', name: 'Rigid foam board (XPS)', value: 'R-5.0 per inch, $0.75-$2.00/sq ft, DIY friendly, Best for garage doors and masonry walls' },
    { '@type': 'PropertyValue', name: 'Rigid foam board (polyiso)', value: 'R-6.0 to R-6.5 per inch, $0.80-$2.50/sq ft, DIY friendly, Best for maximum R-value in thin profile' },
    { '@type': 'PropertyValue', name: 'Blown-in cellulose', value: 'R-3.5 to R-3.7 per inch, $0.80-$1.50/sq ft, Moderate DIY, Best for finished walls and ceilings' },
    { '@type': 'PropertyValue', name: 'Spray foam (open cell)', value: 'R-3.5 to R-3.7 per inch, $1.00-$2.50/sq ft, Hire a pro, Best for air sealing and irregular cavities' },
    { '@type': 'PropertyValue', name: 'Spray foam (closed cell)', value: 'R-6.0 to R-6.5 per inch, $2.00-$5.00/sq ft, Hire a pro, Best for maximum performance and moisture barrier' },
    { '@type': 'PropertyValue', name: 'Radiant barrier foil', value: 'Reflects radiant heat, $0.25-$0.75/sq ft, DIY friendly, Best for hot climates and garage doors' },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Insulate Your Garage: Complete DIY Guide',
  description: 'Insulating your garage costs $0.50 to $3.00 per square foot for materials DIY or $1.50 to $5.00 per square foot professionally installed. Complete guide to insulation types, R-values, and step-by-step installation.',
  image: 'https://thegarage.guide/images/insulate%20garage.jpg',
  datePublished: '2026-03-07',
  dateModified: '2026-03-07',
  author: { '@type': 'Organization', name: 'The Garage Guide', url: 'https://thegarage.guide' },
  publisher: { '@type': 'Organization', name: 'The Garage Guide', url: 'https://thegarage.guide' },
}

export default function HowToInsulateGarage() {
  return (
    <>
      <article className='container-custom py-8 max-w-4xl mx-auto'>
        {/* Hero Section */}
        <div className='relative rounded-xl overflow-hidden mb-8' style={{ minHeight: '400px' }}>
          <Image
            src='/images/insulate garage.jpg'
            alt='How to insulate your garage DIY guide'
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent' />
          <div className='absolute bottom-0 left-0 right-0 p-6 md:p-10'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center text-white font-bold text-sm'>GG</div>
              <div>
                <p className='text-white font-semibold text-sm'>The Garage Guide</p>
                <p className='text-gray-300 text-xs'>Updated Mar 2026 &middot; 20 min read</p>
              </div>
            </div>
            <span className='text-amber-700 font-bold text-xs uppercase tracking-wider'>Guide</span>
            <h1 className='text-3xl md:text-4xl font-bold text-white mt-1'>How to Insulate Your Garage <span className='text-amber-500'>Complete DIY Guide</span></h1>
            <p className='text-gray-200 mt-2 text-sm md:text-base max-w-2xl'>What to insulate first, which materials to use, the R-values you need for your climate, and the step-by-step process for each area.</p>
          </div>
        </div>

        {/* Intro */}
        <p className='text-slate-700 text-sm leading-relaxed mb-4'>Insulating a garage costs $0.50 to $3.00 per square foot for materials (DIY) or $1.50 to $5.00 per square foot professionally installed. For a standard 2-car garage, expect $300 to $1,500 in materials for a complete DIY job covering walls, ceiling, and door. The most effective approach for most homeowners is fiberglass batts in the walls ($0.50 to $1.50/sq ft), fiberglass or blown-in insulation in the ceiling ($0.80 to $2.00/sq ft), and a garage door insulation kit ($50 to $200).</p>
        <p className='text-slate-700 text-sm leading-relaxed mb-4'>If your garage is attached to your house, insulation isn&apos;t just about comfort. It&apos;s about energy bills. An uninsulated attached garage acts as a heat sink in winter and a heat source in summer, forcing your HVAC system to work harder to maintain temperature in adjacent rooms. According to the <a href='https://www.energy.gov/energysaver/insulation' target='_blank' rel='noopener noreferrer' className='text-amber-700 underline'>Department of Energy</a>, properly insulating the boundary between your garage and living space can reduce energy loss through that wall by 60 to 70 percent.</p>
        <p className='text-slate-700 text-sm leading-relaxed mb-4'>This guide covers what to insulate first, which materials to use, the R-values you need for your climate, and the step-by-step process for each area.</p>

                {/* What to Insulate First */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>What to Insulate First (Priority Order)</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Not every surface in your garage matters equally. Focus your budget and effort on the areas that deliver the biggest return first.</p>
          <div className='overflow-x-auto mb-4'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Priority</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Area</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Why It Matters</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Typical Cost (DIY)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>1</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Shared wall with house</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Largest source of energy loss to living space</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$100 - $300</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>2</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Ceiling (if room above)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Heat rises — uninsulated ceiling loses heat to room above or attic</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$200 - $600</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>3</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Garage door</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Largest surface area and usually zero insulation</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$50 - $200</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>4</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Exterior walls</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Exposed to outside temps, important for conditioned garages</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$150 - $500</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>5</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Floor</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Least impactful for most garages unless converting to living space</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$200 - $800</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>If your garage is detached, skip priority 1 and focus on the ceiling, door, and exterior walls.</p>
        </section>

        {/* R-Values by Climate Zone */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>R-Values You Need by Climate Zone</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>The <a href='https://www.energy.gov/energysaver/insulation' target='_blank' rel='noopener noreferrer' className='text-amber-700 underline'>Department of Energy</a> recommends different insulation levels depending on where you live. Use this table to find the right R-value for your garage.</p>
          <div className='overflow-x-auto mb-4'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Climate Zone</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Region Examples</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Walls (Shared + Exterior)</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Ceiling</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Garage Door</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>1-2 (Hot)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>South FL, TX coast, HI</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>R-11 to R-13</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>R-30</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>R-6 to R-8</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>3-4 (Mixed)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>NC, TN, CA, OK, VA</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>R-13 to R-15</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>R-38</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>R-8 to R-10</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>5-6 (Cold)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>NY, OH, PA, CO, WA</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>R-15 to R-21</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>R-49</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>R-10 to R-13</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>7 (Very Cold)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>MN, WI, ME, MT, AK</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>R-21+</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>R-49 to R-60</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>R-13+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>You can find your exact climate zone on the <a href='https://basc.pnnl.gov/images/iecc-climate-zone-map' target='_blank' rel='noopener noreferrer' className='text-amber-700 underline'>IECC Climate Zone Map</a>. When in doubt, go with the higher R-value. Over-insulating costs a little more upfront but saves energy for the life of the home.</p>
        </section>

        {/* Insulation Materials Comparison */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Insulation Materials Comparison</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Each insulation type has tradeoffs between cost, performance, and ease of installation. Here is a side-by-side comparison of every common option.</p>
          <div className='overflow-x-auto mb-4'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Material</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>R-Value per Inch</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Cost per Sq Ft</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>DIY?</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Fiberglass batts</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>R-3.2 to R-3.8</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$0.50 - $1.50</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Yes</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Walls with open studs</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Rigid foam (XPS)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>R-5.0</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$0.75 - $2.00</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Yes</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Garage doors, masonry walls</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Rigid foam (polyiso)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>R-6.0 to R-6.5</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$0.80 - $2.50</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Yes</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Max R-value in thin profile</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Blown-in cellulose</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>R-3.5 to R-3.7</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$0.80 - $1.50</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Moderate</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Finished walls and ceilings</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Spray foam (open cell)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>R-3.5 to R-3.7</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$1.00 - $2.50</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Hire a pro</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Air sealing, irregular cavities</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Spray foam (closed cell)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>R-6.0 to R-6.5</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$2.00 - $5.00</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Hire a pro</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Max performance, moisture barrier</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Radiant barrier foil</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Reflects radiant heat</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$0.25 - $0.75</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Yes</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Hot climates, garage doors</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>For most DIY homeowners, fiberglass batts offer the best combination of low cost, easy installation, and solid performance. If you want the highest R-value per inch and a built-in moisture barrier, closed-cell spray foam is the premium choice but requires professional installation.</p>
        </section>

        {/* How to Insulate Garage Walls */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>How to Insulate Garage Walls (Step by Step)</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Fiberglass batts are the most common DIY choice for garage walls. This process assumes your walls have exposed studs (no drywall). If the walls are already finished, skip to the blown-in cellulose option below.</p>

          <h3 className='text-lg font-semibold text-slate-800 mb-2'>What You Need</h3>
          <ul className='list-disc pl-5 text-slate-700 text-sm space-y-1 mb-4'>
            <li>Fiberglass batts (R-13 for 2x4 walls, R-19 or R-21 for 2x6 walls)</li>
            <li>Utility knife</li>
            <li>Tape measure</li>
            <li>Staple gun and staples</li>
            <li>Expanding foam sealant (for gaps and penetrations)</li>
            <li>Vapor barrier / polyethylene sheeting (cold climates, zones 5-7)</li>
            <li>Safety glasses, work gloves, long sleeves, dust mask</li>
          </ul>

          <h3 className='text-lg font-semibold text-slate-800 mb-2'>Step 1: Inspect and Prep the Walls</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Check for moisture, mold, and structural damage. Repair any issues before insulating. Identify all electrical wiring, junction boxes, plumbing, and vents. Use expanding foam to seal any holes or gaps where air can pass through the wall (sill plate, around pipes, behind electrical boxes).</p>

          <h3 className='text-lg font-semibold text-slate-800 mb-2'>Step 2: Measure the Cavities</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Measure the width and height of each stud cavity. Standard stud spacing is 16 inches on center, which means the cavity is about 14.5 inches wide. Batts are sold in 15-inch and 23-inch widths to fit 16-inch and 24-inch stud spacing. Cut batts 1 inch longer than the cavity height for a snug friction fit.</p>

          <h3 className='text-lg font-semibold text-slate-800 mb-2'>Step 3: Install the Batts</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Press each batt into the cavity between studs. The batt should fill the cavity completely with no gaps, voids, or compression. If using faced batts (with a paper or foil vapor retarder), the facing goes toward the warm side of the wall (toward the garage interior in cold climates). Split batts around electrical wires by peeling the batt into two layers and tucking one behind the wire and one in front.</p>

          <h3 className='text-lg font-semibold text-slate-800 mb-2'>Step 4: Seal Around Penetrations</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Use expanding foam sealant around electrical boxes, pipes, and any holes that pass through the wall. Even small gaps allow air leakage that reduces insulation performance significantly.</p>

          <h3 className='text-lg font-semibold text-slate-800 mb-2'>Step 5: Install Vapor Barrier (If Required)</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>In cold climates (zones 5-7), staple a 6-mil polyethylene vapor barrier over the insulated wall. Overlap seams by 12 inches and seal with housewrap tape. The vapor barrier goes on the warm side (interior face of the studs). In hot or mixed climates (zones 1-4), a vapor barrier is generally not needed on garage walls. Check your local building code.</p>

          <h3 className='text-lg font-semibold text-slate-800 mb-2'>Step 6: Cover with Drywall</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Most building codes require exposed insulation on garage walls to be covered with 1/2-inch drywall or another fire-rated barrier. This is especially important on the wall shared with the house (fire separation requirement). Check your local code for specific requirements.</p>
        </section>

        {/* How to Insulate Garage Ceiling */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>How to Insulate the Garage Ceiling</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Insulating the garage ceiling is critical if there is a room above (bedroom, bonus room, home office). Even if there is just an attic above, ceiling insulation keeps heat from escaping upward in winter and blocks attic heat from radiating down in summer.</p>

          <h3 className='text-lg font-semibold text-slate-800 mb-2'>Option 1: Fiberglass Batts (Exposed Joists)</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>If the ceiling joists are exposed, install fiberglass batts between them just like walls. Use R-30 to R-38 batts for standard joist depths. Friction-fit the batts and secure with wire supports or staples to prevent sagging. Install a vapor barrier on the warm side if required by your climate zone.</p>

          <h3 className='text-lg font-semibold text-slate-800 mb-2'>Option 2: Blown-in Insulation (Finished Ceiling)</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>If the ceiling already has drywall, blown-in cellulose or fiberglass is the best option. Drill 2-inch holes between each joist bay, blow insulation to the target R-value, and patch the holes. Many home improvement stores rent blowing machines free when you buy a minimum amount of insulation.</p>

          <h3 className='text-lg font-semibold text-slate-800 mb-2'>Option 3: Spray Foam (Premium)</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Closed-cell spray foam on the ceiling provides the highest performance. It seals air leaks, prevents moisture issues, and delivers R-6 to R-6.5 per inch. This requires professional installation and costs $2.00 to $5.00 per square foot, but it is the best option for rooms above the garage where temperature control is critical.</p>
        </section>

        {/* How to Insulate Garage Door */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>How to Insulate the Garage Door</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>The garage door is typically the largest uninsulated surface in the garage. Even basic insulation on the door can make a noticeable difference in temperature. There are two main approaches.</p>

          <h3 className='text-lg font-semibold text-slate-800 mb-2'>Option 1: Garage Door Insulation Kit ($50 - $200)</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Pre-cut foam panels designed to fit standard garage door panels. Most kits use polystyrene or polyisocyanurate foam and include adhesive retainer clips. Installation takes 1 to 2 hours. Provides R-4 to R-8 depending on the kit and foam thickness. This is the easiest and most cost-effective option for most homeowners.</p>

          <h3 className='text-lg font-semibold text-slate-800 mb-2'>Option 2: Custom Rigid Foam Board</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Cut rigid foam board (XPS or polyiso) to fit each door panel. Measure the recessed area of each panel, cut the foam slightly oversized for a friction fit, and press into place. Use adhesive for extra hold if needed. This approach lets you choose higher R-value foam and is often cheaper than a kit if you already have foam on hand.</p>

          <h3 className='text-lg font-semibold text-slate-800 mb-2'>Weatherstripping the Garage Door</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Insulating the door panels is only half the job. Replace worn bottom seals and side weatherstripping to stop air infiltration around the door edges. A new bottom seal costs $15 to $40 and takes 30 minutes to install. Side and top weatherstripping costs $20 to $50 for a complete kit.</p>

          <h3 className='text-lg font-semibold text-slate-800 mb-2'>Weight Considerations</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Adding insulation increases the weight of the garage door. For most single-layer steel doors, a foam insulation kit adds 15 to 30 pounds. This usually does not require a spring adjustment. However, if the door feels heavy or does not stay open at the halfway point, have a garage door technician adjust the spring tension. Never attempt to adjust torsion springs yourself.</p>
        </section>

        {/* Common Mistakes */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Common Insulation Mistakes to Avoid</h2>
          <div className='space-y-3'>
            <div className='bg-red-50 border-l-4 border-red-400 p-4 rounded'>
              <h3 className='font-semibold text-slate-800 text-sm'>Compressing insulation</h3>
              <p className='text-slate-700 text-sm'>Squeezing a batt to fit a smaller space reduces its R-value. A compressed R-19 batt can drop to R-13 or less. Always use the correct batt size for the cavity.</p>
            </div>
            <div className='bg-red-50 border-l-4 border-red-400 p-4 rounded'>
              <h3 className='font-semibold text-slate-800 text-sm'>Leaving gaps and voids</h3>
              <p className='text-slate-700 text-sm'>A 5 percent gap in insulation coverage can reduce the effective R-value of the entire wall by 25 percent or more. Fill every cavity completely.</p>
            </div>
            <div className='bg-red-50 border-l-4 border-red-400 p-4 rounded'>
              <h3 className='font-semibold text-slate-800 text-sm'>Skipping air sealing</h3>
              <p className='text-slate-700 text-sm'>Insulation slows heat transfer but does not stop air movement. Seal all gaps, cracks, and penetrations with expanding foam or caulk before insulating.</p>
            </div>
            <div className='bg-red-50 border-l-4 border-red-400 p-4 rounded'>
              <h3 className='font-semibold text-slate-800 text-sm'>Vapor barrier on the wrong side</h3>
              <p className='text-slate-700 text-sm'>The vapor barrier always goes on the warm side. In cold climates, that is the interior face. Installing it on the wrong side traps moisture in the wall cavity and causes mold and rot.</p>
            </div>
            <div className='bg-red-50 border-l-4 border-red-400 p-4 rounded'>
              <h3 className='font-semibold text-slate-800 text-sm'>Not covering insulation with drywall</h3>
              <p className='text-slate-700 text-sm'>Most building codes require exposed fiberglass insulation in a garage to be covered with a fire-rated material. Exposed insulation is also a fire hazard and degrades over time from UV and physical damage.</p>
            </div>
          </div>
        </section>

        {/* Total Cost Summary */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Total Cost to Insulate a Garage</h2>
          <div className='overflow-x-auto mb-4'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Area</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>DIY Cost (2-Car Garage)</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Professional Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Walls (fiberglass batts)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$150 - $500</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$500 - $1,500</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Ceiling (fiberglass/blown-in)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$200 - $600</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$600 - $2,000</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Garage door (kit or foam)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$50 - $200</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$150 - $400</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Weatherstripping</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$35 - $90</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$100 - $250</td>
                </tr>
                <tr className='bg-amber-50 font-semibold'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-800'>Total</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-800'>$435 - $1,390</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-800'>$1,350 - $4,150</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>These estimates are for a standard 2-car garage (approximately 400 to 576 square feet of floor space). Actual costs vary based on your region, insulation type, and whether the walls and ceiling are already finished.</p>
        </section>

        {/* FAQ Section */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Frequently Asked Questions</h2>
          <div className='space-y-4'>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>How much does it cost to insulate a garage?</h3>
              <p className='text-slate-700 text-sm'>DIY materials for a 2-car garage cost $300 to $1,500 depending on insulation type and areas covered. Professional installation costs $800 to $5,000. Fiberglass batts are the most affordable option ($0.50 to $1.50 per square foot). Spray foam is the most expensive ($2.00 to $5.00 per square foot) but provides the highest performance.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Is it worth insulating a garage?</h3>
              <p className='text-slate-700 text-sm'>Yes, especially if the garage is attached to your house. Insulating the shared wall and ceiling (if there is a room above) directly reduces your home heating and cooling costs. If you use the garage as a workshop, home gym, or hobby space, insulation makes the space usable year-round.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>What is the best insulation for a garage?</h3>
              <p className='text-slate-700 text-sm'>Fiberglass batts are the best choice for most DIY homeowners due to low cost, wide availability, and easy installation. For maximum performance, closed-cell spray foam provides the highest R-value per inch and acts as a moisture and air barrier. For garage doors, rigid foam board or a pre-made insulation kit is the best option.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Should I insulate my garage if it is not heated?</h3>
              <p className='text-slate-700 text-sm'>Yes, if it is attached to your house. Even without heating the garage, insulation prevents the garage from becoming a cold or hot zone that affects adjacent living spaces. If the garage is detached and unheated, insulation is less critical but still helps protect stored items from temperature extremes and condensation.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Do I need a vapor barrier in my garage?</h3>
              <p className='text-slate-700 text-sm'>In cold climates (zones 5-7), yes. A vapor barrier on the warm side of the insulation prevents moisture from condensing inside the wall cavity. In hot or mixed climates (zones 1-4), a vapor barrier is generally not required on garage walls, but check your local building code.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Can I insulate my garage myself?</h3>
              <p className='text-slate-700 text-sm'>Yes for fiberglass batts, rigid foam, and garage door insulation kits. These are all standard DIY projects requiring basic tools and 1 to 2 days of work. Spray foam insulation should be installed by a professional due to the specialized equipment, safety requirements, and precision needed.</p>
            </div>
          </div>
        </section>

      </article>

      {/* Schema Scripts */}
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(tableSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </>
  )
}
