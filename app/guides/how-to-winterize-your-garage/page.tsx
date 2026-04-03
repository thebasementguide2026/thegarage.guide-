import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'
import BeehiivEmailCapture from '@/components/BeehiivEmailCapture'
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

        {/* Critical First Check */}
        <h2 style={{ fontSize: 22, fontWeight: 700, color: '#23272F', marginBottom: 12 }}>Critical First Check: The Bottom Seal Test</h2>
        <div style={{ borderLeft: '4px solid #dc2626', background: '#fef2f2', borderRadius: 8, padding: '1.25rem 1.5rem', marginBottom: 24 }}>
          <p style={{ fontWeight: 600, color: '#991b1b', fontSize: 15, margin: '0 0 8px 0' }}>Critical Safety Warning</p>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: '#23272F' }}>Before anything else, test your bottom door seal. Close the garage door completely and go inside. Kneel down and look along the full width of the door at floor level. If you can see daylight at any point, cold air is getting in and the seal needs replacement before winter. Press the back of your hand against the seal. You should feel no airflow. Any gap wider than 1/4 inch means replacement is needed. A torn or frozen bottom seal is the single most common and most preventable winter garage failure.</p>
        </div>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 16 }}>The bottom seal (also called the door astragal) is a rubber or vinyl strip running the full width of the door bottom. It creates a weather-tight barrier between the door and the concrete floor. When it fails, cold air pours in, water enters during storms, insects find their way inside, and, most critically, the seal freezes to the wet floor overnight and tears itself off when the opener tries to open the door in the morning. A replacement seal costs $20 to $45 and installs in 20 minutes. Ignoring it costs you the seal, potentially damages the opener, and leaves the garage open to the elements all winter.</p>
        <p style={{ fontSize: 16, fontWeight: 700, color: '#23272F', marginBottom: 12 }}>How to replace the bottom seal:</p>
        <ol style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 32, paddingLeft: 24 }}>
          <li style={{ marginBottom: 8 }}>Close the door and measure the full width. Most residential doors are 8, 9, 10, 16, or 18 feet wide.</li>
          <li style={{ marginBottom: 8 }}>Purchase a replacement T-slot or U-slot astragal in the correct width. Match the profile (T or U) to your existing track.</li>
          <li style={{ marginBottom: 8 }}>Slide the old seal out of the aluminum retainer by pulling from one end.</li>
          <li style={{ marginBottom: 8 }}>Slide the new seal in from the same end, working it along the retainer until it spans the full width.</li>
          <li style={{ marginBottom: 8 }}>Trim any excess with a utility knife.</li>
          <li style={{ marginBottom: 8 }}>Apply a thin coat of silicone spray to the seal after installation. This prevents the seal from bonding to ice on the concrete floor in freezing temperatures.</li>
        </ol>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 32 }}>See our <Link href='/problems/garage-door-weather-stripping' style={{ color: '#b45309', textDecoration: 'underline' }}>garage door weather stripping guide</Link> for profile types, material selection, and full replacement instructions for all four seals.</p>

        {/* Section 1: Sealing and Air Gaps */}
        <h2 style={{ fontSize: 22, fontWeight: 700, color: '#23272F', marginBottom: 12 }}>Section 1: Sealing and Air Gaps</h2>
        <h3 style={{ fontSize: 18, fontWeight: 600, color: '#23272F', marginBottom: 8 }}>Weatherstripping Inspection</h3>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 16 }}>The perimeter weatherstripping around your garage door (the rubber or vinyl strip that runs up both sides and across the top of the door frame) is your second line of defense after the bottom seal. Inspect the full length of all three sides.</p>
        <p style={{ fontSize: 16, fontWeight: 700, color: '#23272F', marginBottom: 8 }}>Signs it needs replacement:</p>
        <ul style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 16, paddingLeft: 24 }}>
          <li style={{ marginBottom: 4 }}>Cracks, splits, or brittleness in the rubber</li>
          <li style={{ marginBottom: 4 }}>Sections that have pulled away from the frame</li>
          <li style={{ marginBottom: 4 }}>Visible gaps between the weatherstripping and the door when closed</li>
          <li style={{ marginBottom: 4 }}>Compression that has completely flattened (the strip no longer springs back)</li>
        </ul>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 24 }}>Replacement weatherstripping costs $15 to $30 for a full door kit. Peel off the old strip, clean the frame with rubbing alcohol, and press the adhesive-backed replacement into place. For screw-mounted strips, remove the screws, pull the old strip, and reattach the new one.</p>

        <h3 style={{ fontSize: 18, fontWeight: 600, color: '#23272F', marginBottom: 8 }}>Caulking Gaps in Walls and Windows</h3>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 16 }}>Walk the perimeter of your garage interior and inspect every penetration: windows, electrical outlets, the entry door frame, where the wall meets the foundation, and anywhere a pipe, conduit, or vent passes through a wall. Any gap larger than 1/8 inch is a cold air entry point.</p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 16 }}>Use a paintable exterior caulk for gaps along the wall-foundation joint and around windows. Use expanding foam for larger gaps (over 1/2 inch) and for gaps around pipes and conduits. Apply expanding foam sparingly. It expands significantly and should be trimmed flush after curing.</p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 24 }}>Do not caulk attic vents, soffit vents, or any intentional ventilation opening. These exist to manage moisture and must remain open.</p>

        <h3 style={{ fontSize: 18, fontWeight: 600, color: '#23272F', marginBottom: 8 }}>The Entry Door</h3>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 32 }}>The door between your garage and house (if you have an attached garage) loses more heat than any other single surface when poorly sealed. Check the door sweep at the bottom. It should contact the threshold with no gap. Check the weatherstripping on the frame. It should compress fully when the door is closed. Replace any sections that fail. An attached garage with a poorly sealed entry door makes the rooms adjacent to the garage noticeably colder all winter.</p>

        {/* Section 2: Insulation and R-Value Targets */}
        <h2 style={{ fontSize: 22, fontWeight: 700, color: '#23272F', marginBottom: 12 }}>Section 2: Insulation and R-Value Targets</h2>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 16 }}>Most garage insulation guides tell you to &ldquo;add insulation&rdquo; without specifying what you are actually trying to achieve. Here are the R-value targets that actually matter:</p>
        <div style={{ overflowX: 'auto', marginBottom: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
            <thead>
              <tr style={{ background: '#f1f5f9' }}>
                <th style={{ border: '1px solid #cbd5e1', padding: '8px 12px', textAlign: 'left', fontWeight: 600, color: '#1e293b' }}>Surface</th>
                <th style={{ border: '1px solid #cbd5e1', padding: '8px 12px', textAlign: 'left', fontWeight: 600, color: '#1e293b' }}>Unheated Garage</th>
                <th style={{ border: '1px solid #cbd5e1', padding: '8px 12px', textAlign: 'left', fontWeight: 600, color: '#1e293b' }}>Heated Garage</th>
                <th style={{ border: '1px solid #cbd5e1', padding: '8px 12px', textAlign: 'left', fontWeight: 600, color: '#1e293b' }}>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Exterior walls (2x4 framing)</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>R-13 minimum</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>R-15 to R-19</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>R-13 fiberglass batts are standard; upgrade to R-15 for cold climates</td>
              </tr>
              <tr style={{ background: '#f8fafc' }}>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Ceiling (no living space above)</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>R-30</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>R-38</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Most important surface for heat retention (heat rises)</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Ceiling (living space above)</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>R-30</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>R-38</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Also critical for floor warmth in rooms above garage</td>
              </tr>
              <tr style={{ background: '#f8fafc' }}>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Garage door (uninsulated)</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>R-8 minimum</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>R-12 to R-16</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>DIY insulation kit achieves R-8; insulated replacement door achieves R-12 to R-18</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Shared wall with house</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Match house wall R-value</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Match house wall R-value</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Use same R-value as adjacent interior walls</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 16 }}>The garage door is usually the weakest link. An uninsulated single-layer steel door has an R-value of approximately 0 to 2. A well-insulated wall has R-13 to R-19. Upgrading a bare door to R-8 using a foam board insulation kit ($50 to $100 for a two-car garage kit) can raise garage temperature by 10 to 12 degrees Fahrenheit on a cold day. A full door replacement with a polyurethane-insulated door reaches R-12 to R-18 and eliminates the issue permanently.</p>
        <p style={{ fontSize: 16, fontWeight: 700, color: '#23272F', marginBottom: 12 }}>DIY door insulation kit installation:</p>
        <ol style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 32, paddingLeft: 24 }}>
          <li style={{ marginBottom: 8 }}>Measure each door panel&apos;s width and height.</li>
          <li style={{ marginBottom: 8 }}>Cut foam board panels to fit each section (kits include cutting tools).</li>
          <li style={{ marginBottom: 8 }}>Press panels into retaining clips or adhere with the included adhesive.</li>
          <li style={{ marginBottom: 8 }}>Close the door and check that the added thickness does not impede movement. If the door is now heavier, the spring tension may need adjustment. Call a professional if the balance changes significantly.</li>
        </ol>

        {/* Section 3: Lubrication Before the First Freeze */}
        <h2 style={{ fontSize: 22, fontWeight: 700, color: '#23272F', marginBottom: 12 }}>Section 3: Lubrication Before the First Freeze</h2>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 16 }}>Cold thickens lubricant. A door that moves smoothly in September will be stiff, noisy, and hard on the opener by December if you do not re-lubricate in the fall. This is the most commonly skipped winterization step and one of the most impactful.</p>
        <div style={{ overflowX: 'auto', marginBottom: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
            <thead>
              <tr style={{ background: '#f1f5f9' }}>
                <th style={{ border: '1px solid #cbd5e1', padding: '8px 12px', textAlign: 'left', fontWeight: 600, color: '#1e293b' }}>Component</th>
                <th style={{ border: '1px solid #cbd5e1', padding: '8px 12px', textAlign: 'left', fontWeight: 600, color: '#1e293b' }}>Product</th>
                <th style={{ border: '1px solid #cbd5e1', padding: '8px 12px', textAlign: 'left', fontWeight: 600, color: '#1e293b' }}>How to Apply</th>
                <th style={{ border: '1px solid #cbd5e1', padding: '8px 12px', textAlign: 'left', fontWeight: 600, color: '#1e293b' }}>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Hinges</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Silicone spray</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Spray the hinge pin and knuckle</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Never the flat hinge plate</td>
              </tr>
              <tr style={{ background: '#f8fafc' }}>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Rollers (steel or nylon exposed bearing)</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Silicone spray</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Spray bearing area where wheel meets stem</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Skip sealed-bearing nylon rollers</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Torsion spring coils</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Silicone spray or white lithium grease</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Light coat along full length of coils</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Run door once to distribute</td>
              </tr>
              <tr style={{ background: '#f8fafc' }}>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Tracks (top curve only)</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Silicone spray</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Top 12 inches of vertical track only</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Do not spray the vertical sections</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Chain drive (if applicable)</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>White lithium grease</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Apply to chain using a rag</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Not for belt drives</td>
              </tr>
              <tr style={{ background: '#f8fafc' }}>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Screw drive (if applicable)</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>White lithium grease</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Apply along full length of threaded rod</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Not for belt drives</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Bottom seal</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Silicone spray</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Coat the seal after installation</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Prevents ice bonding to floor</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 16 }}>Never use WD-40 on garage door components. WD-40 is a solvent that removes existing lubrication and leaves parts dry within weeks. Use silicone spray or white lithium grease only.</p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 32 }}>See our <Link href='/guides/garage-door-maintenance' style={{ color: '#b45309', textDecoration: 'underline' }}>garage door maintenance guide</Link> for the full annual maintenance process this lubrication is part of.</p>

        {/* Section 4: Opener Safety Tests */}
        <h2 style={{ fontSize: 22, fontWeight: 700, color: '#23272F', marginBottom: 12 }}>Section 4: Opener Safety Tests</h2>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 16 }}>Your opener&apos;s safety systems should be tested before winter because cold weather can affect both the auto-reverse mechanism and the battery backup. Both should be confirmed working in October, not discovered failing in January.</p>
        <h3 style={{ fontSize: 18, fontWeight: 600, color: '#23272F', marginBottom: 8 }}>Auto-Reverse Test</h3>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 16 }}>Place a flat 2x4 board on the ground in the center of the door opening and press close. The door must contact the board and reverse within 2 seconds. If it does not, adjust the down-force setting on the opener per the manual. A door that fails this test is a safety hazard regardless of season, but the risk increases in winter when children and pets may be closer to the door during shorter outdoor windows.</p>
        <h3 style={{ fontSize: 18, fontWeight: 600, color: '#23272F', marginBottom: 8 }}>Battery Backup Test</h3>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 16 }}>If your opener has a battery backup, disconnect the power at the outlet and test whether the door opens and closes using only battery power. Cold temperatures reduce battery performance by 20 to 40 percent. A battery that passes this test in September may fail in January if it is aging. Replace the battery if it is more than 2 years old or if backup operation feels sluggish.</p>
        <h3 style={{ fontSize: 18, fontWeight: 600, color: '#23272F', marginBottom: 8 }}>Balance Test</h3>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 32 }}>Pull the red emergency release cord to disconnect the opener and lift the door manually to 3 to 4 feet. Release it. A balanced door holds its position. If it slides down, the springs have weakened over the summer and will perform worse in cold weather. If your springs are 6 or more years old and the door feels heavier than usual, budget for proactive spring replacement before the hardest freeze of winter. See our <Link href='/problems/garage-door-spring-replacement' style={{ color: '#b45309', textDecoration: 'underline' }}>garage door spring replacement guide</Link> for what to expect.</p>

        {/* Section 5: Protecting Water Lines and Pipes */}
        <h2 style={{ fontSize: 22, fontWeight: 700, color: '#23272F', marginBottom: 12 }}>Section 5: Protecting Water Lines and Pipes</h2>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 16 }}>If your garage has a utility sink, a hose bib, or any water supply line running through it, those pipes are at serious risk of freezing and bursting during a hard freeze. A burst pipe in the garage is a $500 to $5,000 repair depending on where the break is and how much water damage occurs.</p>
        <p style={{ fontSize: 16, fontWeight: 700, color: '#23272F', marginBottom: 12 }}>Steps to protect water lines:</p>
        <ul style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 32, paddingLeft: 24 }}>
          <li style={{ marginBottom: 8 }}><strong>Insulate exposed pipes.</strong> Foam pipe insulation sleeves cost $1 to $3 per linear foot and slide over any exposed pipe. Focus on pipes on exterior walls and anywhere cold air can reach the pipe directly.</li>
          <li style={{ marginBottom: 8 }}><strong>Drain the hose bib.</strong> If you have an exterior spigot entering the garage, shut off the interior valve that feeds it (usually a shutoff valve in the basement or mechanical room), then open the outdoor spigot to drain any remaining water from the line. Leave the outdoor spigot open all winter so any residual water can escape.</li>
          <li style={{ marginBottom: 8 }}><strong>Allow a slow drip on the interior sink.</strong> If your garage sink is on an exterior wall and temperatures are forecast below 20 degrees Fahrenheit, allow a slow drip from the faucet overnight. Moving water is much harder to freeze than standing water.</li>
          <li style={{ marginBottom: 8 }}><strong>Consider a pipe heating cable.</strong> For pipes in extreme cold climates or poorly insulated garages, a self-regulating heat cable wrapped around the pipe and plugged into a standard outlet provides continuous protection. Cost: $20 to $60 for most residential applications.</li>
        </ul>

        {/* Section 6: Protecting Temperature-Sensitive Materials */}
        <h2 style={{ fontSize: 22, fontWeight: 700, color: '#23272F', marginBottom: 12 }}>Section 6: Protecting Temperature-Sensitive Materials</h2>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 16 }}>Several categories of materials stored in the garage are damaged or destroyed by freezing. A cold snap in October before you have moved them is expensive and preventable.</p>
        <div style={{ overflowX: 'auto', marginBottom: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
            <thead>
              <tr style={{ background: '#f1f5f9' }}>
                <th style={{ border: '1px solid #cbd5e1', padding: '8px 12px', textAlign: 'left', fontWeight: 600, color: '#1e293b' }}>Item</th>
                <th style={{ border: '1px solid #cbd5e1', padding: '8px 12px', textAlign: 'left', fontWeight: 600, color: '#1e293b' }}>Damage from Freezing</th>
                <th style={{ border: '1px solid #cbd5e1', padding: '8px 12px', textAlign: 'left', fontWeight: 600, color: '#1e293b' }}>Action Required</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Latex paint</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Permanently damaged (turns lumpy and unusable)</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Move inside or to heated space</td>
              </tr>
              <tr style={{ background: '#f8fafc' }}>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Water-based stains and finishes</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Same as latex paint</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Move inside</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Caulk and adhesives</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Texture changes, effectiveness reduced</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Move inside</td>
              </tr>
              <tr style={{ background: '#f8fafc' }}>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Lithium-ion batteries (cordless tools)</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Capacity reduced, accelerated aging</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Charge and store inside if possible</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Car care products (tire shine, wax)</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>May separate or solidify</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Move inside</td>
              </tr>
              <tr style={{ background: '#f8fafc' }}>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Fertilizers and lawn chemicals</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Most are fine but check labels</td>
                <td style={{ border: '1px solid #cbd5e1', padding: '8px 12px', color: '#334155' }}>Check label for freezing warnings</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 32 }}><strong>What thrives in the cold:</strong> Most metal hand tools and power tools store fine in an unheated garage. Rust is the concern, not cold. Apply a light coat of machine oil to bare metal surfaces on hand tools before winter storage. Keep the garage dry using a dehumidifier or moisture-absorbing product if humidity is high.</p>

        {/* Section 7: Heating Safety */}
        <h2 style={{ fontSize: 22, fontWeight: 700, color: '#23272F', marginBottom: 12 }}>Section 7: Heating Safety</h2>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 16 }}>If you use a heater in your garage during winter, the pre-season check is when you confirm it is safe to operate, not when you smell something burning in December.</p>
        <h3 style={{ fontSize: 18, fontWeight: 600, color: '#23272F', marginBottom: 8 }}>Heater Inspection Checklist</h3>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 16 }}><strong>Electric heaters:</strong> Check the power cord for any damage, cracking, or fraying. Confirm the mounting hardware is tight. Test operation for 10 minutes and check for unusual smells.</p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 16 }}><strong>Gas heaters (Modine Hot Dawg and similar):</strong> Inspect the vent pipe for obstructions. Birds and squirrels nest in unused vent pipes over summer. Check the burner area for dust accumulation. Confirm the gas supply shutoff valve operates freely. Have a licensed technician inspect the heat exchanger every 3 to 5 years.</p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 24 }}><strong>Portable propane heaters:</strong> Never use an unvented propane heater in a fully closed garage. Carbon monoxide buildup is a genuine life-threatening hazard. If you use a portable propane heater, keep the garage door cracked 2 to 4 inches, install a battery-operated carbon monoxide detector, and test the CO detector before first use of the season.</p>
        <h3 style={{ fontSize: 18, fontWeight: 600, color: '#23272F', marginBottom: 8 }}>Carbon Monoxide Detector</h3>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 16 }}>If you have any combustion heating in the garage, including gas, propane, kerosene, or an attached garage where car exhaust enters, a battery-operated carbon monoxide detector is not optional. Install one at approximately 5 feet off the floor. Test the battery in October and replace it annually.</p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 32 }}>See our <Link href='/reviews/best-garage-heaters' style={{ color: '#b45309', textDecoration: 'underline' }}>best garage heaters guide</Link> for safe heater selection and sizing.</p>

        {/* Section 8: The Floor */}
        <h2 style={{ fontSize: 22, fontWeight: 700, color: '#23272F', marginBottom: 12 }}>Section 8: The Floor</h2>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 16 }}>Winter brings road salt, slush, and water tracking into the garage on every vehicle. On an unsealed concrete floor, salt and moisture cause surface deterioration and deep staining. On an epoxy-coated floor, winter is far easier to manage. Salt and slush wipe up and do not penetrate the surface.</p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 16 }}><strong>Before winter on a bare concrete floor:</strong> Apply a concrete sealer ($25 to $50 for a two-car garage). This does not have to be full epoxy. A penetrating sealer creates a barrier against salt and moisture in one afternoon. Do not apply sealer if temperatures will drop below 50 degrees Fahrenheit before the sealer cures (typically 24 hours).</p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 16 }}><strong>On any floor type:</strong> Place a heavy rubber or vinyl garage floor mat under the vehicle&apos;s front wheels and engine bay. This catches dripping road salt and slush before it contacts the floor. Garage floor mats cost $30 to $80 and last for years.</p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#23272F', marginBottom: 32 }}>For a permanent solution, see our <Link href='/reviews/best-garage-floor-epoxy' style={{ color: '#b45309', textDecoration: 'underline' }}>garage floor epoxy guide</Link> for DIY coating options.</p>

        {/* The Complete Fall Winterization Checklist */}
        <h2 style={{ fontSize: 22, fontWeight: 700, color: '#23272F', marginBottom: 16 }}>The Complete Fall Winterization Checklist</h2>
        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8, padding: '1.5rem', marginBottom: 32 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: '#23272F', marginBottom: 8 }}>Door and Seals</h3>
          <ul style={{ fontSize: 15, lineHeight: 1.8, color: '#334155', paddingLeft: 20, marginBottom: 16 }}>
            <li>Bottom seal: no daylight visible, no gaps over 1/4 inch</li>
            <li>Bottom seal coated with silicone spray</li>
            <li>Perimeter weatherstripping: supple, no cracks, compresses fully</li>
            <li>Entry door sweep and weatherstripping: no gaps</li>
            <li>Windows: caulked around frame, no drafts</li>
          </ul>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: '#23272F', marginBottom: 8 }}>Insulation</h3>
          <ul style={{ fontSize: 15, lineHeight: 1.8, color: '#334155', paddingLeft: 20, marginBottom: 16 }}>
            <li>Garage door: R-8 minimum achieved (kit or insulated door)</li>
            <li>Walls: R-13 minimum if unfinished and accessible</li>
            <li>Ceiling: R-30 minimum if accessible</li>
          </ul>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: '#23272F', marginBottom: 8 }}>Lubrication (silicone spray)</h3>
          <ul style={{ fontSize: 15, lineHeight: 1.8, color: '#334155', paddingLeft: 20, marginBottom: 16 }}>
            <li>Hinges lubricated</li>
            <li>Roller bearings lubricated</li>
            <li>Torsion spring coils lubricated</li>
            <li>Top of vertical tracks lubricated</li>
            <li>Chain or screw drive lubricated (if applicable)</li>
          </ul>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: '#23272F', marginBottom: 8 }}>Opener Safety</h3>
          <ul style={{ fontSize: 15, lineHeight: 1.8, color: '#334155', paddingLeft: 20, marginBottom: 16 }}>
            <li>Auto-reverse test passed (2x4 test)</li>
            <li>Photo eye sensors cleaned and functioning</li>
            <li>Battery backup tested under power outage simulation</li>
            <li>Balance test performed (door holds at 3 to 4 feet)</li>
          </ul>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: '#23272F', marginBottom: 8 }}>Water Lines (if applicable)</h3>
          <ul style={{ fontSize: 15, lineHeight: 1.8, color: '#334155', paddingLeft: 20, marginBottom: 16 }}>
            <li>Exposed pipes insulated with foam sleeves</li>
            <li>Hose bib drained and interior valve closed</li>
            <li>Pipe heating cable installed (extreme cold climates)</li>
          </ul>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: '#23272F', marginBottom: 8 }}>Materials</h3>
          <ul style={{ fontSize: 15, lineHeight: 1.8, color: '#334155', paddingLeft: 20, marginBottom: 16 }}>
            <li>Latex paint, water-based finishes, caulk moved inside</li>
            <li>Lithium-ion batteries removed from cold storage</li>
            <li>Bare metal tools oiled against rust</li>
          </ul>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: '#23272F', marginBottom: 8 }}>Heating</h3>
          <ul style={{ fontSize: 15, lineHeight: 1.8, color: '#334155', paddingLeft: 20, marginBottom: 16 }}>
            <li>Heater inspected and tested</li>
            <li>Vent pipe checked for obstruction (gas heaters)</li>
            <li>CO detector installed and battery tested</li>
          </ul>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: '#23272F', marginBottom: 8 }}>Floor</h3>
          <ul style={{ fontSize: 15, lineHeight: 1.8, color: '#334155', paddingLeft: 20, marginBottom: 0 }}>
            <li>Concrete sealed or epoxy coating checked for chips</li>
            <li>Floor mat in place under vehicle</li>
          </ul>
        </div>

        {/* Frequently Asked Questions */}
        <h2 style={{ fontSize: 22, fontWeight: 700, color: '#23272F', marginBottom: 16 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
          <div style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: 16 }}>
            <h3 style={{ fontSize: 15, fontWeight: 600, color: '#1e293b', marginBottom: 8 }}>When should I winterize my garage?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#334155', margin: 0 }}>The ideal window is mid-October to early November. After the heat of summer has passed but before the first hard freeze. Most of the tasks on this list cannot be done effectively in freezing temperatures: caulk does not cure below 40 degrees Fahrenheit, sealers need 50 degrees minimum, and lubricants apply poorly when it is already cold. Aim to complete everything before your first forecast night below 32 degrees Fahrenheit.</p>
          </div>
          <div style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: 16 }}>
            <h3 style={{ fontSize: 15, fontWeight: 600, color: '#1e293b', marginBottom: 8 }}>How do I stop my garage door from freezing to the ground?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#334155', margin: 0 }}>Apply silicone spray to the bottom door seal every fall. Silicone prevents the rubber from bonding to ice on the concrete floor. If the door has already frozen, do not press the opener button repeatedly. This burns out the motor. Instead, disconnect the opener, chip away the ice from outside with a scraper, apply warm water to melt residual ice, then lift the door manually. See our <Link href='/problems/garage-door-wont-open' style={{ color: '#b45309', textDecoration: 'underline' }}>garage door won&apos;t open guide</Link> for the full frozen door procedure.</p>
          </div>
          <div style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: 16 }}>
            <h3 style={{ fontSize: 15, fontWeight: 600, color: '#1e293b', marginBottom: 8 }}>What R-value should a garage door have for winter?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#334155', margin: 0 }}>For a garage that is occasionally heated or attached to the house, target R-8 minimum on the door. This is achievable with a $50 to $100 DIY foam board kit. For a heated workshop garage, target R-12 to R-16, which requires either a high-quality insulated door or multiple layers of foam board. An uninsulated single-layer steel door has an effective R-value of 0 to 2, which is essentially no thermal barrier at all.</p>
          </div>
          <div style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: 16 }}>
            <h3 style={{ fontSize: 15, fontWeight: 600, color: '#1e293b', marginBottom: 8 }}>Should I insulate my garage walls for winter?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#334155', margin: 0 }}>Yes, if the walls are unfinished with exposed studs and no existing insulation. R-13 fiberglass batts in 2x4 stud bays are the standard. They cost $0.30 to $0.50 per square foot and install in a few hours. The ceiling has more impact on heat retention than the walls because heat rises, so if you can only do one surface, prioritize the ceiling at R-30.</p>
          </div>
          <div style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: 16 }}>
            <h3 style={{ fontSize: 15, fontWeight: 600, color: '#1e293b', marginBottom: 8 }}>What products should not be stored in an unheated garage over winter?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#334155', margin: 0 }}>Latex paint, water-based stains and finishes, caulk and adhesives, and most car care products cannot survive freezing temperatures without damage. Move these inside before the first freeze. Lithium-ion batteries in cordless tools lose capacity and age faster when stored in freezing temperatures. Charge them and bring them inside if possible. Most metal tools, hardware, and petroleum-based products are fine in an unheated garage.</p>
          </div>
          <div style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: 16 }}>
            <h3 style={{ fontSize: 15, fontWeight: 600, color: '#1e293b', marginBottom: 8 }}>Is it safe to use a propane heater in a closed garage?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#334155', margin: 0 }}>No. Unvented propane heaters produce carbon monoxide as a combustion byproduct. In an enclosed or poorly ventilated garage, CO can build to dangerous concentrations quickly. If you must use a portable propane heater, crack the garage door 2 to 4 inches to provide fresh air, install a battery-operated CO detector at 5 feet off the floor, and never leave the heater running unattended. A permanently vented electric or gas heater is significantly safer for regular workshop use.</p>
          </div>
          <div style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: 16 }}>
            <h3 style={{ fontSize: 15, fontWeight: 600, color: '#1e293b', marginBottom: 8 }}>How do I protect pipes in my garage from freezing?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#334155', margin: 0 }}>Wrap exposed pipes in foam pipe insulation sleeves ($1 to $3 per linear foot), shut off and drain any outdoor hose bibs, and allow a slow drip from any sink on an exterior wall when temperatures drop below 20 degrees Fahrenheit. For pipes in very cold uninsulated garages, a self-regulating heat cable wrapped around the pipe and plugged into an outlet provides continuous protection for $20 to $60. A burst pipe repair costs $500 to $5,000 so prevention is the obvious investment.</p>
          </div>
          <div style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: 16 }}>
            <h3 style={{ fontSize: 15, fontWeight: 600, color: '#1e293b', marginBottom: 8 }}>What is the most important thing to winterize in a garage?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: '#334155', margin: 0 }}>The bottom door seal is the highest-impact single item. A failed bottom seal lets in cold air, water, snow, and insects, causes the door to freeze to the ground and tear the seal off when the opener tries to open it, and costs $20 to $45 to fix before failure versus $150 or more to fix after the seal tears, the opener strains, and the concrete gets soaked. Do the seal test first every fall before anything else.</p>
          </div>
        </div>

        {/* Related Guides */}
        <h2 style={{ fontSize: 22, fontWeight: 700, color: '#23272F', marginBottom: 16 }}>Related Guides</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 32 }}>
          <Link href='/guides/garage-door-maintenance' style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: 16, textDecoration: 'none', display: 'block' }}>
            <span style={{ display: 'inline-block', background: '#fef3c7', color: '#b45309', fontSize: 12, fontWeight: 600, padding: '2px 8px', borderRadius: 4, marginBottom: 8 }}>Guide</span>
            <p style={{ fontWeight: 600, color: '#1e293b', fontSize: 14, margin: '0 0 4px 0' }}>Garage Door Maintenance</p>
            <p style={{ color: '#64748b', fontSize: 12, margin: 0 }}>The full annual maintenance checklist this winterization is part of.</p>
          </Link>
          <Link href='/problems/garage-door-wont-open' style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: 16, textDecoration: 'none', display: 'block' }}>
            <span style={{ display: 'inline-block', background: '#fef3c7', color: '#b45309', fontSize: 12, fontWeight: 600, padding: '2px 8px', borderRadius: 4, marginBottom: 8 }}>Problem</span>
            <p style={{ fontWeight: 600, color: '#1e293b', fontSize: 14, margin: '0 0 4px 0' }}>Garage Door Won&apos;t Open</p>
            <p style={{ color: '#64748b', fontSize: 12, margin: 0 }}>What to do if the door freezes to the ground before you winterize.</p>
          </Link>
          <Link href='/problems/garage-door-spring-replacement' style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: 16, textDecoration: 'none', display: 'block' }}>
            <span style={{ display: 'inline-block', background: '#fef3c7', color: '#b45309', fontSize: 12, fontWeight: 600, padding: '2px 8px', borderRadius: 4, marginBottom: 8 }}>Problem</span>
            <p style={{ fontWeight: 600, color: '#1e293b', fontSize: 14, margin: '0 0 4px 0' }}>Garage Door Spring Replacement</p>
            <p style={{ color: '#64748b', fontSize: 12, margin: 0 }}>Springs fail most often in cold weather.</p>
          </Link>
          <Link href='/reviews/best-garage-heaters' style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: 16, textDecoration: 'none', display: 'block' }}>
            <span style={{ display: 'inline-block', background: '#fef3c7', color: '#b45309', fontSize: 12, fontWeight: 600, padding: '2px 8px', borderRadius: 4, marginBottom: 8 }}>Review</span>
            <p style={{ fontWeight: 600, color: '#1e293b', fontSize: 14, margin: '0 0 4px 0' }}>Best Garage Heaters</p>
            <p style={{ color: '#64748b', fontSize: 12, margin: 0 }}>Safe electric, gas, and infrared options for winter comfort.</p>
          </Link>
          <Link href='/reviews/best-garage-floor-epoxy' style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: 16, textDecoration: 'none', display: 'block' }}>
            <span style={{ display: 'inline-block', background: '#fef3c7', color: '#b45309', fontSize: 12, fontWeight: 600, padding: '2px 8px', borderRadius: 4, marginBottom: 8 }}>Review</span>
            <p style={{ fontWeight: 600, color: '#1e293b', fontSize: 14, margin: '0 0 4px 0' }}>Best Garage Floor Epoxy</p>
            <p style={{ color: '#64748b', fontSize: 12, margin: 0 }}>Permanent floor protection against road salt and winter moisture.</p>
          </Link>
          <Link href='/guides/garage-workshop-setup' style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: 16, textDecoration: 'none', display: 'block' }}>
            <span style={{ display: 'inline-block', background: '#fef3c7', color: '#b45309', fontSize: 12, fontWeight: 600, padding: '2px 8px', borderRadius: 4, marginBottom: 8 }}>Guide</span>
            <p style={{ fontWeight: 600, color: '#1e293b', fontSize: 14, margin: '0 0 4px 0' }}>Garage Workshop Setup</p>
            <p style={{ color: '#64748b', fontSize: 12, margin: 0 }}>If you use the garage as a workshop, this expands on year-round comfort.</p>
          </Link>
          <Link href='/guides/garage-maintenance-checklist' style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: 16, textDecoration: 'none', display: 'block' }}>
            <span style={{ display: 'inline-block', background: '#fef3c7', color: '#b45309', fontSize: 12, fontWeight: 600, padding: '2px 8px', borderRadius: 4, marginBottom: 8 }}>Guide</span>
            <p style={{ fontWeight: 600, color: '#1e293b', fontSize: 14, margin: '0 0 4px 0' }}>Complete Garage Maintenance Checklist</p>
            <p style={{ color: '#64748b', fontSize: 12, margin: 0 }}>Every system, every season — the full annual maintenance schedule.</p>
          </Link>
        </div>

        {/* Glossary */}
        <h2 style={{ fontSize: 22, fontWeight: 700, color: '#23272F', marginBottom: 16 }}>Glossary</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
          <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: 12 }}>
            <p style={{ fontWeight: 600, color: '#1e293b', fontSize: 14, margin: '0 0 4px 0' }}>R-value</p>
            <p style={{ color: '#334155', fontSize: 14, margin: 0, lineHeight: 1.7 }}>A measure of a material&apos;s resistance to heat flow. Higher R-values mean better insulation. For garage applications: walls need R-13 minimum, ceilings need R-30 minimum, and doors need R-8 minimum for meaningful winter protection. R-value is additive. Layers of insulation combine their R-values. An uninsulated steel garage door has an effective R-value of 0 to 2; adding a foam board kit brings it to R-8 or higher.</p>
          </div>
          <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: 12 }}>
            <p style={{ fontWeight: 600, color: '#1e293b', fontSize: 14, margin: '0 0 4px 0' }}>Bottom seal (door astragal)</p>
            <p style={{ color: '#334155', fontSize: 14, margin: 0, lineHeight: 1.7 }}>The rubber or vinyl strip running the full width of the garage door bottom. It creates a weather-tight barrier between the door and the concrete floor. Must be supple, undamaged, and coated with silicone spray before winter to prevent freezing to the floor. Replacement cost: $20 to $45 for most residential doors.</p>
          </div>
          <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: 12 }}>
            <p style={{ fontWeight: 600, color: '#1e293b', fontSize: 14, margin: '0 0 4px 0' }}>Weatherstripping</p>
            <p style={{ color: '#334155', fontSize: 14, margin: 0, lineHeight: 1.7 }}>The rubber, vinyl, or foam seal running along the perimeter of the garage door frame (sides and top). Prevents cold air infiltration around the door edges. Inspect annually for cracks, compression loss, or sections that have pulled away from the frame. Full perimeter replacement kits cost $15 to $30.</p>
          </div>
          <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: 12 }}>
            <p style={{ fontWeight: 600, color: '#1e293b', fontSize: 14, margin: '0 0 4px 0' }}>Silicone spray lubricant</p>
            <p style={{ color: '#334155', fontSize: 14, margin: 0, lineHeight: 1.7 }}>A dry, non-greasy lubricant appropriate for all garage door moving parts. Unlike petroleum-based lubricants, silicone spray does not thicken in cold temperatures, does not attract dust, and does not leave sticky residue. The correct fall lubrication product for hinges, rollers, spring coils, and the bottom seal. A $10 can covers a complete lubrication session.</p>
          </div>
          <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: 12 }}>
            <p style={{ fontWeight: 600, color: '#1e293b', fontSize: 14, margin: '0 0 4px 0' }}>Door astragal</p>
            <p style={{ color: '#334155', fontSize: 14, margin: 0, lineHeight: 1.7 }}>Another name for the bottom seal. Some manufacturers distinguish between a full bottom seal (which attaches to the door itself) and an astragal (which attaches to a retainer on the bottom of the door). For winterization purposes, both terms refer to the same component and the same inspection and replacement process.</p>
          </div>
          <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: 12 }}>
            <p style={{ fontWeight: 600, color: '#1e293b', fontSize: 14, margin: '0 0 4px 0' }}>Carbon monoxide (CO)</p>
            <p style={{ color: '#334155', fontSize: 14, margin: 0, lineHeight: 1.7 }}>A colorless, odorless gas produced by incomplete combustion of any fuel including propane, natural gas, gasoline, and wood. At sufficient concentrations, CO causes headaches, dizziness, unconsciousness, and death. A battery-operated CO detector is required in any garage with combustion heating, an attached garage where car exhaust enters, or any space where a fuel-powered engine runs. Test the battery annually in October.</p>
          </div>
          <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: 12 }}>
            <p style={{ fontWeight: 600, color: '#1e293b', fontSize: 14, margin: '0 0 4px 0' }}>Pipe insulation sleeve</p>
            <p style={{ color: '#334155', fontSize: 14, margin: 0, lineHeight: 1.7 }}>A foam tube product that slides over water supply pipes to slow heat loss and prevent freezing. Available in 6-foot sections sized for 1/2-inch to 2-inch pipe diameters at any hardware store. Cost: $1 to $3 per linear foot. Effective for pipes on exterior walls, pipes near the garage door, and any pipe exposed to cold air infiltration.</p>
          </div>
          <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: 12 }}>
            <p style={{ fontWeight: 600, color: '#1e293b', fontSize: 14, margin: '0 0 4px 0' }}>Self-regulating heat cable</p>
            <p style={{ color: '#334155', fontSize: 14, margin: 0, lineHeight: 1.7 }}>An electrical heating cable that wraps around water supply pipes and plugs into a standard outlet. It adjusts its heat output based on ambient temperature. Warming more when it is colder and using minimal power when temperatures are above freezing. Cost: $20 to $60 for most residential applications. Appropriate for pipes in very cold or uninsulated garages where foam insulation alone is insufficient.</p>
          </div>
          <div>
            <p style={{ fontWeight: 600, color: '#1e293b', fontSize: 14, margin: '0 0 4px 0' }}>Auto-reverse mechanism</p>
            <p style={{ color: '#334155', fontSize: 14, margin: 0, lineHeight: 1.7 }}>A safety feature built into all residential garage door openers manufactured after January 1, 1991. It detects resistance when the door contacts an object during closing and reverses the door. Cold weather can reduce its sensitivity if the door is stiff or frozen. Monthly testing with a 2x4 board on the ground is recommended year-round, with particular importance in the fall before winter sets in.</p>
          </div>
        </div>


        <BeehiivEmailCapture />

      <LeadForm />
      </section>
    </>
  )
}
