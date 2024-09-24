<template>
  <div class="flex justify-end space-x-2">
    <button
      v-for="language in languages"
      :key="language"
      @click="changeLanguage(language)"
      class="p-1 cursor-pointer border-none rounded bg-transparent">
      <img :src="getLanguageImage(language)" :alt="language.toUpperCase()" class="w-8 h-auto" />
    </button>
  </div>
</template>

<script lang="ts">
import { useLanguageStore } from '@/stores/useLanguageStore'
import { useI18n } from 'vue-i18n'
import { defineComponent } from 'vue'
import type { Ref } from 'vue'

export default defineComponent({
  name: 'LanguageComponent',
  // Composition API style for this component
  setup() {
    const { locale }: { locale: Ref<string> } = useI18n()
    const languageStore = useLanguageStore()
    const languages: string[] = ['en', 'fr', 'ko']

    function changeLanguage(lang: string): void {
      locale.value = lang
      languageStore.setLanguage(lang)
    }

    function getLanguageImage(lang: string): string {
      return `/images/languages/${lang}.png`
    }

    return {
      languages,
      changeLanguage,
      getLanguageImage,
    }
  }
})
</script>
