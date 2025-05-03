"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {  
  FaUnlockAlt,  
  FaLock,
  FaEye,
  FaEyeSlash,
  FaCheck,
} from "react-icons/fa";

function PasswordInput({ password, setPassword }) {
  const [mostrarClave, setMostrarClave] = useState(false);

  const isMinLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);  

  return (
    <div className="w-full">
      {/* Input Password */}
      <div className="relative mb-2">
        <input
          type={mostrarClave ? "text" : "password"}
          placeholder="Nueva contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none placeholder:text-gray-400 text-gray-800"
        />
        <FaUnlockAlt className="absolute top-3.5 left-3 text-gray-400" />
        <button
          type="button"
          onClick={() => setMostrarClave(!mostrarClave)}
          className="absolute top-3.5 right-3 text-gray-400 cursor-pointer"
        >
          {mostrarClave ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>

      {/* Reglas de validación */}
      <div className="space-y-1 text-sm mt-1 ml-4">
        <div
          className={`flex items-center gap-2 ${isMinLength ? "text-green-500" : "text-gray-500"
            }`}
        >
          <FaCheck />
          Mínimo 8 caracteres
        </div>
        <div
          className={`flex items-center gap-2 ${hasUpperCase ? "text-green-500" : "text-gray-500"
            }`}
        >
          <FaCheck />
          Al menos una mayúscula
        </div>
        <div
          className={`flex items-center gap-2 ${hasNumber ? "text-green-500" : "text-gray-500"
            }`}
        >
          <FaCheck />
          Al menos un número
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const passwordMatch = password === confirmPassword;
  const [mostrarValidarClave, setMostrarValidarClave] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen flex">
      {/* Lado Izquierdo */}
      <div className="w-1/2 bg-[#1B96F3] text-white relative px-10 flex flex-col items-center pt-12">
        <div className="z-20">
          <h2 className="text-2xl font-medium text-center mt-20 mb-6">
            Maneja la info de tus clientes <br /> de una manera fácil y rápida
          </h2>
        </div>
        <img
          src="/laptop-illustration.png"
          alt="Ilustración"
          className="w-[700px] max-w-none absolute right-[-120px] top-1/2 mt-12 transform -translate-y-1/2 z-10"
        />
      </div>

      {/* Lado Derecho */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center px-10 relative">
        <div className="absolute top-6 left-6 flex items-center space-x-2">
          <img src="/logotextoazul.png" alt="Logo" className="w-40 h-40 cursor-pointer" />
        </div>

        <h1 className="text-3xl font-bold text-[#3066C8] mb-8">
          Cambiar contraseña
        </h1>

        <div className="w-full max-w-sm">
          {/* Input Password */}
          <PasswordInput password={password} setPassword={setPassword} />

          {/* Input Verificar contraseña */}
          <div className="relative mb-4 mt-4">
            <input
              type={mostrarValidarClave ? "text" : "password"}
              placeholder="Verificar nueva contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none placeholder:text-gray-400 text-gray-800"
            />
            <FaLock className="absolute top-3.5 left-3 text-gray-400" />
            <button
              type="button"
              onClick={() => setMostrarValidarClave(!mostrarValidarClave)}
              className="absolute top-3.5 right-3 text-gray-400 cursor-pointer"
            >
              {mostrarValidarClave ? <FaEyeSlash /> : <FaEye />}
            </button>
            {!passwordMatch && confirmPassword.length > 0 && (
              <span className="text-red-500 text-sm absolute -bottom-5 left-10">
                Las contraseñas no coinciden
              </span>
            )}
          </div>

          <button
            onClick={() => router.push("/login")}
            className="w-full bg-[#3E82FF] text-white py-2 rounded hover:bg-[#005AFE] hover:opacity-40 transition mt-4 cursor-pointer"
          >
            Guardar
          </button>

          <button
            onClick={() => router.push("/login")}
            className="w-52 mx-auto border border-[#005AFE] py-2 text-blue-500 rounded hover:bg-[#1B96F3] hover:text-white transition mt-16 cursor-pointer block">
            Volver al inicio
          </button>
        </div>
      </div>
    </div>
  );
}
