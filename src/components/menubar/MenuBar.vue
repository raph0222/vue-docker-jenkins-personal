<template>
  <!-- default -->
  <div class="hidden lg:flex fixed top-0 right-0 h-full min-w-[300px] bg-black text-white flex-col text-right">
    <nav>
      <ul class="flex flex-col">
        <li><TitleMenuBar title="Contact" sectionRef="#contact-section"/></li>
        <li><TitleMenuBar title="Bio" sectionRef="#details-section"/></li>
        <li><TitleMenuBar title="Experience" sectionRef="#experience-section"/></li>
        <li><TitleMenuBar title="Stack" sectionRef="#stack-section"/></li>
      </ul>
    </nav>
  </div>

  <!-- mobile -->
  <div class="flex lg:hidden fixed bottom-0 left-0 right-0 bg-black text-white z-50">
    <nav class="w-full">
      <ul class="flex justify-around py-2">
        <li><TitleMenuBar title="Contact" sectionRef="#contact-section" /></li>
        <li><TitleMenuBar title="Bio" sectionRef="#details-section" /></li>
        <li><TitleMenuBar title="Experience" sectionRef="#experience-section" /></li>
        <li><TitleMenuBar title="Stack" sectionRef="#stack-section" /></li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TitleMenuBar from '@/components/menubar/TitleMenuBar.vue'

export default defineComponent({
  name: 'MenuBar',
  components: {
    TitleMenuBar,
  }
})
</script>
