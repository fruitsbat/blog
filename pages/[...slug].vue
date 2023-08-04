<template>
  <main>
    <div class="blogpost">
      <ContentDoc v-if="$route.params.slug"/>
    </div>
  </main>
</template>

<script setup lang="ts">
</script>


<style scoped>
.blogpost {
  padding: var(--pad-size);
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
}
</style>