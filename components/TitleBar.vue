<template>
  <div class="titlebar-container">
    <div class="titlebar">
      <h1>{{title}}</h1>
      <a href="/index.xml" class="rss-link">
        <div class="rss-link-texture">
          <RssIcon class="icon" />
          rss feed
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RssIcon } from "@heroicons/vue/24/solid";

defineProps({
  title: String,
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/shadows.scss";
@import "@/assets/scss/animated_background.scss";

a {
  text-decoration: none;
}

h1 {
  font-size: var(--fs-xl);
  color: var(--black);
  @include animated-shadows;
}

.rss-link-texture {
  font-size: var(--fs-small);
  padding: var(--pad-size-small);
  background-image: url("/img/texture.webp");
  display: flex;
  align-items: center;
  border-radius: var(--radius);
  word-break: keep-all;
  white-space: nowrap;
  color: var(--secondary-accent);
  gap: var(--pad-size-small);
  @include text-shadows;
}

a:hover .rss-link-texture {
  color: var(--white);
  @include animated-background;
}

.rss-link {
  background-color: var(--black);
  border-radius: var(--radius);
}

.rss-link-texture::v-deep(svg) {
  width: var(--fs-regular);
  height: var(--fs-regular);
  @include drop-shadows;
}
.titlebar-container {
  background-image: linear-gradient(
    -45deg,
    var(--ternary-accent),
    var(--secondary-accent) 12.5%,
    var(--secondary-accent) 87.5%,
    var(--accent)
  );
  z-index: 1000;
  @include drop-shadows;
}

.titlebar {
  padding: var(--pad-size-small);
  background-image: url("/img/texture.webp");
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
