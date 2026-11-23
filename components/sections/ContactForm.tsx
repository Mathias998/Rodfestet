'use client'

import { useState } from 'react'

type Status = 'idle' | 'sending' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = {
      navn:     (form.elements.namedItem('navn')     as HTMLInputElement).value,
      email:    (form.elements.namedItem('email')    as HTMLInputElement).value,
      telefon:  (form.elements.namedItem('telefon')  as HTMLInputElement).value,
      gaester:  (form.elements.namedItem('gaester')  as HTMLInputElement).value,
      dato:     (form.elements.namedItem('dato')     as HTMLInputElement).value,
      besked:   (form.elements.namedItem('besked')   as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/kontakt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setStatus('success')
        form.reset()

        // Google Ads / Analytics: registrér en henvendelse – kun når afsendelsen lykkedes
        const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag
        if (typeof gtag === 'function') {
          gtag('event', 'generate_lead', { form_id: 'kontaktformular' })
        }
      } else {
        const json = await res.json()
        setErrorMsg(json.error || 'Der skete en fejl.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Der skete en fejl. Prøv igen.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="py-10">
        <div className="w-5 h-px bg-[#cf4f00] mb-6" aria-hidden="true" />
        <p className="font-serif text-[#D9CCB3] text-xl mb-3">Tak for din henvendelse</p>
        <p className="text-sm text-[#D9CCB3]/60 leading-relaxed">
          Vi vender tilbage inden for 24 timer på hverdage.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field id="navn"  label="Navn"   type="text"  placeholder="Dit navn"     required />
        <Field id="email" label="E-mail" type="email" placeholder="din@email.dk" required />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field id="telefon" label="Telefon"      type="tel"  placeholder="Telefonnummer" />
        <Field id="gaester" label="Antal gæster" type="text" placeholder="Fx 50 gæster"  />
      </div>

      <Field id="dato" label="Ønsket dato" type="text" placeholder="Fx 14. august 2027" />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="besked" className="text-xs text-[#D9CCB3]/45 uppercase tracking-widest">
          Besked
        </label>
        <textarea
          id="besked"
          name="besked"
          rows={5}
          className="bg-[#D9CCB3] border border-[#D9CCB3] px-4 py-3 text-sm text-[#2C2924] placeholder-[#2C2924]/30 focus:outline-none focus:border-[#233d00]/50 transition-colors resize-none"
          placeholder="Fortæl lidt om arrangementet – anledning, ønsker eller spørgsmål…"
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-[#cf4f00]">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="px-8 py-4 bg-[#D9CCB3] text-[#233d00] text-sm font-sans font-medium tracking-wide hover:bg-white transition-colors self-start mt-1 disabled:opacity-60"
      >
        {status === 'sending' ? 'Sender…' : 'Send forespørgsel'}
      </button>

    </form>
  )
}

function Field({ id, label, type, placeholder, required }: {
  id: string; label: string; type: string; placeholder: string; required?: boolean
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs text-[#D9CCB3]/45 uppercase tracking-widest">
        {label}
      </label>
      <input
        id={id} name={id} type={type} required={required} placeholder={placeholder}
        className="bg-[#D9CCB3] border border-[#D9CCB3] px-4 py-3 text-sm text-[#2C2924] placeholder-[#2C2924]/30 focus:outline-none focus:border-[#cf4f00]/50 transition-colors"
      />
    </div>
  )
}
