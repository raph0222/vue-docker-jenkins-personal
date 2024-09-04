<template>
  <section id="experience-section" class="experience-part">
    <h1 class="text-blue-light font-bold">Experience</h1>
    <div class="timeline relative max-w-[1000px] mb-[50px]">
      <TimelineField
        :title="timeline1.title"
        :textField="timeline1.text"
        :date="timeline1.date">
      </TimelineField>
      <TimelineField
        :title="timeline2.title"
        :textField="timeline2.text"
        :date="timeline2.date"
        :rightPosition="true">
      </TimelineField>
      <TimelineField
        :title="timeline3.title"
        :textField="timeline3.text"
        :date="timeline3.date">
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
        date: this.$t('TIMELINE_DATE_1'),
      }
    },
    timeline2() {
      return {
        title: this.$t('TIMELINE_TITLE_2'),
        text: this.$t('TIMELINE_TEXT_2'),
        date: this.$t('TIMELINE_DATE_2'),
      }
    },
    timeline3() {
      return {
        title: this.$t('TIMELINE_TITLE_3'),
        text: this.$t('TIMELINE_TEXT_3'),
        date: this.$t('TIMELINE_DATE_3'),
      }
    }
  }
})
</script>

<style scoped>
/* line */
.timeline::before {
  content: "";
  position: absolute;
  width: 2px;
  background-color: lightgray;
  top: 0;
  bottom: 0;
  left: 50%;
}
</style>
