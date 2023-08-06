<template>
  <h2 :id="id">
    <a v-if="id && generate" :href="`#${id}`">
      <slot />
    </a>
    <slot v-else />
  </h2>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from '#imports'

defineProps<{ id?: string }>()
const heading = 2
const { anchorLinks } = useRuntimeConfig().public.content
const generate = anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading)
</script>

<style scoped lang="scss">
@import "@/assets/scss/shadows.scss";

a {
  font-size: var(--fs-xl);
  color: var(--secondary-accent);
  text-decoration: none;
  font-weight: bold;
  @include text-shadows;
}

@media (prefers-color-scheme: light) {
  a {
    color: var(--black);
  }
}

@media screen and (max-width: 720px) {
  a {
    font-size: var(--fs-large);
  }
}
</style>