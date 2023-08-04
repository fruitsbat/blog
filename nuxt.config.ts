// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  experimental: {
    payloadExtraction: true,
  },
  css: ["~/assets/css/style.css"],
  ssr: true,
  devtools: {
    enabled: true,
  },
  modules: ["@nuxt/content"],
  nitro: {
    prerender: {
      routes: ["/index.xml"],
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "alternate",
          type: "application/rss+xml",
          href: "/index.xml",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.svg",
        },
      ],
    },
  },
});
