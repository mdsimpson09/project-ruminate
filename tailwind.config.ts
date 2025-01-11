import type { Config } from "tailwindcss";
import daisyui from 'daisyui';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        ruminate: {
          "primary": "#790e4a",
          "primary-content": "#f7cbc0",
          "secondary": "#11639a",
          "secondary-content": "#def7ea",
          "accent": "#563058",
          "accent-content": "#f8f5f1",
          "neutral": "#f8f5f1",
          "neutral-content": "#222737",
          "base-0": "#ffffff",
          "base-100": "#f6f6f8",
          "base-200": "#DEDFE3",
          "base-300": "#C7C8CD",
          "base-400": "#AFB1B8",
          "base-500": "#989AA2",
          "base-600": "#80838D",
          "base-700": "#696C77",
          "base-800": "#515562",
          "base-900": "#3A3E4C",
          "base-1000": "#000000",
          "base-content": "#222737",
          "info": "#563058",
          "info-content": "#f8f5f1",
          "success": "#7eb672",
          "success-content": "#222737",
          "warning": "#fba63a",
          "warning-content": "#222737",
          "error": "#D93226",
          "error-content": "#222737",
        },
      },
      {
        ruminatedark: {
          "primary": "#f7cbc0",
          "primary-content": "#790e4a",
          "secondary": "#def7ea",
          "secondary-content": "#11639a",
          "accent": "#f8f5f1",
          "accent-content": "#563058",
          "neutral": "#222737",
          "neutral-content": "#f8f5f1",
          "base-0": "#000000",
          "base-100": "#80838D",
          "base-200": "#696C77",
          "base-300": "#515562",
          "base-400": "#3A3E4C",
          "base-500": "#989AA2",
          "base-600": "#f6f6f8",
          "base-700": "#DEDFE3",
          "base-800": "#C7C8CD",
          "base-900": "#AFB1B8",
          "base-1000": "#ffffff",
          "base-content": "#222737",
          "info": "#563058",
          "info-content": "#f8f5f1",
          "success": "#7eb672",
          "success-content": "#222737",
          "warning": "#fba63a",
          "warning-content": "#222737",
          "error": "#D93226",
          "error-content": "#222737",
        }
      }
    ],
  },
  plugins: [
    daisyui
  ],
} satisfies Config;
