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
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
}

.content {
  overflow: scroll;
}
</style>
