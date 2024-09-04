<template>
    <section class="skills-section">
      <h2>Skills</h2>
      <div class="skills">
        <div class="skill">
          <h3>Frontend</h3>
          <ul>
            <li>Vue.js</li>
            <li>React.js</li>
            <li>HTML/CSS</li>
          </ul>
        </div>
        <div class="skill">
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>Python</li>
          </ul>
        </div>
        <div class="skill">
          <h3>Database</h3>
          <ul>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="cicd-section">
      <h2>CI/CD</h2>
      <p>Jenkins, GitHub Actions, CircleCI</p>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({});
  </script>
  
  <style scoped>
  .skills-section {
    margin-top: 20px;
  }
  
  .skills {
    display: flex;
    justify-content: space-between;
  }
  
  .skill {
    width: 30%;
  }
  
  h3 {
    color: #00ff00;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li::before {
    content: ">_";
    margin-right: 10px;
    color: #00ff00;
  }
  </style>