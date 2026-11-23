import React from 'react'
import Image from 'next/image'

type Props = {
  label: string
  title: string
  lead?: React.ReactNode
}

export function PageHero({ label, title, lead }: Props) {
  return (
    <div className="container-site pt-24 lg:pt-32 pb-14">
      <div className="flex flex-col md:flex-row md:items-start gap-10 lg:gap-16 max-w-4xl">

        {/* Logo */}
        <div className="flex-shrink-0 flex justify-center md:justify-start">
          <Image
            src="/logo-orange.svg"
            alt="Rodfestet"
            width={220}
            height={220}
            priority
            className="h-48 lg:h-64 w-auto opacity-90"
          />
        </div>

        {/* Tekst */}
        <div className="flex flex-col justify-center">
          <p className="text-[#cf4f00] text-xs font-sans tracking-[0.2em] uppercase mb-5">
            {label}
          </p>
          <h1 className="font-serif text-[#D9CCB3] text-h1 leading-tight text-balance mb-5">
            {title}
          </h1>
          {lead && (
            <p className="text-[#D9CCB3]/60 leading-relaxed text-balance max-w-md">
              {lead}
            </p>
          )}
        </div>

      </div>
    </div>
  )
}
