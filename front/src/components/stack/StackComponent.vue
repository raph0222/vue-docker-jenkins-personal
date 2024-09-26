<template>
  <section id="stack-section" class="p-6 mb-20">
    <div class="flex flex-wrap gap-6">
      <SkillComponent
        title="Frontend"
        :skills="['Vue.js', 'OpenLayers', 'Three.js', 'tailwind,bootstrap']"
      />
      <SkillComponent
        title="Backend"
        :skills="['Spring, Jax-RS', 'Maven', 'JOOQ, Hibernate', 'REST API, webservices']"
      />
      <SkillComponent title="Database" :skills="['PostgreSQL', 'PostGIS', 'Flyway']" />
      <SkillComponent title="CI/CD" :skills="['Docker', 'Jenkins', 'Git,Gerrit/Github']" />
      <SkillComponent title="Others" :skills="['Vagrant', 'Ansible']" />
      <SkillComponent title="OS" :skills="['Ubuntu', 'CentOS']" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SkillComponent from '@/components/stack/SkillComponent.vue'

export default defineComponent({
  name: 'StackComponent',
  components: {
    SkillComponent
  }
})
</script>

<style scoped></style>
