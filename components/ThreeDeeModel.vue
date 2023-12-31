<template>
  <canvas ref="canvasRef" :id="`three-dee-canvas-${file}`"></canvas>
</template>

<script setup lang="js">
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useMousePressed, useMouseInElement } from "@vueuse/core";
</script>

<script lang="js">
const lerp = (x, y, a) => x * (1 - a) + y * a;

export default {
  props: {
    file: String,
  },
  async mounted() {
    const loader = new GLTFLoader();
    const canvas = document.getElementById(`three-dee-canvas-${this.file}`);
    const camera = new THREE.PerspectiveCamera(10);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas ?? undefined });
    const scene = new THREE.Scene();
    const clock = new THREE.Clock();

    const pressed = useMousePressed({ target: canvas });
    const mouseInElement = useMouseInElement(canvas);

    // set up light
    const rightLight = new THREE.PointLight(0xd1aaf0);
    rightLight.position.set(5, 5, 5);
    rightLight.intensity = 100;
    scene.add(rightLight);

    const leftLight = new THREE.PointLight(0xaaf0d1);
    leftLight.position.set(-5, 0, 5);
    leftLight.intensity = 150;
    scene.add(leftLight);


    function resizeCanvas() {
      const width = canvas?.clientWidth;
      const height = canvas?.clientHeight;

      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setPixelRatio(1 / (width / 125));
    }

    const model = await loader.loadAsync(this.file);
    model.scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshToonMaterial({
          map:  child.map != undefined? child.map : null,
          color: child.material.color,
        });
        scene.add(model.scene);
      }
    })
    model.scene.rotation.y = -1;

    renderer.setPixelRatio(0.1);
    renderer.setClearAlpha(0.0);

    camera.position.z = 20;

    renderer.outputColorSpace = THREE.SRGBColorSpace;

    resizeCanvas();

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(canvas);

    let rotationSpeed = 0.01;

    // where the mouse was first held
    let lastX = null;

    function animate() {
      if (lastX === null) {
        lastX = mouseInElement.elementX.value;
      }

      if (!mouseInElement.isOutside.value && pressed.pressed.value) {
        const towards = ((mouseInElement.elementX.value - lastX) * 10) / mouseInElement.elementWidth.value;
        rotationSpeed = lerp(rotationSpeed, towards, 0.1);
        lastX = mouseInElement.elementX.value;
      } else {
        lastX = null;
        rotationSpeed = lerp(rotationSpeed, 0.01, 0.01);
      }

      model.scene.rotation.y += rotationSpeed;
      model.scene.rotation.x = Math.sin(clock.getElapsedTime() + 1) / 3;
      model.scene.rotation.z = Math.cos(clock.getElapsedTime()) / 2;

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
  overflow: scroll;
  width: 100%;
  height: 100%;
  min-width: 100%;
  aspect-ratio: 1/1;
  image-rendering: pixelated;
  filter: drop-shadow(var(--fs-xl) 0 2em var(--secondary-accent))
    drop-shadow(calc(var(--fs-xl) * -1) 0 2em var(--ternary-accent));
}
</style>
