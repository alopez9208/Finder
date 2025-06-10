"use client";

import { createContext, useContext, useEffect, useState } from "react";

export const ComercioContext = createContext();

export function ComercioProvider({ children }) {
  const [comercios, setComercios] = useState([]);
  const [selectedRelacionId, setSelectedRelacionId] = useState("");

  async function fetchComercios() {
    try {
      const usuario = JSON.parse(localStorage.getItem("usuario"));
      const usuarioId = usuario?.pkusuario;

      const res = await fetch("/api/dashboard-comercio/comercios_usuarios", {
        headers: {
          "x-usuario-id": usuarioId ? usuarioId.toString() : "",
        },
      });

      const data = await res.json();
      if (data.success && data.relaciones.length > 0) {
        const relaciones = data.relaciones.map((r) => ({
          pkidRelacion: r.pkid, 
          nivel_acceso: r.nivel_acceso,
          estado: r.estado,
          comercio: r.comercios,
        }));

        setComercios(relaciones);

        const guardado = localStorage.getItem("relacionSeleccionada");
        const valido = relaciones.find((r) => r.pkidRelacion.toString() === guardado);
        const inicial = valido ? guardado : relaciones[0].pkidRelacion.toString();

        setSelectedRelacionId(inicial);
        localStorage.setItem("relacionSeleccionada", inicial);
      }

    } catch (err) {
      console.error("Error al cargar comercios:", err);
    }
  }

  useEffect(() => {
    fetchComercios();
  }, []);

  const cambiarRelacion = (nuevoId) => {
    setSelectedRelacionId(nuevoId);
    localStorage.setItem("relacionSeleccionada", nuevoId);
  };

  const relacionSeleccionada = comercios.find((r) => r.pkidRelacion.toString() === selectedRelacionId);

  return (
    <ComercioContext.Provider
      value={{
        comercios,
        selectedRelacionId,
        cambiarRelacion,
        relacionSeleccionada,
        obtenerComercios: fetchComercios,
      }}
    >
      {children}
    </ComercioContext.Provider>
  );
}

export function useComercio() {
  return useContext(ComercioContext);
}
