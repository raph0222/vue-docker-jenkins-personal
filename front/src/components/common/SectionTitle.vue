<template>
  <div class="space-y-2">
    <p class="text-xl uppercase tracking-[0.35em] font-semibold text-white">
      {{ title }}
    </p>
    <div class="border-t border-white/30"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'SectionTitle',
  props: {
    title: {
      type: String as PropType<string>,
      required: true
    }
  }
})
</script>
