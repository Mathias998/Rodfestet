import Link from 'next/link'
import { contactInfo } from '@/data/navigation'

export function ContactCta() {
  return (
    <section className="bg-[#1a2e00] border-t border-[#D9CCB3]/10 py-20 lg:py-24">
      <div className="container-site">

        {/* Overskrift */}
        <div className="text-center mb-16">
          <p className="text-[#cf4f00] text-xs font-sans tracking-[0.2em] uppercase mb-4">
            Kom i gang
          </p>
          <h2 className="font-serif text-[#D9CCB3] text-h2 leading-tight mb-4">
            Tag kontakt til os
          </h2>
          <p className="text-[#D9CCB3]/55 text-sm max-w-md mx-auto leading-relaxed">
            Vi svarer inden for 24 timer på hverdage og er klar til at hjælpe med jeres arrangement.
          </p>
        </div>

        {/* CTA-knap */}
        <div className="flex justify-center mb-16">
          <Link
            href="/kontakt"
            className="px-8 py-4 bg-[#D9CCB3] text-[#233d00] text-sm font-sans font-medium tracking-wide hover:bg-white transition-colors"
          >
            Få et tilbud
          </Link>
        </div>

        {/* 2-kolonne kontaktinfo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-xl mx-auto">

          {/* Telefon */}
          <div className="flex flex-col items-center text-center py-10 border-b md:border-b-0 md:border-r border-[#D9CCB3]/10">
            <div className="text-[#cf4f00] w-5 h-5 mb-5">
              <PhoneIcon />
            </div>
            <p className="text-xs font-sans text-[#D9CCB3]/40 uppercase tracking-widest mb-3">Telefon</p>
            <a
              href={`tel:${contactInfo.phone}`}
              className="font-serif text-[#D9CCB3] text-xl hover:text-[#cf4f00] transition-colors"
            >
              {contactInfo.phoneDisplay}
            </a>
          </div>

          {/* E-mail */}
          <div className="flex flex-col items-center text-center py-10">
            <div className="text-[#cf4f00] w-5 h-5 mb-5">
              <MailIcon />
            </div>
            <p className="text-xs font-sans text-[#D9CCB3]/40 uppercase tracking-widest mb-3">E-mail</p>
            <a
              href={`mailto:${contactInfo.email}`}
              className="font-serif text-[#D9CCB3] text-xl hover:text-[#cf4f00] transition-colors"
            >
              {contactInfo.email}
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.92 17z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}
