<template>
  <div class="app">
    <div class="content">
      <div class="page-content">
        <NuxtPage />
        <button
          class="menu-button show-menu-button"
          @click="showNavigation = true"
          v-if="!showNavigation"
        >
          <Bars3Icon />
          menu
        </button>
      </div>
      <MusicPlayer v-if="store.currentSong" />
    </div>
    <div v-if="showNavigation" class="navbar">
      <NavBar>
        <template v-slot:extra-buttons>
          <button
            class="menu-button close-menu-button"
            @click="showNavigation = false"
          >
            <XMarkIcon />
            close
          </button>
        </template>
      </NavBar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/solid";
const showNavigation = ref(true);
import { useNPStore } from "~/stores/now_playing_store";
const store = useNPStore();
</script>

<style scoped lang="scss">
@import "~/assets/scss/animated_background.scss";
@import "~/assets/scss/shadows.scss";
.app {
  position: fixed;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: hidden;
  height: 100%;
  width: 100vw;
}

.content {
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
}

.page-content {
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: scroll;
  flex-grow: 1;
  background-color: var(--black);
  align-items: stretch;
}

.show-menu-button {
  margin-right: var(--pad-size-small);
  margin-left: auto;
  position: sticky;
  right: var(--pad-size-small);
  bottom: var(--pad-size-small);
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
  width: min-content;
  @include drop-shadows;
  @include text-shadows;
}

.show-menu-button svg {
  width: var(--fs-regular);
  height: var(--fs-regular);
  @include drop-shadows;
}

.show-menu-button:hover,
.show-menu-button:focus {
  cursor: pointer;
  color: var(--white);
  @include animated_background;
}

.close-menu-button {
  display: flex;
  justify-content: center;
  align-items: center;
  word-break: keep-all;
  gap: var(--pad-size-small);
  border-style: none;
  background-color: transparent;
}

.close-menu-button:hover,
.close-menu-button:focus {
  cursor: pointer;
}

.close-menu-button svg {
  width: var(--fs-regular);
  height: var(--fs-regular);
}

.navbar {
  z-index: 999999999999;
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
  .page-content {
    background-color: var(--white);
  }
}

@media (orientation: landscape) {
  .app {
    flex-direction: row-reverse;
  }

  .show-menu-button {
    margin-left: var(--pad-size-small);
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
