export type InitiativeId =
  | 'treePlanting'
  | 'beachCleanup'
  | 'educationEvents'
  | 'parkCleaning'

export type Initiative = {
  id: InitiativeId
  image: string
}

export const initiatives: Initiative[] = [
  {
    id: 'treePlanting',
    image: 'https://picsum.photos/seed/ecoscrap-tree-planting/420/340',
  },
  {
    id: 'beachCleanup',
    image: 'https://picsum.photos/seed/ecoscrap-beach/420/340',
  },
  {
    id: 'educationEvents',
    image: 'https://picsum.photos/seed/ecoscrap-education/420/340',
  },
  {
    id: 'parkCleaning',
    image: 'https://picsum.photos/seed/ecoscrap-park/420/340',
  },
]
