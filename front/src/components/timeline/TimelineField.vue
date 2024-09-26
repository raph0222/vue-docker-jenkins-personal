<template>
  <!-- <left> <mid> <right> = display content on either left OR right, and mid part is the white vertical timeline -->
  <div class="flex items-center text-justify">
    <div id="left-subpart" class="flex-1">
      <div
        v-if="!isRight"
        :class="[
          'mb-5 mr-5',
          // if mobile => add separating line for visibility
          isMobile ? 'border-b-2 border-darkgray pb-2' : ''
        ]"
      >
        <h2
          :class="[
            'flex title-text-timeline',
            !isRight ? 'left-timeline-text' : 'right-timeline-text'
          ]"
        >
          {{ title }}
        </h2>
        <div
          :class="[
            'flex date-text-timeline',
            !isRight ? 'left-timeline-text' : 'right-timeline-text'
          ]"
        >
          {{ formattedStartDate }} - {{ formattedEndDate }}, {{ period }}
        </div>
        <div class="">{{ textField }}</div>
      </div>
    </div>
    <!-- if mobile device, just display on the left-->
    <div v-if="!isMobile" id="mid-subpart" class="w-[2px] bg-white self-stretch"></div>
    <div v-if="!isMobile" id="right-subpart" class="flex-1">
      <div v-if="isRight" class="mb-5 ml-5">
        <h2 class="title-text-timeline">{{ title }}</h2>
        <div class="date-text-timeline">
          {{ formattedStartDate }} - {{ formattedEndDate }}, {{ period }}
        </div>
        <div class="">{{ textField }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, onBeforeUnmount } from 'vue'
import { getPeriodFromDateString, toStringYearMonthDate } from '@/utils/dateUtils'
import { useDeviceStore } from '@/stores/useDeviceStore'

export default defineComponent({
  name: 'TimelineField',
  props: {
    title: {
      type: String,
      required: true
    },
    textField: {
      type: String,
      required: true
    },
    startDate: {
      type: String,
      required: true
    },
    endDate: {
      type: String,
      required: true
    },
    rightPosition: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const deviceStore = useDeviceStore()

    const formattedStartDate = computed(() => toStringYearMonthDate(props.startDate))
    const formattedEndDate = computed(() => toStringYearMonthDate(props.endDate))
    const period = computed(() => getPeriodFromDateString(props.startDate, props.endDate))

    const isMobile = computed(() => deviceStore.getIsMobile || false)
    const isRight = computed(() => props.rightPosition && !isMobile.value)

    onMounted(() => {
      deviceStore.initResizeListener()
    })

    onBeforeUnmount(() => {
      deviceStore.removeResizeListener()
    })

    return {
      formattedStartDate,
      formattedEndDate,
      period,
      isMobile,
      isRight
    }
  }
})
</script>

<style scoped>
.left-timeline-text {
  @apply justify-end;
}

.right-timeline-text {
  @apply justify-start;
}

.date-text-timeline {
  @apply text-lightgray;
  @apply mb-3;
  @apply italic;
}

.title-text-timeline {
  @apply font-bold;
}
</style>
