<template>
  <section id="education-section">
    <div class="max-w-5xl mx-auto">
      <SectionTitle :title="educationTitle" />

      <div
        class="pt-2 flex flex-col gap-3 text-white sm:flex-row sm:items-start sm:justify-between"
      >
        <div>
          <p class="font-semibold">{{ educationSchool }}</p>
          <p class="italic text-white/80">{{ educationDegree }}</p>
        </div>
        <div class="text-white/80 sm:text-right">
          <p class="font-semibold text-white">{{ educationLocation }}</p>
          <p class="italic">{{ educationGradLabel }} {{ educationGradYear }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SectionTitle from '@/components/common/SectionTitle.vue'

export default defineComponent({
  name: 'EducationComponent',
  components: {
    SectionTitle
  },
  computed: {
    educationTitle(): string {
      return this.$t('EDUCATION_TITLE') as string
    },
    educationSchool(): string {
      return this.$t('EDUCATION_SCHOOL') as string
    },
    educationDegree(): string {
      return this.$t('EDUCATION_DEGREE') as string
    },
    educationLocation(): string {
      return this.$t('EDUCATION_LOCATION') as string
    },
    educationGradLabel(): string {
      return this.$t('EDUCATION_GRAD_LABEL') as string
    },
    educationGradYear(): string {
      return this.$t('EDUCATION_GRAD_YEAR') as string
    }
  }
})
</script>
