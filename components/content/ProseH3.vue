<template>
  <h3 :id="id">
    <a v-if="id && generate" :href="`#${id}`">
      <slot />
    </a>
    <slot v-else />
  </h3>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from '#imports'
defineProps<{ id?: string }>()
const heading = 3
const { anchorLinks } = useRuntimeConfig().public.content
const generate = anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading)
</script>

<style scoped lang="scss">
@import "@/assets/scss/shadows.scss";

a {
  color: var(--ternary-accent);
  font-size: var(--fs-large);
  text-decoration: none;
  @include text-shadows;
}

@media (prefers-color-scheme: light) {
  a {
    color: var(--black);
  }
}

</style>