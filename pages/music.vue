<template>
  <TitleBar title="music" />
  <div class="music-player">
    <div class="now-playing"></div>
    <div class="playlist">
      <ul>
        <li v-for="song in store.allSongs">
          <button
            @click="
              store.currentSong?.title == song.title
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
          <span>{{song.title}}</span>
          </button>
        </li>
      </ul>
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
const store = useNPStore();
store.load();
</script>
