// app/layout.tsx  (si usas src/, mueve a src/app/layout.tsx y ajusta el import)
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ALAF International Academy",
  description: "Programas académicos y preuniversitarios — ALAF",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
