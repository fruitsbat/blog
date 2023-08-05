<template>
  <code><slot /></code>
</template>

<style scoped>
@media (prefers-color-scheme: dark) {
  code {
    background-color: var(--black);
    border-radius: var(--radius);
    padding-left: var(--pad-size-small);
    padding-right: var(--pad-size-small);
  }
}
</style>