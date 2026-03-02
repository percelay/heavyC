import About from '@/components/About'
import Footer from '@/components/Footer'
import Gallery from '@/components/Gallery'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import { getSourceMaterial } from '@/lib/sourcematerial'

export default function Home() {
  const content = getSourceMaterial()

  return (
    <>
      <Header businessName={content.businessName} primaryCta={content.hero.primaryCta} />
      <main>
        <Hero hero={content.hero} />
        <Services services={content.services} requestQuoteLabel={content.hero.primaryCta} />
        <Gallery gallery={content.gallery} />
        <About paragraphs={content.about} />
        <Testimonials testimonials={content.testimonials} />
      </main>
      <Footer
        businessName={content.businessName}
        contact={content.contact}
        requestQuoteLabel={content.hero.primaryCta}
      />
    </>
  )
}
