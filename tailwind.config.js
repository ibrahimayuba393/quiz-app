/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      serif: ["Tiro Telugu", "serif"],
      pacifico: ["Pacifico", "serif"],
    },
    extend: {
      colors: {
        primary: "#fd7e14",
        secondary: "#ffe5d0",
      },
      spacing: {
        200: "50rem",
        155: "38.75rem",
        140: "35rem",
        128: "32rem",
        120: "30rem",
        105: "26.25rem",
        102: "25.5rem",
        100: "25rem",
        90: "22.5rem",
        85: "21.25rem",
        87: "21.75rem",
        69: "17.25rem",
      },
      backgroundImage: {
        "submit-page-image": "url('../images/4529164.jpg')",
      },
    },
  },
  plugins: [],
};
