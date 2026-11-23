import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const slugs = [
  'bryllup',
  'konfirmation',
  'firmaarrangement',
  'reception',
  'foedselsdag',
  'sommerfest',
  'frokostbord',
  'brunch',
  'private-dining',
]

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }))
}

export const metadata: Metadata = {
  title: 'Kommer snart – Rodfestet Catering',
  description: 'Vi arbejder på at fylde siden med inspiration. Kig forbi igen snart.',
  // Pladsholderside: skal ikke i Google før der er rigtigt indhold. Fjern 'robots' når siderne er færdige.
  robots: { index: false, follow: true },
}

export default async function InspirationSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  if (!slugs.includes(slug)) notFound()

  return (
    <main className="bg-[#1a2e00] min-h-screen flex flex-col">

      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-32">

        {/* Logo */}
        <div className="mb-10">
          <Image
            src="/logo-orange.svg"
            alt="Rodfestet"
            width={120}
            height={120}
            priority
            className="h-36 lg:h-44 w-auto opacity-90"
          />
        </div>

        {/* Label */}
        <p className="text-[#cf4f00] text-xs font-sans tracking-[0.2em] uppercase mb-5">
          Inspiration
        </p>

        {/* Overskrift */}
        <h1 className="font-serif text-[#D9CCB3] leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
          Kommer snart
        </h1>

        {/* Tekst */}
        <p className="text-[#D9CCB3]/55 text-sm leading-relaxed max-w-xs">
          Vi arbejder på at fylde siden med inspiration. Kig forbi igen snart.
        </p>

        {/* Tilbage-link */}
        <Link
          href="/inspiration"
          className="mt-14 text-xs font-sans text-[#D9CCB3]/40 hover:text-[#D9CCB3] tracking-wide transition-colors"
        >
          ← Tilbage til inspiration
        </Link>

      </div>

    </main>
  )
}
