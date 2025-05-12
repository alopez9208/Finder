'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

const useLogin = () => {

    const [usuario, setUsuario] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [mostrarContrasena, setMostrarContrasena] = useState(false);
  
  
    const router = useRouter();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("✅ Se hizo clic en Ingresar");
  
      try {
        const res = await fetch("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ pkusuario: usuario, contrasena: contrasena }),
        });
  
        const data = await res.json();
        console.log("🔄 Respuesta del servidor:", data); 
  
        if (data.success) {
          window.location.href = "/dashboard-comercio";
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error("❌ Error en el fetch:", error);
        alert("Error al conectarse con el servidor.");
      }
    };
    
    return {
        handleSubmit,
        setUsuario,
        setContrasena,
        usuario,
        contrasena,
        mostrarContrasena,
        setMostrarContrasena,
        router
    }
}

export default useLogin;
