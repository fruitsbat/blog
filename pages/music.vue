<template>
  <div class="music-container">
    <div class="music-content">
      <TitleBar title="music" />
      <div class="playlist">
        <ul>
          <li v-for="song in store.allSongs">
            <button
              @click="
                store.currentSong == song
                  ? store.togglePlay()
                  : store.play(song as Song)
              "
            >
              <span v-if="song.title == store.currentSong?.title">
                <div v-if="player.playing()">
                  <PauseIcon />
                </div>
                <div v-else>
                  <PlayIcon />
                </div>
              </span>
              <span>{{ song.title }}</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="music-player">
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
import { PlayIcon, PauseIcon } from "@heroicons/vue/24/solid";

definePageMeta({ documentDriven: false });
useHead({
  title: "music",
});

import { Song } from "types";
import { useNPStore, player } from "~/stores/now_playing_store";
import prettyMilliseconds from "pretty-ms";

const store = useNPStore();
store.load();
</script>

<style scoped lang="scss">
.music-content {
  overflow-y: auto;
  height: 100%;
  flex-grow: 1;
}

.music-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
