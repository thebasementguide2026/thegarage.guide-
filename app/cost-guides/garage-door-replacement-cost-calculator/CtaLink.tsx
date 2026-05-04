'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

interface CtaLinkProps {
  href: string
  className?: string
  children: ReactNode
  ctaText: string
  placement: string
  calculatorName?: string
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

export default function CtaLink({ href, className, children, ctaText, placement, calculatorName = 'garage_door_replacement_cost' }: CtaLinkProps) {
  const handleClick = () => {
    try {
      const params = {
        calculator_name: calculatorName,
        cta_text: ctaText,
        cta_destination: href,
        placement,
      }
      if (typeof window !== 'undefined') {
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'quote_cta_click', params)
        }
        if (Array.isArray(window.dataLayer)) {
          window.dataLayer.push({ event: 'quote_cta_click', ...params })
        }
      }
    } catch {}
  }

  const isAnchor = href.startsWith('#')
  if (isAnchor) {
    return (
      <a href={href} className={className} onClick={handleClick}>{children}</a>
    )
  }
  return (
    <Link href={href} className={className} onClick={handleClick}>{children}</Link>
  )
}
