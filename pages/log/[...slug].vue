<template>
  <main>
    <ContentDoc v-if="$route.params.slug" :path="$route.path">
      <div
        class="title-container"
        v-bind:style="{ backgroundImage: 'url(' + page.image + ')' }"
      >
        <div class="color-tint-container">
          <div class="background-image-container">
            <h1 class="titletext">{{ page.title ?? "no title" }}</h1>
          </div>
        </div>
      </div>
      <div :v-if="toc">
        <ol>
          <ProseH2 id="toc">outline</ProseH2>
          <li v-for="heading in toc?.links">
            <a :href="`#${heading.id}`">{{ heading.text ?? "no heading" }}</a>
          </li>
        </ol>
      </div>
      <ContentRendererMarkdown class="post-content" :value="page" />
    </ContentDoc>
  </main>
</template>

<script setup lang="ts">
import { Blogpost } from "~/types/index";

definePageMeta({ documentDriven: false });
const route = useRoute();
const page = await queryContent<Blogpost>(route.path).findOne();
const toc = page.body.toc;
</script>

<style scoped lang="scss">
@import "@/assets/scss/shadows.scss";

main {
  color: var(--white);
}

.post-content {
  display: flex;
  flex-direction: column;
  gap: var(--pad-size);
  color: var(--white);
  padding: var(--pad-size);
  margin: auto;
}

.title-container {
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: stretch;
  min-height: 33vh;
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

ol {
  list-style: decimal;
  list-style-position: inside;
  margin: var(--pad-size);
  font-size: var(--fs-regular);
}

ol > li > a {
  text-decoration: none;
  color: var(--white);
}

@media (prefers-color-scheme: light) {
  main {
    color: var(--black);
  }

  .post-content {
    color: var(--black);
  }

  ol > li > a {
    color: var(--black);
  }
}

@media screen and (max-width: 1920px) {
  h1 {
    font-size: var(--fs-xl);
  }
}
</style>
