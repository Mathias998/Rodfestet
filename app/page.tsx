import type { Metadata } from 'next'
import { HeroSection }    from '@/components/sections/HeroSection'
import { UspBar }         from '@/components/sections/UspBar'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { ContactCta }     from '@/components/sections/ContactCta'
import { PhotoGallery }   from '@/components/sections/PhotoGallery'

export const metadata: Metadata = {
  title: 'Rodfestet – Catering på Sjælland',
  description:
    'Skræddersyet catering til bryllupper, konfirmationer, firmaarrangementer og private selskaber på Sjælland. Ring på 47 47 47 20 for et tilbud.',
  alternates: {
    canonical: 'https://rodfestet.dk',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',
  name: 'Rodfestet',
  description: 'Skræddersyet catering til alle anledninger på Sjælland.',
  url: 'https://rodfestet.dk',
  telephone: '+4547474720',
  email: 'kontakt@rodfestet.dk',
  image: 'https://rodfestet.dk/og-image.jpg',
  // sameAs: ['https://www.facebook.com/rodfestet', 'https://www.instagram.com/rodfestet'],
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Sjælland',
    addressCountry: 'DK',
  },
  areaServed: { '@type': 'State', name: 'Sjælland' },
  servesCuisine: 'Nordisk',
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <UspBar />
      <PhotoGallery />
      <ProcessSection />
      <ContactCta />
    </>
  )
}
