export type TestimonialCardData = {
  quote: string
  name: string
  role: string
  avatarSrc: string
  avatarAlt: string
  variant?: 'light' | 'dark'
}

export const testimonials: TestimonialCardData[] = [
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
