import { createI18n } from 'vue-i18n'

import en from './locales/en'
import fr from './locales/fr'
import ko from './locales/ko'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en, fr, ko }
})

export default i18n
