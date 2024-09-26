<template>
  <div class="flex-1 min-w-[200px]">
    <h3 class="text-xl text-blue-light font-semibold mb-2">{{ title }}</h3>
    <ul class="list-disc pl-4 space-y-1">
      <li v-for="(item, index) in skills" :key="index">{{ item }}</li>
    </ul>
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
    skills: {
      type: Array as () => string[],
      required: true
    }
  }
})
</script>

<style scoped></style>
