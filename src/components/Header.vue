<template>
    <header class="hacker-header">
      <h1>{{ USER_NAME }}</h1>
      <p>{{ POSITION }}</p>
    </header>
  </template>
  
  <script lang="ts">
  import CONST from '@/constants/const';
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    data() {
      return {
        USER_NAME: CONST.USER_NAME,
        POSITION: CONST.POSITION
      }
    },
    setup() {
    }
  });
  
  </script>
  
  <style scoped>
  .hacker-header {
    text-align: center;
    padding: 20px;
    border-bottom: 1px solid #00ff00;
  }
  </style>