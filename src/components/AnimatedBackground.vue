<template>
    <div class="background">
      <canvas ref="canvas"></canvas>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  
  export default defineComponent({
    name: 'AnimatedBackground',
    setup() {
      const canvas = ref<HTMLCanvasElement | null>(null);
  
      onMounted(() => {
        if (canvas.value) {
          const ctx = canvas.value.getContext('2d')
          const particles: any[] = []
          const colors = ['#00ff00', '#00ff7f', '#007f00', '#00cc00']
  
          canvas.value.width = window.innerWidth
          canvas.value.height = window.innerHeight
  
          const createParticle = () => {
            return {
              x: Math.random() * canvas.value!.width,
              y: Math.random() * canvas.value!.height,
              size: Math.random() * 2,
              color: colors[Math.floor(Math.random() * colors.length)],
              speedX: Math.random() * 0.5 - 0.25,
              speedY: Math.random() * 0.5 - 0.25,
            }
          }
  
          for (let i = 0; i < 100; i++) {
            particles.push(createParticle())
          }
  
          const animate = () => {
            if (ctx) {
              ctx.clearRect(0, 0, canvas.value!.width, canvas.value!.height);
  
              particles.forEach(particle => {
                particle.x += particle.speedX
                particle.y += particle.speedY
  
                ctx.beginPath()
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
                ctx.fillStyle = particle.color
                ctx.fill()
              })
  
              requestAnimationFrame(animate)
            }
          }
  
          animate()
  
          window.addEventListener('resize', () => {
            if (canvas.value) {
              canvas.value.width = window.innerWidth
              canvas.value.height = window.innerHeight
            }
          })
        }
      })
  
      return {
        canvas,
      }
    },
  })
  </script>
  
  <style scoped>
  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
  }
  
  canvas {
    display: block;
  }
  </style>