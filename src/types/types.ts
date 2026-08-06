export interface TeamMember {
  /** Identificador único (usado como key do React) */
  id: string;
  /** Cargo exibido em destaque dentro do card, ex: "Frontend developer" */
  role: string;
  /** Caminho da imagem PNG da pessoa, SEM fundo (transparente) */
  imageSrc: string;
  /** Texto alternativo da imagem, para acessibilidade */
  imageAlt: string;
}