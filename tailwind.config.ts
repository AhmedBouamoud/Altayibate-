import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        earth: {
          50: "#fdf8f0",
          100: "#faefd9",
          200: "#f4ddb0",
          300: "#ecc57d",
          400: "#e2a54a",
          500: "#d4892a",
          600: "#b86d1e",
          700: "#96531a",
          800: "#7a431b",
          900: "#64381a",
        },
      },
      fontFamily: {
        arabic: ["Tajawal", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
