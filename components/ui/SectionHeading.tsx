type Props = {
  id?: string
  label?: string        // Lille overetikette (vist i rust)
  title: string
  lead?: string         // Manchettekst under overskriften
  centered?: boolean
  className?: string
}

export function SectionHeading({ id, label, title, lead, centered = false, className = '' }: Props) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {label && (
        <p className="text-rust font-sans text-sm font-medium tracking-widest uppercase mb-3">
          {label}
        </p>
      )}
      <h2 id={id} className="text-h2 font-serif text-forest heading-rule after:mx-auto" style={centered ? { '--tw-content': '""' } as React.CSSProperties : undefined}>
        {title}
      </h2>
      {lead && (
        <p className="mt-5 text-lead text-bark-light max-w-2xl text-balance" style={centered ? { margin: '1.25rem auto 0' } : undefined}>
          {lead}
        </p>
      )}
    </div>
  )
}
