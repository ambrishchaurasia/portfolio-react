/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#021024",
        richblue: "#052659",
        midblue: "#2E5984",
        mutedblue: "#5483B3",
        softblue: "#7DA0CA",
        skyblue: "#C1E8FF",
      },
    },
  },
  plugins: [],
}