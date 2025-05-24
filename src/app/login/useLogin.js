'use client'

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const useLogin = () => {
  const [pkusuario, setPkusuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mostrarContrasena, setMostrarContrasena] = useState(false);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  // Cuando cambie el query param 'error', actualiza el estado error para mostrar mensaje
  useEffect(() => {
    const errorFromQuery = searchParams.get("error");
    if (errorFromQuery) {
      setError(errorFromQuery);
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const usuarioNormalizado = pkusuario.trim().toLowerCase();

      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pkusuario: usuarioNormalizado, contrasena }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Usuario o contraseña incorrecta");
        return;
      }

      if (data.success) {
        localStorage.clear();
        localStorage.setItem("usuario", JSON.stringify(data.usuario));

        const rol = data.usuario.fkid_tbl_roles;

        if (rol === 1) {
          router.push("/dashboard");
        } else if (rol === 2) {
          router.push("/dashboard-comercio");
        } else {
          setError("Rol no válido");
        }
      }
    } catch (error) {
      setError("Error al conectarse con el servidor.");
    }
  };

  // Ocultar el error automáticamente después de 5 segundos
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return {
    pkusuario,
    setPkusuario,
    contrasena,
    setContrasena,
    mostrarContrasena,
    setMostrarContrasena,
    error,
    handleSubmit,
    router,
  };
};

export default useLogin;
