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
