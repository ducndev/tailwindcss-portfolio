/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        xsm: "360px",
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      spacing: {
        big: "48rem",
      },
    },

    fontFamilys: {
      nunito: ["Nunito", "sans-serif"],
    },
  },
  plugins: [],
};
