import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'
import BeehiivEmailCapture from '@/components/BeehiivEmailCapture'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'The Complete Garage Maintenance Checklist: Every Season, Every System | The Garage Guide',
  description: 'The complete garage maintenance checklist by season. Every system covered: door, opener, floor, lighting, ventilation, heating, storage, electrical, and security.',
  alternates: {
    canonical: 'https://thegarage.guide/guides/garage-maintenance-checklist',
  },
  openGraph: {
    title: 'The Complete Garage Maintenance Checklist: Every Season, Every System | The Garage Guide',
    description: 'The complete garage maintenance checklist by season. Every system covered: door, opener, floor, lighting, ventilation, heating, storage, electrical, and security.',
    url: 'https://thegarage.guide/guides/garage-maintenance-checklist',
    siteName: 'The Garage Guide',
    type: 'article',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How often should I maintain my garage?', acceptedAnswer: { '@type': 'Answer', text: 'Three full maintenance sessions per year (spring, summer, fall) plus a 5-minute monthly safety check covers every system at the right interval. Spring is the most comprehensive session, 60 to 90 minutes covering all nine systems. Summer is a lighter 30-minute check focused on heat-related issues. Fall is the pre-winter session that prevents the most common cold-weather failures. The monthly check takes 5 minutes and covers the three safety tests that should never be skipped.' } },
    { '@type': 'Question', name: 'What is the most important garage maintenance task?', acceptedAnswer: { '@type': 'Answer', text: 'The auto-reverse test is the single most important monthly task. It tests the safety feature that prevents the door from crushing people and pets. The most important annual task is the professional spring inspection. Springs are the highest-failure-risk component in the garage, and a technician can identify weakening springs before they break rather than after. The most important fall task is re-lubricating the bottom door seal with silicone spray to prevent it from freezing to the floor.' } },
    { '@type': 'Question', name: 'How long do garage door springs last?', acceptedAnswer: { '@type': 'Answer', text: 'Standard torsion springs are rated for 10,000 cycles, about 7 years at 4 uses per day. High-cycle springs rated for 25,000 cycles last 17 years at the same usage rate. Extension springs last 5 to 7 years. Springs do not fail gradually. They snap suddenly, usually on a cold morning when steel is most brittle. Proactive replacement at year 7 costs $150 to $350. Emergency replacement after a snap costs the same plus an after-hours service premium.' } },
    { '@type': 'Question', name: 'How do I know if my garage needs professional maintenance?', acceptedAnswer: { '@type': 'Answer', text: 'Call a professional if the door fails the balance test, the auto-reverse test cannot be corrected by adjusting the force setting, springs are 7 or more years old, cables appear frayed or slack, the door moves unevenly or jerks during operation, or the opener struggles noticeably to lift the door. For everything else (lubrication, hardware tightening, seal replacement, sensor cleaning), most homeowners can handle the work themselves.' } },
    { '@type': 'Question', name: 'What lubricant should I use on a garage door?', acceptedAnswer: { '@type': 'Answer', text: 'Use silicone-based spray lubricant for hinges, roller bearings, torsion spring coils, and the bottom seal. Use white lithium grease for chain or screw drive opener mechanisms. Never use WD-40. It is a solvent and degreaser that removes existing lubrication and leaves parts dry within weeks. Never lubricate the inside of the tracks or a belt drive opener\'s belt. One $10 can of silicone spray covers three full lubrication sessions.' } },
    { '@type': 'Question', name: 'How much does annual garage maintenance cost?', acceptedAnswer: { '@type': 'Answer', text: 'The DIY cost for a fully maintained garage runs $50 to $150 per year, primarily a few cans of silicone spray, replacement batteries, and occasional seal or weatherstripping replacement. Adding one professional tune-up per year brings the total to $125 to $300. Skipping maintenance for several years and dealing with emergency repairs instead typically costs $500 to $2,000 per incident. The math strongly favors regular maintenance.' } },
    { '@type': 'Question', name: 'Can I do garage maintenance myself?', acceptedAnswer: { '@type': 'Answer', text: 'Most garage maintenance is straightforward DIY. Lubrication, hardware tightening, sensor cleaning, seal replacement, and all safety tests are homeowner-friendly tasks. The exceptions are torsion springs, extension springs, and lift cables. These are under extreme mechanical tension and should only be adjusted or replaced by a professional. A winding bar that slips during spring work can cause broken fingers, facial fractures, or worse.' } },
    { '@type': 'Question', name: 'What garage systems need seasonal maintenance?', acceptedAnswer: { '@type': 'Answer', text: 'All nine garage systems need attention on a seasonal schedule: the door (hinges, rollers, springs, cables, panels), the opener (safety tests, battery backup, firmware), the floor (cracks, stains, coating), lighting (bulbs, fixtures), ventilation (fans, vents, insulation gaps), heating (heater test, CO detector), storage systems (hardware tightening, load inspection), electrical (outlet and circuit check), and the building envelope (seals, weatherstripping, caulk). Most guides cover only the door. This guide covers all nine.' } },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Complete Garage Maintenance Checklist: Every Season, Every System',
  description: 'The complete garage maintenance checklist by season. Every system covered: door, opener, floor, lighting, ventilation, heating, storage, electrical, and security.',
  url: 'https://thegarage.guide/guides/garage-maintenance-checklist',
  publisher: { '@type': 'Organization', name: 'The Garage Guide', url: 'https://thegarage.guide' },
}

export default function MaintenancePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Maintenance Checklist' }]} />
      <article className='container-custom py-8 max-w-4xl mx-auto'>
        {/* Hero Section */}
        <div className='relative rounded-xl overflow-hidden mb-8' style={{ minHeight: '400px' }}>
          <Image src='/images/garagemaintence.jpg' alt='Well-maintained garage interior in fall with organized tools, epoxy floor, and open garage door' fill className='object-cover' priority />
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent' />
          <div className='absolute bottom-0 left-0 right-0 p-6 md:p-10'>
            <span className='text-amber-700 font-bold text-xs uppercase tracking-wider'>Guide</span>
            <h1 className='text-3xl md:text-4xl font-bold text-white mt-1'>The Complete Garage Maintenance Checklist: <span className='text-amber-500'>Every Season, Every System</span></h1>
            <p className='text-gray-200 mt-2 text-sm md:text-base max-w-2xl'>The complete garage maintenance checklist by season. Every system covered: door, opener, floor, lighting, ventilation, heating, storage, electrical, and security.</p>
          </div>
        </div>

        {/* Byline Row */}
        <div className='flex items-center gap-3 mb-4'>
          <div className='w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center text-white font-bold text-sm'>GG</div>
          <div>
            <p className='text-slate-800 font-semibold text-sm'>The Garage Guide</p>
            <p className='text-gray-500 text-xs'>Updated Mar 2026 · 15 min read</p>
          </div>
          <span className='ml-auto inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded'>Guide</span>
        </div>

        {/* TL;DR */}
        <div style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75', padding: '16px 20px' }} className='rounded-r-lg mb-4'>
          <p style={{ color: '#1D9E75' }} className='text-sm font-bold mb-2'>TL;DR</p>
          <p className='text-slate-700 text-sm leading-relaxed'>A garage that runs reliably all year needs four maintenance sessions: spring (full inspection and lubrication after winter), summer (ventilation, UV protection, lubricant re-check in heat), fall (winterization, re-lubrication, seal inspection, heater test), and a monthly 5-minute safety check year-round. Most tasks take under 30 minutes and cost nothing beyond a $10 can of silicone spray. The tasks that get skipped most often (balance test, auto-reverse test, battery backup test) are also the ones that prevent the most expensive failures.</p>
        </div>

        {/* Intro */}
        <p className='text-slate-700 text-sm leading-relaxed mb-4'>Most homeowners treat their garage like a self-maintaining space. They park in it, store things in it, and ignore it until something breaks. That strategy works fine until January, when the spring snaps on a 10-degree morning and the car is trapped inside. Or until the opener motor burns out because the door has been running with dead springs for two years. Or until the floor epoxy fails because oil soaked through an untreated spot before the coating went down.</p>
        <p className='text-slate-700 text-sm leading-relaxed mb-4'>A garage has nine systems. Each one has a maintenance rhythm. None of them require special skills or expensive tools. Together, they take about two hours per season and keep every component running at its rated lifespan instead of failing early.</p>
        <p className='text-slate-700 text-sm leading-relaxed mb-6'>This is the only garage maintenance checklist that covers all nine systems, not just the door.</p>

        {/* The One-Page Annual Schedule */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>The One-Page Annual Schedule</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Before the details, here is the full year at a glance. Print this, tape it inside a cabinet door, and check tasks off as you go.</p>
          <div className='overflow-x-auto mb-6'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Task</th>
                  <th className='border border-slate-300 px-3 py-2 text-center font-semibold text-slate-800'>Monthly</th>
                  <th className='border border-slate-300 px-3 py-2 text-center font-semibold text-slate-800'>Spring</th>
                  <th className='border border-slate-300 px-3 py-2 text-center font-semibold text-slate-800'>Summer</th>
                  <th className='border border-slate-300 px-3 py-2 text-center font-semibold text-slate-800'>Fall</th>
                  <th className='border border-slate-300 px-3 py-2 text-center font-semibold text-slate-800'>Annual</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Auto-reverse safety test (2x4)</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'>✓</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Photo eye sensor test</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'>✓</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Visual inspection (springs, cables, rollers)</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'>✓</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Full lubrication (hinges, rollers, springs)</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'>✓</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'>✓</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'>✓</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Balance test</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'>✓</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'>✓</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Weatherstripping inspection</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'>✓</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'>✓</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Bottom seal inspection and treatment</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'>✓</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'>✓</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Tighten all hardware</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'>✓</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Opener battery backup test</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'>✓</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'>✓</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Spring age check (replace if 7+ years)</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'>✓</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Floor inspection (cracks, oil stains, seal)</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'>✓</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Lighting check and bulb replacement</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'>✓</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Ventilation inspection</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'>✓</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Heating system test</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'>✓</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>CO detector battery</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'>✓</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Temperature-sensitive materials storage</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'>✓</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Pipe protection (if applicable)</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'>✓</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Pest entry point inspection</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'>✓</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'>✓</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Storage system tightening and inspection</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'>✓</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Opener firmware update (if WiFi-enabled)</td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'></td>
                  <td className='border border-slate-300 px-3 py-2 text-center text-slate-700'>✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Monthly */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Monthly: 5 Minutes, Three Tests</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Do these three checks every month without exception. They test the safety features that protect people, not just equipment.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Test 1: Auto-Reverse (The 2x4 Test)</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Place a flat 2x4 board on the ground in the center of the door opening and press close. The door must contact the board and reverse within 2 seconds. This test is required by federal law on all openers manufactured after January 1, 1991. According to the <a href='https://www.cpsc.gov/FAQ/Automatic-Residential-Garage-Door-Operators' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-800 underline'>Consumer Product Safety Commission</a>, approximately half of garage doors tested during home inspections fail this test. A door that does not reverse is a documented safety hazard.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>If it fails: adjust the down-force setting on the opener per the manual. If it still fails, call a professional. Do not use the automatic opener until it passes.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Test 2: Photo Eye Sensors</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>With the door open and moving toward closed, wave a broom handle through the sensor beam path (6 inches off the floor). The door must immediately stop and reverse. If it fails: clean the sensor lenses with a dry cloth, check that both indicator lights are steady, and realign the sensors if one light is blinking.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Test 3: Visual Quick-Check</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'>Spend 60 seconds looking for:</p>
          <ul className='list-disc pl-6 text-slate-700 text-sm leading-relaxed mb-6 space-y-1'>
            <li>Any visible gap or separation in the torsion spring coil above the door (means a broken spring — stop using the door and call a professional)</li>
            <li>Rollers that wobble or show visible cracks</li>
            <li>Cables that appear slack, kinked, or frayed</li>
            <li>Any unusual sound or jerking during operation</li>
          </ul>
        </section>

        {/* Spring */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Spring: Full System Reset (March to May)</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Spring is the most important maintenance session of the year. Winter stresses every component. Lubricants thicken, metal contracts and expands repeatedly, moisture gets into seals and hardware. Spring is when you find out what winter did and fix it before it becomes a summer failure.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>Estimated time:</strong> 60 to 90 minutes</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Estimated cost:</strong> $10 to $50</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Door System</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Full lubrication:</strong> Apply silicone spray to all hinge pins, roller bearings, and torsion spring coils. Apply white lithium grease to chain or screw drive openers (never to belt drives). Wipe the inside of tracks clean with a dry rag. Do not lubricate the vertical track sections.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Balance test:</strong> Disconnect the opener by pulling the red emergency release cord. Lift the door manually to 3 to 4 feet and release. It should hold its position. A door that slides down has weakening springs. A door that rises is over-tensioned. Either condition needs professional spring adjustment.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Spring age check:</strong> Note when your springs were last replaced. Standard torsion springs are rated for 10,000 cycles (about 7 years at 4 uses per day). If your springs are approaching 7 years, budget for replacement before the next fall. See our <Link href='/problems/garage-door-spring-replacement' className='text-amber-700 hover:text-amber-800 underline'>garage door spring replacement guide</Link> for costs and what to expect.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Hardware tightening:</strong> Use a wrench or socket set to tighten every bolt and nut visible on the door: roller bracket bolts, hinge screws, track mounting brackets. Vibration from thousands of cycles works hardware loose over winter.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Weatherstripping inspection:</strong> Check the full perimeter of the door frame (both sides and the top) for cracks, brittleness, or sections that have pulled away. Replace any sections that do not compress fully. Full replacement kits cost $15 to $30.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Bottom seal inspection:</strong> Close the door and kneel down to look along the bottom. No daylight should be visible anywhere. Press your hand against the seal. You should feel no airflow. Any gap wider than 1/4 inch means replacement is needed. After replacing, coat the new seal with silicone spray to prevent summer UV degradation and fall ice bonding.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Opener System</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Battery backup test:</strong> Disconnect the opener from its wall outlet and test whether the door opens and closes on battery power only. Replace the battery if it is more than 2 years old or if backup operation feels sluggish.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Remote battery check:</strong> Replace remote batteries if the door only responds at close range. Cold weather drains batteries faster than normal. Spring is a good time to refresh them regardless.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Firmware update:</strong> If your opener is WiFi-enabled (Chamberlain, LiftMaster with myQ, or Genie with Aladdin Connect), check the app for available firmware updates. Updated firmware can improve connectivity, fix bugs, and add safety features.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Floor System</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Full floor inspection:</strong> Look for new cracks, spalling (surface flaking), or oil stains. Hairline cracks under 1/8 inch wide are typically cosmetic and stable. Cracks wider than 1/4 inch or growing in length need attention. See our <Link href='/problems/cracked-garage-floor' className='text-amber-700 hover:text-amber-800 underline'>cracked garage floor guide</Link> for assessment.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Oil stain treatment:</strong> Any oil stains visible after winter should be treated before summer heat bakes them deeper into the concrete. See our <Link href='/problems/garage-floor-oil-stains' className='text-amber-700 hover:text-amber-800 underline'>garage floor oil stains guide</Link> for method selection by stain age.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Seal or coating check:</strong> If your floor has epoxy or a penetrating sealer, check for chips, peeling, or worn areas. Touch up any damaged sections before summer vehicle traffic makes them worse.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Lighting System</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Bulb check:</strong> Test every light in the garage. Replace any burned-out bulbs with 5000K LED fixtures. Check that the opener&apos;s bulb is a garage-door-opener-rated LED. Standard LED bulbs can emit radio frequency interference that disrupts the opener&apos;s remote signal.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Fixture inspection:</strong> Check that all ceiling-mounted fixtures are secure. Vibration from the door opener can loosen fixture mounting hardware over time.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Pest Entry Points</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-6'><strong>Perimeter inspection:</strong> Walk the full interior perimeter and look for gaps around pipes, conduits, electrical boxes, and where the wall meets the foundation. Mice can fit through a 1/4-inch gap. Seal any openings with expanding foam or steel wool packed into larger gaps before being sealed with foam.</p>
        </section>

        {/* Summer */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Summer: Heat and UV Protection (June to August)</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Summer maintenance is shorter than spring but important in specific ways. Heat thins lubricants, UV degrades rubber seals, and high temperatures in an uninsulated garage can damage stored materials and stress the opener motor.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>Estimated time:</strong> 30 to 45 minutes</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Estimated cost:</strong> $0 to $20</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Door System</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Lubricant re-check:</strong> In climates where temperatures regularly exceed 90 degrees Fahrenheit, silicone spray applied in spring can thin and migrate off bearing surfaces by July. A quick re-application on rollers and hinges in June or July takes 10 minutes and prevents dry-bearing noise and accelerated wear.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Sun sensor check:</strong> If your garage faces west or south, direct afternoon sunlight hitting the photo eye receiving sensor causes false beam interruptions that prevent the door from closing. Check whether the receiving sensor is getting direct sun in late afternoon. A small cardboard sun shade over the sensor takes 5 minutes to make and eliminates the problem.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Seal condition check:</strong> Rubber seals degrade significantly faster under UV exposure and heat. Check the bottom seal and perimeter weatherstripping in July. Seals that were supple in spring may have become brittle or cracked by midsummer.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Ventilation System</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Fan and vent inspection:</strong> If your garage has a ceiling fan, wall fan, or exhaust vent, test it and check that the blades or louvers move freely. Clean any dust accumulation from fan blades. Built-up dust reduces airflow efficiency and increases motor load.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Insulation gap check:</strong> Walk the garage at the hottest time of day and feel the walls and ceiling for hot spots. A section of wall that is significantly hotter than adjacent sections indicates a gap in insulation. Air gaps and missing insulation sections are easier to identify in summer heat than in any other season.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>CO detector check:</strong> If you have a combustion heater, propane, or vehicles that start in the garage, test the CO detector battery mid-summer as a secondary check between the annual October replacement.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>See our <Link href='/guides/garage-ventilation-guide' className='text-amber-700 hover:text-amber-800 underline'>garage ventilation guide</Link> for full CFM calculations and ventilation system options.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Storage System</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Heat-sensitive materials audit:</strong> Check that latex paint, water-based finishes, caulk, and adhesives have not been left in uninsulated areas where summer heat can degrade them. These materials do not require freezing to be damaged. Sustained temperatures above 90 degrees Fahrenheit can cause latex paint to thicken and skin over. Move them to a cooler location if needed.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-6'><strong>Vehicle battery check:</strong> Extreme heat degrades car batteries faster than cold. If your vehicle is parked in a hot uninsulated garage daily through summer, check the battery condition before fall. A battery that is borderline in September is very likely to fail on a cold November morning.</p>
        </section>

        {/* Fall */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Fall: Pre-Winter Preparation (September to November)</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Fall is the second most important maintenance session and the most time-sensitive. Everything that needs to happen before the first freeze must happen in this window. Caulk will not cure below 40 degrees. Sealers need 50 degrees minimum. Lubricants apply poorly in the cold. The window is October, not December.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>Estimated time:</strong> 90 to 120 minutes</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Estimated cost:</strong> $30 to $150</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Door System</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Full re-lubrication:</strong> Re-apply silicone spray to all hinges, roller bearings, torsion spring coils, and the top of the vertical tracks. Do this even if you lubricated in spring. Cold thickens lubricants. A fresh October application prevents the stiff, noisy operation that becomes a motor-straining problem by January.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Bottom seal treatment:</strong> Apply silicone spray to the bottom seal after inspecting it. Silicone prevents the rubber from bonding to ice overnight and tearing when the opener tries to open the door in the morning. This single step prevents the most common winter garage door failure.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Balance test (repeat):</strong> Repeat the spring balance test in fall. Springs that barely passed in March may fail the test by October after another 1,500 cycles. If springs are 6 or more years old and the door feels heavier than it did in spring, schedule proactive replacement before the worst freeze of winter.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Battery backup test (repeat):</strong> Cold reduces battery backup performance by 20 to 40 percent. A battery that performed well in spring testing may not survive a January power outage. Replace any battery over 2 years old in October.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Sealing and Insulation</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Caulking audit:</strong> Walk the full perimeter and caulk any gaps around windows, the wall-foundation joint, and pipe or conduit penetrations. Use exterior-grade paintable caulk for most gaps. Use expanding foam for gaps larger than 1/2 inch. Do this before the first forecast frost. Caulk will not cure below 40 degrees Fahrenheit.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Door insulation check:</strong> If your garage door is uninsulated (effective R-value of 0 to 2), install a foam board insulation kit before winter. Cost: $50 to $100 for a two-car garage kit. Benefit: garage temperature 10 to 12 degrees warmer on cold days, reduced opener motor load, lower heating costs if you heat the space. See our <Link href='/guides/how-to-winterize-your-garage' className='text-amber-700 hover:text-amber-800 underline'>garage winterization guide</Link> for the complete pre-winter checklist.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Heating System</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Heater test:</strong> Before you need it, test your garage heater. Run it for 10 minutes and confirm it reaches operating temperature without unusual smells or sounds. For gas heaters, check the vent pipe for bird and squirrel nests that accumulated over summer. For portable propane heaters, test the CO detector before the first use.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>CO detector battery:</strong> Replace the CO detector battery every October regardless of whether it tested functional earlier in the year. This is the same rhythm as smoke detector battery replacement and ensures the device is fresh for the months when it matters most.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Pipe Protection</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>If your garage has a utility sink, hose bib, or water supply line running through it: wrap exposed pipes with foam insulation sleeves ($1 to $3 per linear foot), shut off and drain outdoor hose bibs, and consider a self-regulating heat cable for pipes in very cold sections of the garage.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>A burst pipe in the garage is a $500 to $5,000 repair. Foam sleeve insulation is $20 to $40 total. Do it in October.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Temperature-Sensitive Materials</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-6'>Move indoors before the first freeze: latex paint, water-based stains and finishes, caulk and adhesives, and car care products. Charge lithium-ion batteries in cordless tools and bring them inside. Apply machine oil to bare metal tool surfaces to prevent rust from winter humidity.</p>
        </section>

        {/* Annual */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>The Annual Session: Once Per Year</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>These tasks do not have a season. Pick the one that makes most sense for your schedule and do them together.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Spring tends to work well</strong> because you are already doing the full spring session and can add these tasks without a separate trip to the garage.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Professional inspection:</strong> Schedule a professional garage door tune-up once a year. A qualified technician checks spring tension precisely, inspects cables and drums for wear, adjusts opener force settings, and identifies issues that visual inspection misses. Cost: $75 to $150 for a standard residential tune-up. This is the one task most homeowners skip and the one that catches problems before they become emergencies.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Storage system audit:</strong> Inspect every wall track, ceiling rack, and cabinet in the garage. Check that all wall anchors are tight, ceiling rack bolts are seated in joists, and cabinet doors open and close properly. Overloaded or improperly mounted storage is a safety hazard, not just an organizational problem.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Opener age assessment:</strong> If your opener is approaching 10 years old, note it. At 12 to 15 years, start budgeting for replacement even if it is currently functional. Modern openers are quieter, safer, and include battery backup and WiFi that older units lack. See our <Link href='/reviews/best-garage-door-openers' className='text-amber-700 hover:text-amber-800 underline'>best garage door openers guide</Link> for current picks.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-6'><strong>Floor coating assessment:</strong> Epoxy and polycuramine coatings typically last 4 to 7 years DIY and 10 to 20 years professional. Penetrating sealers need reapplication every 2 to 3 years. Note when yours was last applied and plan the next application accordingly. See our <Link href='/cost-guides/epoxy-garage-floor-cost' className='text-amber-700 hover:text-amber-800 underline'>epoxy floor cost guide</Link> for comparison.</p>
        </section>

        {/* Maintenance Cost Summary */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Maintenance Cost Summary</h2>
          <div className='overflow-x-auto mb-4'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Task</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>DIY Cost</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Pro Cost</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Frequency</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Lubrication (silicone spray, one can)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$10</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>N/A</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>2 to 3 times per year</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Bottom seal replacement</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$20 to $45</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$75 to $150</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Every 3 to 5 years</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Weatherstripping replacement</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$15 to $30</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$75 to $150</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Every 3 to 5 years</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Spring replacement</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Do not DIY</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$150 to $350</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Every 7 to 10 years</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Professional tune-up</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>N/A</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$75 to $150</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Annually</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Opener battery backup replacement</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$20 to $40</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>N/A</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Every 2 to 3 years</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Floor sealer reapplication</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$25 to $50</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$1 to $3 per sq ft</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Every 2 to 3 years</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>CO detector battery</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$5 to $10</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>N/A</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Annually</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Caulk (one tube)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$5 to $10</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>N/A</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>As needed</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>Total annual DIY cost for a well-maintained garage: $50 to $150</strong></p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Total annual cost including one professional tune-up: $125 to $300</strong></p>
          <p className='text-slate-700 text-sm leading-relaxed mb-6'>The cost of skipping maintenance for 5 years: a broken spring ($350 emergency call), a burned-out opener ($400 replacement), and a floor that needs grinding and recoating ($800 to $2,000). Regular maintenance is not an expense. It is deferred cost prevention.</p>
        </section>

        {/* FAQ */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Frequently Asked Questions</h2>
          <div className='space-y-6'>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>How often should I maintain my garage?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Three full maintenance sessions per year (spring, summer, fall) plus a 5-minute monthly safety check covers every system at the right interval. Spring is the most comprehensive session (60 to 90 minutes covering all nine systems). Summer is a lighter 30-minute check focused on heat-related issues. Fall is the pre-winter session that prevents the most common cold-weather failures. The monthly check takes 5 minutes and covers the three safety tests that should never be skipped.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>What is the most important garage maintenance task?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The auto-reverse test is the single most important monthly task. It tests the safety feature that prevents the door from crushing people and pets. The most important annual task is the professional spring inspection. Springs are the highest-failure-risk component in the garage, and a technician can identify weakening springs before they break rather than after. The most important fall task is re-lubricating the bottom door seal with silicone spray to prevent it from freezing to the floor.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>How long do garage door springs last?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Standard torsion springs are rated for 10,000 cycles (about 7 years at 4 uses per day). High-cycle springs rated for 25,000 cycles last 17 years at the same usage rate. Extension springs last 5 to 7 years. Springs do not fail gradually. They snap suddenly, usually on a cold morning when steel is most brittle. Proactive replacement at year 7 costs $150 to $350. Emergency replacement after a snap costs the same plus an after-hours service premium. See our <Link href='/problems/garage-door-spring-replacement' className='text-amber-700 hover:text-amber-800 underline'>garage door spring replacement guide</Link>.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>How do I know if my garage needs professional maintenance?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Call a professional if: the door fails the balance test, the auto-reverse test cannot be corrected by adjusting the force setting, springs are 7 or more years old, cables appear frayed or slack, the door moves unevenly or jerks during operation, or the opener struggles noticeably to lift the door. For everything else (lubrication, hardware tightening, seal replacement, sensor cleaning), most homeowners can handle the work themselves.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>What lubricant should I use on a garage door?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Use silicone-based spray lubricant for hinges, roller bearings, torsion spring coils, and the bottom seal. Use white lithium grease for chain or screw drive opener mechanisms. Never use WD-40. It is a solvent and degreaser that removes existing lubrication and leaves parts dry within weeks. Never lubricate the inside of the tracks or a belt drive opener&apos;s belt. One $10 can of silicone spray covers three full lubrication sessions.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>How much does annual garage maintenance cost?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The DIY cost for a fully maintained garage runs $50 to $150 per year, primarily a few cans of silicone spray, replacement batteries, and occasional seal or weatherstripping replacement. Adding one professional tune-up per year brings the total to $125 to $300. Skipping maintenance for several years and dealing with emergency repairs instead typically costs $500 to $2,000 per incident. The math strongly favors regular maintenance.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Can I do garage maintenance myself?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Most garage maintenance is straightforward DIY. Lubrication, hardware tightening, sensor cleaning, seal replacement, and all safety tests are homeowner-friendly tasks. The exceptions are torsion springs, extension springs, and lift cables. These are under extreme mechanical tension and should only be adjusted or replaced by a professional. A winding bar that slips during spring work can cause broken fingers, facial fractures, or worse.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>What garage systems need seasonal maintenance?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>All nine garage systems need attention on a seasonal schedule: the door (hinges, rollers, springs, cables, panels), the opener (safety tests, battery backup, firmware), the floor (cracks, stains, coating), lighting (bulbs, fixtures), ventilation (fans, vents, insulation gaps), heating (heater test, CO detector), storage systems (hardware tightening, load inspection), electrical (outlet and circuit check), and the building envelope (seals, weatherstripping, caulk). Most guides cover only the door. This guide covers all nine.</p>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Related Guides</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Link href='/guides/garage-door-maintenance' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Guide</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Door Maintenance</p>
              <p className='text-slate-500 text-xs mt-1'>Deep dive on the door system — springs, rollers, balance test, and lubrication.</p>
            </Link>
            <Link href='/guides/how-to-winterize-your-garage' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Guide</span>
              <p className='font-semibold text-slate-800 text-sm'>How to Winterize Your Garage</p>
              <p className='text-slate-500 text-xs mt-1'>The complete pre-winter checklist with R-values, pipe protection, and heater safety.</p>
            </Link>
            <Link href='/problems/garage-door-spring-replacement' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Problem</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Door Spring Replacement</p>
              <p className='text-slate-500 text-xs mt-1'>What to expect when springs need replacing — costs, signs, and the high-cycle upgrade.</p>
            </Link>
            <Link href='/problems/garage-door-wont-open' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Problem</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Door Won&apos;t Open</p>
              <p className='text-slate-500 text-xs mt-1'>Diagnose and fix the most common door failures.</p>
            </Link>
            <Link href='/guides/garage-workshop-setup' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Guide</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Workshop Setup</p>
              <p className='text-slate-500 text-xs mt-1'>If your garage doubles as a workshop, this covers electrical, ventilation, and year-round comfort.</p>
            </Link>
            <Link href='/reviews/best-garage-heaters' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Review</span>
              <p className='font-semibold text-slate-800 text-sm'>Best Garage Heaters</p>
              <p className='text-slate-500 text-xs mt-1'>Safe heating options for the fall and winter sessions.</p>
            </Link>
          </div>
        </section>

        {/* Glossary */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Glossary</h2>
          <div className='space-y-3'>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Torsion spring</p>
              <p className='text-slate-700 text-sm'>The large coiled spring mounted horizontally above the garage door opening on a metal shaft. It counterbalances the door&apos;s full weight, making a 150 to 400 lb door feel nearly weightless. Standard torsion springs are rated for 10,000 cycles (roughly 7 years at 4 uses per day). Never attempt to adjust or replace without professional training. Stored energy is equivalent to hundreds of foot-pounds of force.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Auto-reverse mechanism</p>
              <p className='text-slate-700 text-sm'>A safety feature required by federal law on all residential openers manufactured after January 1, 1991. It detects resistance when the door contacts an object during closing and reverses the door. Must be tested monthly using the 2x4 board method. A door that fails this test is a documented safety hazard and should not be operated automatically until corrected.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Balance test</p>
              <p className='text-slate-700 text-sm'>A diagnostic check performed by disconnecting the opener and lifting the door manually to 3 to 4 feet. A balanced door holds its position. A door that descends has weakening springs. A door that rises is over-tensioned. Both conditions require professional spring adjustment. Perform this test every spring and fall.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Silicone spray lubricant</p>
              <p className='text-slate-700 text-sm'>A dry, non-greasy lubricant appropriate for all garage door moving parts. Does not thicken in cold, does not attract dust, and does not leave residue. Correct for hinges, roller bearings, spring coils, and the bottom seal. One $10 can covers two to three complete lubrication sessions.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Photo eye sensors</p>
              <p className='text-slate-700 text-sm'>Two small infrared sensors mounted near the floor on either side of the garage door opening. One transmits a beam, the other receives it. If anything breaks the beam during closing, the door stops and reverses. Required on all openers manufactured after January 1, 1993. Clean monthly and test the beam interruption response.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Battery backup</p>
              <p className='text-slate-700 text-sm'>A rechargeable battery system built into many modern openers that allows operation during power outages. Performance degrades in cold temperatures. A battery that passes a September test may fail a January outage. Test twice per year (spring and fall) and replace every 2 to 3 years.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>R-value</p>
              <p className='text-slate-700 text-sm'>A measure of a material&apos;s resistance to heat flow. Relevant to garage maintenance for door insulation (target R-8 minimum), wall insulation (R-13 minimum for 2x4 framing), and ceiling insulation (R-30 minimum). Higher R-value means better insulation. An uninsulated single-layer steel garage door has an effective R-value of 0 to 2.</p>
            </div>
            <div>
              <p className='font-semibold text-slate-800 text-sm'>CO detector</p>
              <p className='text-slate-700 text-sm'>A carbon monoxide detector required in any garage with combustion heating, an attached garage where car exhaust enters, or any space with a fuel-powered engine. Install at 5 feet off the floor. Replace the battery every October. Test the device when first installed and at least once per year thereafter.</p>
            </div>
          </div>
        </section>

      </article>

      <BeehiivEmailCapture />

      <LeadForm />

      {/* Schema Scripts */}
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </>
  )
}
