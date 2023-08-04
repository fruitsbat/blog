<template>
  <NuxtLink :href="href" :target="target">
    <GlobeAltIcon />
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
import { GlobeAltIcon } from "@heroicons/vue/24/solid";
import '~/assets/css/animated_background.css';
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
  padding-left: var(--pad-size-small);
  padding-right: var(--pad-size-small);
  display: inline-flex;
  align-items: center;
  gap: var(--pad-size-small);
  color: var(--accent);
  background-color: var(--black);
  border-radius: var(--radius);
  text-decoration: none;
  text-decoration-color: var(--accent);
  text-decoration-thickness: var(--border-width);
  background-image: url("/img/texture.webp");
}

svg {
  width: var(--fs-regular);
  height: var(--fs-regular);
  color: var(--accent);
}

a:hover {
  animation: animatedBackground 30s linear infinite;
}

</style>