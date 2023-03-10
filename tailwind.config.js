/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      blackhans: ["Black Han Sans", "sans-serif"],
      opensans: ["Open Sans", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "10rem",
          "2xl": "10rem",
        },
      },
      colors: {
        primary: "#404eed",
        black: "#23272a",
      },
    },
  },
  plugins: [],
};
