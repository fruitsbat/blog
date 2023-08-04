<template>
  <NuxtLink :href="href" :target="target">
    <slot />
    <span><GlobeAltIcon/>{{href}}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
import { GlobeAltIcon } from '@heroicons/vue/24/outline';
defineProps({
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: undefined,
    required: false
  }
})
</script>

<style scoped>
a {
  background-color: var(--accent);
  color: var(--black);
  text-decoration: none;
}

svg {
  width: var(--fs-regular);
}
</style>