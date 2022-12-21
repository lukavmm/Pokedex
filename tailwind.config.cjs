/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        forest: "url('/assets/forest.jpg')",
      },
    },
  },
  plugins: [],
};
