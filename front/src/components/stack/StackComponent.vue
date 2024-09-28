<template>
  <section id="stack-section" class="p-6 mb-20">
    <div class="flex flex-wrap gap-6">
      <SkillComponent
        title="Frontend"
        :skills="['Vue.js', 'Three.js', 'Tailwind, Bootstrap', 'npm']"
      />
      <SkillComponent
        title="Backend"
        :skills="['Spring, Jax-RS', 'JOOQ, Hibernate', 'REST API', 'Apache, Tomcat', 'Maven']"
      />
      <SkillComponent title="Database" :skills="['PostgreSQL', 'Flyway']" />
      <SkillComponent title="CI/CD" :skills="['Docker', 'Jenkins', 'Git, Gerrit/Github']" />
      <SkillComponent title="Cloud" :skills="['AWS']" />
      <SkillComponent title="Geospatial" :skills="['Geoserver', 'PostGIS', 'OpenLayers']" />
      <SkillComponent title="OS" :skills="['Ubuntu']" />
      <SkillComponent title="More..." :skills="['Vagrant', 'Ansible', 'Postman']" />
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
