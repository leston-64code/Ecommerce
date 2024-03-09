/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
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