import type {
  MarkdownParsedContent,
  ParsedContent,
} from "@nuxt/content/dist/runtime/types";

interface Blogpost extends MarkdownParsedContent {
  image: string;
}

interface Project extends ParsedContent {
  image: string;
  link: string;
}

// type Album = {
//   date: string;
//   magnetLink: null | string;
//   bandcampLink: null | string;
// };

interface Song extends ParsedContent {
  date: string;
  title: string;
  file: string;
  album: Album;
}
