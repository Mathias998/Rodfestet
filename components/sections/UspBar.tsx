const usps = [
  {
    title: 'Skræddersyet til jer',
    text: 'Vi tilpasser menuen efter jeres ønsker, gæster og anledning.',
  },
  {
    title: 'Kvalitet',
    text: 'Vi udvælger råvarer med omhu og efter sæson.',
  },
  {
    title: 'Erfaring og nærvær',
    text: 'Vi har mange års erfaring og ved, hvor meget de små detaljer betyder.',
  },
]

export function UspBar() {
  return (
    <section className="bg-[#1a2e00] pt-6 pb-14 lg:pt-10 lg:pb-20">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {usps.map((u) => (
            <div key={u.title} className="flex flex-col items-center text-center gap-4">
              <div className="w-8 h-px bg-[#cf4f00]/50" aria-hidden="true" />
              <div>
                <h3 className="font-serif text-[#D9CCB3] text-lg mb-3">{u.title}</h3>
                <p className="text-sm text-[#D9CCB3]/55 leading-relaxed max-w-xs mx-auto">{u.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
