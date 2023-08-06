<template>
  <div class="postlist">
    <div v-for="post in blogposts">
      <NuxtLink :to="post._path">
        <div
          class="postcard"
          v-bind:style="{ backgroundImage: 'url(' + post.image + ')' }"
        >
          <div class="postcard-overlay">
            <div class="postcard-texture">
              <h2>{{ post.title }}</h2>
              <span class="description">
                {{ post.description }}
              </span>
            </div>
          </div>
        </div></NuxtLink
      >
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

<style scoped lang="scss">
@import "@/assets/scss/shadows.scss";
@import "@/assets/scss/animated_background.scss";

.postlist {
  padding: var(--pad-size);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(540px, 1fr));
  gap: var(--pad-size);
}

.postcard {
  background-color: var(--black-transparent);
  height: 100%;
  background-size: cover;
  border-radius: var(--radius);
  @include drop-shadows;
}

.postcard-overlay {
  background-color: var(--black-transparent);
  border-radius: var(--radius);
  height: 100%;
}

.postcard-texture {
  background-image: url("/img/texture.webp");
  border-radius: var(--radius);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
}

h2 {
  padding: var(--pad-size);
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.description {
  width: 100%;
  padding: var(--pad-size);
  background-image: linear-gradient(transparent, var(--black));
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  color: var(--white);
  @include text-shadows;
}

a:hover > * > * > .postcard-texture {
  @include animated-background;
}

a {
  color: var(--accent);
  text-decoration: none;
  @include animated-shadows;
}

h2 {
  font-size: var(--fs-xl);
}

@container (max-width: 720px) {
  .postlist {
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-size: var(--fs-large);
  }
}
</style>
