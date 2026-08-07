export type TeamMemberId =
  | 'anabelmoFeijo'
  | 'israelPedro'
  | 'catarinaMonteiro'
  | 'joaoTambue'
  | 'leriaBumba'
  | 'luisaTimoteo'
  | 'pauloSanguli'
  | 'lourencoCardoso'

export interface TeamMember {
  id: TeamMemberId
  name: string
  imageSrc: string
}
