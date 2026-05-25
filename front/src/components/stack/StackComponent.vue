<template>
  <section id="stack-section" class="py-8 sm:py-16">
    <div class="max-w-5xl mx-auto space-y-10">
      <div class="space-y-2">
        <p class="text-xl uppercase tracking-[0.35em] font-semibold text-white">Stack Overview</p>
      </div>

      <ul class="space-y-8 sm:space-y-6">
        <li
          v-for="category in stack"
          :key="category.title"
          class="flex flex-col gap-1 text-white md:flex-row md:items-baseline md:gap-6"
        >
          <span class="text-sm uppercase tracking-[0.1em] sm:tracking-[0.2em] font-semibold">
            {{ category.title }}
          </span>
          <p class="leading-[1.5] sm:leading-relaxed">
            <span v-for="(skill, index) in category.skills" :key="`${category.title}-${skill}`">
              {{ skill
              }}<span
                v-if="index !== category.skills.length - 1"
                class="px-2 font-light"
                aria-hidden="true"
                >/</span
              >
            </span>
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

type StackCategory = {
  title: string
  skills: string[]
}

const stack: StackCategory[] = [
  {
    title: 'Backend',
    skills: [
      'Django (DRF)',
      'Fast API',
      'Flask',
      'Spring',
      'JAX-RS',
      'JOOQ',
      'Hibernate',
      'RESTful API',
      'Soketi',
      'Apache',
      'Tomcat',
      'Maven'
    ]
  },
  {
    title: 'DevOps',
    skills: ['Docker', 'Docker Compose', 'Jenkins', 'Git', 'GitHub', 'Ansible', 'Gerrit']
  },
  {
    title: 'Cloud/Infra',
    skills: [
      'AWS (EC2, RDS, ECR, S3, Route 53, Certificates, Load Balancer, Registrar)',
      'Cloudflare (DNS, Workers, Pages)'
    ]
  },
  {
    title: 'AI/LLM Application',
    skills: ['LangChain', 'LangSmith', 'Vertex AI (Gemini)', 'Claude']
  },
  {
    title: 'Frontend',
    skills: ['Vue.js', 'Vuex', 'Tailwind CSS', 'npm', 'Three.js']
  },
  {
    title: 'Database',
    skills: ['PostgreSQL', 'Flyway']
  },
  {
    title: 'OS',
    skills: ['Linux', 'Ubuntu']
  },
  {
    title: 'Geospatial',
    skills: ['Geoserver', 'PostGIS', 'OpenLayers']
  },
  {
    title: 'More',
    skills: ['DBeaver', 'Postman', 'Vagrant', 'Sublime Merge']
  }
]

export default defineComponent({
  name: 'StackComponent',
  setup() {
    return { stack }
  }
})
</script>
