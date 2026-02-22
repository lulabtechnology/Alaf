// RUTA: /app/(site)/components/media-block.tsx
import clsx from "clsx";

type MediaBlockProps = {
  /**
   * Invierte el orden en desktop (para alternar izquierda/derecha tipo “story blocks”).
   * - reverse=false: left -> izquierda, right -> derecha
   * - reverse=true : left -> derecha,  right -> izquierda
   */
  reverse?: boolean;
  left: React.ReactNode;
  right: React.ReactNode;
  className?: string;
};

/**
 * Layout base para secciones tipo “K12 inspired” (sin copiar).
 * Solo estructura/ritmo: 2 columnas (12-grid) + alternancia.
 */
export function MediaBlock({ reverse = false, left, right, className }: MediaBlockProps) {
  return (
    <div className={clsx("grid items-center gap-8 lg:grid-cols-12 lg:gap-12", className)}>
      <div className={clsx("lg:col-span-6", reverse ? "lg:order-2" : "lg:order-1")}>{left}</div>
      <div className={clsx("lg:col-span-6", reverse ? "lg:order-1" : "lg:order-2")}>{right}</div>
    </div>
  );
}
