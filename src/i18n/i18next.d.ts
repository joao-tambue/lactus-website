import 'i18next'
import { common as enCommon } from '@/i18n/locales/en/common'
import { home as enHome } from '@/i18n/locales/en/home'

type AppResources = {
  common: typeof enCommon
  home: typeof enHome
}

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common'
    enableSelector: false
    resources: AppResources
  }
}

export {}
