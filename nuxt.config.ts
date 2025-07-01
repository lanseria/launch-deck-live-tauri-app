export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxt/eslint',
  ],
  app: {
    head: {
      title: 'LaunchDeck Live Tauri App',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'format-detection', content: 'no' },
      ],
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    layoutTransition: {
      name: 'layout',
      mode: 'out-in',
    },
  },
  ssr: false,

  devtools: {
    enabled: false,
  },

  css: [
    '@unocss/reset/tailwind.css',
  ],
  dir: {
    modules: 'app/modules',
  },
  imports: {
    presets: [
      {
        from: 'zod',
        imports: [
          'z',
          {
            name: 'infer',
            as: 'zInfer',
            type: true,
          },
        ],
      },
    ],
  },
  vite: {
    clearScreen: false,
    envPrefix: ['VITE_', 'TAURI_'],
    server: {
      strictPort: true,
      hmr: {
        protocol: 'ws',
        host: '0.0.0.0',
        port: 3001,
      },
      watch: {
        ignored: ['**/src-tauri/**'],
      },
    },
  },
  devServer: {
    host: '0.0.0.0',
    port: 10631,
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  experimental: {
    typedPages: true,
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-04-01',
})
