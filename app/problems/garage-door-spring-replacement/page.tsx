import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Garage Door Spring Replacement: Cost, Signs, and What to Expect | The Garage Guide',
  description: 'Garage door spring replacement costs $150 to $350 professionally. Learn the signs your spring is failing, what type you have, and why this is never a DIY repair.',
  alternates: {
    canonical: 'https://thegarage.guide/problems/garage-door-spring-replacement',
  },
  openGraph: {
    title: 'Garage Door Spring Replacement: Cost, Signs, and What to Expect | The Garage Guide',
    description: 'Garage door spring replacement costs $150 to $350 professionally. Learn the signs your spring is failing, what type you have, and why this is never a DIY repair.',
    url: 'https://thegarage.guide/problems/garage-door-spring-replacement',
    siteName: 'The Garage Guide',
    type: 'article',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does it cost to replace a garage door spring?', acceptedAnswer: { '@type': 'Answer', text: 'Professional replacement of both torsion springs costs $200 to $350 for a standard set, or $250 to $450 if you upgrade to high-cycle springs rated for 25,000 cycles. Extension spring replacement runs $150 to $250 for both sides. After-hours or emergency service adds $50 to $100. Parts alone cost $50 to $100, but the labor, correct sizing, balance testing, and warranty that come with professional service make DIY a poor trade-off for most homeowners.' } },
    { '@type': 'Question', name: 'How do I know if my garage door spring is broken?', acceptedAnswer: { '@type': 'Answer', text: 'The clearest signs are a loud bang from the garage (the spring snapping under tension), the door refusing to open or opening only 2 to 4 inches, the door feeling extremely heavy when you try to lift it manually after disconnecting the opener, and a visible 2 to 3 inch gap in the torsion spring coil above the door. Slack or fallen lift cables on either side of the door are also a strong indicator that a spring has failed.' } },
    { '@type': 'Question', name: 'Can I replace a garage door spring myself?', acceptedAnswer: { '@type': 'Answer', text: 'No. Torsion spring replacement is one of the most dangerous DIY repairs a homeowner can attempt. The springs store over 200 lbs of mechanical force. If a winding bar slips during installation, it spins with the full rotational force of the spring, causing broken bones, facial fractures, and in documented cases, fatalities. The Consumer Product Safety Commission tracks over 20,000 garage door related emergency room visits annually. Professional replacement costs $150 to $350 and takes under an hour.' } },
    { '@type': 'Question', name: 'Do I need to replace both springs if only one breaks?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Both springs were installed at the same time and have completed the same number of cycles. When one breaks, the other is statistically near the end of its life. Replacing only the broken spring leaves you with one new spring and one aging spring, creating an unbalanced door and a second failure within months. Technicians price both springs together because the labor cost is nearly identical for one or two, making dual replacement the clear value choice.' } },
    { '@type': 'Question', name: 'How long do garage door springs last?', acceptedAnswer: { '@type': 'Answer', text: 'Standard torsion springs are rated for 10,000 cycles and last 7 years at 4 uses per day. High-cycle springs rated for 25,000 cycles last 17 years at the same usage rate. Extension springs are rated for 5,000 to 10,000 cycles and last 5 to 7 years. Lifespan varies significantly with usage frequency. A garage used as the primary entrance with 8 uses per day will wear through a standard spring in under 4 years.' } },
    { '@type': 'Question', name: 'What is a high-cycle spring and is it worth it?', acceptedAnswer: { '@type': 'Answer', text: 'A high-cycle spring is a torsion spring rated for 25,000 cycles or more instead of the standard 10,000. It is made from a higher grade of steel with a tighter wire tolerance. The upcharge over a standard spring is typically $50 to $100. For a household using the door 4 times per day, upgrading from a 10,000-cycle spring to a 25,000-cycle spring buys an additional 10 or more years before the next replacement. It is almost always worth the money and should be requested proactively when scheduling replacement.' } },
    { '@type': 'Question', name: 'What causes garage door springs to break?', acceptedAnswer: { '@type': 'Answer', text: 'Metal fatigue from repeated stress cycles is the primary cause. Every open-and-close winds and unwinds the spring, creating microscopic stress fractures in the steel that accumulate over thousands of cycles. Cold weather accelerates failure because steel contracts in low temperatures, increasing internal stress. Rust and corrosion thin the spring wire and concentrate stress at corroded points. Lack of lubrication increases friction and heat during operation. Springs that were undersized for the door\'s weight from the original installation fail faster because they are under greater stress per cycle.' } },
    { '@type': 'Question', name: 'Is it safe to use the garage door with a weakened spring?', acceptedAnswer: { '@type': 'Answer', text: 'No. A spring that is losing tension but has not yet broken creates an unbalanced door that puts excessive strain on the opener motor, cables, and rollers. The opener was designed to move a counterbalanced door with minimal effort. When it has to compensate for spring loss, it wears out significantly faster. A weakened spring also increases the risk of a sudden failure while the door is in motion, which is more dangerous than a failure in the closed position. If the manual lift test reveals a heavier-than-normal door, schedule replacement before the spring fails.' } },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Garage Door Spring Replacement: Cost, Signs, and What to Expect',
  description: 'Garage door spring replacement costs $150 to $350 professionally. Learn the signs your spring is failing, what type you have, and why this is never a DIY repair.',
  image: 'https://thegarage.guide/images/herogaragespringbroken.jpg',
  url: 'https://thegarage.guide/problems/garage-door-spring-replacement',
  datePublished: '2026-03-30',
  dateModified: '2026-03-30',
  author: { '@type': 'Organization', name: 'The Garage Guide', url: 'https://thegarage.guide' },
  publisher: { '@type': 'Organization', name: 'The Garage Guide', url: 'https://thegarage.guide' },
}

export default function GarageDoorSpringReplacement() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Problems', href: '/problems' }, { label: 'Spring Replacement' }]} />
      <article className='container-custom py-8 max-w-4xl mx-auto'>
        {/* Hero Section */}
        <div className='relative rounded-xl overflow-hidden mb-8' style={{ minHeight: '400px' }}>
          <Image src='/images/herogaragespringbroken.jpg' alt='Professional replacing a broken garage door torsion spring' fill className='object-cover' priority />
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent' />
          <div className='absolute bottom-0 left-0 right-0 p-6 md:p-10'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center text-white font-bold text-sm'>GG</div>
              <div>
                <p className='text-white font-semibold text-sm'>The Garage Guide</p>
                <p className='text-gray-300 text-xs'>Updated Mar 2026 · 13 min read</p>
              </div>
            </div>
            <span className='text-amber-700 font-bold text-xs uppercase tracking-wider'>Problem</span>
            <h1 className='text-3xl md:text-4xl font-bold text-white mt-1'>Garage Door Spring Replacement: <span className='text-amber-500'>Cost, Signs, and What to Expect</span></h1>
            <p className='text-gray-200 mt-2 text-sm md:text-base max-w-2xl'>Garage door spring replacement costs $150 to $350 professionally. Learn the signs your spring is failing, what type you have, and why this is never a DIY repair.</p>
          </div>
        </div>

        {/* TL;DR */}
        <div style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75', padding: '16px 20px' }} className='rounded-r-lg mb-6'>
          <p style={{ color: '#1D9E75' }} className='text-sm font-bold mb-2'>TL;DR</p>
          <p className='text-slate-700 text-sm leading-relaxed'>A broken garage door spring is not a DIY repair. Torsion springs are wound under extreme mechanical tension and have caused broken bones, facial injuries, and fatalities when mishandled. Professional replacement costs $150 to $350 for a standard torsion spring set, takes under an hour, and comes with a warranty. If one spring breaks, replace both at the same time. When you replace, ask about high-cycle springs rated for 25,000 cycles. They cost $50 to $100 more and last twice as long.</p>
        </div>

        {/* Opening Paragraphs */}
        <section className='mb-8'>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>There was a loud bang from the garage. Now the door will not open. Your car might be inside. You have no idea what just happened or how serious it is.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Here is what happened: your garage door spring broke. And here is the most important thing to know right now: do not press the opener button again. The opener motor is not designed to lift the door without spring tension. Every time you press that button, you risk burning out the motor and turning a $250 spring replacement into a $600 spring-plus-opener replacement. Stop pressing the button. Read the callout box below. Then work through this guide.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Garage door springs are the single most stressed mechanical component in the average home. A standard torsion spring opens and closes 4 times per day, 365 days per year, for 7 years before reaching its rated cycle count. Every cycle winds and unwinds hundreds of foot-pounds of stored energy. When that spring reaches the end of its life, it does not slow down gradually. It fails suddenly, usually with a sound like a gunshot, and the door becomes a 150 to 400 lb unsupported slab that cannot be safely opened until the spring is replaced.</p>
        </section>

        {/* Critical First Step */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Critical First Step: Do Not Operate the Door</h2>
          <div className='bg-red-50 border-l-4 border-red-500 p-4 rounded mb-4'>
            <h3 className='font-semibold text-red-800 text-sm mb-1'>Critical Safety Warning</h3>
            <p className='text-slate-700 text-sm'>If you suspect a broken spring, stop using the door immediately. Do not press the opener button. The opener motor is designed to move a counterbalanced door, not lift its full weight. Running the opener on a door with a broken spring strains the motor to the point of burning it out, adding a $200 to $400 opener repair to an already urgent situation. If your car is trapped inside, see the emergency manual opening section below for how to open the door safely.</p>
          </div>
        </section>

        {/* Torsion vs Extension */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Torsion Springs vs Extension Springs: Which Do You Have?</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Identifying your spring type before calling a professional ensures you get an accurate quote and understand what the job involves. The two types operate differently, have different lifespans, different costs, and different risk profiles.</p>

          <h3 className='text-lg font-semibold text-slate-800 mb-3'>How to Identify Your Spring Type</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Look above the door.</strong> If you see a single large coiled spring mounted horizontally on a metal shaft directly above the door opening, you have a torsion spring. This is the most common type in homes built after the mid-1990s.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Look along the horizontal tracks.</strong> If you see two springs running parallel to the horizontal track sections on either side of the door, one on each side, you have extension springs. These are found on older homes and lighter doors.</p>

          {/* Diagram Image */}
          <div className='mb-6'>
            <div className='relative w-full' style={{ aspectRatio: '16/9' }}>
              <Image src='/images/torsion vs extension .jpg' alt='Diagram showing torsion spring mounted above garage door on left and extension spring running along horizontal track on right' fill className='object-contain rounded-lg' />
            </div>
            <p className='text-slate-500 text-xs mt-2 text-center'>Torsion springs mount above the door on a horizontal shaft (left). Extension springs run along the horizontal tracks on each side (right).</p>
          </div>

          {/* Comparison Table */}
          <div className='overflow-x-auto mb-4'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Feature</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Torsion Spring</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Extension Spring</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Location</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Above the door on a horizontal shaft</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Along the horizontal tracks, one per side</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>How it works</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Twists (torques) to store energy</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Stretches to store energy</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Lifespan</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>10,000 to 20,000 cycles (7 to 15 years)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>5,000 to 10,000 cycles (5 to 7 years)</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Replacement cost (professional)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$200 to $350 per job (both springs)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$150 to $250 per job (both springs)</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>If it breaks</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Contained on the shaft, door stops</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Can become a projectile if no safety cable</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Safety</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Safer (contained failure)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Requires safety cables to be safe</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Best for</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Most residential doors</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Lighter doors, older construction</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>The upgrade case:</strong> If your garage currently has extension springs, replacement is an opportunity to upgrade to torsion springs. The conversion costs $400 to $800 but gives you a longer-lasting, safer system that is gentler on the opener and tracks. Ask your technician about it during the service call.</p>
        </section>

        {/* What a Broken Spring Looks Like */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>What a Broken Spring Looks Like</h2>

          <h3 className='text-lg font-semibold text-slate-800 mb-3'>Before It Breaks: Warning Signs</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Most springs give warning before they snap. Catching these signs early means you can schedule a non-emergency replacement on your timeline instead of dealing with a sudden failure.</p>

          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>The door feels heavier than usual.</strong> Disconnect the opener by pulling the red emergency release cord and try lifting the door manually. A properly balanced door with healthy springs should feel nearly weightless and stay open on its own at any height. If it takes significant effort to lift, or if the door slowly descends when you let go, the springs are losing tension and are near end-of-life.</p>

          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>The opener strains or runs longer than usual.</strong> When springs weaken, the opener motor works harder to compensate. If your opener sounds more labored than it used to, or if the door moves more slowly than normal, weakening springs are the most likely cause.</p>

          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Visible gaps between coils.</strong> Look at the torsion spring above the door. Healthy spring coils are tightly wound and touching. If you can see daylight between any coils, even a small separation of 1/4 inch. The spring is stretching under load and is near failure. This is the most reliable visual indicator.</p>

          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Rust or corrosion on the coils.</strong> Surface rust accelerates metal fatigue. A rusted spring reaches the end of its life faster than a clean spring of the same cycle rating. Lubricating the spring with silicone spray twice per year slows rust formation significantly.</p>

          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>The door is more than 7 years old and you have never replaced the springs.</strong> Standard torsion springs are rated for 10,000 cycles. At 4 uses per day, that equals 2,500 days or roughly 7 years. If your springs are approaching or past this age, budget for proactive replacement rather than waiting for the bang.</p>

          <h3 className='text-lg font-semibold text-slate-800 mb-3'>After It Breaks: What You Will See</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>A broken torsion spring is usually unmistakable. The indicators are:</p>
          <ul className='list-disc pl-6 space-y-2 mb-4'>
            <li className='text-slate-700 text-sm'>A loud bang from the garage, often described as a gunshot or car backfire, that occurred while the door was closing or sitting closed</li>
            <li className='text-slate-700 text-sm'>The door will not open, or opens only 2 to 4 inches before the opener strains and stops</li>
            <li className='text-slate-700 text-sm'>The door feels extremely heavy when you try to lift it manually after disconnecting the opener</li>
            <li className='text-slate-700 text-sm'>A visible gap of 2 to 3 inches in the torsion spring coil above the door</li>
            <li className='text-slate-700 text-sm'>The lift cables on one or both sides appear slack or have fallen off their drums</li>
            <li className='text-slate-700 text-sm'>The door appears crooked or lopsided (more common with extension spring failure on one side)</li>
          </ul>
        </section>

        {/* Cycle Count */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>The Cycle Count: What 10,000 Cycles Actually Means for Your Household</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Every spring is rated by the number of cycles it can complete before failure. One cycle is one complete open-and-close operation. Standard springs are rated at 10,000 cycles. High-cycle springs are rated at 25,000 to 50,000 cycles.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>The translation to years depends entirely on how often you use the door:</p>

          <div className='overflow-x-auto mb-4'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Daily Uses</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Cycles Per Year</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Standard Spring Life</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>High-Cycle Spring Life</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>2 (one car, basic use)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>730</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>13.7 years</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>34 to 68 years</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>4 (typical household)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>1,460</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>6.8 years</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>17 to 34 years</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>6 (busy household, two cars)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>2,190</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>4.6 years</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>11 to 23 years</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>8 (home office, frequent use)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>2,920</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>3.4 years</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>8 to 17 years</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>10+ (garage as primary entrance)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>3,650+</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Under 3 years</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>7 to 14 years</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>The high-cycle upgrade:</strong> When a technician replaces your springs, ask specifically for high-cycle springs rated for 25,000 cycles. The upcharge is typically $50 to $100 over standard springs. For a household using the door 4 times per day, that $75 upgrade buys you an additional 10 or more years before the next replacement. It is almost always worth the money.</p>
        </section>

        {/* Why Not DIY */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Why This Is Never a DIY Repair</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Most home repairs have a reasonable DIY path. Garage door spring replacement does not. This is not a liability disclaimer. It is specific, documented information about what actually happens when this repair goes wrong.</p>

          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>The energy stored in a torsion spring is substantial.</strong> A standard residential torsion spring exerts over 200 lbs of force when fully wound. The winding process requires inserting steel bars into the winding cone and turning them multiple times while the spring is under this tension. If the bar slips out of the cone at any point during winding or unwinding, it spins with the full rotational force of the spring behind it.</p>

          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>The documented injuries from DIY spring replacement include:</strong></p>
          <ul className='list-disc pl-6 space-y-2 mb-4'>
            <li className='text-slate-700 text-sm'>Broken fingers and hands (the most common injury; hands stay near the winding cone throughout the process)</li>
            <li className='text-slate-700 text-sm'>Facial fractures and broken orbital bones from winding bars striking the face</li>
            <li className='text-slate-700 text-sm'>Dental damage and concussions from winding bar strikes</li>
            <li className='text-slate-700 text-sm'>Deep lacerations from spring coils catching skin during rotation</li>
            <li className='text-slate-700 text-sm'>Crush injuries when the door falls unexpectedly during installation</li>
          </ul>

          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>The tools required are not commonly owned.</strong> Proper spring replacement requires hardened steel winding bars of a specific diameter and length (18 to 24 inches, 5/8 inch diameter). Using any substitute (a screwdriver, a piece of rebar, a pipe) dramatically increases the risk of slippage. These bars are not sold at standard hardware stores. Purchasing them adds $30 to $60 to the DIY cost.</p>

          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>The cost math does not favor DIY.</strong> A spring set costs $50 to $100 for parts. Add winding bars ($30 to $60), the time to correctly size the replacement spring to your door&apos;s weight (requires measuring wire diameter, inside diameter, and spring length), and the real risk of incorrect installation causing the spring to fail early or the door to go off-balance. Professional installation costs $150 to $350 total, includes correct sizing, and comes with a warranty on parts and labor. The math rarely favors DIY even before accounting for the medical risk.</p>
        </section>

        {/* Cost Section */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>What Garage Door Spring Replacement Costs in 2026</h2>

          <div className='overflow-x-auto mb-4'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Scenario</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Cost Range</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Single torsion spring, standard cycle</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$150 to $250</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Rare; most doors have two springs</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Both torsion springs, standard cycle</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$200 to $350</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>The most common scenario</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Both torsion springs, high-cycle upgrade</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$250 to $450</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Recommended; extends life significantly</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Extension springs, both sides</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$150 to $250</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Includes safety cables if not present</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Emergency/after-hours call</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Add $50 to $100</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>After-hours premium on top of regular rate</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Extension to torsion conversion</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$400 to $800</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Full system change, labor intensive</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Springs plus cables (if cables damaged)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Add $75 to $150</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Common when a spring breaks suddenly</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Labor breakdown:</strong> Labor typically runs $75 to $150 per hour. Spring replacement takes 45 to 90 minutes for a standard job. The technician also performs a full balance test, adjusts the opener&apos;s force settings to match the new spring tension, and lubricates all moving parts.</p>

          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Getting a fair quote:</strong> Call at least two companies. Be specific: tell them you have a broken torsion spring (or extension spring), your door size (single or double, height), and whether your car is trapped. Most reputable companies give a price range over the phone. Be wary of companies that refuse to quote without an in-person inspection for a standard spring replacement.</p>
        </section>

        {/* Manual Opening */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>How to Open the Door Manually When a Spring Is Broken</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>If your car is inside and you need to get it out before the technician arrives, here is how to open the door safely with a broken spring. This requires two strong adults.</p>

          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Step 1:</strong> Disconnect the opener by pulling the red emergency release cord hanging from the ceiling rail.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Step 2:</strong> Stand on either side of the door, one person per side. Place hands at the bottom corners of the door.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Step 3:</strong> Lift together in a controlled, steady motion. With a broken spring, the door will feel its full weight (150 to 400 lbs depending on door type). This is a two-person lift. Do not attempt alone.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Step 4:</strong> Once open, prop the door with a solid object placed under each bottom corner. The door will not stay open on its own without spring tension. Clamps on the track above the rollers are the safest option.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Step 5:</strong> Back the vehicle out, then slowly lower the door together. Do not let the door fall.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>After this, do not operate the door again until the springs are replaced.</p>
        </section>

        {/* Professional Replacement Process */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>What Happens During a Professional Spring Replacement</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Understanding the process helps you evaluate what a technician tells you and ensures you are getting the full service, not just the spring swap.</p>

          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Step 1: Diagnosis and sizing.</strong> The technician measures the existing spring (wire diameter, inside diameter, length, and wind direction) to identify the correct replacement. They also inspect the cables, drums, bearings, and rollers for wear while the door is down.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Step 2: Tension release.</strong> The existing spring tension is released using hardened steel winding bars. Even a broken spring retains partial tension that must be released safely before removal.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Step 3: Spring removal.</strong> The broken spring is slid off the torsion bar (or unhooked from the extension spring track mount) and removed.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Step 4: New spring installation.</strong> The replacement spring is installed and wound to the correct tension for the door&apos;s weight. The number of turns is calculated based on the door height and spring specifications.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Step 5: Balance test.</strong> The door is disconnected from the opener and lifted manually to 3 to 4 feet. It should hold its position. If it rises or falls, the spring tension is adjusted.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Step 6: Opener reconnection and adjustment.</strong> The opener is reconnected and the force settings are adjusted to match the new spring tension. A properly balanced door requires almost no opener effort.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Step 7: Safety test.</strong> The auto-reverse test is performed (2x4 on the ground test) to confirm the opener safety mechanism is functioning correctly.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>A quality technician completes all seven steps. If a company only does steps 3 and 4 and calls it done, you have not received a complete service.</p>
        </section>

        {/* FAQ Section */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Frequently Asked Questions</h2>
          <div className='space-y-4'>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>How much does it cost to replace a garage door spring?</h3>
              <p className='text-slate-700 text-sm'>Professional replacement of both torsion springs costs $200 to $350 for a standard set, or $250 to $450 if you upgrade to high-cycle springs rated for 25,000 cycles. Extension spring replacement runs $150 to $250 for both sides. After-hours or emergency service adds $50 to $100. Parts alone cost $50 to $100, but the labor, correct sizing, balance testing, and warranty that come with professional service make DIY a poor trade-off for most homeowners.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>How do I know if my garage door spring is broken?</h3>
              <p className='text-slate-700 text-sm'>The clearest signs are a loud bang from the garage (the spring snapping under tension), the door refusing to open or opening only 2 to 4 inches, the door feeling extremely heavy when you try to lift it manually after disconnecting the opener, and a visible 2 to 3 inch gap in the torsion spring coil above the door. Slack or fallen lift cables on either side of the door are also a strong indicator that a spring has failed.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Can I replace a garage door spring myself?</h3>
              <p className='text-slate-700 text-sm'>No. Torsion spring replacement is one of the most dangerous DIY repairs a homeowner can attempt. The springs store over 200 lbs of mechanical force. If a winding bar slips during installation, it spins with the full rotational force of the spring, causing broken bones, facial fractures, and in documented cases, fatalities. The <a href='https://www.cpsc.gov/Safety-Education/Safety-Guides/Home/Garage-Door' target='_blank' rel='noopener noreferrer' className='text-amber-700 underline'>Consumer Product Safety Commission</a> tracks over 20,000 garage door related emergency room visits annually. Professional replacement costs $150 to $350 and takes under an hour. The cost savings of DIY do not justify the injury risk.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Do I need to replace both springs if only one breaks?</h3>
              <p className='text-slate-700 text-sm'>Yes. Both springs were installed at the same time and have completed the same number of cycles. When one breaks, the other is statistically near the end of its life. Replacing only the broken spring leaves you with one new spring and one aging spring, creating an unbalanced door and a second failure within months. Technicians price both springs together because the labor cost is nearly identical for one or two, making dual replacement the clear value choice.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>How long do garage door springs last?</h3>
              <p className='text-slate-700 text-sm'>Standard torsion springs are rated for 10,000 cycles and last 7 years at 4 uses per day. High-cycle springs rated for 25,000 cycles last 17 years at the same usage rate. Extension springs are rated for 5,000 to 10,000 cycles and last 5 to 7 years. Lifespan varies significantly with usage frequency. A garage used as the primary entrance with 8 uses per day will wear through a standard spring in under 4 years.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>What is a high-cycle spring and is it worth it?</h3>
              <p className='text-slate-700 text-sm'>A high-cycle spring is a torsion spring rated for 25,000 cycles or more instead of the standard 10,000. It is made from a higher grade of steel with a tighter wire tolerance. The upcharge over a standard spring is typically $50 to $100. For a household using the door 4 times per day, upgrading from a 10,000-cycle spring to a 25,000-cycle spring buys an additional 10 or more years before the next replacement. It is almost always worth the money and should be requested proactively when scheduling replacement.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>What causes garage door springs to break?</h3>
              <p className='text-slate-700 text-sm'>Metal fatigue from repeated stress cycles is the primary cause. Every open-and-close winds and unwinds the spring, creating microscopic stress fractures in the steel that accumulate over thousands of cycles. Cold weather accelerates failure because steel contracts in low temperatures, increasing internal stress. Rust and corrosion thin the spring wire and concentrate stress at corroded points. Lack of lubrication increases friction and heat during operation. Springs that were undersized for the door&apos;s weight from the original installation fail faster because they are under greater stress per cycle.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Is it safe to use the garage door with a weakened spring?</h3>
              <p className='text-slate-700 text-sm'>No. A spring that is losing tension but has not yet broken creates an unbalanced door that puts excessive strain on the opener motor, cables, and rollers. The opener was designed to move a counterbalanced door with minimal effort. When it has to compensate for spring loss, it wears out significantly faster. A weakened spring also increases the risk of a sudden failure while the door is in motion, which is more dangerous than a failure in the closed position. If the manual lift test reveals a heavier-than-normal door, schedule replacement before the spring fails.</p>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Related Guides</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Link href='/problems/garage-door-wont-open' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Problem</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Door Won&apos;t Open</p>
              <p className='text-slate-500 text-xs mt-1'>What to do when the spring has already broken.</p>
            </Link>
            <Link href='/problems/garage-door-opener-not-working' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Problem</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Door Opener Not Working</p>
              <p className='text-slate-500 text-xs mt-1'>Distinguish spring failure from opener failure.</p>
            </Link>
            <Link href='/guides/garage-door-maintenance' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Guide</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Door Maintenance</p>
              <p className='text-slate-500 text-xs mt-1'>Annual maintenance that extends spring life.</p>
            </Link>
            <Link href='/cost-guides/garage-door-replacement-cost' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Cost Guide</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Door Replacement Cost</p>
              <p className='text-slate-500 text-xs mt-1'>When the door itself needs replacing.</p>
            </Link>
            <Link href='/reviews/best-garage-door-openers' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Review</span>
              <p className='font-semibold text-slate-800 text-sm'>Best Garage Door Openers</p>
              <p className='text-slate-500 text-xs mt-1'>If the opener was damaged when the spring broke.</p>
            </Link>
          </div>
        </section>

        {/* Glossary */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Glossary</h2>
          <div className='space-y-3'>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Torsion spring</p>
              <p className='text-slate-700 text-sm'>A large coiled spring mounted horizontally on a metal shaft above the garage door opening. It stores mechanical energy by twisting (torquing) as the door closes and releases that energy to assist opening. Standard torsion springs are rated for 10,000 cycles. High-cycle versions run 25,000 to 50,000 cycles. Torsion springs are safer than extension springs because when they break, they remain contained on the shaft rather than becoming projectiles.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Extension spring</p>
              <p className='text-slate-700 text-sm'>Two springs mounted along the horizontal track sections on either side of the garage door, running parallel to the ceiling. They store energy by stretching as the door closes. Extension springs are rated for 5,000 to 10,000 cycles and are generally found on older homes and lighter doors. Safety cables threaded through each spring prevent them from becoming projectiles if they snap.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Cycle</p>
              <p className='text-slate-700 text-sm'>One complete open-and-close operation of the garage door. Spring lifespan is measured in cycles rather than years because usage frequency determines wear rate. At 4 uses per day (2 opens and 2 closes), a garage door completes 1,460 cycles per year. A 10,000-cycle spring lasts approximately 6.8 years at this rate.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>High-cycle spring</p>
              <p className='text-slate-700 text-sm'>A torsion spring manufactured from higher-grade steel and rated for 25,000 to 50,000 cycles instead of the standard 10,000. The upcharge over standard springs is $50 to $100 per replacement job. For most households, the extended lifespan makes high-cycle springs the better long-term value. They should be requested proactively when scheduling replacement.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Winding bar</p>
              <p className='text-slate-700 text-sm'>A hardened steel rod, 18 to 24 inches long and 5/8 inch in diameter, inserted into the winding cone of a torsion spring to wind or unwind it during installation. Using any substitute (screwdrivers, rebar, pipe) dramatically increases the risk of the bar slipping and causing injury. Winding bars are the primary tool that separates professional spring replacement from amateur attempts.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Winding cone</p>
              <p className='text-slate-700 text-sm'>The metal cone-shaped fitting at each end of a torsion spring where the winding bars are inserted during installation. The cone has holes or slots for the bars and set screws that lock the spring tension in place. Incorrect use of the winding cone is the primary point of failure in DIY spring replacement attempts.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Safety cable</p>
              <p className='text-slate-700 text-sm'>A steel cable threaded through the center of each extension spring, anchored at both ends. If the extension spring breaks or comes unhooked, the safety cable contains it and prevents it from flying across the garage. Homes with extension springs that lack safety cables should have them added during any spring service visit.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Balance test</p>
              <p className='text-slate-700 text-sm'>A diagnostic check performed after spring installation to verify correct tension. The door is disconnected from the opener and lifted manually to 3 to 4 feet, then released. A properly balanced door holds its position. A door that rises means the spring is over-tensioned; one that falls means under-tensioned. Both conditions require adjustment before the opener is reconnected.</p>
            </div>
            <div>
              <p className='font-semibold text-slate-800 text-sm'>Counterbalance</p>
              <p className='text-slate-700 text-sm'>The principle by which garage door springs offset the weight of the door, making it feel nearly weightless when opening and closing. A properly counterbalanced door requires minimal force from the opener motor. When springs fail, the counterbalance is lost and the full weight of the door (150 to 400 lbs) must be managed manually or by the opener, which is not designed for that load.</p>
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
