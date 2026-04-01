import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Garage Door Weather Stripping: When to Replace It and How to Do It Right | The Garage Guide',
  description: 'Garage door weather stripping replacement guide. Signs it has failed, which of the 4 seals to replace, costs, and step-by-step DIY installation for each type.',
  alternates: {
    canonical: 'https://thegarage.guide/problems/garage-door-weather-stripping',
  },
  openGraph: {
    title: 'Garage Door Weather Stripping: When to Replace It and How to Do It Right | The Garage Guide',
    description: 'Garage door weather stripping replacement guide. Signs it has failed, which of the 4 seals to replace, costs, and step-by-step DIY installation for each type.',
    url: 'https://thegarage.guide/problems/garage-door-weather-stripping',
    siteName: 'The Garage Guide',
    type: 'article',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do I know if my garage door weather stripping needs replacing?', acceptedAnswer: { '@type': 'Answer', text: 'The clearest signs are visible daylight around the closed door, drafts you can feel with your hand along the door frame, water pooling inside after rain, pests or insects getting in despite a closed door, and visible cracking, brittleness, or missing sections in the rubber or vinyl material. The bottom seal should also be replaced if it froze to the floor and tore during a winter opening. A damaged seal does not recover after tearing.' } },
    { '@type': 'Question', name: 'How long does garage door weather stripping last?', acceptedAnswer: { '@type': 'Answer', text: 'Bottom seals last 3 to 5 years at average use (4 cycles per day). Side and top seals last 5 to 7 years. Quality EPDM rubber lasts significantly longer than vinyl in cold climates. Properly installed weather stripping with regular silicone spray maintenance and UV protection can reach the higher end of these ranges. Poorly installed seals, or seals on south-facing doors without UV protection, can fail in 2 to 3 years.' } },
    { '@type': 'Question', name: 'Can I replace garage door weather stripping myself?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, for most homeowners. Bottom seal replacement requires sliding the old seal out and the new one in. No tools beyond a utility knife and tape measure are needed. Side and top seal replacement requires a staple gun or hammer and nails for wood stop molding types. The only situations that genuinely require a professional are a damaged or bent bottom retainer, rotted frame molding, or a door that is warped out of square.' } },
    { '@type': 'Question', name: 'What is the best material for garage door weather stripping?', acceptedAnswer: { '@type': 'Answer', text: 'EPDM rubber is the best overall choice. It remains flexible in temperatures down to -40 degrees Fahrenheit, resists UV degradation effectively, and outlasts vinyl by several years in cold climates. Vinyl (PVC) is a reasonable budget option in mild climates but becomes brittle in sustained cold below 20 degrees. Silicone is the premium option for high-sun exposures. It handles UV better than EPDM and costs $10 to $15 more per replacement.' } },
    { '@type': 'Question', name: 'Why does my garage door keep freezing to the floor?', acceptedAnswer: { '@type': 'Answer', text: 'The bottom seal is bonding to water on the concrete floor before it freezes overnight. The fix is simple: apply silicone spray to the bottom of the seal every fall. Silicone prevents rubber from bonding to ice. If the door has already frozen, do not press the opener button. That burns out the motor. Disconnect the opener, chip the ice away from outside, and lift the door manually.' } },
    { '@type': 'Question', name: 'How much does it cost to replace garage door weather stripping?', acceptedAnswer: { '@type': 'Answer', text: 'DIY replacement of the bottom seal costs $20 to $45 in materials. A full perimeter replacement (all four seal positions) costs $50 to $120 in materials and takes 60 to 90 minutes. Professional installation of the full perimeter runs $150 to $350 depending on door size and seal condition. The bottom seal is by far the most cost-effective DIY maintenance task on any garage door.' } },
    { '@type': 'Question', name: 'Should I replace all the weather stripping at once or just the failed piece?', acceptedAnswer: { '@type': 'Answer', text: 'Replace all four seals at the same time when the bottom seal reaches 5 years old. All seals were installed simultaneously and have experienced the same degradation from UV and temperature. Replacing only the failed piece leaves aging seals in place that will require replacement within one to two years anyway. The incremental labor cost of doing all four at once is minimal and the material cost difference is $30 to $50.' } },
    { '@type': 'Question', name: 'Does garage door weather stripping affect energy bills?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, meaningfully for attached garages. An uninsulated or poorly sealed attached garage acts as a thermal buffer for adjacent rooms. Air infiltration through failed weather stripping is a direct energy loss pathway. According to the Department of Energy, properly sealing and insulating the boundary between an attached garage and living space can reduce energy loss through that wall by 60 to 70 percent. For a detached garage, the energy impact is limited to the garage itself.' } },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Garage Door Weather Stripping: When to Replace It and How to Do It Right',
  description: 'Garage door weather stripping replacement guide. Signs it has failed, which of the 4 seals to replace, costs, and step-by-step DIY installation for each type.',
  url: 'https://thegarage.guide/problems/garage-door-weather-stripping',
  publisher: { '@type': 'Organization', name: 'The Garage Guide', url: 'https://thegarage.guide' },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Replace a Garage Door Bottom Seal',
  description: 'Step-by-step instructions for replacing the bottom weather seal on a residential garage door.',
  totalTime: 'PT30M',
  estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '20-45' },
  supply: [
    { '@type': 'HowToSupply', name: 'Replacement bottom seal (T-slot, bulb, J-type, or beaded — match to existing retainer)' },
    { '@type': 'HowToSupply', name: 'Silicone spray lubricant' },
  ],
  tool: [
    { '@type': 'HowToTool', name: 'Utility knife' },
    { '@type': 'HowToTool', name: 'Measuring tape' },
    { '@type': 'HowToTool', name: 'Locking pliers' },
    { '@type': 'HowToTool', name: 'Flathead screwdriver' },
  ],
  step: [
    { '@type': 'HowToStep', name: 'Disconnect the opener', text: 'Pull the red emergency release cord to disconnect the opener so the door can be moved manually.' },
    { '@type': 'HowToStep', name: 'Lock the door in position', text: 'Open the door to waist height and clamp locking pliers on the track above a roller to hold it in place.' },
    { '@type': 'HowToStep', name: 'Remove the old seal', text: 'Slide the old seal out of the aluminum retainer from one end. If stuck, apply silicone spray at the entry point. Do not pry or force.' },
    { '@type': 'HowToStep', name: 'Measure the door width', text: 'Measure the full width precisely. Most residential doors are 8, 9, 10, 16, or 18 feet. Buy a replacement seal at least 2 inches longer than the door width.' },
    { '@type': 'HowToStep', name: 'Install the new seal', text: 'Slide the new seal into the retainer from one end, pushing it along until it extends past both sides of the door.' },
    { '@type': 'HowToStep', name: 'Trim to fit', text: 'With the door closed against the floor, trim the seal with a utility knife so it extends approximately 1/2 inch past each side of the door.' },
    { '@type': 'HowToStep', name: 'Apply silicone spray', text: 'Coat the bottom of the new seal with silicone spray to prevent it from bonding to ice on the concrete floor in freezing temperatures.' },
    { '@type': 'HowToStep', name: 'Test the seal', text: 'Reconnect the opener and close the door. The seal should compress evenly against the floor with no visible gaps or daylight.' },
  ],
}

export default function GarageDoorWeatherStrippingPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Weather Stripping' }]} />
      <article className='container-custom py-8 max-w-4xl mx-auto'>
        {/* Hero Section */}
        <div className='relative rounded-xl overflow-hidden mb-8' style={{ minHeight: '400px' }}>
          <Image src='/images/garage-door-weather-stripping.jpg' alt='Cracked and failed garage door weather stripping with visible light gap at the floor' fill className='object-cover' priority />
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent' />
          <div className='absolute bottom-0 left-0 right-0 p-6 md:p-10'>
            <span className='text-amber-700 font-bold text-xs uppercase tracking-wider'>Problem</span>
            <h1 className='text-3xl md:text-4xl font-bold text-white mt-1'>Garage Door Weather Stripping: <span className='text-amber-500'>When to Replace It and How to Do It Right</span></h1>
            <p className='text-gray-200 mt-2 text-sm md:text-base max-w-2xl'>Garage door weather stripping replacement guide. Signs it has failed, which of the 4 seals to replace, costs, and step-by-step DIY installation for each type.</p>
          </div>
        </div>

        {/* Byline Row */}
        <div className='flex items-center gap-3 mb-4'>
          <div className='w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center text-white font-bold text-sm'>GG</div>
          <div>
            <p className='text-slate-800 font-semibold text-sm'>The Garage Guide</p>
            <p className='text-gray-500 text-xs'>Updated Mar 2026 · 12 min read</p>
          </div>
          <span className='ml-auto inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded'>Problem</span>
        </div>

        {/* TL;DR */}
        <div style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75', padding: '16px 20px' }} className='rounded-r-lg mb-4'>
          <p style={{ color: '#1D9E75' }} className='text-sm font-bold mb-2'>TL;DR</p>
          <p className='text-slate-700 text-sm leading-relaxed'>A garage door has four separate weather seals: the bottom seal, two side seals, and the top seal. Each fails at a different rate and requires a different replacement approach. The bottom seal fails most often and costs $20 to $45 to replace yourself in 20 minutes. A full perimeter replacement (all four seals) costs $50 to $120 in materials and takes 60 to 90 minutes. The clearest sign any seal has failed: you can see daylight around the closed door, feel airflow with your hand, or find water, dust, or pests inside after the door has been closed.</p>
        </div>

        {/* Intro */}
        <p className='text-slate-700 text-sm leading-relaxed mb-4'>Something is getting into your garage that should not be. Water after a rainstorm. A draft in winter that makes the space 15 degrees colder than it should be. A mouse that found a gap you cannot see. Or just dust accumulating faster than makes sense for a closed space.</p>
        <p className='text-slate-700 text-sm leading-relaxed mb-4'>In almost every case, the answer is the weather stripping. These four rubber and vinyl seals are the only thing standing between your garage interior and the outside world, and they are also the most overlooked maintenance item on any garage door. Most homeowners replace springs, openers, and even panels while worn weather stripping quietly lets in cold air, moisture, and pests for years.</p>
        <p className='text-slate-700 text-sm leading-relaxed mb-6'>This guide covers all four seals, how to identify which one has failed, what to replace it with, and exactly how to install each type.</p>

        {/* The Daylight Test */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>The Daylight Test: Start Here</h2>
          <div className='bg-red-50 border-l-4 border-red-500 p-4 rounded mb-4'>
            <h3 className='font-semibold text-red-800 text-sm mb-1'>Critical First Test</h3>
            <p className='text-slate-700 text-sm'>Close the garage door completely and go inside. Turn off the garage lights and wait 30 seconds for your eyes to adjust. Look around the full perimeter of the door (bottom, both sides, and top). Any light visible means air, water, and pests can also get in at that point. Then press the back of your hand against the bottom seal while someone stands outside. Any airflow you feel confirms the bottom seal has failed. This test takes two minutes and tells you exactly which seals need replacing before you spend a dollar on materials.</p>
          </div>
        </section>

        {/* The Four Seals */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>The Four Seals: What Each One Does and Where It Lives</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Most articles treat garage door weather stripping as a single item. It is actually four distinct components, each in a different location, each with a different failure mode, and each requiring a different replacement product.</p>

          <div className='overflow-x-auto mb-4'>
            <table className='w-full text-sm border-collapse border border-slate-300'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Seal</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Location</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>What It Prevents</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Typical Lifespan</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>DIY Replacement Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Bottom seal (astragal)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Underside of door</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Water, air, pests, debris from floor gap</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>3 to 5 years</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$20 to $45</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Side seals (stop molding)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Door frame, left and right</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Air and water infiltration along door edges</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>5 to 7 years</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$15 to $30 per side</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Top seal (header seal)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Door frame above door</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Air and water from above</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>5 to 7 years</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$15 to $25</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Panel seals (between sections)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Between horizontal door panels</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Air infiltration through panel joints</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>10 to 15 years</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Replaced with door</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>The bottom seal fails most often</strong> because it is the only seal that contacts the ground on every single cycle. It gets compressed, scraped, frozen to the floor in winter, torn by ice, and degraded by UV. At 4 cycles per day, that is 1,460 contact events per year.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>The side and top seals</strong> fail more slowly because they are not subject to ground contact, but UV exposure and temperature cycling make them brittle over 5 to 7 years.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Panel seals</strong> (the interlocking rubber sections between door panels) last the longest and are generally not replaced independently. They are part of the door panel itself.</p>
        </section>

        {/* Signs Each Seal Has Failed */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Signs Each Seal Has Failed</h2>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Bottom Seal Failure Signs</h3>
          <ul className='list-disc pl-6 mb-4 space-y-1'>
            <li className='text-slate-700 text-sm'>Visible daylight under the door when closed</li>
            <li className='text-slate-700 text-sm'>Water pooling inside after rain or snow melt</li>
            <li className='text-slate-700 text-sm'>Insects, rodents, or debris inside a closed garage</li>
            <li className='text-slate-700 text-sm'>The seal looks flattened, cracked, torn, or missing sections</li>
            <li className='text-slate-700 text-sm'>A chunk of rubber found on the garage floor (a piece tore off during opening)</li>
            <li className='text-slate-700 text-sm'>The door froze to the floor overnight and the seal tore when the opener pulled it up</li>
          </ul>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Side and Top Seal Failure Signs</h3>
          <ul className='list-disc pl-6 mb-4 space-y-1'>
            <li className='text-slate-700 text-sm'>Daylight visible along the sides or top of the closed door</li>
            <li className='text-slate-700 text-sm'>Drafts felt along the door frame edges (run your hand slowly along the frame with the door closed)</li>
            <li className='text-slate-700 text-sm'>The rubber or vinyl is visibly cracked, brittle, or pulling away from the frame</li>
            <li className='text-slate-700 text-sm'>Water staining on the interior door frame after heavy rain</li>
            <li className='text-slate-700 text-sm'>The seal no longer springs back when you compress it (has permanently flattened)</li>
          </ul>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>The 5-Year Rule</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Regardless of visible symptoms, replace all weather stripping when the bottom seal reaches 5 years old. All four seals were likely installed at the same time and have experienced the same UV and temperature exposure. Replacing the bottom seal alone when the perimeter seals are also aging just delays the next replacement by one or two years. Doing all four at once takes 90 minutes total and costs $50 to $120 in materials. For a full seasonal inspection schedule that includes weather seal checks, see the <Link href='/guides/garage-door-maintenance' className='text-amber-700 underline'>garage door maintenance checklist</Link>.</p>
        </section>

        {/* Choosing the Right Bottom Seal */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Choosing the Right Bottom Seal</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>The bottom seal is the most critical and the most confusing to replace because there are multiple profile types and they are not interchangeable. Buying the wrong profile means the seal will not fit the retainer on the bottom of your door.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>How to identify your profile:</strong> Look at the aluminum retainer on the bottom of the door. The retainer has a channel or slot that the seal slides into. Match the seal to the channel shape:</p>

          <div className='overflow-x-auto mb-4'>
            <table className='w-full text-sm border-collapse border border-slate-300'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Profile Type</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Retainer Shape</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>T-slot (T-end)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>T-shaped channel</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Most common residential door, flat floors</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Bulb seal</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Open-face retainer or adhesive mount</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Smooth concrete floors, standard gaps</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>J-type</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>J-shaped channel</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Older doors, specific manufacturer fitments</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Beaded (P-type)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Round-channel retainer</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Some Wayne Dalton, Clopay models</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>If you cannot identify the profile:</strong> Slide the old seal out of the retainer (it slides from one end) and take it to the hardware store for matching. Alternatively, take a photo of the bottom of the door with the retainer visible and use it to search the manufacturer&apos;s replacement parts.</p>

          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>Material choice:</strong></p>
          <ul className='list-disc pl-6 mb-4 space-y-1'>
            <li className='text-slate-700 text-sm'><strong>EPDM rubber:</strong> Best overall. Remains flexible in cold temperatures down to -40 degrees Fahrenheit, UV resistant, longest lifespan. Costs $5 to $10 more than vinyl but lasts significantly longer.</li>
            <li className='text-slate-700 text-sm'><strong>Vinyl (PVC):</strong> Less expensive. Adequate in mild climates. Becomes brittle in sustained cold below 20 degrees Fahrenheit. Good choice if budget is the primary consideration and you are in a warm climate.</li>
            <li className='text-slate-700 text-sm'><strong>Silicone:</strong> Premium option. Excellent UV resistance and temperature range. Costs $10 to $15 more than EPDM. Worthwhile for south-facing doors with heavy direct sun exposure.</li>
          </ul>
        </section>

        {/* How to Replace the Bottom Seal */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>How to Replace the Bottom Seal</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>Tools needed:</strong> Flathead screwdriver, utility knife, measuring tape, silicone spray</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>Time:</strong> 20 to 30 minutes</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Cost:</strong> $20 to $45 for the seal</p>

          <ol className='list-decimal pl-6 mb-4 space-y-3'>
            <li className='text-slate-700 text-sm'><strong>Disconnect the opener</strong> by pulling the red emergency release cord so the door can be moved manually.</li>
            <li className='text-slate-700 text-sm'><strong>Open the door to a comfortable working height</strong> (about waist level) and lock it in place by clamping locking pliers on the track above a roller.</li>
            <li className='text-slate-700 text-sm'><strong>Slide the old seal out</strong> of the aluminum retainer from one end. It slides horizontally. If it is stuck, spray a small amount of silicone lubricant at the entry point and work it free. Do not pry or force. You may need the retainer intact for the new seal.</li>
            <li className='text-slate-700 text-sm'><strong>Measure the door width precisely.</strong> Most residential doors are 8, 9, 10, 16, or 18 feet. Buy a seal that is at least 2 inches longer than the door width so you can trim to exact fit.</li>
            <li className='text-slate-700 text-sm'><strong>Slide the new seal into the retainer</strong> from one end, pushing it along until it extends past both sides of the door.</li>
            <li className='text-slate-700 text-sm'><strong>With the door closed against the floor, trim the seal</strong> with a utility knife so it extends approximately 1/2 inch past each side of the door. This slight overhang ensures full contact at the corners.</li>
            <li className='text-slate-700 text-sm'><strong>Apply a thin coat of silicone spray</strong> to the bottom of the seal. This prevents the seal from bonding to wet concrete or ice overnight and tearing when the opener pulls the door up in the morning.</li>
            <li className='text-slate-700 text-sm'><strong>Reconnect the opener and test.</strong> The door should close fully with the seal compressing evenly against the floor.</li>
          </ol>
        </section>

        {/* How to Replace Side and Top Seals */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>How to Replace Side and Top Seals (Stop Molding)</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>The perimeter seals run along the door frame, up both sides and across the top. They are typically a vinyl or rubber strip stapled or nailed to a wood stop molding, or in newer construction, a self-adhesive foam or rubber strip pressed against the frame.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>Tools needed:</strong> Pry bar or flathead screwdriver, hammer, staple gun or nails, utility knife, measuring tape</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>Time:</strong> 30 to 45 minutes for all three runs</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Cost:</strong> $15 to $30 per run, or $40 to $80 for a complete perimeter kit</p>

          <ol className='list-decimal pl-6 mb-4 space-y-3'>
            <li className='text-slate-700 text-sm'><strong>With the door closed, examine the existing perimeter seal.</strong> If it is stapled or nailed wood stop molding with a rubber flange, it must be removed and replaced as a unit. If it is a self-adhesive foam or rubber strip, it can be peeled off and replaced without removing the molding.</li>
            <li className='text-slate-700 text-sm'><strong>Wood stop molding type:</strong> Pry the molding away from the frame carefully, starting at the bottom. Remove all staples or nails. Take a section to the hardware store to match the profile.</li>
            <li className='text-slate-700 text-sm'><strong>Measure each run</strong> (left side, right side, and top). Add 2 inches to each measurement. Cut the new molding to length with a utility knife or saw.</li>
            <li className='text-slate-700 text-sm'><strong>With the door closed, press the new molding against the frame</strong> so the rubber flange contacts the door face firmly. Secure with nails or staples every 6 inches. The rubber flange should compress slightly against the door surface. Enough to create a seal but not so much that it resists door movement.</li>
            <li className='text-slate-700 text-sm'><strong>Test by closing the door</strong> and running your hand along the perimeter. No airflow should be detectable.</li>
            <li className='text-slate-700 text-sm'><strong>Self-adhesive type:</strong> Clean the frame surface with rubbing alcohol and allow to dry completely. Peel and press the new adhesive seal into position. Press firmly along its full length. Allow 24 hours before testing in wet or cold conditions.</li>
          </ol>
        </section>

        {/* What Weather Stripping Replacement Actually Costs */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>What Weather Stripping Replacement Actually Costs</h2>
          <div className='overflow-x-auto mb-4'>
            <table className='w-full text-sm border-collapse border border-slate-300'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Scope</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>DIY Materials</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Professional Installation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Bottom seal only</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$20 to $45</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$75 to $150</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Side seals (both sides)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$30 to $60</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$100 to $200</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Top seal only</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$15 to $25</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$75 to $125</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Full perimeter (all four positions)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$50 to $120</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$150 to $350</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>When professional installation is worth it:</strong></p>
          <ul className='list-disc pl-6 mb-4 space-y-1'>
            <li className='text-slate-700 text-sm'>The aluminum retainer on the bottom of the door is damaged or bent. Replacing a damaged retainer requires drilling out rivets or removing screws, which is genuinely difficult without experience.</li>
            <li className='text-slate-700 text-sm'>The wood stop molding around the frame is rotted. Rotted molding needs to be replaced, not just re-sealed, and is attached to the structural frame.</li>
            <li className='text-slate-700 text-sm'>The door itself is warped or out of square. No amount of new weather stripping seals a door that does not sit flat in its frame. If the door is warping due to failing springs, see our <Link href='/problems/garage-door-spring-replacement' className='text-amber-700 underline'>garage door spring replacement guide</Link>.</li>
          </ul>
        </section>

        {/* Seasonal Maintenance That Extends Seal Life */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Seasonal Maintenance That Extends Seal Life</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Spring:</strong> Inspect all four seals after winter. Winter is the hardest season on weather stripping. Repeated freeze-thaw cycles, ice bonding, and cold-induced brittleness cause more damage than the rest of the year combined. Replace anything that cracked or tore over winter before summer UV exposure makes it worse.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Summer:</strong> Apply a UV protectant spray (303 Aerospace Protectant or similar) to rubber seals on south or west-facing doors. Direct sun degrades rubber faster than any other factor. A UV spray applied in May extends seal life by one to two years on high-sun exposures.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Fall:</strong> Apply silicone spray to the bottom seal before the first freeze. This is the single most effective way to prevent the seal from bonding to ice on the concrete floor overnight and tearing when the opener pulls the door up on a cold morning. Takes 30 seconds. See our <Link href='/guides/how-to-winterize-your-garage' className='text-amber-700 underline'>garage door winterization guide</Link> for the full pre-winter seal checklist.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Year-round:</strong> Never use petroleum-based lubricants (WD-40, motor oil) on rubber seals. Petroleum degrades rubber over time, accelerating cracking and brittleness. Use only silicone-based products on any rubber component. According to the <a href='https://www.energy.gov/energysaver/air-sealing-your-home' target='_blank' rel='noopener noreferrer' className='text-amber-700 underline'>U.S. Department of Energy</a>, proper air sealing is one of the most cost-effective ways to reduce energy loss in any home.</p>
        </section>

        {/* FAQ Section */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Frequently Asked Questions</h2>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>How do I know if my garage door weather stripping needs replacing?</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>The clearest signs are visible daylight around the closed door, drafts you can feel with your hand along the door frame, water pooling inside after rain, pests or insects getting in despite a closed door, and visible cracking, brittleness, or missing sections in the rubber or vinyl material. The bottom seal should also be replaced if it froze to the floor and tore during a winter opening. A damaged seal does not recover after tearing.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>How long does garage door weather stripping last?</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Bottom seals last 3 to 5 years at average use (4 cycles per day). Side and top seals last 5 to 7 years. Quality EPDM rubber lasts significantly longer than vinyl in cold climates. Properly installed weather stripping with regular silicone spray maintenance and UV protection can reach the higher end of these ranges. Poorly installed seals, or seals on south-facing doors without UV protection, can fail in 2 to 3 years.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Can I replace garage door weather stripping myself?</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Yes, for most homeowners. Bottom seal replacement requires sliding the old seal out and the new one in. No tools beyond a utility knife and tape measure are needed. Side and top seal replacement requires a staple gun or hammer and nails for wood stop molding types. The only situations that genuinely require a professional are a damaged or bent bottom retainer, rotted frame molding, or a door that is warped out of square.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>What is the best material for garage door weather stripping?</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>EPDM rubber is the best overall choice. It remains flexible in temperatures down to -40 degrees Fahrenheit, resists UV degradation effectively, and outlasts vinyl by several years in cold climates. Vinyl (PVC) is a reasonable budget option in mild climates but becomes brittle in sustained cold below 20 degrees. Silicone is the premium option for high-sun exposures. It handles UV better than EPDM and costs $10 to $15 more per replacement.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Why does my garage door keep freezing to the floor?</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>The bottom seal is bonding to water on the concrete floor before it freezes overnight. The fix is simple: apply silicone spray to the bottom of the seal every fall. Silicone prevents rubber from bonding to ice. If the door has already frozen, do not press the opener button. That burns out the motor. Disconnect the opener, chip the ice away from outside, and lift the door manually. See our <Link href='/problems/garage-door-wont-open' className='text-amber-700 underline'>garage door won&apos;t open guide</Link> for the full frozen door procedure.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>How much does it cost to replace garage door weather stripping?</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>DIY replacement of the bottom seal costs $20 to $45 in materials. A full perimeter replacement (all four seal positions) costs $50 to $120 in materials and takes 60 to 90 minutes. Professional installation of the full perimeter runs $150 to $350 depending on door size and seal condition. The bottom seal is by far the most cost-effective DIY maintenance task on any garage door.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Should I replace all the weather stripping at once or just the failed piece?</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Replace all four seals at the same time when the bottom seal reaches 5 years old. All seals were installed simultaneously and have experienced the same degradation from UV and temperature. Replacing only the failed piece leaves aging seals in place that will require replacement within one to two years anyway. The incremental labor cost of doing all four at once is minimal and the material cost difference is $30 to $50.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Does garage door weather stripping affect energy bills?</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Yes, meaningfully for attached garages. An uninsulated or poorly sealed attached garage acts as a thermal buffer for adjacent rooms. Air infiltration through failed weather stripping is a direct energy loss pathway. According to the Department of Energy, properly sealing and insulating the boundary between an attached garage and living space can reduce energy loss through that wall by 60 to 70 percent. For a detached garage, the energy impact is limited to the garage itself. It is significant if you heat the space and minimal if you do not. For more on insulation and sealing working together, see our <Link href='/guides/how-to-insulate-garage' className='text-amber-700 underline'>garage insulation guide</Link>.</p>
        </section>

        {/* Related Guides */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Related Guides</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Link href='/guides/garage-door-maintenance' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Guide</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Door Maintenance</p>
              <p className='text-slate-500 text-xs mt-1'>The full annual maintenance schedule that includes weather seal inspection.</p>
            </Link>
            <Link href='/guides/how-to-winterize-your-garage' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Guide</span>
              <p className='font-semibold text-slate-800 text-sm'>How to Winterize Your Garage</p>
              <p className='text-slate-500 text-xs mt-1'>Pre-winter seal checklist and silicone spray treatment.</p>
            </Link>
            <Link href='/problems/garage-door-wont-open' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Problem</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Door Won&apos;t Open</p>
              <p className='text-slate-500 text-xs mt-1'>What to do when the bottom seal freezes to the floor.</p>
            </Link>
            <Link href='/problems/garage-door-spring-replacement' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Problem</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Door Spring Replacement</p>
              <p className='text-slate-500 text-xs mt-1'>If the door is tearing seals because the springs are failing.</p>
            </Link>
            <Link href='/guides/how-to-insulate-garage' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Guide</span>
              <p className='font-semibold text-slate-800 text-sm'>How to Insulate Your Garage</p>
              <p className='text-slate-500 text-xs mt-1'>Sealing and insulation work together for maximum energy efficiency.</p>
            </Link>
          </div>
        </section>

        {/* Glossary */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Glossary</h2>
          <div className='space-y-3'>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Bottom seal (door astragal)</p>
              <p className='text-slate-700 text-sm'>The rubber or vinyl strip running the full width of the garage door bottom, housed in an aluminum retainer. It creates a weather-tight barrier between the door and the concrete floor on every close cycle. The most frequently replaced weather sealing component on any garage door. Standard lifespan is 3 to 5 years. Profile types (T-slot, bulb, J-type, beaded) are not interchangeable. Match the profile to the retainer before purchasing.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Stop molding</p>
              <p className='text-slate-700 text-sm'>The wood frame trim running up both sides and across the top of the garage door opening, with an attached rubber or vinyl flange that contacts the door face when closed. Provides the side and top seals. Secured to the structural door frame with nails or staples. Replaced as a unit when the rubber flange degrades. Full perimeter replacement kits cost $40 to $80.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>EPDM rubber</p>
              <p className='text-slate-700 text-sm'>Ethylene propylene diene monomer rubber, the best material choice for garage door weather seals. Remains flexible at temperatures down to -40 degrees Fahrenheit, resists UV degradation effectively, and outlasts vinyl by several years in cold climates. The correct material for bottom seals in any climate with significant winter temperatures.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>T-slot profile</p>
              <p className='text-slate-700 text-sm'>The most common bottom seal profile for residential garage doors. The seal has a T-shaped stem that slides into a matching T-channel in the aluminum retainer on the bottom of the door. Not interchangeable with bulb, J-type, or beaded profiles. Identify your profile by examining the retainer channel before purchasing a replacement.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Retainer</p>
              <p className='text-slate-700 text-sm'>The aluminum extrusion mounted to the bottom of the garage door that holds the bottom seal. The retainer has a specific channel profile (T, J, bulb, or bead) that accepts only the matching seal profile. If the retainer is bent or damaged, the seal cannot seat properly and the retainer must be replaced before the seal. Retainer replacement requires removing mounting hardware and is a more involved repair than seal replacement alone.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Silicone spray lubricant</p>
              <p className='text-slate-700 text-sm'>A dry, non-greasy lubricant appropriate for all rubber seal surfaces. Applied to the bottom seal every fall, it prevents the seal from bonding to ice on the concrete floor overnight. Never use petroleum-based products (WD-40, motor oil) on rubber seals. Petroleum degrades rubber and accelerates cracking and brittleness.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>UV protectant</p>
              <p className='text-slate-700 text-sm'>A spray product (such as 303 Aerospace Protectant) that protects rubber and vinyl from UV degradation. Applied to perimeter seals in spring, particularly on south and west-facing doors with heavy direct sun exposure. Extends seal life by one to two years on high-sun exposures. Available at auto parts stores and hardware stores for $10 to $20.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Panel seal</p>
              <p className='text-slate-700 text-sm'>The interlocking rubber gasket integrated between horizontal door panels that prevents air infiltration through panel joints. Unlike perimeter seals, panel seals are part of the door panel itself and are not independently replaceable. They last the longest of any seal type (10 to 15 years) and are replaced when the panel is replaced.</p>
            </div>
          </div>
        </section>

        {/* Get Quote Form */}
        <LeadForm />

        {/* JSON-LD Schemas */}
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      </article>
    </>
  )
}
