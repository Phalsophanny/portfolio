// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: ["~/assets/css/Main.css", "~/assets/css/fonts.css"],

  modules: ["@nuxt/fonts", "@nuxtjs/color-mode", "@nuxtjs/i18n"],

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
      ],
    },
  },
  colorMode: {
    preference: "dark", // light | dark | system
    fallback: "dark",
    classSuffix: "",
  },
  fonts: {
    families: [
      {
        name: "Inter",
        provider: "google",
      },
      {
        name: "Noto Sans Khmer",
        provider: "google",
      },
    ],
  },
  i18n: {
    defaultLocale: "en",

    locales: [
      {
        code: "en",
        name: "English",
        file: "en.json",
      },
      {
        code: "kh",
        name: "ខ្មែរ",
        file: "kh.json",
      },
    ],
  },

  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,
    githubUsername: process.env.GITHUB_USERNAME,
  },
});
