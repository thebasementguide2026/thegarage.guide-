'use client'
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { searchArticles, type Article } from '@/lib/articles'

export default function SearchBar({ onClose }: { onClose?: () => void }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Article[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (query.length >= 2) {
      setResults(searchArticles(query).slice(0, 6))
      setIsOpen(true)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }, [query])

  useEffect(() => { inputRef.current?.focus() }, [])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (query.trim()) {
      setIsOpen(false)
      onClose?.()
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  const getArticleHref = (slug: string) =>
    slug.startsWith('problems/') || slug.startsWith('cost-guides/') || slug.startsWith('reviews/') || slug.startsWith('comparisons/') || slug.startsWith('guides/') ? `/${slug}` : `/articles/${slug}`

  return (
    <div ref={wrapperRef} className="relative w-full max-w-xl mx-auto">
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search guides..." className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:border-[#2B3A4A] focus:ring-1 focus:ring-[#2B3A4A] outline-none transition-colors" />
      </form>
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-100 z-50 overflow-hidden">
          {results.map((article) => (
            <Link key={article.slug} href={getArticleHref(article.slug)} onClick={() => { setIsOpen(false); onClose?.() }} className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors">
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-0.5">
                <span>{article.category}</span>
                <span>{article.readTime}</span>
              </div>
              <div className="text-sm font-medium text-gray-800">{article.title}</div>
            </Link>
          ))}
        </div>
      )}
      {isOpen && query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border p-4 text-center text-sm text-gray-500">
          No guides found for &quot;{query}&quot;
        </div>
      )}
    </div>
  )
}
