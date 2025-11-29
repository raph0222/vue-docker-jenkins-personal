<template>
  <a :href="url" download class="inline-flex items-center gap-2 cursor-pointer">
    <img :src="downloadIcon" alt="" class="w-4 h-4" aria-hidden="true" />
    <span>{{ downloadMessage }}</span>
  </a>
</template>

<script lang="ts">
// utils : component download file
import downloadIcon from '@/assets/icons/download_icon.svg'
import CONST from '@/constants/const'

export default {
  name: 'DownloadButton',
  props: {
    url: {
      type: String,
      default: CONST.PDF_URL
    },
    messageField: {
      type: String,
      default: 'DOWNLOAD_TEXT'
    }
  },
  data() {
    return {
      downloadIcon
    }
  },
  computed: {
    downloadMessage() {
      return this.$t(this.messageField)
    }
  }
}
</script>
