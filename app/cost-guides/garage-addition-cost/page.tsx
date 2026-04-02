import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Cost to Build a Garage in 2026: Every Size, Every Type, Every Factor | The Garage Guide',
  description: 'The complete cost guide to building a garage in 2026. Covers attached and detached garages by size from 1-car to 3-car, cost per square foot breakdown by component, permit costs and timeline, site preparation, prefab vs. stick-built, the 10 factors that move the price, ROI at resale, financing options, and what to ask contractors before hiring.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does it cost to build a 2-car garage?', acceptedAnswer: { '@type': 'Answer', text: 'A standard 2-car detached garage (20x20 to 24x24 feet) costs $28,000 to $50,000 fully installed in 2026, including foundation, framing, roofing, siding, garage doors, and basic electrical. An attached 2-car garage of the same size costs $17,000 to $30,000. Finish upgrades like insulation, drywall, epoxy floor, and EV charger can add $5,000 to $15,000.' } },
    { '@type': 'Question', name: 'How much does it cost to build a 1-car garage?', acceptedAnswer: { '@type': 'Answer', text: 'A 1-car detached garage costs $18,000 to $35,000 installed. A 1-car attached garage costs $7,000 to $18,000. The cost per square foot is higher at small sizes because fixed costs like permits, site preparation, and electrical hookup do not shrink proportionally with the structure size.' } },
    { '@type': 'Question', name: 'How much do permits cost to build a garage?', acceptedAnswer: { '@type': 'Answer', text: 'Permits for a garage addition typically cost $500 to $2,000 total, including the building permit and electrical permit. Permit review adds 2 to 8 weeks to the project start date. Skipping permits creates significant legal and financial liability at resale and may result in the structure being required to be removed.' } },
    { '@type': 'Question', name: 'How long does it take to build a garage?', acceptedAnswer: { '@type': 'Answer', text: 'The construction itself takes 4 to 8 weeks for a standard 2-car detached garage. Permit review adds 2 to 8 weeks before construction can begin. A realistic total timeline from contractor selection to move-in is 3 to 5 months. Prefab and steel building kits reduce the construction phase to 1 to 2 weeks but require the same permit timeline.' } },
    { '@type': 'Question', name: 'Does adding a garage increase home value?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, typically by 64 to 81 percent of the project cost. A $40,000 garage addition adds approximately $26,000 to $32,000 in resale value nationally. The ROI is highest in markets where most comparable homes have garages and the subject property lacks one. The non-financial value of daily usability and storage is not captured in resale calculations.' } },
    { '@type': 'Question', name: 'What is the cheapest way to add a garage?', acceptedAnswer: { '@type': 'Answer', text: 'An attached garage is 20 to 25 percent cheaper than detached. A prefab kit reduces labor costs versus custom stick-built. A steel building kit is the cheapest per square foot at sizes above 576 square feet. Leaving interior walls unfinished saves $3,000 to $8,000. The cheapest all-in option is a pre-engineered steel building on a simple slab at $18,000 to $28,000 for a 2-car structure.' } },
    { '@type': 'Question', name: 'Do I need an architect or engineer to build a garage?', acceptedAnswer: { '@type': 'Answer', text: 'Most standard residential garages do not require an architect. Many jurisdictions accept standard pre-engineered plans for common garage sizes. A structural engineer may be required for non-standard designs, unusual site conditions, or if local code requires a stamped plan. A structural engineering review costs $500 to $2,000.' } },
    { '@type': 'Question', name: 'What size garage should I build?', acceptedAnswer: { '@type': 'Answer', text: 'Build one size larger than you think you need. A 2-car garage always fills faster than expected with storage, bikes, and lawn equipment. The 24x24 two-car full size is the recommended standard for a family home. The marginal cost of 24x24 versus 20x20 is $5,000 to $10,000 with significantly higher daily usability.' } },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cost to Build a Garage in 2026: Every Size, Every Type, Every Factor',
  description: 'The complete cost guide to building a garage in 2026 covering attached and detached garages by size, cost per square foot by component, permit costs and timeline, site preparation, prefab vs. stick-built, the 10 factors that move the price, ROI, and financing.',
  image: 'https://thegarage.guide/images/garage cost guide.jpg',
  datePublished: '2026-03-28',
  dateModified: '2026-03-28',
  author: { '@type': 'Organization', name: 'The Garage Guide', url: 'https://thegarage.guide' },
  publisher: { '@type': 'Organization', name: 'The Garage Guide', url: 'https://thegarage.guide' },
}

const costBySizeSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Garage Construction Cost by Size 2026',
  description: 'Cost to build a garage by size and type (attached vs detached) in 2026.',
  variableMeasured: [
    { '@type': 'PropertyValue', name: '1-car standard (12x20)', value: 'Attached $7,000-$13,000, Detached $18,000-$28,000' },
    { '@type': 'PropertyValue', name: '2-car standard (20x20)', value: 'Attached $12,000-$22,000, Detached $28,000-$40,000' },
    { '@type': 'PropertyValue', name: '2-car full (24x24)', value: 'Attached $17,000-$30,000, Detached $35,000-$50,000' },
    { '@type': 'PropertyValue', name: '3-car standard (30x22)', value: 'Attached $20,000-$36,000, Detached $45,000-$65,000' },
    { '@type': 'PropertyValue', name: '3-car full (36x24)', value: 'Attached $26,000-$47,000, Detached $55,000-$70,000+' },
  ],
}

const constructionMethodSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Stick-Built vs Prefab vs Steel Garage Comparison 2026',
  description: 'Comparison of garage construction methods by cost, timeline, and best use case.',
  variableMeasured: [
    { '@type': 'PropertyValue', name: 'Stick-Built', value: '$35-$70/sq ft, 4-12 week build, best for attached garages and HOA neighborhoods' },
    { '@type': 'PropertyValue', name: 'Prefab Kit', value: '$20,000-$45,000 installed for 2-car, 4-8 week total, best for flat lots and simpler projects' },
    { '@type': 'PropertyValue', name: 'Steel Building Kit', value: '$18,000-$40,000 installed for 24x24, 4-8 week total, best for large workshops and rural properties' },
  ],
}

export default function GarageAdditionCost() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Cost Guides', href: '/cost-guides' }, { label: 'Garage Addition Cost' }]} />

      {/* Hero Section */}
      <div className='relative bg-slate-900 text-white py-16 mb-10'>
        <div className='max-w-3xl mx-auto px-4'>
          <Image src='/images/garage cost guide.jpg' alt='Garage addition cost guide' fill className='object-cover opacity-20' priority />
          <div className='relative z-10'>
            <div className='flex items-center space-x-3 mb-4'>
              <span className='text-amber-700 font-bold tracking-wider text-sm uppercase'>GG</span>
              <span className='text-slate-400 text-sm'>The Garage Guide</span>
            </div>
            <p className='text-slate-400 text-sm mb-4'>Updated Mar 2026 &middot; 15 min read</p>
            <span className='inline-block bg-amber-700 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 mb-4'>Cost Guide</span>
            <h1 className='text-3xl md:text-4xl font-bold leading-tight mb-4'>Cost to Build a Garage in 2026:<br />Every Size, Every Type, Every Factor</h1>
            <p className='text-lg text-slate-300'>Building a garage costs $18,000 to $70,000 for most residential projects in 2026.</p>
          </div>
        </div>
      </div>

      {/* TL;DR */}
      <div className='max-w-3xl mx-auto px-4 mb-16'>
        <div className='bg-amber-50 border-l-4 border-amber-500 p-4 mb-6'>
          <p className='text-slate-700 text-sm leading-relaxed'><strong>Quick answer:</strong> Building a garage costs $18,000 to $70,000 for most residential projects in 2026. A basic 1-car detached garage starts around $18,000. A standard 2-car detached garage runs $28,000 to $50,000. A large 3-car garage costs $45,000 to $70,000 or more. Attached garages cost 20 to 25 percent less than detached garages of the same size because one wall and part of the foundation are shared with the house. The three biggest cost drivers are size, attached vs. detached, and finish level. Permits are required in virtually every jurisdiction and add $500 to $2,000 to the budget and 2 to 8 weeks to the timeline.</p>
        </div>
      </div>

      {/* Attached vs. Detached */}
      <div className='max-w-3xl mx-auto px-4 mb-16'>
        <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-wider text-sm uppercase'>Attached vs. Detached</span></div>
        <h2 className='text-2xl font-bold text-slate-900 mb-4'>Attached vs. Detached: The First Decision That Affects Everything</h2>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Before any other cost calculation, the attached vs. detached decision sets the baseline for the entire project. The difference is significant and affects more than just price.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>Attached garage costs $30 to $55 per square foot</strong> installed. The lower cost per square foot reflects the shared wall with the house, the ability to connect to the existing foundation in some configurations, and easier access to the home&apos;s electrical panel. The tradeoff is that attached garage construction is more complex from a permitting standpoint &mdash; it requires fire separation compliance (drywall on the shared wall, fire-rated self-closing door between garage and house), and in some cases requires structural modifications to the existing house.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>Detached garage costs $40 to $70 per square foot</strong> installed. The higher cost reflects the need for four exterior walls, a fully independent foundation, and a separate electrical feed from the main panel. The practical run of electrical conduit from the main panel to a detached garage adds $800 to $3,000 depending on distance and whether trenching through landscaping is required.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'>For a detailed breakdown of electrical planning including load calculations, subpanel sizing, and underground vs overhead run options, see our <Link href='/guides/detached-garage-electrical' className='text-amber-700 underline'>detached garage electrical guide</Link>.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>When to choose attached:</strong> Adding parking and direct house access is the priority. The property layout allows the addition without blocking windows or requiring complex grade changes.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>When to choose detached:</strong> The property layout does not support an attachment, the homeowner wants the garage to function as a workshop or hobby space with its own heating and ventilation system, or keeping noise, fumes, and fire risk separated from the living space is a priority.</p>
      </div>

      {/* Cost by Garage Size */}
      <div className='max-w-3xl mx-auto px-4 mb-16'>
        <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-wider text-sm uppercase'>Cost by Size</span></div>
        <h2 className='text-2xl font-bold text-slate-900 mb-4'>Cost by Garage Size</h2>
        <div className='overflow-x-auto my-6'>
          <table className='w-full text-xs border-collapse'>
            <thead><tr className='bg-slate-900 text-white'><th className='p-2 text-left font-semibold'>Garage Type</th><th className='p-2 text-left font-semibold'>Dimensions</th><th className='p-2 text-left font-semibold'>Square Footage</th><th className='p-2 text-left font-semibold'>Attached Cost</th><th className='p-2 text-left font-semibold'>Detached Cost</th></tr></thead>
            <tbody>
              <tr className='border-b border-slate-200'><td className='p-2'>1-car standard</td><td className='p-2'>12 x 20 ft</td><td className='p-2'>240 sq ft</td><td className='p-2'>$7,000 &ndash; $13,000</td><td className='p-2'>$18,000 &ndash; $28,000</td></tr>
              <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>1-car full</td><td className='p-2'>14 x 24 ft</td><td className='p-2'>336 sq ft</td><td className='p-2'>$10,000 &ndash; $18,000</td><td className='p-2'>$22,000 &ndash; $35,000</td></tr>
              <tr className='border-b border-slate-200'><td className='p-2'>2-car standard</td><td className='p-2'>20 x 20 ft</td><td className='p-2'>400 sq ft</td><td className='p-2'>$12,000 &ndash; $22,000</td><td className='p-2'>$28,000 &ndash; $40,000</td></tr>
              <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2 font-semibold'>2-car full</td><td className='p-2 font-semibold'>24 x 24 ft</td><td className='p-2 font-semibold'>576 sq ft</td><td className='p-2 font-semibold'>$17,000 &ndash; $30,000</td><td className='p-2 font-semibold'>$35,000 &ndash; $50,000</td></tr>
              <tr className='border-b border-slate-200'><td className='p-2'>3-car standard</td><td className='p-2'>30 x 22 ft</td><td className='p-2'>660 sq ft</td><td className='p-2'>$20,000 &ndash; $36,000</td><td className='p-2'>$45,000 &ndash; $65,000</td></tr>
              <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>3-car full</td><td className='p-2'>36 x 24 ft</td><td className='p-2'>864 sq ft</td><td className='p-2'>$26,000 &ndash; $47,000</td><td className='p-2'>$55,000 &ndash; $70,000+</td></tr>
            </tbody>
          </table>
        </div>
        {/* 2-car tip callout */}
        <div className='bg-amber-50 border-l-4 border-amber-500 p-4 mb-4'>
          <p className='text-slate-700 text-sm leading-relaxed'><strong>Note on the 2-car full (24x24):</strong> This is the most common new garage size in the US and represents the best cost efficiency. The 24x24 footprint provides enough space to park two full-size trucks with room for wall storage on both sides. Per-square-foot costs are slightly lower at this size than at smaller sizes because fixed costs (permits, electrical hookup, site prep) are spread across more square footage.</p>
        </div>
        {/* 1-car note callout */}
        <div className='bg-amber-50 border-l-4 border-amber-500 p-4 mb-4'>
          <p className='text-slate-700 text-sm leading-relaxed'><strong>Note on the 1-car small (12x20):</strong> The cost per square foot is highest at small sizes. You still pay for permits, a foundation, site preparation, and electrical service regardless of size. A 240-square-foot garage carries similar fixed costs to a 576-square-foot garage but has fewer square feet to distribute them over.</p>
        </div>
      </div>

      {/* Cost Per Square Foot by Component */}
      <div className='max-w-3xl mx-auto px-4 mb-16'>
        <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-wider text-sm uppercase'>Component Costs</span></div>
        <h2 className='text-2xl font-bold text-slate-900 mb-4'>Cost Per Square Foot by Component</h2>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Understanding what makes up the total cost per square foot helps identify where the money goes and where decisions can move the number up or down.</p>
        <div className='overflow-x-auto my-6'>
          <table className='w-full text-xs border-collapse'>
            <thead><tr className='bg-slate-900 text-white'><th className='p-2 text-left font-semibold'>Component</th><th className='p-2 text-left font-semibold'>Cost Per Square Foot</th><th className='p-2 text-left font-semibold'>Notes</th></tr></thead>
            <tbody>
              <tr className='border-b border-slate-200'><td className='p-2'>Site preparation and grading</td><td className='p-2'>$1 &ndash; $8</td><td className='p-2'>Higher on sloped or wooded lots</td></tr>
              <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Foundation (concrete slab)</td><td className='p-2'>$5 &ndash; $9</td><td className='p-2'>4-inch minimum, reinforced</td></tr>
              <tr className='border-b border-slate-200'><td className='p-2'>Framing (lumber)</td><td className='p-2'>$8 &ndash; $15</td><td className='p-2'>Wall and roof framing</td></tr>
              <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Roofing</td><td className='p-2'>$4 &ndash; $12</td><td className='p-2'>Asphalt shingles on the low end, metal on the high end</td></tr>
              <tr className='border-b border-slate-200'><td className='p-2'>Siding</td><td className='p-2'>$3 &ndash; $12</td><td className='p-2'>Vinyl on the low end, brick on the high end</td></tr>
              <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Garage door(s)</td><td className='p-2'>$3 &ndash; $8</td><td className='p-2'>1 to 2 doors depending on size</td></tr>
              <tr className='border-b border-slate-200'><td className='p-2'>Windows and man door</td><td className='p-2'>$1 &ndash; $4</td><td className='p-2'>Standard package</td></tr>
              <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Electrical rough-in</td><td className='p-2'>$2 &ndash; $6</td><td className='p-2'>Higher for detached with long runs</td></tr>
              <tr className='border-b border-slate-200'><td className='p-2'>Insulation</td><td className='p-2'>$1 &ndash; $4</td><td className='p-2'>Batts on the low end, spray foam on the high end</td></tr>
              <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Drywall</td><td className='p-2'>$2 &ndash; $5</td><td className='p-2'>If finishing interior walls</td></tr>
              <tr className='border-b border-slate-200'><td className='p-2'>Permits and fees</td><td className='p-2'>$1 &ndash; $4</td><td className='p-2'>Varies significantly by jurisdiction</td></tr>
              <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Labor overhead and profit</td><td className='p-2'>$8 &ndash; $15</td><td className='p-2'>General contractor margin</td></tr>
            </tbody>
          </table>
        </div>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>Total typical range:</strong> $35 to $70 per square foot for a stick-built garage with standard finishes, full electrical, and basic insulation.</p>
      </div>

      {/* Permit Costs and Timeline */}
      <div className='max-w-3xl mx-auto px-4 mb-16'>
        <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-wider text-sm uppercase'>Permits</span></div>
        <h2 className='text-2xl font-bold text-slate-900 mb-4'>Permit Costs and Timeline</h2>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Permits are required for any permanent structure in virtually every US municipality. This is not optional and should be budgeted as a line item from the start.</p>
        <h3 className='text-xl font-bold text-slate-900 mt-2 mb-4'>Permit costs by project type:</h3>
        <ul className='list-disc pl-6 mb-4 text-sm text-slate-700 space-y-1'>
          <li>Building permit for a detached garage: $500 to $2,000 depending on jurisdiction and project value</li>
          <li>Electrical permit: $100 to $500</li>
          <li>Additional permits (plumbing if sink or bathroom included): $100 to $500 each</li>
        </ul>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Most jurisdictions base permit fees on the estimated project value or square footage. A $40,000 garage project in a mid-cost-of-living municipality typically incurs $800 to $1,500 in total permit fees.</p>

        {/* Permit timeline warning callout */}
        <div className='bg-red-50 border-l-4 border-red-600 p-4 mb-4'>
          <p className='text-slate-700 text-sm leading-relaxed'><strong>Permit timeline:</strong> Permit review adds 2 to 8 weeks to the project start. Some jurisdictions offer over-the-counter approval for straightforward projects. Others require full plan review by a building department with a 4 to 6-week turnaround. High-growth areas with busy building departments can take 8 to 12 weeks. The permit timeline is the most commonly underestimated part of a garage project. Homeowners who plan to start framing in May need to submit permit applications in February or March, not April.</p>
        </div>

        {/* Unpermitted liability warning callout */}
        <div className='bg-red-50 border-l-4 border-red-600 p-4 mb-4'>
          <p className='text-slate-700 text-sm leading-relaxed'><strong>Why permits matter beyond compliance:</strong> An unpermitted garage is a liability when the property is sold. Most home buyers&apos; attorneys will flag an unpermitted structure. Some lenders will not finance a property with unpermitted improvements. Insurance claims related to an unpermitted structure may be denied. The cost of retroactive permitting &mdash; if even possible &mdash; is typically higher than original permitting and may require demolishing finished work for inspection.</p>
        </div>
      </div>

      {/* Site Preparation Costs */}
      <div className='max-w-3xl mx-auto px-4 mb-16'>
        <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-wider text-sm uppercase'>Site Prep</span></div>
        <h2 className='text-2xl font-bold text-slate-900 mb-4'>Site Preparation Costs</h2>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Site preparation is the category most cost estimates omit and homeowners most commonly underestimate.</p>
        <h3 className='text-xl font-bold text-slate-900 mt-2 mb-4'>Typical site preparation costs:</h3>
        <ul className='list-disc pl-6 mb-4 text-sm text-slate-700 space-y-1'>
          <li>Basic grading (relatively flat lot, minimal vegetation): $500 to $1,500</li>
          <li>Tree removal (1 to 3 trees): $500 to $3,000 depending on size</li>
          <li>Excavation for sloped lot: $1,000 to $5,000</li>
          <li>Utility locating and marking: $50 to $200 (required before any digging)</li>
          <li>Drainage improvements (French drain, swale): $1,000 to $4,000</li>
          <li>Demolition of existing structure: $2,000 to $8,000</li>
        </ul>

        {/* Slope factor callout */}
        <div className='bg-red-50 border-l-4 border-red-600 p-4 mb-4'>
          <p className='text-slate-700 text-sm leading-relaxed'><strong>The slope factor:</strong> A sloped lot is the single most expensive site condition for a garage addition. A lot that drops 2 feet over the garage footprint may require either significant grading and fill (adding $2,000 to $5,000 to the project) or a block foundation rather than a simple slab (adding $3,000 to $8,000 depending on the height differential). A site with a 5-foot drop is a fundamentally different and more expensive project than a flat lot.</p>
        </div>

        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>Frost depth:</strong> In cold climates, frost depth requirements determine how deep the foundation footings must go. In USDA climate zones with frost depths of 48 inches or more (Minnesota, Maine, Montana), footings for a detached garage must go deeper than in warmer climates, adding $500 to $2,000 to foundation costs versus a comparable garage in the South.</p>
      </div>

      {/* Stick-Built vs. Prefab vs. Steel */}
      <div className='max-w-3xl mx-auto px-4 mb-16'>
        <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-wider text-sm uppercase'>Construction Methods</span></div>
        <h2 className='text-2xl font-bold text-slate-900 mb-4'>Stick-Built vs. Prefab vs. Steel Building Kit</h2>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Three distinct construction methods exist for a new garage, each with different cost profiles, timelines, and tradeoffs.</p>

        <h3 className='text-xl font-bold text-slate-900 mt-2 mb-4'>Stick-Built (Site-Built)</h3>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'>The traditional method &mdash; a contractor frames the garage on site from dimensional lumber. Fully customizable in size, roofline, materials, and layout. Matches the appearance of the existing house most easily. The most labor-intensive and most expensive construction method per square foot.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>Cost:</strong> $35 to $70 per square foot installed, all-in.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>Timeline:</strong> 4 to 12 weeks from site prep completion to move-in, excluding permit review time.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>Best for:</strong> Attached garages, garages that need to match house architecture, garages in neighborhoods with aesthetic requirements or HOA standards.</p>

        <h3 className='text-xl font-bold text-slate-900 mt-2 mb-4'>Prefab Garage Kit</h3>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'>A pre-engineered package of pre-cut lumber, hardware, and sometimes pre-framed wall panels, delivered to the site and assembled by a contractor or experienced DIYer. Reduces on-site labor time significantly but still requires a site-poured foundation and electrical work.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>Cost of the kit alone:</strong> $7,000 to $20,000 for a 2-car size.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>Total installed cost including foundation, electrical, doors, and labor:</strong> $20,000 to $45,000.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>Timeline:</strong> Assembly itself takes 1 to 5 days. Total project timeline including foundation, electrical, and finishing still runs 4 to 8 weeks.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>Best for:</strong> Homeowners who want faster construction, simpler projects on flat lots, properties where exact architectural matching is less important.</p>

        <h3 className='text-xl font-bold text-slate-900 mt-2 mb-4'>Pre-Engineered Steel Building Kit</h3>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'>A steel frame and metal panel system engineered and fabricated off-site, then erected on a concrete slab. Significantly lower cost per square foot at larger sizes than stick-built construction. Common for large workshops, storage garages, and rural properties where aesthetics are secondary to function.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>Cost of the kit alone:</strong> $8,000 to $20,000 for a 24x24 structure.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>Total installed cost including slab, erection, doors, and electrical:</strong> $18,000 to $40,000 for a 24x24.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>Timeline:</strong> Erection of the steel frame and panels takes 1 to 3 days once the slab is cured. Total project timeline is 4 to 8 weeks.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>Best for:</strong> Large garages and workshops (30x40 and larger), rural properties, homeowners who prioritize function over aesthetics, properties without HOA restrictions on metal buildings.</p>

        {/* Comparison table */}
        <div className='overflow-x-auto my-6'>
          <table className='w-full text-xs border-collapse'>
            <thead><tr className='bg-slate-900 text-white'><th className='p-2 text-left font-semibold'>Method</th><th className='p-2 text-left font-semibold'>Cost (2-Car Installed)</th><th className='p-2 text-left font-semibold'>Build Timeline</th><th className='p-2 text-left font-semibold'>Best For</th></tr></thead>
            <tbody>
              <tr className='border-b border-slate-200'><td className='p-2'>Stick-built</td><td className='p-2'>$35 &ndash; $70/sq ft</td><td className='p-2'>4 &ndash; 12 weeks</td><td className='p-2'>Attached, HOA, architectural match</td></tr>
              <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Prefab kit</td><td className='p-2'>$20,000 &ndash; $45,000</td><td className='p-2'>4 &ndash; 8 weeks</td><td className='p-2'>Flat lots, faster construction</td></tr>
              <tr className='border-b border-slate-200'><td className='p-2'>Steel building kit</td><td className='p-2'>$18,000 &ndash; $40,000</td><td className='p-2'>4 &ndash; 8 weeks</td><td className='p-2'>Large workshops, rural, budget</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* The 10 Factors That Move the Price */}
      <div className='max-w-3xl mx-auto px-4 mb-16'>
        <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-wider text-sm uppercase'>Cost Factors</span></div>
        <h2 className='text-2xl font-bold text-slate-900 mb-4'>The 10 Factors That Move the Price</h2>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'>These are the variables that explain why two seemingly identical garage projects can end up $15,000 apart.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>1. Lot slope and soil conditions.</strong> A sloped lot or soft soil requiring extra excavation, fill, or a deeper foundation adds $2,000 to $10,000.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>2. Frost depth.</strong> Northern climate zones require deeper footings. A frost depth of 48 inches versus 12 inches adds several thousand dollars to foundation cost.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>3. Distance from the main electrical panel.</strong> Every additional 10 feet of conduit run from the main panel to a detached garage adds $200 to $400. A garage 100 feet from the panel costs $2,000 to $4,000 more in electrical alone than a garage attached to the house.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>4. Roofline complexity.</strong> A simple gable roof is the least expensive. A hip roof, gambrel roof, or any design with dormers, valleys, or multiple pitches adds $3,000 to $8,000 in framing and roofing labor.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>5. HOA and neighborhood requirements.</strong> Some HOAs require the garage to match the house exterior &mdash; specific siding material, trim colors, roofing material, door style. Matching premium brick siding or a standing seam metal roof to an existing house adds $5,000 to $20,000 over a standard garage specification.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>6. Finish level.</strong> A basic garage with bare stud walls, a single light fixture, two outlets, and an uninsulated door is at the low end of the range. A finished garage with drywall, insulation, epoxy floor, LED shop lighting, multiple circuits, a subpanel, and an EV charger is at the high end.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>7. Heating system.</strong> Adding a gas unit heater adds $1,000 to $3,000. Adding a mini-split for year-round conditioning adds $2,000 to $5,000. Both require additional electrical or gas line work.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>8. Plumbing.</strong> A utility sink adds $1,500 to $3,000 including rough-in. A full bathroom (for a garage apartment or ADU) adds $8,000 to $20,000 and triggers additional permit requirements.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>9. Structural engineer requirement.</strong> Some jurisdictions require a stamped structural engineering plan for any new structure over a certain size. A structural engineering review costs $500 to $2,000 and is required in addition to permit fees.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>10. Local labor rates.</strong> Labor costs vary dramatically by region. The same garage project that costs $35,000 in a rural Midwest market can cost $55,000 in a high-cost coastal market. Get three quotes from local contractors &mdash; not national averages &mdash; for a project in your area.</p>
      </div>

      {/* Does Adding a Garage Increase Home Value? */}
      <div className='max-w-3xl mx-auto px-4 mb-16'>
        <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-wider text-sm uppercase'>ROI</span></div>
        <h2 className='text-2xl font-bold text-slate-900 mb-4'>Does Adding a Garage Increase Home Value?</h2>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'>The honest answer based on current data: yes, but typically not by as much as the project costs.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Remodeling Magazine&apos;s annual Cost vs. Value report consistently shows that a midrange garage addition recoups approximately 64 to 81 percent of project cost at resale. A $40,000 garage addition adds approximately $26,000 to $32,000 in resale value on average nationally.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>When the ROI is higher:</strong> In markets where most comparable homes have garages and the subject property does not, adding a garage can recoup close to or above 100 percent of cost because the property was at a competitive disadvantage without one. Dense suburban markets in the Northeast and Midwest where parking is scarce tend to show the strongest ROI for garage additions.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>When the ROI is lower:</strong> In markets where garages are uncommon (dense urban areas, warm climates where covered parking is less valued) or where the subject property is already above the neighborhood price ceiling, the garage addition recoup rate may fall below 50 percent.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>The non-monetary value:</strong> The ROI calculation captures resale value but not daily usability. A homeowner who uses a garage workshop for 10 years, parks in a dry covered space daily, or gains significant storage capacity is receiving value that does not show up in a resale price calculation. For most homeowners, the usability value over the life of ownership exceeds the gap between cost and resale value recovery.</p>
      </div>

      {/* Financing a Garage Addition */}
      <div className='max-w-3xl mx-auto px-4 mb-16'>
        <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-wider text-sm uppercase'>Financing</span></div>
        <h2 className='text-2xl font-bold text-slate-900 mb-4'>Financing a Garage Addition</h2>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'>A garage addition is a major home improvement project. Most homeowners finance it through one of four methods:</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>Home equity loan:</strong> A fixed-rate lump-sum loan secured by home equity. Predictable monthly payments, fixed interest rate, no draw period complexity. Best for homeowners who know the exact project cost upfront and want simple repayment. Current rates (2026) run 7 to 10 percent for well-qualified borrowers.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>HELOC (Home Equity Line of Credit):</strong> A revolving line of credit secured by home equity. Draw funds as needed during construction, pay interest only on amounts drawn. More flexible than a home equity loan for projects where costs may vary. Variable rate introduces payment uncertainty.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>Cash-out refinance:</strong> Refinancing the first mortgage to a higher balance and taking the difference in cash. Only makes sense when refinance rates are at or below the existing mortgage rate. In a high-rate environment (2026), a cash-out refi at current rates may not be advantageous if the existing mortgage was originated at lower rates.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>Construction loan:</strong> A short-term loan that funds construction draws as work is completed, then converts to a permanent mortgage. Typically required for larger projects ($75,000+) or when the existing equity is insufficient for a home equity product. More complex to obtain and administer than a home equity loan.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>For projects under $25,000:</strong> A personal loan or home equity loan is typically the simplest path. Shop multiple lenders &mdash; credit union rates are often meaningfully below bank rates for home improvement loans.</p>
      </div>

      {/* Project Timeline */}
      <div className='max-w-3xl mx-auto px-4 mb-16'>
        <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-wider text-sm uppercase'>Timeline</span></div>
        <h2 className='text-2xl font-bold text-slate-900 mb-4'>Project Timeline: Realistic from Permit to Move-In</h2>
        <div className='overflow-x-auto my-6'>
          <table className='w-full text-xs border-collapse'>
            <thead><tr className='bg-slate-900 text-white'><th className='p-2 text-left font-semibold'>Phase</th><th className='p-2 text-left font-semibold'>Duration</th><th className='p-2 text-left font-semibold'>Notes</th></tr></thead>
            <tbody>
              <tr className='border-b border-slate-200'><td className='p-2'>Contractor selection and quote comparison</td><td className='p-2'>2 &ndash; 4 weeks</td><td className='p-2'>Get minimum 3 quotes</td></tr>
              <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Permit application preparation</td><td className='p-2'>1 &ndash; 2 weeks</td><td className='p-2'>Contractor typically handles</td></tr>
              <tr className='border-b border-slate-200'><td className='p-2'>Permit review and approval</td><td className='p-2'>2 &ndash; 8 weeks</td><td className='p-2'>Varies dramatically by jurisdiction</td></tr>
              <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Site preparation and grading</td><td className='p-2'>3 &ndash; 7 days</td><td className='p-2'>Weather dependent</td></tr>
              <tr className='border-b border-slate-200'><td className='p-2'>Foundation pour and cure</td><td className='p-2'>5 &ndash; 10 days</td><td className='p-2'>Concrete needs 3 to 5 days minimum before framing</td></tr>
              <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Framing</td><td className='p-2'>3 &ndash; 7 days</td><td className='p-2'>Simple roofline on the short end</td></tr>
              <tr className='border-b border-slate-200'><td className='p-2'>Roofing and siding</td><td className='p-2'>5 &ndash; 10 days</td><td className='p-2'>Weather dependent</td></tr>
              <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Electrical rough-in</td><td className='p-2'>2 &ndash; 4 days</td><td className='p-2'></td></tr>
              <tr className='border-b border-slate-200'><td className='p-2'>Insulation and drywall (if finishing)</td><td className='p-2'>5 &ndash; 10 days</td><td className='p-2'></td></tr>
              <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Garage door installation</td><td className='p-2'>1 day</td><td className='p-2'></td></tr>
              <tr className='border-b border-slate-200'><td className='p-2'>Final electrical and finish work</td><td className='p-2'>2 &ndash; 4 days</td><td className='p-2'></td></tr>
              <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Final inspection and certificate of occupancy</td><td className='p-2'>1 &ndash; 3 days</td><td className='p-2'>Scheduling dependent</td></tr>
              <tr className='border-b border-slate-200 font-semibold'><td className='p-2'>Total from permit application to move-in</td><td className='p-2'>3 &ndash; 5 months</td><td className='p-2'>For a standard 2-car detached garage</td></tr>
            </tbody>
          </table>
        </div>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'>The permit review phase is the longest and most variable. In a jurisdiction with a 6-week review period, a May project start requires a March permit application. Plan accordingly.</p>
      </div>

      {/* Questions to Ask Contractors */}
      <div className='max-w-3xl mx-auto px-4 mb-16'>
        <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-wider text-sm uppercase'>Hiring</span></div>
        <h2 className='text-2xl font-bold text-slate-900 mb-4'>Questions to Ask Contractors Before Hiring</h2>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Before signing any contract, confirm the following with every contractor you are considering:</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>1. What is included in the quote?</strong> Get a line-item breakdown &mdash; foundation, framing, roofing, siding, doors, electrical, and any exclusions. Quotes that list a single lump sum without itemization are difficult to compare and hide surprises.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>2. Who pulls the permits?</strong> The contractor should pull all permits. A contractor who asks you to pull your own permits is either unlicensed or trying to avoid being on record as the builder. Decline.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>3. What is the payment schedule?</strong> Standard practice is a deposit (10 to 20 percent) at contract signing, progress payments tied to completion milestones (foundation complete, framing complete, etc.), and a final payment at completion and inspection. Contractors who demand more than 30 percent upfront are a risk.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>4. Are you licensed and insured?</strong> Verify the contractor&apos;s license number with your state licensing board online. Confirm general liability and workers&apos; compensation insurance are current. Ask for certificates.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>5. What subcontractors will you use?</strong> Most general contractors subcontract electrical and sometimes concrete. Know who they are and whether they are also licensed.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>6. What is the warranty on labor and materials?</strong> Standard is 1 year on labor. Materials are covered by manufacturer warranties. Get the labor warranty in writing.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>7. Have you done fire separation work for attached garages?</strong> If the project is an attached garage, confirm the contractor is familiar with and compliant with IRC fire separation requirements &mdash; drywall on the garage side, fire-rated self-closing door between garage and house.</p>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'><strong>8. What is the project timeline and what could delay it?</strong> A contractor who gives a definitive timeline without acknowledging permit review times, material lead times, or weather is not being realistic. A good contractor builds in contingency.</p>
      </div>

      {/* FAQ */}
      <div className='max-w-3xl mx-auto px-4 mb-16'>
        <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-wider text-sm uppercase'>FAQ</span></div>
        <h2 className='text-2xl font-bold text-slate-900 mb-4'>Frequently Asked Questions</h2>

        <h3 className='text-xl font-bold text-slate-900 mt-2 mb-4'>How much does it cost to build a 2-car garage?</h3>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'>A standard 2-car detached garage (20x20 to 24x24 feet) costs $28,000 to $50,000 fully installed in 2026, including foundation, framing, roofing, siding, garage doors, windows, a man door, and basic electrical. An attached 2-car garage of the same size costs $17,000 to $30,000 because one wall and utility access are shared with the house. Finish upgrades &mdash; insulation, drywall, epoxy floor, EV charger, subpanel, workshop lighting &mdash; can add $5,000 to $15,000 to either figure.</p>

        <h3 className='text-xl font-bold text-slate-900 mt-2 mb-4'>How much does it cost to build a 1-car garage?</h3>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'>A 1-car detached garage (12x20 to 14x24 feet) costs $18,000 to $35,000 installed. A 1-car attached garage costs $7,000 to $18,000. The cost per square foot is higher at small sizes because fixed costs (permits, site preparation, electrical hookup) do not shrink proportionally with the structure. A homeowner who needs a 1-car garage and has the lot space should consider building a 2-car instead &mdash; the marginal cost of the extra bay is often only $8,000 to $12,000 and the added utility and resale value is significantly higher.</p>

        <h3 className='text-xl font-bold text-slate-900 mt-2 mb-4'>How much do permits cost to build a garage?</h3>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Permits for a garage addition typically cost $500 to $2,000 total, including the building permit, electrical permit, and any other required permits. Permit fees are set by local jurisdictions and vary significantly &mdash; a rural county may charge $300 while a large city may charge $1,500 for the same project. Permit review adds 2 to 8 weeks to the project start date. Skipping permits to save money creates significant legal and financial liability at resale and may result in the unpermitted structure being required to be removed.</p>

        <h3 className='text-xl font-bold text-slate-900 mt-2 mb-4'>How long does it take to build a garage?</h3>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'>The construction itself &mdash; from breaking ground to a finished, inspected garage &mdash; takes 4 to 8 weeks for a standard 2-car detached garage. The permit review phase adds 2 to 8 weeks before construction can begin. A realistic total timeline from contractor selection to move-in is 3 to 5 months. Projects in jurisdictions with slow permit review, on sloped or difficult lots, or with complex rooflines take longer. Prefab and steel building kits reduce the construction phase to as little as 1 to 2 weeks but still require the same permit timeline.</p>

        <h3 className='text-xl font-bold text-slate-900 mt-2 mb-4'>Does adding a garage increase home value?</h3>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Yes, typically by 64 to 81 percent of the project cost according to Remodeling Magazine&apos;s Cost vs. Value data. A $40,000 garage addition adds approximately $26,000 to $32,000 in resale value nationally. The ROI is highest in markets where most comparable homes have garages and the subject property is at a competitive disadvantage without one. The ROI is lower in urban markets where covered parking is less valued. The non-financial value of daily usability, covered parking, and additional storage is not captured in resale calculations and is significant for most homeowners over the ownership period.</p>

        <h3 className='text-xl font-bold text-slate-900 mt-2 mb-4'>What is the cheapest way to add a garage?</h3>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'>The cheapest path to covered parking depends on the situation. An attached garage addition is 20 to 25 percent cheaper than a detached garage of the same size. A prefab kit reduces labor costs versus custom stick-built. A steel building kit is the cheapest per square foot at sizes above 576 square feet. Finishing only the exterior and basic electrical while leaving interior walls unfinished reduces cost by $3,000 to $8,000 versus a finished garage. The absolute cheapest option &mdash; a pre-engineered steel building on a simple slab &mdash; can provide a 2-car structure for $18,000 to $28,000 all-in in a straightforward installation.</p>

        <h3 className='text-xl font-bold text-slate-900 mt-2 mb-4'>Do I need an architect or engineer to build a garage?</h3>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'>Most standard residential garages do not require an architect. Many jurisdictions accept standard pre-engineered plans that contractors use routinely for common garage sizes and designs. A structural engineer may be required if the design is non-standard, the lot presents unusual conditions (steep slope, poor soil), or if local code requires a stamped structural engineering plan for any new structure. A structural engineer review costs $500 to $2,000. For attached garages that involve modifications to the existing house structure, a structural assessment is recommended even if not required.</p>

        <h3 className='text-xl font-bold text-slate-900 mt-2 mb-4'>What size garage should I build?</h3>
        {/* "Build one size larger" tip callout */}
        <div className='bg-amber-50 border-l-4 border-amber-500 p-4 mb-4'>
          <p className='text-slate-700 text-sm leading-relaxed'><strong>Build one size larger than you think you need.</strong> A 2-car garage always fills up faster than expected with storage, a workbench, bikes, lawn equipment, and seasonal items. If the budget allows and the lot supports it, the 24x24 two-car full size is the recommended standard for a family home &mdash; it parks two full-size vehicles with room for wall storage on both sides. The marginal cost of building 24x24 versus 20x20 is $5,000 to $10,000. The difference in daily usability is significant. See the <Link href='/guides/complete-garage-guide' className='text-amber-700 underline'>complete garage guide</Link> for the full garage planning framework.</p>
        </div>
      </div>

      {/* Glossary */}
      <div className='max-w-3xl mx-auto px-4 mb-16'>
        <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-wider text-sm uppercase'>Reference</span></div>
        <h2 className='text-2xl font-bold text-slate-900 mb-4'>Glossary</h2>
        <h3 className='text-xl font-bold text-slate-900 mt-2 mb-4'>Concrete Slab Foundation</h3>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'>The poured concrete base that supports a residential garage structure. A standard residential garage slab is 4 inches thick, reinforced with wire mesh or rebar, and slopes slightly toward the garage door opening for drainage. In cold climates with deep frost lines, the perimeter of the slab must rest on footings that extend below the frost depth to prevent heaving. Thickened-edge slabs &mdash; where the perimeter is poured thicker (typically 12 inches) to serve as the footing &mdash; are standard in moderate climates. Sloped or unstable lots may require poured concrete perimeter footings or a stem wall foundation rather than a simple slab.</p>
        <h3 className='text-xl font-bold text-slate-900 mt-2 mb-4'>Fire Separation</h3>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'>The assembly required by the International Residential Code between an attached garage and the living space of a home, including a minimum of 1/2-inch drywall on the garage side of shared walls, 5/8-inch Type X drywall on the ceiling if living space is above the garage, and a solid-core or fire-rated self-closing door between the garage and house. Fire separation compliance is a cost item in attached garage construction &mdash; the drywall, fire-rated door, and proper framing of the assembly add to the project cost but are required by code and are a life safety requirement.</p>
        <h3 className='text-xl font-bold text-slate-900 mt-2 mb-4'>Stick-Built Construction</h3>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'>The traditional method of on-site garage construction in which a contractor frames walls and roof from dimensional lumber delivered to the site. Stick-built garages are fully customizable in size, layout, roofline, and materials and most easily match the architecture of the existing house. They are more labor-intensive and expensive per square foot than prefab or steel building alternatives but offer the greatest design flexibility and are the standard for attached garages and garages in neighborhoods with aesthetic requirements.</p>
        <h3 className='text-xl font-bold text-slate-900 mt-2 mb-4'>Pre-Engineered Steel Building</h3>
        <p className='text-slate-700 leading-relaxed mb-4 text-sm'>A structure fabricated off-site as a complete kit of steel frame members and metal panel cladding, then erected on a prepared concrete slab. Pre-engineered steel buildings are significantly less expensive per square foot than stick-built construction at larger sizes (30x40 feet and above) and erect in 1 to 3 days. They are common for large garages, workshops, and rural storage structures. Limitations include a distinct industrial aesthetic, limited design customization, and restrictions in some HOA-governed communities that prohibit metal building exteriors.</p>
      </div>

      {/* External Resource - NAHB */}
      <div className='max-w-3xl mx-auto px-4 mb-16'>
        <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-wider text-sm uppercase'>Resource</span></div>
        <h2 className='text-2xl font-bold text-slate-900 mb-4'>External Resource</h2>
        <a href='https://www.nahb.org' className='block p-4 border border-slate-200 rounded hover:border-amber-700 transition' target='_blank' rel='noopener noreferrer'>
          <span className='inline-block bg-slate-900 text-white text-xs font-bold uppercase tracking-wider px-2 py-0.5 mb-2'>NAHB</span>
          <h3 className='text-sm font-bold text-slate-900 mb-1'>National Association of Home Builders</h3>
          <p className='text-xs text-slate-600'>Publishes annual housing and construction cost data including garage construction statistics, regional cost variation data, and square footage trends for new residential construction. Their Cost of Constructing a Home report is the most comprehensive published source for understanding residential construction costs at the component level.</p>
        </a>
      </div>

      {/* Related Guides */}
      <div className='max-w-3xl mx-auto px-4 mb-16'>
        <h2 className='text-2xl font-bold text-slate-900 mb-4'>Related Guides</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <Link href='/guides/complete-garage-guide' className='block p-4 border border-slate-200 rounded hover:border-amber-700 transition'>
            <span className='inline-block bg-amber-700 text-white text-xs font-bold uppercase tracking-wider px-2 py-0.5 mb-2'>Guide</span>
            <h3 className='text-sm font-bold text-slate-900'>The Complete Garage Guide 2026</h3>
          </Link>
          <Link href='/cost-guides/garage-floor-coating-cost' className='block p-4 border border-slate-200 rounded hover:border-amber-700 transition'>
            <span className='inline-block bg-amber-700 text-white text-xs font-bold uppercase tracking-wider px-2 py-0.5 mb-2'>Cost Guide</span>
            <h3 className='text-sm font-bold text-slate-900'>Garage Floor Coating Cost 2026</h3>
          </Link>
          <Link href='/cost-guides/garage-conversion-cost' className='block p-4 border border-slate-200 rounded hover:border-amber-700 transition'>
            <span className='inline-block bg-amber-700 text-white text-xs font-bold uppercase tracking-wider px-2 py-0.5 mb-2'>Cost Guide</span>
            <h3 className='text-sm font-bold text-slate-900'>Garage Conversion Cost Guide</h3>
          </Link>
          <Link href='/cost-guides/garage-door-replacement-cost' className='block p-4 border border-slate-200 rounded hover:border-amber-700 transition'>
            <span className='inline-block bg-amber-700 text-white text-xs font-bold uppercase tracking-wider px-2 py-0.5 mb-2'>Cost Guide</span>
            <h3 className='text-sm font-bold text-slate-900'>Garage Door Replacement Cost</h3>
          </Link>
          <Link href='/guides/how-to-insulate-garage' className='block p-4 border border-slate-200 rounded hover:border-amber-700 transition'>
            <span className='inline-block bg-amber-700 text-white text-xs font-bold uppercase tracking-wider px-2 py-0.5 mb-2'>Guide</span>
            <h3 className='text-sm font-bold text-slate-900'>How to Insulate Your Garage</h3>
          </Link>
          <Link href='/guides/ev-charger-installation' className='block p-4 border border-slate-200 rounded hover:border-amber-700 transition'>
            <span className='inline-block bg-amber-700 text-white text-xs font-bold uppercase tracking-wider px-2 py-0.5 mb-2'>Guide</span>
            <h3 className='text-sm font-bold text-slate-900'>EV Charger Installation Guide</h3>
          </Link>
          <Link href='/reviews/best-garage-storage-systems' className='block p-4 border border-slate-200 rounded hover:border-amber-700 transition'>
            <span className='inline-block bg-amber-700 text-white text-xs font-bold uppercase tracking-wider px-2 py-0.5 mb-2'>Review</span>
            <h3 className='text-sm font-bold text-slate-900'>Best Garage Storage Systems 2026</h3>
          </Link>
          <Link href='/comparisons/attached-vs-detached-garage' className='block p-4 border border-slate-200 rounded hover:border-amber-700 transition'>
            <span className='inline-block bg-amber-700 text-white text-xs font-bold uppercase tracking-wider px-2 py-0.5 mb-2'>Comparison</span>
            <h3 className='text-sm font-bold text-slate-900'>Attached vs. Detached Garage</h3>
          </Link>
        </div>
      </div>

      {/* Lead Form */}
      <div className='max-w-3xl mx-auto px-4 mb-16'>
        <LeadForm />
      </div>

      {/* Schema Scripts */}
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(costBySizeSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(constructionMethodSchema) }} />
    </>
  )
}
