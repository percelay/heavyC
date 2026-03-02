'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronRight, X } from 'lucide-react'
import type { ServiceContent } from '@/lib/sourcematerial'

type ServicesProps = {
  services: ServiceContent[]
  requestQuoteLabel: string
}

export default function Services({ services, requestQuoteLabel }: ServicesProps) {
  const [selected, setSelected] = useState<ServiceContent | null>(null)

  return (
    <>
      <section id="services" className="bg-bg py-20" aria-labelledby="services-heading">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="services-heading" className="text-3xl font-semibold text-text-main sm:text-4xl">
            Services
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-primary" />

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => setSelected(service)}
                className="group overflow-hidden rounded-2xl border border-black/10 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative h-44">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold text-text-main">{service.title}</h3>
                    <ChevronRight className="h-5 w-5 text-primary transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                  <p className="mt-3 leading-relaxed text-text-muted">{service.oneLiner}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div
          role="button"
          tabIndex={0}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4"
          onClick={() => setSelected(null)}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              setSelected(null)
            }
          }}
        >
          <div
            className="flex h-[70vh] w-[70vw] max-w-5xl flex-col overflow-hidden rounded-2xl bg-bg shadow-md"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-52">
              <Image src={selected.image} alt={selected.title} fill className="object-cover" />
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-text-main transition-colors duration-200 hover:bg-white"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex flex-1 flex-col overflow-y-auto p-6 sm:p-8">
              <h3 className="text-2xl font-semibold text-text-main">{selected.title}</h3>
              <p className="mt-4 leading-relaxed text-text-muted">{selected.description}</p>

              <div className="mt-auto pt-8">
                <a
                  href="#quote"
                  onClick={() => setSelected(null)}
                  className="inline-flex w-full justify-center rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white transition-transform duration-200 hover:-translate-y-1"
                >
                  {requestQuoteLabel}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
