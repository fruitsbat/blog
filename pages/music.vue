<template>
  <div class="music-container">
    <div class="music-content">
      <TitleBar title="music" />
      <div class="playlist">
        <ul class="songlist">
          <li v-for="song in store.allSongs">
            <button
              class="song"
              @click="
                store.currentSong == song
                  ? store.togglePlay()
                  : store.play(song as Song)
              "
            >
              <span v-if="song.title == store.currentSong?.title">
                <PauseIcon v-if="player.playing()" />
                <PlayIcon v-else />
              </span>
              <span>{{ song.title }}</span>
            </button>
          </li>
        </ul>
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

.songlist {
  list-style: none;
  padding: var(--pad-size);
  gap: var(--pad-size-small);
  display: flex;
  flex-direction: column;
}

@mixin song-border {
  border: none;
  border-top: solid;
  border-bottom: solid;
}

.song {
  padding: var(--pad-size);
  @include song-border;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: var(--pad-size);
  justify-content: left;
  align-items: cen;
}

svg {
  width: var(--fs-large);
  height: var(--fs-large);
}

span {
  display: flex;
  align-items: center;
}

button {
  cursor: pointer;
}
</style>
