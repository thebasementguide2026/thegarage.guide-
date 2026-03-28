import Link from 'next/link'
import Image from 'next/image'
import { articles } from '@/lib/articles'
import QuoteForm from '@/components/QuoteForm'

const categories = [
  { label: '\ud83d\udee0\ufe0f Organization', href: '/guides/complete-garage-organization-guide' },
  { label: '\ud83d\udcb0 Cost Guides', href: '/cost-guides' },
  { label: '\u2b50 Reviews', href: '/reviews' },
  { label: '\u26a0\ufe0f Problems', href: '/problems' },
  { label: '\ud83c\udfe0 Conversions', href: '/cost-guides/garage-conversion-cost' },
  { label: '\ud83d\udcd6 Start Here', href: '/articles/complete-garage-organization-guide' },
]

const getArticleHref = (slug: string) =>
  slug.startsWith('problems/') ||
  slug.startsWith('cost-guides/') ||
  slug.startsWith('reviews/') ||
  slug.startsWith('comparisons/') ||
  slug.startsWith('guides/') ? `/${slug}` :
  `/articles/${slug}`

export default function HomePage() {
  const featured = articles.find((a) => a.slug === 'guides/complete-garage-guide')
  const sidebarArticles = articles.filter((a) => a.slug !== 'guides/complete-garage-guide')

  return (
    <>
      {/* Publisher-style Hero: Featured + Sidebar */}
      <section className="container-custom py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main featured story */}
          {featured && (
            <Link href={getArticleHref(featured.slug)} className="lg:col-span-2 group relative rounded-xl overflow-hidden block" style={{ minHeight: '400px' }}>
              {featured.image && (
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs font-bold text-white/80 tracking-wider">{featured.category.toUpperCase()}</span>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mt-1 leading-tight">{featured.title}</h2>
                <p className="text-white/80 mt-2 text-sm line-clamp-2">{featured.description}</p>
              </div>
            </Link>
          )}
          {/* Sidebar stories */}
          <div className="flex flex-col justify-between h-full">
            {sidebarArticles.slice(0, 5).map((article) => (
              <Link key={article.slug} href={getArticleHref(article.slug)} className="flex gap-3 group">
                {article.image && (
                  <div className="w-20 h-16 relative rounded-lg overflow-hidden flex-shrink-0">
                    <Image src={article.image} alt={article.title} fill className="object-cover" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold text-[#C45B3B] tracking-wider">{article.category}</span>
                  <h3 className="text-sm font-semibold text-gray-800 group-hover:text-[#2B3A4A] leading-tight line-clamp-2">{article.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation Bar */}
      <section className="container-custom py-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Link key={cat.href} href={cat.href} className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-[#2B3A4A] hover:text-[#2B3A4A] transition-colors">
              {cat.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Guides */}
      <section className="container-custom py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Popular Guides</h2>
          <Link href="/guides" className="text-sm font-medium text-[#C45B3B] hover:underline">View All &rarr;</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link key={article.slug} href={getArticleHref(article.slug)} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              {article.image && (
                <div className="relative h-48 overflow-hidden">
                  <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 px-2 py-1 rounded text-[10px] font-bold tracking-wider bg-white/90 text-gray-700">{article.category.toUpperCase()}</span>
                </div>
              )}
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 group-hover:text-[#2B3A4A] leading-snug">{article.title}</h3>
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">{article.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About + Quote Form */}
      <section className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About The Garage Guide</h2>
            <p className="text-gray-600 leading-relaxed">Written by homeowners who have tackled every garage project imaginable. No fluff, no contractor sales pitches &mdash; just honest, detailed guides to help you organize, improve, and maintain your garage.</p>
            <Link href="/about" className="btn-outline mt-6">Learn more about us &rarr;</Link>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  )
}
