/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  theme: {
    extend: {
      colors:{
        // super:"rgba(114,35,204)"
        // sideBgColor:"var(--sideBgColor)",
        sideBgColor:"rgba(var(--sideBgColor))",
        sideSubBgColor:"rgba(var(--sideSubBgColor))",
        mainBg:"rgba(var(--mainBg))",
        sideTextColor:"rgba(var(--sideTextColor))",
        sideHoverTextColor:"rgba(var(--sideHoverTextColor))",
      }
    },
  },
  plugins: [],
}