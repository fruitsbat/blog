<template>
  <NuxtLink :href="href" :target="target">
    <slot />
    <span class="iconbutton"><GlobeAltIcon/>{{href}}</span>
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
  border-style: solid;
  border-color: var(--accent);
  border-radius: var(--radius);
  color: var(--white);
  text-decoration: none;
}

.iconbutton {
  background-color: var(--accent);
  border-radius: calc(var(--radius) - var(--border-width));
}

svg {
  width: var(--fs-regular);
}
</style>