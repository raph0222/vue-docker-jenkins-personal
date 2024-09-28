<template>
  <a :href="url" download class="hover:underline cursor-pointer">
    &#11015; {{ downloadMessage }}
  </a>
</template>

<script lang="ts">
// utils : component download file
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
  computed: {
    downloadMessage() {
      return this.$t(this.messageField)
    }
  }
}
</script>
