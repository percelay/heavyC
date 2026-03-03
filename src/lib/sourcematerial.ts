import fs from 'node:fs'
import path from 'node:path'

export type HeroContent = {
  headline: string
  subheadline: string
  primaryCta: string
  secondaryCta: string
}

export type ServiceContent = {
  id: number
  title: string
  description: string
  oneLiner: string
  image: string
}

export type GalleryContent = {
  title: string
  description: string
  images: string[]
}

export type ContactContent = {
  businessHours: string
  details: string[]
}

export type TestimonialsContent = {
  placeholder: string
  fields: string[]
}

export type SiteContent = {
  businessName: string
  hero: HeroContent
  about: string[]
  services: ServiceContent[]
  gallery: GalleryContent
  testimonials: TestimonialsContent
  contact: ContactContent
}

const SOURCE_FILE = path.join(process.cwd(), 'sourcematerial.md')

function requireLine(lines: string[], marker: string): number {
  const index = lines.indexOf(marker)

  if (index === -1) {
    throw new Error(`Missing section marker: ${marker}`)
  }

  return index
}

function parseHeroLine(line: string): HeroContent {
  const heroMatch = line.match(
    /Headline:\s*(.*?)\s+Subheadline:\s*(.*?)\s+Primary CTA:\s*(.*?)\s+Secondary CTA:\s*(.*)$/
  )

  if (!heroMatch) {
    throw new Error('Unable to parse hero line from sourcematerial.md')
  }

  return {
    headline: heroMatch[1].trim(),
    subheadline: heroMatch[2].trim(),
    primaryCta: heroMatch[3].trim(),
    secondaryCta: heroMatch[4].trim(),
  }
}

function parseLabeledLine(line: string, label: string): string {
  const prefix = `${label}:`

  if (!line.startsWith(prefix)) {
    throw new Error(`Expected line starting with "${prefix}" but received "${line}"`)
  }

  return line.slice(prefix.length).trim()
}

function firstSentence(text: string): string {
  const sentenceEnd = text.indexOf('.')

  if (sentenceEnd === -1) {
    return text
  }

  return text.slice(0, sentenceEnd + 1)
}

function splitDetails(line: string): string[] {
  return line
    .split(/,\s*(?![^()]*\))/)
    .map((item) => item.trim())
    .filter(Boolean)
}

function parseTestimonialFields(placeholder: string): string[] {
  const match = placeholder.match(/including\s+(.+?)\)?$/i)

  if (!match) {
    return [placeholder]
  }

  return match[1]
    .replace(/\.$/, '')
    .split(/,\s*|\s+and\s+/)
    .map((item) => item.trim())
    .filter(Boolean)
}

export function getSourceMaterial(): SiteContent {
  const raw = fs.readFileSync(SOURCE_FILE, 'utf8').replace(/\r\n/g, '\n')
  const lines = raw
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .filter((line) => !/^\+\d+$/.test(line))

  const businessName = lines[0]

  const heroIndex = requireLine(lines, 'Hero')
  const aboutIndex = requireLine(lines, 'About')
  const servicesIndex = requireLine(lines, 'Services')
  const galleryIndex = requireLine(lines, 'Gallery')
  const testimonialsIndex = requireLine(lines, 'Testimonials')
  const contactIndex = requireLine(lines, 'Contact')

  const hero = parseHeroLine(lines[heroIndex + 1])

  const about = lines.slice(aboutIndex + 1, servicesIndex)

  const services: ServiceContent[] = []
  const serviceImages = [
    '/images/plumbertek.jpg',
    '/images/landscapetek.jpg',
    '/images/electrician.jpeg',
    '/images/bathroom.jpeg',
  ]

  let cursor = servicesIndex + 1

  while (cursor < galleryIndex) {
    const serviceMarker = lines[cursor]

    if (!serviceMarker.startsWith('Service ')) {
      cursor += 1
      continue
    }

    const idMatch = serviceMarker.match(/Service\s+(\d+)/)
    const id = idMatch ? Number(idMatch[1]) : services.length + 1

    const title = parseLabeledLine(lines[cursor + 1], 'Title')
    const description = parseLabeledLine(lines[cursor + 2], 'Description')

    services.push({
      id,
      title,
      description,
      oneLiner: firstSentence(description),
      image: serviceImages[services.length] ?? '/images/hero.jpeg',
    })

    cursor += 3
  }

  const galleryTitle = parseLabeledLine(lines[galleryIndex + 1], 'Title')
  const galleryDescription = parseLabeledLine(lines[galleryIndex + 2], 'Description')

  const testimonialsPlaceholder = lines[testimonialsIndex + 1]

  const contactBusinessHours = parseLabeledLine(lines[contactIndex + 1], 'Business Hours')
  const contactDetailsLine = parseLabeledLine(lines[contactIndex + 2], 'Details')

  return {
    businessName,
    hero,
    about,
    services,
    gallery: {
      title: galleryTitle,
      description: galleryDescription,
      images: [
        '/images/gal1.webp',
        '/images/gal2.webp',
        '/images/gal3.webp',
        '/images/gal4.webp',
        '/images/gal5.webp',
        '/images/gal6.webp',
        '/images/gal7.webp',
        '/images/gal8.webp',
        '/images/gal9.webp',
        '/images/gal10.webp',
      ],
    },
    testimonials: {
      placeholder: testimonialsPlaceholder,
      fields: parseTestimonialFields(testimonialsPlaceholder),
    },
    contact: {
      businessHours: contactBusinessHours,
      details: splitDetails(contactDetailsLine),
    },
  }
}
