import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'How to Winterize Your Garage: The Complete Fall Checklist | The Garage Guide',
  description: 'How to winterize your garage before winter. Seals, insulation R-values, lubrication, pipe protection, heater safety, and the full fall checklist.',
  alternates: { canonical: 'https://thegarage.guide/guides/how-to-winterize-your-garage' },
  openGraph: { title: 'How to Winterize Your Garage: The Complete Fall Checklist | The Garage Guide', description: 'How to winterize your garage before winter. Seals, insulation R-values, lubrication, pipe protection, heater safety, and the full fall checklist.', url: 'https://thegarage.guide/guides/how-to-winterize-your-garage', siteName: 'The Garage Guide', type: 'article' },
}

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
{ '@type': 'Question', name: 'When should I winterize my garage?', acceptedAnswer: { '@type': 'Answer', text: 'The ideal window is mid-October to early November. Most tasks cannot be done in freezing temps. Caulk needs 40°F+, sealers need 50°F+. Complete everything before your first forecast night below 32°F.' } },
{ '@type': 'Question', name: 'How do I stop my garage door from freezing to the ground?', acceptedAnswer: { '@type': 'Answer', text: 'Apply silicone spray to the bottom door seal every fall. If frozen, do not press the opener button repeatedly. Disconnect the opener, chip ice away, apply warm water, then lift manually.' } },
{ '@type': 'Question', name: 'What R-value should a garage door have for winter?', acceptedAnswer: { '@type': 'Answer', text: 'Target R-8 minimum with a $50-$100 DIY foam board kit. For a heated workshop, target R-12 to R-16. An uninsulated steel door has R-0 to R-2.' } },
{ '@type': 'Question', name: 'Should I insulate my garage walls for winter?', acceptedAnswer: { '@type': 'Answer', text: 'Yes if unfinished. R-13 fiberglass batts cost $0.30-$0.50/sqft. Prioritize the ceiling at R-30 — heat rises.' } },
{ '@type': 'Question', name: 'What products should not be stored in an unheated garage over winter?', acceptedAnswer: { '@type': 'Answer', text: 'Latex paint, water-based stains, caulk, adhesives, and most car care products. Move inside before the first freeze. Lithium-ion batteries lose capacity in cold — charge and store inside.' } },
{ '@type': 'Question', name: 'Is it safe to use a propane heater in a closed garage?', acceptedAnswer: { '@type': 'Answer', text: 'No. Unvented propane heaters produce CO. Crack the door 2-4 inches, install a CO detector at 5 feet, and never leave unattended. Vented electric or gas heaters are safer.' } },
{ '@type': 'Question', name: 'How do I protect pipes in my garage from freezing?', acceptedAnswer: { '@type': 'Answer', text: 'Foam insulation sleeves ($1-$3/ft), drain outdoor hose bibs, slow drip below 20°F. Heat cable ($20-$60) for extreme cold. Burst pipe repair costs $500-$5,000.' } },
{ '@type': 'Question', name: 'What is the most important thing to winterize in a garage?', acceptedAnswer: { '@type': 'Answer', text: 'The bottom door seal. A failed seal costs $20-$45 to fix before failure vs $150+ after. Do the seal test first every fall.' } },
] }

const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'How to Winterize Your Garage: The Complete Fall Checklist', description: 'How to winterize your garage before winter. Seals, insulation R-values, lubrication, pipe protection, heater safety, and the full fall checklist.', url: 'https://thegarage.guide/guides/how-to-winterize-your-garage', publisher: { '@type': 'Organization', name: 'The Garage Guide', url: 'https://thegarage.guide' } }

export default function HowToWinterizeYourGarage() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <section style={{ maxWidth: 800, margin: '0 auto', padding: '0 1rem' }}>
          <Breadcrumbs items={[{ label: 'Guides', href: '/guides' }, { label: 'How to Winterize Your Garage' }]} />
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

        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 16 }}>October is the best month to own a garage. The summer heat is gone, the projects are winding down, and you have a clear two-day window before the first freeze to do the one maintenance session that determines how your garage performs for the next five months.</p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 16 }}>Miss that window and you spend winter dealing with a door frozen to the ground, a bottom seal that tore off on a cold morning, an opener straining against stiff hinges, and a can of paint that turned to lumps while you were not looking.</p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 32 }}>This guide uses that window. Everything here fits in one fall weekend &mdash; two hours Saturday, two hours Sunday &mdash; and costs under $200 in materials. Do it once, properly, and your garage runs through winter without a single cold-weather failure.</p>

        <h2 style={{ fontSize: 22, fontWeight: 700, color: '#23272F', marginBottom: 12 }}>The One Weekend Rule</h2>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 16 }}>Everything in this guide can be completed in a single fall weekend before the first freeze. The tasks split naturally into two sessions:</p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 8 }}><strong>Saturday (2 to 3 hours):</strong> Door seal inspection and replacement, weatherstripping inspection, caulking, gap sealing, pipe protection.</p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 16 }}><strong>Sunday (1 to 2 hours):</strong> Full lubrication of all moving parts, opener safety tests, battery backup test, heating system check, chemical and finishing product storage.</p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 32 }}><strong>Total materials cost:</strong> $50 to $200 depending on what needs replacing. <strong>Total time:</strong> 3 to 5 hours. <strong>Total benefit:</strong> a garage that runs reliably all winter with no frozen seals, no dead openers, no burst pipes, and no ruined materials.</p>

        {/* BODY_PART_2 */}

        <LeadForm />
      </section>
    </>
  )
}
