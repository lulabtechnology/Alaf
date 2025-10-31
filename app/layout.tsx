import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const libre = Libre_Baskerville({ subsets: ["latin"], weight: ["400","700"], variable: "--font-libre" });


export const metadata: Metadata = {
title: "ALAF International Academy | Impulsa tu rendimiento académico",
description: "Programas y mentorías académicas personalizadas para maximizar resultados. TODO: reemplazar copy con contenido real.",
openGraph: {
title: "ALAF International Academy",
description: "Mentorías y programas académicos personalizados.",
url: "https://alaf.example", // TODO: dominio real
siteName: "ALAF International Academy",
images: [{ url: "/alaf/hero.jpg", width: 1200, height: 630, alt: "ALAF Hero" }],
type: "website"
},
icons: {
icon: "/alaf/logo.png",
shortcut: "/alaf/logo.png",
apple: "/alaf/logo.png"
}
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="es" className={`${inter.variable} ${libre.variable}`}>
<body>{children}</body>
</html>
);
}
