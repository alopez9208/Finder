"use client";

import { useEffect, useState } from "react";

// Se calcula en el navegador para que el saludo y la fecha sean los de hoy, no los del build.
export default function Saludo() {
  const [ahora, setAhora] = useState(null);
  const [nombre, setNombre] = useState("");
  useEffect(() => {
    setAhora(new Date());
    // El login guarda el usuario en este navegador; se usa solo su primer nombre.
    try {
      const n = JSON.parse(localStorage.getItem("usuario"))?.nombre;
      if (typeof n === "string" && n.trim() && n.trim() !== "Usuario") setNombre(n.trim().split(/\s+/)[0]);
    } catch {
      /* sin sesión guardada: el saludo va sin nombre */
    }
  }, []);

  const hora = ahora?.getHours() ?? 12;
  const saludo = hora < 12 ? "Buenos días" : hora < 19 ? "Buenas tardes" : "Buenas noches";
  const fecha = ahora?.toLocaleDateString("es-CO", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">{nombre ? `${saludo}, ${nombre}` : saludo}</h1>
      <p className="mt-1 min-h-5 text-sm text-p-muted first-letter:uppercase">{fecha ?? ""}</p>
    </div>
  );
}
