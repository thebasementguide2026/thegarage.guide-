'use client'
import Link from 'next/link'
import { useState } from 'react'
import SearchBar from '@/components/SearchBar'

const navItems = [
  { label: 'Guides', href: '/guides', dropdown: [
    { label: 'Garage Organization', href: '/articles/complete-garage-organization-guide' },
    { label: 'Insulation Guide', href: '/guides/how-to-insulate-garage' },
    { label: 'Heater Guide', href: '/guides/garage-heater-guide' },
  ]},
  { label: 'Cost Guides', href: '/cost-guides', dropdown: null },
  { label: 'Reviews', href: '/reviews', dropdown: [
    { label: 'Storage Systems', href: '/reviews/best-garage-storage-systems' },
    { label: 'Floor Epoxy', href: '/reviews/best-garage-floor-epoxy' },
    { label: 'Lighting', href: '/reviews/best-garage-lighting' },
  ]},
  { label: 'Problems', href: '/problems', dropdown: [
    { label: 'Door Opener Issues', href: '/problems/garage-door-opener-not-working' },
    { label: 'Water Leaks', href: '/problems/water-leaking-into-garage' },
  ]},
  { label: 'Comparisons', href: '/comparisons', dropdown: null },
  { label: 'About', href: '/about', dropdown: null },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [activeDD, setActiveDD] = useState<string | null>(null)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container-custom flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-[#2B3A4A]">
          The <span className="text-[#C45B3B]">Garage</span> Guide
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div key={item.label} className="relative">
              {item.dropdown ? (
                <button onClick={() => setActiveDD(activeDD === item.label ? null : item.label)} className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#2B3A4A] rounded-lg hover:bg-gray-50 flex items-center gap-1">
                  {item.label}
                </button>
              ) : (
                <Link href={item.href} className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#2B3A4A] rounded-lg hover:bg-gray-50">{item.label}</Link>
              )}
              {item.dropdown && activeDD === item.label && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border py-1 z-50">
                  {item.dropdown.map((sub) => (
                    <Link key={sub.href} href={sub.href} onClick={() => setActiveDD(null)} className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50">{sub.label}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <button onClick={() => setSearchOpen(!searchOpen)} className="text-gray-500 hover:text-[#2B3A4A] p-2 rounded-lg hover:bg-gray-50 text-sm">Search</button>
          <Link href="/get-quote" className="btn-primary text-sm">Get Free Quotes</Link>
        </div>
        <button className="lg:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
      {searchOpen && <div className="border-t py-3 px-4"><SearchBar onClose={() => setSearchOpen(false)} /></div>}
      {menuOpen && (
        <div className="lg:hidden border-t py-4 px-4 space-y-2">
          {navItems.map((item) => (<Link key={item.label} href={item.href} className="block py-2 text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>{item.label}</Link>))}
          <Link href="/get-quote" className="btn-primary block text-center mt-4" onClick={() => setMenuOpen(false)}>Get Free Quotes</Link>
        </div>
      )}
    </header>
  )
}
