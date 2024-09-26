<template>
  <!-- default -->
  <div
    class="hidden lg:flex fixed top-0 right-0 h-full min-w-[300px] bg-black text-white flex-col text-right"
  >
    <nav>
      <ul class="flex flex-col">
        <li><TitleMenuBar title="Contact" sectionRef="#contact-section" /></li>
        <li><TitleMenuBar title="Bio" sectionRef="#details-section" /></li>
        <li><TitleMenuBar title="Experience" sectionRef="#experience-section" /></li>
        <li><TitleMenuBar title="Stack" sectionRef="#stack-section" /></li>
      </ul>
    </nav>
  </div>

  <!-- mobile -->
  <div class="flex lg:hidden fixed bottom-0 left-0 right-0 bg-black text-white z-50">
    <nav class="w-full flex">
      <ul v-show="isMenuVisible" class="flex justify-around py-2">
        <li><TitleMenuBar title="Contact" sectionRef="#contact-section" /></li>
        <li><TitleMenuBar title="Bio" sectionRef="#details-section" /></li>
        <li><TitleMenuBar title="Experience" sectionRef="#experience-section" /></li>
        <li><TitleMenuBar title="Stack" sectionRef="#stack-section" /></li>
      </ul>
      <button
        class="absolute bottom-4 right-4 p-2 bg-white text-black rounded-full"
        @click="toggleMenu"
      >
        &#9776;
      </button>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TitleMenuBar from '@/components/menubar/TitleMenuBar.vue'

export default defineComponent({
  name: 'MenuBar',
  components: {
    TitleMenuBar
  },
  setup() {
    const isMenuVisible = ref(false)

    const toggleMenu = () => {
      isMenuVisible.value = !isMenuVisible.value
    }

    return {
      isMenuVisible,
      toggleMenu
    }
  }
})
</script>

<style scoped>
button {
  transition: background-color 0.3s;
}
button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
