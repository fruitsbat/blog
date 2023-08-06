<template>
  <nav>
    <NuxtLink to="/"
      ><div class="icon-container"><HomeIcon /></div>
      home</NuxtLink
    >
    <NuxtLink to="/log"
      ><div class="icon-container"><RssIcon /></div>
      weblog</NuxtLink
    >
    <NuxtLink to="/music"
      ><div class="icon-container"><MusicalNoteIcon /></div>
      music</NuxtLink
    >
  </nav>
</template>

<script setup lang="ts">
import { HomeIcon, RssIcon, MusicalNoteIcon } from "@heroicons/vue/24/solid";
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
  color: var(--white);
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
  padding: var(--pad-size-small);
  align-items: center;
  justify-content: center;
  gap: var(--pad-size);
  background-image: url("/img/texture.webp");
  overflow-x: auto;
}

.icon-container {
  display: flex;
}

@media screen and (max-width: 720px) {
  a {
    padding: 0em;
    flex-direction: column;
    background-color: transparent;
    color: var(--black);
    background-image: none;
  }

  a:hover > .icon-container {
    @include animated-background;
  }

  a:hover svg {
    color: var(--white);
  }

  a:hover {
    color: var(--black);
  }

  svg {
    padding: var(--pad-size-small);
    color: var(--accent);
    width: var(--fs-xl);
    height: var(--fs-xl);
  }

  .icon-container {
    aspect-ratio: 1/1;
    width: min-content;
    height: min-content;
    background-image: url("/img/texture.webp");
    border-radius: var(--radius);
    background-color: var(--black);
    color: var(--accent);
  }
}

@media (orientation: landscape) {
  nav {
    flex-grow: 1;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
  }
  a {
    line-break: strict;
    word-break: keep-all;
  }
}
</style>
