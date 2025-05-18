'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

const useSignUp = () => {

  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const passwordMatch = password === confirmPassword;
  const [mostrarValidarClave, setMostrarValidarClave] = useState(false);
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [correo, setCorreo] = useState("");
  const [usuario, setUsuario] = useState("");
  const [error, setError] = useState("");
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleRegistro = async (e) => {
    e.preventDefault();
  
    if (!nombres || !apellidos || !correo || !usuario || !password || !confirmPassword) {
      setError("Por favor, completa todos los campos.");
      return;
    }
  
    if (!isValidEmail(correo)) {
      setError("El correo electrónico no es válido.");
      return;
    }
  
    if (!passwordMatch) {
      setError("Las contraseñas no coinciden.");
      return;
    }
  
    const res = await fetch("/api/login/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombres, apellidos, correo, usuario, contraseña: password }),
    }); 

    const data = await res.json(); 
  
  if (res.ok) {    
    alert("Usuario creado correctamente");
    router.push("/login"); 
  } else {    
    setError(data.error || "Error al registrar usuario");
  }
    
  };

  return{
    router,
    handleRegistro,
    nombres,
    apellidos,
    correo,
    usuario,
    password,
    confirmPassword,
    mostrarValidarClave,
    setNombres,
    setApellidos,
    setCorreo,
    setUsuario,
    setPassword,
    setConfirmPassword,
    setMostrarValidarClave,
    error
  }
}

export default useSignUp;
