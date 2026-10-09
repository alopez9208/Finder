import Image from "next/image";

/** Logo de Finder (public/logo.png). Next lo reduce y lo sirve en WebP/AVIF automáticamente. */
export default function Logo({ className = "size-8", alt = "" }) {
  return <Image src="/logo.png" alt={alt} width={80} height={80} className={`${className} shrink-0 object-contain`} />;
}
