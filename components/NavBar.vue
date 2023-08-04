<template>
<nav>
  <NuxtLink to="/log"><RssIcon/>weblog</NuxtLink>
  <NuxtLink to="/music"><MusicalNoteIcon />music</NuxtLink>
</nav>
</template>

<script setup lang="ts">
import { RssIcon, MusicalNoteIcon } from '@heroicons/vue/24/solid';
</script>

<style scoped>
a {
  display: flex;
  gap: var(--pad-size-small);
  text-decoration: none;
  justfy-content: center;
  align-items: center;
  background: var(--black);
  padding: var(--pad-size-small);
  color: var(--accent);
  font-size: var(--fs-small);
  border-radius: var(--radius);
  background-image: url("/img/texture.webp");
}

svg {
  width: var(--fs-regular);
  height: var(--fs-regular);
}

nav {
  display: flex;
  margin: 0em;
  gap: var(--pad-size);
}
</style>