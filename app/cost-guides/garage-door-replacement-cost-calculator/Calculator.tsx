'use client'

import { useEffect, useRef, useState } from 'react'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

type DoorType = 'standard_steel' | 'insulated_steel' | 'double_insulated' | 'carriage_house' | 'wood_designer' | 'aluminum_glass'
type DoorSize = 'single_8x7' | 'single_9x7' | 'double_16x7' | 'double_18x7' | 'tall_8x8' | 'tall_16x8'
type Insulation = 'none' | 'standard' | 'premium'
type Windows = 'none' | 'single_row' | 'decorative'
type Opener = 'keep_existing' | 'standard_chain' | 'belt_drive' | 'smart_wifi'
type Complexity = 'standard' | 'minor_framing' | 'major_framing'
type Region = 'low' | 'mid' | 'high'
type HaulAway = 'yes' | 'no'

interface Inputs {
  doorType: DoorType | ''
  doorSize: DoorSize | ''
  insulation: Insulation | ''
  windows: Windows | ''
  opener: Opener | ''
  complexity: Complexity | ''
  region: Region | ''
  haulAway: HaulAway | ''
}

interface Result {
  low: number
  high: number
  mid: number
  inputs: Inputs
}

const DOOR_BASE: Record<DoorType, [number, number]> = {
  standard_steel: [800, 1700],
  insulated_steel: [1200, 2400],
  double_insulated: [1800, 3500],
  carriage_house: [2000, 4500],
  wood_designer: [3000, 6000],
  aluminum_glass: [2800, 5500],
}

const SIZE_MULT: Record<DoorSize, number> = {
  single_8x7: 1.0,
  single_9x7: 1.05,
  double_16x7: 1.55,
  double_18x7: 1.7,
  tall_8x8: 1.15,
  tall_16x8: 1.7,
}

const INSULATION_ADD: Record<Insulation, [number, number]> = {
  none: [0, 0],
  standard: [80, 220],
  premium: [200, 450],
}

const WINDOWS_ADD: Record<Windows, [number, number]> = {
  none: [0, 0],
  single_row: [120, 280],
  decorative: [250, 600],
}

const OPENER_ADD: Record<Opener, [number, number]> = {
  keep_existing: [0, 0],
  standard_chain: [218, 380],
  belt_drive: [320, 520],
  smart_wifi: [420, 706],
}

const COMPLEXITY_MULT: Record<Complexity, number> = {
  standard: 1.0,
  minor_framing: 1.08,
  major_framing: 1.2,
}

const REGION_MULT: Record<Region, number> = {
  low: 0.9,
  mid: 1.0,
  high: 1.15,
}

const HAUL_ADD: Record<HaulAway, [number, number]> = {
  yes: [50, 150],
  no: [0, 0],
}

function track(event: string, params: Record<string, unknown>) {
  try {
    if (typeof window === 'undefined') return
    if (typeof window.gtag === 'function') {
      window.gtag('event', event, params)
    }
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event, ...params })
    }
  } catch {}
}

function fmt(n: number) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

export default function Calculator() {
  const [inputs, setInputs] = useState<Inputs>({
    doorType: '',
    doorSize: '',
    insulation: '',
    windows: '',
    opener: '',
    complexity: '',
    region: '',
    haulAway: '',
  })
  const [result, setResult] = useState<Result | null>(null)
  const [error, setError] = useState('')
  const [started, setStarted] = useState(false)
  const completedRef = useRef<string>('')
  const viewedRef = useRef(false)

  useEffect(() => {
    if (viewedRef.current) return
    viewedRef.current = true
    track('calculator_view', {
      calculator_name: 'garage_door_replacement_cost',
      page_location: typeof window !== 'undefined' ? window.location.href : '',
    })
  }, [])

  const update = <K extends keyof Inputs>(key: K, value: Inputs[K]) => {
    setInputs((prev) => ({ ...prev, [key]: value }))
    if (!started) {
      setStarted(true)
      track('calculator_start', {
        calculator_name: 'garage_door_replacement_cost',
        first_field: key,
      })
    }
  }

  useEffect(() => {
    if (!result) return
    const key = JSON.stringify(result.inputs) + ':' + result.low + ':' + result.high
    if (completedRef.current === key) return
    completedRef.current = key
    track('calculator_complete', {
      calculator_name: 'garage_door_replacement_cost',
      estimate_low: result.low,
      estimate_high: result.high,
      currency: 'USD',
    })
  }, [result])

  const calculate = () => {
    const allFilled = Object.values(inputs).every((v) => v !== '')
    if (!allFilled) {
      setError('Please complete every field to see your estimate.')
      track('calculator_calculate', {
        calculator_name: 'garage_door_replacement_cost',
        status: 'invalid',
      })
      return
    }
    setError('')

    const dt = inputs.doorType as DoorType
    const ds = inputs.doorSize as DoorSize
    const ins = inputs.insulation as Insulation
    const win = inputs.windows as Windows
    const op = inputs.opener as Opener
    const cx = inputs.complexity as Complexity
    const reg = inputs.region as Region
    const haul = inputs.haulAway as HaulAway

    const [baseLow, baseHigh] = DOOR_BASE[dt]
    const sizeM = SIZE_MULT[ds]
    const cxM = COMPLEXITY_MULT[cx]
    const regM = REGION_MULT[reg]

    // Labor scales with size + complexity + region
    const laborLow = 350 * sizeM * cxM * regM
    const laborHigh = 750 * sizeM * cxM * regM

    let low = baseLow * sizeM * regM + laborLow
    let high = baseHigh * sizeM * cxM * regM + laborHigh

    const [insL, insH] = INSULATION_ADD[ins]
    const [winL, winH] = WINDOWS_ADD[win]
    const [opL, opH] = OPENER_ADD[op]
    const [haulL, haulH] = HAUL_ADD[haul]

    low += insL + winL + opL + haulL
    high += insH + winH + opH + haulH

    low = Math.round(low / 25) * 25
    high = Math.round(high / 25) * 25
    const mid = Math.round(((low + high) / 2) / 25) * 25

    track('calculator_calculate', {
      calculator_name: 'garage_door_replacement_cost',
      status: 'success',
      door_type: dt,
      door_size: ds,
      insulation: ins,
      windows: win,
      opener: op,
      complexity: cx,
      region: reg,
      haul_away: haul,
      estimate_low: low,
      estimate_high: high,
      currency: 'USD',
    })

    setResult({ low, high, mid, inputs: { ...inputs } })

    setTimeout(() => {
      const el = document.getElementById('calculator-result')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  const reset = () => {
    setInputs({
      doorType: '',
      doorSize: '',
      insulation: '',
      windows: '',
      opener: '',
      complexity: '',
      region: '',
      haulAway: '',
    })
    setResult(null)
    setError('')
    setStarted(false)
    completedRef.current = ''
    track('calculator_reset', {
      calculator_name: 'garage_door_replacement_cost',
    })
  }

  return (
    <div className='bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden'>
      <div className='bg-slate-900 px-6 py-5'>
        <div className='flex items-center space-x-3 mb-2'>
          <div className='w-10 h-px bg-amber-500'></div>
          <span className='text-amber-500 font-bold tracking-[0.3em] text-xs uppercase'>Estimator</span>
        </div>
        <h2 className='text-2xl font-black text-white tracking-tight'>Garage Door Replacement Cost Calculator</h2>
        <p className='text-slate-300 text-sm mt-1'>Get a realistic 2026 installed price range based on your door, opener, and region.</p>
      </div>
      <div className='p-6 grid md:grid-cols-2 gap-5'>
        <div>
          <label htmlFor='doorType' className='block text-xs font-bold tracking-wider text-amber-700 uppercase mb-1'>Door Type</label>
          <select id='doorType' value={inputs.doorType} onChange={(e) => update('doorType', e.target.value as DoorType)} className='w-full px-3 py-2.5 border border-slate-300 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent text-sm'>
            <option value=''>Select door type</option>
            <option value='standard_steel'>Standard steel sectional</option>
            <option value='insulated_steel'>Insulated steel</option>
            <option value='double_insulated'>Double-layer insulated steel</option>
            <option value='carriage_house'>Carriage-house style</option>
            <option value='wood_designer'>Wood / designer</option>
            <option value='aluminum_glass'>Aluminum and glass (modern)</option>
          </select>
        </div>
        <div>
          <label htmlFor='doorSize' className='block text-xs font-bold tracking-wider text-amber-700 uppercase mb-1'>Door Size</label>
          <select id='doorSize' value={inputs.doorSize} onChange={(e) => update('doorSize', e.target.value as DoorSize)} className='w-full px-3 py-2.5 border border-slate-300 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent text-sm'>
            <option value=''>Select size</option>
            <option value='single_8x7'>Single car &mdash; 8 ft x 7 ft</option>
            <option value='single_9x7'>Single car wide &mdash; 9 ft x 7 ft</option>
            <option value='tall_8x8'>Single tall &mdash; 8 ft x 8 ft</option>
            <option value='double_16x7'>Double car &mdash; 16 ft x 7 ft</option>
            <option value='double_18x7'>Double extra-wide &mdash; 18 ft x 7 ft</option>
            <option value='tall_16x8'>Double tall &mdash; 16 ft x 8 ft</option>
          </select>
        </div>
        <div>
          <label htmlFor='insulation' className='block text-xs font-bold tracking-wider text-amber-700 uppercase mb-1'>Insulation Upgrade</label>
          <select id='insulation' value={inputs.insulation} onChange={(e) => update('insulation', e.target.value as Insulation)} className='w-full px-3 py-2.5 border border-slate-300 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent text-sm'>
            <option value=''>Select insulation</option>
            <option value='none'>None / built into door</option>
            <option value='standard'>Standard polystyrene</option>
            <option value='premium'>Premium polyurethane (R-16+)</option>
          </select>
        </div>
        <div>
          <label htmlFor='windows' className='block text-xs font-bold tracking-wider text-amber-700 uppercase mb-1'>Windows</label>
          <select id='windows' value={inputs.windows} onChange={(e) => update('windows', e.target.value as Windows)} className='w-full px-3 py-2.5 border border-slate-300 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent text-sm'>
            <option value=''>Select windows</option>
            <option value='none'>No windows</option>
            <option value='single_row'>Single row of windows</option>
            <option value='decorative'>Decorative / multi-row</option>
          </select>
        </div>
        <div>
          <label htmlFor='opener' className='block text-xs font-bold tracking-wider text-amber-700 uppercase mb-1'>Opener</label>
          <select id='opener' value={inputs.opener} onChange={(e) => update('opener', e.target.value as Opener)} className='w-full px-3 py-2.5 border border-slate-300 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent text-sm'>
            <option value=''>Select opener</option>
            <option value='keep_existing'>Keep existing opener</option>
            <option value='standard_chain'>New standard chain-drive</option>
            <option value='belt_drive'>New belt-drive (quiet)</option>
            <option value='smart_wifi'>New smart Wi-Fi opener</option>
          </select>
        </div>
        <div>
          <label htmlFor='complexity' className='block text-xs font-bold tracking-wider text-amber-700 uppercase mb-1'>Install Complexity</label>
          <select id='complexity' value={inputs.complexity} onChange={(e) => update('complexity', e.target.value as Complexity)} className='w-full px-3 py-2.5 border border-slate-300 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent text-sm'>
            <option value=''>Select complexity</option>
            <option value='standard'>Standard like-for-like swap</option>
            <option value='minor_framing'>Minor framing or track work</option>
            <option value='major_framing'>Major framing or rough-opening change</option>
          </select>
        </div>
        <div>
          <label htmlFor='region' className='block text-xs font-bold tracking-wider text-amber-700 uppercase mb-1'>Region / Cost of Living</label>
          <select id='region' value={inputs.region} onChange={(e) => update('region', e.target.value as Region)} className='w-full px-3 py-2.5 border border-slate-300 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent text-sm'>
            <option value=''>Select region</option>
            <option value='low'>Lower-cost (rural, South, Midwest)</option>
            <option value='mid'>Average metro</option>
            <option value='high'>High-cost (Northeast, West Coast, HCOL)</option>
          </select>
        </div>
        <div>
          <label htmlFor='haulAway' className='block text-xs font-bold tracking-wider text-amber-700 uppercase mb-1'>Haul Away Old Door</label>
          <select id='haulAway' value={inputs.haulAway} onChange={(e) => update('haulAway', e.target.value as HaulAway)} className='w-full px-3 py-2.5 border border-slate-300 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent text-sm'>
            <option value=''>Select option</option>
            <option value='yes'>Yes, haul away and dispose</option>
            <option value='no'>No, I will dispose myself</option>
          </select>
        </div>
      </div>

      <div className='px-6 pb-6'>
        {error && (
          <p className='text-sm text-red-600 mb-3'>{error}</p>
        )}
        <div className='flex flex-col sm:flex-row gap-3'>
          <button type='button' onClick={calculate} className='flex-1 bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 rounded-lg transition-colors text-sm tracking-wide uppercase'>
            Calculate My Estimate
          </button>
          <button type='button' onClick={reset} className='flex-1 sm:flex-none px-6 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 rounded-lg transition-colors text-sm'>
            Reset
          </button>
        </div>
        <p className='text-[11px] text-slate-500 mt-3 leading-relaxed'>Estimates are educational ranges based on 2026 national pricing data. Actual quotes from local installers vary by manufacturer, hardware grade, and site conditions.</p>
      </div>

      {result && (
        <div id='calculator-result' className='border-t border-slate-200 bg-amber-50 px-6 py-6'>
          <div className='flex items-center space-x-3 mb-3'>
            <span className='text-amber-700 font-bold tracking-[0.3em] text-xs uppercase'>Your Estimate</span>
            <div className='flex-1 h-px bg-amber-200'></div>
          </div>
          <p className='text-3xl md:text-4xl font-black text-slate-900 tracking-tight'>{fmt(result.low)} &ndash; {fmt(result.high)}</p>
          <p className='text-sm text-slate-700 mt-2'>Most homeowners in this configuration land near <strong>{fmt(result.mid)}</strong> installed.</p>
          <ul className='mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-1 text-xs text-slate-700'>
            <li><strong>Door:</strong> {labelDoorType(result.inputs.doorType as DoorType)}</li>
            <li><strong>Size:</strong> {labelDoorSize(result.inputs.doorSize as DoorSize)}</li>
            <li><strong>Insulation:</strong> {labelInsulation(result.inputs.insulation as Insulation)}</li>
            <li><strong>Windows:</strong> {labelWindows(result.inputs.windows as Windows)}</li>
            <li><strong>Opener:</strong> {labelOpener(result.inputs.opener as Opener)}</li>
            <li><strong>Complexity:</strong> {labelComplexity(result.inputs.complexity as Complexity)}</li>
            <li><strong>Region:</strong> {labelRegion(result.inputs.region as Region)}</li>
            <li><strong>Haul-away:</strong> {result.inputs.haulAway === 'yes' ? 'Yes' : 'No'}</li>
          </ul>
        </div>
      )}
    </div>
  )
}

function labelDoorType(v: DoorType): string {
  const m: Record<DoorType, string> = {
    standard_steel: 'Standard steel sectional',
    insulated_steel: 'Insulated steel',
    double_insulated: 'Double-layer insulated steel',
    carriage_house: 'Carriage-house',
    wood_designer: 'Wood / designer',
    aluminum_glass: 'Aluminum and glass',
  }
  return m[v]
}
function labelDoorSize(v: DoorSize): string {
  const m: Record<DoorSize, string> = {
    single_8x7: '8 ft x 7 ft (single)',
    single_9x7: '9 ft x 7 ft (single wide)',
    double_16x7: '16 ft x 7 ft (double)',
    double_18x7: '18 ft x 7 ft (double wide)',
    tall_8x8: '8 ft x 8 ft (single tall)',
    tall_16x8: '16 ft x 8 ft (double tall)',
  }
  return m[v]
}
function labelInsulation(v: Insulation): string {
  return ({ none: 'None', standard: 'Standard polystyrene', premium: 'Premium polyurethane' } as Record<Insulation, string>)[v]
}
function labelWindows(v: Windows): string {
  return ({ none: 'None', single_row: 'Single row', decorative: 'Decorative / multi-row' } as Record<Windows, string>)[v]
}
function labelOpener(v: Opener): string {
  return ({ keep_existing: 'Keep existing', standard_chain: 'Chain-drive', belt_drive: 'Belt-drive', smart_wifi: 'Smart Wi-Fi' } as Record<Opener, string>)[v]
}
function labelComplexity(v: Complexity): string {
  return ({ standard: 'Standard swap', minor_framing: 'Minor framing', major_framing: 'Major framing' } as Record<Complexity, string>)[v]
}
function labelRegion(v: Region): string {
  return ({ low: 'Lower-cost', mid: 'Average metro', high: 'High-cost' } as Record<Region, string>)[v]
}
