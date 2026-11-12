import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'

/**
 * primary   → fundos claros: pílula branca + círculo verde-floresta.
 * secondary → fundos escuros: pílula em contorno claro + círculo lima.
 */
export type CTAVariant = 'primary' | 'secondary'

type VariantProps = {
  label?: string
  variant?: CTAVariant
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps & {
    href: string
  }

const baseClasses = [
  'group relative inline-flex items-center rounded-full border p-0',
  'transition-[transform,background-color] duration-200 ease-out hover:scale-[1.01] active:scale-[0.98]',
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
].join(' ')

const variantClasses: Record<
  CTAVariant,
  { root: string; label: string; circle: string; arrow: string }
> = {
  primary: {
    root: 'border-line-200 bg-white focus-visible:ring-forest-950',
    label: 'text-ink-950',
    circle: 'bg-forest-950',
    arrow: 'text-white',
  },
  secondary: {
    root: 'border-white/30 bg-transparent hover:bg-white/10 focus-visible:ring-leaf-400 focus-visible:ring-offset-forest-950',
    label: 'text-white',
    circle: 'bg-leaf-400',
    arrow: 'text-forest-950',
  },
}

function rootClasses(variant: CTAVariant, className: string) {
  return `${baseClasses} ${variantClasses[variant].root} ${className}`
}

function CTAContent({ label, variant }: { label: string; variant: CTAVariant }) {
  const styles = variantClasses[variant]

  return (
    <>
      <span
        className={`px-6 pl-8 py-3.5 text-[14px] font-medium leading-none ${styles.label}`}
      >
        {label}
      </span>

      <span
        className={`absolute -right-7 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full ${styles.circle}`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className={`h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${styles.arrow}`}
        >
          <path
            d="M7 17L17 7"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 7H17V15"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </>
  )
}

export function CTAButton({
  label,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const { t } = useTranslation('common')

  return (
    <button
      type="button"
      className={rootClasses(variant, className)}
      {...props}
    >
      <CTAContent label={label ?? t('cta.getStarted')} variant={variant} />
    </button>
  )
}

/** Mesmo visual do CTAButton, mas como link (âncoras, mailto, páginas). */
export function CTALink({
  label,
  variant = 'primary',
  className = '',
  ...props
}: LinkProps) {
  const { t } = useTranslation('common')

  return (
    <a className={rootClasses(variant, className)} {...props}>
      <CTAContent label={label ?? t('cta.getStarted')} variant={variant} />
    </a>
  )
}
