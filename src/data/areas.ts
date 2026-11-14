import type { InitiativeId } from '@/data/initiatives'

/** Liga cada área à sua página (/areas/<slug>) e aos conteúdos visuais. */
export type Area = {
  id: InitiativeId
  slug: string
  image: string
  /** Para onde aponta o botão do bloco de destaque */
  highlightLink: { to: '/' | '/sobre'; hash?: string }
  /** Foto real do destaque, quando existe */
  highlightImage?: string
}

export const areas: Area[] = [
  {
    id: 'sustainableEnergy',
    slug: 'energia-sustentavel',
    image: '/initiatives/energy.jpg',
    highlightLink: { to: '/', hash: 'lumi' },
    highlightImage: '/vaso.jpeg',
  },
  {
    id: 'digitalHealth',
    slug: 'saude-digital',
    image: '/initiatives/health.jpg',
    highlightLink: { to: '/sobre' },
  },
  {
    id: 'environmentalTech',
    slug: 'tecnologias-ambientais',
    image: '/initiatives/environment.jpg',
    highlightLink: { to: '/', hash: 'lumi' },
  },
  {
    id: 'smartSystems',
    slug: 'sistemas-inteligentes',
    image: '/initiatives/iot.jpg',
    highlightLink: { to: '/', hash: 'team' },
  },
]

export function getAreaBySlug(slug: string) {
  return areas.find((area) => area.slug === slug)
}

export function getAreaById(id: InitiativeId) {
  return areas.find((area) => area.id === id)
}

const slugs = Object.fromEntries(areas.map((area) => [area.id, area.slug])) as Record<
  InitiativeId,
  string
>

/** Slug da página de uma área (/areas/<slug>) */
export function areaSlug(id: InitiativeId) {
  return slugs[id]
}
