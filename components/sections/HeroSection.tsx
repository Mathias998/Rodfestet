import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-[#1a2e00]">

      {/* Hero-indhold */}
      <div className="relative z-10 container-site flex flex-col items-center text-center w-full pt-28 pb-6 lg:pt-36 lg:pb-8">

        {/* Logo */}
        <div className="mb-12 lg:mb-14">
          <Image
            src="/logo-beige.svg"
            alt="Rodfestet"
            width={240}
            height={240}
            priority
            className="h-[27rem] lg:h-[47rem] w-auto translate-x-[18px] lg:translate-x-[22px]"
          />
        </div>

        {/* Overtekst */}
        <p className="text-[#cf4f00] text-xs font-sans tracking-[0.2em] uppercase mb-6">
          Catering og Private Dining
        </p>

        {/* Overskrift */}
        <h1 className="font-serif text-[#D9CCB3] leading-tight max-w-4xl mb-7" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}>
          Mad til dit selskab<br className="hidden sm:block" /><span className="whitespace-nowrap">med rødder i håndværk &amp; gode råvarer</span>
        </h1>

        {/* Manchet */}
        <p className="text-[#D9CCB3]/60 text-lead max-w-xl text-balance leading-relaxed">
          Vi er et mindre firma på Sjælland, der laver mad tilpasset til jeres arrangement.
          Med erfaring, omtanke og de bedste råvarer.
        </p>

      </div>
    </section>
  )
}
