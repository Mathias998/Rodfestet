export type MenuCategory = {
  id: string
  title: string
  description: string
  items: MenuItem[]
}

export type MenuItem = {
  name: string
  description: string
  dietary?: ('vegetar' | 'vegansk' | 'glutenfri' | 'laktosefri')[]
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'forret',
    title: 'Forretter',
    description: 'Vi starter med sæsonens bedste – lette, smagsfulde retter der åbner måltidet.',
    items: [
      {
        name: 'Gravad laks med peberrodscreme',
        description: 'Hjemmegravad laks serveret med peberrodscreme, agurk og rugbrødschips.',
        dietary: ['glutenfri'],
      },
      {
        name: 'Sommersuppe af tomat og basilikum',
        description: 'Kold tomatsuppe med frisk basilikumolie og sprøde croutoner.',
        dietary: ['vegetar', 'vegansk'],
      },
      {
        name: 'Kammuslinger med blomkål og kapers',
        description: 'Stegte kammuslinger med blomkålscreme, kapers og brunet smør.',
        dietary: ['glutenfri'],
      },
      {
        name: 'Terrine af årstidens grøntsager',
        description: 'Vegetarisk terrine med lag af sæsonens grøntsager og urteolie.',
        dietary: ['vegetar', 'vegansk', 'glutenfri'],
      },
    ],
  },
  {
    id: 'hovedret',
    title: 'Hovedretter',
    description: 'Hjørnestenen i ethvert festmåltid – tilberedt med omhu og gode råvarer.',
    items: [
      {
        name: 'Langtidsstegt oksebryst',
        description: 'Mørt oksebryst tilberedt i 12 timer med rodfrugter, rødvin og timian.',
        dietary: ['glutenfri'],
      },
      {
        name: 'Hel rostad kylling fra friland',
        description: 'Saftig frilandskylling med fennikel, citron og krydderurter.',
        dietary: ['glutenfri'],
      },
      {
        name: 'Bagt torsk med smørsauce',
        description: 'Frisk dansk torsk med klassisk smørsauce, persille og nye kartofler.',
        dietary: ['glutenfri'],
      },
      {
        name: 'Svampesteg med rodfrugtsgratin',
        description: 'Vegetarisk stegebod af portobello og kastanjechampignon med fløjlsblød gratin.',
        dietary: ['vegetar', 'glutenfri'],
      },
    ],
  },
  {
    id: 'dessert',
    title: 'Desserter',
    description: 'En god afslutning er ligeså vigtig som begyndelsen. Vi afslutter med stil.',
    items: [
      {
        name: 'Hjemmelavet is med havtorn',
        description: 'Cremet vanilje-is toppet med syltede havtorn og honningkrumme.',
        dietary: ['vegetar', 'glutenfri'],
      },
      {
        name: 'Chokolademousse med saltkaramel',
        description: 'Luftig mørk chokolademousse med hjemmelavet saltkaramelsauce.',
        dietary: ['vegetar', 'glutenfri'],
      },
      {
        name: 'Æble- og pæretærte',
        description: 'Rustik tærte med sæsonens frugter, marcipan og vaniljeskum.',
        dietary: ['vegetar'],
      },
    ],
  },
  {
    id: 'buffet',
    title: 'Buffet & koldtbord',
    description: 'Til selskaber hvor alle skal have noget – et flot koldtbord med danskt præg.',
    items: [
      {
        name: 'Klassisk dansk koldtbord',
        description: 'Hjemmelavet leverpostej, sild, spegepølse, salater og friskbagt rugbrød.',
      },
      {
        name: 'Sommerens grillbuffet',
        description: 'Grillede kød- og grøntsagsretter med kolde salater, dips og brød.',
      },
      {
        name: 'Nordisk smagsbord',
        description: 'Udvalgte nordiske småretter, røget fisk, ost og hjemmelavede syltede ting.',
        dietary: ['glutenfri'],
      },
    ],
  },
]

export const dietaryLabels: Record<string, string> = {
  vegetar: 'Vegetar',
  vegansk: 'Vegansk',
  glutenfri: 'Glutenfri',
  laktosefri: 'Laktosefri',
}
