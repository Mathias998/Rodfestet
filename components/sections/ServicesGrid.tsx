import Link from 'next/link'
import { services } from '@/data/services'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'

// Ikoner pr. ydelse
const serviceIcons: Record<string, React.ReactNode> = {
  bryllup:      <RingsIcon />,
  konfirmation: <StarIcon />,
  foedselsdag:  <CakeIcon />,
  firma:        <BriefcaseIcon />,
  privat:       <HomeIcon />,
}

export function ServicesGrid() {
  return (
    <section className="section bg-cream" aria-labelledby="services-heading">
      <div className="container-site">
        <SectionHeading
          id="services-heading"
          label="Hvad vi tilbyder"
          title="Catering til enhver lejlighed"
          lead="Fra det intime selskab til den store fest – vi løfter din begivenhed med mad, der smager, og service, der mærkes."
          className="mb-12 lg:mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {/* Fremhævet bryllupskort – fuld bredde */}
          <div className="sm:col-span-2 lg:col-span-3">
            <ServiceCard service={services[0]} featured />
          </div>
          {/* Resten */}
          {services.slice(1).map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/catering" variant="secondary">
            Se alle ydelser
          </Button>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  featured = false,
}: {
  service: (typeof services)[0]
  featured?: boolean
}) {
  return (
    <Link
      href={service.href}
      className={`group block bg-white border border-forest/8 hover:border-forest/25 hover:shadow-md transition-all duration-300 p-7 lg:p-8 ${featured ? 'lg:flex lg:items-start lg:gap-10' : ''}`}
    >
      {/* Ikon + kategori */}
      <div className={featured ? 'lg:w-64 lg:shrink-0' : ''}>
        <div className="w-10 h-10 text-rust mb-4">
          {serviceIcons[service.slug] ?? <DefaultIcon />}
        </div>
        <p className="text-rust text-xs font-sans font-medium tracking-widest uppercase mb-1">
          {service.shortTitle}
        </p>
        <h3 className={`font-serif text-forest group-hover:text-rust transition-colors ${featured ? 'text-h3' : 'text-xl'}`}>
          {service.title}
        </h3>
      </div>

      {/* Tekst */}
      <div className={featured ? 'mt-4 lg:mt-0' : 'mt-4'}>
        <p className="text-sm text-bark-light leading-relaxed mb-5">{service.description}</p>
        <ul className="grid grid-cols-1 gap-y-1.5 mb-5">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-bark-light">
              <CheckIcon />
              {f}
            </li>
          ))}
        </ul>
        <span className="text-sm font-sans font-medium text-forest group-hover:text-rust transition-colors">
          Læs mere →
        </span>
      </div>
    </Link>
  )
}

// ─── Ikoner ───────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-rust shrink-0" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function RingsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="8" cy="12" r="5" />
      <circle cx="16" cy="12" r="5" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function CakeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
      <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2 1 2 1" />
      <path d="M2 21h20" />
      <path d="M7 8v2" />
      <path d="M12 8v2" />
      <path d="M17 8v2" />
      <path d="M7 4 8 2l1 2" />
      <path d="M12 4l1-2 1 2" />
      <path d="M17 4l1-2 1 2" />
    </svg>
  )
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="14" x="2" y="7" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  )
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function DefaultIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}
