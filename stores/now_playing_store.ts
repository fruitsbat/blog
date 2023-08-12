import { defineStore } from "pinia";
import { Song } from "types";
import { Howl } from "howler";
import prettyMilliseconds from "pretty-ms";

const player = ref(
  new Howl({
    src: ["/music/z-type-ultra_howells-theme.mp3.mp3"],
  })
);

export { player };

type NPState = {
  allSongs: Song[];
  currentSong: Song | null;
  volume: number;
  progress: number;
  loaded: boolean;
  seek: string;
};

export const useNPStore = defineStore({
  id: "np",
  state: () =>
    ({
      loaded: false,
      allSongs: [],
      currentSong: null,
      volume: 0.1,
      playing: false,
      progress: 0,
      seek: "/",
    } as NPState),
  actions: {
    async load() {
      if (this.loaded) {
        console.log("music already loaded! returning...");
        return;
      }
      const songs = await queryContent<Song>("music").sort({ date: -1 }).find();
      this.allSongs = songs;
      this.loaded = true;
      timeUpdate();
    },
    stop() {
      player.value.stop();
      this.currentSong = null;
    },
    play(song: Song) {
      this.changeSong(song);
      player.value.play();
    },
    changeSong(song: Song) {
      if (player) {
        player.value.stop();
      }

      player.value = new Howl({
        src: [song.file],
        volume: this.volume,
        html5: true,
      });

      this.currentSong = song;
    },
    togglePlay() {
      if (player.value.playing()) {
        player.value.pause();
        return;
      }

      player.value.play();
    },
  },
});

async function timeUpdate() {
  const store = useNPStore();
  store.seek = prettyMilliseconds(Math.floor(player.value.seek()) * 1000, {});
  store.progress = player.value.seek() / player.value.duration();
  setTimeout(timeUpdate, 1000);
}
