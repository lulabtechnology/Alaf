import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Paleta combinada (referencia + logo ALAF)
           - Azul petróleo (primario)
           - Teal/celeste profesional (secundario)
           - Lima suave (logo ALAF)
           - Dorado tenue para acentos
           - Grises limpios para UI clara
        */
        brand: {
          primary: "#153E5C",      // azul petróleo
          primaryTint: "#E9F2F8",  // fondo suave relacionado
          teal: "#2CA7B9",         // teal/celeste
          lime: "#8BCB6D",         // lima (logo ALAF)
          gold: "#F2C24B",         // dorado/acento
        },
        neutralx: {
          bg: "#F7F9FB",
          surface: "#FFFFFF",
          border: "#E5E9EF",
          text: "#0F172A",
          muted: "#475569",
        },
        // Compat con utilidades que ya usas
        base: {
          bg: "#F7F9FB",
          card: "#FFFFFF",
          text: "#0F172A",
        },
        accent: {
          lime: "#8BCB6D",
          sky: "#2CA7B9",
          gold: "#F2C24B",
        },
      },
      borderRadius: {
        "2xl": "1rem",
      },
      boxShadow: {
        soft: "0 14px 30px -18px rgba(15, 23, 42, .25)",
        nav: "0 10px 25px -20px rgba(15, 23, 42, .35)",
      },
      maxWidth: {
        "7xl": "80rem",
      },
    },
  },
  plugins: [],
};

export default config;
