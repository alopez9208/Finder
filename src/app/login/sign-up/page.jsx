"use client";

import useSignUp from "./useSign-up";
import { useState } from "react";

import {
  FaUser,
  FaUserPlus,
  FaEnvelope,
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
      <div className="relative mb-2">
        <input
          type={mostrarClave ? "text" : "password"}
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none placeholder:text-gray-400 text-gray-800"

        />
        <FaLock className="absolute top-3.5 left-3 text-gray-400" />
        <button
          type="button"
          onClick={() => setMostrarClave(!mostrarClave)}
          className="absolute top-3.5 right-3 text-gray-400 cursor-pointer"
        >
          {mostrarClave ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>

      <div className="space-y-1 text-sm mt-1 ml-4">
        <div className={`flex items-center gap-2 ${isMinLength ? "text-green-500" : "text-gray-500"}`}>
          <FaCheck />
          Mínimo 8 caracteres
        </div>
        <div className={`flex items-center gap-2 ${hasUpperCase ? "text-green-500" : "text-gray-500"}`}>
          <FaCheck />
          Al menos una mayúscula
        </div>
        <div className={`flex items-center gap-2 ${hasNumber ? "text-green-500" : "text-gray-500"}`}>
          <FaCheck />
          Al menos un número
        </div>
      </div>
    </div>

  );
}

export default function SignUpPage() {

  const {
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
    error,
    passwordMatch
  } = useSignUp()

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

        <button
          onClick={() => router.push("/login")}
          className="absolute top-6 right-6 border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-[#1B96F3] hover:text-white transition cursor-pointer">
          Inicia Sesión
        </button>

        <h1 className="text-3xl font-bold text-[#3066C8] mb-8">
          ¡Finder te da la Bienvenida!
        </h1>

        <div className="w-full max-w-sm">
          <p className="text-lg text-blue-500 text-left mb-4">Datos personales</p>

          {/* Input Nombres */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Nombres"
              value={nombres}
              onChange={(e) => setNombres(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none placeholder:text-gray-400 text-gray-800"
            />
            <FaUserPlus className="absolute top-3.5 left-3 text-gray-400" />
          </div>

          {/* Input Apellidos */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Apellidos"
              value={apellidos}
              onChange={(e) => setApellidos(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none placeholder:text-gray-400 text-gray-800"
            />
            <FaUserPlus className="absolute top-3.5 left-3 text-gray-400" />
          </div>

          {/* Input Email */}
          <div className="relative mb-4">
            <input
              type="email"
              placeholder="Correo electrónico"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none placeholder:text-gray-400 text-gray-800"
            />
            <FaEnvelope className="absolute top-3.5 left-3 text-gray-400" />
          </div>

          <p className="text-lg text-blue-500 text-left mb-4">Datos de inicio de sesión</p>

          {/* Input Usuario */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Nombre de usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none placeholder:text-gray-400 text-gray-800"
            />
            <FaUser className="absolute top-3.5 left-3 text-gray-400" />
          </div>

          {/* Input Password */}
          <PasswordInput password={password} setPassword={setPassword} />

          {/* Input Verificar contraseña */}
          <div className="relative mb-4 mt-4">
            <input
              type={mostrarValidarClave ? "text" : "password"}
              placeholder="Verificar contraseña"
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

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            onClick={handleRegistro}
            className="w-full bg-[#3E82FF] text-white py-2 rounded hover:bg-[#005AFE] hover:opacity-40 transition mt-4 cursor-pointer"
          >
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
}