<template>
  <div class="intro-container">
    <TresCanvas :alpha="true" :use-legacy-lights="false" :antialias="false">
      <TresPerspectiveCamera />
      <TresMesh>
        <TresBoxGeometry />
        <TresMeshNormalMaterial />
      </TresMesh>
    </TresCanvas>
  </div>
  <ProseH2 :id="'meow'">meow</ProseH2>
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
