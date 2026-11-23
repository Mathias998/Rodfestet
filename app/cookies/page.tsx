import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookiepolitik',
  description: 'Læs om Rodfesteds brug af cookies og dine valgmuligheder.',
  alternates: { canonical: 'https://rodfestet.dk/cookies' },
  robots: { index: true, follow: true },
}

export default function CookiesPage() {
  return (
    <section className="bg-[#F5F0E8] py-20 lg:py-28">
      <div className="container-site px-5">
        <div className="max-w-2xl">
          <h1 className="font-serif text-3xl lg:text-4xl text-[#1a2e00] mb-8">Cookiepolitik</h1>

          <p className="text-sm text-[#2C2924]/70 leading-relaxed mb-8">
            Sidst opdateret: november 2026
          </p>

          <div className="prose prose-sm prose-stone max-w-none text-[#2C2924]/80 leading-relaxed space-y-6">

            <h2 className="font-serif text-xl text-[#1a2e00] mt-10 mb-3">Hvad er cookies?</h2>
            <p>
              Cookies er små tekstfiler, som gemmes i din browser, når du besøger en hjemmeside.
              De hjælper hjemmesider med at huske dine indstillinger og forbedre din oplevelse.
            </p>

            <h2 className="font-serif text-xl text-[#1a2e00] mt-10 mb-3">Hvilke cookies bruger vi?</h2>
            <p>
              Vi bruger Google Ads-tags til at måle effekten af vores annoncering og til at forbedre
              vores markedsføring. Disse cookies indsamler data om dine besøg på siden og om, hvorvidt du kontakter os efter at have klikket på en annonce.
              Vi bruger ikke cookies til andre formål end markedsføring og trafikanalyse.
            </p>

            <table className="w-full border-collapse text-xs mt-4">
              <thead>
                <tr className="bg-[#1a2e00]/5">
                  <th className="text-left p-3 font-medium text-[#1a2e00]">Udbyder</th>
                  <th className="text-left p-3 font-medium text-[#1a2e00]">Formål</th>
                  <th className="text-left p-3 font-medium text-[#1a2e00]">Levetid</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[#1a2e00]/10">
                  <td className="p-3">Google Ads</td>
                  <td className="p-3">Annoncemåling og remarketing</td>
                  <td className="p-3">Op til 540 dage</td>
                </tr>
              </tbody>
            </table>

            <h2 className="font-serif text-xl text-[#1a2e00] mt-10 mb-3">Dit valg</h2>
            <p>
              Første gang du besøger siden, vises en cookiebanner, hvor du kan acceptere eller
              afvise cookies. Accepterer du, giver du samtykke til brug af Google Ads-cookies.
              Afviser du, sættes ingen markedsføringscookies.
            </p>
            <p>
              Du kan til enhver tid trække dit samtykke tilbage ved at rydde cookies i din browser
              under <em>Indstillinger → Privatliv og sikkerhed → Slet browserdata</em>.
            </p>

            <h2 className="font-serif text-xl text-[#1a2e00] mt-10 mb-3">Kontakt</h2>
            <p>
              Spørgsmål til vores brug af cookies? Skriv til{' '}
              <a href="mailto:kontakt@rodfestet.dk" className="text-[#cf4f00] underline underline-offset-2">
                kontakt@rodfestet.dk
              </a>
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}
