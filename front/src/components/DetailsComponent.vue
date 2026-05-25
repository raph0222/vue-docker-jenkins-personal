<template>
  <section id="details-section" class="">
    <div class="space-y-6 text-base leading-relaxed text-justify">
      <p class="font-medium">
        {{ bioIntro }}
      </p>

      <p>
        {{ bioExpertise }}
      </p>

      <ul class="space-y-1 list-disc pl-5">
        <li v-for="item in bioBulletItems" :key="item.key">
          <span class="font-semibold">{{ item.label }}<span v-if="item.detail">:</span></span>
          <span class="ml-1">{{ item.detail }}</span>
        </li>
      </ul>

      <p>
        {{ bioConclusion }}
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const BIO_BULLET_KEYS = [
  'BIO_TEXT_BULLET_1',
  'BIO_TEXT_BULLET_2',
  'BIO_TEXT_BULLET_3',
  'BIO_TEXT_BULLET_4',
  'BIO_TEXT_BULLET_5',
  'BIO_TEXT_BULLET_6'
] as const

export default defineComponent({
  name: 'DetailsComponent',
  computed: {
    bioIntro(): string {
      return this.$t('BIO_TEXT_INTRO') as string
    },
    bioExpertise(): string {
      return this.$t('BIO_TEXT_EXPERTISE') as string
    },
    bioBulletItems(): Array<{ key: string; label: string; detail: string }> {
      return BIO_BULLET_KEYS.reduce<Array<{ key: string; label: string; detail: string }>>(
        (items, key) => {
          const raw = ((this.$t(key) as string) || '').trim()

          if (!raw || raw === key) {
            return items
          }

          let label = ''
          let detail = ''

          if (raw.includes(':')) {
            const [labelPart, ...rest] = raw.split(':')
            label = labelPart.trim()
            detail = rest.join(':').trim()
          } else {
            const [firstWord, ...restWords] = raw.split(/\s+/)
            label = firstWord?.trim() ?? ''
            detail = restWords.join(' ').trim()
          }

          items.push({
            key,
            label,
            detail
          })

          return items
        },
        []
      )
    },
    bioConclusion(): string {
      return this.$t('BIO_TEXT_CONCLUSION') as string
    }
  }
})
</script>
