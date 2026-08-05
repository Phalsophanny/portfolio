// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: ["~/assets/css/Main.css"],

  modules: ["@nuxt/fonts", "@nuxtjs/color-mode"],

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  colorMode: {
    preference: "system", // light | dark | system
    fallback: "dark",
    classSuffix: "",
  },
});
