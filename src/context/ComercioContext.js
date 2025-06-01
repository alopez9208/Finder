"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ComercioContext = createContext();

export function ComercioProvider({ children }) {
  const [comercios, setComercios] = useState([]);
  const [selectedComercio, setSelectedComercio] = useState("");

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    const usuarioId = usuario?.pkusuario;

    async function fetchComercios() {
      try {
        const res = await fetch("/api/dashboard-comercio/comercios", {
          headers: {
            "x-usuario-id": usuarioId ? usuarioId.toString() : "",
          },
        });

        const data = await res.json();
        if (data.success && data.comercios.length > 0) {
          setComercios(data.comercios);

          const guardado = localStorage.getItem("comercioSeleccionado");

          const valido = data.comercios.find((c) => c.pkid === guardado);
          const inicial = valido ? guardado : data.comercios[0].pkid;

          setSelectedComercio(inicial);
          localStorage.setItem("comercioSeleccionado", inicial);
        }
      } catch (err) {
        console.error("Error al cargar comercios:", err);
      }
    }

    fetchComercios();
  }, []);

  const cambiarComercio = (nuevo) => {
    setSelectedComercio(nuevo);
    localStorage.setItem("comercioSeleccionado", nuevo);
  };

  return (
    <ComercioContext.Provider
      value={{ comercios, selectedComercio, cambiarComercio }}
    >
      {children}
    </ComercioContext.Provider>
  );
}

export function useComercio() {
  return useContext(ComercioContext);
}
