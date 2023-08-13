<template>
  <div class="music-player">
    <div class="control">
      <button @click="store.stop()"><StopIcon />stop</button>
      <button v-if="player.playing()" @click="store.togglePlay()">
        <PauseIcon />pause
      </button>
      <button v-else @click="store.togglePlay()"><PlayIcon />play</button>
      <label for="music-seek"><MapPinIcon />position</label>
      <Slider
        id="music-volume"
        :options="{animated: false,}"
        :tooltips="false"
        :max="player.duration()"
        :min="0"
        :step="0.05"
        class="music-seek slider"
        :value="player.seek()"
        @slide="(value: number) => player.seek(value)"
      />
      <label for="music-volume"><SpeakerWaveIcon />volume</label>
      <Slider
        id="music-volume"
        :options="{animated: false,}"
        :tooltips="false"
        :max="1"
        :min="0"
        :step="0.05"
        class="volume-slider slider"
        :value="player.volume()"
        @change="(value: number) => player.volume(value)"
      />
    </div>
    <div class="info">
      <span class="seek-position">{{ store.seek }} </span>
      <div class="song-title">
        <span>{{ store.currentSong!.title }}</span>
        <a :href="store.currentSong!.file" download
          ><ArrowDownTrayIcon />download</a
        >
      </div>
      <span class="length">
        {{ prettyMilliseconds(Math.ceil(player.duration()) * 1000) }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import Slider from "@vueform/slider";
import prettyMilliseconds from "pretty-ms";
import { useNPStore, player } from "~/stores/now_playing_store";
import {
  StopIcon,
  PauseIcon,
  PlayIcon,
  SpeakerWaveIcon,
  MapPinIcon,
  ArrowDownTrayIcon,
} from "@heroicons/vue/24/solid";
const store = useNPStore();
</script>

<style scoped lang="scss">
@import "~/assets/scss/shadows.scss";

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
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: var(--fs-small);
  text-align: center;
  flex-grow: 3;
  flex-basis: 0;
  gap: var(--pad-size-small);
}

.volume-slider {
  flex-grow: 1;
}

.info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
  padding-left: var(--pad-size-small);
  padding-right: var(--pad-size-small);
  @include drop-shadows;
}

svg {
  width: var(--fs-small);
  height: var(--fs-small);
}

button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-style: none;
}

button:hover,
button:focus {
  cursor: pointer;
}

label {
  display: flex;
  align-items: center;
}

a {
  color: black;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.music-seek {
  flex-grow: 1;
}

.slider {
  @include drop-shadows;
  --slider-handle-bg: var(--black);
  --slider-connect-bg: var(--black);
  --slider-bg: var(--ternary-accent);
  --slider-handle-shadow: none;
  --slider-handle-radius: var(--radius);
}
</style>

<style src="@vueform/slider/themes/default.css"></style>
