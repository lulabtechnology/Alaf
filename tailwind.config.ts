import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      /* Paleta tomada del logo:
         - Celeste suave   (#AEE3EB)
         - Lima suave      (#B7D96B)
         - Rosa suave      (#E8C7DC)
         - Gris contorno   (#5C5C5C)
         - Grises UI       (#0F172A / #475569 / #E7EDF3)
      */
      colors: {
        brand: {
          celeste: "#AEE3EB",
          lime: "#B7D96B",
          pink: "#E8C7DC",
          outline: "#5C5C5C",
          // Acabado corporativo (titulares/botón primario)
          ink: "#2B2F33" // gris carbón elegante
        },
        neutralx: {
          bg: "#FAFCFE",
          surface: "#FFFFFF",
          border: "#E7EDF3",
          text: "#0F172A",
          muted: "#475569"
        }
      },
      borderRadius: {
        "2xl": "1rem"
      },
      boxShadow: {
        soft: "0 14px 30px -18px rgba(15,23,42,.18)",
        nav: "0 10px 25px -20px rgba(15,23,42,.28)"
      },
      maxWidth: {
        "7xl": "80rem"
      }
    }
  },
  plugins: []
};

export default config;
