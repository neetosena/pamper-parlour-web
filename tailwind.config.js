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
        "lighter-pink": "#FFF0F4",
        "middle-pink": "#F69FBA",
        blue: "##423FD7",
        "light-blue": "#EBEBFF",
        silver: "#716F71",
        "light-silver": "#F0F0F0",
        gold: "#A28A21",
        "light-gold": "#F9F5E7",
        black: "#1F1F1F",
        green: "#51BA2C",
      },
    },
  },
  plugins: [],
};
