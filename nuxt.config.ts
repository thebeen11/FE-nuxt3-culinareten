// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  runtimeConfig:{
    baseUrl: process.env.BASE_URL
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
  modules: [
    '@vueuse/nuxt', 
  ],
 
})
