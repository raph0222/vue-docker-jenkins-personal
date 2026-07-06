<template>
  <section id="other-experience-section" class="pt-16">
    <SectionTitle title="Other Experience in Korea" />
    <div class="pt-2">
      <TimelineField
        :title="koreaExp0.title"
        :textField="koreaExp0.text"
        :startDate="koreaExp0.startDate"
        :endDate="koreaExp0.endDate"
      ></TimelineField>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import TimelineField from '@/components/timeline/TimelineField.vue'

export default defineComponent({
  name: 'KoreaExperienceComponent',
  components: {
    SectionTitle,
    TimelineField
  },
  computed: {
    koreaExp0() {
      return {
        title: this.$t('KOREA_EXP_TITLE_0'),
        text: this.$t('KOREA_EXP_TEXT_0'),
        startDate: this.$t('KOREA_EXP_START_DATE_0'),
        endDate: this.$t('KOREA_EXP_END_DATE_0')
      }
    }
  }
})
</script>

<style scoped>
/* line */
</style>
