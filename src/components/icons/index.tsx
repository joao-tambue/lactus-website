type IconProps = { className?: string }

export function LogoMark({ className = '' }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <g fill="#6FD11B">
        <ellipse
          cx="16"
          cy="9"
          rx="4.4"
          ry="6.2"
          transform="rotate(0 16 16)"
        />
        <ellipse
          cx="16"
          cy="9"
          rx="4.4"
          ry="6.2"
          transform="rotate(60 16 16)"
        />
        <ellipse
          cx="16"
          cy="9"
          rx="4.4"
          ry="6.2"
          transform="rotate(120 16 16)"
        />
        <ellipse
          cx="16"
          cy="9"
          rx="4.4"
          ry="6.2"
          transform="rotate(180 16 16)"
        />
        <ellipse
          cx="16"
          cy="9"
          rx="4.4"
          ry="6.2"
          transform="rotate(240 16 16)"
        />
        <ellipse
          cx="16"
          cy="9"
          rx="4.4"
          ry="6.2"
          transform="rotate(300 16 16)"
        />
      </g>
      <circle cx="16" cy="16" r="3" fill="#0B3B23" />
    </svg>
  )
}

export function StarIcon({ className = '' }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2c.4 3.6 1.2 6 2.8 7.6C16.4 11.2 18.8 12 22 12c-3.2 0-5.6.8-7.2 2.4C13.2 16 12.4 18.4 12 22c-.4-3.6-1.2-6-2.8-7.6C7.6 12.8 5.2 12 2 12c3.2 0 5.6-.8 7.2-2.4C10.8 8 11.6 5.6 12 2Z" />
    </svg>
  )
}

export function ArrowUpRightIcon({ className = '' }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  )
}

export function GlobeIcon({ className = '' }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.5 3.8 5.6 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.6-3.8-9S9.5 5.5 12 3Z" />
    </svg>
  )
}

export function ChevronDownIcon({ className = '' }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export function SearchIcon({ className = '' }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

export function MenuIcon({ className = '' }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  )
}

export function CloseIcon({ className = '' }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
