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

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
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

    // Honeypot: robotter udfylder skjulte felter – ægte brugere gør ikke
    if (body.website) {
      // Returnér 200 uden at sende mail, så robotterne ikke ved at de er fanget
      return NextResponse.json({ success: true })
    }

    // Server-side validering
    const navn = String(body.navn ?? '').trim()
    const email = String(body.email ?? '').trim()
    const telefon = String(body.telefon ?? '').trim()
    const gaester = String(body.gaester ?? '').trim()
    const dato = String(body.dato ?? '').trim()
    const besked = String(body.besked ?? '').trim()

    const errors: string[] = []
    if (!navn) errors.push('Navn er påkrævet.')
    if (navn.length > 100) errors.push('Navn må maks. være 100 tegn.')
    if (!email) errors.push('E-mail er påkrævet.')
    if (email && !isValidEmail(email)) errors.push('E-mail er ikke gyldig.')
    if (email.length > 200) errors.push('E-mail må maks. være 200 tegn.')
    if (telefon.length > 50) errors.push('Telefon må maks. være 50 tegn.')
    if (gaester.length > 50) errors.push('Antal gæster må maks. være 50 tegn.')
    if (dato.length > 100) errors.push('Dato må maks. være 100 tegn.')
    if (besked.length > 2000) errors.push('Besked må maks. være 2000 tegn.')

    if (errors.length > 0) {
      return NextResponse.json({ error: errors.join(' ') }, { status: 400 })
    }

    const { error } = await resend.emails.send({
      from: 'Rodfestet - hjemmeside <noreply@rodfestet.dk>',
      to: 'kontakt@rodfestet.dk',
      replyTo: email,
      subject: `Ny forespørgsel fra ${navn.replace(/[\r\n]+/g, ' ')}`,
      html: `
        <h2>Ny forespørgsel via rodfestet.dk</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:500px">
          <tr><td><strong>Navn</strong></td><td>${esc(navn)}</td></tr>
          <tr><td><strong>E-mail</strong></td><td>${esc(email)}</td></tr>
          <tr><td><strong>Telefon</strong></td><td>${esc(telefon) || '–'}</td></tr>
          <tr><td><strong>Antal gæster</strong></td><td>${esc(gaester) || '–'}</td></tr>
          <tr><td><strong>Ønsket dato</strong></td><td>${esc(dato) || '–'}</td></tr>
          <tr><td valign="top"><strong>Besked</strong></td><td>${esc(besked) || '–'}</td></tr>
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
