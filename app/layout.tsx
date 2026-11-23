import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CookieBanner } from '@/components/layout/CookieBanner'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://rodfestet.dk'),
  title: {
    default: 'Rodfestet – Catering på Sjælland',
    template: '%s | Rodfestet Catering',
  },
  description:
    'Rodfestet tilbyder skræddersyet catering til bryllupper, konfirmationer, firmaarrangementer og private selskaber på Sjælland. Sæsonens råvarer – personlig service.',
  keywords: [
    'catering Sjælland',
    'cateringfirma',
    'bryllupscatering',
    'konfirmationscatering',
    'firmacatering',
    'selskabsmad',
    'catering til fest',
  ],
  openGraph: {
    type: 'website',
    locale: 'da_DK',
    url: 'https://rodfestet.dk',
    siteName: 'Rodfestet',
    title: 'Rodfestet – Catering på Sjælland',
    description:
      'Skræddersyet catering til bryllupper, selskaber og firmaarrangementer. Sæsonens råvarer og personlig service.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rodfestet – Catering på Sjælland',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rodfestet – Catering på Sjælland',
    description: 'Skræddersyet catering til bryllupper, selskaber og firmaarrangementer på Sjælland.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // canonical sættes individuelt på hver side – ikke her i root-layout,
  // da en root-canonical ellers arves af alle sider og peger dem på forsiden.
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Consent Mode v2 — sæt defaults INDEN Google-tagget loader (kræves i EU/DK) */}
        <Script id="consent-defaults" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_storage:          'denied',
              ad_user_data:        'denied',
              ad_personalization:  'denied',
              analytics_storage:   'denied',
              wait_for_update:     500
            });
          `}
        </Script>

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18481050156"
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18481050156');
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
