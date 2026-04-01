import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Garage Door Won\'t Open: Diagnosis and Fix Guide | The Garage Guide',
  description: 'Garage door won\'t open? Diagnose the cause in 60 seconds with this symptom-by-symptom guide. Broken springs, dead openers, frozen doors, and more.',
  alternates: {
    canonical: 'https://thegarage.guide/problems/garage-door-wont-open',
  },
  openGraph: {
    title: 'Garage Door Won\'t Open: Diagnosis and Fix Guide | The Garage Guide',
    description: 'Garage door won\'t open? Diagnose the cause in 60 seconds with this symptom-by-symptom guide. Broken springs, dead openers, frozen doors, and more.',
    url: 'https://thegarage.guide/problems/garage-door-wont-open',
    siteName: 'The Garage Guide',
    type: 'article',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Why won\'t my garage door open when I press the button?', acceptedAnswer: { '@type': 'Answer', text: 'Start with the manual lift test: pull the red emergency release cord and try lifting the door by hand. If it is extremely heavy, the problem is a broken spring — call a professional. If it lifts easily, check power to the opener (circuit breaker, GFCI outlet, plug), remote battery, and whether the trolley has been accidentally disconnected. These five causes account for over 90 percent of garage door opener failures.' } },
    { '@type': 'Question', name: 'Why does my opener run but the door will not move?', acceptedAnswer: { '@type': 'Answer', text: 'The most common cause is a disconnected trolley. The red emergency release cord may have been pulled accidentally, disconnecting the door from the opener drive. Pull the cord back toward the opener until you hear a click to re-engage. The second most common cause is a broken torsion spring. If the door feels extremely heavy during the manual lift test, stop and call a professional.' } },
    { '@type': 'Question', name: 'How do I open my garage door when the power is out?', acceptedAnswer: { '@type': 'Answer', text: 'Pull the red emergency release cord hanging from the ceiling rail to disconnect the door from the opener. Lift the door manually from the bottom. If the springs are intact, the door will feel nearly weightless and hold its position when open. To reconnect the opener when power returns, pull the cord toward the opener until you hear a click, then run the opener once to re-engage automatically.' } },
    { '@type': 'Question', name: 'Why won\'t my garage door open in cold weather?', acceptedAnswer: { '@type': 'Answer', text: 'Cold weather causes two distinct problems. The most common is the bottom seal freezing to the concrete floor overnight. Do not press the opener button repeatedly if the door is stuck. This can burn out the motor. Instead, disconnect the opener and chip or melt the ice from the bottom seal before trying to lift the door manually. The second cause is contracted metal components in extreme cold, which can make the door stiff. Relubricating with silicone spray before winter reduces both problems significantly.' } },
    { '@type': 'Question', name: 'How do I know if my garage door spring is broken?', acceptedAnswer: { '@type': 'Answer', text: 'Three clear signs: you heard a loud bang from the garage (the spring snapping), the door feels impossibly heavy when you try to lift it manually after disconnecting the opener, and you can see a visible gap or separation in the coil of the torsion spring above the door. A broken spring is not a DIY repair. Springs are under extreme tension and can cause severe injury. Replacement costs $150 to $350 professionally installed.' } },
    { '@type': 'Question', name: 'Why does my garage door open a few inches then stop?', acceptedAnswer: { '@type': 'Answer', text: 'This usually indicates a spring that has lost significant tension but has not fully broken yet, a limit switch that needs adjustment, or an obstruction in the tracks. Pull the emergency release cord and try lifting the door manually. If the door moves freely by hand but the opener stops after a few inches, the close-limit or open-limit switch on the opener needs adjustment per the opener manual. If the door feels heavy and difficult to lift by hand, the spring is near failure. Call a professional.' } },
    { '@type': 'Question', name: 'Can I replace a garage door spring myself?', acceptedAnswer: { '@type': 'Answer', text: 'No. Torsion springs are wound under extreme mechanical tension equivalent to hundreds of foot-pounds of stored energy. A spring that releases improperly can cause broken fingers, facial injury, or worse. This is consistently rated as one of the most dangerous DIY repairs a homeowner can attempt. Professional replacement costs $150 to $350 and takes under an hour for a trained technician.' } },
    { '@type': 'Question', name: 'How much does it cost to fix a garage door that won\'t open?', acceptedAnswer: { '@type': 'Answer', text: 'It depends entirely on the cause. Remote battery replacement costs $5 to $10. Reprogramming the remote is free. Resetting a tripped breaker is free. Broken spring replacement costs $150 to $350 professionally. Off-track repair costs $125 to $250. A new opener installed costs $300 to $600. If your opener is over 12 years old and the repair estimate exceeds $200, replacement is usually the better investment.' } },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Garage Door Won\'t Open: Diagnosis and Fix Guide',
  description: 'Diagnose why your garage door won\'t open with this symptom-by-symptom guide. Covers broken springs, dead openers, frozen doors, trolley disconnection, and more.',
  url: 'https://thegarage.guide/problems/garage-door-wont-open',
  publisher: {
    '@type': 'Organization',
    name: 'The Garage Guide',
    url: 'https://thegarage.guide',
  },
}

export default function GarageDoorWontOpen() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Problems', href: '/problems' }, { label: 'Garage Door Won\'t Open' }]} />
      <article className='container-custom py-8 max-w-4xl mx-auto'>
        {/* Hero Section */}
        <div className='relative rounded-xl overflow-hidden mb-8' style={{ minHeight: '400px' }}>
          <Image src='/images/garagedoorwontopen.jpg' alt='Homeowner troubleshooting a garage door that won&#39;t open' fill className='object-cover' priority />
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
            <h1 className='text-3xl md:text-4xl font-bold text-white mt-1'>Garage Door Won&apos;t Open: <span className='text-amber-500'>Diagnosis and Fix Guide</span></h1>
            <p className='text-gray-200 mt-2 text-sm md:text-base max-w-2xl'>Diagnose the cause in 60 seconds with this symptom-by-symptom guide. Broken springs, dead openers, frozen doors, and more.</p>
          </div>
        </div>

        {/* TL;DR */}
        <div style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75', padding: '16px 20px' }} className='rounded-r-lg mb-4'>
          <p style={{ color: '#1D9E75' }} className='text-sm font-bold mb-2'>TL;DR</p>
          <p className='text-slate-700 text-sm leading-relaxed'>Start with the manual lift test: disconnect the opener by pulling the red emergency release cord, then try to lift the door by hand. If it lifts easily, the problem is with the opener or controls. If it is extremely heavy or will not move, you likely have a broken spring. Stop and call a professional. Most other causes (dead remote, tripped breaker, disengaged trolley, frozen seal, lock mode) take under 5 minutes to diagnose and fix yourself.</p>
        </div>

        {/* Opening Paragraph */}
        <section className='mb-8'>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Your car is in the garage. You are late. You pressed the button and the door did not open. Maybe the opener ran and nothing moved. Maybe there was total silence. Maybe it is January and the door is frozen to the ground and you have been standing in the cold for three minutes trying to figure out what to do next.</p>
          <p className='text-slate-700 text-sm leading-relaxed'>Whatever the scenario, stop pressing the button. That is the single most important thing you can do right now. If the door is frozen to the ground, pressing the opener repeatedly burns out the motor. If the spring is broken, every attempt strains a motor that was never designed to lift the door&apos;s full weight. Press once. If it does not open, stop and diagnose. This guide tells you exactly what is wrong and how to fix it in 60 seconds.</p>
        </section>

        {/* Critical First Test */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Critical First Test: The Manual Lift</h2>

          <div className='bg-red-50 border-l-4 border-red-600 p-4 rounded mb-6'>
            <p className='text-slate-700 text-sm leading-relaxed mb-3'>Before you troubleshoot anything else, do this one test. Pull the red emergency release cord hanging from the opener trolley on the ceiling rail. This disconnects the door from the opener. Now try to lift the door by hand from the bottom, pushing up steadily.</p>
            <p className='text-slate-700 text-sm leading-relaxed mb-3'><strong>If the door lifts smoothly and feels nearly weightless:</strong> the problem is with the opener, remote, or controls, not the door itself. Work through the electrical and opener causes below.</p>
            <p className='text-slate-700 text-sm leading-relaxed mb-3'><strong>If the door is extremely heavy, barely moves, or feels like it is fighting you:</strong> you almost certainly have a broken torsion spring. Do not force it. Do not run the opener. Call a professional. Broken spring replacement costs $150 to $350 and is not a safe DIY repair.</p>
            <p className='text-slate-700 text-sm leading-relaxed'><strong>If the door is stuck at the bottom and will not budge at all:</strong> check for a frozen seal (cold weather) or manual lock engagement before assuming a mechanical failure.</p>
          </div>
        </section>

        {/* Diagnose by Symptom */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Diagnose by Symptom</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Find your exact symptom in the left column. Work left to right.</p>
          <div className='overflow-x-auto mb-4'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Symptom</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Most Likely Cause</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>DIY Fix?</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Urgency</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Nothing happens: no sound, no light, no movement</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>No power to opener</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Yes</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Low</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Opener light comes on but door does not move</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Trolley disconnected from door</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Yes</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Low</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Opener hums or runs but door does not move</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Broken spring or stripped gear</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>No (spring) / Maybe (gear)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>High</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Remote does not work but wall button does</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Dead remote battery or lost sync</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Yes</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Low</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Neither remote nor wall button works</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>No power or opener failure</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Yes / Maybe</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Medium</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Door moves 6 inches then stops</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Spring tension lost or limit switch issue</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>No (spring)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Medium</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Door is stuck at bottom, will not budge</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Frozen to ground or manual lock engaged</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Yes</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Low</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Door is off its tracks</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Track damage or cable failure</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>No</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>High</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Opener is over 15 years old, intermittent failure</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Worn motor or logic board</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Maybe</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Medium</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Cause 1: Broken Torsion Spring */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Cause 1: Broken Torsion Spring</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>This is the most common serious mechanical failure and the one most homeowners miss because they assume it is an opener problem. The torsion spring is the large coiled spring mounted horizontally above the door opening. It counterbalances the door&apos;s weight, making a 150 to 400 lb door feel nearly weightless. When it breaks, the opener cannot lift the door and the door feels impossibly heavy when you try to lift it manually.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>How to identify a broken spring:</strong></p>
          <ul className='space-y-2 mb-4'>
            <li className='text-slate-700 text-sm leading-relaxed'>You heard a loud bang from the garage, often described as a gunshot or firecracker, when the spring snapped</li>
            <li className='text-slate-700 text-sm leading-relaxed'>The door feels extremely heavy during the manual lift test</li>
            <li className='text-slate-700 text-sm leading-relaxed'>You can see a visible gap or separation in the torsion spring coil above the door</li>
            <li className='text-slate-700 text-sm leading-relaxed'>The lift cables on either side of the door appear slack or have fallen off their drums</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>What to do:</strong></p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Do not attempt to open the door with the automatic opener. Do not attempt to replace the spring yourself. Torsion springs are wound under extreme mechanical tension and can cause severe injury if released improperly. Replacement costs $150 to $350 for a standard spring, professionally installed. If your springs are more than 7 years old and this is the first break, replace both springs at the same time. When one breaks, the other is close behind.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Standard torsion springs are rated for 10,000 cycles. At 4 uses per day, that equals roughly 7 years of life. High-cycle springs rated for 25,000 cycles are available for $50 to $100 more and last 15 to 20 years at average use.</p>
          <p className='text-slate-700 text-sm leading-relaxed'>For full details on what to expect, see our <Link href='/guides/garage-door-maintenance' className='text-amber-700 underline'>garage door maintenance guide</Link>.</p>
        </section>

        {/* Cause 2: No Power to the Opener */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Cause 2: No Power to the Opener</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>If the opener shows no lights, makes no sounds, and does not respond to either the remote or the wall button, the problem is almost certainly electrical.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>Check in this order:</strong></p>
          <ol className='list-decimal list-inside space-y-2 mb-4'>
            <li className='text-slate-700 text-sm leading-relaxed'><strong>Is the opener plugged in?</strong> The opener unit on the ceiling connects to a standard household outlet. Verify the plug is seated firmly. Try plugging a lamp into the same outlet to confirm it has power.</li>
            <li className='text-slate-700 text-sm leading-relaxed'><strong>Is the circuit breaker tripped?</strong> Go to your electrical panel and look for a breaker in the middle position or flipped to off. Reset it by switching fully to off then back to on. If it trips again immediately, there is a wiring problem. Call an electrician.</li>
            <li className='text-slate-700 text-sm leading-relaxed'><strong>Is the GFCI outlet tripped?</strong> Many garage outlets are GFCI-protected. Find the GFCI outlet in or near the garage (it has test and reset buttons on its face) and press the reset button. One tripped GFCI can cut power to multiple outlets downstream.</li>
            <li className='text-slate-700 text-sm leading-relaxed'><strong>Is there a power outage?</strong> Check whether other areas of the house have power. If there is a full outage, see the emergency release section below to open the door manually.</li>
          </ol>
        </section>

        {/* Cause 3: Trolley Disconnected */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Cause 3: Trolley Disconnected from Door</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>This is one of the most common causes that almost no troubleshooting guide covers properly. Every garage door opener has a red emergency release cord hanging from the trolley. Pulling this cord disconnects the door from the opener drive, allowing manual operation. If someone pulled this cord accidentally (children are a common culprit) or if it was pulled during a power outage and never re-engaged, the opener will run normally but the door will not move.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>How to identify this cause:</strong></p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>The opener runs (you can hear the motor and see the trolley moving along the rail) but the door sits completely still.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>How to fix it:</strong></p>
          <ol className='list-decimal list-inside space-y-1 mb-4'>
            <li className='text-slate-700 text-sm leading-relaxed'>Close the door manually to the fully closed position.</li>
            <li className='text-slate-700 text-sm leading-relaxed'>Pull the emergency release cord back toward the opener (away from the door). This re-engages the carriage.</li>
            <li className='text-slate-700 text-sm leading-relaxed'>Run the opener. The trolley should reconnect with an audible click and the door should move normally.</li>
          </ol>
          <p className='text-slate-700 text-sm leading-relaxed'>If the carriage will not re-engage, pull the emergency release cord in the direction of the opener unit until you hear a click. Then run the opener slowly once to confirm reconnection before using it normally.</p>
        </section>

        {/* Cause 4: Dead Remote or Lost Sync */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Cause 4: Dead Remote or Lost Sync</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>If the wall button operates the door normally but the remote does not, the problem is isolated to the remote.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Step 1: Replace the battery.</strong> Most garage door remotes use a 9V, 12V, or CR2032 battery. Dead or weak batteries are the cause of roughly 70 percent of remote failures. Replace with a fresh battery and test.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Step 2: Check your range.</strong> Stand within 20 feet of the opener unit when testing. Cold weather, weak batteries, and LED bulb interference can all reduce remote range.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Step 3: Check for LED bulb interference.</strong> Some standard LED bulbs emit radio frequency interference that disrupts the remote signal. If you recently changed the bulb in the opener unit, swap it for a bulb specifically labeled as garage door opener compatible.</p>
          <p className='text-slate-700 text-sm leading-relaxed'>For a full walkthrough of opener-specific issues, see our <Link href='/problems/garage-door-opener-not-working' className='text-amber-700 underline'>garage door opener troubleshooting guide</Link>.</p>
        </section>

        {/* Cause 5: Lock Mode Engaged */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Cause 5: Lock Mode Engaged</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Most garage door wall control panels have a lock or vacation button that disables the remote when activated. This is designed to prevent the door from being opened remotely while you are away. It is easy to activate accidentally.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>How to identify:</strong> The wall button operates the door but the remote does not. There may be a lock icon illuminated on the wall panel.</p>
          <p className='text-slate-700 text-sm leading-relaxed'><strong>How to fix:</strong> Press and hold the lock button on the wall panel for 2 seconds until the lock indicator light turns off. Test the remote.</p>
        </section>

        {/* Cause 6: Frozen to the Ground */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Cause 6: Garage Door Frozen to the Ground</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>In cold climates, the rubber bottom seal freezes to the concrete floor overnight after snow melt or rain refreezes. The door cannot open because it is literally bonded to the ground with ice.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Critical: Do not press the opener button more than once if you suspect the door is frozen.</strong> Forcing a frozen door can burn out the opener motor, strip the drive gear, or tear the bottom seal off the door entirely. Any of these repairs costs $150 to $500.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>How to identify:</strong></p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>The door does not move at all when the opener runs, but there is no broken spring (the door felt moderately heavy when you tried lifting it manually, not impossibly heavy). Cold weather was present overnight.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>How to fix:</strong></p>
          <ol className='list-decimal list-inside space-y-1 mb-4'>
            <li className='text-slate-700 text-sm leading-relaxed'>Pull the emergency release cord to disconnect the opener.</li>
            <li className='text-slate-700 text-sm leading-relaxed'>Go outside and inspect the bottom of the door. You should see ice bonding the seal to the concrete.</li>
            <li className='text-slate-700 text-sm leading-relaxed'>Use an ice scraper to carefully chip away ice along the full width of the bottom of the door. Do not use a sharp tool that could puncture the bottom seal.</li>
            <li className='text-slate-700 text-sm leading-relaxed'>Apply warm (not boiling) water along the bottom edge to melt remaining ice. Boiling water can warp the bottom seal and create more freeze problems the next night.</li>
            <li className='text-slate-700 text-sm leading-relaxed'>Try lifting the door manually. Push gently up from the bottom corners. If the ice bond breaks, the door should lift freely.</li>
            <li className='text-slate-700 text-sm leading-relaxed'>If the door remains stuck, use a hair dryer or heat gun on a low setting along the bottom edge for 2 to 3 minutes, then try again.</li>
          </ol>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Prevention:</strong> Apply silicone spray to the bottom seal in October before freeze season. A treated seal does not bond to ice as readily as a dry or damaged one.</p>
          <p className='text-slate-700 text-sm leading-relaxed'>To prevent the seal from bonding to ice in the first place, see our <Link href='/problems/garage-door-weather-stripping' className='text-amber-700 underline'>garage door weather stripping guide</Link> for the silicone spray treatment and seal replacement process.</p>
        </section>

        {/* Cause 7: Off Tracks */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Cause 7: Door Is Off Its Tracks</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>A door that has come off its tracks will not open and must not be forced. Off-track doors are a safety hazard because they can fall unexpectedly. This condition is usually caused by a snapped cable, a bent track, a broken roller, or a vehicle impact.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>How to identify:</strong></p>
          <ul className='space-y-1 mb-4'>
            <li className='text-slate-700 text-sm leading-relaxed'>The door appears crooked or lopsided</li>
            <li className='text-slate-700 text-sm leading-relaxed'>You can see the rollers have come out of the track channel</li>
            <li className='text-slate-700 text-sm leading-relaxed'>There is a visible bend or gap in one of the tracks</li>
            <li className='text-slate-700 text-sm leading-relaxed'>A cable appears slack or has detached from its drum</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>What to do:</strong></p>
          <p className='text-slate-700 text-sm leading-relaxed'>Do not operate the opener. Do not try to manually force the door back into the tracks. An off-track door requires professional service. The door&apos;s full weight is no longer properly supported and it can fall during any attempt to move it. Call a garage door service company. Off-track repair typically costs $125 to $250.</p>
        </section>

        {/* Cause 8: Opener Motor or Logic Board Failure */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Cause 8: Opener Motor or Logic Board Failure</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>If the opener is 10 or more years old and none of the above causes apply, the opener itself may be failing. Symptoms of motor or logic board failure include intermittent operation, the opener starting and then stopping mid-cycle, grinding noises from the motor, or the unit running for a few seconds before clicking off.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>The cost decision:</strong> A replacement motor or logic board costs $50 to $150 for the part. Labor to install adds $75 to $150. A new belt-drive opener with WiFi and battery backup costs $200 to $400 installed. If your opener is over 12 years old, replacement is almost always the better financial decision. You get a fresh warranty, modern safety features, battery backup, and significantly quieter operation.</p>
          <p className='text-slate-700 text-sm leading-relaxed'>For tested picks, see our <Link href='/reviews/best-garage-door-openers' className='text-amber-700 underline'>best garage door openers guide</Link>.</p>
        </section>

        {/* How to Open Manually */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>How to Open the Door Manually (Power Outage or Opener Failure)</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>If the opener has completely failed or you are in a power outage, here is how to open the door safely:</p>
          <ol className='list-decimal list-inside space-y-1 mb-4'>
            <li className='text-slate-700 text-sm leading-relaxed'>Locate the red emergency release cord hanging from the trolley on the ceiling rail.</li>
            <li className='text-slate-700 text-sm leading-relaxed'>Pull the cord straight down. You will feel the trolley carriage disengage with a click or pop.</li>
            <li className='text-slate-700 text-sm leading-relaxed'>Lift the door manually from the bottom, pushing straight up. If the springs are intact, the door should feel nearly weightless and stay open on its own.</li>
            <li className='text-slate-700 text-sm leading-relaxed'>To close the door, pull it down manually. The door should stay closed but will not be locked unless you engage the manual lock.</li>
            <li className='text-slate-700 text-sm leading-relaxed'>To reconnect the opener after power is restored: pull the emergency release cord back toward the opener unit (away from the door) until you hear a click. Run the opener once to re-engage the trolley automatically.</li>
          </ol>
          <p className='text-slate-700 text-sm leading-relaxed'><strong>Critical safety warning:</strong> Never pull the emergency release cord while the door is open if you suspect a broken spring. Without spring tension, the door&apos;s full weight (150 to 400 lbs) is unsupported and can slam down uncontrollably. According to the <a href='https://www.cpsc.gov/Safety-Education/Safety-Guides/Home/Garage-Door' target='_blank' rel='noopener noreferrer' className='text-amber-700 underline'>U.S. Consumer Product Safety Commission</a>, garage doors are one of the heaviest moving objects in a home.</p>
        </section>

        {/* When to Call a Professional */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>When to Call a Professional</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'>Stop DIY troubleshooting and call a professional immediately if:</p>
          <ul className='space-y-1 mb-4'>
            <li className='text-slate-700 text-sm leading-relaxed'>The manual lift test reveals an extremely heavy door (broken spring)</li>
            <li className='text-slate-700 text-sm leading-relaxed'>The door is off its tracks</li>
            <li className='text-slate-700 text-sm leading-relaxed'>The lift cables are visibly frayed, kinked, or detached from their drums</li>
            <li className='text-slate-700 text-sm leading-relaxed'>The door appears crooked or lopsided when partially open</li>
            <li className='text-slate-700 text-sm leading-relaxed'>The opener makes a loud grinding noise and the door barely moves (stripped drive gear)</li>
            <li className='text-slate-700 text-sm leading-relaxed'>You smell burning from the opener motor</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'>Call a professional within the next few days (not an emergency but do not ignore) if:</p>
          <ul className='space-y-1 mb-4'>
            <li className='text-slate-700 text-sm leading-relaxed'>The opener is over 12 years old and showing any of the intermittent symptoms above</li>
            <li className='text-slate-700 text-sm leading-relaxed'>Your springs are 7 or more years old. Budget for proactive replacement before a failure</li>
            <li className='text-slate-700 text-sm leading-relaxed'>The door passes the manual lift test but feels heavier than usual (springs losing tension)</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Frequently Asked Questions</h2>
          <div className='space-y-4'>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Why won&apos;t my garage door open when I press the button?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Start with the manual lift test: pull the red emergency release cord and try lifting the door by hand. If it is extremely heavy, the problem is a broken spring. Call a professional. If it lifts easily, check power to the opener (circuit breaker, GFCI outlet, plug), remote battery, and whether the trolley has been accidentally disconnected. These five causes account for over 90 percent of garage door opener failures.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Why does my opener run but the door will not move?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The most common cause is a disconnected trolley. The red emergency release cord may have been pulled accidentally, disconnecting the door from the opener drive. Pull the cord back toward the opener until you hear a click to re-engage. The second most common cause is a broken torsion spring. If the door feels extremely heavy during the manual lift test, stop and call a professional.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>How do I open my garage door when the power is out?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Pull the red emergency release cord hanging from the ceiling rail to disconnect the door from the opener. Lift the door manually from the bottom. If the springs are intact, the door will feel nearly weightless and hold its position when open. To reconnect the opener when power returns, pull the cord toward the opener until you hear a click, then run the opener once to re-engage automatically.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Why won&apos;t my garage door open in cold weather?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Cold weather causes two distinct problems. The most common is the bottom seal freezing to the concrete floor overnight. Do not press the opener button repeatedly if the door is stuck. This can burn out the motor. Instead, disconnect the opener and chip or melt the ice from the bottom seal before trying to lift the door manually. The second cause is contracted metal components in extreme cold, which can make the door stiff. Relubricating with silicone spray before winter reduces both problems significantly.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>How do I know if my garage door spring is broken?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Three clear signs: you heard a loud bang from the garage (the spring snapping), the door feels impossibly heavy when you try to lift it manually after disconnecting the opener, and you can see a visible gap or separation in the coil of the torsion spring above the door. A broken spring is not a DIY repair. Springs are under extreme tension and can cause severe injury. Replacement costs $150 to $350 professionally installed.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Why does my garage door open a few inches then stop?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>This usually indicates a spring that has lost significant tension but has not fully broken yet, a limit switch that needs adjustment, or an obstruction in the tracks. Pull the emergency release cord and try lifting the door manually. If the door moves freely by hand but the opener stops after a few inches, the close-limit or open-limit switch on the opener needs adjustment per the opener manual. If the door feels heavy and difficult to lift by hand, the spring is near failure. Call a professional.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Can I replace a garage door spring myself?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>No. Torsion springs are wound under extreme mechanical tension equivalent to hundreds of foot-pounds of stored energy. A spring that releases improperly can cause broken fingers, facial injury, or worse. This is consistently rated as one of the most dangerous DIY repairs a homeowner can attempt. Professional replacement costs $150 to $350 and takes under an hour for a trained technician.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>How much does it cost to fix a garage door that won&apos;t open?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>It depends entirely on the cause. Remote battery replacement costs $5 to $10. Reprogramming the remote is free. Resetting a tripped breaker is free. Broken spring replacement costs $150 to $350 professionally. Off-track repair costs $125 to $250. A new opener installed costs $300 to $600. If your opener is over 12 years old and the repair estimate exceeds $200, replacement is usually the better investment.</p>
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
              <p className='text-slate-500 text-xs mt-1'>Full troubleshooting guide for opener failures.</p>
            </Link>
            <Link href='/problems/garage-door-wont-close' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Problem</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Door Won&apos;t Close</p>
              <p className='text-slate-500 text-xs mt-1'>The closing-specific version of this diagnosis.</p>
            </Link>
            <Link href='/guides/garage-door-maintenance' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Guide</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Door Maintenance</p>
              <p className='text-slate-500 text-xs mt-1'>Annual checklist to prevent door failures before they happen.</p>
            </Link>
            <Link href='/reviews/best-garage-door-openers' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Review</span>
              <p className='font-semibold text-slate-800 text-sm'>Best Garage Door Openers</p>
              <p className='text-slate-500 text-xs mt-1'>Tested picks if it is time to replace your opener.</p>
            </Link>
            <Link href='/cost-guides/garage-door-replacement-cost' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Cost Guide</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Door Replacement Cost</p>
              <p className='text-slate-500 text-xs mt-1'>What a new door costs installed in 2026.</p>
            </Link>
            <Link href='/problems/garage-door-spring-replacement' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Problem</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Door Spring Replacement</p>
              <p className='text-slate-500 text-xs mt-1'>Cost, signs of failure, and what to expect from a pro.</p>
            </Link>
          </div>
        </section>

        {/* Glossary */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Glossary</h2>
          <div className='space-y-3'>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Torsion spring</p>
              <p className='text-slate-700 text-sm'>The large coiled spring mounted horizontally above the garage door opening on a metal shaft. It counterbalances the door&apos;s full weight by storing and releasing mechanical energy with each cycle. Standard torsion springs are rated for 10,000 cycles (roughly 7 years at 4 uses per day). High-cycle springs are rated for 25,000 cycles or more. A broken torsion spring is the most common serious mechanical failure causing a door that will not open. Never attempt to adjust or replace a torsion spring without professional training.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Emergency release cord</p>
              <p className='text-slate-700 text-sm'>The red cord hanging from the trolley on the ceiling opener rail. Pulling it toward the door disconnects the door from the automatic opener, allowing manual operation. Pulling it toward the opener re-engages the connection. Used during power outages, opener failures, or when the door is frozen. Never pull the emergency release while the door is open if you suspect a broken spring.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Trolley</p>
              <p className='text-slate-700 text-sm'>The carriage that rides along the opener rail and connects the drive mechanism to the door via a curved metal arm. When the emergency release is pulled, the trolley carriage disengages from the drive. The most common symptom of a disconnected trolley is the opener running while the door stays completely still.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Torsion spring cycle</p>
              <p className='text-slate-700 text-sm'>One complete open-and-close operation of the garage door. Standard springs are rated at 10,000 cycles. At 4 uses per day, 10,000 cycles equals approximately 2,500 days or roughly 7 years. Heavy-use households (6 or more uses per day) reach 10,000 cycles in under 5 years.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>GFCI outlet</p>
              <p className='text-slate-700 text-sm'>A Ground Fault Circuit Interrupter outlet required by electrical code in garages, bathrooms, and outdoor locations. It has test and reset buttons on its face and trips to cut power when it detects a ground fault. A tripped GFCI can cut power to multiple downstream outlets including the opener. Always check the GFCI reset before assuming an opener has failed.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Limit switch</p>
              <p className='text-slate-700 text-sm'>A setting on the opener that tells the motor when to stop as the door reaches the fully open or fully closed position. If set incorrectly, the door may stop short of fully open or close only partway before reversing. Adjustable via a screw on the side or back of the opener unit.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Drive gear</p>
              <p className='text-slate-700 text-sm'>The plastic or nylon gear inside the opener motor unit that transfers power from the motor to the chain, belt, or screw drive. Drive gears are the most commonly replaced internal opener component. A stripped drive gear causes the motor to run while the door does not move, producing a loud grinding sound. Replacement costs $20 to $40 for the part and $100 to $200 installed.</p>
            </div>
            <div>
              <p className='font-semibold text-slate-800 text-sm'>Rolling code</p>
              <p className='text-slate-700 text-sm'>A security technology where the opener and remote generate a new encrypted access code with every use, preventing code interception and replay attacks. Standard on all openers manufactured since the mid-1990s. If a remote stops working after a power outage or battery change, it may need to be reprogrammed to re-sync rolling codes with the opener.</p>
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
