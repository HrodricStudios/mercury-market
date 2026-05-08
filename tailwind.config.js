module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mercury: {
          DEFAULT: "#840000",
          50: "#ffe5e5",
          100: "#ffcccc",
          200: "#ff9999",
          300: "#ff6666",
          400: "#ff3333",
          500: "#840000",
          600: "#6b0000",
          700: "#520000",
          800: "#390000",
          900: "#1f0000",
        },
      },
    },
  },
  plugins: [],
};