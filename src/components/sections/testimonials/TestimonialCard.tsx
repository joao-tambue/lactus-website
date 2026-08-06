import { forwardRef } from 'react'
import { type TestimonialCardData } from '@/data/testimonials'

export const TestimonialCard = forwardRef<HTMLDivElement, TestimonialCardData>(
  function TestimonialCard(
    { quote, name, role, avatarSrc, avatarAlt, variant = 'light' },
    ref,
  ) {
    const isDark = variant === 'dark'

    return (
      <div
        ref={ref}
        className={`flex h-88.25 w-150 shrink-0 snap-center flex-col items-center gap-8 rounded-[17px] px-25 py-11 ${
          isDark ? 'bg-forest-950' : 'bg-mist-100'
        }`}
      >
        <img
          src="/testimonials/stars.svg"
          alt="Avaliação de 5 estrelas"
          className="h-7 w-39"
        />

        <p
          className={`w-100 text-center text-xl leading-[1.5] ${
            isDark ? 'text-white' : 'text-ink-700'
          }`}
        >
          {quote}
        </p>

        <div className="flex items-start gap-3.25">
          <img
            src={avatarSrc}
            alt={avatarAlt}
            className="size-11 shrink-0 rounded-full object-cover"
          />
          <div className="flex flex-col items-start gap-1 text-base leading-[1.4]">
            <p className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>
              {name}
            </p>
            <p className={isDark ? 'text-ink-400' : 'text-ink-500'}>{role}</p>
          </div>
        </div>
      </div>
    )
  },
)
