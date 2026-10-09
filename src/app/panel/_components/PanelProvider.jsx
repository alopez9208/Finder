"use client";

import { createContext, useContext, useEffect, useState } from "react";

const Ctx = createContext(null);
export const usePanel = () => useContext(Ctx);

function leer(clave, defecto) {
  try {
    return localStorage.getItem(clave) ?? defecto;
  } catch {
    return defecto;
  }
}
function guardar(clave, valor) {
  try {
    localStorage.setItem(clave, valor);
  } catch {
    /* sin almacenamiento: la preferencia dura solo esta visita */
  }
}

// Bloques del resumen que se muestran en el celular. La gráfica empieza apagada.
export const MOVIL_INICIAL = { indicadores: true, grafica: false, estados: true, pedidos: true, reuniones: true };

export function PanelProvider({ children }) {
  // rol: temporal, mientras no haya sesión real conectada al panel nuevo
  const [rol, setRolEstado] = useState("tienda");
  const [tema, setTemaEstado] = useState("sistema"); // claro | oscuro | sistema
  const [compacto, setCompactoEstado] = useState(true);
  const [movilAbierto, setMovilAbierto] = useState(false);
  const [movil, setMovilEstado] = useState(MOVIL_INICIAL);

  useEffect(() => {
    setRolEstado(leer("panel-rol", "tienda"));
    setTemaEstado(leer("panel-tema", "sistema"));
    setCompactoEstado(leer("panel-compacto", "1") === "1");
    try {
      const guardado = JSON.parse(leer("panel-movil", "null"));
      if (guardado && typeof guardado === "object") setMovilEstado({ ...MOVIL_INICIAL, ...guardado });
    } catch {
      /* preferencia dañada: se usan las de fábrica */
    }
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const aplicar = () => {
      const oscuro = tema === "oscuro" || (tema === "sistema" && mq.matches);
      document.documentElement.dataset.theme = oscuro ? "dark" : "light";
    };
    aplicar();
    mq.addEventListener("change", aplicar);
    return () => mq.removeEventListener("change", aplicar);
  }, [tema]);

  useEffect(() => {
    if (!movilAbierto) return;
    const alTeclear = (e) => e.key === "Escape" && setMovilAbierto(false);
    window.addEventListener("keydown", alTeclear);
    return () => window.removeEventListener("keydown", alTeclear);
  }, [movilAbierto]);

  const valor = {
    rol,
    setRol: (r) => { setRolEstado(r); guardar("panel-rol", r); },
    tema,
    setTema: (t) => { setTemaEstado(t); guardar("panel-tema", t); },
    compacto,
    setCompacto: (c) => { setCompactoEstado(c); guardar("panel-compacto", c ? "1" : "0"); },
    movilAbierto,
    setMovilAbierto,
    movil,
    setMovilBloque: (id, visible) => {
      const nuevo = { ...movil, [id]: visible };
      setMovilEstado(nuevo);
      guardar("panel-movil", JSON.stringify(nuevo));
    },
  };

  return <Ctx.Provider value={valor}>{children}</Ctx.Provider>;
}
