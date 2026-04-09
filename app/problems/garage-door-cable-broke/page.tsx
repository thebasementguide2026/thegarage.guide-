import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Garage Door Cable Broke: Causes, What to Do Right Now, and Repair Costs | The Garage Guide',
  description: 'Garage door cable broke? Find out what caused it, what to do right now, whether you can fix it yourself, and what professional repair costs in 2026.',
  alternates: {
    canonical: 'https://thegarage.guide/problems/garage-door-cable-broke',
  },
  openGraph: {
    title: 'Garage Door Cable Broke: Causes, What to Do Right Now, and Repair Costs | The Garage Guide',
    description: 'Garage door cable broke? Find out what caused it, what to do right now, whether you can fix it yourself, and what professional repair costs in 2026.',
    url: 'https://thegarage.guide/problems/garage-door-cable-broke',
    siteName: 'The Garage Guide',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Garage Door Cable Broke: Causes, What to Do Right Now, and Repair Costs',
  description: 'Garage door cable broke? Find out what caused it, what to do right now, whether you can fix it yourself, and what professional repair costs in 2026.',
  url: 'https://thegarage.guide/problems/garage-door-cable-broke',
  publisher: {
    '@type': 'Organization',
    name: 'The Garage Guide',
    url: 'https://thegarage.guide',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I still use my garage door if the cable broke?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. A garage door with a broken cable is unbalanced and can drop unexpectedly on the side where the cable failed. Do not use the opener and do not attempt to manually operate the door. Disconnect the opener using the red emergency release cord to prevent accidental activation and call a professional.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to replace a broken garage door cable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Professional cable replacement costs $150 to $350 for most residential doors, including parts and labor for both cables. If the spring also needs replacement, add $150 to $300 for that repair performed at the same visit. Emergency or after-hours service adds $50 to $150 to the base cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I replace a garage door cable myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Garage door cable replacement requires releasing and re-tensioning the torsion spring, which stores enough energy to cause severe injury if it releases unexpectedly. This requires specific winding bars, knowledge of spring specifications, and experience with the tensioning procedure. The cost of professional replacement ($150 to $350) is far less than the cost of an injury or additional damage caused by an incorrectly tensioned spring.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do garage door cables last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Garage door cables typically last 8 to 15 years depending on usage frequency, maintenance, and environment. A door that opens and closes 6 to 8 times per day will wear cables faster than one used twice daily. Annual lubrication and visual inspection can extend cable life and catch wear before a failure occurs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why did my garage door cable break so soon after replacing the spring?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A cable that fails shortly after a spring replacement was usually already near end-of-life before the spring broke. The spring failure may have placed extra load on the cable during its final cycles, accelerating an imminent failure. Alternatively, if the replacement spring was installed with incorrect tension, the cable carried a load it was not designed for.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I ignore a broken garage door cable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The door remains unbalanced and unsupported on the broken cable side. If the opener activates accidentally, the door can jam in the tracks, the opener carriage can strip, and the door panels can bend under the uneven load. In the worst case, the door can fall partially or completely. Replacement cables cost $150 to $350. A new door costs $700 to $1,500 or more.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if my cable broke or my spring broke?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both failures produce similar symptoms. The quickest way to tell them apart is to look at the torsion spring above the door. A broken torsion spring has a visible gap in the coil where the spring separated. A broken cable will be visible at the bottom corner of the door: lying slack, coiled on the floor, or hanging loose. Both failures require professional repair.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to replace both cables or just the broken one?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both cables should always be replaced at the same time. If one cable has failed from wear, the second cable is at a similar point in its lifespan and will fail within weeks or months. The incremental cost of the second cable is $15 to $40 in materials. The labor is already being paid for. Always replace both.',
      },
    },
  ],
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'What to Do When Your Garage Door Cable Breaks',
  description: 'Step-by-step guide for homeowners when a garage door cable breaks, including immediate safety steps and what to expect from professional repair.',
  totalTime: 'PT2H',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'USD',
    value: '150-350',
  },
  step: [
    {
      '@type': 'HowToStep',
      name: 'Stop using the door immediately',
      text: 'Do not use the opener and do not attempt to manually lift or lower the door. A garage door with a broken cable is unbalanced and can drop unexpectedly.',
    },
    {
      '@type': 'HowToStep',
      name: 'Disconnect the opener',
      text: 'Pull the red emergency release cord to disconnect the opener so it cannot activate accidentally while the cable is broken.',
    },
    {
      '@type': 'HowToStep',
      name: 'Perform The Cable Check',
      text: 'Stand safely to the side of the door and look at both bottom corners. A broken cable will be lying slack, coiled on the floor, hanging loose, or visibly frayed or severed.',
    },
    {
      '@type': 'HowToStep',
      name: 'Note whether the door is open or closed',
      text: 'If the door is stuck open, this is a security emergency. Call a 24-hour garage door service for same-day repair. If the door is closed, the home is secure while you arrange professional repair.',
    },
    {
      '@type': 'HowToStep',
      name: 'Call a licensed garage door technician',
      text: 'Cable replacement requires releasing and re-tensioning the torsion spring. This must be performed by a professional. Do not attempt this repair yourself.',
    },
    {
      '@type': 'HowToStep',
      name: 'Replace both cables at the same visit',
      text: 'Confirm with the technician that both cables will be replaced, not just the broken one. The second cable is at similar end-of-life and will fail shortly if not replaced at the same time.',
    },
  ],
}

export default function GarageDoorCableBroke() {
  return (
    <>
      <article className='container-custom py-8 max-w-4xl mx-auto'>

        {/* Hero Image — inline style, not full-bleed */}
        <div className='relative rounded-xl overflow-hidden mb-6' style={{ minHeight: '400px' }}>
          <Image
            src='/images/garagecablebroke.jpg'
            alt='Garage door technician repairing cable drum and torsion shaft on residential garage door'
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
                <p className='text-gray-300 text-xs'>Updated April 2026 · 11 min read</p>
              </div>
            </div>
            <span className='text-amber-700 font-bold text-xs uppercase tracking-wider'>Problem</span>
            <h1 className='text-3xl md:text-4xl font-bold text-white mt-1'>Garage Door Cable Broke: <span className='text-amber-500'>Causes, What to Do Right Now, and Repair Costs</span></h1>
          </div>
        </div>

        {/* TL;DR Box */}
        <div style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75', padding: '16px 20px' }} className='rounded-r-lg mb-6'>
          <p style={{ color: '#1D9E75' }} className='text-sm font-bold mb-2'>TL;DR</p>
          <p className='text-slate-700 text-sm leading-relaxed'>Stop using the door immediately. A broken garage door cable means the door is no longer properly supported and can drop without warning. Do not use the opener. Do not attempt to manually lift the door. Disconnect the opener using the red emergency release cord and leave the door in whatever position it is in until a professional arrives. Cable replacement costs $150 to $350 for a single cable professionally installed. Both cables are almost always replaced at the same time since if one has failed, the other is close behind. This is not a DIY repair.</p>
        </div>

        {/* Opening paragraphs */}
        <p className='text-slate-700 text-sm leading-relaxed mb-4'>You heard a loud bang from the garage. Or the door stopped halfway down and hangs at a crooked angle with one side lower than the other. Or the opener runs but nothing moves. Just the sound of the motor straining against a door that will not budge.</p>
        <p className='text-slate-700 text-sm leading-relaxed mb-4'>Any of these mean the same thing. A cable broke.</p>
        <p className='text-slate-700 text-sm leading-relaxed mb-8'>A garage door cable is a braided steel wire that transfers the energy stored in the springs to the door itself, keeping it balanced and controlled as it travels up and down the track. When one cable breaks, that balance disappears. One side of the door is supported. The other side is not. The door sags, binds in the track, and becomes a 150 to 400-pound object with no reliable means of support on one side. This is not a situation to work around. It is not something to jury-rig with rope or wire until the weekend. It requires a professional repair before the door is used again. Here is exactly what to do, what caused it, and what the repair will cost.</p>

        {/* Step 1 */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Step 1: Do Not Touch the Door</h2>
          {/* Red callout box — matches Critical First Test style on opener-not-working */}
          <div className='bg-red-50 border-l-4 border-red-500 p-4 rounded mb-4'>
            <p className='text-slate-700 text-sm'>Do not attempt to operate a garage door with a broken cable under any circumstances. Do not use the opener. Do not try to manually lift or lower the door. A door with a broken cable is unbalanced and can drop suddenly on the side where the cable failed. Pull the red emergency release cord to disconnect the opener so it cannot activate accidentally. If the door is partially open, do not walk under it. Leave the door in place and call a professional.</p>
          </div>
        </section>

        {/* The Cable Check */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>The Cable Check: How to Confirm a Broken Cable</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Before calling anyone, confirm that the cable is actually the problem. Stand safely to the side of the door (not underneath it) and look at the bottom corners of the door on each side. You are looking for <strong>The Cable Check</strong>: a visual inspection of both lift cables from a safe position.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>A healthy cable runs taut from the bottom bracket at the corner of the door up to the drum mounted on the torsion shaft above the door. It should be straight, under visible tension, and wound neatly on the drum.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'>A broken cable looks like one of these:</p>
          <ul className='list-disc pl-5 text-slate-700 text-sm space-y-1 mb-4'>
            <li>The cable is lying in a loose coil on the floor or draped over the door panel</li>
            <li>The cable is still attached at the bottom but hangs slack with no tension</li>
            <li>The cable is frayed or visibly severed partway up the run</li>
            <li>One side of the door is lower than the other (the broken cable side sags)</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>If you see any of these, the cable has failed. Do not touch it. Do not attempt to reattach it. Call a professional.</p>
        </section>

        {/* What Caused the Cable to Break */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>What Caused the Cable to Break</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Understanding why the cable failed matters because if the root cause is not addressed, the replacement cable will fail again on the same timeline.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'><strong>Normal wear and cycle fatigue:</strong> Every time the door opens and closes, the cables flex around the drum and bottom bracket. Over thousands of cycles, the individual steel strands fatigue and break one at a time. By the time a cable snaps, most of its strands have already broken individually. Cable lifespan is typically 8 to 15 years depending on usage frequency, lubrication, and environment.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'><strong>Rust and corrosion:</strong> Cables exposed to humidity, moisture, or salt air corrode from the outside in. Rust weakens individual strands and accelerates fatigue. Cables in coastal areas or garages without climate control often fail earlier than the 8-year minimum.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'><strong>Broken torsion spring:</strong> A broken torsion spring changes the load the cable carries. When a spring breaks, the door becomes much heavier to lift and the remaining cable carries a load it was not designed to handle alone. A cable that fails within days or weeks of a spring replacement was probably already at end of life.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'><strong>Improper spring tension:</strong> Springs that are wound too tight or too loose put uneven stress on the cables. A cable that keeps slipping off the drum repeatedly is a symptom of incorrect spring tension, not a cable problem. Replacing the cable without correcting the tension will produce the same failure.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'><strong>Impact or obstruction:</strong> A vehicle that bumped the bottom of the door, a roller that seized in the track, or an object in the path of the door can all create a sudden shock load that snaps a cable that is otherwise near the end of its life.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Drum wear:</strong> The cable winds and unwinds around a drum at each end of the torsion shaft. If the drum develops a groove or the cable has worn a channel into it, the cable can jump out of alignment and fray at the contact point. Check the drums when replacing cables.</p>
        </section>

        {/* Symptom Diagnosis Table */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Symptom Diagnosis Table</h2>
          <div className='overflow-x-auto mb-4'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>What You See or Hear</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Most Likely Cause</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Loud bang, door sags on one side</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Cable snapped</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Stop using door, call pro</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Opener runs, door does not move</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Cable broke or came off drum</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Stop using opener, call pro</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Door crooked, one side lower</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Cable broke on lower side</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Stop using door, call pro</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Cable lying on floor or hanging loose</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Cable snapped or came off drum</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Stop using door, call pro</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Visible fraying on cable</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Cable near end of life</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Schedule replacement before it fails</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Cable slipping off drum repeatedly</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Incorrect spring tension</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Call pro for tension adjustment</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Grinding noise then door stops</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Cable wrapped around shaft or jammed</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Stop using opener, call pro</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Both sides hanging loose</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Both cables broke or springs broke</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Emergency call, do not touch door</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Why This Is Never a DIY Repair */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Why This Is Never a DIY Repair</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Garage door cable replacement is not like replacing weather stripping or painting the door. It requires releasing and re-tensioning the torsion spring, the component that stores enough energy to cause serious injury if it releases unexpectedly.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'><strong>Spring tension must be released to replace cables.</strong> The cable winds around a drum that sits on the same shaft as the torsion spring. To remove and reattach the cable correctly, the spring tension must be reduced. This requires winding bars inserted into the winding cone of the spring. A spring that slips off a winding bar during this process releases its stored energy instantaneously. The injuries from this event are severe.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'><strong>Cables must be tensioned correctly during installation.</strong> A cable installed with incorrect tension will either come off the drum immediately or fail prematurely. Getting the tension right requires experience with the specific spring and door combination.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'><strong>Both cables are replaced at the same time.</strong> If one cable failed, the other is at similar end-of-life. A professional will replace both. Attempting to replace only the broken cable and leaving the second cable in place is false economy. The second cable fails within weeks or months in most cases.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>The job requires specific tools.</strong> Winding bars (never screwdrivers or pliers), a proper cable clamp, and knowledge of cable diameter and length specifications for the specific door. Using incorrect tools during spring work is how accidents happen.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>See our <Link href='/problems/garage-door-spring-replacement' className='text-amber-700 underline'>garage door spring replacement guide</Link> for more on why spring-related repairs require professional handling.</p>
        </section>

        {/* What a Professional Cable Replacement Involves */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>What a Professional Cable Replacement Involves</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>When a technician arrives for a cable replacement, here is the typical sequence:</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'><strong>Step 1:</strong> Disconnect the opener and secure the door in the down position with locking pliers on the tracks.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'><strong>Step 2:</strong> Release spring tension using calibrated winding bars inserted into the winding cone. This is the most dangerous step and the reason professional expertise matters.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'><strong>Step 3:</strong> Remove the broken cable from the bottom bracket and drum. Inspect the drum for wear or grooving.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'><strong>Step 4:</strong> Thread the new cable through the bottom bracket, run it up the door, and attach it to the drum.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'><strong>Step 5:</strong> Repeat for the second cable (both cables are replaced in the same visit).</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'><strong>Step 6:</strong> Re-tension the spring to the correct specification for the door weight and height.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'><strong>Step 7:</strong> Test door balance by disconnecting the opener and manually lifting the door to waist height. A properly balanced door stays in place when released. A door that drops or rises indicates incorrect spring tension.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Step 8:</strong> Reconnect the opener and test several full cycles.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>The entire process takes 45 minutes to 90 minutes for a standard residential door.</p>
        </section>

        {/* Repair vs Replace Decision Table */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Repair vs Replace Decision Table</h2>
          <div className='overflow-x-auto mb-4'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Situation</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Repair Cost</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Recommendation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>One cable broken, door under 10 years old</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$150 to $250</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Replace both cables</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Both cables broken</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$200 to $350</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Replace both cables</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Cable broken plus spring broken</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$300 to $600</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Replace both at same visit</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Cable broken plus worn rollers</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$250 to $450</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Replace cables and rollers together</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Cable broken, door panels damaged</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$400 to $800</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Evaluate full door replacement</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Door over 15 years, multiple issues</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$500 to $900 repair</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Consider full door replacement ($700 to $1,500)</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>New door with cable break under warranty</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$0 to $150</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Check manufacturer warranty first</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* What It Costs */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>What It Costs</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Professional garage door cable replacement costs $150 to $350 for most residential doors. Here is how that breaks down:</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'><strong>Cable materials:</strong> $15 to $40 per cable. Cables are inexpensive. The labor and spring work is where the cost comes from.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'><strong>Labor:</strong> $75 to $150 per hour. Cable replacement takes 45 to 90 minutes for a standard door.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'><strong>Both cables (standard replacement):</strong> $150 to $300 including parts and labor.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'><strong>If the spring also needs replacement:</strong> Add $150 to $300 for torsion spring replacement performed at the same visit. Combining both repairs in one service call saves a separate trip charge.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'><strong>Emergency or after-hours service:</strong> Add $50 to $150 for calls outside normal business hours. If your door is stuck open and you need same-day service, expect to pay the premium rate.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>What affects the final price:</strong></p>
          <ul className='list-disc pl-5 text-slate-700 text-sm space-y-1 mb-4'>
            <li>Door size: larger and heavier doors use heavier cables that cost slightly more</li>
            <li>Spring system type: torsion spring systems are more common and generally easier to service than extension spring systems</li>
            <li>Location: labor rates vary significantly by region</li>
            <li>Additional damage: if a cable break caused the door to go off track or damaged rollers, those repairs add to the total</li>
          </ul>
        </section>

        {/* Emergency Situation: Door Stuck Open */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Emergency Situation: Door Stuck Open</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>A garage door stuck in the open position with a broken cable is a security emergency. Your home is exposed until the door is repaired. Steps to take:</p>
          <ul className='list-disc pl-5 text-slate-700 text-sm space-y-2 mb-4'>
            <li>Do not attempt to manually force the door down. The unsupported side can drop suddenly and cause serious injury or damage the door panels beyond repair</li>
            <li>Call a 24-hour garage door service for same-day repair</li>
            <li>If the technician cannot respond within a few hours, consider whether you can secure the interior door from the garage to the house</li>
            <li>Do not leave the home unattended with the door open</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Most major garage door companies offer emergency response. Expect to pay the after-hours premium for same-day service but get the door operational. A broken-in home costs far more than an emergency service call.</p>
        </section>

        {/* How to Prevent Cable Failure */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>How to Prevent Cable Failure</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Cables do not last forever, but their lifespan can be extended with basic maintenance:</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'><strong>Annual lubrication:</strong> Apply a silicone-based lubricant to the cables, drums, and bottom brackets once per year. Do not use WD-40. It attracts dust and gums up the components over time. A thin coat of lithium grease or silicone spray on the cable itself reduces friction at the drum contact point.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'><strong>Annual visual inspection:</strong> Look at both cables during your annual garage door maintenance check. Look for fraying, rust, kinking, or any point where individual strands appear broken. A cable showing visible wear should be replaced before it fails. See our <Link href='/guides/garage-door-maintenance' className='text-amber-700 underline'>garage door maintenance guide</Link> for the full annual inspection checklist.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'><strong>Replace both cables at the same time:</strong> When one cable fails, the other is at similar end-of-life. Always replace both in the same visit. The incremental cost of the second cable is minimal compared to a second service call.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'><strong>Address spring issues promptly:</strong> A spring with incorrect tension accelerates cable wear. If the door feels heavy, moves unevenly, or if a spring has recently been replaced, have the tension verified by a technician.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Keep the tracks clean:</strong> Debris in the tracks causes rollers to bind, which creates shock loads on the cables. Clean the tracks monthly with a damp cloth.</p>
        </section>

        {/* FAQ */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Frequently Asked Questions</h2>
          <div className='space-y-4'>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Can I still use my garage door if the cable broke?</h3>
              <p className='text-slate-700 text-sm'>No. A garage door with a broken cable is unbalanced and can drop unexpectedly on the side where the cable failed. Do not use the opener and do not attempt to manually operate the door. Disconnect the opener using the red emergency release cord to prevent accidental activation and call a professional. Operating a door with a broken cable risks injury, damage to the door panels, damage to the opener, and derailment of the door from its tracks.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>How much does it cost to replace a broken garage door cable?</h3>
              <p className='text-slate-700 text-sm'>Professional cable replacement costs $150 to $350 for most residential doors, including parts and labor for both cables (both are replaced at the same visit). If the spring also needs replacement, add $150 to $300 for that repair performed at the same visit. Emergency or after-hours service adds $50 to $150 to the base cost. Labor rates vary by region so get at least two quotes.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Can I replace a garage door cable myself?</h3>
              <p className='text-slate-700 text-sm'>No. Garage door cable replacement requires releasing and re-tensioning the torsion spring, which stores enough energy to cause severe injury if it releases unexpectedly during the process. This requires specific winding bars, knowledge of spring specifications, and experience with the tensioning procedure. Do not attempt this repair. The cost of professional replacement ($150 to $350) is far less than the cost of an injury or the additional damage caused by an incorrectly tensioned spring.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>How long do garage door cables last?</h3>
              <p className='text-slate-700 text-sm'>Garage door cables typically last 8 to 15 years depending on usage frequency, maintenance, and environment. A door that opens and closes 6 to 8 times per day will wear cables faster than one used twice daily. Cables in humid, coastal, or unheated garages corrode faster and may fail closer to the 8-year mark. Annual lubrication and visual inspection can extend cable life and catch wear before a failure occurs.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Why did my garage door cable break so soon after replacing the spring?</h3>
              <p className='text-slate-700 text-sm'>A cable that fails shortly after a spring replacement was usually already near end-of-life before the spring broke. The spring failure may have placed extra load on the cable during its final cycles, accelerating what was already an imminent failure. Alternatively, if the replacement spring was installed with incorrect tension, the cable carried a load it was not designed for. Have the spring tension verified if a cable fails within a year of spring replacement.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>What happens if I ignore a broken garage door cable?</h3>
              <p className='text-slate-700 text-sm'>The door remains unbalanced and unsupported on the broken cable side. If the opener activates accidentally, the door can jam in the tracks, the opener carriage can strip, and the door panels can bend under the uneven load. In the worst case, the door can fall partially or completely. Beyond the door itself, a garage door that cannot close properly leaves the home exposed to weather, pests, and potential break-in. Replacement cables cost $150 to $350. A new door costs $700 to $1,500 or more. Address the repair promptly.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>How do I know if my cable broke or my spring broke?</h3>
              <p className='text-slate-700 text-sm'>Both failures produce similar symptoms. The door sags, feels extremely heavy, or will not open. The quickest way to tell them apart is to look at the torsion spring above the door. A broken torsion spring has a visible gap in the coil where the spring separated. A broken cable will be visible at the bottom corner of the door: lying slack, coiled on the floor, or hanging loose. Both failures require professional repair and both are often addressed in the same service visit since they frequently occur together.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Do I need to replace both cables or just the broken one?</h3>
              <p className='text-slate-700 text-sm'>Both cables should always be replaced at the same time. If one cable has failed from wear, the second cable is at a similar point in its lifespan and will fail within weeks or months. Replacing only the broken cable and leaving the worn cable in place guarantees a second service call in the near future. The incremental cost of the second cable is $15 to $40 in materials. The labor is already being paid for. Always replace both.</p>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Related Guides</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Link href='/problems/garage-door-spring-replacement' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Problem</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Door Spring Replacement</p>
              <p className='text-slate-500 text-xs mt-1'>Why springs and cables often fail together and what professional spring replacement involves.</p>
            </Link>
            <Link href='/problems/garage-door-off-track' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Problem</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Door Off Track</p>
              <p className='text-slate-500 text-xs mt-1'>A broken cable frequently causes the door to come off track.</p>
            </Link>
            <Link href='/problems/garage-door-wont-open' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Problem</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Door Won&apos;t Open</p>
              <p className='text-slate-500 text-xs mt-1'>Other causes when the opener runs but the door does not move.</p>
            </Link>
            <Link href='/guides/garage-door-maintenance' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Guide</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Door Maintenance</p>
              <p className='text-slate-500 text-xs mt-1'>The annual inspection checklist that catches cable wear before failure.</p>
            </Link>
            <Link href='/problems/garage-door-opener-not-working' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Problem</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Door Opener Not Working</p>
              <p className='text-slate-500 text-xs mt-1'>Ruling out the opener before diagnosing a cable issue.</p>
            </Link>
          </div>
        </section>

        {/* Glossary */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Glossary</h2>
          <div className='space-y-3'>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Lift cable</p>
              <p className='text-slate-700 text-sm'>The braided steel wire that connects the bottom bracket at the corner of the garage door to the drum mounted on the torsion shaft above. Lift cables transfer the energy stored in the torsion spring to the door, counterbalancing its weight during operation. Most residential doors use 1/8-inch diameter galvanized aircraft cable. Both lift cables must be replaced at the same time when one fails.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Torsion spring</p>
              <p className='text-slate-700 text-sm'>The large coiled spring mounted horizontally above the garage door that stores mechanical energy to counterbalance the door weight. Torsion springs work in conjunction with the cables. When the door closes, the cables wind the spring; when the door opens, the spring unwinds and releases energy through the cables to lift the door. A broken torsion spring dramatically increases the load on the cables.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Cable drum</p>
              <p className='text-slate-700 text-sm'>The spool-shaped component mounted at each end of the torsion shaft on which the lift cable winds and unwinds during door operation. Drums are sized to match the door height and spring specifications. A drum that develops grooves or uneven wear can cause premature cable failure and should be replaced at the same time as the cables.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Bottom bracket</p>
              <p className='text-slate-700 text-sm'>The metal bracket at the lower corner of the garage door where the lift cable attaches. Bottom brackets are under significant tension when the door is in the closed position. Never attempt to remove or modify a bottom bracket without first releasing spring tension. A bottom bracket that is bent or cracked should be replaced at the same time as the cable.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Torsion shaft</p>
              <p className='text-slate-700 text-sm'>The horizontal steel rod that runs across the full width of the garage door opening above the door, on which the cable drums and torsion spring are mounted. When the door opens, the shaft rotates, unwinding the spring and releasing cable tension in a controlled manner. When cables break, the shaft may rotate freely with no load resistance.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Safety cable</p>
              <p className='text-slate-700 text-sm'>A secondary cable used in extension spring systems that runs through the center of the extension spring to prevent it from flying off and causing injury if the spring breaks. Safety cables are not present in torsion spring systems. In extension spring systems, safety cables must be installed and maintained as a code requirement.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Winding bars</p>
              <p className='text-slate-700 text-sm'>The specialized steel rods inserted into the winding cone of a torsion spring to wind or unwind spring tension during installation and replacement. Must match the diameter of the winding cone holes exactly. Never substitute screwdrivers, pliers, or other tools for winding bars. The spring can slip and release its stored energy instantaneously, causing severe injury.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Extension spring system</p>
              <p className='text-slate-700 text-sm'>A garage door spring configuration that uses springs mounted horizontally along the tracks above the door rather than a single torsion spring above the opening. Extension springs stretch when the door closes and contract to help lift when the door opens. Extension spring systems require safety cables threaded through the springs to prevent them from becoming dangerous projectiles if they break. Less common than torsion systems in newer construction but found in many older garages with limited headroom.</p>
            </div>
            <div>
              <p className='font-semibold text-slate-800 text-sm'>Cycle life</p>
              <p className='text-slate-700 text-sm'>The number of complete open-and-close operations a garage door component is rated to perform before replacement is needed. Standard residential torsion springs are rated for 10,000 cycles. Cables do not have a published cycle life but typically last 10,000 to 20,000 cycles depending on maintenance and environment. A household using the door 4 times per day reaches 10,000 cycles in approximately 7 years.</p>
            </div>
          </div>
        </section>

        {/* External Link */}
        <p className='text-slate-600 text-sm mb-8'>
          For official garage door safety information, see the{' '}
          <a
            href='https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Garage-Door-Safety'
            target='_blank'
            rel='noopener noreferrer'
            className='text-amber-700 underline'
          >
            U.S. Consumer Product Safety Commission: Garage Door Safety
          </a>
          .
        </p>

      </article>

      {/* Get-Quote Form */}
      <LeadForm />

      {/* Schema Scripts */}
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
    </>
  )
}
