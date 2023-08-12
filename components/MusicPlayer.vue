<template>
  <div class="music-player">
      <div v-if="store.currentSong" class="now-playing">
        <span>{{ store.currentSong.title }}</span>
        <span
          >{{ store.seek }} /
          {{ prettyMilliseconds(Math.ceil(player.duration()) * 1000) }}</span
        >
      </div>
    </div>
</template>

<script setup lang="ts">
import prettyMilliseconds from "pretty-ms";
import { useNPStore, player } from "~/stores/now_playing_store";
const store = useNPStore();
</script>