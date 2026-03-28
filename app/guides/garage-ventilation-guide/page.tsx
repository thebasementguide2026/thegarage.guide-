import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Garage Ventilation Guide: Carbon Monoxide Safety, CFM Calculations, and the Right Fan for Every Garage | The Garage Guide',
  description: 'The complete garage ventilation guide covering carbon monoxide safety, CFM calculations for residential garages, exhaust fan selection, workshop ventilation requirements, the crack-the-door myth, CO detector placement, building code requirements, and ventilation solutions for every garage type and use case.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Does a garage need ventilation?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, particularly an attached garage. An attached garage concentrates carbon monoxide from vehicle exhaust, chemical vapors from stored materials, and workshop fumes in a space that shares walls with the living area. The IRC does not mandate mechanical ventilation for residential attached garages, but the EPA recommends a minimum 70 CFM exhaust fan running continuously or activated by motion. A garage with no ventilation is not code-violating in most jurisdictions but is a genuine safety risk.' } },
    { '@type': 'Question', name: 'How many CFM do I need to ventilate my garage?', acceptedAnswer: { '@type': 'Answer', text: 'CFM = (Garage volume in cubic feet x Air Changes Per Hour) divided by 60. For general parking use, plan for 6 to 8 air changes per hour. For workshop use, plan for 10 to 15 ACH. A standard 2-car garage (576 square feet with 8-foot ceilings) needs approximately 460 to 615 CFM for general use and 770 to 1,150 CFM for active workshop activities.' } },
    { '@type': 'Question', name: 'Where should a CO detector be placed for an attached garage?', acceptedAnswer: { '@type': 'Answer', text: 'In the living space adjacent to the garage, not in the garage itself. CO detectors use electrochemical sensors that can be damaged by the temperature extremes of an unheated garage. Place the detector at sleeping level (approximately 5 feet off the floor) in the nearest bedroom or hallway to the garage.' } },
    { '@type': 'Question', name: 'Is it safe to run a car in the garage with the door open?', acceptedAnswer: { '@type': 'Answer', text: 'Only if the door is fully open and the vehicle is running briefly. Running a vehicle with the door open a few inches is not safe \u2014 the partial opening does not provide sufficient airflow to prevent CO from accumulating to dangerous levels. The safest practice is to back the vehicle out before starting the engine for any extended warm-up.' } },
    { '@type': 'Question', name: 'What kind of fan do I need for a garage workshop?', acceptedAnswer: { '@type': 'Answer', text: 'For general woodworking and light fabrication, a standard wall exhaust fan rated for 500 to 800 CFM is appropriate. For spray painting or any work with flammable solvents, the fan must be explosion-proof \u2014 a standard fan with a steel motor can ignite solvent vapors. Never use a standard household exhaust fan when working with flammable materials.' } },
    { '@type': 'Question', name: 'How do I ventilate a garage in summer heat?', acceptedAnswer: { '@type': 'Answer', text: 'Address insulation before fans. An uninsulated garage door and uninsulated shared wall contribute more heat than any fan can remove. After addressing insulation, a high-CFM exhaust fan (800 to 1,200 CFM for a 2-car garage) flushes out accumulated hot air effectively in most climates. A ceiling fan reduces perceived temperature by 3 to 8 degrees without lowering air temperature. A mini-split system provides genuine cooling for conditioned workshop spaces.' } },
    { '@type': 'Question', name: 'Does building code require garage ventilation?', acceptedAnswer: { '@type': 'Answer', text: 'The IRC does not mandate mechanical ventilation for residential attached garages \u2014 it requires openable area equal to at least 4 percent of the garage floor area. The EPA recommends but does not require a minimum 70 CFM exhaust fan for attached residential garages. Most jurisdictions follow IRC for residential garages, meaning a mechanical exhaust fan is not required but is strongly recommended for safety.' } },
    { '@type': 'Question', name: 'Can I use a bathroom exhaust fan for my garage?', acceptedAnswer: { '@type': 'Answer', text: 'A standard bathroom exhaust fan (50 to 110 CFM) is not adequate for most garage ventilation needs and is not rated for garage temperature extremes, dust, and moisture. For any standard garage, use a fan rated specifically for garage or utility room use with appropriate CFM capacity. For a 2-car garage, a minimum 500 CFM garage-rated exhaust fan is the correct specification.' } },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Garage Ventilation Guide: Carbon Monoxide Safety, CFM Calculations, and the Right Fan for Every Garage',
  description: 'The complete garage ventilation guide covering carbon monoxide safety, CFM calculations, exhaust fan selection, workshop ventilation requirements, CO detector placement, and building code requirements.',
  author: { '@type': 'Organization', name: 'The Garage Guide' },
  publisher: { '@type': 'Organization', name: 'The Garage Guide', url: 'https://thegarage.guide' },
  mainEntityOfPage: 'https://thegarage.guide/guides/garage-ventilation-guide',
  dateModified: '2026-03-28',
}

export default function GarageVentilationGuide() {
  return (
    <>

      {/* Hero Section */}
      <div className='relative h-64 md:h-80 w-full mb-8'>
        <Image src='/images/garage-ventilation-guide.jpg' alt='Residential garage interior with open garage door and wall-mounted exhaust fan visible on the rear wall showing active cross-ventilation' fill className='object-cover rounded-xl' />
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl' />
        <div className='absolute bottom-4 left-4'>
          <span className='bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded mr-2'>GG</span>
          <span className='text-white text-xs'>The Garage Guide</span>
          <p className='text-white/70 text-xs mt-1'>Updated Mar 2026 &middot; 14 min read</p>
        </div>
      </div>

      <div className='max-w-3xl mx-auto px-4'>

        {/* Title */}
        <div className='mb-6'>
          <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-3'>Guide</span>
          <h1 className='text-3xl font-bold text-slate-900 mb-3'>Garage Ventilation Guide</h1>
          <p className='text-slate-500 text-sm'>Carbon monoxide safety, CFM calculations, and the right fan for every garage.</p>
        </div>

        {/* TL;DR */}
        <div className='bg-amber-50 border-l-4 border-amber-500 p-4 mb-8'>
          <p className='text-slate-700 text-sm leading-relaxed'><strong>Quick answer:</strong> Proper garage ventilation requires addressing three distinct needs: safety ventilation to remove carbon monoxide and vehicle exhaust, thermal ventilation to manage summer heat, and workshop ventilation for paint fumes, solvents, and sawdust. For an attached garage, the EPA recommends a minimum exhaust fan capacity of 70 CFM running continuously or activated by motion. A standard 2-car attached garage (576 square feet) requires approximately 480 CFM of exhaust capacity for general use or 770 CFM for workshop activities. Carbon monoxide detectors must be placed in the living space adjacent to the garage &mdash; not in the garage itself. Never run a vehicle engine in a closed garage, even with the door open a few inches.</p>
        </div>

        {/* Why Garage Ventilation Is Primarily a Safety Issue */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Why Garage Ventilation Is Primarily a Safety Issue</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Most homeowners think about garage ventilation as a comfort issue &mdash; keeping the garage cool in summer or reducing that stale, musty smell. Comfort is a secondary benefit. The primary reason garage ventilation matters is safety.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>An attached garage is one of the most dangerous rooms in a home from an air quality standpoint. It concentrates three categories of serious hazards in a single enclosed space:</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Carbon monoxide from vehicle exhaust.</strong> CO is colorless, odorless, and lethal at surprisingly low concentrations. A single running vehicle in a typical attached garage can raise CO levels to dangerous concentrations within minutes. CO is heavier than oxygen but distributes throughout a space quickly; it does not stay near the floor as many people mistakenly believe.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Chemical vapors from stored materials.</strong> Most homeowners store gasoline (for lawn equipment and snowblowers), motor oil, paint, paint thinner, pesticides, and cleaning solvents in the garage. Many of these materials off-gas continuously, and most produce vapors that are heavier than air, accumulate at floor level, and are flammable.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Workshop fumes and particulates.</strong> Homeowners who use the garage as a workshop generate sawdust, paint mist, solvent vapors, and in some cases welding fumes &mdash; each with specific ventilation requirements significantly higher than those for a parking-only garage.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>For attached garages, inadequate ventilation creates a direct pathway for all three hazard types to enter the living space through shared walls, ceiling penetrations, and the door between the garage and house.</p>
        </section>

        {/* The Attached vs. Detached Distinction */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>The Attached vs. Detached Distinction</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Ventilation requirements and solutions differ significantly between attached and detached garages.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Attached garage:</strong> Shares at least one wall with the living space. Any air quality problem in the garage has a direct pathway to the home. CO and chemical vapors can migrate through gaps in the fire separation wall, around the door between the garage and house, through shared HVAC ductwork if present, and through any penetration in the shared wall assembly. Attached garages require both adequate ventilation and proper air sealing of the shared wall to prevent contaminant transfer.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Detached garage:</strong> Fully independent structure with no shared walls. Air quality problems in the garage do not directly threaten the home&apos;s air quality. Ventilation requirements are still real &mdash; CO from a running engine in a closed detached garage is just as dangerous to anyone inside &mdash; but the risk of contaminant transfer to the living space does not exist.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>The critical interaction between ventilation and air sealing for attached garages:</strong> A well-ventilated attached garage that has poor air sealing on the shared wall can actually spread contaminants more effectively than a poorly ventilated one, because the exhaust fan creates negative pressure that draws air into the garage from the living space, and air then travels back through gaps under a pressure differential. Ventilation and air sealing of the shared wall must be addressed together, not separately. See the <Link href='/guides/complete-garage-guide' className='text-amber-700 underline hover:text-amber-900'>complete garage guide</Link> for the fire separation and air sealing requirements that complement proper ventilation.</p>

          {/* The Depressurization Problem */}
          <div className='bg-slate-50 border-l-4 border-teal-600 p-5 rounded-r-lg my-6'>
            <h3 className='font-bold text-slate-900 text-sm mb-3'>The Depressurization Problem: Why Ventilation Alone Is Not Enough</h3>
            <p className='text-slate-700 text-sm leading-relaxed mb-3'>This is the most important concept in this guide that most homeowners never encounter.</p>
            <p className='text-slate-700 text-sm leading-relaxed mb-3'>When an exhaust fan removes air from the garage, it creates negative pressure inside the garage relative to the outside. The garage needs to draw replacement air from somewhere. In a well-sealed garage, that air comes through deliberate intake vents from outside. In a poorly sealed attached garage, some of that makeup air can come from the living space through gaps around the door, cracks in the shared wall, electrical outlet boxes, and pipe penetrations.</p>
            <p className='text-slate-700 text-sm leading-relaxed mb-3'>Now consider the home itself. Many appliances depressurize the living space: range hoods, bathroom exhaust fans, clothes dryers, and central vacuum systems all exhaust air from the home. When these appliances run, the home interior goes slightly negative relative to the garage. Under those conditions, air flows from the garage into the home through every gap in the shared wall, regardless of whether the garage exhaust fan is running.</p>
            <p className='text-slate-700 text-sm leading-relaxed mb-3'>The EPA Building America program specifically identifies this dynamic as one of the primary pathways for garage pollutants to enter living spaces. Their recommendation addresses both sides: exhaust the garage mechanically, and thoroughly air-seal the shared wall between the garage and living space. Caulk around outlet boxes, seal pipe penetrations with fire-rated foam, install weatherstripping on the door between the garage and house, and confirm that the door is self-closing and self-latching.</p>
            <p className='text-slate-700 text-sm leading-relaxed font-bold'>A garage exhaust fan without air sealing of the shared wall provides incomplete protection. Both are required.</p>
          </div>
        </section>

        {/* The Carbon Monoxide Danger */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>The Carbon Monoxide Danger: Numbers Every Garage Owner Needs to Know</h2>

          <div className='bg-red-50 border-l-4 border-red-600 p-5 rounded-r-lg mb-6'>
            <p className='text-slate-800 text-sm leading-relaxed font-medium'>CO poisoning in residential garages kills people every year. Understanding the specific concentrations and timeframes involved explains why the safety margins matter.</p>
          </div>

          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>CO concentration reference levels:</strong></p>

          <div className='overflow-x-auto mb-6'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-slate-900 text-white'>
                  <th className='p-2 text-left font-bold'>CO Level (PPM)</th>
                  <th className='p-2 text-left font-bold'>Effect</th>
                  <th className='p-2 text-left font-bold'>Source</th>
                </tr>
              </thead>
              <tbody className='text-slate-700'>
                <tr className='border-b border-slate-200'><td className='p-2'>9 ppm</td><td className='p-2'>ASHRAE recommended maximum for enclosed parking, 8-hour average</td><td className='p-2'>ASHRAE 62.1</td></tr>
                <tr className='border-b border-slate-200' style={{ backgroundColor: '#FAEEDA' }}><td className='p-2'>35 ppm</td><td className='p-2'>OSHA permissible exposure limit, 8-hour time-weighted average</td><td className='p-2'>OSHA</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>70 ppm</td><td className='p-2'>Headache, fatigue, nausea after 2 to 3 hours of exposure</td><td className='p-2'>CDC</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>150 to 200 ppm</td><td className='p-2'>Headache, dizziness, disorientation within 2 to 3 hours</td><td className='p-2'>CDC</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>400 ppm</td><td className='p-2'>Life-threatening after 3 hours</td><td className='p-2'>CDC</td></tr>
                <tr className='border-b border-slate-200' style={{ backgroundColor: '#FCEBEB' }}><td className='p-2'>800 ppm</td><td className='p-2'>Dizziness, nausea, convulsions within 45 minutes; death within 2 to 3 hours</td><td className='p-2'>CDC</td></tr>
                <tr className='border-b border-slate-200' style={{ backgroundColor: '#FCEBEB' }}><td className='p-2'>1,200 ppm</td><td className='p-2'>Immediate physiological effect; death within 1 hour</td><td className='p-2'>OSHA IDLH</td></tr>
                <tr style={{ backgroundColor: '#FCEBEB' }}><td className='p-2'>6,400 ppm</td><td className='p-2'>Death within 10 to 15 minutes</td><td className='p-2'>CDC</td></tr>
              </tbody>
            </table>
          </div>

          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>How quickly does a running vehicle raise CO levels?</strong></p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>A single modern gasoline vehicle running in a typical 2-car attached garage (576 square feet, 8-foot ceiling, 4,608 cubic feet of volume) can raise CO concentrations to 200 ppm in as little as 3 to 5 minutes of idling. Older vehicles, cold starts, and high-performance engines reach dangerous levels faster. The concentration continues to build as long as the engine runs.</p>

          {/* Crack the door open myth */}
          <div className='bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg mb-6'>
            <h3 className='font-bold text-slate-900 text-sm mb-2'>The &ldquo;crack the door open&rdquo; myth</h3>
            <p className='text-slate-700 text-sm leading-relaxed'>Many homeowners believe that opening the garage door 6 to 12 inches while warming up a vehicle provides sufficient ventilation. It does not. At a small opening, the natural airflow is insufficient to dilute CO production from a running engine at the rate needed to stay below dangerous concentrations. Tests consistently show that partially opening the garage door while a vehicle runs still allows CO to accumulate to dangerous levels within minutes. <strong>The garage door must be fully open &mdash; and even then, the vehicle should not run inside the garage for extended periods.</strong></p>
          </div>

          {/* The Rule - most prominent single line */}
          <div className='bg-red-100 border-2 border-red-600 rounded-lg p-6 mb-4'>
            <p className='text-red-900 text-lg font-extrabold text-center leading-snug'>Never run a vehicle engine inside a garage with the garage door closed, even for a few minutes. If warming up the vehicle is necessary in cold weather, back it out of the garage before starting the engine.</p>
          </div>
        </section>

        {/* CO Detector Placement */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>CO Detector Placement: The Rule Most Homeowners Get Wrong</h2>

          <div className='bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg mb-6'>
            <p className='text-slate-900 text-sm leading-relaxed font-bold mb-3'>CO detectors must be placed in the living space adjacent to the attached garage, not in the garage itself.</p>
            <p className='text-slate-700 text-sm leading-relaxed mb-3'>This is counterintuitive but important. CO detectors use electrochemical sensors that can be damaged or give inaccurate readings when exposed to the temperature extremes typical of an unheated garage &mdash; below 40&deg;F in winter or above 95&deg;F in summer. A detector placed in a garage may malfunction in the conditions it is most needed.</p>
            <p className='text-slate-700 text-sm leading-relaxed mb-3'>The CPSC recommends placing CO detectors on every level of the home and outside each sleeping area. For a home with an attached garage, this means at minimum a detector in the hallway or room immediately adjacent to the garage, at sleeping level (approximately 5 feet off the floor).</p>
            <p className='text-slate-700 text-sm leading-relaxed'>A detector in the garage is not a substitute for proper ventilation and air sealing. The detector alerts occupants after CO has already entered the living space. Ventilation and air sealing prevent it from entering in the first place.</p>
          </div>
        </section>

        {/* Ventilation Codes and Requirements */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Ventilation Codes and Requirements</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Understanding what codes require &mdash; and what they do not require &mdash; helps homeowners make informed decisions.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>International Residential Code (IRC):</strong> The IRC, which governs one- and two-family dwellings in most US jurisdictions, does not mandate mechanical ventilation for residential attached garages. It requires that openable area to the outdoors be not less than 4 percent of the garage floor area for natural ventilation purposes. Most residential garages meet this with the garage door and any windows. The IRC does not require a powered exhaust fan in a residential garage.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>International Mechanical Code (IMC):</strong> The IMC, which governs commercial and multi-family applications, requires mechanical ventilation for enclosed parking garages at 0.75 CFM per square foot of floor area, either continuously or automatically controlled by CO detectors. This standard is most relevant for commercial parking structures but provides a useful benchmark for residential applications.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>EPA recommendation for attached garages:</strong> The EPA&apos;s Building America program specifically recommends a minimum 70 CFM exhaust fan for attached residential garages, wired for continuous operation or activated by a motion detector that runs the fan for at least one hour after the garage is vacated. This is a recommendation rather than a code requirement but represents current best practice.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>The practical takeaway:</strong> Most residential garages are not required by code to have a mechanical exhaust fan. But code compliance and safety are not the same thing. The absence of a code requirement does not mean a garage is safe without mechanical ventilation &mdash; it means the code has not caught up to the safety evidence. A powered exhaust fan in any attached garage is a meaningful safety improvement.</p>
        </section>

        {/* How to Calculate the CFM You Need */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>How to Calculate the CFM You Need</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>CFM (cubic feet per minute) is the measure of airflow used to size ventilation equipment. The calculation is straightforward.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>The CFM formula:</strong></p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>CFM = (Garage Volume in cubic feet &times; Air Changes Per Hour) &divide; 60</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Garage Volume</strong> = Length &times; Width &times; Ceiling Height</p>

          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Air Changes Per Hour (ACH) by use:</strong></p>

          <div className='overflow-x-auto mb-6'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-slate-900 text-white'>
                  <th className='p-2 text-left font-bold'>Garage Use</th>
                  <th className='p-2 text-left font-bold'>Recommended ACH</th>
                  <th className='p-2 text-left font-bold'>Notes</th>
                </tr>
              </thead>
              <tbody className='text-slate-700'>
                <tr className='border-b border-slate-200'><td className='p-2'>General storage and parking</td><td className='p-2'>6 to 8 ACH</td><td className='p-2'>Baseline safety ventilation</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>Active workshop (woodworking, light metalwork)</td><td className='p-2'>10 to 15 ACH</td><td className='p-2'>Dust and light fumes</td></tr>
                <tr className='border-b border-slate-200' style={{ backgroundColor: '#FCEBEB' }}><td className='p-2'>Spray painting</td><td className='p-2'>15 to 20 ACH</td><td className='p-2'>Requires explosion-proof fan</td></tr>
                <tr><td className='p-2'>Welding</td><td className='p-2'>20+ ACH</td><td className='p-2'>Local exhaust ventilation recommended</td></tr>
              </tbody>
            </table>
          </div>

          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Worked example &mdash; standard 2-car attached garage:</strong></p>
          <ul className='list-disc pl-6 text-slate-700 text-sm leading-relaxed mb-4 space-y-1'>
            <li>Dimensions: 24 &times; 24 feet with 8-foot ceiling</li>
            <li>Volume: 24 &times; 24 &times; 8 = 4,608 cubic feet</li>
            <li>General parking use (6 ACH): (4,608 &times; 6) / 60 = 461 CFM</li>
            <li>Workshop use (10 ACH): (4,608 &times; 10) / 60 = 768 CFM</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>For a standard 2-car attached garage used for parking and occasional light work, a single exhaust fan rated at 500 to 600 CFM provides adequate general ventilation. For regular workshop use, two fans or one high-capacity fan providing 700 to 800 CFM is appropriate.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Sizing up:</strong> Always round up to the next available fan size. A fan running at 75 percent of its rated capacity lasts significantly longer and runs quieter than one running at full capacity continuously.</p>

          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Pre-calculated CFM reference by garage size and use:</strong></p>

          <div className='overflow-x-auto mb-4'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-slate-900 text-white'>
                  <th className='p-2 text-left font-bold'>Garage Size</th>
                  <th className='p-2 text-left font-bold'>Dimensions</th>
                  <th className='p-2 text-left font-bold'>Volume</th>
                  <th className='p-2 text-left font-bold'>General Use (6 ACH)</th>
                  <th className='p-2 text-left font-bold'>Workshop (10 ACH)</th>
                  <th className='p-2 text-left font-bold'>Spray Painting (15 ACH)</th>
                </tr>
              </thead>
              <tbody className='text-slate-700'>
                <tr className='border-b border-slate-200'><td className='p-2'>1-car standard</td><td className='p-2'>12 &times; 20 ft</td><td className='p-2'>1,920 cu ft</td><td className='p-2'>192 CFM</td><td className='p-2'>320 CFM</td><td className='p-2'>480 CFM</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>1-car full</td><td className='p-2'>14 &times; 24 ft</td><td className='p-2'>2,688 cu ft</td><td className='p-2'>269 CFM</td><td className='p-2'>448 CFM</td><td className='p-2'>672 CFM</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>2-car standard</td><td className='p-2'>20 &times; 20 ft</td><td className='p-2'>3,200 cu ft</td><td className='p-2'>320 CFM</td><td className='p-2'>533 CFM</td><td className='p-2'>800 CFM</td></tr>
                <tr className='border-b border-slate-200' style={{ backgroundColor: '#E6F7F5' }}><td className='p-2 font-semibold'>2-car full</td><td className='p-2'>24 &times; 24 ft</td><td className='p-2'>4,608 cu ft</td><td className='p-2'>461 CFM</td><td className='p-2'>768 CFM</td><td className='p-2'>1,152 CFM</td></tr>
                <tr className='border-b border-slate-200'><td className='p-2'>3-car standard</td><td className='p-2'>30 &times; 22 ft</td><td className='p-2'>5,280 cu ft</td><td className='p-2'>528 CFM</td><td className='p-2'>880 CFM</td><td className='p-2'>1,320 CFM</td></tr>
                <tr><td className='p-2'>3-car full</td><td className='p-2'>36 &times; 24 ft</td><td className='p-2'>6,912 cu ft</td><td className='p-2'>691 CFM</td><td className='p-2'>1,152 CFM</td><td className='p-2'>1,728 CFM</td></tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-500 text-xs mb-4'>All calculations assume 8-foot ceiling height. For 9-foot ceilings multiply by 1.125. For 10-foot ceilings multiply by 1.25. Spray painting column assumes explosion-proof fan required.</p>
        </section>

        {/* Section 1: Safety Ventilation for Carbon Monoxide */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Section 1: Safety Ventilation for Carbon Monoxide</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Safety ventilation is the minimum ventilation every attached garage should have regardless of how the garage is used.</p>

          <h3 className='font-semibold text-slate-800 text-sm mb-2'>The Exhaust Fan</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>A wall-mounted exhaust fan positioned high on the wall opposite the garage door opening is the standard solution for safety ventilation in a residential attached garage. Positioning the fan high removes the warm, contaminated air that rises after collecting near the floor (CO distributes evenly, but heat carries it upward). Mounting it on the wall opposite the door creates a cross-ventilation path when the garage door is open.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Fan placement:</strong> Mount the exhaust fan as high as possible on an exterior wall, ideally within 12 inches of the ceiling. Do not mount the exhaust fan on the shared wall between the garage and the living space &mdash; this would exhaust air toward the house rather than away from it.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Minimum specification:</strong> 70 CFM for a 1-car garage. 500 to 600 CFM for a standard 2-car garage. Fan must be rated for garage use (moisture and temperature resistant).</p>

          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>Wiring options:</strong></p>
          <ul className='list-disc pl-6 text-slate-700 text-sm leading-relaxed mb-4 space-y-1'>
            <li><strong>Switched:</strong> Manually operated. Simple to install but relies on the occupant to turn it on.</li>
            <li><strong>Motion-activated:</strong> Turns on when the garage is occupied and runs for a programmed period (typically 30 to 60 minutes) after the last motion is detected. The EPA specifically recommends this configuration for attached garages.</li>
            <li><strong>Continuously wired:</strong> Runs 24/7. Maximum protection at higher operating cost.</li>
          </ul>

          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Cost:</strong> Wall exhaust fans appropriate for garage ventilation range from $80 to $300 for the unit. Professional installation adds $150 to $400.</p>

          <h3 className='font-semibold text-slate-800 text-sm mb-2'>Passive Intake Vents</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>An exhaust fan removes air from the garage, creating negative pressure that must be equalized by drawing air in from somewhere. Without an intake path, the fan works against resistance and moves less air than its rated CFM.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>For attached garages, intake air should come from the outside &mdash; not from the living space. Install a louvered intake vent on an exterior wall near the floor (lower on the wall than the exhaust fan, to create a diagonal airflow path through the garage) or rely on the garage door and any windows for makeup air when the garage is in use.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Do not create intake openings in the shared wall between the garage and the living space. These would allow garage air to enter the house under pressure from the exhaust fan.</p>
        </section>

        {/* Section 2: Thermal Ventilation for Summer Heat */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Section 2: Thermal Ventilation for Summer Heat</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>An unventilated garage in a hot climate can reach 120 to 140&deg;F on a summer afternoon. This heat transfers into the adjacent living space through the shared wall, increases cooling loads, and makes the garage unusable for any activity. See the <Link href='/guides/garage-too-hot-in-summer' className='text-amber-700 underline hover:text-amber-900'>garage too hot in summer guide</Link> for the complete thermal comfort strategy.</p>

          <h3 className='font-semibold text-slate-800 text-sm mb-2'>The Insulation-First Rule</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Before investing in thermal ventilation equipment, evaluate the garage&apos;s insulation. An uninsulated garage door and uninsulated shared wall are the two largest sources of heat gain in most garages. Insulating the garage door ($200 to $600 for an insulated replacement door or $50 to $150 for a retrofit kit) and the shared wall (R-13 to R-21 depending on climate zone) reduces heat gain far more cost-effectively than any fan system.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>The test:</strong> In a hot climate on a summer afternoon, open the garage door fully for 20 minutes and note whether the temperature drops significantly. If it does, natural ventilation through the door is the primary heat pathway and insulation is the higher-priority improvement. If the temperature stays high despite the open door, radiant heat from the roof is the main source and attic ventilation or roof insulation needs to be addressed.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>See the <Link href='/guides/how-to-insulate-garage' className='text-amber-700 underline hover:text-amber-900'>how to insulate your garage guide</Link> for the complete insulation approach by component.</p>

          <h3 className='font-semibold text-slate-800 text-sm mb-2'>Ventilation Solutions for Summer Heat</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Gable vent fans:</strong> Installed in the gable end of a garage with an attic space, these fans pull hot air out of the attic above the garage rather than the garage itself, reducing radiant heat transfer downward. Effective and relatively inexpensive ($100 to $300 installed).</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Whole-garage exhaust fans:</strong> A high-CFM exhaust fan (800 to 1,200 CFM for a 2-car garage) running when the garage is in use flushes out accumulated hot air and pulls in cooler outside air. Most effective in climates where outside air temperature is below garage temperature, which is most of the day except in extreme climates.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Ceiling fans:</strong> A garage ceiling fan does not lower the air temperature but reduces the perceived temperature by 3 to 8 degrees through evaporative cooling. Cost-effective at $50 to $200 for a standard garage ceiling fan.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Mini-split system:</strong> For garages used as conditioned workshops, gyms, or hobby spaces, a mini-split provides genuine cooling as well as heating, maintaining a comfortable temperature regardless of outdoor conditions. Cost $1,500 to $4,000 installed. See the <Link href='/guides/garage-heater-guide' className='text-amber-700 underline hover:text-amber-900'>garage heater guide</Link> for the full HVAC options comparison.</p>
        </section>

        {/* Section 3: Workshop Ventilation */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Section 3: Workshop Ventilation</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>A garage used as a workshop generates contaminants that general parking ventilation cannot adequately address. The type of work determines the ventilation requirements.</p>

          <h3 className='font-semibold text-slate-800 text-sm mb-2'>Woodworking and General Fabrication</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Fine wood dust is both a respiratory hazard and a fire hazard at high concentrations. General dilution ventilation &mdash; exhausting garage air at 10 to 15 ACH &mdash; reduces airborne dust concentration for general woodworking. For serious woodworking, a dedicated dust collection system that captures dust at the source is significantly more effective than dilution ventilation alone and should be the primary dust control strategy, with general ventilation providing backup.</p>

          <h3 className='font-semibold text-slate-800 text-sm mb-2'>Paint and Solvent Work</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>This is the highest-risk workshop category and requires the most attention.</strong></p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Paint fumes, lacquer thinners, mineral spirits, and similar solvents produce vapors that are both toxic and flammable. Standard exhaust fans with steel motors can produce sparks from the motor brushes or electrical contacts that can ignite solvent vapors. For any work involving spray painting, lacquer application, or heavy solvent use, the exhaust fan must be explosion-proof (also called spark-proof or sparkless) &mdash; a fan design where the motor is sealed and all electrical contacts are isolated from the airstream.</p>

          {/* Spray painting warning - highest urgency */}
          <div className='border-2 rounded-lg p-5 mb-6' style={{ backgroundColor: '#FCEBEB', borderColor: '#A32D2D' }}>
            <p className='font-extrabold text-sm' style={{ color: '#A32D2D' }}>Never use a standard household or garage exhaust fan for spray painting. The risk of igniting solvent vapors with a standard fan motor is genuine and documented.</p>
          </div>

          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>ACH requirements for spray painting:</strong> 15 to 20 ACH minimum. For the standard 2-car garage example above (4,608 cubic feet), this requires 1,152 to 1,536 CFM of exhaust capacity from an explosion-proof fan.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Spray painting also requires makeup air.</strong> Exhausting at 1,500 CFM without adequate intake creates strong negative pressure that causes uneven spray patterns, pulls coating back toward the painter, and may cause door seals to fail. Provide a filtered intake equal to the exhaust volume.</p>

          <h3 className='font-semibold text-slate-800 text-sm mb-2'>Welding</h3>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Welding produces metal fumes, ozone, and nitrogen oxides &mdash; contaminants that are toxic at low concentrations and require direct capture ventilation rather than dilution alone. OSHA recommends local exhaust ventilation (a capture hood positioned close to the welding arc) as the primary control, supplemented by general dilution ventilation of 20+ ACH. A general garage exhaust fan is not an adequate substitute for local exhaust ventilation in a welding environment.</p>
        </section>

        {/* Ventilation Solutions Summary */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Ventilation Solutions Summary</h2>

          <div className='border border-slate-200 rounded-lg p-4'>
            <div className='overflow-x-auto'>
              <table className='w-full text-sm border-collapse'>
                <thead>
                  <tr className='bg-slate-900 text-white'>
                    <th className='p-2 text-left font-bold'>Solution</th>
                    <th className='p-2 text-left font-bold'>Best For</th>
                    <th className='p-2 text-left font-bold'>CFM Range</th>
                    <th className='p-2 text-left font-bold'>Cost Range</th>
                    <th className='p-2 text-left font-bold'>Notes</th>
                  </tr>
                </thead>
                <tbody className='text-slate-700'>
                  <tr className='border-b border-slate-200'><td className='p-2'>Passive louvered vents</td><td className='p-2'>Minimal natural ventilation</td><td className='p-2'>N/A</td><td className='p-2'>$30 to $100</td><td className='p-2'>No fan, limited effectiveness</td></tr>
                  <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Single wall exhaust fan</td><td className='p-2'>Safety ventilation, small garage</td><td className='p-2'>70 to 300 CFM</td><td className='p-2'>$80 to $400 installed</td><td className='p-2'>Minimum recommended for attached garage</td></tr>
                  <tr className='border-b border-slate-200'><td className='p-2'>Dual wall exhaust fans</td><td className='p-2'>2-car garage, general use</td><td className='p-2'>500 to 800 CFM</td><td className='p-2'>$300 to $800 installed</td><td className='p-2'>Standard recommendation</td></tr>
                  <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>High-CFM wall fan</td><td className='p-2'>Workshop, heavy use</td><td className='p-2'>800 to 1,500 CFM</td><td className='p-2'>$400 to $1,000 installed</td><td className='p-2'>For active workshop use</td></tr>
                  <tr className='border-b border-slate-200'><td className='p-2'>Explosion-proof exhaust fan</td><td className='p-2'>Spray painting, solvent work</td><td className='p-2'>1,000 to 2,000 CFM</td><td className='p-2'>$500 to $1,500 installed</td><td className='p-2'>Required for flammable vapor environments</td></tr>
                  <tr className='border-b border-slate-200 bg-slate-50'><td className='p-2'>Gable attic fan</td><td className='p-2'>Thermal ventilation, heat reduction</td><td className='p-2'>1,000 to 1,500 CFM</td><td className='p-2'>$200 to $600 installed</td><td className='p-2'>Reduces radiant heat from above</td></tr>
                  <tr className='border-b border-slate-200'><td className='p-2'>Ceiling fan</td><td className='p-2'>Comfort, perceived cooling</td><td className='p-2'>N/A</td><td className='p-2'>$80 to $300 installed</td><td className='p-2'>No air exchange, comfort only</td></tr>
                  <tr><td className='p-2'>Mini-split system</td><td className='p-2'>Year-round conditioned workshop</td><td className='p-2'>N/A (HVAC)</td><td className='p-2'>$1,500 to $4,000 installed</td><td className='p-2'>Both heating and cooling</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* EV Charging and Ventilation */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>EV Charging and Ventilation</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>A fully electric vehicle (BEV) produces no engine exhaust during normal operation, which eliminates the CO risk from starting and parking. However, EV ownership does not eliminate the need for garage ventilation entirely.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>A lithium-ion battery fire &mdash; caused by a manufacturing defect, physical damage, or thermal runaway during charging &mdash; produces toxic gases including hydrogen fluoride, carbon monoxide, and other combustion products. These fires are rare but severe, and they require adequate ventilation to manage the air quality hazard if they occur. The NFPA recommends garages with EV charging stations be provided with mechanical ventilation.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>For households with a Level 2 EV charger in an attached garage, maintaining adequate general ventilation (the same 500 to 600 CFM exhaust fan recommended for any attached garage) is appropriate. Do not store an EV in an attached garage without the fire separation requirements covered in the <Link href='/guides/complete-garage-guide' className='text-amber-700 underline hover:text-amber-900'>complete garage guide</Link> being met. See the <Link href='/guides/ev-charger-installation' className='text-amber-700 underline hover:text-amber-900'>EV charger installation guide</Link> for the complete EV charging setup in a residential garage.</p>
        </section>

        {/* New Homeowner Checklist */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>If You Just Bought a Home With an Attached Garage: Do These Five Things First</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>New homeowners with an attached garage often have no idea what ventilation infrastructure, if any, the previous owner put in place. These five checks take less than 30 minutes and establish your baseline.</p>

          <div className='bg-teal-50 border-l-4 border-teal-600 p-5 rounded-r-lg'>
            <ol className='list-none space-y-4'>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 w-7 h-7 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold'>1</span>
                <div><p className='text-slate-700 text-sm leading-relaxed'><strong>Check for an exhaust fan.</strong> Look on the exterior walls of the garage for a louvered fan housing or vent. If there is no exhaust fan, adding one is the highest-priority ventilation improvement you can make. A 500 to 600 CFM wall exhaust fan installed by an electrician costs $300 to $600 all-in.</p></div>
              </li>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 w-7 h-7 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold'>2</span>
                <div><p className='text-slate-700 text-sm leading-relaxed'><strong>Find your CO detector.</strong> It should be in the living space adjacent to the garage &mdash; in the hallway, room, or stairwell nearest the garage &mdash; at approximately 5 feet off the floor. If there is a CO detector inside the garage, it is in the wrong location. If there is no CO detector adjacent to the garage at all, install one before using the garage for any purpose.</p></div>
              </li>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 w-7 h-7 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold'>3</span>
                <div><p className='text-slate-700 text-sm leading-relaxed'><strong>Check the door between the garage and the house.</strong> Open it and let it go. It should close and latch by itself. If it stays open or does not latch, the self-closing mechanism needs adjustment or replacement. Check whether it is a solid-core door &mdash; tap it in the middle. Solid-core sounds dull and heavy. Hollow-core sounds hollow. If it is hollow-core, it does not meet fire separation requirements and should be replaced.</p></div>
              </li>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 w-7 h-7 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold'>4</span>
                <div><p className='text-slate-700 text-sm leading-relaxed'><strong>Check the shared wall for obvious gaps.</strong> Look at the wall between the garage and the living space from the garage side. Any open gaps around pipes, wires, or outlet boxes are pathways for CO and chemical vapors to enter the home. Seal them with fire-rated caulk or foam.</p></div>
              </li>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 w-7 h-7 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold'>5</span>
                <div><p className='text-slate-700 text-sm leading-relaxed'><strong>Note the surface drainage around the garage floor.</strong> If the garage floor has a drain, find out where it connects before washing down the floor or disposing of any liquids. See the <Link href='/guides/complete-garage-guide' className='text-amber-700 underline hover:text-amber-900'>complete garage guide</Link> for the floor drain discharge question every new garage owner should answer.</p></div>
              </li>
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Frequently Asked Questions</h2>
          <div className='space-y-4'>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Does a garage need ventilation?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Yes, particularly an attached garage. An attached garage concentrates three serious air quality hazards &mdash; carbon monoxide from vehicle exhaust, chemical vapors from stored materials, and workshop fumes &mdash; in a space that shares walls with the living area. The IRC does not mandate mechanical ventilation for residential attached garages, but the EPA recommends a minimum 70 CFM exhaust fan running continuously or activated by motion. Any garage used for workshop activities requires higher ventilation capacity. A garage with no ventilation is not code-violating in most jurisdictions, but it is a genuine safety risk.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>How many CFM do I need to ventilate my garage?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The formula is: CFM = (Garage volume in cubic feet &times; Air Changes Per Hour) &divide; 60. For general parking use, plan for 6 to 8 air changes per hour. For workshop use, plan for 10 to 15 ACH. For spray painting, plan for 15 to 20 ACH. A standard 2-car garage (576 square feet with 8-foot ceilings) has a volume of 4,608 cubic feet and needs approximately 460 to 615 CFM for general use and 770 to 1,150 CFM for active workshop activities.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Where should a CO detector be placed for an attached garage?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>In the living space adjacent to the garage, not in the garage itself. CO detectors use electrochemical sensors that can be damaged by the temperature extremes typical of an unheated garage. Place the detector at sleeping level (approximately 5 feet off the floor) in the nearest bedroom or hallway to the garage. The CPSC recommends CO detectors outside each sleeping area and on every level of the home. A detector in the garage is not a substitute for one in the adjacent living space.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Is it safe to run a car in the garage with the door open?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Only if the door is fully open and the vehicle is running briefly. Running a vehicle with the door open a few inches is not safe &mdash; the partial opening does not provide sufficient airflow to prevent CO from accumulating to dangerous levels. Even with the door fully open, a vehicle should not idle inside an attached garage for extended periods. The safest practice is to back the vehicle out before starting the engine for any extended warm-up.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>What kind of fan do I need for a garage workshop?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>For general woodworking and light fabrication, a standard wall exhaust fan rated for 500 to 800 CFM is appropriate. For spray painting, lacquer application, or any work with flammable solvents, the fan must be explosion-proof (also called spark-proof) &mdash; a standard fan with a steel motor can ignite solvent vapors. Never use a standard household exhaust fan when working with flammable materials. Explosion-proof fans are available from electrical supply houses and cost $200 to $600 for residential sizes.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>How do I ventilate a garage in summer heat?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Address insulation before fans. An uninsulated garage door and uninsulated shared wall contribute more heat than any fan can remove. After addressing insulation, a high-CFM exhaust fan (800 to 1,200 CFM for a 2-car garage) flushes out accumulated hot air effectively in most climates. A ceiling fan reduces perceived temperature by 3 to 8 degrees without lowering air temperature. A mini-split system provides genuine cooling for garages used as conditioned workshops. The combination of insulation and exhaust ventilation handles most residential situations without requiring active cooling.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Does building code require garage ventilation?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The IRC (International Residential Code) does not mandate mechanical ventilation for residential attached garages. It requires openable area to the outdoors equal to at least 4 percent of the garage floor area. The IMC (International Mechanical Code) requires 0.75 CFM per square foot of mechanical ventilation for commercial enclosed parking garages, continuously or CO-detector controlled. The EPA recommends but does not require a minimum 70 CFM exhaust fan for attached residential garages. Most jurisdictions follow IRC for residential garages, meaning a mechanical exhaust fan is not required but is strongly recommended for safety.</p>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <h3 className='font-semibold text-slate-800 text-sm mb-2'>Can I use a bathroom exhaust fan for my garage?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A standard bathroom exhaust fan (50 to 110 CFM) is not adequate for most garage ventilation needs and is not rated for the temperature extremes, dust, and moisture typical of garage environments. For a 1-car garage with minimal use, a bathroom fan provides marginally better ventilation than nothing. For any standard garage situation, use a fan rated specifically for garage or utility room use with appropriate CFM capacity for the space size and intended use.</p>
            </div>
          </div>
        </section>

        {/* Glossary */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Glossary</h2>
          <div className='space-y-4'>
            <div className='border-b border-slate-100 pb-4'>
              <h3 className='text-sm font-bold text-slate-900 mb-1'>CFM (Cubic Feet Per Minute)</h3>
              <p className='text-slate-700 text-xs'>The standard unit used to measure airflow volume in HVAC and ventilation applications. CFM describes how many cubic feet of air a fan moves through a space in one minute. For garage ventilation sizing, CFM is calculated by multiplying the garage volume (in cubic feet) by the required air changes per hour, then dividing by 60. A higher CFM rating means more air movement. Fan manufacturers rate CFM at a specific static pressure &mdash; real-world CFM decreases as ductwork resistance or distance increases, so always size up from the calculated minimum.</p>
            </div>
            <div className='border-b border-slate-100 pb-4'>
              <h3 className='text-sm font-bold text-slate-900 mb-1'>Air Changes Per Hour (ACH)</h3>
              <p className='text-slate-700 text-xs'>The number of times the total air volume of a space is replaced with fresh air in one hour. ACH is the ventilation intensity metric used to match fan capacity to the contaminant load of a specific garage use. General parking requires 6 to 8 ACH. Active woodworking requires 10 to 15 ACH. Spray painting requires 15 to 20 ACH. ACH is converted to CFM by multiplying the garage volume (in cubic feet) by the target ACH and dividing by 60.</p>
            </div>
            <div className='border-b border-slate-100 pb-4'>
              <h3 className='text-sm font-bold text-slate-900 mb-1'>Explosion-Proof Fan</h3>
              <p className='text-slate-700 text-xs'>A fan designed for use in environments where flammable vapors may be present. Unlike standard fans where the motor and electrical contacts are exposed to the airstream, explosion-proof fans enclose the motor in a sealed housing and isolate all electrical contacts from the surrounding air, eliminating ignition sources. Required for any garage ventilation application involving spray painting, lacquer, solvent cleaning, or other work with flammable vapors. Also called sparkless or spark-proof fans. Standard household or general-purpose exhaust fans should never be used in flammable vapor environments.</p>
            </div>
            <div className='pb-4'>
              <h3 className='text-sm font-bold text-slate-900 mb-1'>Dilution Ventilation</h3>
              <p className='text-slate-700 text-xs'>A ventilation strategy that reduces contaminant concentration by continuously supplying fresh air to dilute the contaminant rather than capturing it at the source. Dilution ventilation is effective for low-level, widely distributed contaminants like CO from an idling vehicle or general workshop dust. It is not effective for high-concentration point sources like welding fumes, where local exhaust ventilation (a capture hood close to the source) is the appropriate strategy. Most residential garage ventilation systems use dilution ventilation.</p>
            </div>
          </div>
        </section>

        {/* External Resource */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>External Resource</h2>
          <div className='bg-slate-50 border border-slate-200 rounded-lg p-4'>
            <p className='text-slate-700 text-sm leading-relaxed'>The EPA&apos;s Building America Solution Center at <a href='https://basc.pnnl.gov' target='_blank' rel='noopener noreferrer' className='text-amber-700 underline hover:text-amber-900'>basc.pnnl.gov</a> provides the most comprehensive government guidance on attached garage ventilation for residential applications, including specific recommendations for exhaust fan sizing, placement, wiring configuration, and air sealing requirements for the shared wall between the garage and living space. The Building America guidance is the basis for the 70 CFM minimum recommendation referenced throughout this guide and is freely available to homeowners and contractors.</p>
          </div>
        </section>

        {/* Related */}
        <section className='mb-8'>
          <h2 className='text-xl font-bold text-slate-900 mb-4'>Related Guides</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Link href='/guides/complete-garage-guide' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Guide</span>
              <p className='font-semibold text-slate-800 text-sm'>Complete Garage Guide 2026</p>
              <p className='text-slate-500 text-xs mt-1'>Every garage system covered in one place.</p>
            </Link>
            <Link href='/guides/garage-too-hot-in-summer' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Guide</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Too Hot in Summer</p>
              <p className='text-slate-500 text-xs mt-1'>Complete thermal comfort strategy for hot garages.</p>
            </Link>
            <Link href='/guides/how-to-insulate-garage' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Guide</span>
              <p className='font-semibold text-slate-800 text-sm'>How to Insulate Your Garage</p>
              <p className='text-slate-500 text-xs mt-1'>The complete insulation approach by component.</p>
            </Link>
            <Link href='/guides/garage-heater-guide' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Guide</span>
              <p className='font-semibold text-slate-800 text-sm'>Garage Heater Guide 2026</p>
              <p className='text-slate-500 text-xs mt-1'>Types, BTU sizing, costs, and installation.</p>
            </Link>
            <Link href='/guides/ev-charger-installation' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded mb-2'>Guide</span>
              <p className='font-semibold text-slate-800 text-sm'>EV Charger Installation Guide 2026</p>
              <p className='text-slate-500 text-xs mt-1'>Complete EV charging setup in a residential garage.</p>
            </Link>
            <Link href='/problems/water-leaking-into-garage' className='border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
              <span className='inline-block bg-slate-100 text-slate-600 text-xs font-semibold px-2 py-1 rounded mb-2'>Troubleshooting</span>
              <p className='font-semibold text-slate-800 text-sm'>Water Leaking Into Garage</p>
              <p className='text-slate-500 text-xs mt-1'>Diagnosis and solutions for garage water intrusion.</p>
            </Link>
          </div>
        </section>

      </div>

      <LeadForm />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </>
  )
}
