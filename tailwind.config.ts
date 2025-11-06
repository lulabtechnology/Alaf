import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta clara y profesional
        brand: {
          // primario profundo (azul petróleo)
          primary: "#173B5F",
          // primario claro para hovers y fondos suaves
          primaryLight: "#E9F1F7",
          // acentos (celeste suavizado y lima suave)
          sky: "#4AA8D8",
          lime: "#8BCB6D",
          // rosa muy tenue para badges
          pink: "#F6DDE6",
        },
        neutralx: {
          bg: "#F7F8FA",         // fondo general
          surface: "#FFFFFF",    // tarjetas/sections
          border: "#E6E8EC",     // bordes sutiles
          text: "#0F172A",       // texto principal (slate-900)
          muted: "#4B5563",      // texto secundario (slate-600)
        },
        // Compat con tus clases anteriores
        base: {
          bg: "#F7F8FA",
          card: "#FFFFFF",
          text: "#0F172A",
        },
        accent: {
          lime: "#8BCB6D",
          sky: "#4AA8D8",
          pink: "#F6DDE6",
        },
      },
      borderRadius: {
        "2xl": "1rem",
      },
      boxShadow: {
        soft: "0 10px 25px -12px rgba(16, 24, 40, 0.15)",
        nav: "0 6px 20px -10px rgba(16, 24, 40, 0.18)",
      },
      maxWidth: {
        "7xl": "80rem",
      },
    },
  },
  plugins: [],
};
export default config;
