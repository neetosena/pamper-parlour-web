/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      body: ["Poppins", "sans-serif;"],
      manuscript: ["Pacifico", "cursive"],
    },
    extend: {
      maxWidth: {
        "22rem": "22rem",
        "30rem": "30rem",
        "41rem": "41rem",
        "850px": "850px",
      },
      spacing: {
        "22rem": "22rem",
      },
      colors: {
        pink: "#C30082",
        "light-pink": "#FACAD9",
        black: "#1F1F1F",
        gold: "#A28A21",
      },
    },
  },
  plugins: [],
};
