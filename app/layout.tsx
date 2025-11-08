import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ALAF International Academy",
  description: "Educación 100% virtual y homeschool con acompañamiento humano.",
  icons: [{ rel: "icon", url: "/alaf/logo.png" }],
  openGraph: {
    title: "ALAF International Academy",
    description:
      "Educación 100% virtual y homeschool con acompañamiento humano.",
    images: ["/alaf/hero/slide-1.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {/* ===== FONDO CELESTE FIJO (inline, imposible de pisar) ===== */}
        <div
          className="page-bg"
          aria-hidden
          style={{
            position: "fixed",
            inset: 0,
            zIndex: -1,
            background:
              "radial-gradient(1200px 620px at 86% -12%, rgba(174,227,235,0.85) 0%, rgba(174,227,235,0.0) 60%), radial-gradient(900px 520px at -10% 5%, #E9F6FB 0%, rgba(233,246,251,0) 58%), #FAFCFE",
          }}
        />
        {/* ========================================================== */}

        {children}
      </body>
    </html>
  );
}
