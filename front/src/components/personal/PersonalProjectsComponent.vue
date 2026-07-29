<template>
  <section id="personal-projects-section" class="py-16">
    <div class="max-w-5xl mx-auto">
      <SectionTitle title="Personal Projects" />

      <div
        v-for="project in projects"
        :key="project.title"
        class="pt-2 pb-4 flex flex-col gap-3 text-white sm:flex-row sm:items-start sm:justify-between"
      >
        <div>
          <span class="font-semibold">{{ project.title }}</span>
          <span class="mx-2 text-white/70" aria-hidden="true">|</span>
          <a
            :href="project.githubLink"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-light hover:underline"
          >
            {{ project.githubLabel }}
          </a>
          <template v-if="project.liveDemoLink">
            <span class="mx-2 text-white/70" aria-hidden="true">|</span>
            <a
              :href="project.liveDemoLink"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-light hover:underline"
            >
              {{ project.liveDemoLabel }}
            </a>
          </template>
          <p class="italic text-white/80">{{ project.text }}</p>
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
    projects() {
      return [
        {
          title: this.$t('PERSONAL_PROJECT_TITLE_0') as string,
          text: this.$t('PERSONAL_PROJECT_TEXT_0') as string,
          githubLabel: this.$t('PERSONAL_PROJECT_GITHUB_LABEL') as string,
          liveDemoLabel: this.$t('PERSONAL_PROJECT_LIVE_DEMO_LABEL') as string,
          githubLink: this.$t('PERSONAL_PROJECT_LINK_0') as string,
          liveDemoLink: this.$t('PERSONAL_PROJECT_DEMO_LINK_0') as string
        },
        {
          title: this.$t('PERSONAL_PROJECT_TITLE_1') as string,
          text: this.$t('PERSONAL_PROJECT_TEXT_1') as string,
          githubLabel: this.$t('PERSONAL_PROJECT_GITHUB_LABEL') as string,
          liveDemoLabel: '',
          githubLink: this.$t('PERSONAL_PROJECT_LINK_1') as string,
          liveDemoLink: ''
        }
      ]
    }
  }
})
</script>
