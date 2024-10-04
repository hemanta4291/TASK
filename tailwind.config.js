import { Container } from "postcss";

/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        grayDark: "var(--gray-dark-color)",
        grayBorder: "var(--gray-border-color)",
        bgRGB: "var(--bg-rgb-color)",
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
