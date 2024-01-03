export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/css/main.scss'],
  devServer: {
    port: 8000,
  },
})
