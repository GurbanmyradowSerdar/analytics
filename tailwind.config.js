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
        "text-main-color": "#172755",
        "text-secondary-color": "#8794BA",
        "primary-color": "#172755",
        "secondary-color": "#EF2A82",
      },
      screens: {
        lg: "1025px",
        xl: "1281px",
        "2xl": "1537px",
      },
    },
  },
  plugins: [],
};
