'use client'

import { useState } from 'react'
import { Menu, X, Wrench } from 'lucide-react'

type HeaderProps = {
  businessName: string
  primaryCta: string
}

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Header({ businessName, primaryCta }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-black/10 bg-bg/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-white">
            <Wrench className="h-4 w-4" />
          </span>
          <span className="text-sm font-semibold text-text-main sm:text-base">{businessName}</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-muted transition-colors duration-200 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#quote"
            className="hidden rounded-xl bg-primary px-5 py-2 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-1 md:inline-flex"
          >
            {primaryCta}
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            className="p-1 md:hidden"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-black/10 transition-all duration-300 md:hidden ${
          mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2 text-sm font-medium text-text-muted transition-colors duration-200 hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#quote"
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-flex justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-1"
          >
            {primaryCta}
          </a>
        </nav>
      </div>
    </header>
  )
}
