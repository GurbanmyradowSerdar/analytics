/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "text-main": "#172755",
        "text-secondary": "#8794BA",
        primary: "#172755",
        secondary: "#EF2A82",
      },
    },
  },
  plugins: [],
};
