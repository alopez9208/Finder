"use client";

import { useState, useEffect } from "react";

export function useAuth() {
  const [usuarioId, setUsuarioId] = useState(null);

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    setUsuarioId(usuario?.pkusuario || null);
  }, []);

  return { usuarioId };
}
