<template>
  <div class="outline">
    <slot />
  </div>

</template>

<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: null
  },
  filename: {
    type: String,
    default: null
  },
  highlights: {
    type: Array as () => number[],
    default: () => []
  },
  meta: {
    type: String,
    default: null
  }
})
</script>

<style scoped lang="scss">
@import "@/assets/scss/shadows.scss";

.outline {
  width: 100%;
  white-space: pre-wrap;
  padding: var(--pad-size);
  font-size: var(--fs-regular);
  border-style: solid;
  border-color: var(--accent);
  border-radius: var(--radius);
  background-color: var(--black);
  background-image: url("/img/texture.webp");
  overflow-x: auto;
  @include drop-shadows;
  @include text-shadows;
}
</style>