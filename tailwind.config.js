/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        minusNavbar: "calc(100vh - 90px)",
      },
      gridTemplateRows: {
        '1fr-auto': '1fr auto',
        'auto-1fr': 'auto 1fr',
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
        'auto-1fr': 'auto 1fr',
        '1fr-auto': '1fr auto',
        'auto-auto': 'auto auto',
      },
      colors: {
        color: "#222327",
        colorLight: "#e7e8ea",
        mainColor: "#29fd53",
        mainColorLight: "#02ca2a",
      },
    },
  },
  plugins: [],
};
