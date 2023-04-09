/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        lato: ["Lato", "sans-serif"]
      },
      colors: {
        'bgwhite': '#F5F5F5',
        'link-blue': '#346BD4',
      },
    },
  },
  plugins: [],
}