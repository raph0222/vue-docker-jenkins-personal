<template>
  <section id="personal-projects-section" class="py-16">
    <div class="max-w-5xl mx-auto">
      <SectionTitle title="Personal Projects" />

      <div
        class="pt-2 flex flex-col gap-3 text-white sm:flex-row sm:items-start sm:justify-between"
      >
        <div>
          <span class="font-semibold">{{ project0.title }}</span>
          <span class="mx-2 text-white/70" aria-hidden="true">|</span>
          <a
            :href="project0.githubLink"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-light hover:underline"
          >
            {{ project0.githubLabel }}
          </a>
          <span class="mx-2 text-white/70" aria-hidden="true">|</span>
          <a
            :href="project0.liveDemoLink"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-light hover:underline"
          >
            {{ project0.liveDemoLabel }}
          </a>
          <p class="italic text-white/80">{{ project0.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SectionTitle from '@/components/common/SectionTitle.vue'

export default defineComponent({
  name: 'PersonalProjectsComponent',
  components: {
    SectionTitle
  },
  computed: {
    project0() {
      return {
        title: this.$t('PERSONAL_PROJECT_TITLE_0') as string,
        text: this.$t('PERSONAL_PROJECT_TEXT_0') as string,
        githubLabel: this.$t('PERSONAL_PROJECT_GITHUB_LABEL') as string,
        liveDemoLabel: this.$t('PERSONAL_PROJECT_LIVE_DEMO_LABEL') as string,
        githubLink: this.$t('PERSONAL_PROJECT_LINK_0') as string,
        liveDemoLink: this.$t('PERSONAL_PROJECT_DEMO_LINK_0') as string
      }
    }
  }
})
</script>
