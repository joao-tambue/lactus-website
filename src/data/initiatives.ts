export type InitiativeId =
  | 'sustainableEnergy'
  | 'digitalHealth'
  | 'environmentalTech'
  | 'smartSystems'

export type Initiative = {
  id: InitiativeId
  image: string
}

export const initiatives: Initiative[] = [
  {
    id: 'sustainableEnergy',
    image: 'https://picsum.photos/seed/lactus-energy/420/340',
  },
  {
    id: 'digitalHealth',
    image: 'https://picsum.photos/seed/lactus-health/420/340',
  },
  {
    id: 'environmentalTech',
    image: 'https://picsum.photos/seed/lactus-environment/420/340',
  },
  {
    id: 'smartSystems',
    image: 'https://picsum.photos/seed/lactus-iot/420/340',
  },
]
