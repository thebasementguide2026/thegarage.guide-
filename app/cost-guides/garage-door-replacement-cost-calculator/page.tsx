import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LeadForm from '@/components/LeadForm'
import BeehiivEmailCapture from '@/components/BeehiivEmailCapture'
import Calculator from './Calculator'
import CtaLink from './CtaLink'

export const metadata: Metadata = {
  title: 'Garage Door Replacement Cost Calculator 2026 | The Garage Guide',
  description: 'Free 2026 garage door replacement cost calculator. Get an installed price range based on door type, size, insulation, opener, and region. No premium unlock, no email required.',
  alternates: { canonical: 'https://thegarage.guide/cost-guides/garage-door-replacement-cost-calculator' },
  openGraph: {
    title: 'Garage Door Replacement Cost Calculator 2026',
    description: 'Get an installed garage door price range in seconds. 2026 national pricing data.',
    url: 'https://thegarage.guide/cost-guides/garage-door-replacement-cost-calculator',
    type: 'article',
    images: [{ url: 'https://thegarage.guide/images/garagedooropening.jpg' }],
  },
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Garage Door Replacement Cost Calculator 2026',
  url: 'https://thegarage.guide/cost-guides/garage-door-replacement-cost-calculator',
  description: 'Free 2026 garage door replacement cost calculator. Get an installed price range based on door type, size, insulation, opener, and region.',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'The Garage Guide', url: 'https://thegarage.guide' },
  primaryImageOfPage: 'https://thegarage.guide/images/garagedooropening.jpg',
  datePublished: '2026-05-04',
  dateModified: '2026-05-04',
}

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Garage Door Replacement Cost Calculator',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web',
  url: 'https://thegarage.guide/cost-guides/garage-door-replacement-cost-calculator',
  description: 'Estimates installed garage door replacement cost based on door type, size, insulation, windows, opener, install complexity, region, and haul-away.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: { '@type': 'Organization', name: 'The Garage Guide', url: 'https://thegarage.guide' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How accurate is this garage door replacement cost calculator?', acceptedAnswer: { '@type': 'Answer', text: 'The calculator uses 2026 national pricing data and gives a realistic installed cost range for the configuration you choose. Actual quotes from local installers vary by manufacturer, hardware grade, and site conditions, so treat the range as a starting point, not a final quote.' } },
    { '@type': 'Question', name: 'Does the estimate include installation labor?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every estimate is fully installed and includes the door, hardware, professional labor, and removal of the old door if you select haul-away. Labor scales with door size, install complexity, and your region.' } },
    { '@type': 'Question', name: 'Why does region matter so much?', acceptedAnswer: { '@type': 'Answer', text: 'Labor rates and overhead vary widely by market. The same insulated steel door installed in a lower-cost rural market can be 20 to 30 percent cheaper than the same door in a high-cost coastal metro. We adjust the estimate for three broad regional bands.' } },
    { '@type': 'Question', name: 'Should I replace the opener at the same time?', acceptedAnswer: { '@type': 'Answer', text: 'If your opener is over 10 to 15 years old or noisy, replacing it during the door install saves a second service call and often nets a small bundle discount. Belt-drive and smart Wi-Fi openers cost more up front but are quieter and add convenience features.' } },
    { '@type': 'Question', name: 'Is a permit required to replace a garage door?', acceptedAnswer: { '@type': 'Answer', text: 'A like-for-like swap (same size, same opening) usually does not require a permit. If you change the rough-opening size, modify the framing, or add electrical work, your municipality may require a permit. Confirm with your local building department.' } },
    { '@type': 'Question', name: 'What is the cheapest way to replace a garage door?', acceptedAnswer: { '@type': 'Answer', text: 'Choose a standard non-insulated steel sectional in a single-car size, keep your existing opener, skip windows, and dispose of the old door yourself. That configuration typically lands between $900 and $1,800 installed in average markets.' } },
    { '@type': 'Question', name: 'Do you sell or store the data I enter?', acceptedAnswer: { '@type': 'Answer', text: 'No. The calculator runs entirely in your browser. None of your selections are stored or sold. The optional quote form below the calculator is separate and only sends your information to local pros if you submit it.' } },
  ],
}

export default function GarageDoorCostCalculator() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumbs items={[
        { label: 'Cost Guides', href: '/cost-guides' },
        { label: 'Garage Door Replacement Cost Calculator' },
      ]} />

      <section className='relative h-[70vh] min-h-[500px] bg-slate-900 overflow-hidden'>
        <Image src='/images/garagedooropening.jpg' alt='Modern garage door opening on residential home' fill className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100' priority />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px bg-amber-700'></div>
            <span className='text-amber-500 font-bold tracking-[0.3em] text-sm uppercase'>Cost Calculator</span>
          </div>
          <h1 className='text-4xl md:text-6xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>Garage Door Replacement<br /><span className='text-amber-500'>Cost Calculator 2026</span></h1>
          <p className='text-lg text-slate-300 max-w-2xl mb-10 font-medium leading-relaxed'>Get an installed price range in seconds. Pick your door type, size, insulation, opener, and region &mdash; we do the math with 2026 national pricing data.</p>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 rounded-full bg-amber-700 flex items-center justify-center text-white font-bold text-sm'>GG</div>
            <div><p className='text-white font-semibold'>The Garage Guide</p><p className='text-slate-400 text-sm'>Updated May 2026 &middot; Free, no email required</p></div>
          </div>
        </div>
      </section>

      <article className='max-w-4xl mx-auto px-4 py-12'>

        {/* Quick Answer */}
        <div className='bg-slate-50 border-l-4 border-amber-700 p-5 rounded-r-lg mb-10'>
          <p className='text-slate-700 text-sm leading-relaxed'><strong>Quick answer:</strong> Most 2026 garage door replacements land between <strong>$1,200 and $4,500 installed</strong>. Single-car standard steel doors start around $900. Double-car insulated doors typically run $2,000 to $3,500. Carriage-house and wood/designer doors push past $4,500 and can exceed $6,000 for premium configurations. Use the calculator below to get a number tailored to your exact setup.</p>
        </div>

        <p className='text-base text-slate-700 leading-relaxed mb-8'>This calculator uses the same pricing logic that drives our full <Link href='/cost-guides/garage-door-replacement-cost' className='text-amber-700 underline'>Garage Door Replacement Cost guide</Link>. The estimate factors door type, size, insulation upgrades, windows, opener, install complexity (like-for-like vs. framing changes), regional cost of living, and haul-away. There is no premium version, no unlock screen, and no email gate &mdash; everything runs in your browser.</p>

        {/* Calculator */}
        <div className='mb-12'>
          <Calculator />
        </div>

        {/* Post-result CTA */}
        <div className='bg-slate-900 rounded-xl p-6 md:p-8 mb-16 text-center'>
          <p className='text-amber-500 font-bold tracking-[0.3em] text-xs uppercase mb-2'>Ready for Real Quotes?</p>
          <h3 className='text-2xl md:text-3xl font-black text-white mb-3 tracking-tight'>Compare Local Installer Pricing</h3>
          <p className='text-slate-300 text-sm max-w-xl mx-auto mb-5'>Your calculator estimate is the national range. Real local quotes are what you actually pay. Get free no-obligation quotes from vetted garage door pros in your zip code.</p>
          <CtaLink href='#get-quotes' ctaText='Get Free Local Quotes' placement='post_result' className='inline-block px-8 py-3 bg-amber-700 hover:bg-amber-800 text-white font-bold rounded-lg transition-colors text-sm tracking-wide uppercase'>
            Get Free Local Quotes
          </CtaLink>
        </div>

        {/* Cost by Door Type */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>By Door Type</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Garage Door Cost by Type (2026)</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Door type is the single biggest driver of your final price. Standard steel sectional doors are the budget pick. Insulated steel is the most popular upgrade for daily quality of life. Carriage-house and wood/designer doors push into premium territory.</p>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead><tr className='bg-slate-900 text-white'><th className='p-2 text-left font-semibold'>Door Type</th><th className='p-2 text-left font-semibold'>Door Only</th><th className='p-2 text-left font-semibold'>Installed (Single)</th><th className='p-2 text-left font-semibold'>Installed (Double)</th></tr></thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2'>Standard steel sectional</td><td className='p-2'>$400 &ndash; $900</td><td className='p-2'>$900 &ndash; $1,800</td><td className='p-2'>$1,400 &ndash; $2,600</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Insulated steel</td><td className='p-2'>$700 &ndash; $1,400</td><td className='p-2'>$1,200 &ndash; $2,400</td><td className='p-2'>$1,800 &ndash; $3,500</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Double-layer insulated steel</td><td className='p-2'>$1,000 &ndash; $1,900</td><td className='p-2'>$1,600 &ndash; $2,900</td><td className='p-2'>$2,200 &ndash; $4,000</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Carriage-house style</td><td className='p-2'>$1,200 &ndash; $2,800</td><td className='p-2'>$1,800 &ndash; $3,500</td><td className='p-2'>$2,500 &ndash; $4,800</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Aluminum and glass (modern)</td><td className='p-2'>$1,800 &ndash; $3,800</td><td className='p-2'>$2,400 &ndash; $4,500</td><td className='p-2'>$3,500 &ndash; $5,800</td></tr>
                <tr className='bg-amber-50'><td className='p-2'>Wood / designer</td><td className='p-2'>$2,000 &ndash; $4,500</td><td className='p-2'>$2,800 &ndash; $5,200</td><td className='p-2'>$3,800 &ndash; $6,500</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Cost by Size */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>By Size</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>How Door Size Affects Cost</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Bigger doors mean more material, more hardware, and more labor. A double-car door is roughly 1.5 to 1.7 times the cost of a single-car door of the same type. Tall doors (8 ft tall instead of 7 ft) add 10 to 15 percent.</p>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead><tr className='bg-slate-900 text-white'><th className='p-2 text-left font-semibold'>Size</th><th className='p-2 text-left font-semibold'>Cost Multiplier</th><th className='p-2 text-left font-semibold'>Typical Use</th></tr></thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2'>8 ft x 7 ft (single)</td><td className='p-2'>1.0x baseline</td><td className='p-2'>Standard single garage</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>9 ft x 7 ft (single wide)</td><td className='p-2'>1.05x</td><td className='p-2'>SUV / truck access</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>8 ft x 8 ft (single tall)</td><td className='p-2'>1.15x</td><td className='p-2'>Truck or van clearance</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>16 ft x 7 ft (double)</td><td className='p-2'>1.55x</td><td className='p-2'>Two-car garage</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>18 ft x 7 ft (double wide)</td><td className='p-2'>1.7x</td><td className='p-2'>Wider two-car bays</td></tr>
                <tr className='bg-amber-50'><td className='p-2'>16 ft x 8 ft (double tall)</td><td className='p-2'>1.7x</td><td className='p-2'>Workshop / RV</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Add-ons */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Add-ons</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Common Add-ons and What They Cost</h2>
          <div className='overflow-x-auto my-6'>
            <table className='w-full text-xs border-collapse'>
              <thead><tr className='bg-slate-900 text-white'><th className='p-2 text-left font-semibold'>Add-on</th><th className='p-2 text-left font-semibold'>Added Cost</th><th className='p-2 text-left font-semibold'>Notes</th></tr></thead>
              <tbody>
                <tr className='border-b border-slate-200'><td className='p-2'>Standard chain-drive opener</td><td className='p-2'>$218 &ndash; $380</td><td className='p-2'>Cheapest option, more noise</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Belt-drive opener</td><td className='p-2'>$320 &ndash; $520</td><td className='p-2'>Quietest mainstream choice</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Smart Wi-Fi opener</td><td className='p-2'>$420 &ndash; $706</td><td className='p-2'>App control, camera options</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Standard polystyrene insulation</td><td className='p-2'>$80 &ndash; $220</td><td className='p-2'>Good R-value bump</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Premium polyurethane insulation</td><td className='p-2'>$200 &ndash; $450</td><td className='p-2'>R-16+ for heated garages</td></tr>
                <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Single row of windows</td><td className='p-2'>$120 &ndash; $280</td><td className='p-2'>Most popular curb-appeal pick</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Decorative / multi-row windows</td><td className='p-2'>$250 &ndash; $600</td><td className='p-2'>Carriage-house and modern looks</td></tr>
                <tr className='bg-amber-50'><td className='p-2'>Haul away old door</td><td className='p-2'>$50 &ndash; $150</td><td className='p-2'>Often included in mid-range bids</td></tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 text-sm leading-relaxed'>For a deeper dive on opener selection, see our <Link href='/reviews/best-garage-door-openers' className='text-amber-700 underline'>best garage door openers review</Link> and the <Link href='/guides/smart-garage-door-opener-retrofit' className='text-amber-700 underline'>smart opener retrofit guide</Link>.</p>
        </div>

        {/* Region */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Region</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>How Region Changes the Number</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>The same insulated steel double door can swing 25 percent or more on labor alone depending on your market. We bucket installs into three regional bands.</p>
          <ul className='list-disc pl-6 space-y-2 text-sm text-slate-700'>
            <li><strong>Lower-cost (~0.9x):</strong> Rural areas, much of the South and Midwest. Lower labor rates and overhead.</li>
            <li><strong>Average metro (1.0x baseline):</strong> Most suburban metros across the country.</li>
            <li><strong>High-cost (~1.15x):</strong> Northeast corridor, West Coast metros, Hawaii, and other high cost-of-living regions.</li>
          </ul>
        </div>

        {/* Repair vs Replace mini */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Repair or Replace</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Should You Repair Instead?</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Before you spend $1,200 to $4,500 on a new door, confirm you actually need one. A broken spring, a single dented panel, or a noisy operation are usually repairs in the $50 to $700 range. Use the 50 percent rule: if repair quotes exceed half the cost of a new door, replace it. Get the full breakdown in our <Link href='/cost-guides/garage-door-replacement-cost' className='text-amber-700 underline'>main garage door replacement cost guide</Link> and the <Link href='/problems/garage-door-spring-replacement' className='text-amber-700 underline'>spring replacement walkthrough</Link>.</p>
        </div>

        {/* FAQ */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>FAQ</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Frequently Asked Questions</h2>
          <div className='space-y-3'>
            <details className='bg-slate-50 border border-slate-200 rounded-lg p-4'>
              <summary className='font-semibold text-slate-900 cursor-pointer text-sm'>How accurate is this calculator?</summary>
              <p className='text-slate-700 text-sm mt-3 leading-relaxed'>It uses 2026 national pricing data and gives a realistic installed range for the configuration you select. Real local quotes vary by manufacturer, hardware grade, and site conditions, so treat the range as a starting point.</p>
            </details>
            <details className='bg-slate-50 border border-slate-200 rounded-lg p-4'>
              <summary className='font-semibold text-slate-900 cursor-pointer text-sm'>Does the estimate include labor?</summary>
              <p className='text-slate-700 text-sm mt-3 leading-relaxed'>Yes. Every estimate is fully installed and includes the door, hardware, and professional labor. Haul-away of the old door is added when you select that option.</p>
            </details>
            <details className='bg-slate-50 border border-slate-200 rounded-lg p-4'>
              <summary className='font-semibold text-slate-900 cursor-pointer text-sm'>Why does region matter so much?</summary>
              <p className='text-slate-700 text-sm mt-3 leading-relaxed'>Labor rates and overhead vary widely. The same door in a rural Midwest market can be 20 to 30 percent cheaper than in a high-cost coastal metro. We adjust for three broad regional bands.</p>
            </details>
            <details className='bg-slate-50 border border-slate-200 rounded-lg p-4'>
              <summary className='font-semibold text-slate-900 cursor-pointer text-sm'>Should I replace the opener at the same time?</summary>
              <p className='text-slate-700 text-sm mt-3 leading-relaxed'>If your opener is over 10 to 15 years old or noisy, doing both at once saves a second service call and often nets a small bundle discount. Belt-drive and smart Wi-Fi openers cost more up front but are quieter and add convenience features.</p>
            </details>
            <details className='bg-slate-50 border border-slate-200 rounded-lg p-4'>
              <summary className='font-semibold text-slate-900 cursor-pointer text-sm'>Do I need a permit?</summary>
              <p className='text-slate-700 text-sm mt-3 leading-relaxed'>A like-for-like swap usually does not require a permit. Changing the rough-opening size or modifying framing may. Check with your local building department.</p>
            </details>
            <details className='bg-slate-50 border border-slate-200 rounded-lg p-4'>
              <summary className='font-semibold text-slate-900 cursor-pointer text-sm'>What is the cheapest way to replace a garage door?</summary>
              <p className='text-slate-700 text-sm mt-3 leading-relaxed'>Standard non-insulated steel sectional in a single-car size, keep your existing opener, no windows, dispose of the old door yourself. That configuration typically lands between $900 and $1,800 installed in average markets.</p>
            </details>
            <details className='bg-slate-50 border border-slate-200 rounded-lg p-4'>
              <summary className='font-semibold text-slate-900 cursor-pointer text-sm'>Do you sell or store the data I enter?</summary>
              <p className='text-slate-700 text-sm mt-3 leading-relaxed'>No. The calculator runs entirely in your browser. None of your selections are stored or sold. The optional quote form below is separate and only sends information to local pros if you submit it.</p>
            </details>
          </div>
        </div>

        {/* Newsletter */}
        <div className='mb-12'>
          <BeehiivEmailCapture />
        </div>

        {/* Related */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'><span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Keep Reading</span><div className='flex-1 h-px bg-slate-200'></div></div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Related Garage Cost Guides</h2>
          <div className='grid md:grid-cols-2 gap-4'>
            <Link href='/cost-guides/garage-door-replacement-cost' className='block bg-white border border-slate-200 rounded-lg p-5 hover:shadow-lg transition-shadow'>
              <p className='text-amber-700 font-bold tracking-[0.2em] text-[10px] uppercase mb-1'>Cost Guide</p>
              <h3 className='text-lg font-bold text-slate-900 mb-1'>Full Garage Door Replacement Cost Guide</h3>
              <p className='text-slate-600 text-sm'>Complete 2026 price breakdown by size, material, style, insulation, and hidden costs.</p>
            </Link>
            <Link href='/cost-guides/garage-floor-coating-cost' className='block bg-white border border-slate-200 rounded-lg p-5 hover:shadow-lg transition-shadow'>
              <p className='text-amber-700 font-bold tracking-[0.2em] text-[10px] uppercase mb-1'>Cost Guide</p>
              <h3 className='text-lg font-bold text-slate-900 mb-1'>Garage Floor Coating Cost</h3>
              <p className='text-slate-600 text-sm'>Epoxy, polyurea, polyaspartic, and DIY pricing per square foot installed.</p>
            </Link>
            <Link href='/cost-guides/garage-insulation-cost' className='block bg-white border border-slate-200 rounded-lg p-5 hover:shadow-lg transition-shadow'>
              <p className='text-amber-700 font-bold tracking-[0.2em] text-[10px] uppercase mb-1'>Cost Guide</p>
              <h3 className='text-lg font-bold text-slate-900 mb-1'>Garage Insulation Cost</h3>
              <p className='text-slate-600 text-sm'>What it costs to insulate walls, ceiling, and door for a comfortable garage.</p>
            </Link>
            <Link href='/reviews/best-garage-door-openers' className='block bg-white border border-slate-200 rounded-lg p-5 hover:shadow-lg transition-shadow'>
              <p className='text-amber-700 font-bold tracking-[0.2em] text-[10px] uppercase mb-1'>Review</p>
              <h3 className='text-lg font-bold text-slate-900 mb-1'>Best Garage Door Openers</h3>
              <p className='text-slate-600 text-sm'>Top chain, belt, and smart Wi-Fi openers ranked for noise, reliability, and features.</p>
            </Link>
          </div>
        </div>

        {/* Lead form */}
        <div id='get-quotes'>
          <LeadForm />
        </div>
      </article>
    </>
  )
}
