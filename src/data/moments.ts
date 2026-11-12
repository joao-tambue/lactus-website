export type MomentId = 'development' | 'exhibition' | 'testing'

export type Moment = {
  id: MomentId
  src: string
  /** Altura no desktop: cria o ritmo escalonado da faixa */
  heightClass: string
  /** Velocidade do parallax (desktop): cada foto anda a um ritmo diferente */
  parallax: number
}

// TODO: trocar pelas fotos originais do projeto Lactus (estão no storage Manus:
// lumi-working-prototype, lumi-exhibition, lumi-development).
export const moments: Moment[] = [
  { id: 'development', src: '/hero/sobre-ft.jpeg', heightClass: 'lg:h-96', parallax: 0.18 },
  { id: 'exhibition', src: '/hero/mom.jpeg', heightClass: 'lg:h-80', parallax: -0.08 },
  { id: 'testing', src: '/vaso.jpeg', heightClass: 'lg:h-[26rem]', parallax: 0.3 },
]
