export type MomentId = 'development' | 'exhibition' | 'testing'

export type Moment = {
  id: MomentId
  src: string
  /** Altura no desktop: cria o ritmo escalonado da faixa */
  heightClass: string
}

// TODO: trocar pelas fotos originais do projeto Lactus (estão no storage Manus:
// lumi-working-prototype, lumi-exhibition, lumi-development).
export const moments: Moment[] = [
  { id: 'development', src: '/hero/sobre-ft.jpeg', heightClass: 'lg:h-96' },
  { id: 'exhibition', src: '/hero/mom.jpeg', heightClass: 'lg:h-80' },
  { id: 'testing', src: '/vaso.jpeg', heightClass: 'lg:h-[26rem]' },
]
