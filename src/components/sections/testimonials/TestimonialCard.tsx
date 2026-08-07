import { forwardRef } from 'react'
import { useTranslation } from 'react-i18next'
import { type TestimonialCardData } from '@/data/testimonials'

export const TestimonialCard = forwardRef<HTMLDivElement, TestimonialCardData>(
  function TestimonialCard({ id, name, avatarSrc, variant = 'light' }, ref) {
    const { t } = useTranslation('home')
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
          alt={t('testimonials.starsAlt')}
          className="h-7 w-39"
        />

        <p
          className={`w-100 text-center text-xl leading-[1.5] ${
            isDark ? 'text-white' : 'text-ink-700'
          }`}
        >
          {t(`testimonials.items.${id}.quote`)}
        </p>

        <div className="flex items-start gap-3.25">
          <img
            src={avatarSrc}
            alt={t(`testimonials.items.${id}.avatarAlt`)}
            className="size-11 shrink-0 rounded-full object-cover"
          />
          <div className="flex flex-col items-start gap-1 text-base leading-[1.4]">
            <p className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>
              {name}
            </p>
            <p className={isDark ? 'text-ink-400' : 'text-ink-500'}>
              {t(`testimonials.items.${id}.role`)}
            </p>
          </div>
        </div>
      </div>
    )
  },
)
