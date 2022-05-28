module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        code: ["Fira Code"]
      },
      backgroundImage: {
        'hero-bg': "url('/imgs/hero-bg.jpg')"
      },
      colors: {
        'offwhite': 'rgba(255, 255, 255, 0.1)'
      },
      dropShadow: {
        'white': '0 4px 8px rgba(255, 255, 255, 0.2)'
      }
    },
  },
  plugins: [],
}
