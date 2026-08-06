import { useEffect, useRef } from 'react'
import { TestimonialCard, type TestimonialCardData } from './TestimonialCard'

const testimonials: TestimonialCardData[] = [
  {
    quote:
      '"I found the copywriting tool to be incredibly helpful in streamlining my writing process. It saved me time and helped me come up with more compelling copy."',
    name: 'Mikaily Garayev',
    role: 'Product Designer',
    avatarSrc: '/testimonials/avatar-1.png',
    avatarAlt: 'Retrato de Mikaily Garayev',
    variant: 'light',
  },
  {
    quote:
      '"I found the copywriting tool to be incredibly helpful in streamlining my writing process. It saved me time and helped me come up with more compelling copy."',
    name: 'Mikaily Garayev',
    role: 'Product Designer',
    avatarSrc: '/testimonials/avatar-2.png',
    avatarAlt: 'Retrato de Mikaily Garayev',
    variant: 'dark',
  },
  {
    quote:
      '"Using the copywriting ai tool helped me improve my writing skills by showing me where I could improve and offering give me suggestions for how to do so.',
    name: 'Mikaily Garayev',
    role: 'UX Designer',
    avatarSrc: '/testimonials/avatar-3.png',
    avatarAlt: 'Retrato de Mikaily Garayev',
    variant: 'light',
  },
]

export function Testimonials() {
  const activeCardRef = useRef<HTMLDivElement>(null)

  // Matches the Figma frame's default state: the row overflows the viewport
  // symmetrically with the featured (dark) card centered — so bring it into
  // view on mount instead of leaving the scroll pinned to the left edge.
  useEffect(() => {
    activeCardRef.current?.scrollIntoView({
      inline: 'center',
      block: 'nearest',
    })
  }, [])

  return (
    <section className="overflow-hidden py-20 lg:py-28">
      <h2 className="mx-auto max-w-134.25 text-balance text-center text-[48px] font-semibold leading-[1.2] text-black">
        Get to Know What Our Clients Think
      </h2>

      <div className="mt-20 flex snap-x snap-mandatory justify-center gap-6 overflow-x-auto px-6 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.name}-${index}`}
            ref={testimonial.variant === 'dark' ? activeCardRef : undefined}
            {...testimonial}
          />
        ))}
      </div>
    </section>
  )
}
