// RUTA: /app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "ALAF International Academy",
  description: "Educación 100% virtual y homeschool con acompañamiento humano.",
  icons: [{ rel: "icon", url: "/alaf/logo.png" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={fontSans.variable}>
      <body className="min-h-screen antialiased">
        {/* Fondo global (definido en /app/globals.css como .page-bg) */}
        <div aria-hidden className="page-bg" />
        {children}
      </body>
    </html>
  );
}
