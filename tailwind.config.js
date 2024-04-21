/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#006d77",
        secondary: "#83c5be",
        tertiary: "#edf6f9",
      },
      fontFamily: {
        satisfy: ['"Satisfy", cursive'],
        grotesque: ['"Darker Grotesque", sans-serif'],
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
