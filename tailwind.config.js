/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        // sm: "800px",
        // md: "1000px",
        // lg: "1200px",
        // xl: "1400px",
        // "2xl": "1600px",
        txl: { raw: "(min-height: 1100px)" },
        tlg: { raw: "(min-height: 970px)" },
        tmd: { raw: "(min-height: 900px)" },
        tsm: { raw: "(min-height: 860px)" },
      },
    },
  },
  plugins: [],
};
