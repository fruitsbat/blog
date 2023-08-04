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
const { page, next, prev } = useContent();
console.log(page.image);
</script>

<script lang="ts">
import '~/assets/css/crt.css';
</script>


<style scoped>
.post-content {
  color: var(--white);
  padding: var(--pad-size);
  margin: auto;
  max-width: 1920px;
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
  animation: textShadow 24s infinite;
  height: auto;
  align-items: stretch;
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

@keyframes animatedBackground{
  from {
    background-position: 0 0;
  }
  to {
    background-position: 0px -640px;
  }
}
</style>