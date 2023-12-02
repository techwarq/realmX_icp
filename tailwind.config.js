/** @type {import('tailwindcss').Config} */


const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'amber': {
          '100': '#5b2c2c',
        },
        'dark-brown': {
          '800': '#493F3F',
        },
        'orange': {
          '700': '#FFA500',
        },
        'brown': {
          '800': '#f0e3cb',
        },
      },
      fontFamily: {
        "Poppins": ['Poppins', 'sans-serif'],
        "Fjalla+One": ['Fjalla+One', 'sans-serif'],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [Myclass],
};
