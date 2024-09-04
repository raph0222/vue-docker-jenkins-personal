<template>
    <footer class="hacker-footer">
      <p>&copy; 2024 {{ USER_NAME }}. All rights reserved.</p>
    </footer>
  </template>
  
<script lang="ts">
  import CONST from '@/constants/const';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    data() {
      return {
        USER_NAME: CONST.USER_NAME
      }
    },
  });
  </script>
  
  <style scoped>
  .hacker-footer {
    text-align: center;
    padding: 10px;
    border-top: 1px solid #00ff00;
    margin-top: 20px;
  }
</style>