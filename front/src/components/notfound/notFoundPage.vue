<template>
  <div class="h-screen flex flex-col items-center justify-center mx-auto text-white">
    <h1 class="text-8xl font-bold mb-6">404</h1>
    <div class="flex">
      <div class="text-xl mb-10 text-lightgray italic">
        <p class="mb-2">That's an error.</p>
        <p>{{ fromUrl }}</p>
      </div>
    </div>

    <div class="flex items-center space-x-2">
      <span class="animate-bounce-right text-2xl">→</span>
      <button @click="goHome" class="p-3 text-lg font-semibold hover:underline">Homepage</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  computed: {
    fromUrl() {
      const url = this.$route.query.from
      if (url) {
        return `The request '${url}' doesn't exist.`
      }
      return 'You should go back to the homepage.'
    }
  },
  methods: {
    goHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
@keyframes bounce-right {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
}

.animate-bounce-right {
  animation: bounce-right 1s infinite;
}
</style>
