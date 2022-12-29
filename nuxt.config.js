export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Opol Market Stall App",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
      },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [{ src: "/cordova.js" }, { src: "/script.js", defer: true }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/global.css", "~/assets/css/icon.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vuex-persist", ssr: false },
    { src: "~/plugins/sweetalert", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "v-wave/nuxt"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: "nuxtbuilds/",
  },

  router: {
    middleware: "security",
  },

  generate: {
    dir: "opm-cordova/www",
  },

  server: {
    host: "0.0.0.0",
  },

  axios: {
    // proxy: true
    baseURL: "http://192.168.8.102:8000/api",
  },
};
