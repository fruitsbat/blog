<template>
  <div class="app">
    <div class="content">
      <NuxtPage />
    </div>
    <div class="navbar">
      <NavBar />
    </div>
  </div>
</template>

<style scoped>
.app {
  position: fixed;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  width: 100vw;
}

.content {
  overflow-y: scroll;
  flex-grow: 1;
  background-color: var(--black);
}

.navbar {
  padding: var(--pad-size);
  overflow: visible;
  background-color: var(--accent);
  box-shadow: 0 -0.1em 1em var(--ternary-accent), 0 -0.1em 1em var(--secondary-accent);
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: fit-content;
  gap: var(--pad-size);
}

@media (prefers-color-scheme: dark) {
  .content {
    background-color: var(--white);
  }
}
</style>
