import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Garage Door Won\'t Close? 10 Causes and How to Fix Each One | The Garage Guide',
  description: 'Your garage door opens fine but won\'t close. Diagnose all 10 causes ranked easiest to hardest — sensors, limits, springs, gears, and more — with fix costs from $0 to $350.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why does my garage door start to close then immediately reverse?',
      acceptedAnswer: { '@type': 'Answer', text: 'This is almost always a safety sensor problem — the #1 cause 80% of the time. The two photo-eye sensors near the floor are blocked, dirty, or misaligned. Check that both sensor indicator lights are steady (amber on the sender, green on the receiver). Clean the lenses, remove any obstructions, and adjust alignment until both lights are solid.' }
    },
    {
      '@type': 'Question',
      name: 'My garage door won\'t close with the remote but closes if I hold the wall button. What\'s wrong?',
      acceptedAnswer: { '@type': 'Answer', text: 'This is a classic safety sensor failure. Holding the wall button manually overrides the sensors on most openers. The sensors themselves are failing, dirty, or misaligned. Clean and realign them first. If the indicator lights are both steady but the problem persists, replace the sensors ($15 to $50).' }
    },
    {
      '@type': 'Question',
      name: 'How do I close my garage door when the opener is broken?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pull the red emergency release cord hanging from the trolley on the rail. This disconnects the door from the opener. Manually lower the door — if the springs are intact it should feel manageable (30 to 50 lbs). If springs are broken, the door will be very heavy (100 to 400 lbs); get help. Once closed, lock it with the manual slide lock or a C-clamp on the track above a roller.' }
    },
    {
      '@type': 'Question',
      name: 'Why does my garage door reverse right before it hits the floor?',
      acceptedAnswer: { '@type': 'Answer', text: 'The close-limit setting is telling the opener the door has already reached the ground before it actually has, so it reverses to avoid crushing something. Adjust the close-limit screw (labeled down or close on the opener unit) in small quarter-turn increments. Test after each adjustment. On smart openers the limit may be set in the app.' }
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to fix a garage door that won\'t close?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most causes cost $0 to $50 to fix: sensor cleaning and alignment ($0), remote battery ($3 to $5), limit or force adjustment ($0), clearing track obstructions ($0), replacing sensors ($15 to $50). Spring replacement costs $150 to $350 professionally. A new opener costs $200 to $400 installed. The average service call is $75 to $150 plus parts.' }
    },
    {
      '@type': 'Question',
      name: 'Can I bypass the safety sensors permanently?',
      acceptedAnswer: { '@type': 'Answer', text: 'Technically yes, but you should never do this. Safety sensors (photo eyes) are a federal requirement under UL 325 that prevent the door from closing on people, pets, and objects. Bypassing them creates a serious injury risk and may void your homeowner\'s insurance. Fix or replace the sensors instead.' }
    },
    {
      '@type': 'Question',
      name: 'Why won\'t my garage door close in cold weather?',
      acceptedAnswer: { '@type': 'Answer', text: 'Cold causes metal tracks to contract slightly, lubricant to thicken, and weatherstripping to stiffen — all increasing resistance. Try increasing the force setting slightly and apply a silicone-based lubricant (not WD-40) to tracks, rollers, and hinges. If the problem only happens in extreme cold, the springs may be weakening near end of life.' }
    },
    {
      '@type': 'Question',
      name: 'My garage door motor runs but the door doesn\'t move. What\'s wrong?',
      acceptedAnswer: { '@type': 'Answer', text: 'This points to either a disconnected trolley (check if the emergency release cord was pulled and not re-engaged) or a stripped drive gear inside the opener. If you hear the motor running but see the chain/belt/screw not moving, the gear has stripped. Replacement gear kits cost $15 to $30 DIY or $100 to $200 professionally.' }
    },
  ],
}

const diagnosticTableSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Garage Door Won\'t Close: Symptom Diagnostic Table',
  description: 'Matches garage door closing symptoms to the most likely cause, repair method, and estimated cost.',
  variableMeasured: [
    { '@type': 'PropertyValue', name: 'Starts to close, immediately reverses, opener light blinks', value: 'Safety sensor blocked, dirty, or misaligned. Fix: Clean/align sensors. Cost: $0' },
    { '@type': 'PropertyValue', name: 'Starts to close, reverses after a few inches', value: 'Safety sensor issue or close-limit setting. Fix: Sensors or adjust limit screw. Cost: $0' },
    { '@type': 'PropertyValue', name: 'Motor runs but door does not move', value: 'Disconnected trolley or broken drive gear. Fix: Re-engage trolley or replace gear. Cost: $0–$200' },
    { '@type': 'PropertyValue', name: 'Door closes partway, then stops and reverses', value: 'Track obstruction, damaged roller, or force setting too low. Fix: Clear track/increase force. Cost: $0–$200' },
    { '@type': 'PropertyValue', name: 'Remote does not work but wall button does', value: 'Dead remote battery or range issue. Fix: Replace battery. Cost: $3–$5' },
    { '@type': 'PropertyValue', name: 'Neither remote nor wall button closes door', value: 'Sensor wiring issue, power problem, or lock mode engaged. Fix: Check sensors/power/lock. Cost: $0' },
    { '@type': 'PropertyValue', name: 'Door closes unevenly or at an angle', value: 'Broken spring, cable, or track issue. Fix: Professional repair. Cost: $150–$350' },
    { '@type': 'PropertyValue', name: 'Door makes grinding noise but won\'t close', value: 'Stripped gear, track obstruction, or frozen rollers. Fix: Lubricate or replace components. Cost: $15–$200' },
  ],
}

const repairCostSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Garage Door Won\'t Close: DIY vs Professional Repair Guide',
  description: 'Comparison of garage door closing problems showing DIY suitability and repair cost ranges.',
  variableMeasured: [
    { '@type': 'PropertyValue', name: 'Clean or realign sensors', value: 'DIY: Yes. Cost: $0. Time: 5–15 min' },
    { '@type': 'PropertyValue', name: 'Replace remote battery', value: 'DIY: Yes. Cost: $3–$5. Time: 2 min' },
    { '@type': 'PropertyValue', name: 'Clear track obstruction', value: 'DIY: Yes. Cost: $0. Time: 10 min' },
    { '@type': 'PropertyValue', name: 'Adjust limit or force settings', value: 'DIY: Yes. Cost: $0. Time: 10 min' },
    { '@type': 'PropertyValue', name: 'Disengage lock mode', value: 'DIY: Yes. Cost: $0. Time: 10 sec' },
    { '@type': 'PropertyValue', name: 'Reset GFCI or breaker', value: 'DIY: Yes. Cost: $0. Time: 1 min' },
    { '@type': 'PropertyValue', name: 'Replace sensors', value: 'DIY: Yes. Cost: $15–$50. Time: 20 min' },
    { '@type': 'PropertyValue', name: 'Replace rollers (except bottom brackets)', value: 'DIY: Yes (careful). Cost: $30–$100. Time: 30 min per roller' },
    { '@type': 'PropertyValue', name: 'Replace drive gear', value: 'DIY: Maybe. Cost: $15–$75 DIY / $100–$200 pro. Time: 1–2 hours' },
    { '@type': 'PropertyValue', name: 'Minor track straightening', value: 'DIY: Maybe. Cost: $0. Time: 30 min' },
    { '@type': 'PropertyValue', name: 'Spring or cable replacement', value: 'DIY: Never. Cost: $150–$350 pro. Extreme tension hazard' },
    { '@type': 'PropertyValue', name: 'Major track repair or replacement', value: 'DIY: No. Cost: $125–$200 per track pro. Specialized alignment required' },
    { '@type': 'PropertyValue', name: 'Electrical wiring repair', value: 'DIY: No. Cost: $100–$300. Licensed electrician required' },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Garage Door Won\'t Close? 10 Causes and How to Fix Each One',
  description: 'Your garage door opens fine but won\'t close. Diagnose all 10 causes ranked easiest to hardest with fix costs from $0 to $350.',
  image: 'https://thegarage.guide/images/garagestuckopen.jpg',
  datePublished: '2026-03-10',
  dateModified: '2026-03-10',
  author: { '@type': 'Organization', name: 'The Garage Guide', url: 'https://thegarage.guide' },
  publisher: { '@type': 'Organization', name: 'The Garage Guide', url: 'https://thegarage.guide' },
}

export default function GarageDoorWontClose() {
  return (
    <>
      <LeadForm />

          {/* Schema Scripts */}
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(diagnosticTableSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(repairCostSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero Section */}
      <div className='relative w-full' style={{ minHeight: '420px' }}>
        <Image
          src='/images/garagestuckopen.jpg'
          alt='Garage door stuck open and not closing'
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-black/55' />
        <div className='relative z-10 flex flex-col justify-end h-full px-6 py-10 max-w-4xl mx-auto'>
          <span className='inline-block bg-orange-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded mb-3 w-fit'>Problem</span>
          <h1 className='text-3xl md:text-5xl font-bold text-white leading-tight'>
            Garage Door Won&apos;t Close?{' '}
            <span className='text-orange-400'>10 Causes and How to Fix Each One</span>
          </h1>
          <p className='mt-3 text-lg text-slate-200 max-w-2xl'>
            Six types of symptoms. Ten causes ranked easiest to hardest. Fix costs from $0 to $350.
          </p>
          <div className='flex items-center gap-3 mt-5'>
            <div className='w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm'>GG</div>
            <div>
              <p className='text-white font-semibold text-sm'>The Garage Guide</p>
              <p className='text-slate-300 text-xs'>Updated Mar 2026 &middot; 20 min read</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className='max-w-4xl mx-auto px-4 py-10'>

        {/* Intro */}
        <p className='text-lg text-slate-700 mb-4'>
          Your garage door goes up fine, but refuses to come back down. Or it starts closing and immediately reverses. Or it closes partway and stops. Every guide on the internet tells you to check the sensors. That is cause number one, and it is the most common. But if you have already checked the sensors and the door still will not close, you need the other nine causes that most guides skip.
        </p>
        <p className='text-slate-700 mb-6'>
          This guide covers every reason a garage door will not close, ranked from easiest to hardest to fix, with the specific symptoms that identify each cause and what the repair costs. If your opener is not responding at all &mdash; no lights, no sounds, nothing &mdash; see our <Link href='/problems/garage-door-opener-not-working' className='text-orange-600 hover:underline font-medium'>garage door opener not working guide</Link> instead. This article is specifically for doors where the opener activates, but the door will not complete the closing cycle.
        </p>

        {/* Quick Diagnostic Table */}
        <section className='mb-10'>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Quick Diagnostic: What Is Your Door Doing?</h2>
          <p className='text-slate-600 mb-4'>Find your symptom. This narrows the cause immediately.</p>
          <div className='overflow-x-auto rounded-xl border border-slate-200'>
            <table className='w-full text-sm'>
              <thead className='bg-slate-800 text-white'>
                <tr>
                  <th className='px-4 py-3 text-left'>What the Door Does</th>
                  <th className='px-4 py-3 text-left'>Most Likely Cause</th>
                  <th className='px-4 py-3 text-left'>Jump To</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-slate-200'>
                <tr className='bg-white'><td className='px-4 py-3'>Starts to close, immediately reverses, opener light blinks</td><td className='px-4 py-3'>Safety sensor blocked, dirty, or misaligned</td><td className='px-4 py-3 font-medium text-orange-600'>Cause 1</td></tr>
                <tr className='bg-slate-50'><td className='px-4 py-3'>Starts to close, reverses after a few inches</td><td className='px-4 py-3'>Safety sensor issue or close-limit setting</td><td className='px-4 py-3 font-medium text-orange-600'>Cause 1 or 5</td></tr>
                <tr className='bg-white'><td className='px-4 py-3'>Motor runs but door does not move</td><td className='px-4 py-3'>Disconnected trolley or broken drive gear</td><td className='px-4 py-3 font-medium text-orange-600'>Cause 7 or 8</td></tr>
                <tr className='bg-slate-50'><td className='px-4 py-3'>Door closes partway, then stops and reverses</td><td className='px-4 py-3'>Track obstruction, damaged roller, or force setting too low</td><td className='px-4 py-3 font-medium text-orange-600'>Cause 3, 4, or 6</td></tr>
                <tr className='bg-white'><td className='px-4 py-3'>Remote does not work but wall button does</td><td className='px-4 py-3'>Dead remote battery or range issue</td><td className='px-4 py-3 font-medium text-orange-600'>Cause 2</td></tr>
                <tr className='bg-slate-50'><td className='px-4 py-3'>Neither remote nor wall button closes the door</td><td className='px-4 py-3'>Sensor wiring issue, power problem, or lock mode engaged</td><td className='px-4 py-3 font-medium text-orange-600'>Cause 1, 9, or 10</td></tr>
                <tr className='bg-white'><td className='px-4 py-3'>Door closes unevenly or at an angle</td><td className='px-4 py-3'>Broken spring, cable, or track issue</td><td className='px-4 py-3 font-medium text-orange-600'>Cause 4 or 8</td></tr>
                <tr className='bg-slate-50'><td className='px-4 py-3'>Door makes grinding noise but won&apos;t close</td><td className='px-4 py-3'>Stripped gear, track obstruction, or frozen rollers</td><td className='px-4 py-3 font-medium text-orange-600'>Cause 3, 7, or 8</td></tr>
              </tbody>
            </table>
          </div>
        </section>
        
        {/* The 10 Causes */}
        <section className='mb-10'>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>The 10 Causes, Ranked Easiest to Hardest</h2>

          {/* Cause 1 */}
          <div className='bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6'>
            <h3 className='text-xl font-bold text-slate-900 mb-1'>Cause 1: Safety Sensor Problem</h3>
            <p className='text-sm font-semibold text-orange-600 mb-3'>Fix: $0 &mdash; $50 &bull; Time: 5 to 15 minutes</p>
            <p className='text-slate-700 mb-3'>This is the cause 80% of the time. Every garage door opener manufactured after 1993 has two photo-eye sensors mounted near the floor on either side of the door opening. They send an invisible infrared beam across the opening. If anything breaks that beam, or if the sensors cannot see each other, the door will not close.</p>
            <p className='font-semibold text-slate-800 mb-2'>Symptoms</p>
            <ul className='list-disc pl-5 text-slate-700 mb-3 space-y-1'>
              <li>Door starts to close and immediately reverses</li>
              <li>Opener light blinks (typically 10 times on LiftMaster/Chamberlain, varies by brand)</li>
              <li>Wall button works if you press and hold it (bypasses sensors on most models)</li>
              <li>One or both sensor indicator lights are off or blinking</li>
            </ul>
            <p className='font-semibold text-slate-800 mb-2'>Fix it in this order:</p>
            <ol className='list-decimal pl-5 text-slate-700 space-y-2'>
              <li><strong>Check for obstructions.</strong> Look for anything between the sensors &mdash; a broom, a box, a trash can, a spiderweb, a toy. Even a small object or cobweb can break the beam. Remove it and try again.</li>
              <li><strong>Clean the sensor lenses.</strong> Dust, dirt, cobwebs, and moisture film on the sensor lenses block the infrared beam. Wipe both lenses with a soft dry cloth. This alone solves the problem surprisingly often.</li>
              <li><strong>Check alignment.</strong> Both sensors must point directly at each other. The sending sensor (usually amber/yellow LED) and the receiving sensor (usually green LED) should both show steady lights when aligned. If the receiving sensor LED is blinking or off, loosen the wing nut on the mounting bracket, adjust until the green light is steady, and retighten.</li>
              <li><strong>Check the wiring.</strong> Follow the thin wires from each sensor back to the opener unit. Look for damaged, cut, or pinched wires. A wire caught under a roller bracket or chewed by a rodent is a common find. Repair any damage with wire nuts and electrical tape, or replace the wire run.</li>
              <li><strong>Check for sunlight interference.</strong> Direct sunlight hitting the receiving sensor can overwhelm the infrared beam. This typically happens only at specific times of day when the sun angle is low. A cardboard tube taped around the sensor as a shade solves this. Commercial sensor shades are available for $5 to $10.</li>
              <li><strong>Replace the sensors.</strong> If cleaning, aligning, and checking wires does not fix it, the sensor itself may have failed. Replacement sensors cost $15 to $50 depending on brand and are a straightforward swap &mdash; two screws and two wire connections per sensor.</li>
            </ol>
            <p className='mt-3 text-sm text-slate-600'>According to the <a href='https://www.cpsc.gov/FAQ/Automatic-Residential-Garage-Door-Operators' target='_blank' rel='noopener noreferrer' className='text-orange-600 hover:underline'>Consumer Product Safety Commission</a>, safety sensors have been required on all residential garage door openers since 1993. Never bypass them permanently.</p>
          </div>
          
          {/* Cause 2 */}
          <div className='bg-white border border-slate-200 rounded-xl p-6 mb-6'>
            <h3 className='text-xl font-bold text-slate-900 mb-1'>Cause 2: Dead Remote Battery</h3>
            <p className='text-sm font-semibold text-orange-600 mb-3'>Fix: $5 &bull; Time: 2 minutes</p>
            <p className='text-slate-700 mb-3'>If the wall button closes the door but the remote does not, the remote battery is dead. This is the simplest possible cause and is easy to overlook.</p>
            <p className='font-semibold text-slate-800 mb-2'>How to fix it:</p>
            <p className='text-slate-700'>Open the back of the remote, replace the battery (usually a CR2032 coin cell), and test. If the remote still does not work after a fresh battery, reprogram it: press the Learn button on the opener unit, then press the remote button within 30 seconds. Check your opener&apos;s manual for the specific pairing procedure.</p>
          </div>

          {/* Cause 3 */}
          <div className='bg-white border border-slate-200 rounded-xl p-6 mb-6'>
            <h3 className='text-xl font-bold text-slate-900 mb-1'>Cause 3: Track Obstruction or Damage</h3>
            <p className='text-sm font-semibold text-orange-600 mb-3'>Fix: $0 &mdash; $200 &bull; Time: 15 to 60 minutes</p>
            <p className='text-slate-700 mb-3'>The metal tracks on either side of the door guide the rollers as the door opens and closes. Any obstruction in the track, or any bend or dent in the track itself, can prevent the door from closing.</p>
            <p className='font-semibold text-slate-800 mb-2'>Symptoms:</p>
            <ul className='list-disc pl-5 text-slate-700 mb-3 space-y-1'>
              <li>Door closes partway and stops or binds at a specific point</li>
              <li>You can see a dent, bend, or foreign object in the track</li>
              <li>Rollers appear to jam at the same spot every time</li>
              <li>Door moves unevenly &mdash; one side leads the other</li>
            </ul>
            <p className='font-semibold text-slate-800 mb-2'>How to fix it:</p>
            <ul className='list-disc pl-5 text-slate-700 space-y-1'>
              <li><strong>For obstructions:</strong> Inspect both tracks from top to bottom. Remove any debris, screws, small tools, or buildup. A flashlight and a rag handle most cases.</li>
              <li><strong>For minor dents or bends:</strong> A rubber mallet can gently tap a small dent back into shape. Do not use a metal hammer. Loosen track brackets if needed to realign, then retighten.</li>
              <li><strong>For major damage:</strong> If the track is severely bent, crimped, or separating from the wall, call a professional. Tracks significantly out of alignment can cause the door to fall off, which is a serious safety hazard. Professional track repair or replacement costs $125 to $200 per track.</li>
            </ul>
          </div>

          {/* Cause 4 */}
          <div className='bg-red-50 border border-red-200 rounded-xl p-6 mb-6'>
            <h3 className='text-xl font-bold text-slate-900 mb-1'>Cause 4: Broken Spring or Cable</h3>
            <p className='text-sm font-bold text-red-600 mb-3'>Fix: $150 &mdash; $350 &bull; Professional Only &mdash; Do NOT DIY</p>
            <p className='text-slate-700 mb-3'>Garage door springs counterbalance the weight of the door (typically 100 to 200 pounds for a single door, 200 to 400 for a double). When a spring breaks, the opener motor cannot lift or lower that weight alone. The door may close partway and stop, close unevenly, or the motor may strain audibly without moving the door.</p>
            <p className='font-semibold text-slate-800 mb-2'>Symptoms:</p>
            <ul className='list-disc pl-5 text-slate-700 mb-3 space-y-1'>
              <li>A loud bang was heard from the garage (the spring breaking)</li>
              <li>Door feels extremely heavy when lifted manually</li>
              <li>Visible gap in the torsion spring above the door</li>
              <li>One extension spring on the side is hanging loose or broken</li>
              <li>Door closes crookedly &mdash; one side faster than the other</li>
              <li>A cable is hanging loose or visibly snapped</li>
            </ul>
            <div className='bg-red-100 border border-red-300 rounded-lg p-4 mt-3'>
              <p className='font-bold text-red-800'>⚠️ Do NOT attempt spring or cable repair yourself.</p>
              <p className='text-red-700 mt-1'>Torsion springs are under extreme tension and can cause serious injury or death if they release unexpectedly. This is universally the one garage door repair that every expert says to leave to a professional. A professional spring replacement costs $150 to $350 depending on spring type and door size. Most reputable companies offer same-day service.</p>
            </div>
            <p className='text-slate-700 mt-3'>While waiting for repair, you can manually close the door by pulling the emergency release cord (the red handle) and carefully lowering the door by hand. Have someone help you as the door will be very heavy without a functioning spring.</p>
          </div>

          {/* Cause 5 */}
          <div className='bg-white border border-slate-200 rounded-xl p-6 mb-6'>
            <h3 className='text-xl font-bold text-slate-900 mb-1'>Cause 5: Close-Limit Setting Needs Adjustment</h3>
            <p className='text-sm font-semibold text-orange-600 mb-3'>Fix: $0 &bull; Time: 10 minutes</p>
            <p className='text-slate-700 mb-3'>Every garage door opener has a close-limit setting that tells the motor how far down to travel before stopping. If this setting is wrong, the opener thinks the door has hit the ground or an obstacle before it actually has, and it reverses.</p>
            <p className='font-semibold text-slate-800 mb-2'>Symptoms:</p>
            <ul className='list-disc pl-5 text-slate-700 mb-3 space-y-1'>
              <li>Door closes most of the way but reverses right before reaching the floor</li>
              <li>Door closes to the floor but immediately bounces back up</li>
              <li>No sensor light blinking (sensors are not the problem)</li>
              <li>Problem started after a new opener installation or after the opener was serviced</li>
            </ul>
            <p className='font-semibold text-slate-800 mb-2'>How to fix it:</p>
            <p className='text-slate-700'>Locate the limit adjustment screws on the opener unit (usually on the back or side, labeled &ldquo;open&rdquo; and &ldquo;close&rdquo; or marked with up/down arrows). Turn the close-limit screw in small increments (quarter turns) in the direction that extends the travel distance. Test after each adjustment. On newer smart openers (Chamberlain myQ, LiftMaster, Genie), the limits may be set through the app or a digital interface rather than physical screws.</p>
          </div>

          {/* Cause 6 */}
          <div className='bg-white border border-slate-200 rounded-xl p-6 mb-6'>
            <h3 className='text-xl font-bold text-slate-900 mb-1'>Cause 6: Force Setting Too Low</h3>
            <p className='text-sm font-semibold text-orange-600 mb-3'>Fix: $0 &bull; Time: 5 minutes</p>
            <p className='text-slate-700 mb-3'>The force setting controls how much resistance the motor will push through before reversing. If set too low, the door reverses at the slightest resistance, including the normal friction of weatherstripping touching the floor.</p>
            <p className='font-semibold text-slate-800 mb-2'>Symptoms:</p>
            <ul className='list-disc pl-5 text-slate-700 mb-3 space-y-1'>
              <li>Door reaches the floor and reverses</li>
              <li>Door reverses when it meets minor resistance (weatherstripping, slight ice buildup, a leaf)</li>
              <li>Increasing frequency over time as weatherstripping compresses or tracks accumulate grime</li>
            </ul>
            <p className='font-semibold text-slate-800 mb-2'>How to fix it:</p>
            <p className='text-slate-700'>Locate the force adjustment screw (usually next to the limit screws on the opener, labeled &ldquo;force&rdquo; or with a gauge icon). Turn it clockwise in small increments to increase the closing force. Test after each adjustment. The door should close firmly against the floor without bouncing back, but should still reverse if you place your hand or a 2x4 in its path. <strong>If it does not reverse with a solid obstruction, you have set the force too high and need to back it down.</strong> This safety feature must remain functional.</p>
          </div>
          
          {/* Cause 7 */}
          <div className='bg-white border border-slate-200 rounded-xl p-6 mb-6'>
            <h3 className='text-xl font-bold text-slate-900 mb-1'>Cause 7: Stripped Opener Gear</h3>
            <p className='text-sm font-semibold text-orange-600 mb-3'>Fix: $15 &mdash; $75 DIY &bull; $100 &mdash; $200 Pro</p>
            <p className='text-slate-700 mb-3'>Inside the opener, a nylon or plastic drive gear transfers motor power to the chain, belt, or screw drive. Over years of use, this gear wears down and eventually strips. When it strips, the motor runs &mdash; you hear it &mdash; but the drive mechanism does not move.</p>
            <p className='font-semibold text-slate-800 mb-2'>Symptoms:</p>
            <ul className='list-disc pl-5 text-slate-700 mb-3 space-y-1'>
              <li>Motor activates and runs but the door does not move at all</li>
              <li>You may hear a grinding or whirring sound</li>
              <li>The chain, belt, or screw drive is not moving even though the motor is on</li>
              <li>Problem came on gradually (door was getting slower) or suddenly</li>
            </ul>
            <p className='font-semibold text-slate-800 mb-2'>How to fix it:</p>
            <p className='text-slate-700'>Replacement gear kits are available for $15 to $30 for most major opener brands (Chamberlain, LiftMaster, Genie, Craftsman). The repair involves opening the opener housing and swapping the gear. It is a moderate DIY project that takes 1 to 2 hours and requires basic tools. YouTube has model-specific tutorials for virtually every opener. A professional charges $100 to $200 for the repair. If the opener is more than 15 years old and the gear has stripped, consider replacing the entire opener. See our <Link href='/reviews/best-garage-door-openers' className='text-orange-600 hover:underline font-medium'>best garage door openers guide</Link> for recommendations.</p>
          </div>

          {/* Cause 8 */}
          <div className='bg-white border border-slate-200 rounded-xl p-6 mb-6'>
            <h3 className='text-xl font-bold text-slate-900 mb-1'>Cause 8: Roller, Hinge, or Hardware Failure</h3>
            <p className='text-sm font-semibold text-orange-600 mb-3'>Fix: $10 &mdash; $200</p>
            <p className='text-slate-700 mb-3'>Rollers, hinges, and brackets can wear out, seize, or break. A seized roller creates a binding point that the opener cannot push through. A broken hinge allows a panel to shift out of alignment. Both can prevent the door from closing.</p>
            <p className='font-semibold text-slate-800 mb-2'>Symptoms:</p>
            <ul className='list-disc pl-5 text-slate-700 mb-3 space-y-1'>
              <li>Door binds or sticks at a specific point</li>
              <li>Visible broken roller (cracked wheel, bent stem)</li>
              <li>Squealing, grinding, or popping sounds during operation</li>
              <li>A hinge is visibly broken or a panel is sagging</li>
            </ul>
            <p className='font-semibold text-slate-800 mb-2'>How to fix it:</p>
            <p className='text-slate-700 mb-2'>Nylon or steel rollers are inexpensive ($5 to $10 each) and can be replaced by removing the hinge bracket, sliding out the old roller, and inserting a new one. <strong>Do NOT remove the bottom bracket on either side of the door</strong> as it is connected to the cable under spring tension. Hinges are similarly replaceable. If multiple rollers are worn, replace them all at once. A full set of 10 to 12 rollers costs $30 to $60 for nylon or $50 to $100 for sealed-bearing steel.</p>
            <p className='text-sm text-slate-600'>Professional roller replacement (full set): $150 to $200.</p>
          </div>

          {/* Cause 9 */}
          <div className='bg-white border border-slate-200 rounded-xl p-6 mb-6'>
            <h3 className='text-xl font-bold text-slate-900 mb-1'>Cause 9: Lock Mode Engaged</h3>
            <p className='text-sm font-semibold text-orange-600 mb-3'>Fix: $0 &bull; Time: 10 seconds</p>
            <p className='text-slate-700 mb-3'>Some openers have a lock or vacation mode that disables the remote control. When engaged, pressing the remote does nothing but the wall button may still work (or neither may work, depending on the model).</p>
            <p className='font-semibold text-slate-800 mb-2'>Symptoms:</p>
            <ul className='list-disc pl-5 text-slate-700 mb-3 space-y-1'>
              <li>Remote does not work</li>
              <li>A lock icon is visible on the wall control panel</li>
              <li>The opener&apos;s light may flash in a specific pattern indicating lock mode</li>
            </ul>
            <p className='font-semibold text-slate-800 mb-2'>How to fix it:</p>
            <p className='text-slate-700'>Press and hold the lock button on the wall control for 2 to 3 seconds until the lock icon disappears. The remote should work again immediately. Check your opener&apos;s manual if you cannot locate the lock button.</p>
          </div>

          {/* Cause 10 */}
          <div className='bg-white border border-slate-200 rounded-xl p-6 mb-6'>
            <h3 className='text-xl font-bold text-slate-900 mb-1'>Cause 10: Power or Wiring Issue</h3>
            <p className='text-sm font-semibold text-orange-600 mb-3'>Fix: $0 &mdash; $300</p>
            <p className='text-slate-700 mb-3'>If the opener has no power, nothing works. But partial power issues &mdash; corroded connections, a tripped GFCI outlet, or damaged low-voltage wiring &mdash; can cause intermittent or unpredictable behavior.</p>
            <p className='font-semibold text-slate-800 mb-2'>Symptoms:</p>
            <ul className='list-disc pl-5 text-slate-700 mb-3 space-y-1'>
              <li>Opener does not respond to any input (remote, wall button, or app)</li>
              <li>Opener lights are off</li>
              <li>Opener works sometimes but not others</li>
              <li>GFCI outlet has tripped (test/reset buttons on the outlet)</li>
            </ul>
            <p className='font-semibold text-slate-800 mb-2'>How to fix it:</p>
            <ol className='list-decimal pl-5 text-slate-700 space-y-1'>
              <li><strong>Check the GFCI outlet.</strong> Many garages have GFCI-protected outlets. Press the reset button. If it trips again immediately, you have an electrical issue that needs an electrician.</li>
              <li><strong>Check the breaker.</strong> Verify the garage circuit breaker has not tripped.</li>
              <li><strong>Check the outlet.</strong> Plug a lamp or phone charger into the same outlet to verify it has power.</li>
              <li><strong>Check wall button wiring.</strong> The low-voltage wires connecting the wall button to the opener can come loose. Verify both wires are securely attached at both ends.</li>
            </ol>
            <p className='text-sm text-slate-600 mt-3'>Cost: $0 for breaker or GFCI reset. $100 to $300 for electrician if wiring repair is needed.</p>
          </div>
        </section>
        
        {/* DIY vs Pro Table */}
        <section className='mb-10'>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>DIY vs. Professional: When to Call a Pro</h2>
          <div className='overflow-x-auto rounded-xl border border-slate-200'>
            <table className='w-full text-sm'>
              <thead className='bg-slate-800 text-white'>
                <tr>
                  <th className='px-4 py-3 text-left'>Fix</th>
                  <th className='px-4 py-3 text-left'>DIY?</th>
                  <th className='px-4 py-3 text-left'>Why</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-slate-200'>
                <tr className='bg-white'><td className='px-4 py-3'>Clean or realign sensors</td><td className='px-4 py-3 text-green-700 font-semibold'>Yes</td><td className='px-4 py-3'>No tools needed, 5 minutes</td></tr>
                <tr className='bg-slate-50'><td className='px-4 py-3'>Replace remote battery</td><td className='px-4 py-3 text-green-700 font-semibold'>Yes</td><td className='px-4 py-3'>2 minutes</td></tr>
                <tr className='bg-white'><td className='px-4 py-3'>Clear track obstruction</td><td className='px-4 py-3 text-green-700 font-semibold'>Yes</td><td className='px-4 py-3'>Visual check and cleanup</td></tr>
                <tr className='bg-slate-50'><td className='px-4 py-3'>Adjust limit or force settings</td><td className='px-4 py-3 text-green-700 font-semibold'>Yes</td><td className='px-4 py-3'>Screwdriver, follow manual</td></tr>
                <tr className='bg-white'><td className='px-4 py-3'>Disengage lock mode</td><td className='px-4 py-3 text-green-700 font-semibold'>Yes</td><td className='px-4 py-3'>Press a button</td></tr>
                <tr className='bg-slate-50'><td className='px-4 py-3'>Reset GFCI or breaker</td><td className='px-4 py-3 text-green-700 font-semibold'>Yes</td><td className='px-4 py-3'>Press a button</td></tr>
                <tr className='bg-white'><td className='px-4 py-3'>Replace sensors</td><td className='px-4 py-3 text-green-700 font-semibold'>Yes</td><td className='px-4 py-3'>Two screws and two wires per sensor</td></tr>
                <tr className='bg-slate-50'><td className='px-4 py-3'>Replace rollers (except bottom brackets)</td><td className='px-4 py-3 text-yellow-700 font-semibold'>Yes (careful)</td><td className='px-4 py-3'>Basic tools, 30 min per roller</td></tr>
                <tr className='bg-white'><td className='px-4 py-3'>Replace drive gear</td><td className='px-4 py-3 text-yellow-700 font-semibold'>Maybe</td><td className='px-4 py-3'>Moderate DIY, 1 to 2 hours</td></tr>
                <tr className='bg-slate-50'><td className='px-4 py-3'>Minor track straightening</td><td className='px-4 py-3 text-yellow-700 font-semibold'>Maybe</td><td className='px-4 py-3'>Rubber mallet, go gently</td></tr>
                <tr className='bg-white'><td className='px-4 py-3 font-semibold text-red-700'>Spring or cable replacement</td><td className='px-4 py-3 text-red-700 font-bold'>Never</td><td className='px-4 py-3 text-red-700'>Extreme tension, serious injury risk</td></tr>
                <tr className='bg-slate-50'><td className='px-4 py-3'>Major track repair or replacement</td><td className='px-4 py-3 text-red-700 font-semibold'>No</td><td className='px-4 py-3'>Requires specialized tools and alignment</td></tr>
                <tr className='bg-white'><td className='px-4 py-3'>Electrical wiring repair</td><td className='px-4 py-3 text-red-700 font-semibold'>No</td><td className='px-4 py-3'>Licensed electrician required</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Emergency Section */}
        <section className='mb-10 bg-slate-800 rounded-xl p-6 text-white'>
          <h2 className='text-2xl font-bold mb-4'>How to Close Your Garage Door in an Emergency</h2>
          <p className='text-slate-300 mb-4'>If your door is stuck open and you need to secure it right now:</p>
          <ol className='list-decimal pl-5 space-y-3 text-slate-200'>
            <li><strong className='text-white'>Pull the emergency release cord</strong> &mdash; the red handle hanging from the trolley on the rail. This disconnects the door from the opener.</li>
            <li><strong className='text-white'>Manually lower the door by hand.</strong> If the springs are intact, the door should feel manageable (30 to 50 pounds of effort). If a spring is broken, the door will be very heavy (100 to 400 pounds). Get help and lower it carefully.</li>
            <li><strong className='text-white'>Lock the door from inside</strong> using the manual slide lock on the inside of the door if equipped, or place a C-clamp or locking pliers on the track just above one of the rollers to prevent the door from being opened from outside.</li>
            <li><strong className='text-white'>Call for repair.</strong> Do not attempt to re-engage the opener until the underlying problem is fixed.</li>
          </ol>
        </section>
        
        {/* FAQ Section */}
        <section className='mb-10'>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Frequently Asked Questions</h2>
          <div className='space-y-4'>
            <details className='bg-white border border-slate-200 rounded-xl p-5 group'>
              <summary className='font-semibold text-slate-900 cursor-pointer list-none flex justify-between items-center'>Why does my garage door start to close then immediately reverse?<span className='text-slate-400 text-xl'>+</span></summary>
              <p className='mt-3 text-slate-700'>This is almost always a safety sensor problem &mdash; the #1 cause 80% of the time. The two photo-eye sensors near the floor are blocked, dirty, or misaligned. Check that both sensor indicator lights are steady (amber on the sender, green on the receiver). Clean the lenses, remove any obstructions, and adjust alignment until both lights are solid.</p>
            </details>
            <details className='bg-white border border-slate-200 rounded-xl p-5 group'>
              <summary className='font-semibold text-slate-900 cursor-pointer list-none flex justify-between items-center'>My garage door won&apos;t close with the remote but closes if I hold the wall button. What&apos;s wrong?<span className='text-slate-400 text-xl'>+</span></summary>
              <p className='mt-3 text-slate-700'>This is a classic safety sensor failure. Holding the wall button manually overrides the sensors on most openers. The sensors themselves are failing, dirty, or misaligned. Clean and realign them first. If the indicator lights are both steady but the problem persists, replace the sensors ($15 to $50).</p>
            </details>
            <details className='bg-white border border-slate-200 rounded-xl p-5 group'>
              <summary className='font-semibold text-slate-900 cursor-pointer list-none flex justify-between items-center'>How do I close my garage door when the opener is broken?<span className='text-slate-400 text-xl'>+</span></summary>
              <p className='mt-3 text-slate-700'>Pull the red emergency release cord hanging from the trolley on the rail. This disconnects the door from the opener. Manually lower the door &mdash; if the springs are intact it should feel manageable (30 to 50 lbs). If springs are broken, the door will be very heavy (100 to 400 lbs); get help. Once closed, lock it with the manual slide lock or a C-clamp on the track above a roller.</p>
            </details>
            <details className='bg-white border border-slate-200 rounded-xl p-5 group'>
              <summary className='font-semibold text-slate-900 cursor-pointer list-none flex justify-between items-center'>Why does my garage door reverse right before it hits the floor?<span className='text-slate-400 text-xl'>+</span></summary>
              <p className='mt-3 text-slate-700'>The close-limit setting is telling the opener the door has already reached the ground before it actually has, so it reverses to avoid crushing something. Adjust the close-limit screw (labeled &ldquo;down&rdquo; or &ldquo;close&rdquo; on the opener unit) in small quarter-turn increments. Test after each adjustment. On smart openers the limit may be set in the app.</p>
            </details>
            <details className='bg-white border border-slate-200 rounded-xl p-5 group'>
              <summary className='font-semibold text-slate-900 cursor-pointer list-none flex justify-between items-center'>How much does it cost to fix a garage door that won&apos;t close?<span className='text-slate-400 text-xl'>+</span></summary>
              <p className='mt-3 text-slate-700'>Most causes cost $0 to $50 to fix: sensor cleaning and alignment ($0), remote battery ($3 to $5), limit or force adjustment ($0), clearing track obstructions ($0), replacing sensors ($15 to $50). Spring replacement costs $150 to $350 professionally. A new opener costs $200 to $400 installed. The average service call is $75 to $150 plus parts. See our <Link href='/cost-guides/garage-door-replacement-cost' className='text-orange-600 hover:underline'>garage door replacement cost guide</Link> if the door itself needs replacing.</p>
            </details>
            <details className='bg-white border border-slate-200 rounded-xl p-5 group'>
              <summary className='font-semibold text-slate-900 cursor-pointer list-none flex justify-between items-center'>Can I bypass the safety sensors permanently?<span className='text-slate-400 text-xl'>+</span></summary>
              <p className='mt-3 text-slate-700'>Technically yes, but you should never do this. Safety sensors (photo eyes) are a federal requirement under <a href='https://www.ul.com/news/ul-325-50th-anniversary-key-safety-issues' target='_blank' rel='noopener noreferrer' className='text-orange-600 hover:underline'>UL 325</a> that prevent the door from closing on people, pets, and objects. Bypassing them creates a serious injury risk and may void your homeowner&apos;s insurance. Fix or replace the sensors instead.</p>
            </details>
            <details className='bg-white border border-slate-200 rounded-xl p-5 group'>
              <summary className='font-semibold text-slate-900 cursor-pointer list-none flex justify-between items-center'>Why won&apos;t my garage door close in cold weather?<span className='text-slate-400 text-xl'>+</span></summary>
              <p className='mt-3 text-slate-700'>Cold causes metal tracks to contract slightly, lubricant to thicken, and weatherstripping to stiffen &mdash; all increasing resistance. Try increasing the force setting slightly and apply a silicone-based lubricant (not WD-40) to tracks, rollers, and hinges. If the problem only happens in extreme cold, the springs may be weakening near end of life.</p>
            </details>
            <details className='bg-white border border-slate-200 rounded-xl p-5 group'>
              <summary className='font-semibold text-slate-900 cursor-pointer list-none flex justify-between items-center'>Should I replace my garage door opener or just repair it?<span className='text-slate-400 text-xl'>+</span></summary>
              <p className='mt-3 text-slate-700'>If the opener is under 10 years old, repair is usually worthwhile. If it is over 15 years old and has a stripped gear, failing logic board, or no safety features (no battery backup, no smartphone connectivity), replacement is the better investment. Modern openers are significantly quieter, more secure, and more reliable. See our <Link href='/reviews/best-garage-door-openers' className='text-orange-600 hover:underline font-medium'>best garage door openers guide</Link>.</p>
            </details>
          </div>
        </section>
        
        {/* Glossary */}
        <section className='mb-10'>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Glossary</h2>
          <div className='grid md:grid-cols-2 gap-4'>
            {[
              { term: 'Safety sensors (photo-eyes)', def: 'Infrared sensors mounted near the floor on each side of the garage door opening. Required on all automatic openers since 1993. They detect obstructions and prevent the door from closing on objects, people, or pets.' },
              { term: 'Close-limit setting', def: 'A control on the opener that defines how far the door travels downward before the motor stops. If set incorrectly, the door may reverse before reaching the floor or push too hard against it.' },
              { term: 'Force setting', def: 'A control on the opener that defines how much resistance the motor will push through before reversing. Prevents the door from crushing objects but must be set high enough to overcome normal friction.' },
              { term: 'Torsion spring', def: 'A tightly wound spring mounted on a shaft above the garage door opening. Stores energy when the door closes and releases it to assist opening. Under extreme tension. Professional replacement only.' },
              { term: 'Extension spring', def: 'A spring mounted along the horizontal track on each side of the door. Stretches when the door closes and contracts to assist opening. Less dangerous than torsion springs but still carries significant force.' },
              { term: 'Trolley', def: 'The carriage that connects the garage door arm to the chain, belt, or screw drive on the opener rail. The emergency release cord disconnects the trolley, allowing manual door operation.' },
              { term: 'Drive gear', def: 'A nylon or plastic gear inside the opener that transfers motor rotation to the drive mechanism. Wears over time and eventually strips, causing the motor to run without moving the door.' },
              { term: 'GFCI (Ground Fault Circuit Interrupter)', def: 'A type of electrical outlet with built-in protection that trips when it detects a ground fault. Common in garages. A tripped GFCI cuts power to the opener. Reset by pressing the reset button on the outlet.' },
            ].map(({ term, def }) => (
              <div key={term} className='bg-slate-50 rounded-lg p-4 border border-slate-200'>
                <p className='font-semibold text-slate-900 mb-1'>{term}</p>
                <p className='text-slate-600 text-sm'>{def}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Articles */}
        <section className='mb-10'>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Related Guides</h2>
          <div className='grid sm:grid-cols-2 gap-4'>
            <Link href='/problems/garage-door-opener-not-working' className='rounded-xl border border-slate-200 p-5 hover:border-orange-400 hover:shadow-md transition-all block'>
              <p className='font-bold text-slate-900 mb-1'>Garage Door Opener Not Working</p>
              <p className='text-sm text-slate-600'>No lights, no sounds? Start here if the opener isn&apos;t responding at all.</p>
            </Link>
            <Link href='/reviews/best-garage-door-openers' className='rounded-xl border border-slate-200 p-5 hover:border-orange-400 hover:shadow-md transition-all block'>
              <p className='font-bold text-slate-900 mb-1'>Best Garage Door Openers 2026</p>
              <p className='text-sm text-slate-600'>Tested picks from Chamberlain, LiftMaster, and Genie for every garage and budget.</p>
            </Link>
            <Link href='/cost-guides/garage-door-replacement-cost' className='rounded-xl border border-slate-200 p-5 hover:border-orange-400 hover:shadow-md transition-all block'>
              <p className='font-bold text-slate-900 mb-1'>Garage Door Replacement Cost 2026</p>
              <p className='text-sm text-slate-600'>$800 to $4,000 installed. Full pricing by material, style, and size.</p>
            </Link>
            <Link href='/guides/how-to-insulate-garage' className='rounded-xl border border-slate-200 p-5 hover:border-orange-400 hover:shadow-md transition-all block'>
              <p className='font-bold text-slate-900 mb-1'>How to Insulate Your Garage</p>
              <p className='text-sm text-slate-600'>Reduce cold-weather door problems by properly insulating walls and the door itself.</p>
            </Link>
            <Link href='/problems/water-leaking-into-garage' className='rounded-xl border border-slate-200 p-5 hover:border-orange-400 hover:shadow-md transition-all block'>
              <p className='font-bold text-slate-900 mb-1'>Water Leaking Into Garage</p>
              <p className='text-sm text-slate-600'>If sealing issues are affecting your door&apos;s closure, water intrusion is a related symptom.</p>
            </Link>
            <Link href='/guides/garage-heater-guide' className='rounded-xl border border-slate-200 p-5 hover:border-orange-400 hover:shadow-md transition-all block'>
              <p className='font-bold text-slate-900 mb-1'>Garage Heater Guide</p>
              <p className='text-sm text-slate-600'>A heated garage prevents cold-weather sensor and spring failures in winter months.</p>
            </Link>
          </div>
        </section>

      </div>
    </>
  )
}
