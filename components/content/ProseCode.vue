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

<style scoped>
.outline {
  width: 100%;
  overflow-x: scroll;
  padding: var(--pad-size);
  font-size: var(--fs-regular);
  border-style: solid;
  border-color: var(--accent);
  border-radius: var(--radius);
}
</style>