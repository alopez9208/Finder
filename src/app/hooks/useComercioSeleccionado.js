import { useState, useEffect } from "react";

export const useComercioSeleccionado = () => {
  const [comercioSeleccionado, setComercioSeleccionado] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("comercioSeleccionado");
    if (stored) {
      setComercioSeleccionado(stored);
    }
  }, []);

  return comercioSeleccionado;
};

