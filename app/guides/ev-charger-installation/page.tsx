import Image from 'next/image'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'EV Charger Installation Guide 2026: Costs, Levels, and Tax Credits | The Garage Guide',
  description: 'Installing a Level 2 EV charger at home costs $1,000 to $3,500 total. Complete guide to charging levels, electrical requirements, installation costs, and the Section 30C tax credit expiring June 30, 2026.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does it cost to install a Level 2 EV charger at home?', acceptedAnswer: { '@type': 'Answer', text: 'Installing a Level 2 EV charger at home costs $1,000 to $3,500 total, including the charger unit ($400 to $800) and professional electrical installation ($400 to $2,500). Simple installs with the panel in the garage run $700 to $1,400. Complex installs requiring a panel upgrade or long wire run can reach $4,300.' } },
    { '@type': 'Question', name: 'Do I need an electrician to install a Level 2 EV charger?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Installing the 240V circuit requires a licensed electrician in most jurisdictions. DIY electrical work on 240V circuits is dangerous, may void your homeowners insurance, and will fail inspection. Mounting the charger unit itself is straightforward, but the wiring must be done by a professional.' } },
    { '@type': 'Question', name: 'Is there a federal tax credit for EV charger installation?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The Section 30C Alternative Fuel Vehicle Refueling Property Credit covers 30% of equipment and installation costs, up to $1,000 for residential installations. This credit expires June 30, 2026 for chargers placed in service. It is only available in eligible census tracts. File IRS Form 8911 to claim it.' } },
    { '@type': 'Question', name: 'What is the difference between Level 1 and Level 2 charging?', acceptedAnswer: { '@type': 'Answer', text: 'Level 1 uses a standard 120V outlet and adds 3 to 5 miles of range per hour. A full charge takes 40 to 50 hours. Level 2 uses a dedicated 240V circuit and adds 25 to 44 miles per hour. A full charge takes 6 to 12 hours. Level 2 is the recommended setup for most EV owners.' } },
    { '@type': 'Question', name: 'Should I get a 32-amp or 48-amp charger?', acceptedAnswer: { '@type': 'Answer', text: 'Buy a 48-amp charger if your panel and budget allow. The price difference is only $50 to $150, but the 48-amp unit delivers 25 to 50% faster charging. Even if your current EV cannot accept 48 amps, your next vehicle likely will. A 48-amp charger future-proofs your installation.' } },
    { '@type': 'Question', name: 'Does a home EV charger add resale value?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A pre-installed Level 2 charger is increasingly viewed as a home feature comparable to a finished garage or updated electrical panel. The 240V circuit and panel capacity represent real infrastructure value that appeals to EV-owning buyers.' } },
    { '@type': 'Question', name: 'Do I need a permit for EV charger installation?', acceptedAnswer: { '@type': 'Answer', text: 'Almost always yes. Most jurisdictions require an electrical permit for any new 240V circuit. Your electrician typically handles the permit application. Costs range from $50 to $300. The permit process adds 1 to 2 weeks to the overall timeline.' } },
    { '@type': 'Question', name: 'Can two EVs share one charger?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A single Level 2 charger can charge two vehicles sequentially overnight. If both vehicles need a full charge nightly, you may need two chargers or a smart charger with built-in load sharing that automatically switches between vehicles based on charging schedules.' } },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'EV Charger Installation Guide 2026: Costs, Levels, Electrical Requirements, and Tax Credits',
  description: 'Installing a Level 2 EV charger at home costs $1,000 to $3,500 total.',
  image: 'https://thegarage.guide/images/EV charging.jpg',
  datePublished: '2026-03-08',
  dateModified: '2026-03-08',
  author: { '@type': 'Organization', name: 'The Garage Guide', url: 'https://thegarage.guide' },
  publisher: { '@type': 'Organization', name: 'The Garage Guide', url: 'https://thegarage.guide' },
}

const datasetSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'EV Charging Level Comparison 2026',
  description: 'Comparison of Level 1, Level 2, and Level 3 EV charging specifications including voltage, amperage, range per hour, charge time, equipment cost, and installation cost.',
  creator: { '@type': 'Organization', name: 'The Garage Guide', url: 'https://thegarage.guide' },
  datePublished: '2026-03-08',
  variableMeasured: ['Voltage', 'Amperage', 'Range per hour', 'Full charge time', 'Equipment cost', 'Installation cost'],
  includedInDataCatalog: { '@type': 'DataCatalog', name: 'The Garage Guide Data' },
  distribution: [{
    '@type': 'DataDownload',
    encodingFormat: 'application/json',
    contentUrl: 'https://thegarage.guide/guides/ev-charger-installation',
  }],
  hasPart: [
    { '@type': 'Observation', name: 'Level 1 Voltage', value: '120V standard outlet' },
    { '@type': 'Observation', name: 'Level 2 Voltage', value: '240V dedicated circuit' },
    { '@type': 'Observation', name: 'Level 1 Range per hour', value: '3 to 5 miles' },
    { '@type': 'Observation', name: 'Level 2 Range per hour', value: '25 to 44 miles' },
    { '@type': 'Observation', name: 'Level 1 Full charge time (60kWh)', value: '40 to 50 hours' },
    { '@type': 'Observation', name: 'Level 2 Full charge time (60kWh)', value: '6 to 12 hours' },
    { '@type': 'Observation', name: 'Level 2 total install cost - Simple', value: '$700 to $1,400' },
    { '@type': 'Observation', name: 'Level 2 total install cost - Moderate', value: '$1,200 to $2,300' },
    { '@type': 'Observation', name: 'Level 2 total install cost - Complex', value: '$1,900 to $4,300' },
  ],
}

export default function EVChargerInstallation() {
  return (
    <>
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image src='/images/EV charging.jpg' alt='Level 2 EV charger installed in residential garage' fill className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100' priority />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-amber-700'></div>
            <span className='text-amber-500 font-bold tracking-[0.3em] text-sm uppercase'>Guide</span>
          </div>
          <h1 className='text-4xl md:text-6xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>EV Charger Installation<br /><span className='text-amber-500'>2026</span></h1>
          <p className='text-lg text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>Installing a Level 2 EV charger at home costs $1,000 to $3,500 total. Complete guide to charging levels, electrical requirements, costs, and the federal tax credit expiring June 30, 2026.</p>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 rounded-full bg-amber-700 flex items-center justify-center text-white font-bold text-sm'>GG</div>
            <div><p className='text-white font-semibold'>The Garage Guide</p><p className='text-slate-400 text-sm'>Updated Mar 2026 &middot; 25 min read</p></div>
          </div>
        </div>
      </section>

      <article className='max-w-4xl mx-auto px-4 py-12'>
        <div className='bg-amber-50 border-l-4 border-amber-500 p-4 mb-8'>
          <p className='text-slate-700 text-sm leading-relaxed'><strong>Quick answer:</strong> Installing a Level 2 EV charger at home costs $1,000 to $3,500 total, including the charger unit ($400 to $800) and professional electrical installation ($400 to $2,500). A Level 2 charger delivers 25 to 44 miles of range per hour, enough to fully charge most EVs overnight. The federal Section 30C tax credit covers 30 percent of equipment and installation costs up to $1,000 for qualifying residential installations, but expires June 30, 2026. Most installations take 2 to 4 hours and require an electrical permit.</p>
        </div>
        <p className='text-base text-slate-700 leading-relaxed mb-6'>Installing a Level 2 EV charger at home costs <strong>$1,000 to $3,500 total</strong>, including the charger unit ($400 to $800) and professional electrical installation ($400 to $2,500). The final price depends primarily on the distance between your electrical panel and your garage, whether your panel has capacity for a new 40 to 50 amp circuit, and whether the installation is indoors or outdoors.</p>
        <p className='text-base text-slate-700 leading-relaxed mb-6'>If your panel is in the garage and has available capacity, expect to pay toward the lower end. If the panel is on the opposite side of the house or needs an upgrade, costs climb toward the upper end.</p>
        <p className='text-base text-slate-700 leading-relaxed mb-6'>A federal tax credit (Section 30C) currently covers 30% of equipment and installation costs up to $1,000 for qualifying residential installations, but <strong>this credit expires June 30, 2026</strong>. If you are considering a home charger, acting before that deadline reduces your out-of-pocket cost significantly.</p>
        <p className='text-base text-slate-700 leading-relaxed mb-6'>This guide covers everything a homeowner needs to know: charging levels explained, electrical requirements, cost breakdowns, installation options, the federal tax credit, and how to prepare your garage for EV charging.</p>

        {/* Charging Levels */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Charging Levels</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Charging Levels Explained</h2>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>There are three levels of EV charging. Only Level 1 and Level 2 are practical for residential use.</p>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead><tr className='bg-slate-900 text-white'><th className='p-2 text-left font-semibold'>Feature</th><th className='p-2 text-left font-semibold'>Level 1</th><th className='p-2 text-left font-semibold'>Level 2</th><th className='p-2 text-left font-semibold'>Level 3 (DC Fast)</th></tr></thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2'>Voltage</td><td className='p-2'>120V (standard outlet)</td><td className='p-2'>240V (dedicated circuit)</td><td className='p-2'>480V</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Amperage</td><td className='p-2'>12 &ndash; 16 amps</td><td className='p-2'>16 &ndash; 48 amps</td><td className='p-2'>100 &ndash; 500 amps</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Range added per hour</td><td className='p-2'>3 &ndash; 5 miles</td><td className='p-2'>25 &ndash; 44 miles</td><td className='p-2'>180 &ndash; 240 miles</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Full charge time (60 kWh)</td><td className='p-2'>40 &ndash; 50 hours</td><td className='p-2'>6 &ndash; 12 hours</td><td className='p-2'>20 &ndash; 40 minutes</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Equipment cost</td><td className='p-2'>$0 (included)</td><td className='p-2'>$400 &ndash; $800</td><td className='p-2'>$20,000 &ndash; $100,000</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Installation cost</td><td className='p-2'>$0 (existing outlet)</td><td className='p-2'>$400 &ndash; $2,500</td><td className='p-2'>Not residential</td></tr>
                <tr className='bg-amber-50'><td className='p-2'>Best for</td><td className='p-2'>PHEVs, low mileage</td><td className='p-2'>Daily EV charging</td><td className='p-2'>Commercial/public only</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className='text-lg font-bold text-slate-900 mb-3'>Level 1: The Included Charger</h3>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Every EV comes with a Level 1 charging cable that plugs into a standard 120V household outlet. It adds 3 to 5 miles of range per hour, which means a full charge of a 60 kWh battery takes 40 to 50 hours. Level 1 costs nothing to install because it uses an existing outlet.</p>
          <div className='bg-slate-50 border-l-4 border-amber-700 p-5 rounded-r-lg mb-4'>
            <p className='text-slate-700 font-medium text-sm'><strong>Level 1 is sufficient if:</strong> You drive a plug-in hybrid (PHEV) with a small battery (8 to 18 kWh), your daily commute is under 30 miles, or you have a second vehicle and can tolerate slow charging.</p>
          </div>
          <div className='bg-slate-50 border-l-4 border-slate-400 p-5 rounded-r-lg mb-6'>
            <p className='text-slate-700 font-medium text-sm'><strong>Level 1 is not sufficient if:</strong> You drive a battery electric vehicle (BEV) with a large battery (60 to 100 kWh), your daily driving exceeds 40 miles, or you need to recover significant range in a single overnight session.</p>
          </div>

          <h3 className='text-lg font-bold text-slate-900 mb-3'>Level 2: The Home Charging Standard</h3>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Level 2 charging operates at 240V and delivers 25 to 44 miles of range per hour, depending on the charger&apos;s amperage and your vehicle&apos;s onboard charger capacity. A typical 48-amp Level 2 charger can fully charge a 60 kWh battery from near-empty in approximately 8 hours, making overnight charging practical for virtually any EV on the market.</p>
          <div className='bg-slate-50 border-l-4 border-amber-700 p-5 rounded-r-lg mb-6'>
            <p className='text-slate-700 font-medium text-sm'><strong>Level 2 is the recommended setup</strong> for the vast majority of EV owners. It is the best balance of charging speed, installation cost, and electrical feasibility for residential use.</p>
          </div>

          <h3 className='text-lg font-bold text-slate-900 mb-3'>Level 3: Not for Homes</h3>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Level 3 DC fast charging requires 480V three-phase power, costs $20,000 to $100,000 per unit, and is not feasible for residential installation. These chargers are found at commercial charging stations and highway rest stops.</p>
        </div>

        {/* Electrical Requirements */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Electrical</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Electrical Requirements</h2>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Before purchasing a charger, your electrical system must be evaluated. This is the step that determines whether installation is simple and affordable or complex and expensive.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-3'>Panel Capacity</h3>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Your home&apos;s main electrical panel must have enough spare capacity to support a new 240V circuit. A 48-amp Level 2 charger requires a 60-amp breaker (the NEC requires the breaker to be rated at 125% of the charger&apos;s continuous load).</p>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead><tr className='bg-slate-900 text-white'><th className='p-2 text-left font-semibold'>Panel Size</th><th className='p-2 text-left font-semibold'>Typical Capacity</th><th className='p-2 text-left font-semibold'>Support Level 2?</th></tr></thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2'>100 amp</td><td className='p-2'>Often limited after HVAC, range, dryer</td><td className='p-2'>Maybe &ndash; may require load management or upgrade</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>150 amp</td><td className='p-2'>Usually sufficient for one Level 2 charger</td><td className='p-2'>Yes, in most cases</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>200 amp</td><td className='p-2'>Ample capacity for Level 2 + all other loads</td><td className='p-2'>Yes</td></tr>
                <tr className='bg-amber-50'><td className='p-2'>400 amp</td><td className='p-2'>More than sufficient</td><td className='p-2'>Yes</td></tr>
              </tbody>
            </table>
          </div>
          <div className='bg-slate-50 border-l-4 border-amber-700 p-5 rounded-r-lg mb-6'>
            <p className='text-slate-700 font-medium text-sm'><strong>If your panel is at capacity:</strong> A panel upgrade ($1,000 to $3,000) increases total capacity. A load management device ($200 to $500) shares capacity between the charger and another large appliance, allowing both to exist on a panel that cannot run both simultaneously. Load management is significantly cheaper and accepted by most jurisdictions.</p>
          </div>

          <h3 className='text-lg font-bold text-slate-900 mb-3'>Circuit Requirements</h3>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead><tr className='bg-slate-900 text-white'><th className='p-2 text-left font-semibold'>Charger Amperage</th><th className='p-2 text-left font-semibold'>Required Breaker</th><th className='p-2 text-left font-semibold'>Wire Gauge</th><th className='p-2 text-left font-semibold'>Wire Cost/Ft</th></tr></thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2'>24 amp (budget)</td><td className='p-2'>30 amp</td><td className='p-2'>10 AWG</td><td className='p-2'>$1 &ndash; $2</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>32 amp (mid-range)</td><td className='p-2'>40 amp</td><td className='p-2'>8 AWG</td><td className='p-2'>$2 &ndash; $3</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>40 amp (common)</td><td className='p-2'>50 amp</td><td className='p-2'>6 AWG</td><td className='p-2'>$3 &ndash; $5</td></tr>
                <tr className='bg-amber-50'><td className='p-2'>48 amp (max residential)</td><td className='p-2'>60 amp</td><td className='p-2'>6 AWG copper / 4 AWG aluminum</td><td className='p-2'>$3 &ndash; $6</td></tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Wire run distance matters enormously. A 20-foot run from the panel to the charger location might cost $100 to $200 in wire. A 100-foot run to a detached garage could cost $500 to $1,000 in wire alone, before trenching and conduit. This is the single biggest variable in installation cost.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-3'>Plug-In vs. Hardwired</h3>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead><tr className='bg-slate-900 text-white'><th className='p-2 text-left font-semibold'>Feature</th><th className='p-2 text-left font-semibold'>Plug-In (NEMA 14-50)</th><th className='p-2 text-left font-semibold'>Hardwired</th></tr></thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2'>Installation</td><td className='p-2'>Electrician installs 240V outlet, charger plugs in</td><td className='p-2'>Charger wired directly to circuit</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Cost</td><td className='p-2'>Slightly lower (outlet install is standard)</td><td className='p-2'>Slightly higher (direct wiring)</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Portability</td><td className='p-2'>Can unplug and take when moving</td><td className='p-2'>Permanently attached</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Replacement</td><td className='p-2'>Swap charger without electrician</td><td className='p-2'>Electrician needed to disconnect</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Outdoor use</td><td className='p-2'>Outlet must be GFCI-protected, weatherproof</td><td className='p-2'>Cleaner installation, no exposed outlet</td></tr>
                <tr className='bg-amber-50'><td className='p-2'>Code compliance</td><td className='p-2'>Some jurisdictions require hardwired</td><td className='p-2'>Universally accepted</td></tr>
              </tbody>
            </table>
          </div>
          <div className='bg-slate-50 border-l-4 border-amber-700 p-5 rounded-r-lg mb-4'>
            <p className='text-slate-700 font-medium text-sm'><strong>Recommendation:</strong> For garage installations where you own the home, either option works well. Plug-in is more convenient if you might move or upgrade chargers. Hardwired is cleaner for outdoor installations and permanent setups.</p>
          </div>
        </div>

        {/* Cost Breakdown */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Cost Breakdown</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Cost Breakdown</h2>

          <h3 className='text-lg font-bold text-slate-900 mb-3'>Total Installation Cost by Scenario</h3>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead><tr className='bg-slate-900 text-white'><th className='p-2 text-left font-semibold'>Scenario</th><th className='p-2 text-left font-semibold'>Charger Cost</th><th className='p-2 text-left font-semibold'>Installation</th><th className='p-2 text-left font-semibold'>Total</th></tr></thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2'>Simple: Panel in garage, existing capacity, short wire run</td><td className='p-2'>$400 &ndash; $600</td><td className='p-2'>$300 &ndash; $800</td><td className='p-2'>$700 &ndash; $1,400</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Moderate: Panel elsewhere, adequate capacity, medium run</td><td className='p-2'>$400 &ndash; $800</td><td className='p-2'>$800 &ndash; $1,500</td><td className='p-2'>$1,200 &ndash; $2,300</td></tr>
                <tr className='bg-amber-50'><td className='p-2'>Complex: Panel upgrade needed, long run, outdoor/detached</td><td className='p-2'>$400 &ndash; $800</td><td className='p-2'>$1,500 &ndash; $3,500</td><td className='p-2'>$1,900 &ndash; $4,300</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className='text-lg font-bold text-slate-900 mb-3'>Installation Cost Components</h3>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead><tr className='bg-slate-900 text-white'><th className='p-2 text-left font-semibold'>Component</th><th className='p-2 text-left font-semibold'>Cost Range</th><th className='p-2 text-left font-semibold'>Notes</th></tr></thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2'>Charger unit (Level 2, 40&ndash;48 amp)</td><td className='p-2'>$400 &ndash; $800</td><td className='p-2'>Smart chargers with Wi-Fi at higher end</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Electrician labor (2&ndash;4 hours)</td><td className='p-2'>$200 &ndash; $600</td><td className='p-2'>Rates vary $75&ndash;$150/hour by region</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Wire and conduit (per linear foot)</td><td className='p-2'>$3 &ndash; $8</td><td className='p-2'>Longer runs cost significantly more</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>New 240V breaker</td><td className='p-2'>$50 &ndash; $150</td><td className='p-2'>Included in most quotes</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Permit and inspection</td><td className='p-2'>$50 &ndash; $300</td><td className='p-2'>Required in most jurisdictions</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Panel upgrade (if needed)</td><td className='p-2'>$1,000 &ndash; $3,000</td><td className='p-2'>Only if existing panel lacks capacity</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Load management device</td><td className='p-2'>$200 &ndash; $500</td><td className='p-2'>Alternative to panel upgrade</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Trenching (detached garage/outdoor)</td><td className='p-2'>$300 &ndash; $2,000</td><td className='p-2'>$5&ndash;$15/ft depending on surface</td></tr>
                <tr className='bg-amber-50'><td className='p-2'>GFCI breaker (if required)</td><td className='p-2'>$40 &ndash; $100</td><td className='p-2'>NEC 2020 requires for EV circuits in some areas</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Federal Tax Credit */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Tax Credit</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>The Federal Tax Credit (Section 30C)</h2>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>The federal Alternative Fuel Vehicle Refueling Property Credit (Section 30C) provides a tax credit of 30% of equipment and installation costs, up to a maximum of $1,000 for residential installations. This credit applies to the charger itself plus all associated installation costs (wiring, panel work, labor, permits).</p>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead><tr className='bg-slate-900 text-white'><th className='p-2 text-left font-semibold'>Detail</th><th className='p-2 text-left font-semibold'>Current Rule</th></tr></thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2'>Credit amount</td><td className='p-2'>30% of total cost (equipment + installation), max $1,000</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Expiration</td><td className='p-2'>June 30, 2026 (charger must be placed in service by this date)</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Eligibility</td><td className='p-2'>Primary residence in eligible census tract</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>How to claim</td><td className='p-2'>File IRS Form 8911 with your federal tax return</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Refundable?</td><td className='p-2'>No &ndash; reduces tax owed, no refund beyond liability</td></tr>
                <tr className='bg-amber-50'><td className='p-2'>Covers</td><td className='p-2'>Charger hardware, labor, panel upgrades, wiring, permits</td></tr>
              </tbody>
            </table>
          </div>
          <div className='bg-slate-50 border-l-4 border-amber-700 p-5 rounded-r-lg mb-4'>
            <p className='text-slate-700 font-medium text-sm'><strong>Important:</strong> The 30C credit was originally extended through December 2032 by the Inflation Reduction Act, but the One Big Beautiful Bill (enacted July 4, 2025) accelerated the expiration to June 30, 2026. Completing the project before this deadline saves up to $1,000.</p>
          </div>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>Location eligibility:</strong> The credit is only available for installations in eligible census tracts (generally non-urban or low-income areas). Use the Department of Energy&apos;s 30C eligibility locator to check whether your address qualifies.</p>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>State and utility incentives:</strong> Many states and utility companies offer additional rebates of $200 to $1,000 for home EV charger installation. These stack with the federal credit. Check your state energy office and utility provider&apos;s website for current programs.</p>
        </div>

        {/* Connector Types */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Connectors</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Connector Types: J1772 vs. NACS</h2>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>The EV charging connector landscape is in transition. Understanding which connector your vehicle uses determines which charger to buy.</p>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead><tr className='bg-slate-900 text-white'><th className='p-2 text-left font-semibold'>Connector</th><th className='p-2 text-left font-semibold'>Used By</th><th className='p-2 text-left font-semibold'>Status</th></tr></thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2'>J1772 (SAE J1772)</td><td className='p-2'>Most non-Tesla EVs built before 2025</td><td className='p-2'>Legacy standard, still widely supported</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>NACS (Tesla connector)</td><td className='p-2'>All Tesla + Ford, GM, Rivian, most new EVs from 2025</td><td className='p-2'>Becoming the North American standard</td></tr>
                <tr className='bg-amber-50'><td className='p-2'>CCS (Combined Charging System)</td><td className='p-2'>DC fast charging for J1772 vehicles</td><td className='p-2'>Public fast charging only, not for home use</td></tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>If you own a Tesla or a 2025+ model from Ford, GM, or Rivian, you likely need a NACS-compatible charger. If you own an older non-Tesla EV, you need a J1772 charger. Many current smart chargers support both connectors or include adapters. The Tesla Wall Connector ($450 to $580) natively supports NACS and includes a J1772 adapter option.</p>
          <div className='bg-slate-50 border-l-4 border-amber-700 p-5 rounded-r-lg mb-4'>
            <p className='text-slate-700 font-medium text-sm'><strong>Future-proofing:</strong> The industry is converging on NACS as the North American standard. If buying a new charger in 2026, prioritize NACS compatibility or a charger with swappable connector options.</p>
          </div>
        </div>

        {/* Where to Install */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Location</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Where to Install Your Charger</h2>

          <h3 className='text-lg font-bold text-slate-900 mb-3'>Garage Installation (Recommended)</h3>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Installing the charger inside your garage is the simplest, cheapest, and most common approach. The garage provides weather protection for the charger and cable, keeps the installation out of sight, and is closest to where most homeowners park their EVs.</p>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>Optimal placement:</strong> Mount the charger on the wall near the front of the vehicle (where most charge ports are located) at a height of 42 to 48 inches. Position it so the cable reaches the charge port without stretching across walking paths or the vehicle hood.</p>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>Garage preparation:</strong> Before installation, ensure your garage has adequate lighting for nighttime plug-in, and consider your overall <a href='/guides/complete-garage-organization-guide' className='text-amber-700 underline'>garage organization</a> to ensure the charger location does not conflict with storage systems, workbenches, or vehicle door clearance.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-3'>Outdoor Installation</h3>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>If your parking is outside the garage or you have a detached garage without easy electrical access, outdoor installation is necessary. Outdoor installations cost $200 to $1,000 more than indoor due to weatherproof enclosures, outdoor-rated conduit, and potentially longer wire runs.</p>
          <ul className='space-y-2 text-sm text-slate-700 mb-6'>
            <li className='flex items-start gap-3'><span className='text-amber-700 font-bold text-base mt-0.5'>&#8226;</span><div>Charger must be NEMA 4 or NEMA 3R rated (weatherproof)</div></li>
            <li className='flex items-start gap-3'><span className='text-amber-700 font-bold text-base mt-0.5'>&#8226;</span><div>Outlet (if plug-in) must be in a weatherproof enclosure with an in-use cover</div></li>
            <li className='flex items-start gap-3'><span className='text-amber-700 font-bold text-base mt-0.5'>&#8226;</span><div>All outdoor wiring must be in weatherproof conduit</div></li>
            <li className='flex items-start gap-3'><span className='text-amber-700 font-bold text-base mt-0.5'>&#8226;</span><div>GFCI protection is required</div></li>
          </ul>

          <h3 className='text-lg font-bold text-slate-900 mb-3'>Detached Garage Installation</h3>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>A <a href='/comparisons/attached-vs-detached-garage' className='text-amber-700 underline'>detached garage</a> adds the most cost due to the need to run power from the house panel to the garage. Options include underground trenching ($5 to $15 per linear foot) or overhead aerial cable. Most detached garage installations require a subpanel in the garage ($500 to $1,500) to distribute power locally.</p>
        </div>

        {/* Installation Process */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Process</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Installation Process: What to Expect</h2>
          <div className='space-y-6'>
            <div className='bg-slate-50 border border-slate-200 rounded-lg p-5'>
              <h3 className='text-sm font-bold text-slate-900 mb-2'>Step 1: Electrical Assessment</h3>
              <p className='text-slate-700 text-sm'>An electrician evaluates your panel capacity, determines the wire route, and identifies any upgrades needed. Many electricians offer free assessments or include the cost in the installation quote.</p>
            </div>
            <div className='bg-slate-50 border border-slate-200 rounded-lg p-5'>
              <h3 className='text-sm font-bold text-slate-900 mb-2'>Step 2: Permit Application</h3>
              <p className='text-slate-700 text-sm'>Most jurisdictions require an electrical permit for EV charger installation. Your electrician typically handles this. Permit costs range from $50 to $300. Processing takes 1 to 5 business days in most areas.</p>
            </div>
            <div className='bg-slate-50 border border-slate-200 rounded-lg p-5'>
              <h3 className='text-sm font-bold text-slate-900 mb-2'>Step 3: Installation</h3>
              <p className='text-slate-700 text-sm'>The electrician installs the breaker, runs the wire, mounts the charger or outlet, and connects everything. Typical installation takes 2 to 4 hours for a straightforward garage install. Complex installations (panel upgrade, long run, trenching) may take a full day or require two visits.</p>
            </div>
            <div className='bg-slate-50 border border-slate-200 rounded-lg p-5'>
              <h3 className='text-sm font-bold text-slate-900 mb-2'>Step 4: Inspection</h3>
              <p className='text-slate-700 text-sm'>A local building inspector verifies the installation meets code. This is typically included in the permit fee and scheduled within a few days of completion.</p>
            </div>
            <div className='bg-slate-50 border border-slate-200 rounded-lg p-5'>
              <h3 className='text-sm font-bold text-slate-900 mb-2'>Step 5: Charger Setup</h3>
              <p className='text-slate-700 text-sm'>Connect the charger to Wi-Fi (if smart-enabled), download the manufacturer&apos;s app, and configure charging schedules. Most utilities offer lower electricity rates during off-peak hours (typically 9 PM to 6 AM), so scheduling overnight charging can save 30% to 50% on charging costs.</p>
            </div>
          </div>
        </div>

        {/* Home Charging Cost */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Charging Cost</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>How Much Does It Cost to Charge an EV at Home?</h2>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Home charging costs a fraction of gasoline. At the national average residential electricity rate of approximately $0.16 per kWh, charging costs translate to roughly $0.04 to $0.06 per mile for most EVs.</p>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead><tr className='bg-slate-900 text-white'><th className='p-2 text-left font-semibold'>Vehicle</th><th className='p-2 text-left font-semibold'>Battery Size</th><th className='p-2 text-left font-semibold'>Cost to Full Charge</th><th className='p-2 text-left font-semibold'>Equivalent MPG</th></tr></thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2'>Compact EV (Leaf, Bolt)</td><td className='p-2'>40 &ndash; 66 kWh</td><td className='p-2'>$6.40 &ndash; $10.56</td><td className='p-2'>100 &ndash; 130 MPGe</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Mid-size EV (Model 3, Ioniq 5)</td><td className='p-2'>60 &ndash; 77 kWh</td><td className='p-2'>$9.60 &ndash; $12.32</td><td className='p-2'>90 &ndash; 120 MPGe</td></tr>
                <tr className='bg-amber-50'><td className='p-2'>Full-size EV (Model X, F-150 Lightning)</td><td className='p-2'>98 &ndash; 131 kWh</td><td className='p-2'>$15.68 &ndash; $20.96</td><td className='p-2'>60 &ndash; 90 MPGe</td></tr>
              </tbody>
            </table>
          </div>
          <div className='bg-slate-50 border-l-4 border-amber-700 p-5 rounded-r-lg mb-4'>
            <p className='text-slate-700 font-medium text-sm'><strong>Annual savings:</strong> The average American drives 13,500 miles per year. At $0.05/mile for electricity versus $0.12/mile for gasoline ($3.50/gallon, 29 MPG average), an EV owner saves approximately $950 per year on fuel. A $1,500 charger installation pays for itself in roughly 18 months through fuel savings alone.</p>
          </div>
        </div>

        {/* FAQ */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>FAQ</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Frequently Asked Questions</h2>
          <div className='space-y-6'>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='text-base font-bold text-slate-900 mb-2'>Can I install a Level 2 charger myself?</h3>
              <p className='text-slate-700 text-sm'>Installing the charger unit itself (mounting it, plugging it in) is straightforward for a plug-in model. However, installing the 240V circuit (running wire from the panel, installing a breaker, wiring the outlet) requires a licensed electrician in most jurisdictions. DIY electrical work on 240V circuits is dangerous and may void your homeowners insurance, fail inspection, and violate local code.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='text-base font-bold text-slate-900 mb-2'>How long does installation take?</h3>
              <p className='text-slate-700 text-sm'>A straightforward garage installation with an existing panel nearby takes 2 to 4 hours. Installations requiring a panel upgrade, long wire runs, or trenching to a detached garage take 4 to 8 hours or may require two visits. The permit and inspection process adds 1 to 2 weeks to the overall timeline.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='text-base font-bold text-slate-900 mb-2'>Do I need a permit?</h3>
              <p className='text-slate-700 text-sm'>Almost always yes. Most jurisdictions require an electrical permit for any new 240V circuit installation. Your electrician typically handles the permit application and schedules the inspection. Permit costs range from $50 to $300.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='text-base font-bold text-slate-900 mb-2'>Will a Level 2 charger increase my electric bill?</h3>
              <p className='text-slate-700 text-sm'>Yes, but significantly less than you would spend on gasoline. Charging an average EV driving 13,500 miles/year adds approximately $50 to $70 per month to your electric bill at average rates. Compare this to $150 to $200 per month in gasoline for a comparable gas vehicle. Scheduling charging during off-peak hours can reduce the cost by 30% to 50%.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='text-base font-bold text-slate-900 mb-2'>Should I get a 32-amp or 48-amp charger?</h3>
              <p className='text-slate-700 text-sm'>Buy a 48-amp charger if your panel and budget allow it. The price difference is typically only $50 to $150, but the 48-amp charger delivers 25% to 50% faster charging. Even if your current EV cannot accept 48 amps, your next vehicle likely will. The electrical circuit for a 48-amp charger costs slightly more (heavier wire gauge, larger breaker), but it future-proofs your installation.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='text-base font-bold text-slate-900 mb-2'>Can two EVs share one charger?</h3>
              <p className='text-slate-700 text-sm'>Yes. A single Level 2 charger can charge two vehicles sequentially (one after the other) overnight. If both vehicles need a full charge nightly, you may need two chargers or a charger with built-in load sharing. Some smart chargers can automatically switch between two vehicles based on charging schedules.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='text-base font-bold text-slate-900 mb-2'>Does a home EV charger add resale value?</h3>
              <p className='text-slate-700 text-sm'>Yes. As EV adoption grows, a pre-installed Level 2 charger is increasingly viewed as a home feature comparable to a finished garage or updated electrical panel. The 240V circuit and panel capacity represent real infrastructure value that appeals to EV-owning buyers.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='text-base font-bold text-slate-900 mb-2'>Is the federal tax credit still available?</h3>
              <p className='text-slate-700 text-sm'>The Section 30C credit (30% of costs, up to $1,000) is available for chargers placed in service through June 30, 2026, in eligible census tracts. After that date, no federal residential charger credit exists under current law. State and utility incentives may continue independently. Check the Department of Energy&apos;s eligibility locator and file IRS Form 8911 to claim the credit.</p>
            </div>
          </div>
        </div>

        {/* Glossary */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Glossary</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Glossary</h2>
          <div className='space-y-4'>
            <div className='border-b border-slate-100 pb-4'>
              <h3 className='text-sm font-bold text-slate-900 mb-1'>EVSE (Electric Vehicle Supply Equipment)</h3>
              <p className='text-slate-700 text-xs'>The technical term for an EV charger. Includes the charger unit, cable, connector, and any associated control electronics.</p>
            </div>
            <div className='border-b border-slate-100 pb-4'>
              <h3 className='text-sm font-bold text-slate-900 mb-1'>NACS (North American Charging Standard)</h3>
              <p className='text-slate-700 text-xs'>Tesla&apos;s charging connector, adopted as the North American standard by most major automakers starting in 2025. Replaces J1772 for new vehicles.</p>
            </div>
            <div className='border-b border-slate-100 pb-4'>
              <h3 className='text-sm font-bold text-slate-900 mb-1'>J1772 (SAE J1772)</h3>
              <p className='text-slate-700 text-xs'>The previous standard Level 1 and Level 2 charging connector used by non-Tesla EVs. Still in use on older vehicles and widely supported.</p>
            </div>
            <div className='border-b border-slate-100 pb-4'>
              <h3 className='text-sm font-bold text-slate-900 mb-1'>NEMA 14-50</h3>
              <p className='text-slate-700 text-xs'>A 240V, 50-amp outlet commonly used for plug-in Level 2 EV chargers. The same outlet type used by many electric ranges and RV hookups.</p>
            </div>
            <div className='border-b border-slate-100 pb-4'>
              <h3 className='text-sm font-bold text-slate-900 mb-1'>Load Management Device</h3>
              <p className='text-slate-700 text-xs'>An electrical device that shares circuit capacity between an EV charger and another large appliance, allowing both to exist on a panel that cannot support both running simultaneously.</p>
            </div>
            <div className='border-b border-slate-100 pb-4'>
              <h3 className='text-sm font-bold text-slate-900 mb-1'>NEC (National Electrical Code)</h3>
              <p className='text-slate-700 text-xs'>The standard for safe electrical installation in the United States. Article 625 specifically covers EV charging equipment requirements.</p>
            </div>
            <div className='border-b border-slate-100 pb-4'>
              <h3 className='text-sm font-bold text-slate-900 mb-1'>Section 30C</h3>
              <p className='text-slate-700 text-xs'>The federal tax code section (26 U.S. Code &sect; 30C) that provides the Alternative Fuel Vehicle Refueling Property Credit for EV charger installations. Currently expires June 30, 2026.</p>
            </div>
            <div className='pb-4'>
              <h3 className='text-sm font-bold text-slate-900 mb-1'>Time-of-Use Rate</h3>
              <p className='text-slate-700 text-xs'>A utility pricing structure that charges different electricity rates depending on the time of day. Off-peak rates (typically overnight) are 30% to 50% lower than peak rates, making scheduled overnight EV charging significantly cheaper.</p>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Related</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Related Guides</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <a href='/guides/garage-heater-guide' className='block bg-slate-50 border border-slate-200 rounded-lg p-5 hover:border-amber-700 transition-colors'>
              <span className='text-amber-700 text-xs font-bold uppercase tracking-wider'>Guide</span>
              <h3 className='text-sm font-bold text-slate-900 mt-1'>Garage Heater Guide 2026</h3>
              <p className='text-slate-600 text-xs mt-1'>Types, BTU sizing, costs, and installation for heating your garage.</p>
            </a>
            <a href='/reviews/best-garage-lighting' className='block bg-slate-50 border border-slate-200 rounded-lg p-5 hover:border-amber-700 transition-colors'>
              <span className='text-amber-700 text-xs font-bold uppercase tracking-wider'>Review</span>
              <h3 className='text-sm font-bold text-slate-900 mt-1'>Best Garage Lighting 2026</h3>
              <p className='text-slate-600 text-xs mt-1'>LED options for every budget to ensure adequate lighting for EV charging.</p>
            </a>
            <a href='/guides/complete-garage-organization-guide' className='block bg-slate-50 border border-slate-200 rounded-lg p-5 hover:border-amber-700 transition-colors'>
              <span className='text-amber-700 text-xs font-bold uppercase tracking-wider'>Guide</span>
              <h3 className='text-sm font-bold text-slate-900 mt-1'>Complete Garage Organization Guide 2026</h3>
              <p className='text-slate-600 text-xs mt-1'>Plan your garage layout to accommodate EV charging alongside storage.</p>
            </a>
            <a href='/comparisons/attached-vs-detached-garage' className='block bg-slate-50 border border-slate-200 rounded-lg p-5 hover:border-amber-700 transition-colors'>
              <span className='text-amber-700 text-xs font-bold uppercase tracking-wider'>Comparison</span>
              <h3 className='text-sm font-bold text-slate-900 mt-1'>Attached vs Detached Garage 2026</h3>
              <p className='text-slate-600 text-xs mt-1'>How garage type affects EV charger installation cost and complexity.</p>
            </a>
            <a href='/cost-guides/garage-conversion-cost' className='block bg-slate-50 border border-slate-200 rounded-lg p-5 hover:border-amber-700 transition-colors'>
              <span className='text-amber-700 text-xs font-bold uppercase tracking-wider'>Cost Guide</span>
              <h3 className='text-sm font-bold text-slate-900 mt-1'>Garage Conversion Cost 2026</h3>
              <p className='text-slate-600 text-xs mt-1'>Turn your garage into living space &mdash; including electrical planning.</p>
            </a>
            <a href='/guides/how-to-insulate-garage' className='block bg-slate-50 border border-slate-200 rounded-lg p-5 hover:border-amber-700 transition-colors'>
              <span className='text-amber-700 text-xs font-bold uppercase tracking-wider'>Guide</span>
              <h3 className='text-sm font-bold text-slate-900 mt-1'>How to Insulate Your Garage</h3>
              <p className='text-slate-600 text-xs mt-1'>Insulation helps regulate temperature for both your EV and garage space.</p>
            </a>
          </div>
        </div>

                  <LeadForm />

        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />
      </article>
    </>
  )
}
