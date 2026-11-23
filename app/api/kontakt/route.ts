import { Resend } from 'resend'
import { NextResponse } from 'next/server'

// Escaper brugerinput, så det ikke kan indsætte HTML i mailen
function esc(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(request: Request) {
  // Oprettes først her (ikke ved build), så bygget ikke fejler i miljøer uden API-nøgle
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY mangler i dette miljø')
    return NextResponse.json({ error: 'Formularen er midlertidigt ude af drift. Ring eller skriv til os.' }, { status: 500 })
  }
  const resend = new Resend(apiKey)

  try {
    const body = await request.json()
    const navn = esc(body.navn), email = String(body.email ?? ''), telefon = esc(body.telefon)
    const gaester = esc(body.gaester), dato = esc(body.dato), besked = esc(body.besked)

    const { error } = await resend.emails.send({
      from: 'Rodfestet - hjemmeside <noreply@rodfestet.dk>',
      to: 'kontakt@rodfestet.dk',
      replyTo: email,
      subject: `Ny forespørgsel fra ${String(body.navn ?? '')}`,
      html: `
        <h2>Ny forespørgsel via rodfestet.dk</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:500px">
          <tr><td><strong>Navn</strong></td><td>${navn}</td></tr>
          <tr><td><strong>E-mail</strong></td><td>${esc(email)}</td></tr>
          <tr><td><strong>Telefon</strong></td><td>${telefon || '–'}</td></tr>
          <tr><td><strong>Antal gæster</strong></td><td>${gaester || '–'}</td></tr>
          <tr><td><strong>Ønsket dato</strong></td><td>${dato || '–'}</td></tr>
          <tr><td valign="top"><strong>Besked</strong></td><td>${besked || '–'}</td></tr>
        </table>
      `,
    })

    if (error) {
      console.error('Resend fejl:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Uventet fejl:', err)
    return NextResponse.json({ error: 'Der skete en fejl. Prøv igen.' }, { status: 500 })
  }
}
