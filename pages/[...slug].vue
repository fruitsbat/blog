<template>
  <main>
      <ContentDoc v-if="$route.params.slug" :path="$route.path">
          <div class="title-container" v-bind:style="{backgroundImage: 'url('+page.image+')'}">
            <div class="color-tint-container">
            <h1>{{page.title ?? "no title"}}</h1>
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


<style scoped>
.post-content {
  background-color: var(--black);
  color: var(--white);
}

.title-container {
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 50vh;
  display: flex;
  color: var(--accent);
}

.color-tint-container {
  background-color: var(--black-transparent);
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  padding: var(--pad-size);
  word-break: break-word;
}

</style>