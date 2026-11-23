import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Inspiration – Rodfestet Catering',
  description:
    'Få inspiration til jeres arrangement. Vi skræddersyr maden til bryllupper, konfirmationer, firmaarrangementer og meget mere på Sjælland.',
  alternates: {
    canonical: 'https://rodfestet.dk/inspiration',
  },
}

const cards = [
  {
    slug: 'bryllup',
    image: '/images/1422.jpg',
    alt: 'Bryllupscatering fra Rodfestet',
    title: 'Bryllup',
    text: 'Et bryllup kræver mad, der passer til anledningen – fra velkomst og reception til en fuldendt festmiddag.',
  },
  {
    slug: 'konfirmation',
    image: '/images/2006.jpg',
    alt: 'Konfirmationscatering fra Rodfestet',
    title: 'Konfirmation',
    text: 'En festdag for den unge konfirmand og familien. Vi sammensætter maden, så konfirmanden får den ønskede oplevelse.',
  },
  {
    slug: 'firmaarrangement',
    image: '/images/1767.jpg',
    alt: 'Firmacatering fra Rodfestet',
    title: 'Firmaarrangement',
    text: 'Uanset om det er en sommerfest, julefrokost eller faglig samling, sørger vi for mad, der løfter stemningen og understøtter arrangementets behov for forplejning.',
  },
  {
    slug: 'reception',
    image: '/images/36A8365.jpg',
    alt: 'Receptionscatering fra Rodfestet',
    title: 'Reception',
    text: 'Til en reception handler det om let og elegant servering. Fingermad, småretter og gode drikke – vi klarer det hele, mens I er til stede.',
  },
  {
    slug: 'foedselsdag',
    image: '/images/dessert-anretning.webp',
    alt: 'Desserter anrettet i skåle',
    title: 'Fødselsdag',
    text: 'En rund fødselsdag eller en intim middag med de nærmeste. Vi laver både mad til de store fester med mange gæster og den mindre samling i jeres eget hjem.',
  },
  {
    slug: 'sommerfest',
    image: '/images/36A8352.jpg',
    alt: 'Sommerfestcatering fra Rodfestet',
    title: 'Sommerfest',
    text: 'Udeservering, grill, buffet eller noget helt fjerde. Vi har erfaring med udendørs arrangementer og finder altid en løsning, der passer til stedet.',
  },
  {
    slug: 'frokostbord',
    image: '/images/hjemmebagt-broed.webp',
    alt: 'Hjemmebagte boller',
    title: 'Frokostbord',
    text: 'Vi har specialiseret os i smørrebrød af høj kvalitet og har gjort en dyd ud af at lave det hele fra bunden og præsentere det flot.',
  },
  {
    slug: 'brunch',
    image: '/images/paerer-citron.webp',
    alt: 'Friske pærer med citronskal',
    title: 'Brunch',
    text: 'Vi laver både en traditionel og en mere frokostpræget brunch, alt efter tidspunktet på dagen og jeres ønsker.',
  },
  {
    slug: 'private-dining',
    image: '/images/2130.jpg',
    alt: 'Private dining fra Rodfestet',
    title: 'Private dining',
    text: 'Vi skaber en restaurantoplevelse hjemme hos jer eller i de rammer, I har valgt. Vi tager os af alt det praktiske, så I kan være sammen med jeres gæster.',
  },
]

// 5 billedeksempler med tilhørende tekst
const dishes = [
  {
    src: '/images/IMG4875.png',
    name: 'Eksempel på ret',
    description: '',
  },
  {
    src: '/images/torsk-rogn-asparges.webp',
    name: 'Hvid fisk med rogn og asparges',
    description: '',
  },
  {
    src: '/images/tatar-roedbede.webp',
    name: 'Tatar med sprøde chips, creme og basilikum',
    description: '',
  },
  {
    src: '/images/svampe-urter.webp',
    name: 'Svampe med friske urter',
    description: '',
  },
  {
    src: '/images/gulerod-fennikel.webp',
    name: 'Gulerod og fennikel med dild',
    description: '',
  },
]

export default function InspirationPage() {
  return (
    <main className="bg-[#1a2e00] min-h-screen">

      <PageHero
        label="Inspiration"
        title="Mad skabt til jeres arrangement"
        lead=""
      />

      {/* Intro-tekst */}
      <section className="container-site pb-12 max-w-4xl">
        <div className="space-y-4 text-[#D9CCB3]/60 leading-relaxed">
          <p>Alle arrangementer er forskellige. Derfor sammensætter vi maden ud fra jeres ønsker, gæster og anledning.</p>
          <p>Her kan I se eksempler på retter, vi har lavet, og de arrangementer, vi har erfaring med.</p>
        </div>
      </section>

      {/* Arrangementer vi laver mad til */}
      <section className="container-site pb-6">
        <h2 className="font-serif text-[#D9CCB3] text-xl lg:text-2xl leading-tight">
          Arrangementer vi laver mad til
        </h2>
      </section>

      {/* Inspirationskort */}
      <section className="container-site pb-20 lg:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {cards.map((card) => (
            <Link
              key={card.slug}
              href={`/inspiration/${card.slug}`}
              className="group bg-[#D9CCB3] flex flex-col overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-7 lg:p-8">
                <div className="w-5 h-px bg-[#cf4f00] mb-5" aria-hidden="true" />
                <h3 className="font-serif text-[#1a2e00] text-xl mb-3">{card.title}</h3>
                <p className="text-sm text-[#1a2e00]/65 leading-relaxed">{card.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Eksempler på retter */}
      <section className="container-site pb-20 lg:pb-24" aria-labelledby="retter-overskrift">
        <h2 id="retter-overskrift" className="font-serif text-[#D9CCB3] text-xl lg:text-2xl leading-tight mb-10">
          Eksempler på retter
        </h2>
        <div className="flex flex-col gap-10 lg:gap-14">
          {dishes.map((d) => (
            <figure
              key={d.src}
              className="grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-6 lg:gap-12 items-center"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={d.src}
                  alt={d.name}
                  fill
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption>
                <div className="w-5 h-px bg-[#cf4f00] mb-5" aria-hidden="true" />
                <h3 className="font-serif text-[#D9CCB3] text-xl mb-3">{d.name}</h3>
                {d.description && (
                  <p className="text-sm text-[#D9CCB3]/60 leading-relaxed">{d.description}</p>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Bund-CTA */}
      <section className="border-t border-[#D9CCB3]/10 py-20 lg:py-24">
        <div className="container-site max-w-xl text-center mx-auto">
          <h2 className="font-serif text-[#D9CCB3] text-h2 leading-tight mb-5">
            Har I noget andet i tankerne?
          </h2>
          <p className="text-[#D9CCB3]/60 leading-relaxed mb-10">
            Vi skræddersyr altid løsningen til jeres arrangement og hjælper gerne med idéer og sammensætning.
          </p>
          <Link
            href="/kontakt"
            className="px-8 py-4 bg-[#D9CCB3] text-[#233d00] text-sm font-sans font-medium tracking-wide hover:bg-white transition-colors"
          >
            Få et tilbud
          </Link>
        </div>
      </section>

    </main>
  )
}
