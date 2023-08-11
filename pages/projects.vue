<template>
  <TitleBar title="projects" />
  <div>
    <p v-for="project in projects">{{project.title}} {{ project._path }}</p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ documentDriven: true, page: "/projects" });
useHead({
  title: "projects",
});
// query blogposts
const documents = await queryContent()
  .where({_partial: true})
  .sort({ date: 1 })
  .find();
const projects = documents.filter(
  (doc) => true
);
</script>
