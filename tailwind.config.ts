import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Mørkegrøn – #233d00
        forest: {
          DEFAULT: '#233d00',
          50:  '#edf3e6',
          100: '#cfe0bc',
          200: '#b1cd92',
          300: '#8fb368',
          400: '#6e9940',
          500: '#4f7c1e',
          600: '#3a6000',
          700: '#2e4e00',
          800: '#233d00',
          900: '#162600',
        },
        // Orange – #cf4f00
        rust: {
          DEFAULT: '#cf4f00',
          50:  '#fef0e6',
          100: '#fdd4b3',
          200: '#fab87f',
          300: '#f59a4d',
          400: '#ee7d1e',
          500: '#e36200',
          600: '#cf4f00',
          700: '#a83f00',
          800: '#803000',
          900: '#562000',
        },
        // Beige baggrund – #D9CCB3
        cream: {
          DEFAULT: '#D9CCB3',
          50:  '#faf8f4',
          100: '#f2ede3',
          200: '#e8dfd0',
          300: '#D9CCB3',
          400: '#c9b898',
          500: '#b8a27c',
        },
        // Brødtekst "sort" – #2C2924
        bark: {
          DEFAULT: '#2C2924',
          light: '#6b6457',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:  ['var(--font-inter)',    'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'h1':      ['clamp(2rem, 4vw, 3.25rem)',   { lineHeight: '1.12', letterSpacing: '-0.015em' }],
        'h2':      ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.2',  letterSpacing: '-0.01em' }],
        'h3':      ['clamp(1.15rem, 2vw, 1.5rem)', { lineHeight: '1.3' }],
        'lead':    ['clamp(1rem, 1.5vw, 1.15rem)', { lineHeight: '1.7' }],
      },
      spacing: {
        'section':    '5rem',
        'section-sm': '3.5rem',
        '18': '4.5rem',
      },
      maxWidth: {
        'site': '1200px',
      },
    },
  },
  plugins: [],
}

export default config
