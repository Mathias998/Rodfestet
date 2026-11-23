export type Service = {
  slug: string
  title: string
  shortTitle: string
  tagline: string
  description: string
  image: string
  imageAlt: string
  href: string
  features: string[]
}

export const services: Service[] = [
  {
    slug: 'bryllup',
    shortTitle: 'Bryllup',
    title: 'Bryllupscatering',
    tagline: 'Den perfekte ramme om jeres store dag',
    description:
      'Vi skræddersyr menuen til jeres bryllup – fra den første champagne til den sidste dessert. Med fokus på sæsonens råvarer og en personlig service sørger vi for, at maden matcher stemningen og jeres ønsker.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
    imageAlt: 'Elegant bryllupsbord med lys og blomster',
    href: '/catering/bryllup',
    features: [
      'Personligt tilpasset menu',
      'Sæsonens friske råvarer',
      'Servering og oprydning inkluderet',
      'Smag inden jeres store dag',
    ],
  },
  {
    slug: 'konfirmation',
    shortTitle: 'Konfirmation',
    title: 'Konfirmationscatering',
    tagline: 'Fest og fejring med god mad i centrum',
    description:
      'Lad os tage os af maden, mens I fejrer den unge konfirmand. Vi sørger for et festmåltid, der samler familien og skaber minder – tilpasset præcis jeres stil og selskabets størrelse.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    imageAlt: 'Festdækning til konfirmationsmiddag',
    href: '/catering/konfirmation',
    features: [
      'Tilpasset til selskabets størrelse',
      'Børne- og voksenmenuer',
      'Fleksibel servering og buffet',
      'Hjælp til menuvalg',
    ],
  },
  {
    slug: 'foedselsdag',
    shortTitle: 'Fødselsdag',
    title: 'Fødselsdagscatering',
    tagline: 'Mærkedage fortjener mere end det sædvanlige',
    description:
      'Uanset om det er en rund fødselsdag eller en intim middag med de nærmeste, leverer vi mad af høj kvalitet, der gør aftenen uforglemmelig. Vi klarer det hele – du nyder festen.',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80',
    imageAlt: 'Festlig middag med stearinlys og gode retter',
    href: '/catering/foedselsdag',
    features: [
      'Fra 10 til 200+ gæster',
      'Buffet, middag eller tapas-format',
      'Tilpasset tema og ønsker',
      'Professionel service',
    ],
  },
  {
    slug: 'firma',
    shortTitle: 'Firma',
    title: 'Firmacatering',
    tagline: 'Professionel catering til erhvervslivet',
    description:
      'Fra kundemøder og teambuilding til julefrokoster og receptioner – vi løfter jeres arrangement med mad, der imponerer. Vi ved, hvad der kræves, når der er fokus på detaljen.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
    imageAlt: 'Professionelt anrettet firmabuffet',
    href: '/catering/firma',
    features: [
      'Skræddersyet til jeres arrangement',
      'Julefrokost og receptioner',
      'Professionel præsentation',
      'Fleksible aftaler',
    ],
  },
  {
    slug: 'privat',
    shortTitle: 'Privat',
    title: 'Catering til private selskaber',
    tagline: 'Hjemlig hygge – professionelt udført',
    description:
      'Har du et privat selskab, der kalder på god mad? Vi leverer hjemmelavet kvalitet til alle private lejligheder – uanset størrelse og anledning. Vi møder jer, hvor I er.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    imageAlt: 'Hjemlig middag med venner og familie',
    href: '/catering/privat',
    features: [
      'Levering og opsætning',
      'Alle anledninger',
      'Familievenlige menuer',
      'Ingen arrangement for lille',
    ],
  },
]
