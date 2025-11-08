import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ALAF International Academy",
  description: "Educación 100% virtual y homeschool con acompañamiento humano.",
  icons: [{ rel: "icon", url: "/alaf/logo.png" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Azul clarito base + degradé muy suave
  const lightBlue =
    "radial-gradient(1100px 560px at 85% -10%, rgba(200,228,255,0.65) 0%, rgba(200,228,255,0) 58%), radial-gradient(900px 520px at -10% 5%, rgba(217,236,255,0.75) 0%, rgba(217,236,255,0) 60%), #ECF6FF"; 
  // Si lo quieres TOTALMENTE sólido: usa "#ECF6FF"

  return (
    <html lang="es">
      <body style={{ minHeight: "100vh", background: lightBlue }}>
        {/* fallback extra en caso de que algún CSS sobrescriba el body */}
        <div
          aria-hidden
          style={{
            position: "fixed",
            inset: 0,
            zIndex: -1,
            pointerEvents: "none",
            background: lightBlue,
          }}
        />
        {children}
      </body>
    </html>
  );
}
