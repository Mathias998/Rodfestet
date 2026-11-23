import Image from 'next/image'

const photos = [
  { src: '/images/2059.jpg', alt: 'Mad fra Rodfestet' },
  { src: '/images/1932.jpg', alt: 'Mad fra Rodfestet' },
  { src: '/images/1369.jpg', alt: 'Mad fra Rodfestet' },
  { src: '/images/1726.jpg', alt: 'Mad fra Rodfestet' },
  { src: '/images/1620.jpg', alt: 'Mad fra Rodfestet' },
  { src: '/images/1338.jpg', alt: 'Mad fra Rodfestet' },
]

export function PhotoGallery() {
  return (
    <section className="bg-[#1a2e00] pb-14 lg:pb-20" aria-labelledby="galleri-overskrift">
      <div className="container-site">
        <p className="text-[#cf4f00] text-xs font-sans tracking-[0.2em] uppercase mb-4 text-center">
          Fra vores køkken
        </p>
        <h2 id="galleri-overskrift" className="font-serif text-[#D9CCB3] text-xl lg:text-2xl leading-tight text-center mb-10">
          Fra køkkenet til jeres bord
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {photos.map((p) => (
            <div key={p.src} className="relative aspect-square overflow-hidden">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
