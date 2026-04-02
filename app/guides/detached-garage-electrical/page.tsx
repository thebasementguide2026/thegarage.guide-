import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'How to Run Electricity to a Detached Garage: The Complete Planning Guide | The Garage Guide',
  description: 'How to run electricity to a detached garage. Load calculations, subpanel sizing, underground vs overhead, wire gauge, permits, and what requires a licensed electrician.',
  alternates: {
    canonical: 'https://thegarage.guide/guides/detached-garage-electrical',
  },
  openGraph: {
    title: 'How to Run Electricity to a Detached Garage: The Complete Planning Guide | The Garage Guide',
    description: 'How to run electricity to a detached garage. Load calculations, subpanel sizing, underground vs overhead, wire gauge, permits, and what requires a licensed electrician.',
    url: 'https://thegarage.guide/guides/detached-garage-electrical',
    siteName: 'The Garage Guide',
    type: 'article',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does it cost to run electricity to a detached garage?', acceptedAnswer: { '@type': 'Answer', text: 'Professional installation of a 100-amp subpanel with a 60-foot underground run costs $1,800 to $3,200 on average, including the subpanel, feeder wire, conduit, trenching, grounding system, and panel connection. A minimal single-circuit overhead run costs $500 to $900. The largest cost variables are run distance, whether underground or overhead, and local labor rates. Always get at least two quotes.' } },
    { '@type': 'Question', name: 'Do I need a subpanel for a detached garage?', acceptedAnswer: { '@type': 'Answer', text: 'You need a subpanel if you want more than one circuit in the garage. NEC 210.11(C)(4) requires at least one dedicated 20-amp circuit for garage receptacles. Any garage used as a workspace, for EV charging, or with a heater needs multiple circuits, which requires a subpanel. For almost any practical use, a 100-amp subpanel is the right answer.' } },
    { '@type': 'Question', name: 'How deep does the electrical conduit need to be buried?', acceptedAnswer: { '@type': 'Answer', text: 'PVC conduit must be buried at least 18 inches deep under NEC requirements. Direct-burial cable without conduit requires 24 inches. Under a driveway or vehicle travel area, deeper burial is required: 24 inches for conduit, 30 inches for direct-burial cable. Always call 811 (the national Dig Safe number) before digging to have underground utilities marked. This is free and legally required in most states.' } },
    { '@type': 'Question', name: 'Can I wire my detached garage myself?', acceptedAnswer: { '@type': 'Answer', text: 'Partially. A competent homeowner can dig the trench, lay conduit, pull wire, mount the subpanel box, and run branch circuit wiring inside the garage. What requires a licensed electrician is connecting the feeder to your main panel and making the final subpanel connections. You must also pull a permit. Unpermitted electrical work in a detached structure creates insurance and resale liability that is not worth the permit fee saved.' } },
    { '@type': 'Question', name: 'What size subpanel do I need for a detached garage?', acceptedAnswer: { '@type': 'Answer', text: 'Calculate your actual peak load using the device amperage table before choosing a panel size. For a basic workshop (lighting, outlets, a table saw, and a dust collector), 60 amps is sufficient. Add an EV charger, a heater, or an air compressor and you need 100 amps. The material cost difference between 60-amp and 100-amp is $50 to $150. Choose 100-amp unless your load calculation clearly indicates 60 amps is enough with room to spare.' } },
    { '@type': 'Question', name: 'Do I need a ground rod for a detached garage subpanel?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. NEC 250.32 requires a grounding electrode system at any detached structure fed by a feeder. The standard residential solution is two copper-clad ground rods driven 6 feet apart outside the garage, connected with #6 bare copper wire to the subpanel\'s ground bus. Do not bond the neutral and ground bus bars in the subpanel. That bond belongs only at the main service panel.' } },
    { '@type': 'Question', name: 'Can I use aluminum wire for the feeder run?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, for feeder runs. Modern aluminum THHN/THWN-2 conductors are code-compliant for feeder use when sized one gauge larger than the copper equivalent and terminated correctly. Aluminum #2/0 AWG is appropriate for a 100-amp feeder run. The cost savings over copper on runs over 100 feet can be $200 to $400. Do not use aluminum for branch circuit wiring inside the garage.' } },
    { '@type': 'Question', name: 'Do I need a permit to run electricity to a detached garage?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, in virtually every jurisdiction. Any new electrical service to a detached structure requires a permit and inspection. An unpermitted installation is a liability when you sell the property, may void your homeowner\'s insurance for electrical-related claims, and can require costly retroactive permitting if discovered. Permit fees run $50 to $200. The inspection process also catches errors before they become fire hazards.' } },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Run Electricity to a Detached Garage: The Complete Planning Guide',
  description: 'How to run electricity to a detached garage. Load calculations, subpanel sizing, underground vs overhead, wire gauge, permits, and what requires a licensed electrician.',
  url: 'https://thegarage.guide/guides/detached-garage-electrical',
  publisher: { '@type': 'Organization', name: 'The Garage Guide', url: 'https://thegarage.guide' },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Plan Electrical for a Detached Garage',
  description: 'Step-by-step planning process for running electricity to a detached garage including load calculation, subpanel sizing, run method selection, and permit requirements.',
  totalTime: 'PT2H',
  estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '1800-3200' },
  supply: [
    { '@type': 'HowToSupply', name: '100-amp subpanel with main breaker (24 spaces)' },
    { '@type': 'HowToSupply', name: '4-wire feeder cable (two hots, neutral, ground) sized for run length' },
    { '@type': 'HowToSupply', name: 'Schedule 40 PVC conduit (1.5-inch diameter for 100-amp)' },
    { '@type': 'HowToSupply', name: 'Two 8-foot copper-clad ground rods' },
    { '@type': 'HowToSupply', name: '#6 bare copper wire for grounding electrode system' },
    { '@type': 'HowToSupply', name: '100-amp double-pole breaker for main panel' },
  ],
  tool: [
    { '@type': 'HowToTool', name: 'Trenching shovel or rented trencher' },
    { '@type': 'HowToTool', name: 'Fish tape for pulling wire through conduit' },
    { '@type': 'HowToTool', name: 'Voltage tester' },
    { '@type': 'HowToTool', name: 'Screwdrivers and wire strippers' },
  ],
  step: [
    { '@type': 'HowToStep', name: 'Calculate your load', text: 'List every electrical device you plan to run in the garage and find its amperage from the nameplate. Identify which devices will run simultaneously at peak use. Multiply the total by 1.25 to account for the 80% continuous load rule. Size your subpanel to that number or the next standard size up.' },
    { '@type': 'HowToStep', name: 'Check your main panel', text: 'Open your main electrical panel and confirm available breaker slots and that your main service can support the additional load. A 200-amp service can support a 100-amp garage subpanel if total household load does not exceed 160 amps.' },
    { '@type': 'HowToStep', name: 'Choose subpanel size', text: 'Select 100-amp for any garage with an EV charger, heater, or air compressor. Select 60-amp only for basic workshop use with no high-draw continuous loads. The material cost difference is $50 to $150 — choose 100-amp for future-proofing.' },
    { '@type': 'HowToStep', name: 'Choose run method', text: 'Underground in PVC conduit at 18-inch depth is the recommended method. It is protected from storm damage, required by many municipalities, and allows low-voltage lines in the same trench. Call 811 before digging.' },
    { '@type': 'HowToStep', name: 'Size the wire for the run length', text: 'Use #4 AWG copper for a 100-amp subpanel on runs up to 100 feet. Use #2 AWG for runs of 100 to 200 feet. Keep voltage drop below 3 percent on the feeder run.' },
    { '@type': 'HowToStep', name: 'Pull the permit', text: 'Obtain an electrical permit from your local building department before any work begins. Permit fees are $50 to $200. Unpermitted electrical work creates insurance and resale liability.' },
    { '@type': 'HowToStep', name: 'Install conduit and pull wire', text: 'Dig the trench, lay and glue PVC conduit, and pull the four-wire feeder through. A homeowner can complete this phase. Leave 18 inches of wire at each end for connections.' },
    { '@type': 'HowToStep', name: 'Have a licensed electrician make connections', text: 'A licensed electrician connects the feeder to the main panel breaker and to the subpanel main lugs, installs the grounding electrode system, and signs off on the installation for permit inspection.' },
  ],
}

export default function DetachedGarageElectricalPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Detached Garage Electrical' }]} />
      <article className='container-custom py-8 max-w-4xl mx-auto'>
        {/* Hero Section */}
        <div className='relative rounded-xl overflow-hidden mb-8' style={{ minHeight: '400px' }}>
          <Image src='/images/garage electrical.jpg' alt='Electrician working on a residential subpanel installation in a detached garage' fill className='object-cover' priority />
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent' />
          <div className='absolute bottom-0 left-0 right-0 p-6 md:p-10'>
            <span className='text-amber-700 font-bold text-xs uppercase tracking-wider'>Guide</span>
            <h1 className='text-3xl md:text-4xl font-bold text-white mt-1'>How to Run Electricity to a Detached Garage: <span className='text-amber-500'>The Complete Planning Guide</span></h1>
            <p className='text-gray-200 mt-2 text-sm md:text-base max-w-2xl'>How to run electricity to a detached garage. Load calculations, subpanel sizing, underground vs overhead, wire gauge, permits, and what requires a licensed electrician.</p>
          </div>
        </div>

        {/* Byline Row */}
        <div className='flex items-center gap-3 mb-4'>
          <div className='w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center text-white font-bold text-sm'>GG</div>
          <div>
            <p className='text-slate-800 font-semibold text-sm'>The Garage Guide</p>
            <p className='text-gray-500 text-xs'>Updated Apr 2026 · 15 min read</p>
          </div>
          <span className='ml-auto inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded'>Guide</span>
        </div>

        {/* TL;DR */}
        <div style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75', padding: '16px 20px' }} className='rounded-r-lg mb-4'>
          <p style={{ color: '#1D9E75' }} className='text-sm font-bold mb-2'>TL;DR</p>
          <p className='text-slate-700 text-sm leading-relaxed'>Running electricity to a detached garage costs $1,200 to $4,500 professionally installed for a typical 50 to 100-foot run with a subpanel. The single most important decision you make is calculating your actual load before sizing the panel, not the other way around. Most homeowners undersize and regret it. A 60-amp subpanel handles lighting, outlets, and a few power tools. A 100-amp subpanel handles all of that plus an EV charger, a heater, and an air compressor running simultaneously. The price difference between 60-amp and 100-amp is small. Choose 100-amp. Always hire a licensed electrician for the subpanel connection and permit work.</p>
        </div>

        {/* Intro */}
        <p className='text-slate-700 text-sm leading-relaxed mb-4'>The garage is done. The floor is sealed, the workbench is in, the storage system is up. There is just one problem: a single 15-amp circuit from 1987 that trips every time you run the table saw and the shop vac at the same time. Or worse: no power at all because the detached garage was never wired.</p>
        <p className='text-slate-700 text-sm leading-relaxed mb-4'>Getting electricity right in a detached garage is the infrastructure decision that determines how usable the space is for the next 20 years. Do it once, do it correctly, and you never think about it again. Cut corners on panel size, skip the permit, or use the wrong wire for the run length, and you spend years managing an electrical system that does not meet your needs and may not be safe.</p>
        <p className='text-slate-700 text-sm leading-relaxed mb-6'>This guide covers the full planning process in the right order, starting with load calculation before touching anything else.</p>

        {/* The Load-First Rule */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>The Load-First Rule</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Before discussing subpanel size, wire gauge, or run method, calculate what you will actually run in this garage. This sounds obvious. Almost nobody does it. The typical pattern is: choose a 60-amp subpanel because it sounds like plenty, install it, add an EV charger two years later, and discover the panel is full.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>The Load-First Rule:</strong> Size your electrical system for what you will run at peak load in five years, not what you are running today. The incremental cost difference between a 60-amp and 100-amp subpanel is $50 to $150 in materials. The cost of retrofitting an undersized system is $800 to $2,500. Do the calculation first.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>How to Calculate Your Load</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>List every electrical device you plan to run in the garage and find its amperage from the nameplate on the device or its manual. Then identify which devices will run simultaneously at peak use.</p>

          {/* Device Load Table */}
          <div className='overflow-x-auto mb-4'>
            <table className='w-full text-sm border-collapse border border-slate-300'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Device</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Typical Amperage</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>LED shop lights (4 fixtures)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>2 to 4A at 120V</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Negligible load</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Garage door opener</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>6A at 120V</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Brief startup surge only</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Cordless tool chargers (4 at once)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>4 to 8A at 120V</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Light continuous load</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Shop vacuum</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>6 to 9A at 120V</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Often runs with tools</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Circular saw or jigsaw</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>8 to 15A at 120V</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Short duration</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Table saw (standard)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>13 to 18A at 120V or 8 to 10A at 240V</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Heaviest single tool load</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Air compressor (1.5 to 2 HP)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>15 to 20A at 120V or 8 to 10A at 240V</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Runs simultaneously with tools</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Dust collector (1 HP)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>8 to 12A at 120V or 5 to 7A at 240V</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Runs simultaneously with tools</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Electric space heater (5000W)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>20A at 240V</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Continuous load in winter</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Mini-split heat pump (18,000 BTU)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>15 to 20A at 240V</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Continuous load year-round</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Level 2 EV charger (40A)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>40A at 240V</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Long duration, often overnight</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Welder (small MIG)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>20 to 30A at 240V</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Occasional, high current</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Peak load example for a workshop garage:</strong></p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Table saw (10A at 240V) + dust collector (6A at 240V) + shop vac (9A at 120V) + lights (3A at 120V) + heater (20A at 240V) = approximately 36A at 240V peak during a winter work session. A 60-amp subpanel handles this comfortably.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Add an EV charger (40A at 240V) and the same scenario exceeds 60 amps. You need 100 amps.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>The safe approach:</strong> Add up your realistic peak load, multiply by 1.25 (the 80% continuous load rule from NEC 210.19), and size the subpanel to that number or the next standard size up.</p>
        </section>

        {/* Critical First Step */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Critical First Step: Check Your Main Panel</h2>
          <div className='bg-red-50 border-l-4 border-red-500 p-4 rounded mb-4'>
            <h3 className='font-semibold text-red-800 text-sm mb-1'>Critical First Step</h3>
            <p className='text-slate-700 text-sm'>Before planning anything, open your main electrical panel and check two things: (1) how many open breaker slots are available, and (2) whether your main breaker is rated for the additional load. A 200-amp main service can support a 100-amp garage subpanel if the total household load does not exceed 80 percent of 200 amps (160 amps). If your main panel is a 100-amp service or is already heavily loaded, you may need a service upgrade before adding a garage subpanel. This is the one step that can change the entire cost picture of the project. Find out before you hire anyone.</p>
          </div>
        </section>

        {/* Subpanel or Single Circuit */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Subpanel or Single Circuit?</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>The right answer depends entirely on what you need to run.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Single branch circuit (up to 20A at 120V or 30A at 240V):</strong> Appropriate only for the most minimal garage use: basic lighting and a single outlet for a small tool or battery charger. NEC 210.11(C)(4) requires at least one dedicated 20-amp 120V circuit for garage receptacles in any powered detached garage. A single circuit cannot power multiple 240V tools or an EV charger. If you need more than one circuit, you need a subpanel.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Subpanel (60A, 100A, or larger):</strong> The right choice for any garage used as a workspace, for EV charging, or for any heating or cooling. A subpanel gives you a distribution point for multiple circuits in the garage, a local disconnect (required by NEC 225.31 for detached structures), and the capacity to add circuits later without re-running the feeder.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>60-amp vs 100-amp subpanel:</strong></p>

          {/* Subpanel Comparison Table */}
          <div className='overflow-x-auto mb-4'>
            <table className='w-full text-sm border-collapse border border-slate-300'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'></th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>60-Amp Subpanel</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>100-Amp Subpanel</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Panel cost</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$40 to $80</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$60 to $120</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Feeder wire (copper, 60-foot run)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>#6 AWG ($80 to $120)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>#4 AWG ($120 to $180)</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Breaker in main panel</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>60A double-pole ($15 to $30)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>100A double-pole ($25 to $50)</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Handles EV charger (40A)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>No (only 48A usable capacity)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Yes (80A usable capacity)</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Handles heater + tools simultaneously</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Marginal</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Comfortable</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Future-proof</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Requires upgrade for EV or HVAC</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Handles most residential needs</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700 font-medium'>Total material cost difference</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Baseline</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$50 to $150 more</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>The recommendation is always 100-amp.</strong> The material cost difference is $50 to $150. The labor cost is identical. A 100-amp subpanel with a 24-space panel gives you room for every circuit you need now and for the next 20 years.</p>
        </section>

        {/* Underground vs Overhead */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Underground vs Overhead: Which Run Method Is Right?</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>This is the decision most homeowners agonize over unnecessarily. The right answer is usually underground, and here is why.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Underground Run</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>How it works:</strong> A trench is dug from the main panel to the garage. PVC conduit is laid in the trench and wire is pulled through it. The trench is backfilled.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>NEC depth requirements:</strong></p>
          <ul className='list-disc pl-5 mb-4 space-y-1'>
            <li className='text-slate-700 text-sm'>PVC conduit: 18 inches minimum depth</li>
            <li className='text-slate-700 text-sm'>Direct-burial cable (UF-B, without conduit): 24 inches minimum depth</li>
            <li className='text-slate-700 text-sm'>Under a driveway or vehicle path: 24 inches minimum for conduit, deeper is better</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>Advantages:</strong></p>
          <ul className='list-disc pl-5 mb-4 space-y-1'>
            <li className='text-slate-700 text-sm'>No visible wires above ground</li>
            <li className='text-slate-700 text-sm'>Protected from storm damage and wind</li>
            <li className='text-slate-700 text-sm'>No height clearance concerns near structures or trees</li>
            <li className='text-slate-700 text-sm'>Required by many municipalities (overhead not permitted in residential areas in many jurisdictions)</li>
            <li className='text-slate-700 text-sm'>Easier to add low-voltage lines (ethernet, security camera) in the same trench</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>Disadvantages:</strong></p>
          <ul className='list-disc pl-5 mb-4 space-y-1'>
            <li className='text-slate-700 text-sm'>Higher upfront cost due to trenching ($5 to $12 per linear foot for trenching labor)</li>
            <li className='text-slate-700 text-sm'>Harder to repair if a problem develops underground</li>
            <li className='text-slate-700 text-sm'>Must call 811 (Dig Safe) before digging. Hitting a utility line is dangerous and expensive</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-6'><strong>Total underground run cost (professional, 60-foot run, 100-amp subpanel):</strong> $1,500 to $3,000</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Overhead Run</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>How it works:</strong> Wire is run overhead on a mast from the house to the garage, either on a weatherhead or strapped to a messenger cable between structures.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>NEC clearance requirements:</strong></p>
          <ul className='list-disc pl-5 mb-4 space-y-1'>
            <li className='text-slate-700 text-sm'>Above driveways and areas accessible to vehicles: 12 feet minimum</li>
            <li className='text-slate-700 text-sm'>Above pedestrian walkways: 10 feet minimum</li>
            <li className='text-slate-700 text-sm'>Above the roof of the garage: 3 feet minimum clearance from the roof surface</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>Advantages:</strong></p>
          <ul className='list-disc pl-5 mb-4 space-y-1'>
            <li className='text-slate-700 text-sm'>Less expensive upfront (no trenching)</li>
            <li className='text-slate-700 text-sm'>Easier to inspect and repair</li>
            <li className='text-slate-700 text-sm'>Faster installation</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>Disadvantages:</strong></p>
          <ul className='list-disc pl-5 mb-4 space-y-1'>
            <li className='text-slate-700 text-sm'>Visible wires affect curb appeal</li>
            <li className='text-slate-700 text-sm'>Vulnerable to storm damage, ice loading, and falling branches</li>
            <li className='text-slate-700 text-sm'>Clearance requirements can be difficult to meet over driveways</li>
            <li className='text-slate-700 text-sm'>Many municipalities prohibit overhead runs in residential areas. Check local codes before planning</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Total overhead run cost (professional, 60-foot span, 100-amp subpanel):</strong> $800 to $2,000</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>The practical recommendation:</strong> Go underground. The incremental cost over overhead is typically $300 to $600 for a standard residential run. The permanence, appearance, and code compliance advantages are worth it on any property you plan to own for more than a few years.</p>
        </section>

        {/* Wire Gauge and Voltage Drop */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Wire Gauge and Voltage Drop</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>The longer the run from your main panel to the garage subpanel, the more important wire gauge becomes. Undersized wire causes voltage drop. The actual voltage at the garage is lower than at the main panel, which causes tool motors to run hot, trip breakers, and wear out faster.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>NEC standard:</strong> Keep voltage drop below 3 percent on the feeder run.</p>

          {/* Wire Gauge Table */}
          <div className='overflow-x-auto mb-4'>
            <table className='w-full text-sm border-collapse border border-slate-300'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Subpanel Size</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Run Length</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Minimum Wire Gauge (Copper)</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>60A</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Up to 75 feet</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>#6 AWG</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Standard for most residential runs</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>60A</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>75 to 150 feet</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>#4 AWG</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Upsize to manage voltage drop</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>100A</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Up to 100 feet</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>#4 AWG</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Standard for 100A residential runs</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>100A</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>100 to 200 feet</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>#2 AWG</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Required to stay under 3% drop</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>100A</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Over 200 feet</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>#1/0 AWG or larger</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Consult electrician for load analysis</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Aluminum wire consideration:</strong> For runs over 100 feet, aluminum feeder wire is a legitimate cost-saving option. Modern aluminum conductors (THHN/THWN-2 rated) are code-compliant for feeder runs when properly sized (one gauge larger than copper equivalent) and terminated correctly. Aluminum feeder for a 100-amp subpanel typically runs #2/0 AWG. The material cost savings over copper on a long run can be $200 to $400. Aluminum is not appropriate for branch circuit wiring inside the garage.</p>
        </section>

        {/* NEC Requirements */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>NEC Requirements for Detached Garage Electrical</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>These are the key <a href='https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70' target='_blank' rel='noopener noreferrer' className='text-amber-700 underline'>National Electrical Code</a> requirements that apply to any powered detached garage. Your local jurisdiction may have additional requirements or amendments.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Disconnect (NEC 225.31):</strong> Every detached structure supplied with electricity must have a disconnecting means at a readily accessible location either outside or immediately inside the building. If you install a subpanel with a main breaker, the main breaker serves as the disconnect.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Grounding electrode system (NEC 250.32):</strong> Any detached structure supplied by a feeder (more than a single 20-amp branch circuit) must have its own grounding electrode system, typically two ground rods driven into the earth at least 6 feet apart, connected to the subpanel&apos;s ground bus with #6 bare copper wire. Do not bond the neutral and ground bus bars in the subpanel (they are bonded only at the main service panel).</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Four-wire feeder:</strong> The feeder run from the main panel to the garage subpanel must be four conductors: two hot wires, one neutral, and one ground. The neutral and ground must remain separate in the subpanel. Three-wire feeders (without a separate ground conductor) are not permitted for new installations under the current NEC.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>GFCI protection (NEC 210.8):</strong> All 125V through 250V receptacles in a garage must be GFCI protected. This applies to every outlet, not just those near water sources.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Dedicated garage circuit (NEC 210.11(C)(4)):</strong> At least one dedicated 20-amp 120V circuit must supply the garage receptacles. This circuit cannot supply other outlets (with the exception of readily accessible outdoor outlets).</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Lighting circuit:</strong> At least one wall-switched lighting outlet is required (NEC 210.70). It is best practice to put lighting on a separate circuit from receptacles so that a tripped breaker on the tool circuit does not leave you in the dark.</p>
        </section>

        {/* Licensed Electrician vs DIY */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>What Requires a Licensed Electrician vs. What You Can Do Yourself</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>This is the most practically useful section in the guide, and it is the section most articles either skip entirely or get wrong by being too restrictive in one direction or too permissive in the other.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>Always requires a licensed electrician:</strong></p>
          <ul className='list-disc pl-5 mb-4 space-y-1'>
            <li className='text-slate-700 text-sm'>Connecting the feeder to your main panel (working in the main panel with live conductors is dangerous and typically requires a permit pulled by a licensed electrician)</li>
            <li className='text-slate-700 text-sm'>Connecting the feeder to the subpanel main lugs</li>
            <li className='text-slate-700 text-sm'>Any work on the utility meter or service entrance equipment</li>
            <li className='text-slate-700 text-sm'>Final inspection sign-off in jurisdictions that require licensed work</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>A competent homeowner can typically do:</strong></p>
          <ul className='list-disc pl-5 mb-4 space-y-1'>
            <li className='text-slate-700 text-sm'>Digging the trench (or hiring a landscaper to do it)</li>
            <li className='text-slate-700 text-sm'>Laying and gluing PVC conduit in the trench</li>
            <li className='text-slate-700 text-sm'>Pulling wire through the conduit</li>
            <li className='text-slate-700 text-sm'>Mounting the subpanel box on the wall</li>
            <li className='text-slate-700 text-sm'>Running branch circuit wiring inside the garage (after the subpanel is energized by the electrician)</li>
            <li className='text-slate-700 text-sm'>Installing outlets, switches, and light fixtures</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>The smart approach:</strong> Pull the permit yourself (or have the electrician pull it). Do the trench, conduit, and wire pull. Have the electrician make the connections at both ends, inspect your work, and sign off. This hybrid approach can save $400 to $800 in labor while keeping the dangerous work in professional hands.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Always pull a permit.</strong> An unpermitted electrical installation in a detached structure is a liability when you sell the property, may void your homeowner&apos;s insurance for any fire or damage related to the electrical system, and requires a retroactive permit (which may require tearing out and redoing work) if discovered during a future inspection. The permit fee is $50 to $200. It is not optional.</p>
        </section>

        {/* What a Complete Installation Includes */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>What a Complete Installation Includes</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>A properly completed detached garage electrical installation includes all of the following:</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>At the main panel:</strong></p>
          <ul className='list-disc pl-5 mb-4 space-y-1'>
            <li className='text-slate-700 text-sm'>New double-pole breaker sized for the subpanel (60A or 100A)</li>
            <li className='text-slate-700 text-sm'>Four-wire feeder conductors connected to the breaker</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>The feeder run:</strong></p>
          <ul className='list-disc pl-5 mb-4 space-y-1'>
            <li className='text-slate-700 text-sm'>PVC conduit (schedule 40 minimum) buried at 18-inch depth</li>
            <li className='text-slate-700 text-sm'>Four-wire feeder (two hots, neutral, ground) pulled through conduit</li>
            <li className='text-slate-700 text-sm'>Weatherproof conduit fittings where conduit enters both structures</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>At the garage subpanel:</strong></p>
          <ul className='list-disc pl-5 mb-4 space-y-1'>
            <li className='text-slate-700 text-sm'>Subpanel with main breaker (the main breaker serves as the building disconnect)</li>
            <li className='text-slate-700 text-sm'>Neutral and ground bus bars kept separate (not bonded)</li>
            <li className='text-slate-700 text-sm'>Two ground rods driven 6 feet apart outside the garage, connected to ground bus</li>
            <li className='text-slate-700 text-sm'>All circuits properly labeled</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>Minimum garage circuits (for a <Link href='/guides/garage-workshop-setup' className='text-amber-700 underline'>workshop setup</Link>):</strong></p>
          <ul className='list-disc pl-5 mb-4 space-y-1'>
            <li className='text-slate-700 text-sm'>One dedicated 20A 120V circuit for receptacles (required by NEC)</li>
            <li className='text-slate-700 text-sm'>One 20A 120V circuit for lighting (separate from receptacles)</li>
            <li className='text-slate-700 text-sm'>One or two 20A 240V circuits for stationary tools</li>
            <li className='text-slate-700 text-sm'>One dedicated 240V circuit for <Link href='/guides/ev-charger-installation' className='text-amber-700 underline'>EV charger</Link> if planned (40A or 50A)</li>
            <li className='text-slate-700 text-sm'>One 240V circuit for heater if planned (20A to 30A)</li>
          </ul>
        </section>

        {/* What It All Costs */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>What It All Costs</h2>
          <div className='overflow-x-auto mb-4'>
            <table className='w-full text-sm border-collapse border border-slate-300'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Scenario</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>DIY Materials</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Professional Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Single 20A circuit, overhead run, 50 feet</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$150 to $300</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$500 to $900</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>60A subpanel, underground run, 60 feet</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$400 to $700</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$1,500 to $2,500</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>100A subpanel, underground run, 60 feet</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$500 to $900</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$1,800 to $3,200</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>100A subpanel, underground run, 100 feet</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$700 to $1,200</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$2,200 to $4,000</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>100A subpanel, underground run, 150 feet</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$900 to $1,500</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$2,800 to $5,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>Permit cost:</strong> $50 to $200 depending on jurisdiction</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>Ground rods and wire:</strong> $40 to $80 (two 8-foot copper-clad rods plus #6 wire)</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Trenching (if hiring out):</strong> $5 to $12 per linear foot</p>
        </section>

        {/* Seasonal Considerations */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Seasonal Considerations</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Summer:</strong> If you plan to cool the garage with a window AC or mini-split, include that circuit in your load calculation before sizing the subpanel. A mini-split requires a dedicated 240V circuit (15A to 20A). Sizing the subpanel without accounting for cooling is one of the most common garage electrical planning mistakes in warm climates.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Winter:</strong> A garage heater is a continuous 240V load, the most demanding type. A 5,000W electric heater draws 20A continuously. Add that to your peak workshop load to confirm your subpanel can handle both simultaneously. If heating is a priority, the 100-amp subpanel is even more essential. See our <Link href='/reviews/best-garage-heaters' className='text-amber-700 underline'>best garage heaters guide</Link> for circuit requirements by heater type.</p>
        </section>

        {/* FAQ */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Frequently Asked Questions</h2>
          <div className='space-y-6'>
            <div>
              <h3 className='text-base font-bold text-slate-900 mb-2'>How much does it cost to run electricity to a detached garage?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Professional installation of a 100-amp subpanel with a 60-foot underground run costs $1,800 to $3,200 on average, including the subpanel, feeder wire, conduit, trenching, grounding system, and panel connection. A minimal single-circuit overhead run costs $500 to $900. The largest cost variables are run distance, whether underground or overhead, and local labor rates. Always get at least two quotes.</p>
            </div>
            <div>
              <h3 className='text-base font-bold text-slate-900 mb-2'>Do I need a subpanel for a detached garage?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>You need a subpanel if you want more than one circuit in the garage. NEC 210.11(C)(4) requires at least one dedicated 20-amp circuit for garage receptacles. That single circuit can run overhead without a subpanel. But any garage used as a workspace, for EV charging, or with a heater needs multiple circuits, which requires a subpanel. For almost any practical use, a 100-amp subpanel is the right answer.</p>
            </div>
            <div>
              <h3 className='text-base font-bold text-slate-900 mb-2'>How deep does the electrical conduit need to be buried?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>PVC conduit must be buried at least 18 inches deep under NEC requirements. Direct-burial cable without conduit requires 24 inches. Under a driveway or vehicle travel area, deeper burial is required: 24 inches for conduit, 30 inches for direct-burial cable. Always call 811 (the national Dig Safe number) before digging to have underground utilities marked. This is free and legally required in most states.</p>
            </div>
            <div>
              <h3 className='text-base font-bold text-slate-900 mb-2'>Can I wire my detached garage myself?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Partially. A competent homeowner can dig the trench, lay conduit, pull wire, mount the subpanel box, and run branch circuit wiring inside the garage. What requires a licensed electrician is connecting the feeder to your main panel and making the final subpanel connections. You must also pull a permit. Unpermitted electrical work in a detached structure creates insurance and resale liability that is not worth the permit fee saved.</p>
            </div>
            <div>
              <h3 className='text-base font-bold text-slate-900 mb-2'>What size subpanel do I need for a detached garage?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Calculate your actual peak load using the device amperage table in this guide before choosing a panel size. For a basic workshop (lighting, outlets, a table saw, and a dust collector), 60 amps is sufficient. Add an EV charger, a heater, or an air compressor and you need 100 amps. The material cost difference between 60-amp and 100-amp is $50 to $150. Choose 100-amp unless your load calculation clearly indicates 60 amps is enough with room to spare.</p>
            </div>
            <div>
              <h3 className='text-base font-bold text-slate-900 mb-2'>Do I need a ground rod for a detached garage subpanel?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Yes. NEC 250.32 requires a grounding electrode system at any detached structure fed by a feeder (more than a single 20-amp branch circuit). The standard residential solution is two copper-clad ground rods driven 6 feet apart outside the garage, connected with #6 bare copper wire to the subpanel&apos;s ground bus. Do not bond the neutral and ground bus bars in the subpanel. That bond belongs only at the main service panel.</p>
            </div>
            <div>
              <h3 className='text-base font-bold text-slate-900 mb-2'>Can I use aluminum wire for the feeder run?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Yes, for feeder runs. Modern aluminum THHN/THWN-2 conductors are code-compliant for feeder use when sized one gauge larger than the copper equivalent and terminated correctly. Aluminum #2/0 AWG is appropriate for a 100-amp feeder run. The cost savings over copper on runs over 100 feet can be $200 to $400. Do not use aluminum for branch circuit wiring inside the garage.</p>
            </div>
            <div>
              <h3 className='text-base font-bold text-slate-900 mb-2'>Do I need a permit to run electricity to a detached garage?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Yes, in virtually every jurisdiction. Any new electrical service to a detached structure requires a permit and inspection. An unpermitted installation is a liability when you sell the property, may void your homeowner&apos;s insurance for electrical-related claims, and can require costly retroactive permitting if discovered. Permit fees run $50 to $200. The inspection process also catches errors before they become fire hazards.</p>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Related Guides</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Link href='/guides/garage-workshop-setup' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Guide</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Workshop Setup</p>
              <p className='text-slate-500 text-xs mt-1'>How to plan the full workshop including electrical zones and circuit requirements.</p>
            </Link>
            <Link href='/guides/ev-charger-installation' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Guide</span>
              <p className='font-semibold text-slate-800 text-sm'>EV Charger Installation</p>
              <p className='text-slate-500 text-xs mt-1'>Level 2 EV charger circuit requirements and installation planning.</p>
            </Link>
            <Link href='/reviews/best-garage-heaters' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Review</span>
              <p className='font-semibold text-slate-800 text-sm'>Best Garage Heaters</p>
              <p className='text-slate-500 text-xs mt-1'>Circuit requirements for each heater type.</p>
            </Link>
            <Link href='/guides/garage-maintenance-checklist' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Guide</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Maintenance Checklist</p>
              <p className='text-slate-500 text-xs mt-1'>Seasonal electrical inspection tasks.</p>
            </Link>
            <Link href='/cost-guides/garage-addition-cost' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Cost Guide</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Addition Cost</p>
              <p className='text-slate-500 text-xs mt-1'>If you are building the detached garage from scratch.</p>
            </Link>
          </div>
        </section>

        {/* Glossary */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Glossary</h2>
          <div className='space-y-3'>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Subpanel</p>
              <p className='text-slate-700 text-sm'>A secondary electrical panel installed in the detached garage, fed from the main house panel by a feeder circuit. The subpanel distributes power to individual branch circuits in the garage and provides the required building disconnect. A 100-amp subpanel with a main breaker and 24 spaces is the standard recommendation for a residential detached garage workshop.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Feeder</p>
              <p className='text-slate-700 text-sm'>The set of conductors (typically four wires: two hots, a neutral, and a ground) that run from the main panel to the subpanel in the detached garage. The feeder is sized for the full ampacity of the subpanel breaker it feeds, derated for voltage drop over the run distance. Must be four conductors for all modern detached garage installations.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Load calculation</p>
              <p className='text-slate-700 text-sm'>The process of adding up the electrical demand of all devices that will run simultaneously in the garage to determine the minimum panel size needed. Required by the NEC before sizing a subpanel. Most homeowners skip this step and undersize the panel. The load calculation should include the peak realistic scenario five years from now, not just current use.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Voltage drop</p>
              <p className='text-slate-700 text-sm'>The reduction in voltage that occurs when current travels through wire over distance due to resistance. NEC recommends keeping voltage drop below 3 percent on feeder runs. Undersized wire on long runs causes tools to run hot, motors to wear faster, and breakers to trip. Corrected by using a larger wire gauge for the run.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Ground rod</p>
              <p className='text-slate-700 text-sm'>A copper-clad steel rod (typically 8 feet long) driven into the earth outside the detached garage and connected to the subpanel&apos;s ground bus. Required by NEC 250.32 for any detached structure fed by a feeder. Two rods are required, spaced at least 6 feet apart. Provides a path for fault current to safely dissipate into the earth.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>GFCI (Ground Fault Circuit Interrupter)</p>
              <p className='text-slate-700 text-sm'>A safety device that monitors current flow on a circuit and trips within milliseconds if it detects a ground fault (current flowing through an unintended path such as a person). Required on all 125V through 250V receptacles in a garage under NEC 210.8. Can be provided by GFCI receptacles or by a GFCI breaker protecting the entire circuit.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Four-wire feeder</p>
              <p className='text-slate-700 text-sm'>The current NEC-required configuration for any feeder serving a detached structure. Consists of two hot conductors, one neutral conductor, and one separate equipment grounding conductor. The neutral and ground are kept separate in the subpanel and must not be bonded together at the subpanel. The bond occurs only at the main service panel.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Schedule 40 PVC conduit</p>
              <p className='text-slate-700 text-sm'>The standard underground conduit used for residential electrical feeder runs. Rated for burial at 18 inches depth. Available in 1-inch, 1.5-inch, and 2-inch diameters for residential feeder runs. Use 1.5-inch diameter for a 100-amp feeder run. It provides enough space for the four conductors and leaves room for pulling without excessive friction.</p>
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
