import Link from 'next/link'
import { menuCategories } from '@/data/menus'

export function MenuTeaser() {
  const preview = menuCategories.slice(0, 3)

  return (
    <section className="bg-white py-16 lg:py-20 border-y border-forest/8">
      <div className="container-site">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-sans text-rust tracking-widest uppercase mb-3">Menu</p>
            <h2 className="font-serif text-forest text-h2 leading-tight">Et udvalg af vores retter</h2>
          </div>
          <Link href="/menuer" className="text-sm font-sans text-forest hover:text-rust transition-colors whitespace-nowrap shrink-0">
            Se alle menuer →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {preview.map((cat) => (
            <div key={cat.id} className="border border-forest/8 p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-0.5 h-5 bg-rust" aria-hidden="true" />
                <h3 className="font-serif text-forest text-lg">{cat.title}</h3>
              </div>
              <ul className="space-y-4">
                {cat.items.slice(0, 3).map((item) => (
                  <li key={item.name} className="border-b border-forest/6 pb-4 last:border-0 last:pb-0">
                    <p className="text-sm font-sans font-medium text-bark mb-0.5">{item.name}</p>
                    <p className="text-xs text-bark-light leading-relaxed">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-bark-light text-center">
          Alle menuer sammensættes i dialog med jer og tilpasses sæson og anledning.
        </p>

      </div>
    </section>
  )
}
