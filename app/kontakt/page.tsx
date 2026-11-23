import type { Metadata } from 'next'
import { contactInfo } from '@/data/navigation'
import { PageHero } from '@/components/ui/PageHero'
import { ContactForm } from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Kontakt – Rodfestet Catering',
  description:
    'Kontakt Rodfestet for et tilbud på catering til jeres arrangement. Ring på 47 47 47 20 eller skriv til kontakt@rodfestet.dk.',
  alternates: {
    canonical: 'https://rodfestet.dk/kontakt',
  },
}

export default function KontaktPage() {
  return (
    <main className="bg-[#1a2e00] min-h-screen">

      <PageHero
        label="Kontakt"
        title="Lad os tale sammen"
        lead={<>Fortæl os om jeres arrangement<br />– så finder vi den rette løsning sammen</>}
      />

      {/* 2-kolonne: formular + kontaktinfo */}
      <section className="container-site pb-20 lg:pb-28 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 lg:gap-16 items-start">

          {/* Venstre – formular */}
          <ContactForm />

          {/* Højre – kontaktinfo */}
          <div className="flex flex-col gap-6 border-t lg:border-t-0 lg:border-l border-[#D9CCB3]/10 pt-10 lg:pt-0 lg:pl-10">
            {[
              { label: 'Telefon', value: contactInfo.phoneDisplay, href: `tel:${contactInfo.phone}` },
              { label: 'E-mail',  value: contactInfo.email,        href: `mailto:${contactInfo.email}` },
              { label: 'CVR',     value: contactInfo.cvr },
              { label: 'Område',  value: contactInfo.address },
            ].map(({ label, value, href }) => (
              <div key={label}>
                <p className="text-xs text-[#D9CCB3]/35 uppercase tracking-widest mb-1">{label}</p>
                {href ? (
                  <a href={href} className="text-sm text-[#D9CCB3] hover:text-[#cf4f00] transition-colors font-sans">
                    {value}
                  </a>
                ) : (
                  <p className="text-sm text-[#D9CCB3] font-sans">{value}</p>
                )}
              </div>
            ))}
            <p className="text-xs text-[#D9CCB3]/35 leading-relaxed pt-2 border-t border-[#D9CCB3]/8">
              Vi svarer inden for 24 timer på hverdage.
            </p>
          </div>

        </div>
      </section>
    </main>
  )
}
