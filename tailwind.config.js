/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          celeste: "#AEE3EB",
          lime:    "#B7D96B",
          pink:    "#E8C7DC",
          outline: "#5C5C5C",
          ink:     "#2B2F33",
        },
        neutralx: {
          bg: "#FAFCFE",
          surface: "#FFFFFF",
          border: "#E7EDF3",
          text: "#0F172A",
          muted: "#475569",
        },
      },
      borderRadius: { "2xl": "1rem" },
      maxWidth: { "7xl": "80rem" },
    },
  },
  plugins: [],
};
