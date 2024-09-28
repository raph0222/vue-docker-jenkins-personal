<template>
  <section
    id="header-section"
    class="relative flex items-center justify-center overflow-hidden h-screen md:h-[700px]"
  >
    <AnimatedBackground />
    <div class="flex items-center justify-center">
      <div class="w-24 h-24 rounded-full overflow-hidden">
        <img src="/picture-raphael.jpg" alt="Profile picture" class="w-full h-full object-cover" />
      </div>
      <div class="ml-6 text-left">
        <h1 class="text-2xl font-bold">{{ userName }}</h1>
        <p class="text-lg">{{ userPosition }}</p>
      </div>
    </div>
  </section>
  <hr />
  <section id="contact-section">
    <div
      id="infos-perso"
      class="flex flex-col lg:flex-row lg:gap-6 justify-center mb-10 w-full max-w-screen-lg"
    >
      <p>&#127968; {{ userLocation }}</p>
      <p>
        <a class="hover:underline" :href="'mailto:' + MAIL">{{ MAIL }}</a>
      </p>
      <p><a class="hover:underline" :href="LINKEDIN_PROFILE" target="_blank">LinkedIn</a></p>
      <p><a class="hover:underline" :href="GITHUB_PROFILE" target="_blank">Github</a></p>
      <p><DownloadButton /></p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AnimatedBackground from '@/components/AnimatedBackground.vue'
import CONST from '@/constants/const'
import DownloadButton from '@/components/utils/DownloadButton.vue'

export default defineComponent({
  name: 'HeaderComponent',
  components: {
    AnimatedBackground,
    DownloadButton
  },
  computed: {
    userName() {
      return this.$t('USER_NAME')
    },
    userPosition() {
      return this.$t('USER_POSITION')
    },
    userLocation() {
      return this.$t('USER_LOCATION')
    }
  },
  data() {
    return {
      MAIL: CONST.MAIL,
      LINKEDIN_PROFILE: CONST.LINKEDIN_PROFILE,
      GITHUB_PROFILE: CONST.GITHUB_PROFILE
    }
  }
})
</script>

<style scoped></style>
