<template>
  <div class="music-player">
    <div class="control">
      <button @click="store.stop()"><StopIcon />stop</button>
      <button v-if="player.playing()" @click="store.togglePlay()">
        <PauseIcon />pause
      </button>
      <button v-else @click="store.togglePlay()"><PlayIcon />play</button>
      <label for="music-seek">position</label>
      <input
        class="music-seek"
        id="music-seek"
        type="range"
        :value="player.seek()"
        min="0"
        :max="player.duration()"
        @change="player.seek($event.target.value)"
      />
      <label for="music-volume"><SpeakerWaveIcon />volume</label>
      <input
        id="music-volume"
        type="range"
        :value="player.volume()"
        min="0"
        step="0.05"
        max="1"
        @change="player.volume($event.target.value)"
      /> 
    </div>
    <div class="info">
      <span class="seek-position">{{ store.seek }} </span>
      <span class="song-title">{{ store.currentSong.title }}</span>
      <span class="length">
        {{ prettyMilliseconds(Math.ceil(player.duration()) * 1000) }}</span
      >
    </div>
  </div>
</template>

<script setup lang="js">
import prettyMilliseconds from "pretty-ms";
import { useNPStore, player } from "~/stores/now_playing_store";
import { StopIcon, PauseIcon, PlayIcon, SpeakerWaveIcon } from "@heroicons/vue/24/solid";
const store = useNPStore();
</script>

<style scoped lang="scss">
.length {
  flex-grow: 1;
  flex-basis: 0;
  text-align: right;
}

.seek-position {
  flex-grow: 1;
  flex-basis: 0;
}

.song-title {
  text-align: center;
  flex-grow: 2;
  flex-basis: 0;
}

.info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.control {
  word-break: keep-all;
  gap: var(--pad-size-small);
  display: flex;
  flex-direction: row;
  align-items: center;
}

* {
  font-size: var(--fs-small);
  word-break: keep-all;
  flex-wrap: wrap;
}

.music-player {
  background-image: url("/img/texture.webp");
  background-color: var(--secondary-accent);
  display: flex;
  flex-direction: column;
  gap: var(--pad-size-small);
  padding: var(--pad-size-small);
}

svg {
  width: var(--fs-small);
  height: var(--fs-small);
}

button {
  gap: var(--pad-size-small);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

label {
  display: flex;
  align-items: center;
  gap: var(--pad-size-small);
}

.music-seek {
  flex-grow: 1;
}
</style>
