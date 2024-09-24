<template>
  <section id="experience-section">
    <h1 class="text-blue-light font-bold mb-2">Experience</h1>
    <div class="">
      <TimelineField
        :title="timeline1.title"
        :textField="timeline1.text"
        :startDate="timeline1.startDate"
        :endDate="timeline1.endDate">
      </TimelineField>
      <TimelineField
        :title="timeline2.title"
        :textField="timeline2.text"
        :startDate="timeline2.startDate"
        :endDate="timeline2.endDate"
        :rightPosition="true">
      </TimelineField>
      <TimelineField
        :title="timeline3.title"
        :textField="timeline3.text"
        :startDate="timeline3.startDate"
        :endDate="timeline3.endDate">
      </TimelineField>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TimelineField from '@/components/timeline/TimelineField.vue'

export default defineComponent({
  name: 'ExperienceComponent',
  components: {
    TimelineField
  },
  computed: {
    timeline1() {
      return {
        title: this.$t('TIMELINE_TITLE_1'),
        text: this.$t('TIMELINE_TEXT_1'),
        startDate: this.$t('TIMELINE_START_DATE_1'),
        endDate: this.$t('TIMELINE_END_DATE_1'),
      }
    },
    timeline2() {
      return {
        title: this.$t('TIMELINE_TITLE_2'),
        text: this.$t('TIMELINE_TEXT_2'),
        startDate: this.$t('TIMELINE_START_DATE_2'),
        endDate: this.$t('TIMELINE_END_DATE_2'),
      }
    },
    timeline3() {
      return {
        title: this.$t('TIMELINE_TITLE_3'),
        text: this.$t('TIMELINE_TEXT_3'),
        startDate: this.$t('TIMELINE_START_DATE_3'),
        endDate: this.$t('TIMELINE_END_DATE_3'),
      }
    }
  }
})
</script>

<style scoped>
/* line */
</style>
