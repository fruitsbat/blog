// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  experimental: {
    payloadExtraction: true,
  },
  css: ["~/assets/scss/style.scss"],
  ssr: true,
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: ["@nuxt/content", "@vueuse/nuxt", "@pinia/nuxt"],
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: true,
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
  content: {
    documentDriven: false,
  },
});
