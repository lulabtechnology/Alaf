// app/layout.tsx  (si tu carpeta es src/, ponlo en: src/app/layout.tsx)
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ALAF International Academy",
  description: "Programas académicos y preuniversitarios — ALAF",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {/* HOTFIX de verificación: esto DEBE colorear el fondo.
            Si lo ves, los estilos están entrando. Luego puedes borrar este bloque. */}
        <style
          // @ts-ignore
          global
          dangerouslySetInnerHTML={{
            __html: `
              :root{
                --ink:#2B2F33; --celeste:#AEE3EB; --lime:#B7D96B; --pink:#E8C7DC; --outline:#5C5C5C;
                --bg:#FAFCFE; --surface:#FFFFFF; --border:#E7EDF3; --text:#0F172A; --muted:#475569;
              }
              body{ background: radial-gradient(800px 420px at -10% 0%, #E7F7FB 0%, transparent 60%), #FAFCFE !important; }
              .btn-primary{ background:#2B2F33 !important; color:#fff !important; }
              header a:hover{ color:#2B2F33 !important; }
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
