<template>
    <section class="terminal-text">
      <p>>_ I am a full-stack developer</p>
      <p>>_ based in Korea</p>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({});
  </script>
  
  <style scoped>
  .terminal-text p {
    margin: 0;
    font-size: 1.2rem;
    animation: typing 2s steps(40, end), blink-caret 0.75s step-end infinite;
    white-space: nowrap;
    overflow: hidden;
    border-right: 0.15em solid #00ff00;
  }
  
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }
  
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: #00ff00; }
  }
  </style>