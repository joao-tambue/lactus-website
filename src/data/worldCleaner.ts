export type WorldCleanerCardId = 'innovation' | 'sustainability' | 'socialImpact'

export type WorldCleanerCardVariant = 'neutral' | 'lime'

export type WorldCleanerCardData = {
  id: WorldCleanerCardId
  photo: { src: string }
  variant?: WorldCleanerCardVariant
}

export const worldCleanerCards: WorldCleanerCardData[] = [
  {
    id: 'innovation',
    photo: { src: '/world-cleaner/card1-photos.png' },
    variant: 'neutral',
  },
  {
    id: 'sustainability',
    photo: { src: '/world-cleaner/card2-photos.png' },
    variant: 'lime',
  },
  {
    id: 'socialImpact',
    photo: { src: '/world-cleaner/card3-photos.png' },
    variant: 'neutral',
  },
]
