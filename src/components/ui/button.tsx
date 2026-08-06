import type { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string
}

export function CTAButton({
  label = 'Get Started',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={[
        'relative inline-flex items-center rounded-full border border-line-200 bg-white',
        'p-0 transition-transform duration-200 ease-out hover:scale-[1.01] active:scale-[0.98]',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-950 focus-visible:ring-offset-2',
        className,
      ].join(' ')}
      {...props}
    >
      <span className="px-6 pl-8 py-3.5 text-[14px] font-medium leading-none text-ink-950">
        {label}
      </span>

      <span className="absolute -right-7 top-0 flex h-11 w-11 items-center justify-center rounded-full bg-forest-950">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="h-4 w-4 text-white"
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
    </button>
  )
}
