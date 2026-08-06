export type TestimonialCardId =
  | 'catarinaMonteiro'
  | 'anabelmoFeijo'
  | 'israelPedro'

export type TestimonialCardData = {
  id: TestimonialCardId
  name: string
  avatarSrc: string
  variant?: 'light' | 'dark'
}

export const testimonials: TestimonialCardData[] = [
  {
    id: 'catarinaMonteiro',
    name: 'Catarina Monteiro',
    avatarSrc: '/testimonials/avatar-1.png',
    variant: 'light',
  },
  {
    id: 'anabelmoFeijo',
    name: 'Anabelmo Feijó',
    avatarSrc: '/testimonials/avatar-2.png',
    variant: 'dark',
  },
  {
    id: 'israelPedro',
    name: 'Israel Pedro',
    avatarSrc: '/testimonials/avatar-3.png',
    variant: 'light',
  },
]
