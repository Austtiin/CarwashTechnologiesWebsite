// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f59e0b', // A nice, strong yellow
          light: '#fcd34d',
          dark: '#b45309',
        },
        secondary: {
          DEFAULT: '#1f2937', // A dark gray for text and backgrounds
          light: '#4b5563',
          dark: '#111827',
        },
        accent: {
          DEFAULT: '#3b82f6', // A complementary blue for highlights
        },
      },
    },
  },
  plugins: [],
};

export default config;