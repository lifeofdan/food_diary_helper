// https://nuxt.com/docs/api/configuration/nuxt-config
import {
  presetUno,
  presetWind,
  presetIcons,
  presetTypography,
  presetAttributify,
} from "unocss";
import { presetDaisy } from "unocss-preset-daisy";

export default defineNuxtConfig({
  modules: ["nuxt-security", "@unocss/nuxt", "@formkit/nuxt", "@vueuse/nuxt"],
  security: {
    headers: {
      crossOriginEmbedderPolicy:
        process.env.NODE_ENV === "development" ? "unsafe-none" : "require-corp",
    },
    rateLimiter: {
      tokensPerInterval: 40,
      interval: "hour",
    },
  },
  runtimeConfig: {
    chat_gpt_key: process.env.CGPT_KEY,
  },
  unocss: {
    presets: [
      presetUno(),
      presetWind(),
      presetTypography(),
      presetAttributify(),
      presetIcons(),
      presetDaisy(),
    ],
  },
  css: ["@unocss/reset/tailwind-compat.css"],
});
