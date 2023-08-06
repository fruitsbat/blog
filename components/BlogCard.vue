<template>
  <span>{{ computedX }}</span>
  <NuxtLink :to="post._path">
    <div
      ref="target"
      class="postcard"
      v-bind:style="{ backgroundImage: 'url(' + post.image + ')' }"
    >
      <div class="postcard-overlay">
        <div class="postcard-texture">
          <h2>{{ post.title }}</h2>
        </div>
      </div>
    </div></NuxtLink
  >
</template>

<script setup lang="ts">
import { ParsedContent } from "@nuxt/content/dist/runtime/types";

defineProps<{
  post: ParsedContent;
}>();

const target = ref(null);
const { elementX, elementY } = useMouseInElement(target);
const { width, height } = useElementSize(target);

const computedX = computed(() => {
  return `${((elementX.value / width.value) - 0.5) * 48}deg`;
});

const computedY = computed(() => {
  return `${(((elementY.value / height.value) - 0.5) * 48) * -1}deg`;
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/shadows.scss";
@import "@/assets/scss/animated_background.scss";

h2 {
  font-size: var(--fs-xl);
}

.postcard-texture {
  background-image: url("/img/texture.webp");
  border-radius: var(--radius);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
}

.postcard {
  background-color: var(--black-transparent);
  height: 100%;
  background-size: cover;
  border-radius: var(--radius);
  @include drop-shadows;
}

.postcard-overlay {
  background-color: var(--black-transparent);
  border-radius: var(--radius);
  height: 100%;
}

h2 {
  padding: var(--pad-size);
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

a:hover .postcard-texture {
  @include animated-background;
  color: var(--white);
  transform: translate3d(0, 0, var(--fs-xl));
  transition: transform .1s ease-in;
}

a {
  color: var(--accent);
  text-decoration: none;
  @include animated-shadows;
}

.postcard {
  transition: transform 0.1s ease-out, filter 1s ease-out;
}

a:hover .postcard {
  transform: rotate3d(0, 1, 0, v-bind(computedX)) rotate3d(1, 0, 0, v-bind(computedY));
  filter: drop-shadow(var(--fs-xl) 0 2em var(--secondary-accent)) drop-shadow(calc(var(--fs-xl) * -1) 0 2em var(--ternary-accent));
}

.postcard,
.postcard-overlay,
.postcard-texture {
  min-height: 320px;
}

@media screen and (max-width: 720) {
  .postcard,
  .postcard-overlay,
  .postcard-texture {
    min-height: 64vw;
  }

  h2 {
    font-size: var(--fs-large);
  }
}
</style>
