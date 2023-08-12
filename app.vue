<template>
  <div class="app">
    <div class="content">
      <NuxtPage />
    </div>
    <div v-if="showNavigation" class="navbar">
      <NavBar>
        <template v-slot:extra-buttons>
          <button class="menu-button" @click="showNavigation = false">
            <XMarkIcon />
            close
          </button>
        </template>
      </NavBar>
    </div>
    <button class="menu-button show-menu-button" @click="showNavigation = true" v-else>
      <Bars3Icon/>
      menu
    </button>
  </div>
</template>

<script setup lang="ts">
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/solid";
const showNavigation = ref(true);
</script>

<style scoped lang="scss">
@import "~/assets/scss/animated_background.scss";
@import "~/assets/scss/shadows.scss";
.app {
  position: fixed;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  width: 100vw;
}

.content {
  overflow-y: scroll;
  flex-grow: 1;
  background-color: var(--black);
}

.show-menu-button {
  position: absolute;
  right: var(--pad-size-small);
  bottom: var(--pad-size-small);
}

.menu-button {
  display: flex;
  flex-direction: row;
  font-size: var(--fs-small);
  background-color: var(--black);
  border: none;
  padding: var(--pad-size-small);
  border-radius: var(--radius);
  color: var(--accent);
  background-image: url("/img/texture.webp");
  word-break: keep-all;
  gap: var(--pad-size-small);
  justify-content: center;
  align-items: center;
  @include drop-shadows;
  @include text-shadows;
}

.menu-button > svg {
  width: var(--fs-regular);
  @include drop-shadows;
}

.menu-button:hover, .menu-button:focus {
  cursor: pointer;
  color: var(--white);
  @include animated_background;
}

.navbar {
  z-index: 999999999999;
  overflow: visible;
  box-shadow: 0 -0.1em 1em var(--ternary-accent),
    0 -0.1em 1em var(--secondary-accent);
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: fit-content;
  gap: var(--pad-size);
  background-color: var(--black);
  background-image: linear-gradient(
    135deg,
    var(--secondary-accent),
    var(--accent) 12.5%,
    var(--accent) 87.5%,
    var(--ternary-accent)
  );
}

@media (prefers-color-scheme: light) {
  .content {
    background-color: var(--white);
  }
}

@media (orientation: landscape) {
  .app {
    flex-direction: row-reverse;
  }

  .show-menu-button {
    left: var(--pad-size-small);
  }

  .navbar {
    box-shadow: 0.1em 0em 1em var(--ternary-accent),
      -0.1em 0em 1em var(--secondary-accent);
    height: 100%;
    background-image: linear-gradient(
      135deg,
      var(--secondary-accent),
      var(--accent) 12.5%,
      var(--accent) 87.5%,
      var(--ternary-accent)
    );
  }
}
</style>
