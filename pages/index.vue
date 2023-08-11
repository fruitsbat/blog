<template>
  <div>
    <TitleBar title="home" />
    <div class="intro-container">
      <div class="model-3d">
        <ClientOnly>
          <ThreeDeeModel file="/models/minime.gltf" class="mini-me" />
        </ClientOnly>
      </div>
      <div class="who-am-i">
        <ProseH2 id="about-me"> who am i??? </ProseH2>
        <ProseP>
          this is a strange question really since i already know who i am. if
          <ProseStrong>you</ProseStrong> would like to know who i am i am happy
          to answer.
        </ProseP>
        <ProseP>
          i'm <ProseStrong>zoe</ProseStrong>, a
          <ProseStrong>22</ProseStrong> year old university student from
          <ProseStrong>hamburg</ProseStrong>.
        </ProseP>
        <ProseP
          ><ProseStrong>i love to spin around on this website</ProseStrong> but
          can enjoy other things too.</ProseP
        >
        <ProseP>
          these include but are not limited to:
          <ProseStrong>programming</ProseStrong>,
          <ProseStrong>making art or music</ProseStrong> and
          <ProseStrong>learning things about computers</ProseStrong>. ideally a
          combination of those three.
          <br />
          i also love
          <ProseA href="https://lotte.kittycat.homes"
            >my girlfriend lotte</ProseA
          >!
        </ProseP>
      </div>
    </div>
    <div class="intro-container contact-container">
      <div class="contact-me">
        <ProseH2 id="contact-me">contact me</ProseH2>
        <ProseP>
          if you want to talk to me, you can send me a message on
          <ProseA href="https://matrix.to/#/@bat:matrix.kittycat.homes"
            >matrix</ProseA
          >
          or
          <ProseA href="https://discordapp.com/users/200666655016091648"
            >discord</ProseA
          >. generally i will answer faster on matrix.
        </ProseP>
      </div>
      <div class="model-3d">
        <ClientOnly>
          <ThreeDeeModel file="/models/letter.gltf" class="mini-me" />
        </ClientOnly>
      </div>
    </div>
    <div class="intro-container">
      <div class="model-3d">
        <ClientOnly>
          <ThreeDeeModel file="/models/globe.gltf" class="mini-me" />
        </ClientOnly>
      </div>
      <div class="webring">
        <ProseH2 id="webring">webring</ProseH2>
        <ProseP>
          this page is part of the
          <ProseA href="https://ring.bicompact.space/">armisael webring</ProseA
          >. check it out!
        </ProseP>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "zoe bat website",
});

definePageMeta({ documentDriven: false });
</script>

<style scoped lang="scss">
.intro-container {
  display: flex;
  width: 100%;
  scroll-behavior: auto;
  gap: var(--pad-size);
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

.model-3d {
  flex-basis: 0;
  flex-grow: 1;
  aspect-ratio: 1/1;
}

.contact-me {
  padding: var(--pad-size);
  flex-basis: 0;
  flex-grow: 2;
}

.who-am-i {
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  gap: var(--pad-size);
  padding: var(--pad-size);
  flex-grow: 2;
  padding: var(--pad-size);
}

.webring {
  padding: var(--pad-size);
  flex-grow: 2;
  flex-basis: 0;
}

.overlay {
  position: absolute;
}

@media screen and (max-width: 640px) {
  .intro-container.contact-container {
     flex-direction: column-reverse;
   }
   .intro-container {
     display: flex;
     flex-direction: column;
     align-items: stretch;
   }

  .model-3d {
     display: flex;
    align-items: center;
     justify-content: center;
     width: 100%;
     aspect-ratio: 1/1;
   }
    }
</style>
