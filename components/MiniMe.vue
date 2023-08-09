<template>
  <canvas id="minime-canvas"></canvas>
</template>

<script setup lang="ts">
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
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
    const rightLight = new THREE.PointLight(0xd1aaf0);
    rightLight.position.set(5, 0, 5);
    rightLight.intensity = 100;
    scene.add(rightLight);

    const leftLight = new THREE.PointLight(0xf0d1aa);
    leftLight.position.set(-5, 0, 5);
    leftLight.intensity = 100;
    scene.add(leftLight);

    function resizeCanvas() {
      const width = canvas?.clientWidth!;
      const height = canvas?.clientHeight!;

      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setPixelRatio(1 / (width / 75));
    }

    var model;
    loader.load("/models/minime.gltf", function (gltf) {
      model = gltf.scene;
      gltf.scene.rotation.y = -3;
      model.traverse((child) => {
        const c = child as THREE.Mesh;
        if (c.isMesh) c.material = new THREE.MeshToonMaterial({map: c.map, color:c.material.color});
      })
      scene.add(gltf.scene);
    });

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
        model.rotation.x += Math.sin(model.rotation.y + 2) / 200;
      }
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    resizeCanvas();
    animate();
  },
};
</script>

<style scoped lang="scss">
@import "~/assets/scss/shadows.scss";

canvas {
  height: 100%;
  min-width: 100%;
  aspect-ratio: 1/1;
  image-rendering: pixelated;
  filter: drop-shadow(var(--fs-xl) 0 2em var(--secondary-accent))
    drop-shadow(calc(var(--fs-xl) * -1) 0 2em var(--ternary-accent));
}
</style>
