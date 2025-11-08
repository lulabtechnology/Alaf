/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // tamaños para desktop grandes (evita que Next genere imágenes chicas)
    deviceSizes: [640, 768, 1024, 1280, 1536, 1920, 2560, 3200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
    formats: ["image/avif", "image/webp"],
    // Si sigues viendo /_next/image devolviendo avif muy chico,
    // puedes desactivar la optimización del HERO (ver hero.tsx).
  },
};
module.exports = nextConfig;
