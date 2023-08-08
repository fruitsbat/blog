<template>
  <div class="intro-container">
    <TresCanvas class="model">
      <TresPerspectiveCamera />
      <OrbitControls />
      <TresMesh>
        <TresSphereGeometry />
        <TresMeshNormalMaterial />
      </TresMesh>
    </TresCanvas>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ documentDriven: false });
</script>


<style scoped lang="scss">

.intro-container {
  width: 100%;
  height: 100%;
}

</style>