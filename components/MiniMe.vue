<template>
  <canvas id="minime-canvas"></canvas>
</template>

<script setup lang="ts">
import * as THREE from "three";
</script>

<script lang="ts">
export default {
  mounted() {
    const canvas = document.getElementById("minime-canvas");
    const camera = new THREE.PerspectiveCamera(10);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas ?? undefined });

    function resizeCanvas() {
      const width = canvas?.clientWidth!;
      const height = canvas?.clientHeight!;

      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setPixelRatio(0.1);
    }

    const scene = new THREE.Scene();

    renderer.setPixelRatio(0.2);
    renderer.setClearAlpha(0.0);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 20;

    resizeCanvas();

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(canvas!);

    function animate() {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    }

    animate();
  },
};
</script>

<style scoped lang="scss">
@import "~/assets/scss/shadows.scss";

canvas {
  width: 100%;
  height: 100%;
  image-rendering: pixelated;
  display: flex;
  filter: drop-shadow(var(--fs-xl) 0 2em var(--secondary-accent))
      drop-shadow(calc(var(--fs-xl) * -1) 0 2em var(--ternary-accent));
}
</style>
