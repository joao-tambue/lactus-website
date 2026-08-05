export type FloatingImage = {
  src: string
  alt: string
  className: string
}

export const floatingImages: FloatingImage[] = [
  {
    src: 'https://picsum.photos/seed/ecoscrap-sapling/160/160',
    alt: 'Voluntário a plantar uma árvore jovem',
    className: 'left-[10%] top-[95%] hidden lg:block',
  },
  {
    src: 'https://picsum.photos/seed/ecoscrap-greenery/160/160',
    alt: 'Pessoa a colher folhagem verde',
    className: 'right-[1%] top-[65%] hidden lg:block',
  },
  {
    src: 'https://picsum.photos/seed/ecoscrap-recycle/160/160',
    alt: 'Voluntários a recolher resíduos recicláveis',
    className: 'right-[10%] top-[95%] hidden lg:block',
  },
]

export type GalleryImageItem = {
  type: 'image'
  src: string
  alt: string
  tall: boolean
}

export type GalleryItem =
  | { type: 'card' }
  | GalleryImageItem
  | { type: 'badge' }

export const galleryItems: GalleryItem[] = [
  { type: 'card' },
  {
    type: 'image',
    src: '/esquerda.png',
    alt: 'Garrafas de plástico recolhidas na relva',
    tall: false,
  },
  {
    type: 'image',
    src: '/meio.png',
    alt: 'Família a plantar uma árvore juntos',
    tall: true,
  },
  {
    type: 'image',
    src: '/direita.png',
    alt: 'Grupo de voluntários a limpar um parque',
    tall: false,
  },
  { type: 'badge' },
]
