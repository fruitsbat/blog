<template>
  <p><slot /></p>
</template>

<style scoped>
p {
  font-size: var(--fs-regular);
  color: var(--white)
}

@media (prefers-color-scheme: light) {
  p {
    color: var(--black);
  }
}
</style>