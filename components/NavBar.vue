<template>
<nav>
  <NuxtLink to="/"><HomeIcon/>home</NuxtLink>
  <NuxtLink to="/log"><RssIcon/>weblog</NuxtLink>
  <NuxtLink to="/music"><MusicalNoteIcon />music</NuxtLink>
</nav>
</template>

<script setup lang="ts">
import { HomeIcon, RssIcon, MusicalNoteIcon } from '@heroicons/vue/24/solid';
</script>

<style scoped lang="scss">
@import "@/assets/scss/shadows.scss";
@import "@/assets/scss/animated_background.scss";

a {
  @include text-shadows;
  @include drop-shadows;
  display: flex;
  gap: var(--pad-size-small);
  text-decoration: none;
  align-items: center;
  background: var(--black);
  padding: var(--pad-size-small);
  color: var(--accent);
  font-size: var(--fs-small);
  border-radius: var(--radius);
  background-image: url("/img/texture.webp");
}

a:hover {
  animation: animatedBackground 30s linear infinite;
}

svg {
  width: var(--fs-regular);
  height: var(--fs-regular);
  @include drop-shadows;
}

nav {
  display: flex;
  width: 100%;
  padding: var(--pad-size);
  align-items: center;
  justify-content: center;
  gap: var(--pad-size);
  background-image: url("/img/texture.webp");
}

@media screen and (max-width: 720px) {
  a {
    padding: 0em;
    flex-direction: column;
    background-color: transparent;
    color: var(--black);
    background-image: none;
  }

  a:hover > svg {
    @include animated-background;
  }

  svg {
    background-image: url("/img/texture.webp");
    padding: var(--pad-size-small);
    color: var(--accent);
    border-radius: var(--radius);
    width: var(--fs-xl);
    height: var(--fs-xl);
    background-color: var(--black);
  }
}

@media (orientation: landscape) {
  nav {
    flex-grow: 1;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  a {
    line-break: strict;
    word-break: keep-all;
  }
}
</style>