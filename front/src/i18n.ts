import { createI18n } from 'vue-i18n'

import en from './locales/en'
import ko from './locales/ko'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en, ko }
})

export default i18n
