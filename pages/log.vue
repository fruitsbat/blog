<template>
  <div>
    <div v-for="post in blogposts">
      <NuxtLink :to="post._path" >{{post.title}}</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ documentDriven: false });
// query blogposts
  const documents = await queryContent()
    .sort({ date: -1 })
    .where({ _partial: false })
    .find();
  const blogposts = documents.filter(
    (doc) => doc?._path?.includes("/log") && !doc?._partial
  );
</script>