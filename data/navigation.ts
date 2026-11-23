export type NavItem = {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: 'Hjem',        href: '/' },
  { label: 'Inspiration', href: '/inspiration' },
  { label: 'Om os',       href: '/om-os' },
  { label: 'Kontakt',     href: '/kontakt' },
]

export const contactInfo = {
  phone:        '47474720',
  phoneDisplay: '47 47 47 20',
  email:        'kontakt@rodfestet.dk',
  address:      'Sjælland, Danmark',
  cvr:          '43404520',
}
