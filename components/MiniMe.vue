<template>
  <canvas id="minime-canvas"></canvas>
</template>

<script setup lang="ts">
import { mode } from "process";
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
</script>

<script lang="ts">
export default {
  mounted() {
    const loader = new GLTFLoader();
    const canvas = document.getElementById("minime-canvas");
    const camera = new THREE.PerspectiveCamera(10);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas ?? undefined });
    const scene = new THREE.Scene();

    // set up light
    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    const rightLight = new THREE.PointLight(0xfff000);
    rightLight.position.set(20, 20, 20);

    scene.add(rightLight);



    function resizeCanvas() {
      const width = canvas?.clientWidth!;
      const height = canvas?.clientHeight!;

      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setPixelRatio(1 / (width / 50));
    }

    var model;
    loader.load(
      "/models/minime.gltf",
      function (gltf) {
        model = gltf.scene;
        scene.add(gltf.scene);
      }
    );

    renderer.setPixelRatio(0.1);
    renderer.setClearAlpha(0.0);


    camera.position.z = 20;

    renderer.outputColorSpace = THREE.SRGBColorSpace;

    resizeCanvas();

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(canvas!);

    function animate() {
      if (model!) {
        model.rotation.y += 0.01;
        model.rotation.x += 0.005;
      }
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    animate();
  },
};
</script>

<style scoped lang="scss">
@import "~/assets/scss/shadows.scss";

canvas {
  aspect-ratio: 1/1;
  width: 100%;
  image-rendering: pixelated;
  display: flex;
  filter: drop-shadow(var(--fs-xl) 0 2em var(--secondary-accent))
      drop-shadow(calc(var(--fs-xl) * -1) 0 2em var(--ternary-accent));
}
</style>
