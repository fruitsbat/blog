import { defineStore } from "pinia";
import { Song } from "types";
import { Howl } from "howler";

let player: Howl;

type NPState = {
  allSongs: Song[];
  currentSong: Song | null;
  volume: number;
  playing: boolean;
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
      this.playing = true;
      if (player) {
        player.stop();
      }

      player = new Howl({
        src: [song.file],
        volume: this.volume,
        html5: true,
      });
      player.play();
      this.currentSong = song;
    },
    togglePlay() {
      if (player.playing()) {
        player.pause();
        this.playing = false;
        return;
      }

      player.play();
      this.playing = true;
    },
  },
  getters: {
    position() {
      return player.seek();
    },
  },
});
