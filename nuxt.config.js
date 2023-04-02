// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    ynabAccessToken: process.env.NUXT_YNAB_ACCESS_TOKEN,
    openAIKey: process.env.NUXT_OPEN_AI_KEY,
  },
});
