"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ComercioContext = createContext();

export function ComercioProvider({ children }) {
  const [comercios, setComercios] = useState([]);
  const [selectedComercio, setSelectedComercio] = useState("");

  // Define fetchComercios fuera del useEffect
  async function fetchComercios() {
    try {
      const usuario = JSON.parse(localStorage.getItem("usuario"));
      const usuarioId = usuario?.pkusuario;

      const res = await fetch("/api/dashboard-comercio/comercios", {
        headers: {
          "x-usuario-id": usuarioId ? usuarioId.toString() : "",
        },
      });

      const data = await res.json();
      if (data.success && data.comercios.length > 0) {
        setComercios(data.comercios);

        const guardado = localStorage.getItem("comercioSeleccionado");
        const valido = data.comercios.find((c) => c.pkid.toString() === guardado);
        const inicial = valido ? guardado : data.comercios[0].pkid.toString();

        setSelectedComercio(inicial);
        localStorage.setItem("comercioSeleccionado", inicial);
      }
    } catch (err) {
      console.error("Error al cargar comercios:", err);
    }
  }

  // Llama fetchComercios la primera vez que carga el provider
  useEffect(() => {
    fetchComercios();
  }, []);

  const cambiarComercio = (nuevo) => {
    setSelectedComercio(nuevo);
    localStorage.setItem("comercioSeleccionado", nuevo);
  };

  return (
    <ComercioContext.Provider
      value={{ comercios, selectedComercio, cambiarComercio, obtenerComercios: fetchComercios }}
    >
      {children}
    </ComercioContext.Provider>
  );
}

export function useComercio() {
  return useContext(ComercioContext);
}
