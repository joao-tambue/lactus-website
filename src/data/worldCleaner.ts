export type WorldCleanerCardId = 'innovation' | 'sustainability' | 'socialImpact'

export type WorldCleanerCardVariant = 'neutral' | 'lime'

export type WorldCleanerCardData = {
  id: WorldCleanerCardId
  /** `position` = object-position, para enquadrar o detalhe certo da foto */
  photo: { src: string; position: string }
  variant?: WorldCleanerCardVariant
}

export const worldCleanerCards: WorldCleanerCardData[] = [
  {
    id: 'innovation',
    // Protótipo do Lumi com o LED aceso
    photo: { src: '/vaso.jpeg', position: '50% 55%' },
    variant: 'neutral',
  },
  {
    id: 'sustainability',
    // A planta na mesa de trabalho da equipa
    photo: { src: '/hero/sobre-ft.jpeg', position: '72% 62%' },
    variant: 'lime',
  },
  {
    id: 'socialImpact',
    // Equipa no Desafio Genial — Geração Digital
    photo: { src: '/hero/team-desafio.jpeg', position: '50% 48%' },
    variant: 'neutral',
  },
]
