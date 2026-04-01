import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'How to Set Up a Garage Workshop: The Complete Planning Guide | The Garage Guide',
  description: 'How to set up a garage workshop from scratch. Zone planning, electrical circuits, lighting, workbench placement, flooring, ventilation, and tool storage.',
  alternates: {
    canonical: 'https://thegarage.guide/guides/garage-workshop-setup',
  },
  openGraph: {
    title: 'How to Set Up a Garage Workshop: The Complete Planning Guide | The Garage Guide',
    description: 'How to set up a garage workshop from scratch. Zone planning, electrical circuits, lighting, workbench placement, flooring, ventilation, and tool storage.',
    url: 'https://thegarage.guide/guides/garage-workshop-setup',
    siteName: 'The Garage Guide',
    type: 'article',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does it cost to set up a garage workshop?', acceptedAnswer: { '@type': 'Answer', text: 'A basic garage workshop setup costs $1,500–$3,000 for essentials like a workbench, lighting, electrical upgrades, and basic tool storage. A mid-range setup with epoxy flooring, a cabinet system, and dedicated circuits runs $5,000–$10,000. A fully equipped workshop with premium features can exceed $15,000–$25,000.' } },    { '@type': 'Question', name: 'What is the best layout for a garage workshop?', acceptedAnswer: { '@type': 'Answer', text: 'The best layout divides your garage into three zones: a primary work zone with your workbench and most-used tools near the center, a material and storage zone along the walls, and a vehicle or flex zone nearest the garage door. Keep 36 inches of clearance around stationary tools and place your workbench where it gets the best lighting.' } },    { '@type': 'Question', name: 'How many electrical circuits does a garage workshop need?', acceptedAnswer: { '@type': 'Answer', text: 'Most garage workshops need a minimum of 3–4 dedicated 20-amp circuits: one for lighting, one or two for general-purpose outlets, and one for high-draw tools like a table saw or air compressor. If you plan to run a welder or EV charger, add a 240V/50A circuit. Always hire a licensed electrician and pull permits for new circuits.' } },    { '@type': 'Question', name: 'What type of lighting is best for a garage workshop?', acceptedAnswer: { '@type': 'Answer', text: 'LED shop lights rated at 5000K (daylight) are the best choice for garage workshops. Aim for 50 lumens per square foot across the full space, with additional task lighting over the workbench and any precision work areas. Wraparound LED fixtures mounted flush to the ceiling provide even, shadow-free coverage.' } },    { '@type': 'Question', name: 'What is the best garage workshop flooring?', acceptedAnswer: { '@type': 'Answer', text: 'Epoxy-coated concrete is the top choice for garage workshop floors. It resists stains, chemicals, and impacts while making cleanup easy. Polyurea and polyaspartic coatings offer faster cure times and greater flexibility. Interlocking rubber or PVC tiles are a good DIY-friendly alternative that provides comfort and slip resistance.' } },    { '@type': 'Question', name: 'Do I need a permit to set up a garage workshop?', acceptedAnswer: { '@type': 'Answer', text: 'You typically need a permit for any new electrical circuits, plumbing additions, or structural modifications. Basic organization and furniture changes do not require permits. Check with your local building department—requirements vary by municipality. Running a business from a garage workshop may also require a home occupation permit or zoning variance.' } },    { '@type': 'Question', name: 'How do I ventilate a garage workshop?', acceptedAnswer: { '@type': 'Answer', text: "Install at least one exhaust fan rated for your shop's square footage to remove dust, fumes, and heat. Cross-ventilation with intake and exhaust vents on opposite walls is ideal. For woodworking or finishing, add a dedicated dust collection system. If you use solvents or paints, a fresh-air ventilation system rated for hazardous fumes is recommended." } },    { '@type': 'Question', name: 'What size workbench do I need for a garage workshop?', acceptedAnswer: { '@type': 'Answer', text: 'A standard garage workbench should be 60–72 inches long, 24–30 inches deep, and 34–36 inches tall (adjust height to your elbow). For larger projects, an 8-foot bench or an L-shaped configuration works well. Use a solid-core door or 2-inch thick hardwood top for durability, and include a front vise and dog holes for clamping.' } },    { '@type': 'Question', name: 'What tools do I need to start a garage workshop?', acceptedAnswer: { '@type': 'Answer', text: 'Start with these essentials: a quality workbench, a cordless drill/driver, circular saw, random orbital sander, clamps (at least 4–6), a tape measure, speed square, level, and safety gear (eye protection, hearing protection, dust mask). Add a shop vacuum for cleanup. Expand to a table saw, miter saw, drill press, and router as your skills and space allow.' } },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Set Up a Garage Workshop: The Complete Planning Guide',
  description: 'How to set up a garage workshop from scratch. Zone planning, electrical circuits, lighting, workbench placement, flooring, ventilation, and tool storage.',



  url: 'https://thegarage.guide/guides/garage-workshop-setup',

  publisher: { '@type': 'Organization', name: 'The Garage Guide', url: 'https://thegarage.guide' },
}

export default function GarageWorkshopSetup() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Guides', href: '/guides' }, { label: 'Garage Workshop Setup' }]} />
      <article className='container-custom py-8 max-w-4xl mx-auto'>
        {/* Hero Section */}
        <div className='relative rounded-xl overflow-hidden mb-8' style={{ minHeight: '400px' }}>
          <Image src='/images/garageworkshop.jpg' alt='Organized garage workshop with epoxy floor, LED lighting, pegboard tool wall, workbench, and steel cabinet storage' fill className='object-cover' priority />
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent' />
          <div className='absolute bottom-0 left-0 right-0 p-6 md:p-10'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center'>
                <div>
                  <p className='text-white font-semibold text-sm'>GG</p>
                </div>
              </div>
              <div>
                <p className='text-white font-semibold text-sm'>The Garage Guide</p>
                <p className='text-gray-300 text-xs'>Updated Mar 2026 · 16 min read</p>
              </div>
            </div>
            <span className='text-amber-700 font-bold text-xs uppercase tracking-wider'>Guide</span>
            <h1 className='text-3xl md:text-4xl font-bold text-white mt-1'>How to Set Up a Garage Workshop: <span className='text-amber-500'>The Complete Planning Guide</span></h1>
            <p className='text-gray-200 mt-2 text-sm md:text-base max-w-2xl'>How to set up a garage workshop from scratch. Zone planning, electrical circuits, lighting, workbench placement, flooring, ventilation, and tool storage.</p>
          </div>
        </div>

        {/* TL;DR */}
        <div style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75', padding: '16px', borderRadius: '8px', marginBottom: '24px' }}>
          <p style={{ color: '#1D9E75' }} className='text-sm font-bold mb-2'>TL;DR</p>
          <p className='text-slate-700 text-sm leading-relaxed'>A functional garage workshop starts with four things in the right order: plan your zones before buying anything, get your electrical sorted before installing anything permanent, light the space to 100 lumens per square foot minimum, and put the workbench where the best light is. Everything else (flooring, storage, heating, ventilation) follows from those four decisions. Budget $500 to $2,000 for a solid starter setup. A fully equipped dedicated workshop runs $5,000 to $15,000 over time, built in phases.</p>
        </div>

        {/* Intro */}
        <p className='text-slate-700 text-sm leading-relaxed mb-4'>There is a moment every garage workshop owner remembers. You are three hours into a project, sawdust in your hair, music playing, and everything you need is exactly where it should be. The drill is on the pegboard. The clamps are on the rack. The work light hits the bench at exactly the right angle. The door to the house is 15 feet away. That moment does not happen by accident. It happens because someone took two hours to plan before buying a single shelf bracket.</p>
        <p className='text-slate-700 text-sm leading-relaxed mb-4'>The most common garage workshop mistake is starting with tools and storage and working backward to the space. Buy the workbench, then figure out where to put it. Install the pegboard, then realize it is blocking the light switch. Run extension cords because the outlets are in the wrong spots.</p>
        <p className='text-slate-700 text-sm leading-relaxed mb-6'>This guide does it in the right order: planning first, then electrical, then light, then everything else, so your workshop works the first time you use it.</p>

        {/* Step 1: Plan Your Zones */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Step 1: Plan Your Zones Before You Buy Anything</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>The single most important thing you can do before spending a dollar is map your workshop on paper. A zone-planned workshop feels twice as large as the same space without zones, because you are never fighting your own layout.</p>
          <div style={{ backgroundColor: '#FFF7ED', borderLeft: '4px solid #C2410C', padding: '16px', borderRadius: '8px', marginBottom: '24px' }}>
            <p className='font-semibold text-slate-800 text-sm mb-2'>The Zone-First Rule</p>
            <p className='text-slate-700 text-sm'>No tool, no storage system, and no permanent fixture goes in until the zones are drawn. This sounds simple. Almost nobody does it. The homeowners who skip this step spend the next three years moving things around. The ones who do it spend two hours with graph paper and never move anything again.</p>
          </div>
          <h3 className='text-lg font-bold text-slate-900 mb-2'>The Four Zones of a Working Shop</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>The Work Zone</strong> — Centered on your workbench. This is where you make things. It needs the best light, the easiest access to hand tools, and at least 3 feet of clear floor space on three sides for material handling. Place this zone near natural light if you have a window, or plan for your best overhead fixture here.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>The Tool Zone</strong> — Where power tools live. Stationary tools (table saw, miter saw, drill press) need floor space, electrical access, and clearance for material feed. A 10-inch table saw needs about 8 feet of clearance in front and behind for ripping full sheets. A miter saw needs 10 feet of total length for crosscutting long stock. Plan this before you set a single tool down.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>The Storage Zone</strong> — Walls and overhead space for everything that is not in use. Wall tracks, pegboard, cabinets, and ceiling racks all live here. This zone keeps the floor clear, which is the single biggest difference between a workshop that works and one that does not.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>The Materials Zone</strong> — Where raw materials live before they become projects. Lumber needs a rack. Sheet goods need vertical storage. Hardware needs bins. Put this zone near the garage door so you can unload materials without carrying them across the shop.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-2'>The Work Triangle</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Borrow a concept from kitchen design: the work triangle. Your workbench, your primary stationary tool, and your materials storage should form a triangle where no side is more than 6 feet. Every step you take between these three points during a project is wasted time. In practice, this means your miter saw or table saw should be close to your bench, and your lumber rack should be close to both.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-2'>Measuring Your Space</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'>Before drawing anything, measure everything:</p>
          <ul className='list-disc list-inside text-slate-700 text-sm space-y-1 mb-4'>
            <li>Total floor dimensions</li>
            <li>Ceiling height (affects what you can hang and whether a car lift is feasible)</li>
            <li>Door locations and swing clearances</li>
            <li>Window locations and which direction they face (north light is best for color-accurate work)</li>
            <li>Existing outlet locations and breaker panel location</li>
            <li>Any fixed obstructions: columns, water heaters, HVAC equipment</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Leave at least 36 inches of walkway clearance around all work areas. The <a href='https://www.nfpa.org/education-and-research/home-fire-safety/garage' target='_blank' rel='noopener noreferrer' className='text-amber-700 underline'>National Fire Protection Association</a> recommends 36-inch minimum clear paths to exits in workshop spaces, both for safety and for sanity when you are moving long stock.</p>
        </section>

        {/* Step 2: Electrical */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Step 2: Get the Electrical Right</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>This is the step most homeowners skip until they are frustrated with tripping breakers and running extension cords. Do not skip it. Getting the electrical right before you install permanent storage and equipment saves you from tearing out shelving to run conduit later.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-2'>What a Garage Workshop Actually Needs</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>A basic garage typically comes with one 20-amp circuit for general outlets and a separate circuit for lighting. This is not enough for a working shop. Here is what you actually need:</p>
          <div className='overflow-x-auto mb-4'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Circuit</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Amperage</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>What It Powers</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>General outlets (x2)</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>20A each at 120V</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Cordless tool chargers, shop vac, small tools</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Lighting</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>20A at 120V</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Keep this separate. You want lights on when a tool trips a breaker</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Table saw or primary stationary tool</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>20A at 240V</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Table saw, jointer, planer</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Dust collector</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>20A at 240V</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Dedicated so it runs simultaneously with a saw</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Air compressor</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>20A at 120V or 240V</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Check your compressor nameplate</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Workbench outlet strip</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>20A at 120V</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Hand tools, chargers, task lights</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>The 240V advantage:</strong> Running a tool at 240V instead of 120V cuts the amperage draw in half. A 14-amp table saw at 120V becomes a 7-amp load at 240V. This means you can often run the table saw and dust collector simultaneously on a single 20-amp 240V circuit. Most stationary tools that are rated for both voltages will run significantly cooler and more reliably at 240V.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>The 80% rule:</strong> Electrical code requires that continuous loads on a circuit stay at or below 80% of the circuit's capacity. On a 20-amp circuit, that means 16 amps of actual load. Do not run a 16-amp table saw and a 12-amp dust collector on the same 20-amp circuit. They exceed 80% of capacity together.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Subpanel for serious setups:</strong> If you plan on multiple 240V circuits, an air compressor, a heater, and an EV charger, run a subpanel. A 60-amp subpanel installed by an electrician costs $500 to $1,200 and gives you a clean, expandable electrical backbone for the entire shop. A 100-amp subpanel costs only slightly more and gives you room to grow. See our <Link href='/guides/ev-charger-installation' className='text-amber-700 underline'>EV charger installation guide</Link> if you want to include Level 2 charging in the plan.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Outlet placement:</strong> Put outlets at 48 inches height on walls, not at floor level. You want them at countertop height on the workbench wall, and at chest height on the tool wall so cords do not drag across the floor. Install a minimum of one outlet every 6 feet around the perimeter. This eliminates extension cords entirely in most shops.</p>
        </section>

        {/* Step 3: Lighting */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Step 3: Light It Properly</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Most garage workshops are criminally underlit. A single overhead fixture or two old fluorescents is enough to find your keys, not enough to work safely with sharp tools. The difference between adequate lighting and proper workshop lighting is the difference between straining your eyes and seeing the pencil line clearly on the first try.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-2'>The Lighting Formula</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'>Calculate your total lumen requirement before buying a single fixture:</p>
          <ul className='list-disc list-inside text-slate-700 text-sm space-y-1 mb-4'>
            <li><strong>General use shop</strong> (parking, occasional projects): 50 lumens per square foot</li>
            <li><strong>Active workshop</strong> (regular projects, hobby work): 75 lumens per square foot</li>
            <li><strong>Precision work</strong> (woodworking, electronics, detail finishing): 100 lumens per square foot</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>A 400 square foot two-car garage workshop needs 30,000 to 40,000 lumens for serious work. Four Hykolity 4-foot LED shop lights at 4,400 lumens each gives you 17,600 lumens for $55 to $75. Add two more packs and you are at 35,000 lumens for under $150. See our <Link href='/reviews/best-garage-lighting' className='text-amber-700 underline'>best garage lighting guide</Link> for specific fixture picks.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-2'>Color Temperature and CRI</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Always use 5000K daylight white in a workshop. It closely mimics natural sunlight, makes it easier to see pencil lines on wood, and reduces eye fatigue during long sessions. Never use warm white (2700K to 3000K). It makes the shop feel dim and makes it nearly impossible to distinguish similar paint colors or wood tones. Buy fixtures with a CRI (Color Rendering Index) of 80 or higher. CRI measures how accurately a light renders colors compared to natural sunlight. Below 80, everything looks slightly washed out and you lose the ability to distinguish subtle differences in material color, finish sheen, or stain depth.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-2'>Task Lighting at the Bench</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Overhead lighting casts shadows on the workbench from your own body. A task light mounted directly above or on the bench itself eliminates this. Under-cabinet LED strips or a dedicated adjustable arm lamp at the bench gives you shadow-free illumination on the work surface. This is not optional for precision work. It is the difference between catching a tear-out before it matters and finding it after you have already sanded.</p>
        </section>

        {/* Step 4: Workbench */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Step 4: Choose and Position Your Workbench</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>The workbench is the heart of the workshop. Everything else orbits it. Get its position and height right before anything else is permanent.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-2'>The Right Height</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Standard workbench height is 34 to 36 inches for standing work. The rule of thumb: stand with your arms relaxed at your sides and make a fist. The top of your fist should be at or slightly above bench height. At this height, you can apply downward pressure on a hand plane, push a chisel, or use a hand saw without hunching or reaching up. For workbench use that involves a lot of clamping and vise work, a slightly lower bench (32 to 34 inches) can be better. For detail work or assembly of small parts, higher (36 to 38 inches) reduces neck strain.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-2'>Workbench Positioning</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Put the bench under your best light, perpendicular to the primary light source if possible. This creates shadow that helps you see surface texture, joinery gaps, and pencil lines. A bench positioned with light coming directly from above is worse than one with light coming from the side at a slight angle. Leave 3 feet of clear space on the left side for long material support, and 3 feet at the front. The right side can be tighter if that is your wall storage side.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-2'>What to Look For in a Bench</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'>For a serious workshop, the minimum specifications are:</p>
          <ul className='list-disc list-inside text-slate-700 text-sm space-y-1 mb-4'>
            <li>Work surface: 48 x 24 inches minimum (60 x 24 inches is better for most projects)</li>
            <li>Weight capacity: 1,500 lbs minimum</li>
            <li>Surface material: solid rubberwood, hardwood, or MDF with hardwood edging (avoid particle board)</li>
            <li>Vise or vise mounting: at least one front vise for clamping work</li>
            <li>Built-in power: 4 outlets and 2 USB ports saves an extension cord</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>See our <Link href='/reviews/best-garage-workbenches' className='text-amber-700 underline'>best garage workbenches guide</Link> for tested picks at every price point.</p>
        </section>

        {/* Step 5: Floor */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Step 5: Floor — Do Not Skip It</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>You will stand on this floor for hours. A bare concrete floor is cold, hard on joints, dusty, and absorbs oil and stains that attract slipping hazards. A properly finished floor changes the feel of the entire shop.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-2'>Epoxy Coating</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>An epoxy-coated floor is the gold standard for a workshop. It seals the concrete against oil, chemicals, and moisture. Spills wipe up instead of soaking in. Dropped tools slide rather than chip. Anti-slip flakes embedded in the surface add traction. A DIY epoxy kit for a two-car garage costs $200 to $280 for a polycuramine product like Rust-Oleum RockSolid. Professional coating costs $3 to $7 per square foot. Critical rule: remove all oil stains before coating. Oil contamination under epoxy causes the coating to fail within months. See our <Link href='/problems/garage-floor-oil-stains' className='text-amber-700 underline'>garage floor oil stains guide</Link> for removal methods, and our <Link href='/reviews/best-garage-floor-epoxy' className='text-amber-700 underline'>garage floor epoxy guide</Link> for kit comparisons.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-2'>Anti-Fatigue Mats</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Even with an epoxy floor, standing on concrete for two to four hours causes significant leg and back fatigue. Anti-fatigue mats placed at the workbench and primary stationary tool positions reduce this substantially. 3/4-inch thick foam or rubber mats cost $30 to $80 per station and make a noticeable difference on long project days.</p>
        </section>

        {/* Step 6: Storage */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Step 6: Storage — Walls Up, Floor Clear</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>The guiding principle for workshop storage is simple: everything off the floor except tools in use. A clear floor means you can move freely, change your layout, sweep sawdust, and roll tools where you need them.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-2'>Wall Storage Priority</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Hand tools:</strong> Pegboard or wall track systems put frequently used tools at eye level within arm's reach of the bench. The shadow board method (outlines of each tool drawn on the pegboard) makes it immediately obvious when a tool is missing.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Power tools:</strong> A wall track or mounted bracket system for drills, circular saws, and similar tools keeps them charged and accessible. Milwaukee, DeWalt, and Ridgid all make brand-specific wall storage systems that integrate with their tool lines.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Clamps:</strong> A dedicated clamp rack on the wall saves an enormous amount of time. Clamps that are stacked on a shelf are clamps you spend three minutes untangling every time you need one.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>For full wall storage system recommendations, see our <Link href='/reviews/best-garage-storage-systems' className='text-amber-700 underline'>best garage storage systems guide</Link>.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-2'>Cabinet Storage</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Cabinets are the right choice for hardware, finishing supplies, chemicals, and any tools that should be kept dust-free. A steel cabinet with locking doors protects expensive power tools and keeps chemicals safely contained and out of reach of children. See our <Link href='/reviews/best-garage-cabinets' className='text-amber-700 underline'>best garage cabinets guide</Link> for system options.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-2'>Overhead Storage</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Ceiling racks (Fleximounts, SafeRacks) are the right place for sheet goods, long lumber, seasonal materials, and anything you access less than once a week. A 4x8 overhead rack rated for 600 lbs costs $150 to $250 and clears an enormous amount of floor and wall space. Mount only into ceiling joists, not drywall.</p>
        </section>

        {/* Step 7: Ventilation */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Step 7: Ventilation and Dust Control</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Two things damage lungs in a workshop: fine dust from sanding and cutting, and fumes from finishing products. Neither is visible in the air at dangerous concentrations. Both require active ventilation.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-2'>Dust Collection</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>For any shop with a table saw, miter saw, or sander, a dust collector is not optional for regular use. Fine wood dust is both a health hazard and a fire risk. OSHA classifies wood dust as a carcinogen at sufficient concentrations, and sawdust accumulation on motors and in corners creates a fire ignition risk. A single-stage 1 HP dust collector ($200 to $350) handles most benchtop and portable tools through flexible hose connections. For a multi-tool shop, a 1.5 to 2 HP unit ($350 to $600) with a dedicated 240V circuit handles continuous operation more effectively.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Minimum setup:</strong> A shop vacuum with a fine dust filter at the bench and a 1 HP dust collector at the table saw. This captures the majority of airborne particles from the two highest-volume dust sources.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-2'>Air Circulation and Fume Removal</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>For finishing work (staining, painting, applying polyurethane), you need active air exchange, not just a ceiling fan. Open the garage door and use a box fan to pull air through the space from a clean air intake on the opposite side. For enclosed shops, a wall-mounted exhaust fan rated for the shop's volume provides continuous air exchange. See our <Link href='/guides/garage-ventilation-guide' className='text-amber-700 underline'>garage ventilation guide</Link> for CFM calculations and fan recommendations.</p>
        </section>

        {/* Step 8: Heating and Cooling */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Step 8: Heating and Cooling</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>A shop you cannot use in January or August is half a shop. Thermal comfort expands how many months per year your workshop is actually usable, and it protects materials. Wood acclimates to its environment, and extreme temperature swings cause lumber to move.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-2'>Winter Heating</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>For a well-insulated two-car garage shop, a 240V electric forced-air heater (5,000W, $180 to $250) handles heating adequately. For a poorly insulated or larger space, a natural gas ceiling heater like the Modine Hot Dawg (45,000 BTU, $500 to $700) is the long-term cost winner.</p>
          <div className='bg-red-50 border-l-4 border-red-600 p-4 rounded mb-6'>
            <p className='font-semibold text-slate-800 text-sm mb-2'>Critical for Workshops</p>
            <p className='text-slate-700 text-sm'>Never use an unvented propane or kerosene heater in a workshop with sawdust accumulation. Fine dust in the air combined with an open flame is a genuine fire and explosion hazard. Use only electric or properly vented gas heaters.</p>
          </div>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>See our <Link href='/reviews/best-garage-heaters' className='text-amber-700 underline'>best garage heaters guide</Link> for sizing and product recommendations.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-2'>Summer Cooling</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'>A ceiling fan provides comfort on mild days but cannot cool a shop on a 95-degree afternoon. Options in order of cost and effectiveness:</p>
          <ul className='list-disc list-inside text-slate-700 text-sm space-y-1 mb-4'>
            <li><strong>Box fan in window or garage door:</strong> $30 to $50, provides airflow only</li>
            <li><strong>Window AC unit (8,000 to 12,000 BTU):</strong> $200 to $400, cools the space but requires a 120V or 240V outlet</li>
            <li><strong>Mini-split heat pump (18,000 BTU):</strong> $1,400 to $1,800 installed, provides both heating and cooling year-round from a single system</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>A mini-split is the long-term answer for a year-round shop. The upfront cost is higher but the operating cost is lower than electric resistance heating, and it eliminates the need for a separate cooling solution.</p>
        </section>

        {/* Step 9: Safety */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Step 9: Safety Essentials</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>A great shop is a safe shop. These are not optional additions. They are non-negotiable before you turn on the first tool.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-2'>Fire Extinguisher</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Mount a 10-pound ABC-rated fire extinguisher within 30 feet of your work area, at a height between 3.5 and 5 feet off the floor. ABC-rated means it handles wood, electrical, and chemical fires, all three of which are possible in a workshop. The National Fire Protection Association (NFPA) recommends one extinguisher per 3,000 square feet of workshop space, but in a home garage shop, one good extinguisher mounted near the exit is the correct baseline. Check it annually. An extinguisher that has not been inspected in three years may not function when you need it.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-2'>Flammables Storage</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Finishing products (stains, varnishes, lacquers, paint thinner, acetone) are flammable liquids that should never be stored in a cabinet next to heat sources or in quantities larger than what you need for the current project. A metal flammables cabinet ($80 to $200) is the correct storage solution. Keep the quantity in the shop to the minimum needed for your current project and store the rest elsewhere.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-2'>First Aid Kit</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>A workshop first aid kit needs more than bandages. Stock it with gauze pads for larger cuts, a tourniquet for serious lacerations, eye wash, and burn treatment. Mount it on the wall near the exit, visible and accessible, not tucked in a drawer.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-2'>Personal Protection Equipment (PPE)</h3>
          <ul className='list-disc list-inside text-slate-700 text-sm space-y-1 mb-4'>
            <li><strong>Eye protection:</strong> Safety glasses for every power tool operation, full face shield for lathe work and grinding</li>
            <li><strong>Hearing protection:</strong> 85 decibels is the threshold for hearing damage over extended exposure. A table saw typically runs 90 to 100 dB. Use earplugs or earmuffs rated for the noise level of your tools</li>
            <li><strong>Dust mask:</strong> An N95 for general shop work. A P100 respirator for sanding, routing, or finishing work</li>
            <li><strong>Cut-resistant gloves:</strong> For material handling, not for power tool operation, where gloves can catch</li>
          </ul>
        </section>

        {/* Budget Breakdown */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Budget Breakdown: What a Workshop Actually Costs</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>There is no single right budget for a workshop. There is a progression. Build in phases.</p>
          <div className='overflow-x-auto mb-4'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Phase</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>What It Includes</th>
                  <th className='border border-slate-300 px-3 py-2 text-left font-semibold text-slate-800'>Approximate Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Phase 1: Functional basics</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Workbench, basic hand tools, pegboard, shop lighting upgrade, 20A circuit</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$500 to $1,200</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Phase 2: Core power tools</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Table saw or miter saw, drill press, shop vac, dust collector</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$1,500 to $3,000</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Phase 3: Storage system</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Wall track or cabinet system, ceiling rack, clamp rack</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$500 to $2,000</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Phase 4: Comfort and safety</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Floor coating, heating, ventilation, fire extinguisher, PPE</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$500 to $2,500</td>
                </tr>
                <tr>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>Phase 5: Serious capability</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>240V subpanel, additional stationary tools, air compressor</td>
                  <td className='border border-slate-300 px-3 py-2 text-slate-700'>$1,500 to $5,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>The right approach:</strong> Do Phase 1 completely before starting Phase 2. A well-lit bench with proper hand tools and a clean floor produces better results than an expensive table saw in a dark, disorganized space.</p>
        </section>

        {/* Seasonal Considerations */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Seasonal Considerations</h2>
          <h3 className='text-lg font-bold text-slate-900 mb-2'>Spring and Summer</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Spring is the best time to do the planning and infrastructure work (floor coating, electrical upgrades, ventilation installation), before the heat of summer makes working in the garage uncomfortable. Epoxy floor coatings require temperatures between 50 and 90 degrees Fahrenheit to cure correctly. Summer heat in an uninsulated garage regularly exceeds 110 degrees in warm climates, making extended work sessions physically demanding and potentially dangerous. A window AC unit ($200 to $400) or a ceiling fan combined with the garage door open makes summer sessions much more manageable and keeps your lumber from moving due to humidity swings.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-2'>Fall and Winter</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Fall is the time to seal the shop against winter. Check weather seals, add door insulation, and confirm your heating solution is working before the first freeze. Wood movement from temperature and humidity swings is the enemy of precise joinery, and a climate-stable shop produces better work year-round. In winter, never store finishing products where they can freeze. Latex paint, water-based stains, and some finishes are permanently damaged by freezing and must be kept above 40 degrees Fahrenheit.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>For the full year-round maintenance schedule covering all nine garage systems, see our <Link href='/guides/garage-maintenance-checklist' className='text-amber-700 underline'>complete garage maintenance checklist</Link>.</p>
        </section>

        {/* FAQ Section */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Frequently Asked Questions</h2>
          <h3 className='text-lg font-bold text-slate-900 mb-2'>How much does it cost to set up a garage workshop?</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>A functional starter workshop costs $500 to $1,200 for a workbench, basic lighting upgrade, pegboard wall storage, and a hand tool set. Adding core power tools (table saw, miter saw, drill press) runs $1,500 to $3,000. A complete setup with floor coating, proper ventilation, cabinet storage, and a 240V subpanel runs $5,000 to $15,000 built over time in phases. The key is starting with the infrastructure (electrical and lighting) before filling the space with tools and storage.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-2'>What electrical circuits does a garage workshop need?</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>At minimum: two dedicated 20-amp 120V circuits for general outlets, one separate 20-amp circuit for lighting, and one 20-amp 240V circuit for your primary stationary tool. A fully equipped shop also needs a dedicated 240V circuit for the dust collector, a circuit for the air compressor, and a workbench outlet strip on its own circuit. If you plan on multiple 240V tools, a 60 to 100-amp subpanel gives you a clean, expandable electrical backbone and costs $500 to $1,200 installed.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-2'>What is the best flooring for a garage workshop?</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>An epoxy or polycuramine coating is the best choice. It seals the concrete against oil and chemicals, makes spills easy to clean up, reduces dust, and provides a comfortable surface. A DIY polycuramine kit like Rust-Oleum RockSolid costs $200 to $280 for a two-car garage. Remove all oil stains before coating. Oil contamination causes the coating to fail. Add anti-fatigue mats at the workbench and primary tool positions to reduce leg fatigue on long project days.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-2'>What is the first thing to do when setting up a garage workshop?</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Plan your zones on paper before buying anything. Measure the space, map the four zones (work, tool, storage, materials), identify where your electrical panel is and what circuits you have, and decide where the workbench goes. Two hours of planning prevents months of frustration. The most common mistake is starting with tools and storage and working backward. You end up with outlets in the wrong places, shelving blocking the light switch, and a layout that fights your workflow instead of supporting it.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-2'>Can I use a propane heater in my garage workshop?</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Not safely if you have sawdust accumulation. Fine wood dust suspended in air combined with an open flame is a genuine fire and explosion hazard. Use only electric forced-air heaters or properly vented gas heaters like the Modine Hot Dawg with through-wall or roof venting. If you have no electrical heating option and must use propane, run the dust collector for 5 minutes before turning on the heater to clear airborne particles, ensure active ventilation, and install a battery-operated carbon monoxide detector.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-2'>How do I keep my workshop organized long-term?</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>The single most effective habit is the one-in-one-out rule for tools: every new tool gets a designated spot before it comes into the shop. If there is no spot, something has to move or leave before the new tool arrives. Shadow boards on the pegboard make it immediately obvious when a tool has not been returned. A weekly 15-minute sweep (tools back to their spots, scraps in the bin, floor cleared) keeps entropy from accumulating. The shops that stay organized are the ones where everything has a home, not the ones with the most expensive storage systems.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-2'>How much lighting does a garage workshop need?</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Target 75 to 100 lumens per square foot for active workshop use. A 400 square foot two-car garage needs 30,000 to 40,000 lumens. Four Hykolity 4-foot LED shop lights at 4,400 lumens each provides 17,600 lumens for $55 to $75. You will likely want two packs for a full two-car garage. Use 5000K daylight white color temperature and fixtures with a CRI of 80 or higher. Add a dedicated task light at the workbench to eliminate shadows from overhead fixtures.</p>
          <h3 className='text-lg font-bold text-slate-900 mb-2'>Do I need a dust collector for a garage workshop?</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>For any regular use of a table saw, miter saw, or random orbit sander, yes. Fine wood dust is classified as a carcinogen at sufficient concentrations, and sawdust accumulation on motors and in corners creates a fire ignition risk. A 1 HP single-stage dust collector costs $200 to $350 and handles most benchtop and portable tools through flexible hose connections. Pair it with a shop vacuum at the workbench for hand tool and detail work. This combination captures the majority of airborne particles from the two highest-volume dust sources.</p>
        </section>

        {/* Related Guides */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Related Guides</h2>
          <div className='grid gap-4'>
            <Link href='/reviews/best-garage-lighting' className='block border border-slate-200 rounded-lg p-4 hover:border-amber-700 transition-colors'>
              <span className='text-amber-700 font-bold text-xs uppercase tracking-wider'>Review</span>
              <h3 className='text-slate-900 font-semibold text-sm mt-1'>Best Garage Lighting</h3>
              <p className='text-slate-600 text-xs mt-1'>LED shop lights, high bays, and wraparounds for every workshop size.</p>
            </Link>
            <Link href='/reviews/best-garage-workbenches' className='block border border-slate-200 rounded-lg p-4 hover:border-amber-700 transition-colors'>
              <span className='text-amber-700 font-bold text-xs uppercase tracking-wider'>Review</span>
              <h3 className='text-slate-900 font-semibold text-sm mt-1'>Best Garage Workbenches</h3>
              <p className='text-slate-600 text-xs mt-1'>Tested picks from $180 to $550.</p>
            </Link>
            <Link href='/reviews/best-garage-cabinets' className='block border border-slate-200 rounded-lg p-4 hover:border-amber-700 transition-colors'>
              <span className='text-amber-700 font-bold text-xs uppercase tracking-wider'>Review</span>
              <h3 className='text-slate-900 font-semibold text-sm mt-1'>Best Garage Cabinets</h3>
              <p className='text-slate-600 text-xs mt-1'>Steel storage systems for tools and hardware.</p>
            </Link>
            <Link href='/reviews/best-garage-storage-systems' className='block border border-slate-200 rounded-lg p-4 hover:border-amber-700 transition-colors'>
              <span className='text-amber-700 font-bold text-xs uppercase tracking-wider'>Review</span>
              <h3 className='text-slate-900 font-semibold text-sm mt-1'>Best Garage Storage Systems</h3>
              <p className='text-slate-600 text-xs mt-1'>Wall tracks, ceiling racks, and pegboard compared.</p>
            </Link>
            <Link href='/guides/garage-ventilation-guide' className='block border border-slate-200 rounded-lg p-4 hover:border-amber-700 transition-colors'>
              <span className='text-amber-700 font-bold text-xs uppercase tracking-wider'>Guide</span>
              <h3 className='text-slate-900 font-semibold text-sm mt-1'>Garage Ventilation Guide</h3>
              <p className='text-slate-600 text-xs mt-1'>CFM requirements and fan selection for dust and fume control.</p>
            </Link>
            <Link href='/reviews/best-garage-heaters' className='block border border-slate-200 rounded-lg p-4 hover:border-amber-700 transition-colors'>
              <span className='text-amber-700 font-bold text-xs uppercase tracking-wider'>Review</span>
              <h3 className='text-slate-900 font-semibold text-sm mt-1'>Best Garage Heaters</h3>
              <p className='text-slate-600 text-xs mt-1'>Electric, gas, and infrared options for year-round comfort.</p>
            </Link>
            <Link href='/guides/ev-charger-installation' className='block border border-slate-200 rounded-lg p-4 hover:border-amber-700 transition-colors'>
              <span className='text-amber-700 font-bold text-xs uppercase tracking-wider'>Guide</span>
              <h3 className='text-slate-900 font-semibold text-sm mt-1'>EV Charger Installation</h3>
              <p className='text-slate-600 text-xs mt-1'>Add Level 2 charging to your workshop electrical plan.</p>
            </Link>
            <Link href='/reviews/best-garage-floor-epoxy' className='block border border-slate-200 rounded-lg p-4 hover:border-amber-700 transition-colors'>
              <span className='text-amber-700 font-bold text-xs uppercase tracking-wider'>Review</span>
              <h3 className='text-slate-900 font-semibold text-sm mt-1'>Best Garage Floor Epoxy</h3>
              <p className='text-slate-600 text-xs mt-1'>DIY coating kits that actually last.</p>
            </Link>
          </div>
        </section>

        {/* Glossary */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Glossary</h2>
          <div className='space-y-4'>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Zone planning</p>
              <p className='text-slate-700 text-sm'>The process of dividing a workshop into dedicated functional areas (work, tool, storage, materials) before installing any equipment or storage. Zone planning ensures the layout supports workflow rather than fighting it, and prevents the most common workshop mistakes: outlets in the wrong spots, storage blocking light, and tools positioned for conflict rather than flow.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Subpanel</p>
              <p className='text-slate-700 text-sm'>A secondary electrical panel installed in or near the garage, fed from the main house panel, that provides dedicated circuits for the workshop. A 60 to 100-amp subpanel allows multiple 240V circuits, plenty of 120V general circuits, and room for future expansion including EV charging. Required for any serious multi-tool shop setup. Installation costs $500 to $1,200 with an electrician.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>240V circuit</p>
              <p className='text-slate-700 text-sm'>An electrical circuit operating at 240 volts, used for high-power tools including table saws, jointers, planers, air compressors, and dust collectors. Running a tool at 240V cuts amperage draw in half compared to 120V, allowing more tools to share circuits and reducing motor heat. Most stationary woodworking tools perform better on 240V and should be wired for it if the option exists.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Lumens per square foot (foot-candles)</p>
              <p className='text-slate-700 text-sm'>A measure of light intensity at the work surface. Workshop best practice is 75 to 100 lumens per square foot for active use. Inadequate lighting is the most commonly overlooked workshop safety hazard. Poor visibility while operating sharp tools directly increases the risk of injury.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Dust collector</p>
              <p className='text-slate-700 text-sm'>A dedicated filtration and collection system that captures wood dust at the source (the tool) rather than allowing it to become airborne. Distinct from a shop vacuum in that it is designed for continuous high-volume operation and captures fine particles that pass through standard shop vac filters. Required for regular table saw and miter saw use in any enclosed shop.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Anti-fatigue mat</p>
              <p className='text-slate-700 text-sm'>A thick foam or rubber mat placed on hard flooring at standing work stations. Reduces leg and back fatigue during extended standing, which is directly linked to lower back pain in workshop users. The 3/4-inch thickness provides the correct balance of cushioning and stability for tool operation.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>CRI (Color Rendering Index)</p>
              <p className='text-slate-700 text-sm'>A measure of how accurately a light source renders colors compared to natural sunlight (CRI 100). Fixtures below CRI 80 make it difficult to distinguish similar wood tones, finish sheen levels, or paint colors. For a workshop, CRI 80 is the minimum acceptable value; CRI 90 or above is preferable for finishing work.</p>
            </div>
            <div className='border-b border-slate-200 pb-3'>
              <p className='font-semibold text-slate-800 text-sm'>Shadow board</p>
              <p className='text-slate-700 text-sm'>A storage system where the outline of each tool is drawn or cut into the pegboard or wall panel behind its hanging position. Makes it immediately obvious when a tool has been removed and not returned. Highly effective for maintaining organization in a shared shop or when working on complex projects with many tools in simultaneous use.</p>
            </div>
          </div>
        </section>

        {/* Lead Form */}
        <LeadForm />
      </article>

      {/* Schema Scripts */}
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </>
  )
}
