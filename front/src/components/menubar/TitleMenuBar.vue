<template>
  <li class="mr-2 mt-2">
    <span class="text-blue-light mr-2">#</span>
    <a :href="sectionRef" @click="handleLinkClick" class="text-right hover:underline">{{
      title
    }}</a>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TitleMenuBar',
  props: {
    title: {
      type: String,
      required: true
    },
    sectionRef: {
      type: String,
      required: true
    }
  },
  methods: {
    handleLinkClick() {
      //  TODO
    }
  }
})
</script>
