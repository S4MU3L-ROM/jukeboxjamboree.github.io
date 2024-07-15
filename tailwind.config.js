import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class',
  content: [
    // ...
    // make sure it's pointing to the ROOT node_module
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
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
      transformStyle: { '3d': 'preserve-3d' },
      backfaceVisibility: { hidden: 'hidden' },
      rotateY: {
        '0': '0',
        '180': '180deg',
        '-180': '-180deg'
      },
      perspective: {
        '1000': '1000px'
      },
      keyframes: {
        flipToBack: {
          '0%, 100%': { transform: 'rotateY(0)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
        flipToFront: {
          '0%, 100%': { transform: 'rotateY(-180deg)' },
          '100%': { transform: 'rotateY(0)' },
        },
      },
      animation: {
        flipToBack: 'flipToBack 0.8s forwards',
        flipToFront: 'flipToFront 0.8s forwards',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [nextui()],
}

