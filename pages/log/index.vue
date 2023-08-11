<template>
  <TitleBar title="weblog"/>
  <div class="postlist">
    <div v-for="post in blogposts">
        <BlogCard :image="post.image" :title="post.title ?? 'no title'" :link="post._path ?? './'" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ documentDriven: false });
useHead({
  title: "weblog"
})
// query blogposts
const documents = await queryContent()
  .where({ _partial: false })
  .sort({ createdAt: 1 })
  .find();
const blogposts = documents.filter(
  (doc) => doc?._path?.startsWith("/log") && !doc?._partial
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/shadows.scss";
@import "@/assets/scss/animated_background.scss";

.postlist {
  padding: var(--pad-size);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(540px, 1fr));
  gap: var(--pad-size);
}

@media screen and (max-width: 1280px) {
  .postlist {
    display: flex;
    flex-direction: column;
  }
}
</style>
