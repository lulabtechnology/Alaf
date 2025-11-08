// app/(site)/components/gallery.tsx
"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const IMAGES = Array.from({ length: 18 }, (_, i) => `/alaf/galeria/${i + 1}.jpg`);

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export default function Gallery() {
  const slides = chunk(IMAGES, 3); // 6 slides * 3 imágenes
  const [index, setIndex] = useState(0);
  const timer = useRef<number | null>(null);

  // autoplay cada 4s
  useEffect(() => {
    timer.current && window.clearInterval(timer.current);
    timer.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => {
      timer.current && window.clearInterval(timer.current);
    };
  }, [slides.length]);

  return (
    <section id="galeria" className="section">
      <div className="container-max">
        <h2 className="h2 mb-6">Galería</h2>

        <div className="relative overflow-hidden rounded-3xl bg-white shadow">
          {/* track */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((group, gi) => (
              <div key={gi} className="min-w-full p-4">
                <div className="grid grid-cols-3 gap-4">
                  {group.map((src, si) => (
                    <div key={si} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                      <Image
                        src={src}
                        alt={`Galería ${gi * 3 + si + 1}`}
                        fill
                        sizes="(max-width: 768px) 33vw, (max-width: 1280px) 20vw, 360px"
                        className="object-cover [object-position:center_30%]" // sube el encuadre
                        priority={gi === 0}
                        quality={85}
