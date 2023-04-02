// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    ynabAccessToken: process.env.NUXT_YNAB_ACCESS_TOKEN, // can be overridden by NUXT_API_SECRET environment variable
  },
});
