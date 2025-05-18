'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

const useSignUp = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [correo, setCorreo] = useState("");
  const [usuario, setUsuario] = useState("");
  const [error, setError] = useState("");
  const [mostrarValidarClave, setMostrarValidarClave] = useState(false);
  const passwordMatch = password === confirmPassword;
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isMinLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const isValid = isMinLength && hasUpperCase && hasNumber;

  const handleRegistro = async (e) => {
    e.preventDefault();
    setError(""); // Limpiar errores previos

    if (!nombres || !apellidos || !correo || !usuario || !password || !confirmPassword) {
      return setError("Por favor, completa todos los campos.");
    }

    if (!isValidEmail(correo)) {
      return setError("El correo electrónico no es válido.");
    }

    if (!passwordMatch) {
      return setError("");
    }

    if (!isValid) {
      return setError("La contraseña no cumple con los requisitos.");
    }

    try {
      const res = await fetch("/api/login/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombres, apellidos, correo, usuario, contraseña: password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Usuario creado correctamente");
        setTimeout(() => router.push("/login"), 500);
      } else {
        setError(data.error || "Error al registrar usuario");
      }
    } catch (err) {
      setError("Error de conexión. Intenta de nuevo.");
    }
  };

  return {
    router,
    handleRegistro,
    nombres,
    apellidos,
    correo,
    usuario,
    password,
    mostrarValidarClave,
    confirmPassword,
    setNombres,
    setApellidos,
    setCorreo,
    setUsuario,
    setPassword,
    setConfirmPassword,
    setMostrarValidarClave,
    error,
    passwordMatch,
    isValid,
    isMinLength,
    hasUpperCase,
    hasNumber
  };
};

export default useSignUp;
