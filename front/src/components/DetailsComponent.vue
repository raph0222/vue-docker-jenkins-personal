<template>
  <div class="bio-text mb-20 text-justify">
    <section id="details-section">
      <div class="bio-content">
        <div v-html="bioText"></div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DetailsComponent',
  data() {
    return {}
  },
  computed: {
    bioText() {
      return this.$t('BIO_TEXT')
    }
  }
})
</script>
