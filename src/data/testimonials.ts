export type TestimonialCardId =
  | 'martaFernandes'
  | 'domingosMateus'
  | 'paulaSebastiao'

export type TestimonialCardData = {
  id: TestimonialCardId
  name: string
  avatarSrc: string
  variant?: 'light' | 'dark'
}

export const testimonials: TestimonialCardData[] = [
  {
    id: 'martaFernandes',
    name: 'Marta Fernandes',
    avatarSrc: '/testimonials/avatar-1.png',
    variant: 'light',
  },
  {
    id: 'domingosMateus',
    name: 'Domingos Mateus',
    avatarSrc: '/testimonials/avatar-2.png',
    variant: 'dark',
  },
  {
    id: 'paulaSebastiao',
    name: 'Paula Sebastião',
    avatarSrc: '/testimonials/avatar-3.png',
    variant: 'light',
  },
]
