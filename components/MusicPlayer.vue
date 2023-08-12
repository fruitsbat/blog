<template>
  <div class="music-player">
    <div class="control">
      <button @click="store.stop()"><StopIcon />stop</button>
      <button v-if="player.playing()" @click="store.togglePlay()"><PauseIcon />pause</button>
      <button v-else @click="store.togglePlay()"><PlayIcon/>play</button>
    </div>
    <div class="info">
      <div v-if="store.currentSong" class="now-playing">
        <span>{{ store.currentSong.title }}</span>
        <span
          >{{ store.seek }} /
          {{ prettyMilliseconds(Math.ceil(player.duration()) * 1000) }}</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import prettyMilliseconds from "pretty-ms";
import { useNPStore, player } from "~/stores/now_playing_store";
import { StopIcon, PauseIcon, PlayIcon } from "@heroicons/vue/24/solid";
const store = useNPStore();
</script>
