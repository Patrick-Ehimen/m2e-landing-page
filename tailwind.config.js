/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        lightGray: "#D9D9D9C9",
        secondary: "#ffffff",
        "transparent-white": "rgba(255, 255, 255, 0.06)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
    screens: {
      // ss: "620px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
  },
  variants: {},
  plugins: [],
};
