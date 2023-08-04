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
  overflow: scroll;
  flex-grow: 1;
  background-color: var(--black);
}

.navbar {
  background-color: var(--accent);
}
</style>
