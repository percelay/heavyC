type AboutProps = {
  paragraphs: string[]
}

export default function About({ paragraphs }: AboutProps) {
  return (
    <section id="about" className="bg-surface py-20" aria-labelledby="about-heading">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 id="about-heading" className="text-3xl font-semibold text-text-main sm:text-4xl">
          About
        </h2>
        <div className="mt-3 h-1 w-16 rounded-full bg-primary" />

        <div className="mt-10 space-y-6 text-lg leading-relaxed text-text-muted">
          {paragraphs.map((paragraph, index) => (
            <p key={`${index}-${paragraph.slice(0, 20)}`}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
