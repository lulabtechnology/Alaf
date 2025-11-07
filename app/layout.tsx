// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ALAF International Academy",
  description: "Diagnóstico de estilos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Mostrar commit y timestamp para saber que ESTO es la versión nueva
  const buildTime = new Date().toISOString();
  // @ts-ignore
  const commit = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || "no-commit-var";

  return (
    <html lang="es">
      <head>
      
        />
      </head>
      <body>
      
        {children}
      </body>
    </html>
  );
}
