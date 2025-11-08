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
        {/* ====== CAPA DE FONDO CELESTE (fija) ====== */}
        <div className="page-bg" aria-hidden />
        {/* ========================================= */}

        {children}
      </body>
    </html>
  );
}
