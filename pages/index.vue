<template>
  <div class="intro-container">
    <TresCanvas class="model">
      <TresPerspectiveCamera />
      <Levioso>
        <TresMesh>
          <TresSphereGeometry />
          <TresMeshNormalMaterial />
        </TresMesh>
      </Levioso>
    </TresCanvas>
  </div>
  <p>
    hehe ksdjfksdjf <br />
    <br />
  </p>
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
