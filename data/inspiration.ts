export type InspirationItem = {
  slug: string
  /** Kort titel brugt i navigation og <title>-tag */
  title: string
  /** En sætning til meta description og intro på siden */
  description: string
  /** Overskrift på selve undersiden (kan afvige fra title) */
  heading: string
  /** Brødtekst-intro til siden (kan indeholde HTML via dangerouslySetInnerHTML eller vises som <p>) */
  intro: string
  /** Relaterede tjenester / detaljer vist som bullets – fx "Op til 300 gæster", "Buffet eller servereret" */
  details: string[]
  /** true = siden er godkendt af Lasse og må vises i Google (fjerner noindex). */
  klar: boolean
}

export const inspirationItems: InspirationItem[] = [
  {
    slug: 'bryllup',
    title: 'Bryllupscatering',
    description: 'Et bryllup kræver mad, der passer til anledningen – fra velkomst og reception til en fuldendt festmiddag.',
    heading: 'Bryllupscatering',
    intro:
      'Et bryllup kræver mad, der passer til anledningen – fra velkomst og reception til en fuldendt festmiddag.',
    // Udfyldes med Lasses egne oplysninger (antal gæster, serveringsformer osv.)
    details: [],
    klar: false,
  },
  {
    slug: 'konfirmation',
    title: 'Konfirmationscatering',
    description: 'En festdag for den unge konfirmand og familien. Vi sammensætter maden, så konfirmanden får den ønskede oplevelse.',
    heading: 'Konfirmationscatering',
    intro:
      'En festdag for den unge konfirmand og familien. Vi sammensætter maden, så konfirmanden får den ønskede oplevelse.',
    // Udfyldes med Lasses egne oplysninger (antal gæster, serveringsformer osv.)
    details: [],
    klar: false,
  },
  {
    slug: 'firmaarrangement',
    title: 'Firmacatering',
    description: 'Uanset om det er en sommerfest, julefrokost eller faglig samling, sørger vi for mad, der løfter stemningen og understøtter arrangementets behov for forplejning.',
    heading: 'Catering til firmaarrangementer',
    intro:
      'Uanset om det er en sommerfest, julefrokost eller faglig samling, sørger vi for mad, der løfter stemningen og understøtter arrangementets behov for forplejning.',
    // Udfyldes med Lasses egne oplysninger (antal gæster, serveringsformer osv.)
    details: [],
    klar: false,
  },
  {
    slug: 'reception',
    title: 'Reception og velkomstdrinks',
    description: 'Til en reception handler det om let og elegant servering. Fingermad, småretter og gode drikke – vi klarer det hele, mens I er til stede.',
    heading: 'Reception og velkomstdrinks',
    intro:
      'Til en reception handler det om let og elegant servering. Fingermad, småretter og gode drikke – vi klarer det hele, mens I er til stede.',
    // Udfyldes med Lasses egne oplysninger (antal gæster, serveringsformer osv.)
    details: [],
    klar: false,
  },
  {
    slug: 'foedselsdag',
    title: 'Fødselsdagscatering',
    description: 'En rund fødselsdag eller en intim middag med de nærmeste. Vi laver både mad til de store fester med mange gæster og den mindre samling i jeres eget hjem.',
    heading: 'Fødselsdagscatering',
    intro:
      'En rund fødselsdag eller en intim middag med de nærmeste. Vi laver både mad til de store fester med mange gæster og den mindre samling i jeres eget hjem.',
    // Udfyldes med Lasses egne oplysninger (antal gæster, serveringsformer osv.)
    details: [],
    klar: false,
  },
  {
    slug: 'sommerfest',
    title: 'Sommerfest og udendørs catering',
    description: 'Udeservering, grill, buffet eller noget helt fjerde. Vi har erfaring med udendørs arrangementer og finder altid en løsning, der passer til stedet.',
    heading: 'Sommerfest og udendørs catering',
    intro:
      'Udeservering, grill, buffet eller noget helt fjerde. Vi har erfaring med udendørs arrangementer og finder altid en løsning, der passer til stedet.',
    // Udfyldes med Lasses egne oplysninger (antal gæster, serveringsformer osv.)
    details: [],
    klar: false,
  },
  {
    slug: 'frokostbord',
    title: 'Frokostbord og koldt bord',
    description: 'Vi har specialiseret os i smørrebrød af høj kvalitet og har gjort en dyd ud af at lave det hele fra bunden og præsentere det flot.',
    heading: 'Frokostbord og koldt bord',
    intro:
      'Vi har specialiseret os i smørrebrød af høj kvalitet og har gjort en dyd ud af at lave det hele fra bunden og præsentere det flot.',
    // Udfyldes med Lasses egne oplysninger (antal gæster, serveringsformer osv.)
    details: [],
    klar: false,
  },
  {
    slug: 'brunch',
    title: 'Brunchcatering',
    description: 'Vi laver både en traditionel og en mere frokostpræget brunch, alt efter tidspunktet på dagen og jeres ønsker.',
    heading: 'Brunchcatering',
    intro:
      'Vi laver både en traditionel og en mere frokostpræget brunch, alt efter tidspunktet på dagen og jeres ønsker.',
    // Udfyldes med Lasses egne oplysninger (antal gæster, serveringsformer osv.)
    details: [],
    klar: false,
  },
  {
    slug: 'private-dining',
    title: 'Private dining',
    description: 'Vi skaber en restaurantoplevelse hjemme hos jer eller i de rammer, I har valgt. Vi tager os af alt det praktiske, så I kan være sammen med jeres gæster.',
    heading: 'Private dining',
    intro:
      'Vi skaber en restaurantoplevelse hjemme hos jer eller i de rammer, I har valgt. Vi tager os af alt det praktiske, så I kan være sammen med jeres gæster.',
    // Udfyldes med Lasses egne oplysninger (antal gæster, serveringsformer osv.)
    details: [],
    klar: false,
  },
]

export function getInspirationItem(slug: string): InspirationItem | undefined {
  return inspirationItems.find((item) => item.slug === slug)
}
