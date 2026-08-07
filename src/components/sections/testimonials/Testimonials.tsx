import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { TestimonialCard } from './TestimonialCard'
import { testimonials } from '@/data/testimonials'

export function Testimonials() {
  const { t } = useTranslation('home')
  const activeCardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    activeCardRef.current?.scrollIntoView({
      inline: 'center',
      block: 'nearest',
    })
  }, [])

  return (
    <section className="overflow-hidden py-20 lg:py-28">
      <h2 className="mx-auto max-w-134.25 text-balance text-center text-[48px] font-semibold leading-[1.2] text-black">
        {t('testimonials.title')}
      </h2>

      <div className="mt-20 flex snap-x snap-mandatory justify-center gap-6 overflow-x-auto px-6 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            ref={testimonial.variant === 'dark' ? activeCardRef : undefined}
            {...testimonial}
          />
        ))}
      </div>
    </section>
  )
}
