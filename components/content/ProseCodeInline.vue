<template>
  <code><slot /></code>
</template>

<style scoped lang="scss">
@import "@/assets/scss/shadows.scss";

@media (prefers-color-scheme: light) {
  code {
    @include text-shadows;
    background-color: var(--black);
    border-radius: var(--radius);
    padding-left: var(--pad-size-small);
    padding-right: var(--pad-size-small);
  }
}
</style>