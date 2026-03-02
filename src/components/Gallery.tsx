import Image from 'next/image'
import type { GalleryContent } from '@/lib/sourcematerial'

type GalleryProps = {
  gallery: GalleryContent
}

export default function Gallery({ gallery }: GalleryProps) {
  return (
    <section id="gallery" className="bg-surface py-20" aria-labelledby="gallery-heading">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="gallery-heading" className="text-3xl font-semibold text-text-main sm:text-4xl">
          Gallery
        </h2>
        <div className="mt-3 h-1 w-16 rounded-full bg-primary" />

        <h3 className="mt-8 text-2xl font-semibold text-text-main">{gallery.title}</h3>
        <p className="mt-4 max-w-3xl leading-relaxed text-text-muted">{gallery.description}</p>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
          {gallery.images.map((image, index) => (
            <div
              key={image}
              className={`relative overflow-hidden rounded-2xl shadow-sm ${
                index === 0 ? 'col-span-2 aspect-[16/10]' : 'aspect-square'
              }`}
            >
              <Image
                src={image}
                alt={`${gallery.title} ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
