import { Button } from '@/components/ui/Button'

const values = [
  {
    title: 'Sæsonens råvarer',
    text: 'Vi arbejder udelukkende med det bedste, naturen har at byde på – afpasset årstiden og jeres arrangement.',
  },
  {
    title: 'Skræddersyet til jer',
    text: 'Ingen standardmenu. Hver menu bygges op fra bunden, tilpasset præcis jeres smag, selskab og anledning.',
  },
  {
    title: 'Personlig service',
    text: 'Vi er til stede fra første samtale til sidste tallerken er ryddet. I skal kunne slappe af og nyde festen.',
  },
]

export function AboutTeaser() {
  return (
    <section className="section bg-forest" aria-labelledby="about-heading">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Venstre: tekst */}
          <div>
            <p className="text-rust font-sans text-xs font-medium tracking-widest uppercase mb-5">
              Om Rodfestet
            </p>
            <h2
              id="about-heading"
              className="text-h2 font-serif text-cream mb-6 leading-tight text-balance"
            >
              Mad, der smager af noget
            </h2>
            <div className="space-y-4 text-cream/70 leading-relaxed text-sm lg:text-base">
              <p>
                Rodfestet er mere end catering – det er en kærlighed til råvarer, til håndværket og til de øjeblikke, der skabes omkring et godt bord.
              </p>
              <p>
                Vi tror på, at det bedste måltid starter med årstidens råvarer, tilberedt med omhu og serveret med oprigtig glæde. Vi er til stede på Sjælland og tager imod opgaver af alle størrelser.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button href="/om-os" variant="rust">
                Læs mere om os
              </Button>
              <Button
                href="/kontakt"
                variant="ghost"
                className="text-cream hover:text-rust"
              >
                Kontakt os →
              </Button>
            </div>
          </div>

          {/* Højre: værdikort */}
          <div className="flex flex-col gap-5">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="bg-forest-800/60 border border-cream/10 p-6 flex gap-5 items-start"
              >
                <div className="w-7 h-7 shrink-0 flex items-center justify-center rounded-full bg-rust/20 text-rust text-xs font-serif font-bold mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-serif text-cream text-lg mb-1">{v.title}</h3>
                  <p className="text-sm text-cream/60 leading-relaxed">{v.text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
