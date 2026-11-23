const steps = [
  { n: '1', title: 'Ring eller skriv',   desc: 'Fortæl os om jeres arrangement og ønsker' },
  { n: '2', title: 'Vi taler sammen',    desc: 'Vi rådgiver om menu, sammensætning og detaljer' },
  { n: '3', title: 'I får et tilbud',    desc: 'Skræddersyet til jer og jeres arrangement' },
  { n: '4', title: 'Vi afvikler',        desc: 'Sørger for en uforglemmelig oplevelse' },
]

export function ProcessSection() {
  return (
    <section className="bg-[#1a2e00] py-10 lg:py-14">
      <div className="mx-auto w-full max-w-[1200px] bg-[#D9CCB3] py-10 lg:py-12">
      <div className="container-site">

        {/* Overskrift */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-[#cf4f00] text-xs font-sans tracking-[0.2em] uppercase mb-4">
            Sådan gør vi
          </p>
          <h2 className="font-serif text-[#1a2e00] text-h2 leading-tight">
            Enkelt fra start til slut
          </h2>
        </div>

        {/* Trin */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">

          {/* Forbindelseslinje – kun desktop */}
          <div
            className="hidden lg:block absolute top-[1.35rem] left-[12.5%] right-[12.5%] h-px bg-[#1a2e00]/20"
            aria-hidden="true"
          />

          {steps.map((s) => (
            <div key={s.n} className="relative flex flex-col items-center text-center gap-4">

              {/* Nummercirkel */}
              <span
                className="relative z-10 font-serif text-[#cf4f00] rounded-full border border-[#1a2e00]/30 bg-[#D9CCB3] inline-flex items-center justify-center shrink-0"
                style={{ width: 44, height: 44, fontSize: '0.9rem', lineHeight: 1 }}
              >
                {s.n}
              </span>

              {/* Titel */}
              <p className="font-serif text-[#1a2e00] text-lg leading-snug">
                {s.title}
              </p>

              {/* Beskrivelse */}
              <p className="text-xs font-sans text-[#1a2e00]/55 leading-relaxed max-w-[160px]">
                {s.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
      </div>
    </section>
  )
}
