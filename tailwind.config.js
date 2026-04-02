export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        glass: "rgb(var(--glass-bg-rgb) / var(--glass-opacity))",
        glassBorder: "rgb(var(--glass-border-rgb) / var(--glass-border-opacity))",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
