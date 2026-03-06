export interface Article {
  title: string
  description: string
  slug: string
  category: string
  readTime: string
  image?: string
}

export const articles: Article[] = [
  {
    title: 'The Complete Guide to Garage Organization: Systems, Storage, and Setup',
    description: 'Transform your garage from a cluttered mess into an organized, functional space. Complete guide to storage systems, shelving, ceiling racks, and layout planning.',
    slug: 'complete-garage-organization-guide',
    category: 'Guide',
    readTime: '25 min read',
    image: '/garage1.jpg',
  },
  {
    title: 'Garage Floor Coating Cost 2026: Epoxy, Polyurea, and More',
    description: 'Garage floor coating costs $3 to $12 per square foot installed. Compare epoxy, polyurea, polyaspartic, and DIY options with real pricing and pros and cons.',
    slug: 'cost-guides/garage-floor-coating-cost',
    category: 'Cost Guide',
    readTime: '20 min read',
    image: '/floorcoating.jpg',
  },
  {
    title: 'Best Garage Storage Systems 2026: Wall, Ceiling, and Cabinet Options',
    description: 'We reviewed the top garage storage systems including wall-mounted tracks, overhead ceiling racks, and modular cabinets. See which ones are worth the investment.',
    slug: 'reviews/best-garage-storage-systems',
    category: 'Review',
    readTime: '22 min read',
    image: '/storagesystems.jpg',
  },
  {
    title: 'How to Insulate Your Garage: Complete DIY Guide',
    description: 'Insulating your garage costs $1 to $3 per square foot for walls and $2 to $5 for the garage door. Learn which insulation type works best and how to install it yourself.',
    slug: 'guides/how-to-insulate-garage',
    category: 'Guide',
    readTime: '20 min read',
    image: '/insulation.jpg',
  },
  {
    title: 'Garage Door Opener Not Working? Troubleshooting Guide',
    description: 'Diagnose and fix common garage door opener problems including remote failures, sensor issues, grinding noises, and doors that reverse. Step-by-step troubleshooting.',
    slug: 'problems/garage-door-opener-not-working',
    category: 'Problem',
    readTime: '18 min read',
    image: '/dooropener.jpg',
  },
  {
    title: 'Garage Conversion Cost 2026: Turn Your Garage Into Living Space',
    description: 'A garage conversion costs $10,000 to $50,000 depending on scope. Complete cost breakdown for converting to a bedroom, office, gym, or ADU.',
    slug: 'cost-guides/garage-conversion-cost',
    category: 'Cost Guide',
    readTime: '22 min read',
    image: '/conversion.jpg',
  },
  {
    title: 'Best Garage Floor Epoxy Kits 2026: Tested and Ranked',
    description: 'We tested the top DIY garage floor epoxy kits. See which products deliver professional results, which ones peel, and what preparation actually matters.',
    slug: 'reviews/best-garage-floor-epoxy',
    category: 'Review',
    readTime: '20 min read',
    image: '/epoxy.jpg',
  },
  {
    title: 'Garage Heater Guide: Best Ways to Heat Your Garage',
    description: 'Compare forced air, infrared, mini-split, and portable garage heaters. Costs, BTU requirements by garage size, installation, and which type works best for your setup.',
    slug: 'guides/garage-heater-guide',
    category: 'Guide',
    readTime: '22 min read',
    image: '/heater.jpg',
  },
  {
    title: 'Water Leaking Into Garage: Causes, Fixes, and Prevention',
    description: 'Water in your garage can come from the door seal, floor cracks, walls, or poor drainage. Learn the 6 most common causes and how to fix each one permanently.',
    slug: 'problems/water-leaking-into-garage',
    category: 'Problem',
    readTime: '18 min read',
    image: '/waterleak.jpg',
  },
  {
    title: 'Attached vs Detached Garage: Cost, Pros, Cons, and Resale Value',
    description: 'An attached garage costs $20,000 to $40,000 to build. A detached garage costs $25,000 to $55,000. Complete comparison of costs, convenience, safety, and home value.',
    slug: 'comparisons/attached-vs-detached-garage',
    category: 'Comparison',
    readTime: '20 min read',
    image: '/attachedvsdetached.jpg',
  },
  {
    title: 'Best Garage Lighting 2026: LED Options for Every Budget',
    description: 'The best garage lighting delivers 50+ lumens per square foot. We tested LED shop lights, wraparound fixtures, and panel lights to find the best options.',
    slug: 'reviews/best-garage-lighting',
    category: 'Review',
    readTime: '18 min read',
    image: '/lighting.jpg',
  },
  {
    title: 'Garage Door Replacement Cost 2026: Complete Price Guide',
    description: 'A new garage door costs $800 to $4,000 installed. Complete pricing by material, style, size, and opener type plus how to save money on installation.',
    slug: 'cost-guides/garage-door-replacement-cost',
    category: 'Cost Guide',
    readTime: '20 min read',
    image: '/garagedoor.jpg',
  },
]

export function searchArticles(query: string): Article[] {
  if (!query.trim()) return []
  const terms = query.toLowerCase().split(/\s+/)
  return articles.filter((article) => {
    const searchText = `${article.title} ${article.description} ${article.category}`.toLowerCase()
    return terms.every((term) => searchText.includes(term))
  })
}
