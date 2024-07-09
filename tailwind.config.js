/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#38527b",
        secondary: "#192943"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          md: '3rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        }
      },
      gridTemplateColumns: {
        'custom-6': '0.5fr 2fr 1fr 1fr 1fr 1fr',
      },

    },
  },
  plugins: [],
}

