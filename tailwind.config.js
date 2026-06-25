/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#2d8a6b',
          DEFAULT: '#1b614a',
          dark: '#0f3d2e',
        }
      }
    },
  },
  plugins: [],
}