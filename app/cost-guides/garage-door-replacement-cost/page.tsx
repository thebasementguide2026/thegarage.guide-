import Image from 'next/image'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Garage Door Replacement Cost 2026: Complete Price Breakdown | The Garage Guide',
  description: 'A new garage door costs $1,200 to $4,500 installed for a standard single or double door. Complete cost breakdown by size, material, style, insulation, and hidden costs most quotes miss.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does it cost to replace a garage door?', acceptedAnswer: { '@type': 'Answer', text: 'A standard garage door replacement costs $1,200 to $4,500 installed, including the door, hardware, and professional installation. A single-car door runs $700 to $2,500, and a double-car door runs $1,000 to $3,500. Premium custom doors can exceed $10,000.' } },
    { '@type': 'Question', name: 'Is replacing a garage door worth it?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Garage door replacement is the #1 ROI home improvement project in the country, returning 268% of the investment at resale according to the 2025 Cost vs. Value Report. Beyond resale value, a new door improves curb appeal, energy efficiency, security, and daily convenience.' } },
    { '@type': 'Question', name: 'How long does a garage door last?', acceptedAnswer: { '@type': 'Answer', text: 'Most garage doors last 15 to 30 years depending on the material, climate, and maintenance. Steel and composite doors typically last 20 to 30 years. Wood doors last 15 to 30 years with proper annual maintenance. Fiberglass doors last 15 to 20 years.' } },
    { '@type': 'Question', name: 'Should I repair or replace my garage door?', acceptedAnswer: { '@type': 'Answer', text: 'Repair if the door is under 15 years old with isolated damage like a single broken spring, one dented panel, or worn weatherstripping. Replace if repairs exceed 50% of the replacement cost, the door is 15+ years old, multiple panels are damaged, the door is warping or sagging, or you want improved insulation and curb appeal.' } },
    { '@type': 'Question', name: 'How long does garage door replacement take?', acceptedAnswer: { '@type': 'Answer', text: 'Professional installation typically takes 4 to 6 hours for a standard door, including removal of the old door, installation of the new door, track alignment, spring balancing, opener connection, and safety testing. Custom or complex installations may take a full day.' } },
    { '@type': 'Question', name: 'What is the best material for a garage door?', acceptedAnswer: { '@type': 'Answer', text: 'Insulated steel is the best choice for most homeowners. It is durable, low-maintenance, energy-efficient, and available in numerous styles including convincing faux wood finishes. It offers the best balance of cost, performance, and longevity.' } },
    { '@type': 'Question', name: 'Do I need a permit to replace my garage door?', acceptedAnswer: { '@type': 'Answer', text: 'In most cases, a like-for-like replacement (same size, same location) does not require a permit. If you are changing the size of the opening, adding electrical work, or making structural modifications, a permit may be required. Check with your local building department.' } },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Garage Door Replacement Cost 2026: Complete Price Breakdown',
  description: 'A new garage door costs $1,200 to $4,500 installed for a standard single or double door.',
  image: 'https://thegarage.guide/1.jpg',
  datePublished: '2026-03-06',
  dateModified: '2026-03-06',
  author: { '@type': 'Organization', name: 'The Garage Guide', url: 'https://thegarage.guide' },
  publisher: { '@type': 'Organization', name: 'The Garage Guide', url: 'https://thegarage.guide' },
}

export default function GarageDoorReplacementCost() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image src='/1.jpg' alt='New garage door installed on residential home' fill className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100' priority />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-amber-700'></div>
            <span className='text-amber-500 font-bold tracking-[0.3em] text-sm uppercase'>Cost Guide</span>
          </div>
          <h1 className='text-4xl md:text-6xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>Garage Door Replacement Cost<br /><span className='text-amber-500'>2026</span></h1>
          <p className='text-lg text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>A new garage door costs $1,200 to $4,500 installed for a standard single or double door. The #1 ROI home improvement project, returning 268% at resale.</p>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 rounded-full bg-amber-700 flex items-center justify-center text-white font-bold text-sm'>GG</div>
            <div><p className='text-white font-semibold'>The Garage Guide</p><p className='text-slate-400 text-sm'>Updated Mar 2026 &middot; 20 min read</p></div>
          </div>
        </div>
      </section>

      <article className='max-w-4xl mx-auto px-4 py-12'>
        <p className='text-base text-slate-700 leading-relaxed mb-6'>Garage door replacement is the <strong>#1 ROI home improvement project in the country</strong>. According to the 2025 Cost vs. Value Report by Zonda, it returns 268% of the investment at resale. For every $1,000 you invest, approximately $2,680 is added to your home&apos;s value. This guide breaks down every cost component so you know exactly what you&apos;re paying for, where you can save money, and whether you actually need a full replacement or just a repair.</p>

        {/* Repair vs Replace */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Repair vs Replace</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Do You Need Replacement or Repair?</h2>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Before spending $1,200 to $4,500 on a new door, make sure you actually need one. Many homeowners search for garage door replacement when a $150 to $700 repair would solve the problem.</p>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead><tr className='bg-slate-900 text-white'><th className='p-2 text-left font-semibold'>Problem</th><th className='p-2 text-left font-semibold'>Fix</th><th className='p-2 text-left font-semibold'>Cost</th><th className='p-2 text-left font-semibold'>Replace?</th></tr></thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2'>Broken spring (door won&apos;t open)</td><td className='p-2'>Spring replacement</td><td className='p-2'>$150 &ndash; $350</td><td className='p-2'>No</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Single dented panel</td><td className='p-2'>Panel replacement</td><td className='p-2'>$300 &ndash; $1,200</td><td className='p-2'>No</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Noisy operation</td><td className='p-2'>Lubrication / hardware tightening</td><td className='p-2'>$0 &ndash; $50 DIY</td><td className='p-2'>No</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Opener failure</td><td className='p-2'>Opener replacement</td><td className='p-2'>$200 &ndash; $500</td><td className='p-2'>No</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Weatherstripping worn</td><td className='p-2'>Weatherstrip replacement</td><td className='p-2'>$50 &ndash; $200</td><td className='p-2'>No</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Off-track door</td><td className='p-2'>Track realignment</td><td className='p-2'>$150 &ndash; $350</td><td className='p-2'>No</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Multiple dented/damaged panels</td><td className='p-2'>Depends on extent</td><td className='p-2'>$600 &ndash; $2,000</td><td className='p-2'>Maybe</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Door is 15 to 20 years old</td><td className='p-2'>Full replacement</td><td className='p-2'>$1,200 &ndash; $4,500</td><td className='p-2'>Yes</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Sagging, warping, rotting wood</td><td className='p-2'>Full replacement</td><td className='p-2'>$1,200 &ndash; $4,500</td><td className='p-2'>Yes</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>No insulation, high energy bills</td><td className='p-2'>Replace with insulated door</td><td className='p-2'>$1,200 &ndash; $4,500</td><td className='p-2'>Yes</td></tr>
                <tr className='bg-amber-50'><td className='p-2'>Outdated look hurting curb appeal</td><td className='p-2'>Full replacement</td><td className='p-2'>$1,200 &ndash; $4,500</td><td className='p-2'>Yes</td></tr>
              </tbody>
            </table>
          </div>
          <div className='bg-slate-50 border-l-4 border-amber-700 p-5 rounded-r-lg mb-4'>
            <p className='text-slate-700 font-medium text-sm'><strong>The 50% rule:</strong> If repair costs exceed 50% of what a new door would cost, replace it. You get a full warranty, better energy efficiency, improved curb appeal, and modern safety features for a marginal cost difference.</p>
          </div>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>If the door is structurally sound but cosmetically worn, painting is a cost-effective alternative to replacement. See our <Link href='/guides/how-to-paint-a-garage-door' className='text-amber-700 underline'>garage door painting guide</Link> for materials, prep, and what to expect.</p>
        </div>

        {/* Cost by Door Size */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>By Size</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Cost by Door Size</h2>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead><tr className='bg-slate-900 text-white'><th className='p-2 text-left font-semibold'>Door Size</th><th className='p-2 text-left font-semibold'>Typical Use</th><th className='p-2 text-left font-semibold'>Door Only</th><th className='p-2 text-left font-semibold'>Installed</th></tr></thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2'>8&times;7 ft (single car)</td><td className='p-2'>Standard single garage</td><td className='p-2'>$400 &ndash; $1,400</td><td className='p-2'>$700 &ndash; $2,500</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>9&times;7 ft (single car, wide)</td><td className='p-2'>SUV/truck accommodation</td><td className='p-2'>$500 &ndash; $1,600</td><td className='p-2'>$800 &ndash; $2,700</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>10&times;7 ft (single car, extra wide)</td><td className='p-2'>Large SUV/workshop entry</td><td className='p-2'>$600 &ndash; $1,800</td><td className='p-2'>$900 &ndash; $3,000</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>16&times;7 ft (double car)</td><td className='p-2'>Standard two-car garage</td><td className='p-2'>$700 &ndash; $2,500</td><td className='p-2'>$1,000 &ndash; $3,500</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>16&times;8 ft (double car, tall)</td><td className='p-2'>Trucks, SUVs with roof racks</td><td className='p-2'>$800 &ndash; $2,800</td><td className='p-2'>$1,200 &ndash; $4,000</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>18&times;7 ft (triple/oversized)</td><td className='p-2'>Three-car or extra width</td><td className='p-2'>$1,000 &ndash; $3,000</td><td className='p-2'>$1,500 &ndash; $4,500</td></tr>
                <tr className='bg-amber-50'><td className='p-2'>Custom sizing</td><td className='p-2'>Non-standard openings</td><td className='p-2'>$1,500 &ndash; $5,000</td><td className='p-2'>$2,500 &ndash; $8,000</td></tr>
              </tbody>
            </table>
          </div>
          <div className='bg-slate-50 border-l-4 border-amber-700 p-5 rounded-r-lg mb-4'>
            <p className='text-slate-700 font-medium text-sm'><strong>Two single doors vs one double door:</strong> For a two-car garage, one 16&times;7 double door is almost always cheaper than two 8&times;7 single doors because you need only one frame, one set of tracks, one opener, and one installation. Two singles typically cost 30% to 50% more than one double.</p>
          </div>
        </div>

        {/* Cost by Material */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>By Material</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Cost by Material</h2>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Material is the single biggest cost factor. It determines price, lifespan, maintenance requirements, insulation value, and appearance.</p>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead><tr className='bg-slate-900 text-white'><th className='p-2 text-left font-semibold'>Material</th><th className='p-2 text-left font-semibold'>Cost (Door Only)</th><th className='p-2 text-left font-semibold'>Lifespan</th><th className='p-2 text-left font-semibold'>Maintenance</th><th className='p-2 text-left font-semibold'>Best For</th></tr></thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2'>Steel (non-insulated)</td><td className='p-2'>$400 &ndash; $1,200</td><td className='p-2'>20&ndash;30 yrs</td><td className='p-2'>Very low</td><td className='p-2'>Budget replacement</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Steel (insulated)</td><td className='p-2'>$700 &ndash; $2,000</td><td className='p-2'>20&ndash;30 yrs</td><td className='p-2'>Very low</td><td className='p-2'>Most homeowners</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Aluminum</td><td className='p-2'>$500 &ndash; $1,400</td><td className='p-2'>20&ndash;25 yrs</td><td className='p-2'>Very low</td><td className='p-2'>Coastal areas (no rust)</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Vinyl</td><td className='p-2'>$600 &ndash; $1,500</td><td className='p-2'>20&ndash;25 yrs</td><td className='p-2'>Very low</td><td className='p-2'>Humid climates</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Fiberglass</td><td className='p-2'>$800 &ndash; $2,000</td><td className='p-2'>15&ndash;20 yrs</td><td className='p-2'>Low</td><td className='p-2'>Coastal, salt air areas</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Composite/faux wood</td><td className='p-2'>$1,000 &ndash; $3,000</td><td className='p-2'>25&ndash;30 yrs</td><td className='p-2'>Low</td><td className='p-2'>Wood look, low maintenance</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Wood</td><td className='p-2'>$1,200 &ndash; $4,500</td><td className='p-2'>15&ndash;30 yrs</td><td className='p-2'>High (annual)</td><td className='p-2'>Traditional, high-end homes</td></tr>
                <tr className='bg-amber-50'><td className='p-2'>Full-view glass/aluminum</td><td className='p-2'>$1,500 &ndash; $5,000</td><td className='p-2'>20&ndash;25 yrs</td><td className='p-2'>Low</td><td className='p-2'>Modern/contemporary homes</td></tr>
              </tbody>
            </table>
          </div>
          <div className='bg-slate-50 border-l-4 border-amber-700 p-5 rounded-r-lg mb-4'>
            <p className='text-slate-700 font-medium text-sm'><strong>The sweet spot for most homeowners:</strong> An insulated steel door in the R-12 to R-16 range. It&apos;s durable, low-maintenance, energy-efficient, and available in dozens of styles, including faux wood finishes that are nearly indistinguishable from real wood at a fraction of the cost and maintenance. Budget $700 to $2,000 for the door, $1,200 to $3,000 installed.</p>
          </div>
        </div>

        {/* Cost by Style */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>By Style</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Cost by Style</h2>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead><tr className='bg-slate-900 text-white'><th className='p-2 text-left font-semibold'>Style</th><th className='p-2 text-left font-semibold'>Avg Cost Installed</th><th className='p-2 text-left font-semibold'>Description</th></tr></thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2'>Standard raised panel</td><td className='p-2'>$800 &ndash; $2,000</td><td className='p-2'>Most common residential style, rectangular panels</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Flush panel</td><td className='p-2'>$800 &ndash; $2,200</td><td className='p-2'>Clean, flat surface, contemporary look</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Carriage house</td><td className='p-2'>$1,200 &ndash; $4,000</td><td className='p-2'>Swing-out barn door appearance, operates like standard overhead</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Contemporary/modern</td><td className='p-2'>$1,500 &ndash; $5,000</td><td className='p-2'>Clean lines, minimal hardware, often with windows</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Full-view glass</td><td className='p-2'>$2,000 &ndash; $6,000</td><td className='p-2'>Aluminum frame with glass panels, maximum natural light</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>French door style</td><td className='p-2'>$2,500 &ndash; $7,000</td><td className='p-2'>Decorative panels mimicking French doors</td></tr>
                <tr className='bg-amber-50'><td className='p-2'>Custom/specialty</td><td className='p-2'>$3,000 &ndash; $10,000</td><td className='p-2'>Fully custom design to match home architecture</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Hidden Costs */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Hidden Costs</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Hidden Costs Most Quotes Don&apos;t Include</h2>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>This is where homeowners get surprised. Your quote for the door and basic installation may not include these items.</p>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead><tr className='bg-slate-900 text-white'><th className='p-2 text-left font-semibold'>Hidden Cost</th><th className='p-2 text-left font-semibold'>Price Range</th><th className='p-2 text-left font-semibold'>Notes</th></tr></thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2'>Old door removal and disposal</td><td className='p-2'>$50 &ndash; $200</td><td className='p-2'>Some installers include this, many don&apos;t. Ask.</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Opener replacement</td><td className='p-2'>$200 &ndash; $500</td><td className='p-2'>If current opener can&apos;t handle new door&apos;s weight</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Track replacement</td><td className='p-2'>$150 &ndash; $300</td><td className='p-2'>Required if switching door type or size</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Structural framing repairs</td><td className='p-2'>$200 &ndash; $1,000</td><td className='p-2'>Rotted header, damaged jambs, out-of-square opening</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Weatherstripping and bottom seal</td><td className='p-2'>$50 &ndash; $150</td><td className='p-2'>New door may not include perimeter seals</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Electrical wiring (new opener)</td><td className='p-2'>$150 &ndash; $400</td><td className='p-2'>If no existing outlet near the opener location</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Permits</td><td className='p-2'>$50 &ndash; $200</td><td className='p-2'>Required in some municipalities</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Painting/finishing (wood doors)</td><td className='p-2'>$200 &ndash; $500</td><td className='p-2'>Wood doors arrive unfinished or primed only</td></tr>
                <tr className='bg-amber-50'><td className='p-2'>Smart opener upgrade</td><td className='p-2'>$50 &ndash; $150</td><td className='p-2'>Adding WiFi connectivity to existing or new opener</td></tr>
              </tbody>
            </table>
          </div>
          <div className='bg-slate-50 border-l-4 border-amber-700 p-5 rounded-r-lg mb-4'>
            <p className='text-slate-700 font-medium text-sm'><strong>How to avoid surprises:</strong> Get a written quote that explicitly states what&apos;s included and excluded. Ask specifically about old door removal, hardware, weatherstripping, and any structural work. A $1,500 quote that excludes $400 in extras is really a $1,900 job.</p>
          </div>
        </div>

        {/* Insulation */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Insulation</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Insulation: Is It Worth the Extra Cost?</h2>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Insulated garage doors cost $200 to $600 more than non-insulated versions of the same door. The question is whether that premium pays for itself.</p>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead><tr className='bg-slate-900 text-white'><th className='p-2 text-left font-semibold'>R-Value</th><th className='p-2 text-left font-semibold'>Level</th><th className='p-2 text-left font-semibold'>Added Cost</th><th className='p-2 text-left font-semibold'>Best For</th></tr></thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2'>R-0</td><td className='p-2'>None</td><td className='p-2'>Baseline</td><td className='p-2'>Detached garages, mild climates, budget projects</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>R-6 to R-9</td><td className='p-2'>Basic</td><td className='p-2'>$100 &ndash; $200</td><td className='p-2'>Most detached garages, moderate climates</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>R-12 to R-13</td><td className='p-2'>Mid-range</td><td className='p-2'>$200 &ndash; $400</td><td className='p-2'>Attached garages (recommended minimum)</td></tr>
                <tr className='bg-amber-50'><td className='p-2'>R-16 to R-18</td><td className='p-2'>Premium</td><td className='p-2'>$400 &ndash; $600</td><td className='p-2'>Heated garages, workshops, rooms above garage</td></tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>According to the Department of Energy, an insulated garage door can reduce energy loss through the garage by up to 70% compared to a non-insulated door. In hot or cold climates, the energy savings typically recoup the $200 to $600 insulation premium within two to four years through lower heating and cooling bills.</p>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>If you spend time in your garage for a workshop, home gym, or hobbies, insulation also reduces noise transmission and makes the space usable year-round, especially when combined with proper garage heating or cooling.</p>
        </div>

        {/* ROI */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>ROI</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>The ROI That Makes This Worth Every Dollar</h2>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Garage door replacement has been the #1 ROI home improvement project for six of the last seven years in the Remodeling Cost vs. Value Report.</p>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead><tr className='bg-slate-900 text-white'><th className='p-2 text-left font-semibold'>Year</th><th className='p-2 text-left font-semibold'>Avg Project Cost</th><th className='p-2 text-left font-semibold'>Resale Value Added</th><th className='p-2 text-left font-semibold'>ROI</th></tr></thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2'>2023</td><td className='p-2'>$4,302</td><td className='p-2'>$4,418</td><td className='p-2'>102.7%</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>2024</td><td className='p-2'>$4,500</td><td className='p-2'>$8,700</td><td className='p-2'>193.9%</td></tr>
                <tr className='bg-amber-50 font-bold'><td className='p-2'>2025</td><td className='p-2'>$4,672</td><td className='p-2'>$12,521</td><td className='p-2'>268%</td></tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Why is the ROI so high? Three reasons. First, the garage door occupies up to one-third of a home&apos;s street-facing facade, making it one of the most visible exterior features. Second, the project cost is relatively low ($1,200 to $4,500 for most homeowners) compared to kitchens and bathrooms. Third, buyers perceive a new garage door as a signal that the entire home has been well-maintained, reducing their anxiety about hidden problems.</p>
        </div>

        {/* How to Save Money */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Save Money</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>How to Save Money on Garage Door Replacement</h2>
          <ul className='space-y-5 text-sm text-slate-700'>
            <li className='flex items-start gap-3'><span className='text-amber-700 font-bold text-base mt-0.5'>&#8226;</span><div><strong>Get three to five quotes.</strong> Pricing varies significantly between installers. Multiple quotes help you identify fair market pricing. Don&apos;t automatically choose the cheapest since it may not include all necessary components.</div></li>
            <li className='flex items-start gap-3'><span className='text-amber-700 font-bold text-base mt-0.5'>&#8226;</span><div><strong>Choose insulated steel over wood.</strong> Modern steel doors with faux wood finishes look remarkably similar to real wood but cost 40% to 60% less, last longer, and require almost no maintenance.</div></li>
            <li className='flex items-start gap-3'><span className='text-amber-700 font-bold text-base mt-0.5'>&#8226;</span><div><strong>Skip unnecessary upgrades.</strong> Windows add $300 to $700. Decorative hardware adds $50 to $300. Smart openers add $50 to $150 over basic openers. Be intentional about which upgrades matter for your situation.</div></li>
            <li className='flex items-start gap-3'><span className='text-amber-700 font-bold text-base mt-0.5'>&#8226;</span><div><strong>Buy during the off-season.</strong> Late fall and winter are typically the slowest seasons for garage door installers. You may get better pricing or promotional offers during these months.</div></li>
            <li className='flex items-start gap-3'><span className='text-amber-700 font-bold text-base mt-0.5'>&#8226;</span><div><strong>Consider keeping your opener.</strong> If your current garage door opener is under 10 years old and working well, it may be compatible with your new door. Keeping a functional opener saves $200 to $500.</div></li>
            <li className='flex items-start gap-3'><span className='text-amber-700 font-bold text-base mt-0.5'>&#8226;</span><div><strong>Don&apos;t DIY the installation.</strong> Garage door springs are under extreme tension and have caused serious injuries and deaths. Professional installation includes spring balancing, safety testing, opener calibration, and a warranty. The $200 to $500 labor cost is well worth the safety and peace of mind.</div></li>
          </ul>
        </div>

        {/* FAQ */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>FAQ</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Frequently Asked Questions</h2>
          <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
          <div className='space-y-6'>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='text-base font-bold text-slate-900 mb-2'>How much does it cost to replace a garage door?</h3>
              <p className='text-slate-700 text-sm'>A standard garage door replacement costs $1,200 to $4,500 installed, including the door, hardware, and professional installation. A single-car door runs $700 to $2,500, and a double-car door runs $1,000 to $3,500. Premium custom doors can exceed $10,000.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='text-base font-bold text-slate-900 mb-2'>Is replacing a garage door worth it?</h3>
              <p className='text-slate-700 text-sm'>Yes. Garage door replacement is the #1 ROI home improvement project in the country, returning 268% of the investment at resale according to the 2025 Cost vs. Value Report. Beyond resale value, a new door improves curb appeal, energy efficiency, security, and daily convenience.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='text-base font-bold text-slate-900 mb-2'>How long does a garage door last?</h3>
              <p className='text-slate-700 text-sm'>Most garage doors last 15 to 30 years depending on the material, climate, and maintenance. Steel and composite doors typically last 20 to 30 years. Wood doors last 15 to 30 years with proper annual maintenance. Fiberglass doors last 15 to 20 years.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='text-base font-bold text-slate-900 mb-2'>Should I repair or replace my garage door?</h3>
              <p className='text-slate-700 text-sm'>Repair if the door is under 15 years old with isolated damage (single broken spring, one dented panel, worn weatherstripping). Replace if repairs exceed 50% of the replacement cost, the door is 15+ years old, multiple panels are damaged, the door is warping or sagging, or you want improved insulation and curb appeal.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='text-base font-bold text-slate-900 mb-2'>How long does garage door replacement take?</h3>
              <p className='text-slate-700 text-sm'>Professional installation typically takes 4 to 6 hours for a standard door, including removal of the old door, installation of the new door, track alignment, spring balancing, opener connection, and safety testing. Custom or complex installations may take a full day.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='text-base font-bold text-slate-900 mb-2'>What is the best material for a garage door?</h3>
              <p className='text-slate-700 text-sm'>Insulated steel is the best choice for most homeowners. It&apos;s durable, low-maintenance, energy-efficient, and available in numerous styles including convincing faux wood finishes. It offers the best balance of cost, performance, and longevity.</p>
            </div>
            <div className='border-b border-slate-200 pb-4'>
              <h3 className='text-base font-bold text-slate-900 mb-2'>Do I need a permit to replace my garage door?</h3>
              <p className='text-slate-700 text-sm'>In most cases, a like-for-like replacement (same size, same location) does not require a permit. If you&apos;re changing the size of the opening, adding electrical work, or making structural modifications, a permit may be required. Check with your local building department.</p>
            </div>
          </div>
        </div>

        {/* Glossary */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Glossary</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Glossary</h2>
          <div className='space-y-4'>
            <div className='border-b border-slate-100 pb-4'>
              <h3 className='text-sm font-bold text-slate-900 mb-1'>R-value</h3>
              <p className='text-slate-700 text-xs'>A measure of a garage door&apos;s insulation capacity. Higher R-values mean better insulation. R-0 is uninsulated. R-16 to R-18 is premium insulation suitable for attached garages in extreme climates.</p>
            </div>
            <div className='border-b border-slate-100 pb-4'>
              <h3 className='text-sm font-bold text-slate-900 mb-1'>Sectional door</h3>
              <p className='text-slate-700 text-xs'>The most common residential garage door type. Made of horizontal panels (sections) connected by hinges that bend as the door travels along vertical and horizontal tracks. Nearly all modern residential garage doors are sectional.</p>
            </div>
            <div className='border-b border-slate-100 pb-4'>
              <h3 className='text-sm font-bold text-slate-900 mb-1'>Torsion spring</h3>
              <p className='text-slate-700 text-xs'>A heavy-duty spring mounted above the door opening that counterbalances the door&apos;s weight. Torsion springs are under extreme tension and should only be replaced by professionals. Lifespan: 10,000 to 20,000 cycles (7 to 14 years of typical use).</p>
            </div>
            <div className='border-b border-slate-100 pb-4'>
              <h3 className='text-sm font-bold text-slate-900 mb-1'>Extension spring</h3>
              <p className='text-slate-700 text-xs'>A spring system that runs along the horizontal tracks on each side of the door. Less expensive than torsion springs but have a shorter lifespan and require safety cables to prevent injury if they break.</p>
            </div>
            <div className='border-b border-slate-100 pb-4'>
              <h3 className='text-sm font-bold text-slate-900 mb-1'>Polyurethane insulation</h3>
              <p className='text-slate-700 text-xs'>Injected foam insulation that fills the entire cavity of a garage door panel. Provides a higher R-value per inch than polystyrene and adds structural rigidity to the door. Found in mid-range to premium insulated doors.</p>
            </div>
            <div className='border-b border-slate-100 pb-4'>
              <h3 className='text-sm font-bold text-slate-900 mb-1'>Polystyrene insulation</h3>
              <p className='text-slate-700 text-xs'>Rigid foam board insulation inserted into garage door panels. Less expensive than polyurethane but provides a lower R-value. Found in basic to mid-range insulated doors.</p>
            </div>
            <div className='border-b border-slate-100 pb-4'>
              <h3 className='text-sm font-bold text-slate-900 mb-1'>Cost vs. Value Report</h3>
              <p className='text-slate-700 text-xs'>An annual study by Zonda published through Remodeling Magazine that compares the average cost of 28 remodeling projects with the value those projects retain at resale across 115 U.S. markets. Garage door replacement has ranked #1 for ROI for six of the last seven years.</p>
            </div>
            <div className='pb-4'>
              <h3 className='text-sm font-bold text-slate-900 mb-1'>Curb appeal</h3>
              <p className='text-slate-700 text-xs'>The visual attractiveness of a home as seen from the street. The garage door can occupy up to one-third of a home&apos;s street-facing facade, making it one of the most impactful elements of curb appeal and a primary driver of the high ROI for garage door replacement.</p>
            </div>
          </div>

                    <LeadForm />
        </div>
      </article>
    </>
  )
}
