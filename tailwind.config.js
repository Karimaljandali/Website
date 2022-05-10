module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        code: ["Fira Code"]
      },
      backgroundImage: {
        'hero-bg': "url('/imgs/hero-bg.jpg')"
      }
    },
  },
  plugins: [],
}
