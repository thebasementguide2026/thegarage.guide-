import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Garage Heater Guide 2026: Types, BTU Sizing, Costs, and Installation | The Garage Guide',
  description: 'Everything you need to know about garage heaters. Compare electric, infrared, propane, and natural gas options. Includes BTU sizing calculator, installation costs, and safety tips.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many BTUs do I need to heat a two-car garage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A well-insulated two-car garage (400-500 sq ft) needs approximately 10,000-20,000 BTU. A poorly insulated or uninsulated two-car garage in a cold climate may need 40,000-60,000 BTU. Use the formula: sq ft x temperature rise x insulation factor to size correctly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it cheaper to heat a garage with gas or electric?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Natural gas is cheapest at roughly $0.20-$0.50 per hour for 45,000 BTU. Electric runs $0.50-$1.30 per hour for the same output. Mini-split heat pumps are the exception: they produce 3 BTUs per 1 BTU of electricity consumed, making them cost-competitive with gas in moderate climates.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a permit to install a garage heater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most jurisdictions require a permit for hardwired 240V electric heaters, natural gas heaters, and propane heaters. Portable plug-in heaters typically do not require a permit. Check with your local building department before installation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are propane heaters safe in a garage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Portable propane heaters rated for indoor use (with ODS sensors) are safe in garages with adequate ventilation. Never run any propane heater in a completely sealed garage. Keep a window cracked or door open 2-4 inches and install a carbon monoxide detector.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the most efficient way to heat a garage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A mini-split heat pump is the most efficient electric option, producing 3+ BTUs per BTU of electricity. Natural gas is the most cost-effective combustion option. Before installing any heater, insulating the garage door, walls, and ceiling will reduce the required heater size and ongoing energy costs significantly.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Garage Heater Guide 2026: Types, BTU Sizing, Costs, and Installation',
  description: 'Everything you need to know about garage heaters. Compare electric, infrared, propane, and natural gas options.',
  image: 'https://thegarage.guide/images/garageheater.jpg',
  datePublished: '2026-03-08',
  dateModified: '2026-03-08',
  author: { '@type': 'Organization', name: 'The Garage Guide', url: 'https://thegarage.guide' },
  publisher: { '@type': 'Organization', name: 'The Garage Guide', url: 'https://thegarage.guide' },
}

export default function GarageHeaterGuide() {
  return (
    <>

      {/* Hero Section */}
      <div className='relative h-64 md:h-80 w-full mb-8'>
        <Image src='/images/garageheater.jpg' alt='Ceiling-mounted garage heater guide' fill className='object-cover rounded-xl' />
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl' />
        <div className='absolute bottom-4 left-4'>
          <span className='bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded mr-2'>GG</span>
          <span className='text-white text-xs'>The Garage Guide</span>
          <p className='text-white/70 text-xs mt-1'>Updated Mar 2026 · 20 min read</p>
        </div>
      </div>

      <div className='max-w-3xl mx-auto px-4'>

        {/* Title */}
        <div className='mb-6'>
          <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-3'>Guide</span>
          <h1 className='text-3xl font-bold text-slate-900 mb-3'>Garage Heater Guide 2026</h1>
          <p className='text-slate-500 text-sm'>Types, BTU sizing, installation costs, and safety — everything in one place.</p>
        </div>

        {/* Intro */}
        <p className='text-slate-700 text-sm leading-relaxed mb-4'>The right garage heater depends on three things: how often you use the space, whether you have access to natural gas, and how well your garage is insulated. Get those three factors right and the heater choice is straightforward.</p>
        <p className='text-slate-700 text-sm leading-relaxed mb-8'>This guide covers every heater type, how to size one correctly, what installation actually costs, and what the ongoing operating costs look like. For specific product recommendations, see our <Link href='/reviews/best-garage-heaters' className='text-amber-700 underline'>best garage heaters review</Link>.</p>

        {/* BTU Sizing */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>How to Size a Garage Heater</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Undersizing means the heater runs constantly and never reaches your target temperature. Oversizing means short cycling, which wastes energy and shortens the heater's life. The formula below gives you a reliable starting point.</p>
          <h3 className='font-semibold text-slate-800 text-sm mb-2'>The BTU Formula</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>BTU needed = Square footage × Temperature rise × Insulation factor</strong></p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Temperature rise = your target indoor temp minus the coldest outdoor temp in your area. Insulation factors: well insulated (R-13+ walls, R-30+ ceiling) = 0.45, moderately insulated = 0.65, poorly insulated = 0.85, uninsulated = 1.10. Multiply your result by 1.25 as a safety buffer.</p>
          <h3 className='font-semibold text-slate-800 text-sm mb-2'>BTU Quick-Reference Table</h3>
          <div className='overflow-x-auto mb-6'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='text-left p-3 font-semibold text-slate-800 border-b border-slate-200'>Garage</th>
                  <th className='text-left p-3 font-semibold text-slate-800 border-b border-slate-200'>Sq Ft</th>
                  <th className='text-left p-3 font-semibold text-slate-800 border-b border-slate-200'>Well Insulated</th>
                  <th className='text-left p-3 font-semibold text-slate-800 border-b border-slate-200'>Moderately Insulated</th>
                  <th className='text-left p-3 font-semibold text-slate-800 border-b border-slate-200'>Uninsulated</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-slate-200'>
                  <td className='p-3 text-slate-700'>1-car</td>
                  <td className='p-3 text-slate-700'>250</td>
                  <td className='p-3 text-slate-700'>7,500-10,000</td>
                  <td className='p-3 text-slate-700'>10,000-15,000</td>
                  <td className='p-3 text-slate-700'>20,000-30,000</td>
                </tr>
                <tr className='border-b border-slate-200 bg-slate-50'>
                  <td className='p-3 text-slate-700'>2-car</td>
                  <td className='p-3 text-slate-700'>400-500</td>
                  <td className='p-3 text-slate-700'>12,000-20,000</td>
                  <td className='p-3 text-slate-700'>20,000-30,000</td>
                  <td className='p-3 text-slate-700'>40,000-60,000</td>
                </tr>
                <tr className='border-b border-slate-200'>
                  <td className='p-3 text-slate-700'>3-car</td>
                  <td className='p-3 text-slate-700'>600-900</td>
                  <td className='p-3 text-slate-700'>20,000-35,000</td>
                  <td className='p-3 text-slate-700'>30,000-50,000</td>
                  <td className='p-3 text-slate-700'>60,000-80,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Key takeaway:</strong> Insulation is the most impactful variable. A well-insulated two-car garage needs a $200 electric heater. The same garage uninsulated may need a $700 gas unit. Insulate first, then buy the heater.</p>
        </section>

        {/* Types of Heaters */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Types of Garage Heaters</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-6'>There are five main categories. Each has a specific use case where it outperforms the others.</p>

          {/* Electric Forced-Air */}
          <div className='bg-slate-50 border border-slate-200 rounded-lg p-5 mb-6'>
            <h3 className='text-lg font-bold text-slate-900 mb-3'>Electric Forced-Air Heaters</h3>
            <p className='text-slate-700 text-sm leading-relaxed mb-3'>Electric forced-air heaters use a fan to blow air across heated coils. They are the simplest and most common garage heater type. 120V units plug into a standard outlet and max out at 1,500W. 240V units require a dedicated circuit and deliver up to 10,000W.</p>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-3 mb-4'>
              <div><p className='text-slate-500 text-xs'>Purchase cost:</p><p className='text-slate-800 text-sm font-semibold'>$30-$500</p></div>
              <div><p className='text-slate-500 text-xs'>Installation:</p><p className='text-slate-800 text-sm font-semibold'>$0 (plug-in) / $200-$500 (240V)</p></div>
              <div><p className='text-slate-500 text-xs'>BTU range:</p><p className='text-slate-800 text-sm font-semibold'>5,000-34,000 BTU</p></div>
              <div><p className='text-slate-500 text-xs'>Operating cost:</p><p className='text-slate-800 text-sm font-semibold'>$0.50-$1.30/hr</p></div>
              <div><p className='text-slate-500 text-xs'>Best for:</p><p className='text-slate-800 text-sm font-semibold'>Small to medium garages, occasional use</p></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div><p className='text-slate-800 text-sm font-semibold mb-1'>Advantages</p><ul className='list-disc pl-5 space-y-1'><li className='text-slate-700 text-sm'>No combustion, no venting required</li><li className='text-slate-700 text-sm'>Thermostat control on most models</li><li className='text-slate-700 text-sm'>Lowest purchase price</li></ul></div>
              <div><p className='text-slate-800 text-sm font-semibold mb-1'>Disadvantages</p><ul className='list-disc pl-5 space-y-1'><li className='text-slate-700 text-sm'>Highest operating cost per BTU</li><li className='text-slate-700 text-sm'>120V lacks power for large spaces</li><li className='text-slate-700 text-sm'>Fan blows dust and debris</li></ul></div>
            </div>
          </div>

          {/* Infrared Radiant */}
          <div className='bg-slate-50 border border-slate-200 rounded-lg p-5 mb-6'>
            <h3 className='text-lg font-bold text-slate-900 mb-3'>Infrared Radiant Heaters</h3>
            <p className='text-slate-700 text-sm leading-relaxed mb-3'>Infrared heaters warm objects and people directly through radiant energy rather than heating the air. Highly effective in drafty or poorly insulated garages. No fan means no dust movement.</p>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-3 mb-4'>
              <div><p className='text-slate-500 text-xs'>Purchase cost:</p><p className='text-slate-800 text-sm font-semibold'>$150-$800 (electric) / $500-$2,000 (gas)</p></div>
              <div><p className='text-slate-500 text-xs'>Installation:</p><p className='text-slate-800 text-sm font-semibold'>$0-$300 (electric) / $500-$1,500 (gas)</p></div>
              <div><p className='text-slate-500 text-xs'>BTU range:</p><p className='text-slate-800 text-sm font-semibold'>5,000-60,000 BTU</p></div>
              <div><p className='text-slate-500 text-xs'>Operating cost:</p><p className='text-slate-800 text-sm font-semibold'>$0.30-$0.80/hr (electric)</p></div>
              <div><p className='text-slate-500 text-xs'>Best for:</p><p className='text-slate-800 text-sm font-semibold'>Woodworking shops, drafty garages, spot heating</p></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div><p className='text-slate-800 text-sm font-semibold mb-1'>Advantages</p><ul className='list-disc pl-5 space-y-1'><li className='text-slate-700 text-sm'>Heats people directly, effective in drafty spaces</li><li className='text-slate-700 text-sm'>Silent operation (electric models)</li><li className='text-slate-700 text-sm'>Does not blow dust</li></ul></div>
              <div><p className='text-slate-800 text-sm font-semibold mb-1'>Disadvantages</p><ul className='list-disc pl-5 space-y-1'><li className='text-slate-700 text-sm'>Heats directionally, not the whole room evenly</li><li className='text-slate-700 text-sm'>Gas models require professional install and venting</li><li className='text-slate-700 text-sm'>Requires 7-foot ceiling clearance minimum</li></ul></div>
            </div>
          </div>

          {/* Natural Gas */}
          <div className='bg-slate-50 border border-slate-200 rounded-lg p-5 mb-6'>
            <h3 className='text-lg font-bold text-slate-900 mb-3'>Natural Gas Forced-Air Heaters</h3>
            <p className='text-slate-700 text-sm leading-relaxed mb-3'>Ceiling-mounted natural gas heaters are the workhorse of serious garage heating. The most cost-effective option for regular use in medium to large garages where a gas line is available.</p>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-3 mb-4'>
              <div><p className='text-slate-500 text-xs'>Purchase cost:</p><p className='text-slate-800 text-sm font-semibold'>$400-$2,000</p></div>
              <div><p className='text-slate-500 text-xs'>Installation:</p><p className='text-slate-800 text-sm font-semibold'>$500-$2,000 (existing gas) / $1,500-$4,000 (new line)</p></div>
              <div><p className='text-slate-500 text-xs'>BTU range:</p><p className='text-slate-800 text-sm font-semibold'>30,000-125,000 BTU</p></div>
              <div><p className='text-slate-500 text-xs'>Operating cost:</p><p className='text-slate-800 text-sm font-semibold'>$0.20-$0.50/hr</p></div>
              <div><p className='text-slate-500 text-xs'>Best for:</p><p className='text-slate-800 text-sm font-semibold'>Regular use, larger garages, cold climates</p></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div><p className='text-slate-800 text-sm font-semibold mb-1'>Advantages</p><ul className='list-disc pl-5 space-y-1'><li className='text-slate-700 text-sm'>Lowest operating cost per BTU</li><li className='text-slate-700 text-sm'>Powerful enough for any residential garage</li><li className='text-slate-700 text-sm'>15-25 year lifespan</li></ul></div>
              <div><p className='text-slate-800 text-sm font-semibold mb-1'>Disadvantages</p><ul className='list-disc pl-5 space-y-1'><li className='text-slate-700 text-sm'>Requires professional installation</li><li className='text-slate-700 text-sm'>Must be vented to the outside</li><li className='text-slate-700 text-sm'>Gas line adds significant upfront cost</li></ul></div>
            </div>
          </div>

          {/* Portable Propane */}
          <div className='bg-slate-50 border border-slate-200 rounded-lg p-5 mb-6'>
            <h3 className='text-lg font-bold text-slate-900 mb-3'>Portable Propane Heaters</h3>
            <p className='text-slate-700 text-sm leading-relaxed mb-3'>Portable propane heaters require zero installation and work anywhere. Best for occasional weekend use, detached garages without electrical service, and power outages.</p>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-3 mb-4'>
              <div><p className='text-slate-500 text-xs'>Purchase cost:</p><p className='text-slate-800 text-sm font-semibold'>$80-$300</p></div>
              <div><p className='text-slate-500 text-xs'>Installation:</p><p className='text-slate-800 text-sm font-semibold'>None required</p></div>
              <div><p className='text-slate-500 text-xs'>BTU range:</p><p className='text-slate-800 text-sm font-semibold'>4,000-30,000 BTU</p></div>
              <div><p className='text-slate-500 text-xs'>Operating cost:</p><p className='text-slate-800 text-sm font-semibold'>$0.60-$0.80/hr at 18,000 BTU</p></div>
              <div><p className='text-slate-500 text-xs'>Best for:</p><p className='text-slate-800 text-sm font-semibold'>Occasional use, no electrical service, power outages</p></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div><p className='text-slate-800 text-sm font-semibold mb-1'>Advantages</p><ul className='list-disc pl-5 space-y-1'><li className='text-slate-700 text-sm'>Zero installation, works anywhere</li><li className='text-slate-700 text-sm'>No electrical service needed</li><li className='text-slate-700 text-sm'>Works during power outages</li></ul></div>
              <div><p className='text-slate-800 text-sm font-semibold mb-1'>Disadvantages</p><ul className='list-disc pl-5 space-y-1'><li className='text-slate-700 text-sm'>Requires ventilation at all times</li><li className='text-slate-700 text-sm'>Never leave running unattended</li><li className='text-slate-700 text-sm'>Propane cost adds up with regular use</li></ul></div>
            </div>
          </div>

          {/* Mini-Split */}
          <div className='bg-slate-50 border border-slate-200 rounded-lg p-5 mb-6'>
            <h3 className='text-lg font-bold text-slate-900 mb-3'>Mini-Split Heat Pumps</h3>
            <p className='text-slate-700 text-sm leading-relaxed mb-3'>Mini-split heat pumps are the most efficient electric heating option. They move heat from outside air into the garage, producing 2-3 BTUs of heat per BTU of electricity consumed. They also provide air conditioning in summer.</p>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-3 mb-4'>
              <div><p className='text-slate-500 text-xs'>Purchase cost:</p><p className='text-slate-800 text-sm font-semibold'>$700-$2,500</p></div>
              <div><p className='text-slate-500 text-xs'>Installation:</p><p className='text-slate-800 text-sm font-semibold'>$0 (DIY) / $1,000-$3,000 (professional)</p></div>
              <div><p className='text-slate-500 text-xs'>BTU range:</p><p className='text-slate-800 text-sm font-semibold'>9,000-36,000 BTU</p></div>
              <div><p className='text-slate-500 text-xs'>Operating cost:</p><p className='text-slate-800 text-sm font-semibold'>$0.20-$0.45/hr (most efficient electric)</p></div>
              <div><p className='text-slate-500 text-xs'>Best for:</p><p className='text-slate-800 text-sm font-semibold'>Year-round use, heating and cooling from one unit</p></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div><p className='text-slate-800 text-sm font-semibold mb-1'>Advantages</p><ul className='list-disc pl-5 space-y-1'><li className='text-slate-700 text-sm'>Most efficient electric heating available</li><li className='text-slate-700 text-sm'>Also cools in summer</li><li className='text-slate-700 text-sm'>No combustion, no venting</li></ul></div>
              <div><p className='text-slate-800 text-sm font-semibold mb-1'>Disadvantages</p><ul className='list-disc pl-5 space-y-1'><li className='text-slate-700 text-sm'>Highest upfront cost</li><li className='text-slate-700 text-sm'>Capacity drops in extreme cold (below 0°F)</li><li className='text-slate-700 text-sm'>Still requires a 240V dedicated circuit</li></ul></div>
            </div>
          </div>
        </section>

                  {/* Operating Costs */}
          <section className='mb-8'>
            <h2 className='text-xl font-bold text-slate-900 mb-4'>Operating Cost Comparison</h2>
            <p className='text-slate-700 text-sm leading-relaxed mb-4'>Costs below assume 4 hours of use per day, 5 days per week, for 20 weeks (a typical heating season). Local energy prices significantly affect these numbers.</p>
            <div className='overflow-x-auto mb-4'>
              <table className='w-full text-sm border-collapse'>
                <thead>
                  <tr className='border-b border-slate-300 bg-slate-100'>
                    <th className='p-3 text-left text-slate-800 font-semibold'>Heater Type</th>
                    <th className='p-3 text-left text-slate-800 font-semibold'>Cost Per Hour</th>
                    <th className='p-3 text-left text-slate-800 font-semibold'>Season Total</th>
                    <th className='p-3 text-left text-slate-800 font-semibold'>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b border-slate-200 bg-slate-50'>
                    <td className='p-3 text-slate-700'>Natural gas (45,000 BTU)</td>
                    <td className='p-3 text-slate-700'>~$0.49</td>
                    <td className='p-3 text-slate-700'>~$196</td>
                    <td className='p-3 text-slate-700'>Lowest cost, requires gas line</td>
                  </tr>
                  <tr className='border-b border-slate-200'>
                    <td className='p-3 text-slate-700'>Mini-split heat pump</td>
                    <td className='p-3 text-slate-700'>~$0.27</td>
                    <td className='p-3 text-slate-700'>~$107</td>
                    <td className='p-3 text-slate-700'>Most efficient electric, also cools</td>
                  </tr>
                  <tr className='border-b border-slate-200 bg-slate-50'>
                    <td className='p-3 text-slate-700'>Propane portable (18,000 BTU)</td>
                    <td className='p-3 text-slate-700'>~$0.69</td>
                    <td className='p-3 text-slate-700'>~$276</td>
                    <td className='p-3 text-slate-700'>No installation, needs ventilation</td>
                  </tr>
                  <tr className='border-b border-slate-200'>
                    <td className='p-3 text-slate-700'>Electric 240V (5,000W)</td>
                    <td className='p-3 text-slate-700'>~$0.80</td>
                    <td className='p-3 text-slate-700'>~$320</td>
                    <td className='p-3 text-slate-700'>At $0.16/kWh national average</td>
                  </tr>
                  <tr className='border-b border-slate-200 bg-slate-50'>
                    <td className='p-3 text-slate-700'>Electric 120V (1,500W)</td>
                    <td className='p-3 text-slate-700'>~$0.24</td>
                    <td className='p-3 text-slate-700'>~$96</td>
                    <td className='p-3 text-slate-700'>Low output, spot heating only</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Safety */}
          <section className='mb-8'>
            <h2 className='text-xl font-bold text-slate-900 mb-4'>Garage Heater Safety</h2>
            <p className='text-slate-700 text-sm leading-relaxed mb-4'>Garage heaters involve high voltages, combustion, or both. These rules protect your family and property.</p>

            <div className='border border-slate-200 rounded-lg p-4 mb-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Carbon Monoxide Detection</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Any combustion heater (propane, natural gas) produces carbon monoxide. Install a battery-operated CO detector and test it monthly. Never run a combustion heater in a fully sealed garage.</p>
            </div>

            <div className='border border-slate-200 rounded-lg p-4 mb-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Electrical Safety</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>240V heaters must be on dedicated circuits with properly rated wire gauge. A 5,000W heater draws 20.8 amps at 240V and needs a 30-amp breaker with 10-gauge wire minimum. Never use extension cords with high-wattage heaters. All hardwired installations should be performed by a licensed electrician.</p>
            </div>

            <div className='border border-slate-200 rounded-lg p-4 mb-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Clearance Requirements</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Maintain minimum clearances from combustible materials as specified by the manufacturer: typically 18-36 inches for gas units, 12-24 inches for electric. Never store gasoline, paint, solvents, or other flammables near any heater.</p>
            </div>

            <div className='border border-slate-200 rounded-lg p-4 mb-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Permits</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Most jurisdictions require a permit for hardwired 240V heaters, natural gas heaters, and propane heaters. Portable plug-in heaters typically do not require a permit. Check with your local building department before installation.</p>
            </div>
          </section>

          {/* FAQ */}
          <section className='mb-8'>
            <h2 className='text-xl font-bold text-slate-900 mb-4'>Frequently Asked Questions</h2>
            <div className='space-y-4'>
              <div className='border border-slate-200 rounded-lg p-4'>
                <h3 className='font-semibold text-slate-800 text-sm mb-2'>How many BTUs do I need to heat a two-car garage?</h3>
                <p className='text-slate-700 text-sm leading-relaxed'>A well-insulated two-car garage (400-500 sq ft) needs approximately 10,000-20,000 BTU. A poorly insulated or uninsulated two-car garage in a cold climate may need 40,000-60,000 BTU.</p>
              </div>
              <div className='border border-slate-200 rounded-lg p-4'>
                <h3 className='font-semibold text-slate-800 text-sm mb-2'>Is it cheaper to heat a garage with gas or electric?</h3>
                <p className='text-slate-700 text-sm leading-relaxed'>Natural gas costs roughly $0.20-$0.50 per hour for 45,000 BTU. Electric runs $0.50-$1.30 per hour for the same output. Mini-split heat pumps are the exception and are cost-competitive with gas in moderate climates.</p>
              </div>
              <div className='border border-slate-200 rounded-lg p-4'>
                <h3 className='font-semibold text-slate-800 text-sm mb-2'>Are propane heaters safe in a garage?</h3>
                <p className='text-slate-700 text-sm leading-relaxed'>Portable propane heaters rated for indoor use (with ODS sensors) are safe in garages with adequate ventilation. Never run any propane heater in a completely sealed garage. Keep a window cracked or door open 2-4 inches and install a carbon monoxide detector.</p>
              </div>
              <div className='border border-slate-200 rounded-lg p-4'>
                <h3 className='font-semibold text-slate-800 text-sm mb-2'>Do I need a permit to install a garage heater?</h3>
                <p className='text-slate-700 text-sm leading-relaxed'>Most jurisdictions require a permit for hardwired 240V electric heaters, natural gas heaters, and propane heaters. Portable plug-in heaters typically do not. Check with your local building department before installation.</p>
              </div>
              <div className='border border-slate-200 rounded-lg p-4'>
                <h3 className='font-semibold text-slate-800 text-sm mb-2'>What is the most efficient way to heat a garage?</h3>
                <p className='text-slate-700 text-sm leading-relaxed'>A mini-split heat pump is the most efficient electric option, producing 3+ BTUs per BTU of electricity. Natural gas is the most cost-effective combustion option. Insulating the garage first is the highest-leverage action before buying any heater.</p>
              </div>
            </div>
          </section>

          {/* Related */}
          <section className='mb-8'>
            <h2 className='text-xl font-bold text-slate-900 mb-4'>Related Articles</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <Link href='/reviews/best-garage-heaters' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
                <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Review</span>
                <p className='font-semibold text-slate-800 text-sm'>Best Garage Heaters 2026</p>
                <p className='text-slate-500 text-xs mt-1'>Top picks for every budget and garage size.</p>
              </Link>
              <Link href='/problems/garage-door-opener-not-working' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
                <span className='inline-block bg-slate-100 text-slate-600 text-xs font-semibold px-2 py-1 rounded mb-2'>Troubleshooting</span>
                <p className='font-semibold text-slate-800 text-sm'>Garage Door Opener Not Working?</p>
                <p className='text-slate-500 text-xs mt-1'>Complete troubleshooting guide for common issues.</p>
              </Link>
            </div>
          </section>

      </div>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </>
  )
}
