<template>
  <main>
      <ContentDoc v-if="$route.params.slug" :path="$route.path">
          <div class="title-container" v-bind:style="{backgroundImage: 'url('+page.image+')'}">
            <div class="color-tint-container">
            <div class="background-image-container">
            <h1 class="titletext">{{page.title ?? "no title"}}</h1>
            </div>
            </div>
          </div>
          <ContentRendererMarkdown class="post-content" :value="page"/>
      </ContentDoc>
  </main>
</template>

<script setup lang="ts">
definePageMeta({ documentDriven: true });
const { page, next, prev } = useContent();
console.log(page.image);
</script>


<style scoped lang="scss">
@import "@/assets/scss/shadows.scss";
.post-content {
  color: var(--white);
  padding: var(--pad-size);
  margin: auto;
}

.title-container {
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: stretch;
  min-height: 50vh;
  display: flex;
  color: var(--accent);
}

.color-tint-container {
  background-color: var(--black-transparent);
  width: 100%;
  height: auto;
  display: flex;
  word-break: break-word;
  height: auto;
  align-items: stretch;
  @include animated-shadows;
}

.background-image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: auto;
  width: 100%;
  background-image: url("/img/texture.webp");
  animation: animatedBackground 120s linear infinite;
  height: auto;
  padding: var(--pad-size);
}

@media (prefers-color-scheme: light) {
  .post-content {
    color: var(--black);
  }
}
</style>