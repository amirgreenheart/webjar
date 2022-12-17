module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./component/**/*.{js,ts,jsx,tsx}",
    "./page-component/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Dana: ["Dana", "sans-serif"],
      DemiBold: ["DemiBold", "sans-serif"],
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        allowGreen: "rgb(var(--allow-green))",
        allowGreenLight: "rgb(var(--allow-green-light))",
        allowRed: "rgb(var(--allow-red))",
        allowDisabled: "rgb(var(--allew-disabled))",
        textDisabled: "rgb(var(--text-disabled))",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
