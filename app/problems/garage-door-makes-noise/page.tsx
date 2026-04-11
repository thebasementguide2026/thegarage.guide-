import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'
import BeehiivEmailCapture from '@/components/BeehiivEmailCapture'

export const metadata: Metadata = {
  title: 'Garage Door Making Noise? Diagnose the Sound and Fix It | The Garage Guide',
  description: 'Garage door making noise? Diagnose grinding, squeaking, banging, rattling, and popping sounds by component. Fixes for each noise type and when to call a pro.',
  alternates: { canonical: 'https://thegarage.guide/problems/garage-door-makes-noise' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is my garage door suddenly so loud?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A sudden increase in noise almost always points to one of three things: a spring that broke (single loud bang), a roller bearing that failed (sudden grinding), or hardware that worked loose (sudden rattling). A loud bang from the garage almost certainly means a torsion spring broke. Do not use the door until the spring is replaced.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best lubricant for a garage door?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Use white lithium grease or a silicone-based garage door lubricant. Both products cling to metal surfaces, reduce friction, and do not attract dust and debris. Apply to rollers, hinges, the torsion spring, and the top of the tracks. Do not use WD-40. It is a cleaning solvent that temporarily reduces noise but leaves no lasting lubricant film and attracts dirt that accelerates wear.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can a noisy garage door damage the opener?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. An unbalanced door, seized rollers, or misaligned tracks force the opener motor to work harder than it was designed to, shortening the motor lifespan. A chain drive opener running a door with seized rollers can strip the drive gear. An unbalanced door running on an entry-level opener can burn out the motor over dozens of cycles.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why does my garage door squeak after I already lubricated it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If squeaking returns quickly after lubrication, one of three things is happening: wrong lubricant (WD-40 evaporates within days), insufficient lubrication (the bearing needs lubricant inside the bearing, not just on the surface), or the rollers are worn beyond what lubrication can fix. Steel rollers with worn or failed bearings produce a squeak that lubrication temporarily masks but does not resolve.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should I lubricate my garage door?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every six months is the standard recommendation. Twice per year, typically spring and fall during seasonal maintenance, keeps all components running smoothly and prevents friction-related wear. In humid, coastal, or dusty environments, quarterly lubrication extends component life.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a noisy garage door dangerous?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the noise. Squeaking and rattling are annoying but not immediately dangerous. A single loud bang almost certainly means a spring broke — the door is dangerous to operate and should not be used until the spring is replaced. A grinding noise that is getting progressively louder indicates accelerating wear that will eventually result in component failure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does my garage door make a noise only in cold weather?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Cold weather causes lubricants to thicken and metal components to contract. A screw drive opener is particularly sensitive to temperature. The lubricant on the screw rod thickens in cold weather and produces a grinding or scraping sound. Apply fresh lubricant rated for low temperatures in late fall. Cold weather also causes the torsion spring to lose some tension as the metal contracts, which can make the door feel heavier.",
      },
    },
    {
      '@type': 'Question',
      name: 'My garage door opener is loud but the door seems fine. What should I do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "First check whether it is a chain drive or screw drive system — these are inherently louder than belt drive systems and the noise may be normal operation. Lubricate the chain or screw drive per the manufacturer's instructions. Check that the opener mounting bracket is tight and install anti-vibration pads if the noise transmits into the house. If the opener is over 10 years old and the noise has been increasing, consider replacing it with a modern belt drive DC motor unit.",
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Garage Door Making Noise? Diagnose the Sound and Fix It',
  description: 'Garage door making noise? Diagnose grinding, squeaking, banging, rattling, and popping sounds by component. Fixes for each noise type and when to call a pro.',
  image: 'https://thegarage.guide/images/garagetrack2.jpg',
  url: 'https://thegarage.guide/problems/garage-door-makes-noise',
  datePublished: '2026-04-11',
  dateModified: '2026-04-11',
  author: { '@type': 'Organization', name: 'The Garage Guide', url: 'https://thegarage.guide' },
  publisher: { '@type': 'Organization', name: 'The Garage Guide', url: 'https://thegarage.guide' },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Diagnose and Fix a Noisy Garage Door',
  description: 'Step-by-step guide to identifying the source of garage door noise and fixing the most common causes including squeaking, grinding, rattling, and banging.',
  totalTime: 'PT30M',
  estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '8-60' },
  tool: [
    { '@type': 'HowToTool', name: 'White lithium grease or silicone garage door lubricant' },
    { '@type': 'HowToTool', name: 'Socket wrench set' },
    { '@type': 'HowToTool', name: 'Ladder' },
  ],
  step: [
    { '@type': 'HowToStep', name: 'Perform The Sound Test', text: 'Operate the door through one complete cycle and note when the noise happens, what it sounds like, which direction, and where it comes from. This narrows the cause before touching anything.' },
    { '@type': 'HowToStep', name: 'Check for a broken spring', text: 'If you heard a single loud bang, check the torsion spring above the door for a visible gap in the coil. A broken spring means stop using the door and call a professional.' },
    { '@type': 'HowToStep', name: 'Tighten all hardware', text: 'Use a socket wrench to tighten all track brackets, hinges, roller stem bolts, and opener mounting hardware. Rattling almost always means loose hardware.' },
    { '@type': 'HowToStep', name: 'Lubricate all moving components', text: 'Apply white lithium grease or silicone lubricant to roller bearings, hinge pins, torsion spring coils, and the top of the tracks. Do not use WD-40.' },
    { '@type': 'HowToStep', name: 'Inspect rollers for wear', text: 'With the opener disconnected, check each roller for wobble, flat spots, or rough bearing movement. Worn rollers need replacement, not just lubrication.' },
    { '@type': 'HowToStep', name: 'Test door balance', text: 'Disconnect the opener and lift the door manually to waist height. Release it. A balanced door stays in place. A door that drops or rises indicates a spring issue requiring professional adjustment.' },
  ],
}

export default function GarageDoorMakesNoise() {
  return (
    <>
      <article className='container-custom py-8 max-w-4xl mx-auto'>

        {/* Hero Image with Byline Overlay */}
        <div className='relative rounded-xl overflow-hidden mb-8' style={{ minHeight: '400px' }}>
          <Image
            src='/images/garagetrack2.jpg'
            alt='Garage door roller, track, and hinge assembly showing components that cause noise'
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
                <p className='text-gray-300 text-xs'>Updated Apr 2026 &middot; 13 min read</p>
              </div>
            </div>
            <span className='text-amber-700 font-bold text-xs uppercase tracking-wider'>Problem</span>
            <h1 className='text-3xl md:text-4xl font-bold text-white mt-1'>Garage Door Making Noise? <span className='text-amber-500'>Diagnose the Sound and Fix It</span></h1>
            <p className='text-gray-200 mt-2 text-sm md:text-base max-w-2xl'>Map every common noise to its source, learn what is happening, and know whether you can fix it yourself or need to make a call.</p>
          </div>
        </div>

        {/* TL;DR Box */}
        <div style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75', padding: '16px 20px' }} className='rounded-r-lg mb-4'>
          <p style={{ color: '#1D9E75' }} className='text-sm font-bold mb-2'>TL;DR</p>
          <p className='text-slate-700 text-sm leading-relaxed'>Most garage door noises come from one of five components: rollers, hinges, springs, the opener drive system, or loose hardware. Squeaking and grinding usually mean dry or worn rollers and hinges &mdash; a $10 can of silicone lubricant fixes most of these in 15 minutes. A single loud bang almost always means a spring broke &mdash; stop using the door and call a pro. Rattling usually means loose hardware &mdash; tighten everything with a socket wrench. A loud chain or screw drive opener is not broken, it is just old. Belt drive and DC motor openers run nearly silent. Never use WD-40 on any garage door component. It is a solvent, not a lubricant, and it attracts dirt that accelerates wear on the exact parts you are trying to protect.</p>
        </div>

        {/* Intro */}
        <div className='mb-8'>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>The garage door started making a noise you do not remember it making before. Maybe it has been getting gradually louder over the past few months. Maybe it was sudden &mdash; a new grinding sound this morning, a squeak that was not there yesterday, or one loud bang that brought you out of bed at 6am.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Garage door noises are not random. Every sound has a specific cause, a specific component, and a specific fix. The difference between a noise that costs $10 to fix today and a noise that costs $600 to fix next month is knowing which one you have right now.</p>
          <p className='text-slate-700 text-sm leading-relaxed'>This guide maps every common garage door noise to its source, tells you exactly what is happening, and tells you whether you can fix it yourself or need to make a call.</p>
        </div>

        {/* The Sound Test */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>The Sound Test: How to Diagnose the Noise</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Before looking at any component, do <strong>The Sound Test</strong> &mdash; a 60-second diagnostic that narrows down the cause before you touch anything.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Stand inside the garage with the door closed. Operate the door through one complete open-and-close cycle and answer these four questions:</p>

          <div className='space-y-4 mb-6'>
            <div>
              <p className='text-slate-700 text-sm'><strong>1. When does the noise happen?</strong></p>
              <ul className='list-disc pl-6 text-slate-700 text-sm space-y-1 mt-1'>
                <li>At startup only (first few inches of travel)</li>
                <li>Throughout the entire travel</li>
                <li>Only at the end of travel (door fully open or fully closed)</li>
                <li>Randomly during travel</li>
              </ul>
            </div>
            <div>
              <p className='text-slate-700 text-sm'><strong>2. What does it sound like?</strong></p>
              <ul className='list-disc pl-6 text-slate-700 text-sm space-y-1 mt-1'>
                <li>Grinding or scraping</li>
                <li>Squeaking or squealing</li>
                <li>Banging or popping (single loud event)</li>
                <li>Rattling or vibrating</li>
                <li>Clicking or clunking</li>
                <li>Straining or humming (motor sound)</li>
              </ul>
            </div>
            <div>
              <p className='text-slate-700 text-sm'><strong>3. Which direction?</strong></p>
              <ul className='list-disc pl-6 text-slate-700 text-sm space-y-1 mt-1'>
                <li>Only when opening</li>
                <li>Only when closing</li>
                <li>Both directions</li>
              </ul>
            </div>
            <div>
              <p className='text-slate-700 text-sm'><strong>4. Where does the sound come from?</strong></p>
              <ul className='list-disc pl-6 text-slate-700 text-sm space-y-1 mt-1'>
                <li>From the door itself (panels, rollers, hinges)</li>
                <li>From the tracks</li>
                <li>From the springs above the door</li>
                <li>From the opener motor unit on the ceiling</li>
              </ul>
            </div>
          </div>

          <p className='text-slate-700 text-sm leading-relaxed mb-6'>The combination of these four answers points directly at the cause. Use the diagnosis table below to match your answers to the source.</p>

          {/* Critical Callout Box */}
          <div className='bg-red-50 border-l-4 border-red-500 p-4 rounded mb-4'>
            <h3 className='font-semibold text-red-800 text-sm mb-2'>One noise requires immediate action.</h3>
            <p className='text-slate-700 text-sm'>A single loud bang, like a gunshot from the garage, almost always means a torsion spring broke. This is not a noise to diagnose and research later. Stop using the door immediately. Do not use the opener. The door has lost its counterbalance and can drop unexpectedly. See our <Link href='/problems/garage-door-spring-replacement' className='text-amber-700 underline'>garage door spring replacement guide</Link> for what to do next.</p>
          </div>
        </section>

        {/* Sound Diagnosis Table */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Sound Diagnosis Table</h2>
          <div className='overflow-x-auto mb-4'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Sound</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>When It Happens</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Most Likely Component</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Cause</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>DIY or Pro</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Squeaking</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Throughout travel</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Rollers, hinges</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Dry bearings or dry hinge pins</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>DIY: lubricate</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Grinding</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Throughout travel</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Rollers</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Worn roller bearings or flat spots</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>DIY if minor, Pro if replacement</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Grinding</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Startup only</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Opener drive gear</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Worn drive gear or chain/screw needs lube</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>DIY: lubricate drive</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Scraping</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Throughout travel</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Bottom of door on track</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Misaligned track or worn bottom seal</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>DIY: adjust track gap</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-semibold'>Loud bang</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Single event</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Torsion spring</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Spring broke</td>
                  <td className='border border-slate-300 px-3 py-2 text-red-700 font-medium'>Pro immediately</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Popping</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Throughout travel</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Springs</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Spring coils binding or dry</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>DIY: lubricate springs</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Rattling</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Throughout travel</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Hardware</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Loose nuts, bolts, hinges</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>DIY: tighten hardware</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Rattling</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>At end of travel</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Opener hardware</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Loose opener mounting bolts</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>DIY: tighten mounting</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Clunking</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>End of travel</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Limit switch</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Door traveling too far open or closed</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>DIY: adjust limit switch</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Clicking</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Throughout travel</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Roller stems</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Worn roller stems in hinge socket</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>DIY if light, Pro if severe</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Straining hum</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Throughout travel</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Opener motor</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Door unbalanced or opener underpowered</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Test balance, Pro if spring issue</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Vibration</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Throughout travel</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Opener mounting</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Loose opener bracket or aging motor</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>DIY: tighten mounting</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Slapping</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Closing only</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Bottom seal</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Worn or detached bottom weatherseal</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>DIY: replace seal</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Fix by Noise Type */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Fix by Noise Type</h2>

          {/* Squeaking and Squealing */}
          <h3 className='text-lg font-semibold text-slate-800 mb-3'>Squeaking and Squealing</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'><strong>What is happening:</strong> The metal-on-metal contact between roller wheels and track, hinge pins and hinge barrels, or roller stems and hinge sockets is running without lubrication. The friction produces a high-pitched squeal.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'><strong>The fix:</strong> Lubrication. This is the most common garage door noise and the easiest to fix.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'><strong>What to use:</strong> White lithium grease or silicone-based garage door lubricant. These products cling to metal surfaces, reduce friction, and do not attract dust the way general-purpose oils do.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>What NOT to use:</strong> WD-40. This is critical and worth explaining properly. WD-40 is a water displacement and cleaning solvent, not a lubricant. It removes old grease and surface rust effectively, which is why it temporarily reduces noise but leaves no lasting lubricant film. Within days, the metal surfaces are drier than before and collecting the airborne dust that WD-40 attracted. The noise returns worse than before and the components wear faster.</p>

          <p className='text-slate-700 text-sm font-semibold mb-3'>How to lubricate the door:</p>
          <div className='space-y-3 mb-6'>
            <p className='text-slate-700 text-sm'><strong>Step 1:</strong> Disconnect the opener and manually cycle the door to access all rollers and hinges.</p>
            <p className='text-slate-700 text-sm'><strong>Step 2:</strong> Apply lubricant to the roller bearings &mdash; the small bearings visible inside the wheel of each roller. Rotate each roller by hand after applying to distribute the lubricant inside the bearing.</p>
            <p className='text-slate-700 text-sm'><strong>Step 3:</strong> Apply lubricant to each hinge pin, the steel pin that the hinge barrel rotates around. Work the hinge open and closed after applying.</p>
            <p className='text-slate-700 text-sm'><strong>Step 4:</strong> Apply a thin coat to the torsion spring coils. Run lubricant along the length of the spring. This reduces friction between coils and prevents the popping sound springs make when dry.</p>
            <p className='text-slate-700 text-sm'><strong>Step 5:</strong> Apply lubricant to the top of both tracks where the rollers contact the track surface. Do not spray the inside of the track channel &mdash; this attracts dirt and causes rollers to slide rather than roll.</p>
            <p className='text-slate-700 text-sm'><strong>Step 6:</strong> Wipe off any excess. Reconnect the opener and test.</p>
          </div>
          <p className='text-slate-700 text-sm leading-relaxed mb-6'>Total time: 15 to 20 minutes. Total cost: $8 to $15 for a can of lubricant.</p>

          {/* Grinding */}
          <h3 className='text-lg font-semibold text-slate-800 mb-3'>Grinding</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'><strong>What is happening:</strong> A grinding sound indicates metal-on-metal contact with actual surface wear occurring &mdash; harder to fix than squeaking and more urgent.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'><strong>Grinding throughout travel (rollers):</strong> Steel rollers with worn bearings develop flat spots or wobble in the track. The flat spot contacts the track once per revolution with a grinding pulse. Run your hand along each roller while the door is stationary (opener disconnected) and feel for wobble, flat spots, or rough bearing movement. Worn rollers need replacement, not lubrication.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'><strong>Replacing rollers:</strong> Nylon rollers with sealed ball bearings are quieter, last longer (10 to 15 years vs 5 to 7 years for steel), and do not need lubrication. A full set of rollers costs $25 to $60 for a standard door. Replacing rollers requires removing the roller stem from the hinge. This is straightforward on most doors but requires keeping the door stationary and working safely. If comfortable with basic tools, this is a DIY repair. If the door has extension springs rather than a torsion spring, replacing bottom rollers requires caution around the cable tension.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-6'><strong>Grinding at startup (opener drive gear):</strong> A grinding sound only when the opener first engages often means the drive gear inside the opener is worn. Chain drive and screw drive openers develop this sound as the gear teeth wear. A worn drive gear that is ignored will eventually strip completely and leave the opener unable to move the door. Drive gear replacement costs $50 to $150 in parts plus labor, or $15 to $40 as a DIY repair if your opener model has available replacement parts.</p>

          {/* Banging and Popping */}
          <h3 className='text-lg font-semibold text-slate-800 mb-3'>Banging and Popping</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'><strong>Single loud bang: almost certainly a broken spring.</strong> Do not use the door. See our <Link href='/problems/garage-door-spring-replacement' className='text-amber-700 underline'>garage door spring replacement guide</Link>. The cost to replace a torsion spring professionally is $200 to $350.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'><strong>Popping throughout travel (dry spring coils):</strong> The torsion spring is made of tightly wound coils. When the coils are dry, they bind against each other as the spring winds and unwinds, releasing with an audible pop. This is a warning that the spring needs lubrication and is under more stress than it should be. Lubricate the spring as described in the squeaking section above. If the popping continues after lubrication, have the spring tension evaluated. An overtightened spring produces excessive coil-to-coil friction.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'><strong>Banging at end of travel (limit switch misadjusted):</strong> If the door bangs when it reaches the fully open or fully closed position, the opener&apos;s travel limits are set too far. The motor drives the door past its natural stopping point and slams it against the stop bolts or the floor. Limit switch adjustment is a straightforward DIY fix using the adjustment screws on the opener motor unit. Consult your opener&apos;s manual for the specific procedure.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-6'><strong>Banging during travel (loose track mounting):</strong> A track that has partially pulled away from the wall will flex and bang as the rollers pass through it. Check all track mounting brackets and tighten any loose lag bolts. If the wall anchor itself has failed, the bracket needs to be remounted into a stud.</p>

          {/* Rattling */}
          <h3 className='text-lg font-semibold text-slate-800 mb-3'>Rattling</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'>Rattling almost always means loose hardware. Garage doors cycle thousands of times per year and the vibration gradually loosens every nut, bolt, and screw in the system.</p>
          <p className='text-slate-700 text-sm font-semibold mb-2'>The fix: Systematic tightening.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'>Use a socket wrench and work through every visible piece of hardware on the door and track system:</p>
          <ul className='list-disc pl-6 text-slate-700 text-sm space-y-1 mb-3'>
            <li>All track mounting brackets to the wall</li>
            <li>All hinge mounting screws on the door panels</li>
            <li>All roller stem bolts</li>
            <li>The opener mounting bracket to the ceiling</li>
            <li>The opener rail mounting hardware</li>
            <li>The header bracket where the track curves</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'>Do not overtighten. Snug is correct. Overtightening strips the fasteners and creates a different problem.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-6'><strong>Anti-vibration hardware:</strong> If the opener itself rattles against its mounting bracket, rubber anti-vibration pads (sold specifically for garage door openers, $8 to $15) installed between the opener and the ceiling mount significantly reduce transmitted vibration noise inside the house.</p>

          {/* Opener Noise */}
          <h3 className='text-lg font-semibold text-slate-800 mb-3'>Opener Noise: Chain vs Belt vs Screw Drive</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>One of the most common sources of complaints about a &ldquo;noisy garage door&rdquo; is actually a noisy opener. The three drive systems have very different noise profiles:</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'><strong>Chain drive:</strong> The most common and least expensive opener type. The metal chain running on the rail produces a characteristic rattling sound during operation. This is normal for chain drive systems, not a sign of failure. Keeping the chain properly tensioned and lubricated reduces the noise but does not eliminate it.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'><strong>Screw drive:</strong> A threaded steel rod drives the carriage. Produces a grinding or scraping sound as it operates, particularly in temperature extremes where the lubricant on the screw becomes thick in cold or thin in heat. Lubricate the screw rod with the manufacturer-recommended lubricant twice per year.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-3'><strong>Belt drive:</strong> Uses a rubber belt instead of metal chain or screw. Significantly quieter than chain or screw drive. If you have a chain or screw drive opener and the noise is the primary complaint, replacing the opener with a belt drive or direct drive unit is the most permanent solution. Modern belt drive openers cost $180 to $350 and run at near-silent levels.</p>
          <p className='text-slate-700 text-sm leading-relaxed'><strong>DC motor vs AC motor:</strong> Older openers use AC motors that are louder at startup and during operation. Modern DC motor openers start more smoothly, run more quietly, and include soft start and soft stop features that reduce the mechanical noise of the door reaching end of travel.</p>
        </section>

        {/* The Balance Test */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>The Balance Test: Is the Door Causing the Noise?</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>An unbalanced door creates noise throughout the system because every component is working harder than it should. A door that is not properly counterbalanced by its springs strains the opener motor, wears rollers faster, and puts stress on the track mounting hardware.</p>
          <p className='text-slate-700 text-sm font-semibold mb-2'>How to test balance:</p>
          <ol className='list-decimal pl-6 text-slate-700 text-sm space-y-2 mb-4'>
            <li>Disconnect the opener using the red emergency release cord</li>
            <li>Manually lift the door to waist height (approximately 3 to 4 feet)</li>
            <li>Release the door and step back</li>
          </ol>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>A balanced door stays in place at waist height with minimal drift. A door that drops quickly is heavy on the bottom &mdash; springs are losing tension. A door that rises on its own is heavy on the top &mdash; springs are overtensioned.</p>
          <p className='text-slate-700 text-sm leading-relaxed'>An unbalanced door should be evaluated by a professional. Adjusting spring tension requires winding bars and knowledge of spring specifications. Do not attempt spring tension adjustment yourself.</p>
        </section>

        {/* Cost Table */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Cost of Fixing Each Noise Source</h2>
          <div className='overflow-x-auto mb-4'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Problem</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>DIY Cost</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Professional Cost</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Urgency</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Dry rollers and hinges (lubrication)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$8 to $15</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$75 to $150 service call</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Low: fix this week</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Worn steel rollers</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$25 to $60 for roller set</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$100 to $200</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Medium: fix this month</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Loose hardware (tightening)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$0</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$75 to $150 service call</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Low: fix this week</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Dry torsion spring (lubrication)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$8 to $15</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Included in service call</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Medium: fix this week</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-semibold'>Broken torsion spring</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Not DIY</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$200 to $350</td>
                  <td className='border border-slate-300 px-3 py-2 text-red-700 font-medium'>High: do not use door</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Worn opener drive gear</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$15 to $40 parts</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$100 to $200</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Medium: fix this month</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Opener limit switch adjustment</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$0</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$75 to $150 service call</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Low: fix this month</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Chain drive noise (normal operation)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$8 to $15 for lubricant</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>N/A</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>None: expected</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Replace chain drive with belt drive</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$180 to $350 new opener</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$350 to $600 installed</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>None: preference only</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Unbalanced door (spring adjustment)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Not DIY</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$150 to $300</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Medium: fix this month</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* When to Call a Pro */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>When to Call a Pro vs Fix It Yourself</h2>
          <p className='text-slate-700 text-sm font-semibold mb-2'>Always call a pro for:</p>
          <ul className='list-disc pl-6 text-slate-700 text-sm space-y-1 mb-4'>
            <li>A loud bang indicating a broken spring</li>
            <li>Any spring tension adjustment</li>
            <li>Drive gear replacement if not comfortable with opener disassembly</li>
            <li>Persistent grinding after lubrication and roller inspection</li>
          </ul>
          <p className='text-slate-700 text-sm font-semibold mb-2'>Safe DIY for most homeowners:</p>
          <ul className='list-disc pl-6 text-slate-700 text-sm space-y-1 mb-4'>
            <li>Lubrication of all components</li>
            <li>Hardware tightening</li>
            <li>Roller replacement (except bottom rollers on extension spring systems)</li>
            <li>Opener limit switch adjustment</li>
            <li>Anti-vibration pad installation</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed'>
            <strong>The line:</strong> If the fix requires releasing or adjusting spring tension, it requires a professional. Everything else is generally within the capability of a homeowner who is comfortable with basic tools.
          </p>
          <p className='text-slate-700 text-sm mt-4'>For additional safety information, see the <a href='https://www.cpsc.gov/FAQ/Automatic-Residential-Garage-Door-Operators' target='_blank' rel='noopener noreferrer' className='text-amber-700 underline'>U.S. Consumer Product Safety Commission: Garage Door Operators</a>.</p>
        </section>

        {/* FAQ */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Frequently Asked Questions</h2>
          <div className='space-y-4'>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Why is my garage door suddenly so loud?</h3>
              <p className='text-slate-700 text-sm'>A sudden increase in noise almost always points to one of three things: a spring that broke (single loud bang), a roller bearing that failed (sudden grinding), or hardware that worked loose (sudden rattling). A loud bang from the garage at any hour of the day or night almost certainly means a torsion spring broke. Do not use the door until the spring is replaced. For grinding or rattling that appeared suddenly, disconnect the opener and manually inspect the rollers, hinges, and track hardware before attempting to operate the door again.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>What is the best lubricant for a garage door?</h3>
              <p className='text-slate-700 text-sm'>Use white lithium grease or a silicone-based garage door lubricant. Both products cling to metal surfaces, reduce friction, and do not attract dust and debris. Apply to rollers, hinges, the torsion spring, and the top of the tracks. Do not use WD-40 &mdash; it is a cleaning solvent that temporarily reduces noise but leaves no lasting lubricant film and attracts dirt that accelerates wear. Do not use general-purpose grease or motor oil, which are too thick, collect debris, and can make noise worse over time.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Can a noisy garage door damage the opener?</h3>
              <p className='text-slate-700 text-sm'>Yes. An unbalanced door, seized rollers, or misaligned tracks force the opener motor to work harder than it was designed to, shortening the motor lifespan. A chain drive opener running a door with seized rollers can strip the drive gear. An unbalanced door running on an entry-level opener can burn out the motor over dozens of cycles. Fixing the noise source protects the opener, not just the door.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Why does my garage door squeak after I already lubricated it?</h3>
              <p className='text-slate-700 text-sm'>If squeaking returns quickly after lubrication, one of three things is happening: wrong lubricant (WD-40 evaporates within days), insufficient lubrication (the bearing needs lubricant inside the bearing, not just on the surface), or the rollers are worn beyond what lubrication can fix. Steel rollers with worn or failed bearings produce a squeak that lubrication temporarily masks but does not resolve. Inspect each roller for wobble, flat spots, or rough bearing movement. If the rollers are worn, replacement is the correct fix.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>How often should I lubricate my garage door?</h3>
              <p className='text-slate-700 text-sm'>Every six months is the standard recommendation. Twice per year, typically spring and fall during your seasonal maintenance, keeps all components running smoothly and prevents friction-related wear that leads to premature roller and hinge failure. If your garage is in a particularly humid, coastal, or dusty environment, quarterly lubrication extends component life. See our <Link href='/guides/garage-door-maintenance' className='text-amber-700 underline'>garage door maintenance guide</Link> for the complete seasonal maintenance schedule.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Is a noisy garage door dangerous?</h3>
              <p className='text-slate-700 text-sm'>It depends on the noise. Squeaking and rattling are annoying but not immediately dangerous. A single loud bang from the garage almost certainly means a spring broke &mdash; the door is now dangerous to operate and should not be used until the spring is replaced. A grinding noise that is getting progressively louder over weeks indicates accelerating wear that will eventually result in component failure. A straining motor sound combined with a door that feels heavy when operated manually indicates spring failure or significant loss of spring tension.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Why does my garage door make a noise only in cold weather?</h3>
              <p className='text-slate-700 text-sm'>Cold weather causes lubricants to thicken and metal components to contract. Grease that was adequate in summer becomes stiff in winter, increasing friction and noise. A screw drive opener is particularly sensitive to temperature &mdash; the lubricant on the screw rod thickens in cold weather and produces a grinding or scraping sound. Apply fresh lubricant rated for low temperatures in late fall. Cold weather also causes the torsion spring to lose some tension as the metal contracts, which can make the door feel heavier and the opener sound like it is straining.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>My garage door opener is loud but the door seems fine. What should I do?</h3>
              <p className='text-slate-700 text-sm'>The opener itself is the noise source. First, check whether it is a chain drive or screw drive system &mdash; these are inherently louder than belt drive systems and the noise may be normal operation rather than a problem. Lubricate the chain or screw drive per the manufacturer&apos;s instructions. Check that the opener mounting bracket is tight and install anti-vibration pads if the noise transmits into the house. If the opener is over 10 years old and the noise has been increasing, a worn drive gear or aging motor may be the cause. At that age, replacing the opener with a modern belt drive DC motor unit is often more cost-effective than repairing a chain drive opener.</p>
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
              <p className='text-slate-500 text-xs mt-1'>What to do when a loud bang means a spring broke.</p>
            </Link>
            <Link href='/problems/garage-door-off-track' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Problem</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Door Off Track</p>
              <p className='text-slate-500 text-xs mt-1'>When scraping and grinding leads to the door coming off its track.</p>
            </Link>
            <Link href='/problems/garage-door-opener-not-working' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Problem</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Door Opener Not Working</p>
              <p className='text-slate-500 text-xs mt-1'>When the noise comes from a struggling opener.</p>
            </Link>
            <Link href='/guides/garage-door-maintenance' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Guide</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Door Maintenance</p>
              <p className='text-slate-500 text-xs mt-1'>The seasonal lubrication and inspection schedule that prevents noise.</p>
            </Link>
            <Link href='/problems/garage-door-weather-stripping' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Problem</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Door Weather Stripping</p>
              <p className='text-slate-500 text-xs mt-1'>If the noise is a slapping or dragging sound from the bottom seal.</p>
            </Link>
          </div>
        </section>

        {/* Glossary */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Glossary</h2>
          <div className='space-y-3'>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Torsion spring</p>
              <p className='text-slate-700 text-sm'>The large coiled spring mounted horizontally above the garage door that counterbalances the door weight. When it breaks, it releases its stored energy with a loud bang and leaves the door without counterbalance. The most urgent noise-related problem a garage door owner faces. Must be replaced by a professional.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Roller bearing</p>
              <p className='text-slate-700 text-sm'>The ball bearing assembly inside the wheel of each garage door roller that allows the wheel to spin freely around the roller stem. Sealed nylon roller bearings last 10 to 15 years and run quietly. Open steel roller bearings last 5 to 7 years, are louder, and require periodic lubrication. Failed bearings produce grinding and squeaking that lubrication cannot fix.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Drive gear</p>
              <p className='text-slate-700 text-sm'>The plastic or nylon gear inside the opener motor unit that engages the chain, belt, or screw drive system. Drive gears wear over time and produce a grinding sound at startup when worn. A completely stripped drive gear leaves the opener motor running but the door not moving. Drive gear replacement is a common repair on openers over 8 to 10 years old.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Chain drive</p>
              <p className='text-slate-700 text-sm'>An opener system that uses a metal chain running on a rail to move the carriage and door. The most common and least expensive opener type. Produces a characteristic rattling sound during operation that is normal for the drive type, not a sign of failure. Requires periodic chain lubrication and tension adjustment.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Belt drive</p>
              <p className='text-slate-700 text-sm'>An opener system that uses a rubber or fiberglass-reinforced belt instead of a metal chain. Significantly quieter than chain drive. The preferred option for attached garages where opener noise transmits into living spaces. Costs $50 to $100 more than a comparable chain drive opener.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Limit switch</p>
              <p className='text-slate-700 text-sm'>The adjustment mechanism on the opener motor unit that controls how far the door travels in each direction before the motor stops. An incorrectly set limit switch causes the door to bang against the floor or stop bolts at end of travel. Most modern openers use electronic limits set automatically during installation. Older openers have manual adjustment screws.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Anti-vibration pads</p>
              <p className='text-slate-700 text-sm'>Rubber pads installed between the opener motor unit and the ceiling mounting bracket that absorb vibration and reduce the amount of operational noise transmitted through the ceiling into living spaces above the garage. Cost $8 to $15 and install in minutes. Particularly effective for chain drive openers in attached garages.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Screw drive</p>
              <p className='text-slate-700 text-sm'>An opener system that uses a threaded steel rod to move the carriage along the rail. Produces a grinding or scraping sound during operation, particularly in temperature extremes where lubricant thickens in cold or thins in heat. Requires lubrication of the threaded rod twice per year with manufacturer-recommended lubricant. Less common than chain or belt drive but found in many older openers installed in the 1990s and 2000s.</p>
            </div>
            <div>
              <p className='font-semibold text-slate-800 text-sm'>Hinge</p>
              <p className='text-slate-700 text-sm'>The metal bracket that connects adjacent door panels and holds the roller stem. Hinge pins are the steel pins around which the hinge barrels rotate and are a primary source of squeaking when dry. A bent or cracked hinge contributes to roller misalignment and uneven noise throughout travel. Hinges are inexpensive and should be replaced if visibly damaged.</p>
            </div>
          </div>
        </section>

      </article>

      {/* Newsletter — standalone */}
      <div className='my-8 max-w-4xl mx-auto px-6'>
        <BeehiivEmailCapture />
      </div>

      {/* Lead Form */}
      <div className='max-w-4xl mx-auto px-6 pb-12'>
        <h2 className='text-xl font-bold text-slate-900 mb-2 text-center'>Need Help With Your Garage Door?</h2>
        <p className='text-slate-600 text-sm text-center mb-6'>Connect with qualified garage door professionals in your area. Free quotes, no obligation.</p>
        <LeadForm />
      </div>

      {/* Schema Scripts */}
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
    </>
  )
}
