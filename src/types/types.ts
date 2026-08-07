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
  /** Identificador único (usado como key do React e nas chaves i18n) */
  id: TeamMemberId
  /** Nome da pessoa exibido em destaque dentro do card */
  name: string
  /** Caminho da imagem PNG da pessoa, SEM fundo (transparente) */
  imageSrc: string
}
