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
        {/* BANDERA VISUAL: si ves esta barra fucsia, el layout NUEVO está en producción */}
        <style
          // @ts-ignore
          global
          dangerouslySetInnerHTML={{
            __html: `
              #___diagnostic_banner {
                position: fixed; inset: 0 auto auto 0; z-index: 9999;
                background: #ff00a6; color: #fff; font: 600 12px/1 system-ui;
                padding: 6px 10px; border-bottom-right-radius: 8px;
              }
              body{ border: 12px solid #AEE3EB !important; } /* borde CELESTE del logo */
            `,
          }}
        />
      </head>
      <body>
        <div id="___diagnostic_banner">
          build: {buildTime} · commit: {commit}
        </div>
        {children}
      </body>
    </html>
  );
}
