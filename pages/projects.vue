<template>
  <TitleBar title="projects" />
  <div class="projectlist">
    <div
      v-for="project in documents"
      class="projectcard"
      :style="`background-image: url(v-bind(${project.image}));`"
    >
      <BlogCard
        :image="project.image"
        :link="project.link"
        :title="project.title ?? 'no title'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Project } from "~/types";
definePageMeta({ documentDriven: true, page: "/projects" });
useHead({
  title: "projects",
});
// query blogposts
const documents = await queryContent<Project>("projects")
  .sort({ date: 1})
  .find();

console.log(documents);
</script>

<style scoped lang="scss">
.projectlist {
  padding: var(--pad-size);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(540px, 1fr));
  gap: var(--pad-size);
}

@media screen and (max-width: 1280px) {
  .projectlist {
    display: flex;
    flex-direction: column;
  }
}
</style>
