<template>
  <div class="flex-1 min-w-[200px]">
    <h3 class="text-xl text-blue-light font-semibold mb-2">{{ title }}</h3>

    <div v-if="categories?.length > 0">
      <div v-for="(sub, index) in categories" :key="index">
        <h4 class="text-lg text-blue-light font-semibold mb-1 pl-4">- {{ sub.title }}</h4>
        <p class="pl-8 mb-2">{{ sub.skills.join(', ') }}</p>
      </div>
    </div>

    <div v-else>
      <div class="pl-4">
        <p v-for="(item, index) in skills" :key="index" class="mb-2">- {{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SkillComponent',
  props: {
    title: {
      type: String,
      required: true
    },
    categories: {
      type: Array as () => { title: string; skills: string[] }[],
      required: false,
      default: () => []
    },
    skills: {
      type: Array as () => string[],
      required: false,
      default: () => []
    }
  }
})
</script>

<style scoped></style>
