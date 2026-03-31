import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'How to Winterize Your Garage: The Complete Fall Checklist | The Garage Guide',
  description: 'How to winterize your garage before winter. Seals, insulation R-values, lubrication, pipe protection, heater safety, and the full fall checklist.',
  alternates: { canonical: 'https://thegarage.guide/guides/how-to-winterize-your-garage' },
  openGraph: {
    title: 'How to Winterize Your Garage: The Complete Fall Checklist | The Garage Guide',
    description: 'How to winterize your garage before winter. Seals, insulation R-values, lubrication, pipe protection, heater safety, and the full fall checklist.',
    url: 'https://thegarage.guide/guides/how-to-winterize-your-garage',
    siteName: 'The Garage Guide',
    type: 'article',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'When should I winterize my garage?', acceptedAnswer: { '@type': 'Answer', text: 'The ideal window is mid-October to early November, after the heat of summer has passed but before the first hard freeze. Most winterization tasks cannot be done effectively in freezing temperatures — caulk does not cure below 40°F, sealers need 50°F minimum, and lubricants apply poorly when it is already cold. Aim to complete everything before your first forecast night below 32°F.' } },
    { '@type': 'Question', name: 'How do I stop my garage door from freezing to the ground?', acceptedAnswer: { '@type': 'Answer', text: 'Apply silicone spray to the bottom door seal every fall. Silicone prevents the rubber from bonding to ice on the concrete floor. If the door has already frozen, do not press the opener button repeatedly — this burns out the motor. Instead, disconnect the opener, chip away the ice from outside with a scraper, apply warm (not boiling) water to melt residual ice, then lift the door manually. See our garage door won\'t open guide for the full frozen door procedure.' } },
    { '@type': 'Question', name: 'What R-value should a garage door have for winter?', acceptedAnswer: { '@type': 'Answer', text: 'For a garage that is occasionally heated or attached to the house, target R-8 minimum on the door. This is achievable with a $50 to $100 DIY foam board kit. For a heated workshop garage, target R-12 to R-16, which requires either a high-quality insulated door or multiple layers of foam board. An uninsulated single-layer steel door has an effective R-value of 0 to 2, which is essentially no thermal barrier at all.' } },
    { '@type': 'Question', name: 'Should I insulate my garage walls for winter?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, if the walls are unfinished (exposed studs with no existing insulation). R-13 fiberglass batts in 2x4 stud bays are the standard. They cost $0.30 to $0.50 per square foot and install in a few hours. The ceiling has more impact on heat retention than the walls because heat rises, so if you can only do one surface, prioritize the ceiling at R-30.' } },
    { '@type': 'Question', name: 'What products should not be stored in an unheated garage over winter?', acceptedAnswer: { '@type': 'Answer', text: 'Latex paint, water-based stains and finishes, caulk and adhesives, and most car care products cannot survive freezing temperatures without damage. Move these inside before the first freeze. Lithium-ion batteries in cordless tools lose capacity and age faster when stored in freezing temperatures. Charge them and bring them inside if possible. Most metal tools, hardware, and petroleum-based products are fine in an unheated garage.' } },
    { '@type': 'Question', name: 'Is it safe to use a propane heater in a closed garage?', acceptedAnswer: { '@type': 'Answer', text: 'No. Unvented propane heaters produce carbon monoxide as a combustion byproduct. In an enclosed or poorly ventilated garage, CO can build to dangerous concentrations quickly. If you must use a portable propane heater, crack the garage door 2 to 4 inches to provide fresh air, install a battery-operated CO detector at 5 feet off the floor, and never leave the heater running unattended. A permanently vented electric or gas heater is significantly safer for regular workshop use.' } },
    { '@type': 'Question', name: 'How do I protect pipes in my garage from freezing?', acceptedAnswer: { '@type': 'Answer', text: 'Wrap exposed pipes in foam pipe insulation sleeves ($1 to $3 per linear foot), shut off and drain any outdoor hose bibs, and allow a slow drip from any sink on an exterior wall when temperatures drop below 20°F. For pipes in very cold or uninsulated garages, a self-regulating heat cable wrapped around the pipe and plugged into an outlet provides continuous protection for $20 to $60. A burst pipe repair costs $500 to $5,000. Prevention is the obvious investment.' } },
    { '@type': 'Question', name: 'What is the most important thing to winterize in a garage?', acceptedAnswer: { '@type': 'Answer', text: 'The bottom door seal is the highest-impact single item. A failed bottom seal lets in cold air, water, snow, and insects, causes the door to freeze to the ground and tear the seal off when the opener tries to open it, and costs $20 to $45 to fix before failure versus $150 or more to fix after the seal tears, the opener strains, and the concrete gets soaked. Do the seal test first every fall before anything else.' } },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Winterize Your Garage: The Complete Fall Checklist',
  description: 'How to winterize your garage before winter. Seals, insulation R-values, lubrication, pipe protection, heater safety, and the full fall checklist.',
  url: 'https://thegarage.guide/guides/how-to-winterize-your-garage',
  publisher: { '@type': 'Organization', name: 'The Garage Guide', url: 'https://thegarage.guide' },
}

export default function HowToWinterizeYourGarage() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section style={{ maxWidth: 800, margin: '0 auto', padding: '0 1rem' }}>
        <Breadcrumbs />

        {/* Hero */}
        <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', marginBottom: 32 }}>
          <Image src='/images/winterizegarage.jpg' alt='Residential garage exterior on a winter morning with snow on the ground and warm light from inside' width={800} height={450} priority style={{ width: '100%', height: 'auto', display: 'block' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem', background: 'linear-gradient(transparent, rgba(0,0,0,0.85))' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#E8792F', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#fff', fontSize: 14 }}>GG</div>
              <div>
                <div style={{ color: '#fff', fontWeight: 600, fontSize: 14 }}>The Garage Guide</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13 }}>Updated Mar 2026 &middot; 13 min read</div>
              </div>
            </div>
            <span style={{ display: 'inline-block', background: '#1D9E75', color: '#fff', fontSize: 12, fontWeight: 700, padding: '4px 10px', borderRadius: 4, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Guide</span>
            <h1 style={{ color: '#fff', fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 800, lineHeight: 1.15, margin: 0 }}>How to Winterize Your Garage: <span style={{ color: '#E8792F' }}>The Complete Fall Checklist</span></h1>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, marginTop: 8, marginBottom: 0 }}>How to winterize your garage before winter. Seals, insulation R-values, lubrication, pipe protection, heater safety, and the full fall checklist.</p>
          </div>
        </div>

        {/* TL;DR */}
        <div style={{ borderLeft: '4px solid #1D9E75', background: '#E1F5EE', borderRadius: 8, padding: '1.25rem 1.5rem', marginBottom: 32 }}>
          <p style={{ color: '#1D9E75', fontWeight: 700, fontSize: 15, margin: '0 0 8px 0' }}>TL;DR</p>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7 }}>Winterize your garage in one fall weekend: replace the bottom door seal if the gap exceeds 1/4 inch, re-lubricate all moving parts with silicone spray, test the auto-reverse and battery backup on your opener, insulate the door to at least R-8 if it is not already, caulk any visible gaps around windows and walls, and protect any water lines from freezing. Do all of this before the first freeze. Everything on this list costs under $200 total and takes under 4 hours.</p>
        </div>

        {/* BODY_PLACEHOLDER */}

        <LeadForm />
      </section>
    </>
  )
}
