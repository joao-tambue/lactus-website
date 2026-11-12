import type { Icon } from '@phosphor-icons/react'
import { ChartLineUp, Flask, Lightning, Wrench } from '@phosphor-icons/react'

export type ServiceId =
  | 'customSolutions'
  | 'implementation'
  | 'monitoring'
  | 'pilots'

export type ServiceVariant = 'dark' | 'neutral' | 'lime'

export type Service = {
  id: ServiceId
  Icon: Icon
  variant: ServiceVariant
}

export const services: Service[] = [
  { id: 'customSolutions', Icon: Lightning, variant: 'dark' },
  { id: 'implementation', Icon: Wrench, variant: 'neutral' },
  { id: 'monitoring', Icon: ChartLineUp, variant: 'neutral' },
  { id: 'pilots', Icon: Flask, variant: 'lime' },
]
