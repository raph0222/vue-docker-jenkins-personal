<template>
  <div :class="['timeline-item', { right: rightPosition }]">
    <div :class="['timeline-content', rightPosition ? 'text-left' : 'text-right']">
      <div>
        <h2 class="font-bold">{{ title }}</h2>
        <div class="timeline-date mb-3 text-lightgray">{{ formattedStartDate }} - {{ formattedEndDate }}, {{ period }}</div>
      </div>
      <p class="text-justify">{{ textField }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { getPeriodFromDateString, toStringYearMonthDate } from '@/utils/dateUtils'

export default defineComponent({
  name: 'TimelineField',
  props: {
    title: {
      type: String,
      required: true,
    },
    textField: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    rightPosition: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {

    const formattedStartDate = computed(() => toStringYearMonthDate(props.startDate))
    const formattedEndDate = computed(() => toStringYearMonthDate(props.endDate))
    const period = computed(() => getPeriodFromDateString(props.startDate, props.endDate))

    return {
      formattedStartDate,
      formattedEndDate,
      period,
    }
  },
})
</script>

<style scoped>
.timeline-item {
  position: relative;
  padding: 10px;
  width: 50%;
}

.timeline-item.right {
  left: 50%;
}

.timeline-content {
  padding: 10px;
}

.timeline-date {
  font-style: italic;
}
</style>
