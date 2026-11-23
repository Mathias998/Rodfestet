'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'rf_cookie_consent'

type ConsentValue = 'granted' | 'denied'

function updateGoogleConsent(value: ConsentValue) {
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag
  if (typeof gtag === 'function') {
    gtag('consent', 'update', {
      ad_storage:         value,
      ad_user_data:       value,
      ad_personalization: value,
      analytics_storage:  value,
    })
  }
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) {
      setVisible(true)
    } else {
      // Gendan brugerens valg ved næste sidebesøg
      updateGoogleConsent(saved as ConsentValue)
    }
  }, [])

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, 'granted')
    updateGoogleConsent('granted')
    setVisible(false)
  }

  function handleDecline() {
    localStorage.setItem(STORAGE_KEY, 'denied')
    updateGoogleConsent('denied')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookiesamtykke"
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#1a2e00] border-t border-[#D9CCB3]/20 px-5 py-5 md:py-4"
    >
      <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <p className="text-sm text-[#D9CCB3]/80 leading-relaxed flex-1">
          Vi bruger cookies til markedsføring og trafikanalyse.{' '}
          <Link href="/cookies" className="underline underline-offset-2 hover:text-[#D9CCB3] transition-colors">
            Læs mere
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={handleDecline}
            className="px-5 py-2.5 text-sm text-[#D9CCB3]/70 border border-[#D9CCB3]/30 hover:border-[#D9CCB3]/60 hover:text-[#D9CCB3] transition-colors"
          >
            Afvis
          </button>
          <button
            onClick={handleAccept}
            className="px-5 py-2.5 text-sm bg-[#D9CCB3] text-[#1a2e00] hover:bg-white transition-colors font-medium"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  )
}
