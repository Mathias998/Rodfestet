import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Om os – Rodfestet Catering',
  description:
    'Vi er et mindre cateringfirma på Sjælland med fokus på kvalitet, sæsonens råvarer og personlig service. Læs om os og vores tilgang.',
  alternates: {
    canonical: 'https://rodfestet.dk/om-os',
  },
}

// Blød overgang i alle kanter, så portrættet glider ind i baggrunden
const fadeMask =
  'linear-gradient(to right, transparent, #000 8%, #000 92%, transparent), ' +
  'linear-gradient(to bottom, transparent, #000 6%, #000 88%, transparent)'
const fadeEdges: React.CSSProperties = {
  WebkitMaskImage: fadeMask,
  maskImage: fadeMask,
  WebkitMaskComposite: 'source-in',
  maskComposite: 'intersect',
}

export default function OmOsPage() {
  return (
    <main className="bg-[#1a2e00] min-h-screen">

      <PageHero
        label="Om os"
        title="En lille virksomhed med høje ambitioner"
        lead="Vi er en mindre catering og private dining virksomhed på Sjælland med fokus på kvalitet, sæsonens råvarer og personlig service."
      />

      {/* Brødtekst + portræt af Lasse ved siden af */}
      <section className="container-site pb-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] gap-10 lg:gap-14 items-start">

          <div className="space-y-5 text-[#D9CCB3]/85 leading-relaxed order-2 lg:order-1">
            <p>
              Rodfestet laver skræddersyet mad til private selskaber, bryllupper, konfirmationer og firmaarrangementer. Ingen standardpakker – kun løsninger tilpasset jer.
            </p>
            <p>
              Vi tror på, at god mad starter med gode råvarer. Derfor arbejder vi altid med det, der er friskt og i sæson, og tilbereder alt fra bunden.
            </p>
            <p>
              Når vi tager opgaven, er vi til stede hele vejen. Fra den første samtale om menuen til den dag, vi serverer og rydder op. I skal kunne slappe af og nyde jeres arrangement.
            </p>
            <p>
              Rodfestet er skabt og drevet af Lasse Friis Hilstrøm, udlært kok fra Restaurant Tinggården i Nordsjælland.
            </p>
            <p>
              Siden da har Lasse arbejdet i flere anerkendte køkkener, hvor han har opbygget en stærk faglighed og kærlighed til det gode håndværk.
            </p>
            <p>
              Med Rodfestet er ønsket at bringe den erfaring ud til vores kunder – hvor maden ikke bare er en del af arrangementet, men en oplevelse i sig selv.
            </p>
            <p>
              Vi arbejder med en stor passion for smag og råvarer, inspireret af det danske, franske og mellemøstlige køkken. Kombinationen giver os frihed til at skabe menuer, der både er genkendelige og overraskende.
            </p>
            <p>
              Rodfestet er skabt for at gøre det nemt at få god catering, uden at gå på kompromis med kvalitet, service og personlighed.
            </p>
          </div>

          <figure className="order-1 lg:order-2 lg:sticky lg:top-28">
            <div
              className="relative aspect-[2/3] w-full max-w-xs lg:max-w-none mx-auto overflow-hidden"
              style={fadeEdges}
            >
              <Image
                src="/images/lasse-portraet.webp"
                alt="Lasse Friis Hilstrøm, kok og indehaver af Rodfestet"
                fill
                sizes="(min-width: 1024px) 340px, 320px"
                className="object-cover"
                priority
              />
            </div>
            <figcaption className="text-xs text-[#D9CCB3]/45 text-center mt-3">
              Lasse Friis Hilstrøm, kok og indehaver
            </figcaption>
          </figure>

        </div>
      </section>

      {/* Billedrække */}
      <section className="container-site pb-6" aria-label="Billeder fra køkkenet">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 max-w-5xl mx-auto">
          {[
            { src: '/images/lasse-tilberedning.webp', alt: 'Lasse tilbereder pærer i Rodfestet-forklæde' },
            { src: '/images/fisk-raa.webp',           alt: 'Friske fiskefileter klar til tilberedning' },
            { src: '/images/forklaede-logo.webp',     alt: 'Rodfestet-forklæde med logo' },
          ].map((img) => (
            <div key={img.src} className="relative aspect-[3/4] overflow-hidden">
              <Image src={img.src} alt={img.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Værdier */}
      <section className="py-10 lg:py-14">
        <div className="mx-auto w-full max-w-[1200px] bg-[#D9CCB3] py-10 lg:py-12">
          <div className="container-site">
            <h2 className="font-serif text-[#1a2e00] text-xl lg:text-2xl leading-tight text-center mb-12">
              Vi tror på
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 max-w-3xl mx-auto">
              {[
                { title: 'Kvalitet',            text: 'Vi går aldrig på kompromis med råvarer eller tilberedning samt sæsonernes variation.' },
                { title: 'Personlig service',   text: 'Som et mindre firma kender vi alle vores kunder og tager os tid til dem.' },
                { title: 'Erfaring der tæller', text: 'Vi har leveret mad til utallige private selskaber og ved præcis, hvordan det skal gøres.' },
              ].map((v) => (
                <div key={v.title} className="text-center">
                  <div className="w-5 h-px bg-[#cf4f00] mb-5 mx-auto" aria-hidden="true" />
                  <h3 className="font-serif text-[#1a2e00] text-lg mb-3">{v.title}</h3>
                  <p className="text-sm text-[#1a2e00]/60 leading-relaxed">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#D9CCB3]/10 py-16 lg:py-20">
        <div className="container-site max-w-xl text-center mx-auto">
          <h2 className="font-serif text-[#D9CCB3] text-h2 leading-tight mb-5">
            Vil du høre mere?
          </h2>
          <p className="text-[#D9CCB3]/60 leading-relaxed mb-8">
            Vi står klar til en uforpligtende snak om jeres arrangement.
          </p>
          <Link
            href="/kontakt"
            className="px-8 py-4 bg-[#D9CCB3] text-[#233d00] text-sm font-sans font-medium tracking-wide hover:bg-white transition-colors"
          >
            Kontakt os
          </Link>
        </div>
      </section>

    </main>
  )
}
