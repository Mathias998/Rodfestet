import Link from 'next/link'
import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'rust' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

type BaseProps = {
  variant?: Variant
  size?: Size
  children: React.ReactNode
  className?: string
}

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never }

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type Props = ButtonProps | LinkProps

const variantClasses: Record<Variant, string> = {
  primary:   'bg-forest text-cream hover:bg-forest-800',
  secondary: 'border border-forest text-forest hover:bg-forest hover:text-cream',
  rust:      'bg-rust text-cream hover:bg-rust-600',
  ghost:     'text-forest underline underline-offset-4 hover:text-rust px-0',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-3.5 text-sm',
  lg: 'px-9 py-4 text-base',
}

const base =
  'inline-flex items-center justify-center gap-2 font-sans font-medium tracking-wide transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust'

export function Button({ variant = 'primary', size = 'md', children, className = '', href, ...rest }: Props) {
  const classes = [
    base,
    variantClasses[variant],
    variant !== 'ghost' ? sizeClasses[size] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <Link href={href} className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
