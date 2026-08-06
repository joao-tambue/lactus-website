export type WorldCleanerCardId =
  | 'protectAnimals'
  | 'cleanupEnvironment'
  | 'protectAndCleanup'

export type WorldCleanerCardVariant = 'neutral' | 'lime'

export type WorldCleanerCardData = {
  id: WorldCleanerCardId
  photo: { src: string }
  variant?: WorldCleanerCardVariant
}

export const worldCleanerCards: WorldCleanerCardData[] = [
  {
    id: 'protectAnimals',
    photo: { src: '/world-cleaner/card1-photos.png' },
    variant: 'neutral',
  },
  {
    id: 'cleanupEnvironment',
    photo: { src: '/world-cleaner/card2-photos.png' },
    variant: 'lime',
  },
  {
    id: 'protectAndCleanup',
    photo: { src: '/world-cleaner/card3-photos.png' },
    variant: 'neutral',
  },
]
