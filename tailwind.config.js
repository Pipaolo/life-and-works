module.exports = {
  // purge: ["./src/**/*.html", "./src/**/*.js"],
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brown: "#7f5539",
      },
      fontFamily: {
        halimun: ["Halimun", "serif"],
      },
      cursor: {
        hidden: "none",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-textshadow")],
};
