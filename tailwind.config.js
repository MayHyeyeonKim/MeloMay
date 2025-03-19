/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#C0C0C0",
      },
      backgroundColor: {
        outside: "#111111",
        background: "#121212",
        backgroundPager: "#121212",
      },
    },
  },
  safelist: ["bg-background"],
  plugins: [],
};
