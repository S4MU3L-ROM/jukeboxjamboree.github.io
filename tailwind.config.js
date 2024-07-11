/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: {
          light: 'rgba(167,139,250,0.22)',
          DEFAULT: 'rgb(101,66,140)',
          dark: '#4C1D95',
        },
        teal: {
          DEFAULT: '#14B8A6',
        },
        pink: {
          light: '#F9A8D4',
          DEFAULT: '#F472B6',
        },
        gray: {
          light: '#E5E7EB',
          dark: '#374151',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

