<template>
  <section id="personal-projects-section" class="py-16">
    <div class="max-w-5xl mx-auto space-y-6">
      <div class="space-y-2">
        <p class="text-xl uppercase tracking-[0.35em] font-semibold text-white">
          Personal Projects
        </p>
      </div>

      <div
        class="flex flex-col gap-3 border-t border-white/30 pt-2 text-white sm:flex-row sm:items-start sm:justify-between"
      >
        <div>
          <a
            :href="project0.link"
            target="_blank"
            rel="noopener noreferrer"
            class="font-semibold hover:text-blue-light transition-colors"
          >
            {{ project0.title }}
          </a>
          <p class="italic text-white/80">{{ project0.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PersonalProjectsComponent',
  computed: {
    project0() {
      return {
        title: this.$t('PERSONAL_PROJECT_TITLE_0') as string,
        text: this.$t('PERSONAL_PROJECT_TEXT_0') as string,
        linkLabel: this.$t('PERSONAL_PROJECT_LINK_LABEL_0') as string,
        link: this.$t('PERSONAL_PROJECT_LINK_0') as string
      }
    }
  }
})
</script>
