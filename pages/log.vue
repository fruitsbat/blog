<template>
  <TitleBar title="weblog"/>
  <div class="postlist">
    <div v-for="post in blogposts">
        <BlogCard :post="post" />
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
  .sort({ date: 1 })
  .sort({ date: 1 })
  .find();
const blogposts = documents.filter(
  (doc) => doc?._path?.includes("/log") && !doc?._partial
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
