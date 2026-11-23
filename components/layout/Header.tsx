'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { navItems, contactInfo } from '@/data/navigation'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1a2e00] shadow-sm border-b border-[#D9CCB3]/10' : 'bg-[#1a2e00]'
      }`}
    >
      <div className="container-site h-16 lg:h-18 grid grid-cols-[1fr_auto_1fr] items-center">

        {/* Venstre – logo-tekst */}
        <div className="flex items-center">
          <Link href="/" aria-label="Rodfestet – forside">
            <Image
              src="/logo-text-light.svg"
              alt="Rodfestet"
              width={180}
              height={27}
              priority
              className="h-7 w-auto"
            />
          </Link>
        </div>

        {/* Midten – navigation */}
        <nav aria-label="Primær navigation" className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-sans tracking-wide uppercase transition-colors ${
                pathname === item.href
                  ? 'text-[#cf4f00] font-medium'
                  : 'text-[#D9CCB3]/60 hover:text-[#D9CCB3]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Højre – telefon */}
        <div className="hidden md:flex items-center justify-end">
          <a
            href={`tel:${contactInfo.phone}`}
            className="text-sm font-sans text-[#D9CCB3]/60 hover:text-[#cf4f00] transition-colors tracking-wide"
          >
            {contactInfo.phoneDisplay}
          </a>
        </div>

        {/* Mobil – hamburger */}
        <div className="md:hidden col-span-2 flex justify-end">
          <button
            className="p-2 text-[#D9CCB3]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Luk menu' : 'Åbn menu'}
            aria-expanded={menuOpen}
          >
            <span className={`block w-5 h-px bg-current mb-1.5 transition-transform origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-px bg-current mb-1.5 transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-current transition-transform origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>

      </div>

      {/* Mobil menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a2e00] border-t border-[#D9CCB3]/10">
          <div className="container-site py-5 flex flex-col gap-0">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 text-sm font-sans uppercase text-[#D9CCB3]/70 border-b border-[#D9CCB3]/10 hover:text-[#D9CCB3] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${contactInfo.phone}`}
              className="pt-4 text-sm font-sans text-[#D9CCB3]/60 hover:text-[#cf4f00] transition-colors"
            >
              {contactInfo.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
