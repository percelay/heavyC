import { Star } from 'lucide-react'
import type { TestimonialsContent } from '@/lib/sourcematerial'

type TestimonialsProps = {
  testimonials: TestimonialsContent
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const fields = testimonials.fields.slice(0, 3)
  const clientName = fields[0] ?? testimonials.placeholder
  const projectType = fields[1] ?? testimonials.placeholder
  const reviewText = fields[2] ?? testimonials.placeholder

  return (
    <section className="bg-bg py-20" aria-labelledby="testimonials-heading">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="testimonials-heading" className="text-3xl font-semibold text-text-main sm:text-4xl">
          Testimonials
        </h2>
        <div className="mt-3 h-1 w-16 rounded-full bg-primary" />

        <p className="mt-8 max-w-4xl leading-relaxed text-text-muted">{testimonials.placeholder}</p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <article
              key={index}
              className="rounded-2xl border border-black/10 bg-surface p-6 shadow-sm"
            >
              <div className="mb-4 flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((__, starIndex) => (
                  <Star key={starIndex} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="font-semibold text-text-main">{clientName}</p>
              <p className="mt-1 text-sm text-text-muted">{projectType}</p>
              <p className="mt-4 leading-relaxed text-text-muted">{reviewText}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
