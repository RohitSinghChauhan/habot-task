/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      default: ["Roboto", "sans-serif"],
    },
    extend: {
      backgroundColor: {
        default: "white",
        primary: "#ECFEFF",
        secondary: "#097347",
      },
    },
    screens: {
      sm: "0px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
