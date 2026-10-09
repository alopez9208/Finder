"use client";

import { usePanel } from "./PanelProvider";

/** Envuelve un bloque del resumen: en pantallas pequeñas se oculta si la persona lo apagó en Ajustes. */
export default function BloqueMovil({ id, className = "", children }) {
  const { movil } = usePanel();
  return <div className={`${className} ${movil[id] ? "" : "max-md:hidden"}`}>{children}</div>;
}
