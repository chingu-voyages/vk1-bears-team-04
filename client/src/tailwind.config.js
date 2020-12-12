module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fluidContainer: {
      default: {
        maxWidth: "800px", // defaults to null (no max width)
        padding: "15px", // defaults to '15px'
      },
    },
  },
 
  variants: {
    fluidContainer: ["responsive"], // defaults to ['responsive']
    extend: {},
  },
  plugins: [require("tailwindcss-fluid-container")],
};
