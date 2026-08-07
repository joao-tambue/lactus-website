export type FloatingImageId = 'planting' | 'foliage' | 'recycling'

export type FloatingImage = {
  id: FloatingImageId
  src: string
  className: string
}

export const floatingImages: FloatingImage[] = [
  {
    id: 'planting',
    src: 'https://picsum.photos/seed/ecoscrap-sapling/160/160',
    className: 'left-[10%] top-[95%] hidden lg:block',
  },
  {
    id: 'foliage',
    src: 'https://picsum.photos/seed/ecoscrap-greenery/160/160',
    className: 'right-[1%] top-[65%] hidden lg:block',
  },
  {
    id: 'recycling',
    src: 'https://picsum.photos/seed/ecoscrap-recycle/160/160',
    className: 'right-[10%] top-[95%] hidden lg:block',
  },
]

export type GalleryImageAltKey = 'bottles' | 'family' | 'volunteers'

export type GalleryImageItem = {
  type: 'image'
  src: string
  altKey: GalleryImageAltKey
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
    altKey: 'bottles',
    tall: false,
  },
  {
    type: 'image',
    src: '/meio.png',
    altKey: 'family',
    tall: true,
  },
  {
    type: 'image',
    src: '/direita.png',
    altKey: 'volunteers',
    tall: false,
  },
  { type: 'badge' },
]
