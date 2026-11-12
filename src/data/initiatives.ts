export type InitiativeId =
  | 'sustainableEnergy'
  | 'digitalHealth'
  | 'environmentalTech'
  | 'smartSystems'

export type Initiative = {
  id: InitiativeId
  image: string
}

// Fotos do Unsplash (Unsplash License: uso gratuito, incluindo comercial).
// IDs de origem: energy 1509391366360, health 1576091160399,
// environment 1590682680695, iot 1631378297854.
export const initiatives: Initiative[] = [
  { id: 'sustainableEnergy', image: '/initiatives/energy.jpg' },
  { id: 'digitalHealth', image: '/initiatives/health.jpg' },
  { id: 'environmentalTech', image: '/initiatives/environment.jpg' },
  { id: 'smartSystems', image: '/initiatives/iot.jpg' },
]
