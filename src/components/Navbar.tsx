'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

// Navigation configuration with enhanced properties
const NAVIGATION_CONFIG = [
  {
    id: 'features',
    label: 'Features',
    href: '/#features',
    external: false,
  },
  {
    id: 'pricing',
    label: 'Pricing',
    href: '#pricing',
    external: false,
  },
  {
    id: 'blogs',
    label: 'Blogs',
    href: '#blogs',
    external: false,
  },
  {
    id: 'contact',
    label: 'Contact Us',
    href: '/contact',
    external: false,
  },
]

// CTA Button configuration
const CTA_CONFIG = {
  label: 'Join Waitlist',
  onClick: () => {
    // Handle waitlist action here
    console.log('Join waitlist clicked')
  },
  className:
    'bg-[#6C24F5] hover:bg-purple-800 font-medium text-white px-5 py-3 rounded-3xl transition-colors cursor-pointer',
}

// Brand configuration
const BRAND_CONFIG = {
  name: 'MVT Lab',
  href: '/',
  className: 'text-2xl font-bold text-white',
}

const Navbar = () => {
  const path = usePathname()

  // Function to check if link is active
  const isActiveLink = (href: string) => {
    if (href.startsWith('#')) {
      return false // Hash links don't have active states in this context
    }
    return path === href
  }

  // Function to get link classes with active state
  const getLinkClasses = (href: string) => {
    const baseClasses = 'text-gray-200 hover:text-white transition-colors'
    const activeClasses = 'text-white font-medium'

    return isActiveLink(href) ? `${baseClasses} ${activeClasses}` : baseClasses
  }

  return (
    <header className="flex items-center justify-between relative z-10">
      {/* Brand/Logo */}
      <Link href={BRAND_CONFIG.href} className={BRAND_CONFIG.className}>
        {BRAND_CONFIG.name}
      </Link>

      {/* Navigation Menu */}
      <nav role="navigation" aria-label="Main navigation">
        <ul className="hidden md:flex items-center gap-8">
          {NAVIGATION_CONFIG.map((item) => (
            <li key={item.id}>
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={getLinkClasses(item.href)}
                >
                  {item.label}
                </a>
              ) : (
                <Link href={item.href} className={getLinkClasses(item.href)}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* CTA Button */}
      <button onClick={CTA_CONFIG.onClick} className={CTA_CONFIG.className} type="button">
        {CTA_CONFIG.label}
      </button>
    </header>
  )
}

export default Navbar
