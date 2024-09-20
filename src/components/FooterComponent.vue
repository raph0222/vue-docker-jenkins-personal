<template>
  <footer class="footer text-center py-5">
    <p>&copy; 2024 {{ userName }}. All rights reserved. - {{ version }}</p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FooterComponent',
  data() {
    return {
      version: import.meta.env.VITE_APP_VERSION || ''
    }
  },
  computed: {
    userName() {
      return this.$t('USER_NAME')
    }
  },
})
</script>

<style scoped>
</style>