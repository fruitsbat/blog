<template>
  <code><slot /></code>
</template>

<style scoped lang="scss">
@import "@/assets/scss/shadows.scss";

code {
  @include text-shadows;
  padding-left: var(--pad-size-small);
  padding-right: var(--pad-size-small);
  display: inline-flex;
  align-items: center;
  gap: var(--pad-size-small);
  color: var(--accent);
  background-color: var(--black);
  border-radius: var(--radius);
  text-decoration: none;
  text-decoration-color: var(--accent);
  text-decoration-thickness: var(--border-width);
  background-image: url("/img/texture.webp");
  @include drop-shadows;

}

@media (prefers-color-scheme: light) {
  code {
    background-color: var(--black);
    border-radius: var(--radius);
    padding-left: var(--pad-size-small);
    padding-right: var(--pad-size-small);
  }
}
</style>