<template>
  <canvas id="minime-canvas"></canvas>
</template>

<script setup lang="js">
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
</script>

<script lang="js">
export default {
  mounted() {
    const loader = new GLTFLoader();
    const canvas = document.getElementById("minime-canvas");
    const camera = new THREE.PerspectiveCamera(10);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas ?? undefined });
    const scene = new THREE.Scene();
    const controls = new OrbitControls(camera, renderer.domElement);
    const clock = new THREE.Clock(); 

    // set up controls
    controls.autoRotate = true;
    controls.autoRotateSpeed = 10;
    controls.dampingFactor = 0.01;
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.maxPolarAngle = 1.3;
    controls.minPolarAngle = 1.3;
    controls.rotateSpeed = 5;

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
      const width = canvas?.clientWidth;
      const height = canvas?.clientHeight;

      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setPixelRatio(1 / (width / 200));
    }

    var model;
    loader.load("/models/minime.gltf", function (gltf) {
      model = gltf.scene;
      gltf.scene.rotation.y = -2;
      model.traverse((child) => {
        if (child.isMesh)
          child.material = new THREE.MeshToonMaterial({
            map: child.map,
            color: child.material.color,
          });
      });
      scene.add(gltf.scene);
    });

    renderer.setPixelRatio(0.1);
    renderer.setClearAlpha(0.0);

    camera.position.z = 20;

    renderer.outputColorSpace = THREE.SRGBColorSpace;

    resizeCanvas();

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(canvas);

    function animate() {
      if (model) {
        model.rotation.x = Math.sin(clock.getElapsedTime() + 1) / 3;
        model.rotation.z = Math.cos(clock.getElapsedTime()) / 2;
      }
      controls.update();
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
  height: 100%;
  min-width: 100%;
  aspect-ratio: 1/1;
  image-rendering: pixelated;
  filter: drop-shadow(var(--fs-xl) 0 2em var(--secondary-accent))
    drop-shadow(calc(var(--fs-xl) * -1) 0 2em var(--ternary-accent));
}
</style>
