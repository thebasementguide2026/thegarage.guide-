import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Garage Door Opener Not Working? Troubleshooting Guide | The Garage Guide',
  description: 'Diagnose and fix common garage door opener problems including remote failures, sensor issues, grinding noises, and doors that reverse. Step-by-step troubleshooting with cost estimates.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Why is my garage door opener not working?', acceptedAnswer: { '@type': 'Answer', text: 'The most common causes are dead remote batteries, a tripped circuit breaker, misaligned safety sensors, or the opener\'s lock mode being accidentally engaged. These four issues account for roughly 80% of failures and are all fixable in under five minutes at zero cost.' } },
    { '@type': 'Question', name: 'Why does my garage door open but not close?', acceptedAnswer: { '@type': 'Answer', text: 'Almost always a safety sensor issue. The sensors at the bottom of the door tracks are either misaligned, dirty, blocked by an object, or affected by direct sunlight. Check that both sensor indicator lights are steady (not blinking), clean the lenses, and ensure nothing is in the beam path.' } },
    { '@type': 'Question', name: 'Why does my garage door reverse when closing?', acceptedAnswer: { '@type': 'Answer', text: 'Either the safety sensors are triggered (beam is broken or sensors are misaligned) or the close-limit setting needs adjustment. If the door reverses immediately, check the sensors. If it reverses after partially closing, the close-limit screw on the opener needs a slight adjustment.' } },
    { '@type': 'Question', name: 'How do I reset my garage door opener?', acceptedAnswer: { '@type': 'Answer', text: 'Most openers can be reset by unplugging the unit for 30 seconds and plugging it back in. To reset the remote programming, press and hold the Learn button on the opener unit for about 10 seconds until the indicator light turns off. Then reprogram your remotes and keypads by pressing Learn once and pressing the remote button within 30 seconds.' } },
    { '@type': 'Question', name: 'How much does it cost to repair a garage door opener?', acceptedAnswer: { '@type': 'Answer', text: 'Simple fixes (batteries, sensor alignment, lubrication) cost $0 to $20 DIY. Gear replacement costs $20 to $40 for the part or $150 to $250 professionally. A full professional service call averages $150 to $350. If the repair exceeds $200 and the opener is over 10 years old, replacement is usually the better investment.' } },
    { '@type': 'Question', name: 'Can LED light bulbs interfere with my garage door opener?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Some LED bulbs emit radio frequency interference that disrupts the opener\'s remote signal. Symptoms include remotes that only work at close range or intermittent opener operation. Replace standard LEDs with bulbs specifically rated as garage door opener compatible, or use incandescent bulbs in the opener fixture.' } },
  ],
}

const diagnosticTableSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Garage Door Opener Troubleshooting by Symptom',
  description: 'Diagnostic table matching garage door opener symptoms to likely causes, DIY fixes, and estimated repair costs.',
  variableMeasured: [
    { '@type': 'PropertyValue', name: 'Nothing happens (no sound, no light)', value: 'No power to opener. Check outlet, breaker, GFCI reset. Cost: $0' },
    { '@type': 'PropertyValue', name: 'Remote does not work but wall button does', value: 'Dead remote battery or remote needs reprogramming. Cost: $5-$10' },
    { '@type': 'PropertyValue', name: 'Wall button does not work but remote does', value: 'Faulty wall button or wiring. Replace wall button. Cost: $10-$25' },
    { '@type': 'PropertyValue', name: 'Opener hums but door does not move', value: 'Stripped main drive gear. Replace gear assembly. Cost: $20-$250' },
    { '@type': 'PropertyValue', name: 'Opener hums briefly then clicks off', value: 'Bad start capacitor. Replace capacitor. Cost: $10-$200' },
    { '@type': 'PropertyValue', name: 'Door starts to close then immediately reverses', value: 'Misaligned or dirty safety sensors. Clean and realign. Cost: $0' },
    { '@type': 'PropertyValue', name: 'Door closes partially then reverses', value: 'Close-limit switch needs adjustment. Cost: $0' },
    { '@type': 'PropertyValue', name: 'Door opens but will not close (lights blink)', value: 'Safety sensor issue. Check alignment, clean lenses, check wiring. Cost: $0' },
    { '@type': 'PropertyValue', name: 'Door reverses when closing for no visible reason', value: 'Force setting too low or track obstruction. Cost: $0' },
    { '@type': 'PropertyValue', name: 'Grinding noise, door moves unevenly', value: 'Worn rollers, dry chain/screw, or bent track. Lubricate. Cost: $5-$15' },
    { '@type': 'PropertyValue', name: 'Opener works intermittently', value: 'LED light bulb interference or loose wiring. Cost: $5-$20' },
    { '@type': 'PropertyValue', name: 'Remote works from close range only', value: 'Weak remote signal or antenna issue. Cost: $5-$30' },
    { '@type': 'PropertyValue', name: 'Door will not stay open (slides down)', value: 'Broken or weakened spring. Call a professional. Cost: $150-$350' },
    { '@type': 'PropertyValue', name: 'Keypad does not work', value: 'Dead keypad battery or needs reprogramming. Cost: $5-$15' },
  ],
}

const repairReplaceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Garage Door Opener Repair vs Replace Decision Guide',
  description: 'Guide for deciding when to repair or replace a garage door opener based on the issue, age, and cost.',
  variableMeasured: [
    { '@type': 'PropertyValue', name: 'Dead remote batteries', value: 'Repair, $5' },
    { '@type': 'PropertyValue', name: 'Misaligned sensors', value: 'Repair, $0' },
    { '@type': 'PropertyValue', name: 'Stripped gear', value: 'Repair, $20-$250' },
    { '@type': 'PropertyValue', name: 'Bad capacitor', value: 'Repair, $10-$200' },
    { '@type': 'PropertyValue', name: 'Opener under 10 years old with isolated issue', value: 'Repair' },
    { '@type': 'PropertyValue', name: 'Opener is 15+ years old', value: 'Replace' },
    { '@type': 'PropertyValue', name: 'Motor burned out', value: 'Replace' },
    { '@type': 'PropertyValue', name: 'Logic board failure on older opener', value: 'Replace' },
    { '@type': 'PropertyValue', name: 'No WiFi and you want smart control', value: 'Replace or retrofit ($30-$80)' },
    { '@type': 'PropertyValue', name: 'Opener lacks safety features (pre-1993)', value: 'Replace' },
  ],
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Fix Misaligned Garage Door Safety Sensors',
  description: 'Step-by-step guide to realigning garage door safety sensors when the door will not close.',
  totalTime: 'PT5M',
  estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
  tool: [
    { '@type': 'HowToTool', name: 'Soft cloth' },
    { '@type': 'HowToTool', name: 'Small wrench or pliers' },
  ],
  step: [
    { '@type': 'HowToStep', name: 'Check indicator lights', text: 'Look at the indicator lights on each sensor. The sending sensor should have a steady light (usually amber/yellow). The receiving sensor should have a steady light (usually green). If the green light is blinking or off, the sensors are misaligned.' },
    { '@type': 'HowToStep', name: 'Loosen the receiving sensor bracket', text: 'Loosen the wing nut or screw on the receiving sensor bracket just enough to allow adjustment. Tilt the sensor slowly until the green light goes steady.' },
    { '@type': 'HowToStep', name: 'Tighten and test', text: 'Tighten the bracket and test the door. It should close completely without reversing.' },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Garage Door Opener Not Working? Troubleshooting Guide',
  description: 'Diagnose and fix common garage door opener problems including remote failures, sensor issues, grinding noises, and doors that reverse. Step-by-step troubleshooting with cost estimates.',
  image: 'https://thegarage.guide/images/garagedoornotworking.jpg',
  datePublished: '2026-03-07',
  dateModified: '2026-03-07',
  author: { '@type': 'Organization', name: 'The Garage Guide', url: 'https://thegarage.guide' },
  publisher: { '@type': 'Organization', name: 'The Garage Guide', url: 'https://thegarage.guide' },
}

export default function GarageDoorOpenerNotWorking() {
  return (
    <>
      <article className='container-custom py-8 max-w-4xl mx-auto'>
        {/* Hero Section */}
        <div className='relative rounded-xl overflow-hidden mb-8' style={{ minHeight: '400px' }}>
          <Image src='/images/garagedoornotworking.jpg' alt='Garage door opener not working troubleshooting guide' fill className='object-cover' priority />
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent' />
          <div className='absolute bottom-0 left-0 right-0 p-6 md:p-10'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center text-white font-bold text-sm'>GG</div>
              <div>
                <p className='text-white font-semibold text-sm'>The Garage Guide</p>
                <p className='text-gray-300 text-xs'>Updated Mar 2026 · 18 min read</p>
              </div>
            </div>
            <span className='text-amber-700 font-bold text-xs uppercase tracking-wider'>Problem</span>
            <h1 className='text-3xl md:text-4xl font-bold text-white mt-1'>Garage Door Opener Not Working? <span className='text-amber-500'>Troubleshooting Guide</span></h1>
            <p className='text-gray-200 mt-2 text-sm md:text-base max-w-2xl'>Diagnose and fix the most common garage door opener problems with this step-by-step guide. Most issues cost $0 to fix.</p>
          </div>
        </div>

        {/* Intro */}
        <p className='text-slate-700 text-sm leading-relaxed mb-4'>If your garage door opener isn't working, the most common causes are dead remote batteries, a tripped circuit breaker, misaligned safety sensors, or the opener being accidentally locked. These four issues account for roughly 80% of all garage door opener failures, and all four are free to fix in under five minutes.</p>
        <div className='bg-amber-50 border-l-4 border-amber-500 p-4 rounded mb-6'>
          <h3 className='font-semibold text-slate-800 text-sm mb-2'>Critical First Test</h3>
          <p className='text-slate-700 text-sm'>Before troubleshooting the opener, do this one critical test first: with the door closed, pull the red emergency release cord hanging from the trolley and manually lift the door. If the door opens and closes smoothly by hand, the problem is with the opener. If the door is extremely heavy, won't move, or gets stuck, the problem is a <strong>broken spring or damaged track</strong>, not the opener. Stop and call a professional because springs are under extreme tension and are genuinely dangerous.</p>
        </div>

        {/* 5-Minute Checklist */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>5-Minute Checklist: Try These First</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Run through these before anything else. They solve most opener problems instantly.</p>
          <div className='overflow-x-auto mb-4'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Check</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>What to Do</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Power</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Confirm the opener is plugged in. Check the garage circuit breaker (flip it off and back on). Look for a GFCI outlet that may have tripped (press the reset button).</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>30 seconds</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Remote batteries</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Replace batteries in the remote and keypad. Dead batteries are the #1 cause of "my opener stopped working."</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>1 minute</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Lock mode</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Check your wall-mounted control panel. Some units have a Lock or Vacation button that disables the remote. Press it to disengage.</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>15 seconds</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Safety sensors</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Look at the two small sensors at the bottom of the door tracks. Both should have steady lights (usually green). If one is blinking or off, the sensors are blocked or misaligned.</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>1 minute</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Antenna</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>The opener unit on the ceiling has a short wire antenna hanging down. Make sure it's hanging straight and isn't tangled, cut, or pressed against the ceiling.</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>15 seconds</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>If all five checks pass and the opener still doesn't work, move to the diagnostic table below.</p>
        </section>

        {/* Diagnose by Symptom */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Diagnose by Symptom</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Find your exact symptom in the left column. The cause and fix are on the right.</p>
          <div className='overflow-x-auto mb-4'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Symptom</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Likely Cause</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>DIY Fix</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Nothing happens (no sound, no light)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>No power to opener</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Check outlet, breaker, GFCI reset. Try plugging a lamp into the same outlet to test.</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$0</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Remote doesn't work but wall button does</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Dead remote battery or remote needs reprogramming</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Replace battery. If that fails, reprogram remote per your opener's manual (usually hold Learn button + press remote button).</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$5 - $10</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Wall button doesn't work but remote does</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Faulty wall button or wiring</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Check the wire connections at the wall button and opener. Replace wall button if wiring is intact ($10 to $25).</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$10 - $25</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Opener hums but door doesn't move</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Stripped main drive gear</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>The motor spins but the gear that connects it to the drive (chain/belt) is stripped. Replace the gear assembly ($20 to $40 part, 1 to 2 hours DIY) or call a pro ($150 to $250).</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$20 - $250</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Opener hums briefly then clicks off</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Bad start capacitor</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>The capacitor provides the initial power surge to start the motor. If it's failing, the motor can't get going. Capacitor replacement is $10 to $30 for the part.</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$10 - $200</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Door starts to close then immediately reverses</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Misaligned or dirty safety sensors</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Clean both sensor lenses with a soft cloth. Adjust alignment so both indicator lights are steady. Remove any obstructions in the sensor beam path.</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$0</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Door closes partially then reverses</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Close-limit switch needs adjustment</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>The opener thinks the door has hit an obstacle. Adjust the close-limit screw (usually on the side or back of the opener) in small increments per your manual.</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$0</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Door opens but won't close (lights blink)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Safety sensor issue</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Blinking lights on the opener after pressing the button = sensor problem. Check alignment, clean lenses, check wiring between sensors and opener. Sunlight hitting a sensor can also cause false readings.</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$0</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Door reverses when closing for no visible reason</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Force setting too low or track obstruction</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Increase the down-force setting slightly (small turn on the force adjustment screw). Also inspect the tracks for debris, bent sections, or worn rollers causing resistance.</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$0</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Grinding noise, door moves unevenly</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Worn rollers, dry chain/screw, or bent track</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Lubricate the chain, rollers, and hinges with silicone-based lubricant (not WD-40). Inspect rollers for cracks or flat spots. Check tracks for bends.</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$5 - $15</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Opener works intermittently</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>LED light bulb interference or loose wiring</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Some LED bulbs emit radio frequency interference that disrupts opener signals. Try replacing LED bulbs with opener-rated LEDs or incandescent bulbs. Also check all wiring connections for looseness.</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$5 - $20</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Remote works from close range only</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Weak remote signal or antenna issue</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Replace remote battery first. Check that the opener antenna hangs straight down. If range is still short, the remote's circuit board may be failing. Replace the remote ($15 to $30).</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$5 - $30</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Door won't stay open (slides down)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Broken or weakened spring</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>The springs counterbalance the door's weight. If a spring breaks or weakens, the opener can't hold the door up. <strong>Do not attempt spring repair yourself. Call a professional.</strong></td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$150 - $350 (pro)</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Keypad doesn't work</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Dead keypad battery or needs reprogramming</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Replace the battery (usually a 9V or 12V). If that fails, reprogram the keypad by pressing the Learn button on the opener and entering a new code per your manual.</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$5 - $15</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Safety Sensors */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Safety Sensors: The Most Common Culprit</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Safety sensors cause more troubleshooting calls than any other component. They're the two small units mounted on each side of the garage door opening, about 6 inches off the ground. One sends an infrared beam, the other receives it. If anything breaks the beam, the door won't close.</p>

          <h3 className='text-lg font-semibold text-slate-800 mb-2'>How to Fix Misaligned Sensors</h3>
          <div className='space-y-3 mb-4'>
            <div className='bg-slate-50 border-l-4 border-amber-500 p-4 rounded'>
              <p className='font-semibold text-slate-800 text-sm'>Step 1: Check indicator lights</p>
              <p className='text-slate-700 text-sm'>Look at the indicator lights on each sensor. The sending sensor should have a steady light (usually amber/yellow). The receiving sensor should have a steady light (usually green). If the green light is blinking or off, the sensors are misaligned.</p>
            </div>
            <div className='bg-slate-50 border-l-4 border-amber-500 p-4 rounded'>
              <p className='font-semibold text-slate-800 text-sm'>Step 2: Adjust the receiving sensor</p>
              <p className='text-slate-700 text-sm'>Loosen the wing nut or screw on the receiving sensor bracket just enough to allow adjustment. Tilt the sensor slowly until the green light goes steady.</p>
            </div>
            <div className='bg-slate-50 border-l-4 border-amber-500 p-4 rounded'>
              <p className='font-semibold text-slate-800 text-sm'>Step 3: Tighten and test</p>
              <p className='text-slate-700 text-sm'>Tighten the bracket and test the door. It should close completely without reversing.</p>
            </div>
          </div>

          <h3 className='text-lg font-semibold text-slate-800 mb-2'>Common Sensor Problems Beyond Alignment</h3>
          <ul className='list-disc pl-5 text-slate-700 text-sm space-y-1 mb-4'>
            <li><strong>Dirty lenses</strong> — wipe with a soft cloth.</li>
            <li><strong>Spider webs</strong> across the beam path — clean the area around both sensors.</li>
            <li><strong>Direct sunlight</strong> hitting the receiving sensor — install a small sun shade or cardboard tube over the sensor.</li>
            <li><strong>Loose or damaged wiring</strong> between the sensors and opener — inspect the wire for breaks, especially near the sensors where it connects to the terminal screws.</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>According to the <a href='https://www.cpsc.gov/FAQ/Automatic-Residential-Garage-Door-Operators' target='_blank' rel='noopener noreferrer' className='text-amber-700 underline'>Consumer Product Safety Commission</a>, safety sensors (also called photo eyes) have been required on all residential garage door openers sold in the United States since 1993. They prevent the door from closing on people, pets, and objects. <strong>Never bypass or disconnect the sensors, even temporarily.</strong></p>
        </section>

        {/* When to Repair vs Replace */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>When to Repair vs Replace</h2>
          <div className='overflow-x-auto mb-4'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Situation</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Repair or Replace?</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Why</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Dead remote batteries</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium text-green-700'>Repair ($5)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Simplest fix possible</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Misaligned sensors</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium text-green-700'>Repair ($0)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>5-minute adjustment</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Stripped gear</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium text-green-700'>Repair ($20 - $250)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Affordable fix, extends life 5+ years</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Bad capacitor</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium text-green-700'>Repair ($10 - $200)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Cheap part, moderate DIY difficulty</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Opener under 10 years old with isolated issue</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium text-green-700'>Repair</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Most components are replaceable</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Opener is 15+ years old</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium text-red-700'>Replace</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Modern openers are safer, quieter, and have smart features</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Motor burned out</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium text-red-700'>Replace</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Motor replacement costs nearly as much as a new unit</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Logic board failure on older opener</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium text-red-700'>Replace</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>A new board costs ~$100; a new opener costs $200 to $400 with better features</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>No WiFi and you want smart control</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium text-amber-700'>Replace or retrofit</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>A smart controller retrofit ($30 to $80) adds WiFi to an existing opener</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Opener lacks safety features (pre-1993)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium text-red-700'>Replace</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Modern safety standards include auto-reverse, rolling codes, and sensors</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='bg-amber-50 border-l-4 border-amber-500 p-4 rounded mb-4'>
            <h3 className='font-semibold text-slate-800 text-sm mb-2'>The $200 Rule</h3>
            <p className='text-slate-700 text-sm'>If a repair estimate exceeds $200 and the opener is over 10 years old, replacement is almost always the better investment. A new belt-drive opener with WiFi and battery backup costs $200 to $400 and comes with a fresh warranty, modern safety features, and significantly quieter operation.</p>
          </div>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>If you've decided it's time for a new unit, see our <Link href='/reviews/best-garage-door-openers' className='text-amber-700 underline'>best garage door openers 2026 guide</Link> for tested picks at every price point.</p>
        </section>

        {/* Emergency Release */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>How to Use the Emergency Release</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Every garage door opener has a red cord hanging from the trolley (the piece that rides along the rail). Pulling this cord disconnects the door from the opener, allowing you to open and close the door manually.</p>
          <h3 className='text-lg font-semibold text-slate-800 mb-2'>When to Use It</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Power outage, opener failure, or any situation where the opener can't operate the door.</p>
          <h3 className='text-lg font-semibold text-slate-800 mb-2'>How to Use It Safely</h3>
          <ol className='list-decimal pl-5 text-slate-700 text-sm space-y-2 mb-4'>
            <li>Close the door completely first (if possible).</li>
            <li>Pull the red cord straight down and toward the door. The trolley disconnects.</li>
            <li>Lift the door manually.</li>
            <li>To reconnect, pull the cord back toward the opener (away from the door) until it clicks, then run the opener to re-engage.</li>
          </ol>
          <div className='bg-red-50 border-l-4 border-red-500 p-4 rounded mb-4'>
            <h3 className='font-semibold text-red-800 text-sm mb-1'>Critical Safety Warning</h3>
            <p className='text-slate-700 text-sm'>Never pull the emergency release when the door is in the open position if you suspect a broken spring. Without spring tension, the full weight of the door (150 to 400 lbs) can crash down uncontrollably.</p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Frequently Asked Questions</h2>
          <div className='space-y-4'>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Why is my garage door opener not working?</h3>
              <p className='text-slate-700 text-sm'>The most common causes are dead remote batteries, a tripped circuit breaker, misaligned safety sensors, or the opener's lock mode being accidentally engaged. These four issues account for roughly 80% of failures and are all fixable in under five minutes at zero cost.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Why does my garage door open but not close?</h3>
              <p className='text-slate-700 text-sm'>Almost always a safety sensor issue. The sensors at the bottom of the door tracks are either misaligned, dirty, blocked by an object, or affected by direct sunlight. Check that both sensor indicator lights are steady (not blinking), clean the lenses, and ensure nothing is in the beam path.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Why does my garage door reverse when closing?</h3>
              <p className='text-slate-700 text-sm'>Either the safety sensors are triggered (beam is broken or sensors are misaligned) or the close-limit setting needs adjustment. If the door reverses immediately, check the sensors. If it reverses after partially closing, the close-limit screw on the opener needs a slight adjustment.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>How do I reset my garage door opener?</h3>
              <p className='text-slate-700 text-sm'>Most openers can be reset by unplugging the unit for 30 seconds and plugging it back in. To reset the remote programming, press and hold the Learn button on the opener unit for about 10 seconds until the indicator light turns off. Then reprogram your remotes and keypads by pressing Learn once and pressing the remote button within 30 seconds.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>How much does it cost to repair a garage door opener?</h3>
              <p className='text-slate-700 text-sm'>Simple fixes (batteries, sensor alignment, lubrication) cost $0 to $20 DIY. Gear replacement costs $20 to $40 for the part or $150 to $250 professionally. A full professional service call averages $150 to $350. If the repair exceeds $200 and the opener is over 10 years old, replacement is usually the better investment.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Can LED light bulbs interfere with my garage door opener?</h3>
              <p className='text-slate-700 text-sm'>Yes. Some LED bulbs emit radio frequency interference that disrupts the opener's remote signal. Symptoms include remotes that only work at close range or intermittent opener operation. Replace standard LEDs with bulbs specifically rated as garage door opener compatible, or use incandescent bulbs in the opener fixture.</p>
            </div>
          </div>
        </section>

        {/* Glossary */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Glossary</h2>
          <div className='space-y-3'>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Safety sensors (photo eyes)</p>
              <p className='text-slate-700 text-sm'>Two small infrared units mounted on each side of the garage door opening near the floor. They send a beam across the opening that, when broken, prevents the door from closing. Required on all residential openers since 1993.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Emergency release cord</p>
              <p className='text-slate-700 text-sm'>A red cord hanging from the opener trolley that disconnects the door from the automatic opener, allowing manual operation. Used during power outages or opener failures.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Trolley</p>
              <p className='text-slate-700 text-sm'>The component that rides along the opener rail and connects to the door via an arm. The trolley is driven by the chain, belt, or screw mechanism. The emergency release disconnects the trolley from the drive.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Close-limit switch</p>
              <p className='text-slate-700 text-sm'>A setting on the opener that tells the motor when to stop as the door reaches the fully closed position. If set incorrectly, the door may reverse before fully closing because the opener thinks it has hit an obstacle.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Force setting</p>
              <p className='text-slate-700 text-sm'>An adjustment that controls how much resistance the opener will push through before reversing. Set too low, the door reverses from minor friction. Set too high, the safety reversal feature won't work properly. Adjust in small increments.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Learn button</p>
              <p className='text-slate-700 text-sm'>A button on the opener unit (usually on the back or side panel) used to program or reprogram remotes, keypads, and other wireless accessories. Pressing and holding it for 10 seconds erases all programmed devices.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Rolling code security</p>
              <p className='text-slate-700 text-sm'>A technology where the opener and remote generate a new random access code with each use. Prevents code theft that was possible with older fixed-code systems. Standard on all openers manufactured since the mid-1990s.</p>
            </div>
            <div>
              <p className='font-semibold text-slate-800 text-sm'>Torsion spring</p>
              <p className='text-slate-700 text-sm'>The heavy coiled spring mounted above the garage door opening that counterbalances the door's weight. When functioning, it makes the 150 to 400 lb door feel nearly weightless. When broken, the opener cannot lift the door safely. Spring replacement should always be done by a professional.</p>
            </div>
          </div>
        </section>

      </article>

      <LeadForm />

          {/* Schema Scripts */}
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(diagnosticTableSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(repairReplaceSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </>
  )
}
