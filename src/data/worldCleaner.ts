export type WorldCleanerCardVariant = 'neutral' | 'lime'

export type WorldCleanerCardData = {
  title: string
  description: string
  photo: { src: string; alt: string }
  variant?: WorldCleanerCardVariant
}

export const worldCleanerCards: WorldCleanerCardData[] = [
  {
    title: 'Protect Our Animal',
    description:
      'Energy efficiency gains to 80% compared traditional lighting system.',
    photo: {
      src: '/world-cleaner/card1-photos.png',
      alt: 'Cabras e uma vaca junto a resíduos numa zona rural',
    },
    variant: 'neutral',
  },
  {
    title: 'Cleanup The Environment',
    description:
      'Energy efficiency gains to 80% compared traditional lighting system.',
    photo: {
      src: '/world-cleaner/card2-photos.png',
      alt: 'Montanha nevada e rebanho de ovelhas num campo verde',
    },
    variant: 'lime',
  },
  {
    title: 'Protect & Cleanup The Environment',
    description:
      'Energy efficiency gains to 80% compared traditional lighting system.',
    photo: {
      src: '/world-cleaner/card3-photos.png',
      alt: 'Pessoa de braços abertos junto a um campo de girassóis',
    },
    variant: 'neutral',
  },
]
