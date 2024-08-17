/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        keyframes: {
         
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideInDown: {
            '0%': { transform: 'translateY(-100%)', opacity: 0 },
            '100%': { transform: 'translateY(0)', opacity: 1 },
          },
        },
        animation: {
     
          fadeIn: 'fadeIn 2s ease-in forwards',
          slideInDown: 'slideIn 2s ease-in forwards',
        },
      },
    },
  },
  plugins: [],
}