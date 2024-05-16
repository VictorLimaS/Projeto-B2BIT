/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      boxShadow: {
        '3x1': '0px 0px 100px 10px rgba(0, 0, 0, 0.2)', 
      },
      padding: {
        'padding': '55px 26.25px 40.13px 25.85px',
      },
    },
  },
  plugins: [],
}

