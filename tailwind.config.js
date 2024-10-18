/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      varelmo: ["Varelmo","sans-serif"],
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')  // Add this line to use the scrollbar hide plugin
  ],
}
