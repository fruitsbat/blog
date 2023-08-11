import type { MarkdownParsedContent } from "@nuxt/content/dist/runtime/types";

interface Blogpost extends MarkdownParsedContent {
  image: String;
}
