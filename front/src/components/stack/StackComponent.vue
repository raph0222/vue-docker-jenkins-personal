<template>
  <section id="stack-section" class="p-6 mb-20">
    <div class="flex flex-wrap gap-6">
      <SkillComponent
        title="Frontend"
        :skills="['Vue.js', 'Three.js', 'Tailwind, Bootstrap', 'npm']"
      />
      <SkillComponent
        title="Backend"
        :skills="[
          'Spring, Jax-RS',
          'JOOQ, Hibernate',
          'Django (DRF)',
          'REST API',
          'Soketi',
          'Apache, Tomcat',
          'Maven'
        ]"
      />
      <SkillComponent title="Database" :skills="['PostgreSQL', 'Flyway']" />
      <SkillComponent
        title="CI/CD"
        :skills="['Docker', 'Jenkins', 'Git (Gerrit, Github, Github Actions)']"
      />
      <SkillComponent
        title="Cloud"
        :categories="[
          {
            title: 'AWS',
            skills: [
              'EC2',
              'RDS',
              'ECR',
              'S3',
              'Registrar',
              'Load Balancer',
              'Route 53',
              'Certificates...'
            ]
          },
          { title: 'Cloudflare', skills: ['DNS', 'Workers/Pages...'] }
        ]"
      />
      <SkillComponent title="OS" :skills="['Ubuntu']" />
      <SkillComponent title="Geospatial" :skills="['Geoserver', 'PostGIS', 'OpenLayers']" />
      <SkillComponent
        title="More..."
        :skills="['DBeaver', 'Ansible', 'Postman', 'Vagrant', 'Sublime Merge']"
      />
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
