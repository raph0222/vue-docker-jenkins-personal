<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import DetailsComponent from '@/components/DetailsComponent.vue'
import StackComponent from '@/components/stack/StackComponent.vue'
import ExperienceComponent from '@/components/timeline/ExperienceComponent.vue'
import MenuBar from '@/components/menubar/MenuBar.vue'
import LanguageComponent from '@/components/LanguageComponent.vue'
</script>

<template>
  <div class="flex">
    <div class="fixed top-0 right-0 text-white">
      <MenuBar />
    </div>

    <div>
      <LanguageComponent />
      <HeaderComponent />
      <DetailsComponent />
      <ExperienceComponent />
      <StackComponent />
    </div>
  </div>
</template>

<style scoped></style>
