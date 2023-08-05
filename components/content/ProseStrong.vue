<template>
  <strong>
    <slot />
  </strong>
</template>

<style scoped lang="scss">
@import "@/assets/scss/shadows.scss";

strong {
  @include text-shadows;
}
</style>