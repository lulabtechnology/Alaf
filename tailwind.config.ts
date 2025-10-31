import type { Config } from "tailwindcss";


const config: Config = {
darkMode: ["class"],
content: [
"./app/**/*.{ts,tsx}",
"./components/**/*.{ts,tsx}"
],
theme: {
extend: {
colors: {
base: {
bg: "#0f172a", // slate-900-ish (charcoal)
card: "#111827",
text: "#e5e7eb"
},
accent: {
lime: "#8BC34A", // desaturado inspirado en logo
sky: "#6EC1E4",
pink: "#F3C6D3"
}
},
borderRadius: {
'2xl': '1rem'
},
boxShadow: {
soft: "0 10px 25px -10px rgba(0,0,0,0.35)"
}
}
},
plugins: []
};
export default config;
