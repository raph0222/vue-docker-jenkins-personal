import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('languageStore', {
  state: () => ({
    currentLanguage: 'en'
  }),
  actions: {
    setLanguage(language: string) {
      this.currentLanguage = language
    },
    isKorean() {
      return this.currentLanguage === 'ko'
    }
  }
})
