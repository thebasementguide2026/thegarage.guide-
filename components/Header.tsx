'use client'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import SearchBar from '@/components/SearchBar'

const navItems = [
  {
    label: 'Guides',
    href: '/guides',
    dropdown: [
      { label: 'Garage Organization', href: '/articles/complete-garage-organization-guide' },
      { label: 'Insulation Guide', href: '/guides/how-to-insulate-garage' },
      { label: 'Heater Guide', href: '/guides/garage-heater-guide' },
    ],
  },
  { label: 'Cost Guides', href: '/cost-guides', dropdown: null },
  {
    label: 'Reviews',
    href: '/reviews',
    dropdown: [
      { label: 'Storage Systems', href: '/reviews/best-garage-storage-systems' },
      { label: 'Floor Epoxy', href: '/reviews/best-garage-floor-epoxy' },
      { label: 'Lighting', href: '/reviews/best-garage-lighting' },
    ],
  },
  {
    label: 'Problems',
    href: '/problems',
    dropdown: [
      { label: 'Door Opener Issues', href: '/problems/garage-door-opener-not-working' },
      { label: 'Water Leaks', href: '/problems/water-leaking-into-garage' },
    ],
  },
  { label: 'Comparisons', href: '/comparisons', dropdown: null },
  { label: 'About', href: '/about', dropdown: null },
]

function GarageLogo({ color = '#2B3A4A' }: { color?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 21V10L12 3L21 10V21H15V14H9V21H3Z" fill={color} opacity="0.15" />
      <path d="M3 21V10L12 3L21 10V21H15V14H9V21H3Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 21V14H15V21" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container-custom flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-[#2B3A4A]">
          <GarageLogo />
          The <span className="text-[#C45B3B]">Garage</span> Guide
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
          {navItems.map((item) => (
            <div key={item.label} className="relative">
              {item.dropdown ? (
                <button
                  onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                  className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#2B3A4A] transition-colors rounded-lg hover:bg-gray-50 flex items-center gap-1"
                  aria-expanded={activeDropdown === item.label}
                >
                  {item.label}
                  <svg className={`w-3.5 h-3.5 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
              ) : (
                <Link href={item.href} className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#2B3A4A] transition-colors rounded-lg hover:bg-gray-50">{item.label}</Link>
              )}
              {item.dropdown && activeDropdown === item.label && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border py-1 z-50">
                  {item.dropdown.map((sub) => (
                    <Link key={sub.href} href={sub.href} onClick={() => setActiveDropdown(null)} className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#2B3A4A]">{sub.label}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right side: Search + CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button onClick={() => setSearchOpen(!searchOpen)} className="flex items-center gap-1.5 text-gray-500 hover:text-[#2B3A4A] transition-colors p-2 rounded-lg hover:bg-gray-50" aria-label="Search">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            Search
          </button>
          <Link href="/get-quote" className="btn-primary text-sm">Get Free Quotes</Link>
        </div>

        {/* Mobile hamburger */}
        <button className="lg:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* Search bar dropdown */}
      {searchOpen && (
        <div className="border-t py-3 px-4">
          <SearchBar onClose={() => setSearchOpen(false)} />
        </div>
      )}

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t py-4 px-4 space-y-1">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link href={item.href} className="block py-2 text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
              {item.dropdown && (
                <div className="pl-4 space-y-1">
                  {item.dropdown.map((sub) => (
                    <Link key={sub.href} href={sub.href} className="block py-1.5 text-sm text-gray-500" onClick={() => setMenuOpen(false)}>{sub.label}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/get-quote" className="btn-primary block text-center mt-4" onClick={() => setMenuOpen(false)}>Get Free Quotes</Link>
        </div>
      )}
    </header>
  )
}
