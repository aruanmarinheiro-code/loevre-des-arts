import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0A0A0A",
          white: "#FFFFFF",
          cream: "#F5F0E8",
          "off-white": "#FAF8F4",
          stone: "#E8E4DC",
          charcoal: "#2A2A2A",
          gray: "#9A9590",
          "light-gray": "#D4CFC8",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.3em",
        "ultra-wide": "0.5em",
      },
      transitionDuration: {
        "400": "400ms",
      },
    },
  },
  plugins: [],
};

export default config;
