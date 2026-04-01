import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Garage Door Maintenance: The Complete Annual Checklist | The Garage Guide',
  description: 'How to maintain your garage door: monthly safety tests, twice-yearly lubrication, annual balance check, and the exact signs that mean call a pro. Step-by-step checklist.',
  alternates: {
    canonical: 'https://thegarage.guide/guides/garage-door-maintenance',
  },
  openGraph: {
    title: 'Garage Door Maintenance: The Complete Annual Checklist | The Garage Guide',
    description: 'How to maintain your garage door: monthly safety tests, twice-yearly lubrication, annual balance check, and the exact signs that mean call a pro. Step-by-step checklist.',
    url: 'https://thegarage.guide/guides/garage-door-maintenance',
    siteName: 'The Garage Guide',
    type: 'article',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How often should I lubricate my garage door?', acceptedAnswer: { '@type': 'Answer', text: 'Lubricate hinges, rollers, springs, and the opener drive twice per year: once in spring and once in fall before temperatures drop. In climates with very cold winters, a third lubrication pass in October is worth doing because cold thickens lubricant significantly, increasing stress on the opener motor. Each session takes under 20 minutes.' } },
    { '@type': 'Question', name: 'What lubricant should I use on a garage door?', acceptedAnswer: { '@type': 'Answer', text: 'Use silicone-based spray lubricant or white lithium grease for all garage door components. Silicone spray is the easiest to apply and works well for hinges, rollers, and spring coils. White lithium grease is better for heavier-duty applications like chain drive openers and roller bearings under high load. Never use WD-40. It is a solvent and degreaser that removes existing lubrication and leaves parts dry within weeks.' } },
    { '@type': 'Question', name: 'How do I know if my garage door springs need to be replaced?', acceptedAnswer: { '@type': 'Answer', text: 'The clearest signs are a door that feels extremely heavy when lifted manually, a visible gap or separation between coils on the torsion spring, or a loud bang that occurred when you last closed the door. Standard torsion springs are rated for 10,000 cycles, which equals roughly 7 years at 4 uses per day. If your springs are over 7 years old and showing any of these signs, schedule a professional inspection. Never attempt spring replacement yourself. Springs are under extreme tension and can cause severe injury.' } },
    { '@type': 'Question', name: 'What is the garage door balance test and how do I do it?', acceptedAnswer: { '@type': 'Answer', text: 'The balance test checks whether the door\'s springs are providing enough counterbalance to hold the door at any position. Disconnect the opener by pulling the red emergency release cord. Lift the door manually to 3 to 4 feet off the ground and let go. A properly balanced door stays in place. If it slides down, the springs are weak or worn. If it rises, the springs are over-tensioned. Either result means calling a professional for spring adjustment.' } },
    { '@type': 'Question', name: 'How long do garage door rollers last?', acceptedAnswer: { '@type': 'Answer', text: 'It depends on the type. Plastic builder-grade rollers last 1,000 to 3,000 cycles and should be replaced immediately. Steel rollers with ball bearings last 5,000 to 10,000 cycles, or 3 to 7 years at typical use. Nylon rollers with 10 ball bearings last 10,000 to 15,000 cycles. Premium nylon rollers with 13 sealed ball bearings are rated for 20,000 to 50,000 cycles and can last 15 or more years. Upgrading from plastic or steel to nylon is one of the best maintenance investments you can make. A full set costs $25 to $50 and significantly reduces noise and wear on the tracks.' } },
    { '@type': 'Question', name: 'How do I test if my garage door auto-reverse is working?', acceptedAnswer: { '@type': 'Answer', text: 'Place a flat 2x4 board on the ground in the center of the door opening and press close. The door should contact the board and reverse within 2 seconds. This test should be done every month. If the door does not reverse, adjust the down-force setting on the opener per the manual. Garage door openers manufactured after January 1, 1991 are required by federal law to include an auto-reverse mechanism. If yours fails and cannot be corrected, the opener should be replaced.' } },
    { '@type': 'Question', name: 'Should I lubricate garage door tracks?', acceptedAnswer: { '@type': 'Answer', text: 'No. Lubricating the inside of tracks attracts dirt, creates sticky buildup, and can cause the door to skid instead of roll. The correct approach is to wipe the tracks clean with a dry rag to remove debris and old grease. Apply a very light coat of silicone spray to the top curved section of the vertical tracks only, where rollers transition from vertical to horizontal travel. Leave the long vertical sections of the track dry.' } },
    { '@type': 'Question', name: 'When should I call a professional instead of DIYing garage door maintenance?', acceptedAnswer: { '@type': 'Answer', text: 'Call a professional any time the job involves torsion springs, extension springs, or lift cables. These components are under extreme mechanical tension and can cause serious injury if handled incorrectly. Also call a pro if the door has come off its tracks, the auto-reverse adjustment does not fix the safety test failure, or the door fails the balance test. For everything else: lubrication, hardware tightening, sensor cleaning, weather seal replacement, and roller swaps, most homeowners can handle the work themselves.' } },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Garage Door Maintenance: The Complete Annual Checklist',
  description: 'How to maintain your garage door: monthly safety tests, twice-yearly lubrication, annual balance check, and the exact signs that mean call a pro.',
  image: 'https://thegarage.guide/images/_garage-door-maintenance.jpg',
  datePublished: '2026-03-29',
  dateModified: '2026-03-29',
  url: 'https://thegarage.guide/guides/garage-door-maintenance',
  author: { '@type': 'Organization', name: 'The Garage Guide', url: 'https://thegarage.guide' },
  publisher: { '@type': 'Organization', name: 'The Garage Guide', url: 'https://thegarage.guide' },
}

export default function GarageDoorMaintenance() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Guides', href: '/guides' }, { label: 'Garage Door Maintenance' }]} />
      <article className='container-custom py-8 max-w-4xl mx-auto'>
        {/* Hero Section */}
        <div className='relative rounded-xl overflow-hidden mb-8' style={{ minHeight: '400px' }}>
          <Image src='/images/_garage-door-maintenance.jpg' alt='Homeowner performing garage door maintenance' fill className='object-cover' priority />
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent' />
          <div className='absolute bottom-0 left-0 right-0 p-6 md:p-10'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center text-white font-bold text-sm'>GG</div>
              <div>
                <p className='text-white font-semibold text-sm'>The Garage Guide</p>
                <p className='text-gray-300 text-xs'>Updated Mar 2026 · 14 min read</p>
              </div>
            </div>
            <span className='text-amber-700 font-bold text-xs uppercase tracking-wider'>Guide</span>
            <h1 className='text-3xl md:text-4xl font-bold text-white mt-1'>Garage Door Maintenance: <span className='text-amber-500'>The Complete Annual Checklist</span></h1>
            <p className='text-gray-200 mt-2 text-sm md:text-base max-w-2xl'>How to maintain your garage door: monthly safety tests, twice-yearly lubrication, annual balance check, and the exact signs that mean call a pro.</p>
          </div>
        </div>

        {/* TL;DR */}
        <div style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75', padding: '16px 20px' }} className='rounded-r-lg mb-4'>
          <p style={{ color: '#1D9E75' }} className='text-sm font-bold mb-2'>TL;DR</p>
          <p className='text-slate-700 text-sm leading-relaxed'>A well-maintained garage door needs two full lubrication sessions per year, a monthly auto-reverse safety test, and an annual balance check. Most maintenance takes under 30 minutes and costs nothing beyond a $10 can of silicone spray. Skip it and you risk a broken spring, a failed opener, or a door that stops working on the coldest morning of the year.</p>
        </div>

        {/* Intro */}
        <p className='text-slate-700 text-sm leading-relaxed mb-4'>Most garage door failures are not surprises. A spring does not snap without warning. It loses tension over hundreds of cycles, the door gets slightly heavier each month, and the opener works a little harder each time. A sensor does not fail randomly. It drifts out of alignment after a bump from a bicycle or a hard close in cold weather. A bottom seal does not blow out overnight. It cracks over a summer of UV exposure, and the first hard freeze tears it clean off.</p>
        <p className='text-slate-700 text-sm leading-relaxed mb-4'>Every one of those failures is preventable with 30 minutes of maintenance twice a year and a 5-minute safety check once a month. The total cost is a $10 can of silicone spray. The cost of skipping it is a $350 spring replacement, a $250 opener repair, or a door that stops working at 7 a.m. on a cold Tuesday when you need to leave for work.</p>
        <p className='text-slate-700 text-sm leading-relaxed mb-4'>A garage door is the largest moving object in most homes, weighing 150 to 400 lbs and cycling thousands of times per year. At 4 uses per day, a standard 10,000-cycle torsion spring reaches end-of-life in roughly 7 years. At 6 uses per day, that same spring is gone in under 5 years. Regular maintenance does not make worn-out parts last forever, but it catches the warning signs early, keeps lubricated parts from failing prematurely, and ensures the safety features that protect your family are actually working.</p>
        <p className='text-slate-700 text-sm leading-relaxed mb-6'>This guide covers every maintenance task a homeowner should perform, when to do it, what pass/fail looks like, and exactly which jobs to hand to a professional.</p>
        <p className='text-slate-700 text-sm leading-relaxed mb-6'>For a complete maintenance schedule covering all nine garage systems across every season, see our <Link href='/guides/garage-maintenance-checklist' className='text-amber-700 underline'>complete garage maintenance checklist</Link>.</p>

        {/* What You Need */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>What You Need Before You Start</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>You do not need specialized tools for garage door maintenance. Gather these items before starting:</p>
          <div className='overflow-x-auto mb-4'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Item</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Purpose</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Silicone-based spray lubricant</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Springs, hinges, rollers, tracks</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$8 to $12</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>White lithium grease (optional)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Heavy-duty hinge and roller bearings</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$6 to $10</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Clean rags</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Wipe tracks, clean sensor lenses</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$0</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Socket set or wrench</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Tighten hardware bolts</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$0 (most homeowners have these)</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>2x4 scrap piece, at least 18 inches long</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Auto-reverse safety test</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$0</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Step ladder</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Reach opener unit</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$0</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Flashlight</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Inspect cables, springs, upper tracks</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$0</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>What not to use:</strong> WD-40 is a solvent and degreaser, not a long-term lubricant. It removes existing grease, attracts dust, and leaves parts dry within weeks. Use silicone spray or white lithium grease on all garage door components.</p>
        </section>

        {/* Monthly Maintenance */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Monthly Maintenance: 5 Minutes, Three Tests</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>These three checks take 5 minutes and should be done every month. They test the safety features required by UL 325, the federal safety standard for residential garage door openers that has been mandatory since 1993.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Test 1: Auto-Reverse Mechanical Test</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>The auto-reverse force sensor is required on every opener manufactured after January 1, 1991. It detects resistance during closing and reverses the door before it can crush an object or person. According to the <a href='https://www.cpsc.gov/Regulations-Laws--Standards/Voluntary-Standards/Topics/Garage-Door-OperatorsGate-Operators' target='_blank' rel='noopener noreferrer' className='text-amber-700 underline'>U.S. Consumer Product Safety Commission</a>, approximately half of garage doors tested during home inspections fail to auto-reverse correctly — making this the single most important monthly test you can do.</p>

          <h4 className='font-semibold text-slate-800 text-sm mb-2'>Critical Safety Test: Do This Every Month</h4>
          <div className='bg-red-50 border-l-4 border-red-600 p-4 rounded mb-6'>
            <h3 className='font-semibold text-slate-800 text-sm mb-2'>Critical Safety Test</h3>
            <p className='text-slate-700 text-sm'>Before anything else, test your auto-reverse every single month. Place a flat 2x4 board on the ground in the center of the door opening (lying flat, 1.5 inches tall). Press close and stand back. The door must contact the board and reverse within 2 seconds. If it does not, stop using the automatic opener until the force setting is adjusted or a professional inspects the unit. A door that does not auto-reverse is a documented safety hazard responsible for dozens of child fatalities since 1982.</p>
          </div>

          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>How to test:</strong></p>
          <ol className='list-decimal list-inside text-slate-700 text-sm space-y-1 mb-4'>
            <li>Close the garage door completely.</li>
            <li>Place a flat 2x4 board on the ground in the center of the door opening, lying flat (1.5 inches tall).</li>
            <li>Press the close button and stand clear.</li>
            <li>The door should contact the 2x4, stop, and reverse within 2 seconds.</li>
          </ol>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>If it fails:</strong> The force setting on the opener needs adjustment. Locate the force or sensitivity adjustment screws on the opener unit (usually labeled DOWN FORCE or CLOSE FORCE) and turn down the sensitivity in small increments. Re-test after each adjustment. If the door still does not reverse after adjusting, or if the opener is more than 15 years old, schedule a service call.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Never bypass this test.</strong> A door that does not auto-reverse is a serious safety hazard for children and pets.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Test 2: Photo Eye Sensor Test</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Photo eye sensors at the bottom of the door tracks send an infrared beam across the opening. If the beam is broken while the door is closing, the door must stop and reverse.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>How to test:</strong></p>
          <ol className='list-decimal list-inside text-slate-700 text-sm space-y-1 mb-4'>
            <li>With the door open, press the close button.</li>
            <li>While the door is moving, wave a broom handle through the sensor beam path (about 6 inches off the floor, across the full opening).</li>
            <li>The door should immediately stop and reverse.</li>
          </ol>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>If it fails:</strong> Clean the sensor lenses with a soft dry cloth. Check that both sensors have steady indicator lights (usually amber on the sending sensor, green on the receiving sensor). If one light is blinking or off, the sensors are misaligned. See the sensor alignment steps in our <Link href='/problems/garage-door-opener-not-working' className='text-amber-700 underline'>garage door opener troubleshooting guide</Link>.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Test 3: Visual Quick Check</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'>Walk around the door and spend 60 seconds looking for:</p>
          <ul className='list-disc list-inside text-slate-700 text-sm space-y-1 mb-4'>
            <li>Any unusual noise or jerking motion when opening or closing</li>
            <li>Rollers that wobble, crack, or look visibly worn</li>
            <li>Tracks that appear bent or pulled away from the wall</li>
            <li>Any visible gap in the torsion spring coil above the door (a gap means a broken spring — do not operate the door)</li>
          </ul>
        </section>

        {/* Twice-Yearly Maintenance */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Twice-Yearly Maintenance: Full Lubrication and Inspection</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Do this in <strong>spring</strong> (after winter) and <strong>fall</strong> (before temperatures drop below freezing). The full session takes 20 to 30 minutes.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Step 1: Lubricate the Hinges</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Garage doors have 10 to 12 hinges connecting the door panels. Each hinge has a steel pin that rotates thousands of times per year.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Apply a short burst of silicone spray to the hinge pin and the hinge knuckle where the two halves meet. Wipe off any excess. Do not spray the flat hinge plate. Only the moving pin joint.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Signs a hinge needs replacement:</strong> Cracks in the hinge body, a loose fit where the hinge attaches to the panel, or a pin that wiggles visibly.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Step 2: Lubricate the Rollers</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>A standard residential garage door has 10 to 12 rollers. What they are made of matters significantly for how you maintain them.</p>
          <div className='overflow-x-auto mb-4'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Roller Type</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Cycle Rating</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Lubrication Needed</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Replacement Interval</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Plastic (builder-grade)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>1,000 to 3,000 cycles</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>None (cannot be lubricated effectively)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Replace immediately if present</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Steel with exposed ball bearings</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>5,000 to 10,000 cycles</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Every 6 months, apply to bearings</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Every 3 to 5 years</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Nylon with 10 ball bearings</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>10,000 to 15,000 cycles</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Every 6 months, apply to bearings</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Every 7 to 10 years</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Nylon with 13 sealed ball bearings</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>20,000 to 50,000 cycles</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Sealed (no lubrication required)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>15 or more years</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Apply silicone spray directly to the roller bearing area, not the roller wheel itself. On nylon rollers with exposed bearings, spray where the wheel meets the stem. On sealed-bearing nylon rollers, skip lubrication entirely.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>If you have plastic rollers:</strong> Replace them. Plastic rollers have no ball bearings and cannot be lubricated effectively. They are installed by builders to cut costs and fail much faster than steel or nylon. A set of 10 to 12 nylon rollers with 10 ball bearings costs $25 to $40 and takes under an hour to install.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Step 3: Lubricate the Torsion Spring</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>The torsion spring is the large coiled spring mounted horizontally above the door opening. It stores and releases energy with every cycle, counterbalancing the door&apos;s full weight.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Apply a light coat of silicone spray or white lithium grease along the length of the spring coils. Run the opener once or twice to distribute the lubricant. This reduces friction, slows rust formation, and helps the spring last closer to its rated cycle count.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Critical safety rule:</strong> Only lubricate the torsion spring. Never touch, adjust, or attempt to repair it. Torsion springs are wound under extreme tension. A failure during adjustment can cause severe injury. Standard torsion springs are rated for 10,000 cycles (about 7 years at 4 uses per day). High-cycle springs run 25,000 to 50,000 cycles. If your spring shows a visible gap between coils, do not operate the door. Call a professional immediately.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Extension springs</strong> (two springs on either side of the door instead of one spring above it) should also be lubricated. Never attempt to adjust or replace extension springs without a professional. A snapping extension spring becomes a projectile.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Step 4: Lubricate the Tracks (Correctly)</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>This step confuses many homeowners. The tracks themselves should not be lubricated. Grease on the inside of a track attracts dirt, creates a gummy buildup, and can actually cause the door to slip.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>What you should do: wipe the inside of both tracks clean with a dry rag, removing any dirt, debris, or old grease buildup. Apply a very light coating of silicone spray to the top 12 inches of each vertical track only where the rollers enter the curved section at the top. Do not spray the long vertical sections.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Step 5: Lubricate the Opener Drive</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'>The type of opener drive determines what gets lubricated:</p>
          <ul className='list-disc list-inside text-slate-700 text-sm space-y-2 mb-4'>
            <li><strong>Chain drive:</strong> Apply white lithium grease to the chain using a rag. Run the opener several times to distribute. A dry chain produces a loud rattling sound and wears both the chain and the sprocket faster.</li>
            <li><strong>Screw drive:</strong> Apply a thin coat of white lithium grease along the full length of the threaded rod.</li>
            <li><strong>Belt drive:</strong> Do not lubricate the belt. Grease causes belt slippage and accelerates wear. Inspect the belt for cracks or fraying. Check the tension. A belt with more than 1/2 inch of play should be adjusted per the opener manual.</li>
          </ul>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Step 6: Tighten All Hardware</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'>The vibration of hundreds of open/close cycles works hardware loose over time. Spend 5 minutes tightening every bolt and nut you can see:</p>
          <ul className='list-disc list-inside text-slate-700 text-sm space-y-1 mb-4'>
            <li>Roller bracket bolts on the door panels (there are 2 per bracket)</li>
            <li>Hinge screws</li>
            <li>Track mounting brackets where they attach to the wall and ceiling</li>
            <li>Opener mounting hardware</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Use a wrench or socket set. Do not overtighten. Snug is enough. If a bolt turns but does not tighten, the hole has stripped. Replace with a larger bolt or use a hanger bolt anchor.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Step 7: Inspect and Clean the Safety Sensors</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Even if the photo eye test passed last month, clean the sensor lenses during the biannual session. Dust, spider webs, and moisture on the lens surface cause intermittent sensor failures that are frustrating to diagnose.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Wipe both sensor lenses with a dry soft cloth. Check the wiring from each sensor to the opener unit for any visible damage or chafing. Confirm both indicator lights are steady. Move the sensors by hand, and if they shift easily, tighten the mounting bracket.</p>
        </section>

        {/* Annual Maintenance */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Annual Maintenance: Balance Test and Full Inspection</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Once per year, do these additional checks. The best time is spring, combined with the biannual lubrication session.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>The Balance Test</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>A balanced garage door should hold its position at any point in its travel. The springs do the counterbalancing work. When springs weaken, the opener motor compensates, shortening its lifespan and increasing the risk of the door failing unexpectedly.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>How to perform the balance test:</strong></p>
          <ol className='list-decimal list-inside text-slate-700 text-sm space-y-1 mb-4'>
            <li>Close the door completely.</li>
            <li>Pull the red emergency release cord to disconnect the door from the opener.</li>
            <li>Manually lift the door to approximately 3 to 4 feet off the ground.</li>
            <li>Let go.</li>
          </ol>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>Pass:</strong> The door stays in place, holding its position within a few inches.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Fail:</strong> The door slides down toward the floor (springs are weak or broken) or rises toward the ceiling (springs are over-tensioned).</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>If the door fails the balance test, do not adjust the springs yourself. Call a professional. Spring adjustment requires specialized winding bars and training. The cost of a spring service call is $150 to $350, far less than the cost of an ER visit or a damaged door from an improperly tensioned spring.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>After the balance test, reconnect the opener by pulling the emergency release cord toward the opener (away from the door) until it clicks, then run the opener to re-engage the trolley.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Inspect the Cables</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>The two lift cables run from the bottom corners of the door up to the spring system. They carry the door&apos;s full weight on every cycle.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'>Stand back and look at both cables. Signs that require a professional inspection:</p>
          <ul className='list-disc list-inside text-slate-700 text-sm space-y-1 mb-4'>
            <li>Fraying, kinking, or broken strands visible on the cable</li>
            <li>Cable that appears slack or has fallen off its drum</li>
            <li>Rust or corrosion on the cable surface</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Do not touch cables under tension. If you see damage, call a professional before operating the door again. A cable failure during operation can cause the door to fall or come off its tracks.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Inspect the Weather Seals</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'>Check all four perimeter seals:</p>
          <ul className='list-disc list-inside text-slate-700 text-sm space-y-2 mb-4'>
            <li><strong>Bottom seal (door astragal):</strong> Press the back of your hand against the seal while the door is closed. You should feel no airflow. Look for cracks, tears, or gaps wider than 1/4 inch. Bottom seals cost $20 to $40 and are a straightforward DIY replacement.</li>
            <li><strong>Side and top seals:</strong> Run your finger along the full length of each seal. They should be supple, not brittle or cracked. Brittle seals let in cold air, moisture, insects, and light.</li>
            <li><strong>Door sections:</strong> Check the rubber or vinyl seal between door panels. If sections no longer compress against each other when the door is closed, air and moisture are getting through.</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>For a complete guide to identifying which of the four seals has failed and how to replace each type, see our <Link href='/problems/garage-door-weather-stripping' className='text-amber-700 underline'>garage door weather stripping guide</Link>.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Inspect Panels and Paint</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>For steel doors, check for surface rust where paint has chipped or scratched. Sand the affected area, apply a rust-inhibiting primer, and repaint. Untreated rust spreads rapidly and can weaken the panel structure over time.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>For wood doors, look for soft spots or swelling, particularly along the bottom panel where moisture exposure is highest. A soft or swollen bottom panel requires either repair or full panel replacement.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>If the surface is faded, chalky, or showing peeling paint, see our <Link href='/guides/how-to-paint-a-garage-door' className='text-amber-700 underline'>complete guide to painting a garage door</Link> for prep, primer selection, and a finish that lasts.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Inspect the Opener for Age and Function</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'>Note how old your opener is. Most residential openers last 10 to 15 years with basic maintenance. If your opener is approaching or past 15 years old, start budgeting for replacement even if it is currently working. Signs that replacement is closer than you think:</p>
          <ul className='list-disc list-inside text-slate-700 text-sm space-y-1 mb-4'>
            <li>The opener struggles to lift the door, especially in cold weather</li>
            <li>The motor runs longer than usual to complete an open or close cycle</li>
            <li>Rolling code security is absent (openers made before the mid-1990s)</li>
            <li>No battery backup (worth considering in areas with frequent power outages)</li>
            <li>No photo eye sensors (any opener made before 1993; replace immediately)</li>
          </ul>
        </section>

        {/* Seasonal Considerations */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Seasonal Considerations: Summer and Winter Both Cause Failures</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Temperature extremes affect garage door components in different ways and cause more failures at the seasonal peaks than at any other time. The problems are different by season, and so are the fixes.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Summer: Heat, UV, and Lubricant Thinning</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>High heat causes lubricant to thin and migrate away from the surfaces it is supposed to protect. A door lubricated in April may be running dry on its roller bearings by July in climates with hot summers. UV exposure from direct sunlight degrades rubber seals faster than any other factor. Heat also causes metal tracks to expand slightly, which can tighten roller travel and put extra load on the opener motor.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>Summer checklist:</strong></p>
          <ul className='list-disc list-inside text-slate-700 text-sm space-y-2 mb-4'>
            <li>Re-check lubrication in June or July if temperatures regularly exceed 90 degrees Fahrenheit. A thin coat of silicone spray takes 5 minutes and prevents dry-roller noise and wear.</li>
            <li>Inspect rubber seals around the door perimeter in July. Seals that were supple in spring can crack by midsummer under UV and heat. A cracked side seal lets in humidity, insects, and heat.</li>
            <li>If your garage faces west or south and gets direct afternoon sun, check that the photo eye sensors are not being hit by direct sunlight. Sunlight into the receiving sensor causes false beam interruptions that prevent the door from closing. A small cardboard sun shade over the sensor fixes this in under 5 minutes.</li>
            <li>Clean the door surface if it has been exposed to pollen, bird droppings, or road grime. These hold moisture against the surface and accelerate paint deterioration and rust on steel doors.</li>
          </ul>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Winter: Cold, Contraction, and Frozen Seals</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Cold is the leading cause of garage door failures. Steel contracts as temperature drops, increasing internal stress on already-wound spring coils. Lubricants thicken, slowing movement and increasing motor load. Bottom seals freeze to the driveway surface and tear when the door opens.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>Before the first freeze, do all of the following:</strong></p>
          <ul className='list-disc list-inside text-slate-700 text-sm space-y-2 mb-4'>
            <li>Re-lubricate all moving parts, even if you did it in spring. Cold thickens lubricant; a fresh coat of silicone spray in October costs $0 and prevents the most common winter failure scenario.</li>
            <li>Check the bottom seal before temperatures drop below 32 degrees Fahrenheit. A damaged seal freezes to the driveway surface and tears when the door opens, requiring a full replacement.</li>
            <li>Test the auto-reverse and balance on a cold morning. Springs under cold stress behave differently than springs at room temperature.</li>
            <li>If your opener has a battery backup, test the battery. Cold reduces battery performance by 20 to 40 percent.</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Why springs fail in cold weather:</strong> A spring that is near end-of-life but holding on through summer is more likely to break on a cold January morning than at any other time of year. Steel contracts under cold, increasing internal stress on already-wound coils. If your springs are 6 or more years old, listen for new noises in cold weather and watch for any change in how easily the door lifts manually during the balance test.</p>
        </section>

        {/* DIY vs Pro */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>DIY vs. Call a Professional</h2>
          <h3 className='text-lg font-bold text-slate-900 mb-2'>The 7-Year Rule</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>If your torsion springs are 7 or more years old, budget for replacement within the next 12 months regardless of whether they have broken yet. At 4 uses per day, standard 10,000-cycle springs hit end-of-life at exactly 7 years. Springs do not fail all at once. They lose tension gradually, making the door heavier, stressing the opener motor, and increasing the risk of a sudden snap. Replacing springs proactively at year 7 costs $150 to $350. Waiting for a break means the same cost plus an emergency service call premium of $50 to $100, a door stuck in whatever position it was in when the spring snapped, and a potential safety incident. The 7-Year Rule applies to standard springs. High-cycle springs rated for 25,000 cycles can run 15 to 20 years at average use before replacement is due.</p>
          <div className='overflow-x-auto mb-4'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Task</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>DIY or Pro?</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Why</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Lubricate hinges, rollers, springs</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium text-green-700'>DIY</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Simple, no tools required beyond a spray can</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Tighten hardware</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium text-green-700'>DIY</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Basic wrench work</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Clean sensor lenses</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium text-green-700'>DIY</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>No tools required</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Auto-reverse and sensor testing</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium text-green-700'>DIY</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Monthly routine</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Replace bottom weather seal</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium text-green-700'>DIY</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$20 to $40 part, 20 minutes</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Replace rollers</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium text-green-700'>DIY (most homeowners)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Straightforward if you follow the process; bottom two rollers are attached to cables — stop there and call a pro</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Replace panels (cosmetic damage)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium text-amber-700'>DIY or Pro</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Depends on panel weight and whether it affects structure</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Torsion spring adjustment</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium text-red-700'>Pro only</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Springs under extreme tension; serious injury risk</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Torsion spring replacement</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium text-red-700'>Pro only</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$150 to $350 professionally; not a DIY task</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Extension spring replacement</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium text-red-700'>Pro only</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Springs become projectiles when they fail improperly</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Cable replacement or repair</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium text-red-700'>Pro only</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Cables under extreme tension</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Track realignment (significant bends)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium text-red-700'>Pro only</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Requires specialized tools for correct alignment</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Opener motor or logic board replacement</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium text-amber-700'>Pro only or DIY with strong electrical comfort</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Depending on the model, some boards are plug-and-play; others are not</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Door off tracks</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium text-red-700'>Pro only</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Door off-track can fall; do not operate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Signs of Immediate Attention */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Signs Your Garage Door Needs Immediate Attention</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'>Stop using the door and call a professional if you observe any of the following:</p>
          <ul className='list-disc list-inside text-slate-700 text-sm space-y-2 mb-4'>
            <li>Visible gap or break in the torsion spring (a loud bang followed by the door being very heavy to lift manually almost always means a broken spring)</li>
            <li>Door comes off its tracks</li>
            <li>Lift cables appear frayed, kinked, or have fallen off their drums</li>
            <li>Door slams down when released during the balance test instead of holding position</li>
            <li>Auto-reverse test fails and cannot be corrected by adjusting the force setting</li>
            <li>Any grinding noise coming from the spring or cable system during operation</li>
          </ul>
        </section>

        {/* FAQ Section */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Frequently Asked Questions</h2>
          <div className='space-y-4'>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>How often should I lubricate my garage door?</h3>
              <p className='text-slate-700 text-sm'>Lubricate hinges, rollers, springs, and the opener drive twice per year: once in spring and once in fall before temperatures drop. In climates with very cold winters, a third lubrication pass in October is worth doing because cold thickens lubricant significantly, increasing stress on the opener motor. Each session takes under 20 minutes.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>What lubricant should I use on a garage door?</h3>
              <p className='text-slate-700 text-sm'>Use silicone-based spray lubricant or white lithium grease for all garage door components. Silicone spray is the easiest to apply and works well for hinges, rollers, and spring coils. White lithium grease is better for heavier-duty applications like chain drive openers and roller bearings under high load. Never use WD-40. It is a solvent and degreaser that removes existing lubrication and leaves parts dry within weeks.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>How do I know if my garage door springs need to be replaced?</h3>
              <p className='text-slate-700 text-sm'>The clearest signs are a door that feels extremely heavy when lifted manually, a visible gap or separation between coils on the torsion spring, or a loud bang that occurred when you last closed the door. Standard torsion springs are rated for 10,000 cycles, which equals roughly 7 years at 4 uses per day. If your springs are over 7 years old and showing any of these signs, schedule a professional inspection. Never attempt spring replacement yourself. Springs are under extreme tension and can cause severe injury.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>What is the garage door balance test and how do I do it?</h3>
              <p className='text-slate-700 text-sm'>The balance test checks whether the door&apos;s springs are providing enough counterbalance to hold the door at any position. Disconnect the opener by pulling the red emergency release cord. Lift the door manually to 3 to 4 feet off the ground and let go. A properly balanced door stays in place. If it slides down, the springs are weak or worn. If it rises, the springs are over-tensioned. Either result means calling a professional for spring adjustment.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>How long do garage door rollers last?</h3>
              <p className='text-slate-700 text-sm'>It depends on the type. Plastic builder-grade rollers last 1,000 to 3,000 cycles and should be replaced immediately. Steel rollers with ball bearings last 5,000 to 10,000 cycles, or 3 to 7 years at typical use. Nylon rollers with 10 ball bearings last 10,000 to 15,000 cycles. Premium nylon rollers with 13 sealed ball bearings are rated for 20,000 to 50,000 cycles and can last 15 or more years. Upgrading from plastic or steel to nylon is one of the best maintenance investments you can make. A full set costs $25 to $50 and significantly reduces noise and wear on the tracks.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>How do I test if my garage door auto-reverse is working?</h3>
              <p className='text-slate-700 text-sm'>Place a flat 2x4 board on the ground in the center of the door opening and press close. The door should contact the board and reverse within 2 seconds. This test should be done every month. If the door does not reverse, adjust the down-force setting on the opener per the manual. Garage door openers manufactured after January 1, 1991 are required by federal law to include an auto-reverse mechanism. If yours fails and cannot be corrected, the opener should be replaced.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Should I lubricate garage door tracks?</h3>
              <p className='text-slate-700 text-sm'>No. Lubricating the inside of tracks attracts dirt, creates sticky buildup, and can cause the door to skid instead of roll. The correct approach is to wipe the tracks clean with a dry rag to remove debris and old grease. Apply a very light coat of silicone spray to the top curved section of the vertical tracks only, where rollers transition from vertical to horizontal travel. Leave the long vertical sections of the track dry.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>When should I call a professional instead of DIYing garage door maintenance?</h3>
              <p className='text-slate-700 text-sm'>Call a professional any time the job involves torsion springs, extension springs, or lift cables. These components are under extreme mechanical tension and can cause serious injury if handled incorrectly. Also call a pro if the door has come off its tracks, the auto-reverse adjustment does not fix the safety test failure, or the door fails the balance test. For everything else: lubrication, hardware tightening, sensor cleaning, weather seal replacement, and roller swaps — most homeowners can handle the work themselves.</p>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Related Guides</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Link href='/problems/garage-door-opener-not-working' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Problem</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Door Opener Not Working</p>
              <p className='text-slate-500 text-xs mt-1'>Diagnose and fix the most common opener failures.</p>
            </Link>
            <Link href='/problems/garage-door-wont-close' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Problem</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Door Won&apos;t Close</p>
              <p className='text-slate-500 text-xs mt-1'>Sensor, track, and limit switch diagnosis.</p>
            </Link>
            <Link href='/cost-guides/garage-door-replacement-cost' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Cost Guide</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Door Replacement Cost</p>
              <p className='text-slate-500 text-xs mt-1'>What a new door costs installed in 2026.</p>
            </Link>
            <Link href='/reviews/best-garage-door-openers' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Review</span>
              <p className='font-semibold text-slate-800 text-sm'>Best Garage Door Openers</p>
              <p className='text-slate-500 text-xs mt-1'>Tested picks at every price point.</p>
            </Link>
            <Link href='/reviews/best-garage-door-keypads' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Review</span>
              <p className='font-semibold text-slate-800 text-sm'>Best Garage Door Keypads</p>
              <p className='text-slate-500 text-xs mt-1'>Wireless keypad picks for every opener brand.</p>
            </Link>
          </div>
        </section>

        {/* Glossary */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Glossary</h2>
          <div className='space-y-3'>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Torsion spring</p>
              <p className='text-slate-700 text-sm'>The large coiled spring mounted horizontally above the garage door opening on a metal shaft. It stores mechanical energy when the door closes and releases it when the door opens, counterbalancing the door&apos;s full weight. Standard torsion springs are rated for 10,000 cycles. High-cycle springs run 25,000 to 50,000 cycles. Never attempt to adjust or replace torsion springs without professional training. They are under extreme tension and can cause severe injury if released improperly.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Extension spring</p>
              <p className='text-slate-700 text-sm'>Two springs mounted on either side of the garage door, running parallel to the horizontal tracks. They stretch as the door closes and contract as it opens. Extension springs are typically found on older doors and lighter doors. They are rated for 5,000 to 10,000 cycles, which is less than torsion springs, and they are more dangerous when they break because they can snap away from the door as a projectile. Safety cables running through each extension spring reduce this risk.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Auto-reverse mechanism</p>
              <p className='text-slate-700 text-sm'>A safety feature built into all residential garage door openers manufactured after January 1, 1991, as required by federal law (16 CFR Part 1211, based on UL 325). It detects resistance when the door contacts an object during closing and reverses the door. The mechanical auto-reverse works independently of the photo eye sensors. Monthly testing with a 2x4 board on the ground is recommended.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Photo eye sensors (safety sensors)</p>
              <p className='text-slate-700 text-sm'>Two small infrared sensors mounted near the floor on either side of the garage door opening. One transmits a beam, the other receives it. If anything breaks the beam while the door is closing, the door stops and reverses. Required on all openers manufactured after January 1, 1993. Steady indicator lights confirm proper alignment; a blinking light means the beam is not reaching the receiving sensor.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Balance test</p>
              <p className='text-slate-700 text-sm'>A diagnostic check that measures whether the garage door&apos;s springs are providing adequate counterbalance. Performed by disconnecting the opener via the emergency release cord, lifting the door to 3 to 4 feet off the ground, and releasing it. A balanced door holds its position. A door that slides down indicates weakened springs; one that rises indicates over-tensioned springs. Both conditions require professional spring service.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Emergency release cord</p>
              <p className='text-slate-700 text-sm'>The red cord hanging from the opener trolley that disconnects the door from the automatic opener, allowing manual operation. Pulling it toward the door disengages the trolley. Pulling it back toward the opener re-engages it. Never pull the emergency release while the door is open if you suspect a broken spring. The door can fall under its full weight.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Silicone spray lubricant</p>
              <p className='text-slate-700 text-sm'>A dry, non-greasy lubricant appropriate for all garage door moving parts including hinges, roller bearings, spring coils, and the top of vertical tracks. Unlike petroleum-based lubricants, silicone spray does not attract dust or leave sticky residue. It is the preferred lubricant for residential garage door maintenance. One $10 can typically covers two full lubrication sessions.</p>
            </div>
            <div>
              <p className='font-semibold text-slate-800 text-sm'>UL 325</p>
              <p className='text-slate-700 text-sm'>The Underwriters Laboratories safety standard for door operators and systems, referenced by the U.S. Consumer Product Safety Commission as the mandatory safety framework for residential garage door openers. It requires two independent entrapment protection systems: an inherent force-reversal mechanism and an external device such as photo eye sensors. All openers manufactured since 1993 must comply.</p>
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
