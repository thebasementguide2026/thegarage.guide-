// Maps article slugs to relevant Networx task IDs for garage services

export const FALLBACK_TASK_IDS = [86, 87, 77, 144, 226]

const TASK_ID_MAP: Record<string, number[]> = {
  // Guides
  'complete-garage-organization-guide': [56, 38, 40, 226, 144],
  'how-to-insulate-garage': [258, 341, 339, 95, 144],
  'garage-heater-guide': [258, 178, 177, 144, 226],
  'ev-charger-installation': [583, 178, 195, 177, 188],
  'garage-too-hot-in-summer': [258, 341, 339, 95, 144],

  // Cost Guides
  'garage-floor-coating-cost': [77, 74, 75, 82, 144],
  'garage-door-replacement-cost': [86, 87, 88, 89, 94],
  'epoxy-garage-floor-cost': [77, 74, 75, 82, 144],
  'garage-conversion-cost': [144, 269, 178, 221, 154],

  // Problems
  'garage-door-opener-not-working': [89, 88, 87, 90, 94],
  'water-leaking-into-garage': [75, 77, 144, 226, 587],
  'garage-door-wont-close': [87, 89, 90, 94, 91],
  'cracked-garage-floor': [75, 77, 74, 82, 144],

  // Reviews
  'best-garage-storage-systems': [38, 40, 56, 226, 144],
  'best-garage-floor-epoxy': [77, 74, 75, 82, 144],
  'best-garage-lighting': [188, 177, 178, 226, 144],
  'best-garage-door-openers': [88, 89, 86, 87, 90],
  'best-garage-heaters': [258, 178, 177, 144, 226],
  'best-garage-cabinets': [38, 40, 56, 226, 144],
  'best-garage-workbenches': [226, 38, 40, 56, 144],

  // Comparisons
  'attached-vs-detached-garage': [269, 144, 86, 154, 226],
}

export function getTaskIdsForArticle(slug: string): number[] {
  // Try exact match first
  if (TASK_ID_MAP[slug]) return TASK_ID_MAP[slug]

  // Try matching just the last segment of the slug
  const lastSegment = slug.split('/').pop() || slug
  if (TASK_ID_MAP[lastSegment]) return TASK_ID_MAP[lastSegment]

  // Try partial match
  for (const [key, ids] of Object.entries(TASK_ID_MAP)) {
    if (slug.includes(key) || key.includes(slug)) return ids
  }

  return FALLBACK_TASK_IDS
}