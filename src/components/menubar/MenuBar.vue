<template>
  <div class="hidden lg:flex fixed top-0 right-0 h-full min-w-[300px] bg-black text-white flex-col text-right">
    <nav>
      <ul class="flex flex-col space-y-2">
        <TitleMenuBar title="Contact" sectionRef="#contact-section"/>
        <TitleMenuBar title="Bio" sectionRef="#details-section"/>
        <TitleMenuBar title="Experience" sectionRef="#experience-section"/>
        <TitleMenuBar title="Stack" sectionRef="#stack-section"/>
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
