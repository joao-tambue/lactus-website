export type TestimonialCardId =
  | 'adilsonCamacho'
  | 'joaoRabiMendes'
  | 'joaoTambue'

export type TestimonialCardData = {
  id: TestimonialCardId
  name: string
  avatarSrc: string
  variant?: 'light' | 'dark'
}

export const testimonials: TestimonialCardData[] = [
  {
    id: 'adilsonCamacho',
    name: 'Adilson Camacho',
    avatarSrc: '/testimonials/avatar-1.png',
    variant: 'light',
  },
  {
    id: 'joaoRabiMendes',
    name: 'João Rabi Mendes',
    avatarSrc: '/testimonials/avatar-2.png',
    variant: 'dark',
  },
  {
    id: 'joaoTambue',
    name: 'João Tambue',
    avatarSrc: '/testimonials/avatar-3.png',
    variant: 'light',
  },
]
