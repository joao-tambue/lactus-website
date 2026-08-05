export function LogoMark({ className = '' }: { className?: string }) {
  // Pinwheel/flower mark made of 6 overlapping petal ellipses
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

export function GlobeIcon({ className = '' }: { className?: string }) {
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

export function ChevronDownIcon({ className = '' }: { className?: string }) {
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

export function SearchIcon({ className = '' }: { className?: string }) {
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

export function MenuIcon({ className = '' }: { className?: string }) {
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

export function CloseIcon({ className = '' }: { className?: string }) {
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