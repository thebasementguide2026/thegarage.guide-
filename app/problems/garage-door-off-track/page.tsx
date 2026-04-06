import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'
import BeehiivEmailCapture from '@/components/BeehiivEmailCapture'

export const metadata: Metadata = {
  title: 'Garage Door Off Track: Causes, How to Fix It, and When to Call a Pro | The Garage Guide',
  description: 'Garage door off track? Diagnose the cause, fix minor derailments safely, and know when to call a pro. Covers bent tracks, broken cables, worn rollers, and repair costs.',
  alternates: { canonical: 'https://thegarage.guide/problems/garage-door-off-track' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is a garage door off track dangerous?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A garage door weighs 130 to 350 pounds and operates under significant spring tension. A door that has come off track is no longer controlled by its guidance system and can drop, swing, or shift unexpectedly. Do not attempt to operate a door that is off track with the opener. Disconnect the opener immediately, secure the door with locking pliers, and assess the situation before touching anything else.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I put a garage door back on track myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only in limited circumstances. If a single roller has slipped out, the track is straight with no bends, both lift cables are intact, and the springs are not broken, a careful homeowner with basic tools can guide the roller back into the track. If any of those conditions are not met, the repair requires a professional. Attempting to force a door back into alignment when a spring or cable is broken can cause the door to drop suddenly.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to fix a garage door off track?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A minor roller re-engagement by a professional costs $75 to $150 for the service call. Roller replacement costs $100 to $300. Track replacement runs $150 to $400. If the off-track situation was caused by a broken spring or cable, add $150 to $350 for that repair. Total repairs for a typical off-track situation run $150 to $500 professionally.',
      },
    },
    {
      '@type': 'Question',
      name: 'What causes a garage door to keep coming off track?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Repeated derailment almost always points to one of three root causes: worn rollers that no longer fit properly in the track channel, a bent or damaged section of track that causes rollers to jump out at the same spot each time, or loose track mounting hardware that allows the track to flex away from the wall during operation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a garage door off track repair take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A minor roller re-engagement takes 30 to 60 minutes for a professional. A more involved repair including roller replacement and track adjustment takes 1 to 2 hours. Track replacement takes 2 to 3 hours. Most off-track repairs are completed in a single service visit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I use the opener on a garage door that is off track?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Disconnect the opener using the red emergency release cord before doing anything else. An opener running against a door that is off track can strip the opener motor, bend the door further, damage the track, and in severe cases cause the door to fall.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the red cord hanging from my garage door opener?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The red emergency release cord disconnects the garage door from the opener carriage, allowing the door to be operated manually. Pulling it disengages a trolley mechanism and lets the door move freely by hand. Always pull this cord before working on a garage door that has come off track, even if the opener is not running.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a bent garage door track be repaired or does it need replacement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Minor dents in a garage door track can sometimes be tapped back into shape with a rubber mallet without affecting roller movement. Significant bends, crimps, or sections where the track profile is distorted require track section replacement. A track that has been repaired once in the same location should be monitored closely and replaced if the problem recurs.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Garage Door Off Track: Causes, How to Fix It, and When to Call a Pro',
  description: 'Garage door off track? Diagnose the cause, fix minor derailments safely, and know when to call a pro. Covers bent tracks, broken cables, worn rollers, and repair costs.',
  image: 'https://thegarage.guide/images/garagetrack.jpg',
  url: 'https://thegarage.guide/problems/garage-door-off-track',
  datePublished: '2026-04-05',
  dateModified: '2026-04-05',
  author: { '@type': 'Organization', name: 'The Garage Guide', url: 'https://thegarage.guide' },
  publisher: { '@type': 'Organization', name: 'The Garage Guide', url: 'https://thegarage.guide' },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Fix a Garage Door Off Track',
  description: 'Step-by-step guide to diagnosing and fixing a garage door that has come off its track, including safety precautions and when to call a professional.',
  totalTime: 'PT1H',
  estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0-500' },
  tool: [
    { '@type': 'HowToTool', name: 'Locking pliers (two pairs)' },
    { '@type': 'HowToTool', name: 'Flathead screwdriver' },
    { '@type': 'HowToTool', name: 'Adjustable wrench' },
    { '@type': 'HowToTool', name: 'Rubber mallet' },
    { '@type': 'HowToTool', name: 'Work gloves' },
    { '@type': 'HowToTool', name: 'Safety glasses' },
  ],
  step: [
    { '@type': 'HowToStep', name: 'Stop the door and disconnect the opener', text: 'Stop operating the door immediately. Pull the red emergency release cord to disconnect the opener. Clamp locking pliers onto the track just below the lowest roller on each side to prevent the door from dropping.' },
    { '@type': 'HowToStep', name: 'Perform The Gap Test', text: 'Stand in front of the door and look at both tracks. Find where the roller has left the track channel — there will be a visible gap between the roller wheel and the track wall. The door will sag toward that side.' },
    { '@type': 'HowToStep', name: 'Check roller, track, cable, and spring condition', text: 'Check roller condition (cracked or broken), track condition (bent or dented), cable condition (frayed or hanging loose), and spring condition (broken or separated). If cables or springs are damaged, stop and call a professional.' },
    { '@type': 'HowToStep', name: 'Open the track flange', text: 'If the door is safe to repair yourself, use a flathead screwdriver to gently pry the lip of the track open just enough to allow the roller wheel to slip back inside.' },
    { '@type': 'HowToStep', name: 'Guide the roller back into the track', text: 'With one hand holding the track flange open slightly, guide the roller wheel back into the track channel. The roller stem connects to the door hinge and should not move — only reposition the wheel.' },
    { '@type': 'HowToStep', name: 'Close the track flange', text: 'Use a rubber mallet to gently tap the track flange back to its original position. The roller should now sit inside the track channel.' },
    { '@type': 'HowToStep', name: 'Test the door manually', text: 'With locking pliers still on the track as a safety stop, try to move the door by hand a few inches. It should move smoothly without grinding. If it binds, stop and reassess.' },
    { '@type': 'HowToStep', name: 'Reconnect the opener and test', text: 'Remove the locking pliers. Reconnect the opener by pulling the emergency release cord until it clicks back into the carriage. Test the opener at slow speed and watch both sides of the door as it travels.' },
  ],
}

export default function GarageDoorOffTrack() {
  return (
    <>
      <article className='container-custom py-8 max-w-4xl mx-auto'>

        {/* Hero Image with Byline Overlay */}
        <div className='relative rounded-xl overflow-hidden mb-8' style={{ minHeight: '400px' }}>
          <Image
            src='/images/garagetrack.jpg'
            alt='Garage door roller displaced from vertical side track showing off-track condition'
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
                <p className='text-gray-300 text-xs'>Updated Apr 2026 &middot; 12 min read</p>
              </div>
            </div>
            <span className='text-amber-700 font-bold text-xs uppercase tracking-wider'>Problem</span>
            <h1 className='text-3xl md:text-4xl font-bold text-white mt-1'>Garage Door Off Track: Causes, How to Fix It, and <span className='text-amber-500'>When to Call a Pro</span></h1>
            <p className='text-gray-200 mt-2 text-sm md:text-base max-w-2xl'>Diagnose the cause, fix minor derailments safely, and know exactly when to stop and call a professional.</p>
          </div>
        </div>

        {/* TL;DR Box */}
        <div style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75', padding: '16px 20px' }} className='rounded-r-lg mb-4'>
          <p style={{ color: '#1D9E75' }} className='text-sm font-bold mb-2'>TL;DR</p>
          <p className='text-slate-700 text-sm leading-relaxed'>Stop operating the door immediately. Do not force it. Pull the red emergency release cord to disconnect the opener and secure the door with locking pliers so it cannot move while you diagnose the problem. If the door is slightly off track with no broken cables, bent tracks, or spring damage, a careful homeowner can guide the rollers back in. If the door is crooked, a cable is broken, a spring is damaged, or the track is bent, stop and call a pro. A garage door weighs 130 to 350 pounds and operates under extreme spring tension. The wrong move causes serious injury.</p>
        </div>

        {/* Intro */}
        <div className='mb-8'>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>The door started grinding on the way down. Or it stopped halfway and sits at a crooked angle. Or it opened fine this morning and now the opener strains against it and nothing moves. Any of these mean the same thing: one or more rollers have left the track, and the door is no longer guided by the system it depends on to move safely.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>A garage door off track is one of the most common calls a garage door technician receives. It is also one of the most dangerous problems a homeowner can attempt to fix incorrectly. The door is heavy. The springs are under enormous tension. And a door that drops unexpectedly in an attempt to muscle it back into alignment can crush a hand, crack a foot, or destroy a car.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>This guide tells you exactly what to look for, what you can safely fix yourself, and what requires a professional. Follow the sequence. Do not skip the first step.</p>
        </div>

        {/* Step 1 */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Step 1: Stop the Door and Secure It</h2>
          <div className='bg-red-50 border-l-4 border-red-500 p-4 rounded mb-4'>
            <h3 className='font-semibold text-red-800 text-sm mb-2'>Before You Touch Anything</h3>
            <p className='text-slate-700 text-sm'>Pull the red emergency release cord hanging from the opener track. This disconnects the door from the opener motor so the opener cannot activate while you are working. Once disconnected, clamp locking pliers onto the track just below the lowest roller on each side. This prevents the door from dropping. Do not attempt to diagnose or fix an unsecured door. A garage door that falls unexpectedly causes severe injuries.</p>
          </div>
          <p className='text-slate-700 text-sm leading-relaxed'>With the door secured, you can now safely assess the situation. The rest of this guide assumes the door is disconnected from the opener and clamped in place.</p>
        </section>

        {/* The Gap Test */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>The Gap Test: How to Diagnose What Happened</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>The named diagnostic for an off-track garage door is <strong>The Gap Test</strong>. Stand in front of the door and look at both tracks. You are looking for one specific thing: where are the rollers relative to the track channel?</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>A roller that has jumped the track leaves a visible gap between the roller wheel and the track wall. The door panel sags or tilts toward the side where the roller came out. Once you find the gap, you know which roller came out first and where the problem originated.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>After locating the gap, check these five things in order:</p>
          <div className='space-y-3 mb-4'>
            <div>
              <p className='text-slate-700 text-sm'><strong>1. Roller condition:</strong> Is the roller wheel cracked, broken, or missing entirely? A visibly damaged roller needs replacement, not just reinsertion.</p>
            </div>
            <div>
              <p className='text-slate-700 text-sm'><strong>2. Track condition:</strong> Is the track straight? Look down its length from below. A bent or dented section of track will not hold a roller no matter how carefully you reinsert it.</p>
            </div>
            <div>
              <p className='text-slate-700 text-sm'><strong>3. Cable condition:</strong> Look at the lift cables on each side of the door. They should be taut and wound properly on the drum above. A cable that is frayed, snapped, or hanging loose means the door is unbalanced and unsafe to touch until a professional replaces the cable.</p>
            </div>
            <div>
              <p className='text-slate-700 text-sm'><strong>4. Spring condition:</strong> Look at the torsion spring above the door or the extension springs along the horizontal tracks. A broken spring is obvious: either the coil is separated or one side of the door sags heavily while the other side appears normal. Broken spring means call a pro immediately.</p>
            </div>
            <div>
              <p className='text-slate-700 text-sm'><strong>5. Track mounting:</strong> Are the track brackets still bolted to the wall? A track that has pulled away from the wall will swing outward and allow rollers to escape repeatedly until the mounting is repaired.</p>
            </div>
          </div>
        </section>

        {/* Cause Diagnosis Table */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Cause Diagnosis Table</h2>
          <div className='overflow-x-auto mb-4'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>What You See</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Most Likely Cause</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>DIY or Pro</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>One roller out, track straight, no cable or spring damage</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Roller slipped out from minor impact or wear</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>DIY possible</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Multiple rollers out, door crooked</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Impact damage or broken cable</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium text-red-700'>Pro</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Visible dent or bend in track</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Impact or worn track</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Pro if severe, DIY if minor</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Cable hanging loose or frayed</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Broken lift cable</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium text-red-700'>Pro immediately</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Door sags heavily on one side</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Broken spring or broken cable</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium text-red-700'>Pro immediately</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Track pulled away from wall</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Loose or failed track mounting brackets</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>DIY if bolts only, Pro if wall damage</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Grinding noise before derailment</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Worn rollers or debris in track</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>DIY possible after clearing debris</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Door stopped mid-travel with opener straining</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Obstruction in track or roller seized in track</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>DIY possible</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* What You Can Fix Yourself */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>What You Can Fix Yourself</h2>
          <div className='bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4'>
            <p className='text-slate-800 font-semibold text-sm mb-2'>Only attempt DIY if:</p>
            <ul className='list-disc pl-5 text-slate-700 text-sm space-y-1'>
              <li>One or two rollers have come out</li>
              <li>The track is straight with no bends or dents</li>
              <li>Both lift cables are intact and taut</li>
              <li>Both springs are intact</li>
              <li>The door is not hanging at a severe angle</li>
            </ul>
          </div>
          <div className='bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6'>
            <p className='text-slate-800 font-semibold text-sm mb-2'>Tools you need:</p>
            <ul className='list-disc pl-5 text-slate-700 text-sm space-y-1'>
              <li>Locking pliers (two pairs)</li>
              <li>Flathead screwdriver</li>
              <li>Adjustable wrench</li>
              <li>Rubber mallet</li>
              <li>Work gloves</li>
              <li>Safety glasses</li>
            </ul>
          </div>

          <h3 className='text-lg font-semibold text-slate-800 mb-3'>Step-by-Step: Re-engaging a Derailed Roller</h3>
          <div className='space-y-4'>
            <div>
              <p className='text-slate-700 text-sm'><strong>Step 1: Secure the door.</strong> Confirm locking pliers are clamped on the track below the lowest roller on both sides. The door must not be able to move.</p>
            </div>
            <div>
              <p className='text-slate-700 text-sm'><strong>Step 2: Locate the derailed roller.</strong> Find the specific roller or rollers that have come out of the track. The door will sag toward that side.</p>
            </div>
            <div>
              <p className='text-slate-700 text-sm'><strong>Step 3: Open the track flange.</strong> Use a flathead screwdriver to gently pry the lip of the track open just enough to allow the roller wheel to slip back inside. You are not bending the track significantly, just creating enough clearance for the wheel. Work slowly.</p>
            </div>
            <div>
              <p className='text-slate-700 text-sm'><strong>Step 4: Guide the roller back in.</strong> With one hand holding the track open slightly, use your other hand to guide the roller wheel back into the track channel. The stem of the roller connects to the door hinge and should not move. You are only repositioning the wheel.</p>
            </div>
            <div>
              <p className='text-slate-700 text-sm'><strong>Step 5: Close the track flange.</strong> Use a rubber mallet to gently tap the track flange back to its original position. The roller should now sit inside the track channel with minimal play.</p>
            </div>
            <div>
              <p className='text-slate-700 text-sm'><strong>Step 6: Repeat for any additional derailed rollers.</strong> Work one roller at a time. Do not remove the locking pliers until all rollers are back in the track.</p>
            </div>
            <div>
              <p className='text-slate-700 text-sm'><strong>Step 7: Test manually.</strong> With locking pliers still on the track as a safety stop, try to move the door by hand a few inches. It should move smoothly without grinding or binding. If it binds, stop and reassess. Do not force it.</p>
            </div>
            <div>
              <p className='text-slate-700 text-sm'><strong>Step 8: Remove locking pliers and test.</strong> Once the door moves smoothly by hand, remove the locking pliers. Reconnect the opener by pulling the emergency release cord until it clicks back into the carriage. Test the opener at slow speed. Watch both sides of the door as it travels.</p>
            </div>
          </div>
        </section>

        {/* What Requires a Professional */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>What Requires a Professional</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Do not attempt to fix any of the following yourself:</p>
          <div className='space-y-4'>
            <div>
              <p className='text-slate-700 text-sm'><strong>Broken torsion spring:</strong> The torsion spring above the door stores enormous energy equivalent to lifting the full weight of the door. A broken spring that releases unexpectedly causes severe injury. Spring replacement is the single most dangerous DIY garage door repair. A professional has the winding bars, safety equipment, and experience to handle it safely. See our <Link href='/problems/garage-door-spring-replacement' className='text-amber-700 underline'>garage door spring replacement guide</Link> for what the professional process involves.</p>
            </div>
            <div>
              <p className='text-slate-700 text-sm'><strong>Broken or frayed lift cable:</strong> Lift cables balance the weight of the door across both sides. A broken cable means the door is unbalanced and under uneven stress. Attempting to open a door with a broken cable can cause the opposite cable to snap under the extra load, dropping the door suddenly.</p>
            </div>
            <div>
              <p className='text-slate-700 text-sm'><strong>Severely bent track:</strong> A track with a significant dent or bend will cause rollers to derail repeatedly regardless of how carefully they are reinserted. Track replacement requires removing the door panels, which requires spring tension to be released first.</p>
            </div>
            <div>
              <p className='text-slate-700 text-sm'><strong>Multiple derailed rollers with door crooked:</strong> A door hanging at a steep angle has already redistributed its weight unevenly. Attempting to force it back into alignment without first understanding why multiple rollers came out simultaneously is dangerous.</p>
            </div>
            <div>
              <p className='text-slate-700 text-sm'><strong>Damaged door panels affecting alignment:</strong> If a vehicle impact bent a door panel, the panel itself may be distorted enough to prevent the door from tracking correctly even after the rollers are reinserted.</p>
            </div>
          </div>
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
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Replacement Cost</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Recommendation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Roller reinserted, track intact</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$0 DIY or $75&ndash;$150 pro</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>N/A</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>DIY if minor</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>1 to 2 worn rollers replaced</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$100&ndash;$200</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>N/A</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Pro repair</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Full roller replacement (all rollers)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$150&ndash;$300</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>N/A</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Pro repair</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Single track section replaced</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$150&ndash;$250</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>N/A</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Pro repair</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Both tracks replaced</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$200&ndash;$400</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>N/A</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Pro repair</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Broken torsion spring plus track repair</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$300&ndash;$600</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>N/A</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Pro repair</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Broken cable plus track repair</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$200&ndash;$400</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>N/A</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Pro repair</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Door older than 15 years with multiple issues</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$400&ndash;$800</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$700&ndash;$1,500</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Consider replacement</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Emergency Situation */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Emergency Situation: Door Is Stuck Open</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>A garage door stuck in the open position due to coming off track is a security emergency. Your home is exposed until the door is repaired or secured. If a technician cannot respond same-day:</p>
          <ul className='list-disc pl-5 text-slate-700 text-sm space-y-2 mb-4'>
            <li>Do not leave the home unattended with the door open</li>
            <li>Contact a 24-hour garage door service. Most major companies offer emergency response</li>
            <li>As a temporary measure, you can manually lower the door if it is safe to do so with the opener disconnected, and wedge it in place. This is not a secure solution and should only be used for a few hours at most</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed'>If you are unable to close the door at all, see our <Link href='/problems/garage-door-wont-close' className='text-amber-700 underline'>garage door won&apos;t close guide</Link> for additional approaches. <strong>Emergency repair services:</strong> Most garage door companies charge $150 to $300 for emergency or after-hours service calls. The repair itself is billed separately. Get the door operational before worrying about negotiating the price.</p>
        </section>

        {/* Prevention */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>What Caused This and How to Prevent It</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Once the door is back on track, understand what caused it to come off. Without addressing the root cause, it will happen again.</p>
          <div className='space-y-4'>
            <div>
              <p className='text-slate-700 text-sm'><strong>Vehicle impact:</strong> The most common cause. Even a slow collision with the door bottom panel while backing out of the garage can bend the track or knock rollers out. If this happened, inspect the entire bottom section of both tracks for dents before pronouncing the repair complete.</p>
            </div>
            <div>
              <p className='text-slate-700 text-sm'><strong>Worn rollers:</strong> Garage door rollers last 10 to 15 years with proper lubrication. Nylon rollers last longer than steel rollers and run more quietly. If the rollers are visibly worn, cracked, or more than 10 years old, replace all of them at the same time rather than one at a time.</p>
            </div>
            <div>
              <p className='text-slate-700 text-sm'><strong>Loose track mounting hardware:</strong> Every time the door cycles, the vibration loosens the bolts holding the track brackets to the wall slightly. These bolts should be tightened during annual maintenance. If the track pulled away from the wall, the bolts were overdue.</p>
            </div>
            <div>
              <p className='text-slate-700 text-sm'><strong>Broken spring or cable as the root cause:</strong> If a spring or cable broke and caused the door to come off track, simply reinserting the rollers does not fix the underlying problem. The spring or cable must be repaired first, or the door will come off track again on the first use.</p>
            </div>
            <div>
              <p className='text-slate-700 text-sm'><strong>Debris in the track:</strong> Dirt, leaves, or small objects in the track channel cause rollers to bind and eventually jump out. Clean tracks with a damp cloth and apply a silicone-based lubricant to the rollers and hinges every six months. Never use WD-40 on garage door tracks. It attracts dust and gums up over time.</p>
            </div>
          </div>
          <p className='text-slate-700 text-sm mt-4'>For a complete seasonal maintenance schedule that prevents off-track issues, see our <Link href='/guides/garage-door-maintenance' className='text-amber-700 underline'>garage door maintenance guide</Link>.</p>
          <p className='text-slate-700 text-sm mt-3'>For additional safety information, see the <a href='https://www.cpsc.gov/FAQ/Automatic-Residential-Garage-Door-Operators' target='_blank' rel='noopener noreferrer' className='text-amber-700 underline'>U.S. Consumer Product Safety Commission: Automatic Residential Garage Door Operators</a>.</p>
        </section>

        {/* FAQ */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Frequently Asked Questions</h2>
          <div className='space-y-4'>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Is a garage door off track dangerous?</h3>
              <p className='text-slate-700 text-sm'>Yes. A garage door weighs 130 to 350 pounds and operates under significant spring tension. A door that has come off track is no longer controlled by its guidance system and can drop, swing, or shift unexpectedly. Do not attempt to operate a door that is off track with the opener. Disconnect the opener immediately, secure the door with locking pliers, and assess the situation before touching anything else.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Can I put a garage door back on track myself?</h3>
              <p className='text-slate-700 text-sm'>Only in limited circumstances. If a single roller has slipped out, the track is straight with no bends, both lift cables are intact, and the springs are not broken, a careful homeowner with basic tools can guide the roller back into the track. If any of those conditions are not met (bent track, broken cable, broken spring, or multiple rollers out), the repair requires a professional. Attempting to force a door back into alignment when a spring or cable is broken can cause the door to drop suddenly.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>How much does it cost to fix a garage door off track?</h3>
              <p className='text-slate-700 text-sm'>A minor roller re-engagement by a professional costs $75 to $150 for the service call. Roller replacement costs $100 to $300 depending on how many rollers need replacement. Track replacement runs $150 to $400 depending on whether one or both tracks need work. If the off-track situation was caused by a broken spring or cable, add $150 to $350 for the spring or cable repair. Total repairs for a typical off-track situation run $150 to $500 professionally.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>What causes a garage door to keep coming off track?</h3>
              <p className='text-slate-700 text-sm'>Repeated derailment almost always points to one of three root causes: worn rollers that no longer fit properly in the track channel, a bent or damaged section of track that causes rollers to jump out at the same spot each time, or loose track mounting hardware that allows the track to flex away from the wall during operation. Reinserting the rollers without fixing the root cause will result in the same problem recurring within days or weeks.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>How long does a garage door off track repair take?</h3>
              <p className='text-slate-700 text-sm'>A minor roller re-engagement takes 30 to 60 minutes for a professional. A more involved repair including roller replacement and track adjustment takes 1 to 2 hours. Track replacement takes 2 to 3 hours. If the repair requires spring replacement as well, add another 30 to 60 minutes. Most off-track repairs are completed in a single service visit.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Should I use the opener on a garage door that is off track?</h3>
              <p className='text-slate-700 text-sm'>No. Disconnect the opener using the red emergency release cord before doing anything else. An opener running against a door that is off track can strip the opener motor, bend the door further, damage the track, and in severe cases cause the door to fall. The opener is designed to move a door that is properly guided by its track. It is not designed to force a misaligned door.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>What is the red cord hanging from my garage door opener?</h3>
              <p className='text-slate-700 text-sm'>The red emergency release cord disconnects the garage door from the opener carriage, allowing the door to be operated manually. Pulling it disengages a trolley mechanism and lets the door move freely by hand. It is designed for use during power outages and emergency situations including when the door has come off track. Always pull this cord before working on a garage door that has come off track, even if the opener is not running.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Can a bent garage door track be repaired or does it need replacement?</h3>
              <p className='text-slate-700 text-sm'>Minor dents in a garage door track can sometimes be tapped back into shape with a rubber mallet without affecting roller movement. Significant bends, crimps, or sections where the track profile is distorted require track section replacement. A track that has been repaired once in the same location should be monitored closely. The metal is weakened at that point and may fail again. If a track has been repaired more than once, replacement is the more reliable long-term solution.</p>
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
              <p className='text-slate-500 text-xs mt-1'>What the professional repair process involves and when to replace vs repair.</p>
            </Link>
            <Link href='/problems/garage-door-wont-open' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Problem</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Door Won&apos;t Open</p>
              <p className='text-slate-500 text-xs mt-1'>If the opener runs but the door does not move.</p>
            </Link>
            <Link href='/problems/garage-door-wont-close' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Problem</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Door Won&apos;t Close</p>
              <p className='text-slate-500 text-xs mt-1'>Related issues that can accompany an off-track door.</p>
            </Link>
            <Link href='/guides/garage-door-maintenance' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Guide</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Door Maintenance</p>
              <p className='text-slate-500 text-xs mt-1'>The seasonal inspection schedule that prevents off-track issues.</p>
            </Link>
            <Link href='/problems/garage-door-opener-not-working' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Problem</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Door Opener Not Working</p>
              <p className='text-slate-500 text-xs mt-1'>If the opener itself failed during or after the off-track event.</p>
            </Link>
          </div>
        </section>

        {/* Glossary */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Glossary</h2>
          <div className='space-y-3'>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Torsion spring</p>
              <p className='text-slate-700 text-sm'>The large coiled spring mounted horizontally above the garage door opening that stores mechanical energy to counterbalance the weight of the door. When wound correctly, a torsion spring makes a 130 to 350-pound door feel nearly weightless to lift by hand. Torsion springs have a finite cycle life, typically 10,000 cycles, and must be replaced by a professional when they break due to the extreme stored energy they contain.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Lift cable</p>
              <p className='text-slate-700 text-sm'>The steel cable that connects the bottom bracket of the garage door to the spring drum above the door. Lift cables transfer the energy stored in the torsion spring to the door, keeping it balanced during operation. One cable runs on each side. If one cable breaks, the door becomes severely unbalanced and unsafe to operate.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Roller</p>
              <p className='text-slate-700 text-sm'>The wheeled component that fits into the track and allows the door to travel up and down. Garage door rollers have a wheel, a stem, and a bearing. The wheel rides inside the track channel. Nylon rollers with sealed bearings are quieter and longer-lasting than standard steel rollers. Most residential doors have 10 to 12 rollers. Rollers typically last 10 to 15 years with proper lubrication.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Track</p>
              <p className='text-slate-700 text-sm'>The metal channel, typically galvanized steel, that guides the rollers and controls the path of the garage door from the closed position on the vertical section to the open position on the horizontal section. Tracks are mounted to the wall and ceiling with brackets and lag bolts. Standard residential track gauge is 2-inch for single-car doors and 3-inch for heavier two-car doors.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Emergency release cord</p>
              <p className='text-slate-700 text-sm'>The red rope hanging from the opener carriage that disconnects the door from the opener motor when pulled. Allows the door to be operated manually in the event of power failure or mechanical problem. Should be the first thing you pull when a garage door comes off track. Can be re-engaged by pulling the cord toward the opener until it clicks back into the carriage.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Carriage</p>
              <p className='text-slate-700 text-sm'>The trolley assembly that travels along the opener rail and connects to the door via the emergency release mechanism. When the emergency release cord is pulled, the carriage decouples from the door, allowing independent movement. When reconnected, the opener motor drives the carriage which pulls or pushes the door.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Track flange</p>
              <p className='text-slate-700 text-sm'>The curved lip at the open edge of the track channel that holds the roller wheel inside the track. Can be gently pried open with a screwdriver to allow a derailed roller wheel to be reinserted. Should be tapped back to its original profile with a rubber mallet after the roller is re-engaged.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Hinge</p>
              <p className='text-slate-700 text-sm'>The metal bracket that connects adjacent door panels and holds the roller stem in place. Hinges are numbered by position: bottom hinges (No. 1) are the lightest and top hinges (No. 3 or No. 4) are the heaviest. A bent or cracked hinge can cause the roller stem to shift out of alignment, contributing to rollers jumping the track. Hinges should be inspected during annual maintenance and replaced if cracked or visibly distorted.</p>
            </div>
            <div>
              <p className='font-semibold text-slate-800 text-sm'>Bottom bracket</p>
              <p className='text-slate-700 text-sm'>The metal bracket at the bottom corner of each garage door panel that anchors the lift cable. Bottom brackets are under significant tension when the door is in the closed position because the spring tension is applied through the cable attached here. Never attempt to remove or modify a bottom bracket without first releasing spring tension.</p>
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
