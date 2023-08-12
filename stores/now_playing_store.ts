import { defineStore } from "pinia";
import { Song } from "types";
import { Howl } from "howler";

const player = ref(
  new Howl({
    src: ["public/music/z-type-ultra_howells-theme.mp3.mp3"],
  })
);

export { player };

type NPState = {
  allSongs: Song[];
  currentSong: Song | null;
  volume: number;
};

export const useNPStore = defineStore({
  id: "np",
  state: () =>
    ({
      allSongs: [],
      currentSong: null,
      volume: 0.1,
      playing: false,
    } as NPState),
  actions: {
    async load() {
      const songs = await queryContent<Song>("music").sort({ date: -1 }).find();
      this.allSongs = songs;
    },
    play(song: Song) {
      if (player) {
        player.value.stop();
      }

      player.value = new Howl({
        src: [song.file],
        volume: this.volume,
        html5: true,
      });
      player.value.play();
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
