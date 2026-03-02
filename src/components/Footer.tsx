'use client'

import { useState } from 'react'
import { ChevronDown, Facebook, Instagram, MapPin } from 'lucide-react'
import type { ContactContent } from '@/lib/sourcematerial'

type FooterProps = {
  businessName: string
  contact: ContactContent
  requestQuoteLabel: string
}

export default function Footer({ businessName, contact, requestQuoteLabel }: FooterProps) {
  const [hoursOpen, setHoursOpen] = useState(false)

  return (
    <footer id="contact" className="border-t border-black/10 bg-surface">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <section id="quote" aria-labelledby="quote-heading">
          <h2 id="quote-heading" className="text-2xl font-semibold text-text-main sm:text-3xl">
            {contact.details[0]}
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-primary" />

          <form className="mt-8 space-y-4" action="#" method="post">
            <input
              aria-label={contact.details[2]}
              type="text"
              className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-text-main outline-none transition-colors duration-200 focus:border-primary"
            />
            <input
              aria-label={contact.details[2]}
              type="email"
              className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-text-main outline-none transition-colors duration-200 focus:border-primary"
            />
            <textarea
              aria-label={contact.details[0]}
              rows={5}
              className="w-full resize-none rounded-xl border border-black/15 bg-white px-4 py-3 text-text-main outline-none transition-colors duration-200 focus:border-primary"
            />
            <button
              type="submit"
              className="inline-flex w-full justify-center rounded-xl bg-primary px-6 py-3 font-semibold text-white transition-transform duration-200 hover:-translate-y-1"
            >
              {requestQuoteLabel}
            </button>
          </form>
        </section>

        <div className="space-y-8">
          <section>
            <button
              type="button"
              onClick={() => setHoursOpen((value) => !value)}
              className="flex w-full items-center justify-between text-left"
              aria-expanded={hoursOpen}
            >
              <span className="text-xl font-semibold text-text-main">Business Hours</span>
              <ChevronDown
                className={`h-5 w-5 text-primary transition-transform duration-200 ${
                  hoursOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                hoursOpen ? 'mt-4 max-h-24 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="rounded-xl border border-black/10 bg-white p-4 text-text-muted">
                {contact.businessHours}
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-text-main">{contact.details[2]}</h3>
            <p className="mt-3 text-text-muted">{businessName}</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-text-main">{contact.details[3]}</h3>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary text-primary transition-colors duration-200 hover:bg-primary hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary text-primary transition-colors duration-200 hover:bg-primary hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-text-main">{contact.details[1]}</h3>
            <div className="mt-4 overflow-hidden rounded-2xl border border-black/10 shadow-sm">
              <iframe
                title={contact.details[1]}
                src="https://www.google.com/maps?q=Heavy%20C%E2%80%99s%20Properties&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-3 flex items-center gap-2 text-sm text-text-muted">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{businessName}</span>
            </div>
          </section>
        </div>
      </div>
    </footer>
  )
}
