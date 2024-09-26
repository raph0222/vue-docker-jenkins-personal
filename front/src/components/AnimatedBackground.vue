<template>
  <div ref="background" class="background"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import * as THREE from 'three'

export default defineComponent({
  name: 'AnimatedBackgroundComponent',
  // Composition API style for this component
  setup() {
    const background = ref<HTMLElement | null>(null)
    let mouseX = 0
    let mouseY = 0
    let renderer: THREE.WebGLRenderer
    let camera: THREE.PerspectiveCamera

    onMounted(() => {
      if (!background.value) {
        return
      }
      // width and height of the parent
      const sectionWidth = background.value.offsetWidth
      const sectionHeight = background.value.offsetHeight

      const scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(75, sectionWidth / sectionHeight, 0.1, 1000)
      renderer = new THREE.WebGLRenderer({ antialias: true })

      // resize to match parent
      renderer.setSize(sectionWidth, sectionHeight)
      background.value.appendChild(renderer.domElement)

      // window resize fix
      window.addEventListener('resize', () => {
        const newWidth = background.value?.offsetWidth || window.innerWidth
        const newHeight = background.value?.offsetHeight || window.innerHeight
        camera.aspect = newWidth / newHeight
        camera.updateProjectionMatrix()
        renderer.setSize(newWidth, newHeight)
      })

      const cubes: THREE.Mesh<THREE.BoxGeometry, THREE.MeshPhongMaterial>[] = []
      const cubeMaterial = new THREE.MeshPhongMaterial({ color: 0x00aaff, shininess: 200 })
      const cubeGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.5)

      for (let i = 0; i < 100; i++) {
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
        cube.position.x = (Math.random() - 0.5) * 50
        cube.position.y = (Math.random() - 0.5) * 50
        cube.position.z = (Math.random() - 0.5) * 50
        cube.rotation.x = Math.random() * 2 * Math.PI
        cube.rotation.y = Math.random() * 2 * Math.PI
        cube.rotation.z = Math.random() * 2 * Math.PI
        scene.add(cube)
        cubes.push(cube)
      }

      const light = new THREE.PointLight(0xffffff, 10, 1000)
      scene.add(light)
      const centerLight = new THREE.PointLight(0xffffff, 10, 1000)
      scene.add(centerLight)

      camera.position.z = 30

      let lightAngle = 0

      function onMouseMove(event: MouseEvent) {
        mouseX = (event.clientX / sectionWidth) * 2 - 1
        mouseY = -(event.clientY / sectionHeight) * 2 + 1
      }

      window.addEventListener('mousemove', onMouseMove)

      function animate() {
        requestAnimationFrame(animate)
        cubes.forEach((cube) => {
          cube.rotation.x += 0.01
          cube.rotation.y += 0.01
        })

        lightAngle += 0.01
        light.position.x = 20 * Math.sin(lightAngle)
        light.position.z = 20 * Math.cos(lightAngle)
        light.position.y = 10 * Math.sin(lightAngle / 2)

        camera.position.x += (mouseX * 10 - camera.position.x) * 0.05
        camera.position.y += (mouseY * 10 - camera.position.y) * 0.05
        camera.lookAt(scene.position)

        renderer.render(scene, camera)
      }

      animate()
    })

    return {
      background
    }
  }
})
</script>

<style scoped>
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
