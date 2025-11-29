<template>
  <div class="flex justify-end space-x-2">
    <button
      v-for="language in languages"
      :key="language"
      @click="changeLanguage(language)"
      class="px-3 py-1 text-xs tracking-[0.3em] uppercase transition rounded text-white/90 hover:text-white"
      :class="{
        'text-white font-bold': locale === language
      }"
    >
      {{ language.toUpperCase() }}
    </button>
  </div>
</template>

<script lang="ts">
import { useLanguageStore } from '@/stores/useLanguageStore'
import { useI18n } from 'vue-i18n'
import { defineComponent, onMounted } from 'vue'
import type { Ref } from 'vue'

export default defineComponent({
  name: 'LanguageComponent',
  // Composition API style for this component
  setup() {
    const { locale }: { locale: Ref<string> } = useI18n()
    const languageStore = useLanguageStore()
    const languages: string[] = ['en', 'fr', 'ko']
    const defaultLanguage = languages[0]

    onMounted(() => {
      const currentLocale = locale.value || defaultLanguage
      const normalizedLocale = languages.includes(currentLocale) ? currentLocale : defaultLanguage

      locale.value = normalizedLocale
      languageStore.setLanguage(normalizedLocale)
    })

    function changeLanguage(lang: string): void {
      locale.value = lang
      languageStore.setLanguage(lang)
    }

    return {
      languages,
      changeLanguage,
      locale
    }
  }
})
</script>
