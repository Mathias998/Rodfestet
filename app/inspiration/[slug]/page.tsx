import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { inspirationItems, getInspirationItem } from '@/data/inspiration'

export function generateStaticParams() {
  return inspirationItems.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const item = getInspirationItem(slug)

  if (!item) {
    return { title: 'Ikke fundet', robots: { index: false } }
  }

  return {
    title: item.title,
    description: item.description,
    alternates: { canonical: `https://rodfestet.dk/inspiration/${item.slug}` },
    // Ikke i Google før Lasse har godkendt indholdet (sæt klar: true i data/inspiration.ts)
    ...(item.klar ? {} : { robots: { index: false, follow: true } }),
  }
}

export default async function InspirationSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const item = getInspirationItem(slug)

  if (!item) notFound()

  return (
    <main className="bg-[#F5F0E8] min-h-screen">

      {/* Hero */}
      <section className="bg-[#1a2e00] py-20 lg:py-28 px-5">
        <div className="container-site">
          <p className="text-[#cf4f00] text-xs font-sans tracking-[0.2em] uppercase mb-5">
            Inspiration
          </p>
          <h1
            className="font-serif text-[#D9CCB3] leading-tight max-w-2xl"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            {item.heading}
          </h1>
        </div>
      </section>

      {/* Intro + detaljer */}
      <section className="py-16 lg:py-20 px-5">
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          <div>
            <div className="w-5 h-px bg-[#cf4f00] mb-6" aria-hidden="true" />
            <p className="text-[#2C2924]/80 text-base leading-relaxed">
              {item.intro}
            </p>
          </div>

          {item.details.length > 0 && (
          <div>
            <h2 className="font-serif text-[#1a2e00] text-xl mb-5">Hvad vi tilbyder</h2>
            <ul className="space-y-3">
              {item.details.map((detail) => (
                <li key={detail} className="flex items-start gap-3 text-sm text-[#2C2924]/75">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#cf4f00] shrink-0" aria-hidden="true" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
          )}

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a2e00] py-14 lg:py-16 px-5">
        <div className="container-site text-center">
          <p className="font-serif text-[#D9CCB3] text-xl lg:text-2xl mb-6">
            Interesseret? Lad os tale om jeres arrangement.
          </p>
          <Link
            href="/kontakt"
            className="inline-block px-8 py-4 bg-[#D9CCB3] text-[#233d00] text-sm font-sans font-medium tracking-wide hover:bg-white transition-colors"
          >
            Kontakt os
          </Link>
        </div>
      </section>

      {/* Tilbage-link */}
      <div className="py-8 px-5">
        <div className="container-site">
          <Link
            href="/inspiration"
            className="text-xs font-sans text-[#2C2924]/40 hover:text-[#2C2924] tracking-wide transition-colors"
          >
            ← Tilbage til inspiration
          </Link>
        </div>
      </div>

    </main>
  )
}
