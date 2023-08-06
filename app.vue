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
  container: inline-size;
}

.navbar {
  z-index: 999999999999;
  overflow: visible;
  box-shadow: 0 -0.1em 1em var(--ternary-accent),
    0 -0.1em 1em var(--secondary-accent);
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: fit-content;
  gap: var(--pad-size);
  background-color: var(--black);
  background-image: linear-gradient(
    90deg,
    var(--secondary-accent),
    var(--accent) 12.5%,
    var(--accent) 87.5%,
    var(--ternary-accent)
  );
}

@media (prefers-color-scheme: light) {
  .content {
    background-color: var(--white);
  }
}

@media (orientation: landscape) {
  .app {
    flex-direction: row-reverse;
  }

  .navbar {
    box-shadow: 0.1em 0em 1em var(--ternary-accent),
      -0.1em 0em 1em var(--secondary-accent);
    height: 100%;
    background-image: linear-gradient(
      var(--secondary-accent),
      var(--accent) 12.5%,
      var(--accent) 87.5%,
      var(--ternary-accent)
    );
  }
}
</style>
