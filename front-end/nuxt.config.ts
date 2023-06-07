// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    modules: ['@nuxtjs/i18n', '@pinia/nuxt'],
    css: ['~/assets/css/tailwind.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    i18n: {
        locales: [
            {
                code: "en",
                name: "en"
            },
            {
                code: "tc",
                name: "tc"
            }
        ],
        strategy: 'prefix',
        defaultLocale: 'tc',
    },
})
