import type { InitiativeId } from '@/data/initiatives'

/** Liga cada área à sua página (/areas/<slug>) e aos conteúdos visuais. */
export type Area = {
  id: InitiativeId
  slug: string
  image: string
  /** Foto em alta resolução para o fundo do hero da página */
  heroImage: string
  /** object-position: afasta o motivo da foto do texto (que fica à esquerda) */
  heroPosition: string
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
    heroImage: '/initiatives/energy-hero.jpg',
    heroPosition: '50% 60%',
    highlightLink: { to: '/', hash: 'lumi' },
    highlightImage: '/vaso.jpeg',
  },
  {
    id: 'digitalHealth',
    slug: 'saude-digital',
    image: '/initiatives/health.jpg',
    heroImage: '/initiatives/health-hero.jpg',
    heroPosition: '75% 35%',
    highlightLink: { to: '/sobre' },
  },
  {
    id: 'environmentalTech',
    slug: 'tecnologias-ambientais',
    image: '/initiatives/environment.jpg',
    heroImage: '/initiatives/environment-hero.jpg',
    heroPosition: '70% 50%',
    highlightLink: { to: '/', hash: 'lumi' },
  },
  {
    id: 'smartSystems',
    slug: 'sistemas-inteligentes',
    image: '/initiatives/iot.jpg',
    heroImage: '/initiatives/iot-hero.jpg',
    heroPosition: '65% 50%',
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
