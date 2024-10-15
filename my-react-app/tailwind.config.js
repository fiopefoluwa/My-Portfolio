/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        surname: 'surname 5s infinite alternate',
        firstname: 'firstname 10s linear',
        movePercentage: 'movePercentage 2s ease',
      },
      keyframes: {
        surname: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100px)' },
        },
        firstname: {
          '0%': { marginTop: '50%' },
          '100%': { marginTop: '0%' },
        },
        movePercentage: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}
