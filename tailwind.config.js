/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customlightBlack: '#2B2B2B',
        customYellow:"#F6DC04",
        customLightPink: "#E6B2A9"
      
      },
      fontFamily: { 
        "kenia": ['Kenia', 'sans-serif'] 
    } 
    },
  },
  plugins: [],
}

