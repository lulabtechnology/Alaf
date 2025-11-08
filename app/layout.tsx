import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ALAF International Academy",
  description: "Educación 100% virtual y homeschool con acompañamiento humano.",
  icons: [{ rel: "icon", url: "/alaf/logo.png" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const bg =
    "radial-gradient(1200px 620px at 86% -12%, rgba(174,227,235,0.85) 0%, rgba(174,227,235,0) 60%), radial-gradient(900px 520px at -10% 5%, #E9F6FB 0%, rgba(233,246,251,0) 58%), #FAFCFE";

  return (
    <html lang="es">
      {/* FONDO CELESTE EN <body> (inline, imposible de pisar) */}
      <body style={{ minHeight: "100vh", background: bg }}>
        {/* FONDO CELESTE EXTRA como fallback (también inline) */}
        <div
          aria-hidden
          style={{
            position: "fixed",
            inset: 0,
            zIndex: -1,
            pointerEvents: "none",
            background: bg,
          }}
        />
        {children}
      </body>
    </html>
  );
}
