<template>
  <div :class="['timeline-item', { right: rightPosition }]">
    <div :class="['timeline-content', rightPosition ? 'text-left' : 'text-right']">
      <div>
        <h2 class="font-bold">{{ title }}</h2>
        <div class="timeline-date mb-2">{{ date }}</div>
      </div>
      <p class="text-justify">{{ textField }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TimelineField',
  props: {
    title: {
      type: String,
      required: true,
    },
    textField: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    rightPosition: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style scoped>
.timeline-item {
  position: relative;
  padding: 10px;
  width: 50%;
}

.timeline-item.right {
  left: 50%;
}

.timeline-content {
  padding: 10px;
}

.timeline-date {
  font-style: italic;
}
</style>
