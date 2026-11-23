import Link from 'next/link'
import { menuCategories } from '@/data/menus'

export function MenuHighlight() {
  return (
    <section className="bg-forest py-14 lg:py-16">
      <div className="container-site">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-sans text-rust tracking-widest uppercase mb-3">Vores menuer</p>
            <h2 className="font-serif text-cream-50 text-h2 leading-tight">
              Sæsonens bedste på bordet
            </h2>
          </div>
          <Link
            href="/menuer"
            className="text-sm font-sans text-cream-100/60 hover:text-cream-50 transition-colors whitespace-nowrap shrink-0"
          >
            Se alle menuer →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
          {menuCategories.map((cat) => (
            <Link
              key={cat.id}
              href="/menuer"
              className="group border border-cream-100/10 hover:border-rust/40 bg-cream-100/5 hover:bg-cream-100/8 p-5 transition-all duration-200"
            >
              <div className="w-0.5 h-4 bg-rust mb-3" aria-hidden="true" />
              <h3 className="font-serif text-cream-50 text-base mb-1.5 group-hover:text-rust transition-colors">
                {cat.title}
              </h3>
              <p className="text-xs text-cream-100/45 leading-relaxed">
                {cat.items.length} retter
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
