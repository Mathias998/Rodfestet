import { contactInfo } from '@/data/navigation'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#D9CCB3]/10">
      <div className="container-site py-5 flex items-center justify-between">
        <p className="text-xs text-[#D9CCB3]/30 tracking-wide">© Rodfestet {year}</p>
        <p className="text-xs text-[#D9CCB3]/30 tracking-wide">CVR {contactInfo.cvr}</p>
      </div>
    </footer>
  )
}
