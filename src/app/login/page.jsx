'use client'

import useLogin from "./useLogin";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginPage() {

  const {
    handleSubmit,
    setPkusuario,
    setContrasena,
    pkusuario,
    contrasena,
    mostrarContrasena,
    setMostrarContrasena,
    error,
    router
  } = useLogin()

  return (
    <div className="min-h-screen flex">
      {/* Lado Izquierdo: Fondo azul */}
      <div className="w-1/2 bg-[#1B96F3] text-white relative px-10 overflow-visible flex flex-col items-center pt-12">

        {/* Texto centrado */}
        <div className="z-20">
          <h2 className="text-2xl font-medium text-center mt-20 mb-6">
            Maneja la info de tus clientes <br /> de una manera fácil y rápida
          </h2>
        </div>

        {/* Imagen flotante */}
        <img
          src="/laptop-illustration.png"
          alt="Ilustración"
          className="w-[700px] max-w-none absolute right-[-120px] top-1/2 mt-12 transform -translate-y-1/2 z-10"
        />
      </div>

      {/* Lado Derecho: Fondo blanco */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center px-10 relative">
        {/* Logo arriba izquierda */}
        <div className="absolute top-6 left-6 flex items-center space-x-2">
          <img src="/logotextoazul.png" alt="Logo" className="w-40 h-40 cursor-pointer" />
          <span className="text-lg font-semibold text-gray-700"></span>
        </div>

        {/* Botón registrarme arriba derecha */}
        <button
          onClick={() => router.push("/login/sign-up")}
          className="absolute top-6 right-6 border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-[#1B96F3] hover:text-white transition cursor-pointer">
          Registrarme
        </button>

        <h1 className="text-3xl font-bold text-[#3066C8] mb-8">Iniciar Sesión</h1>

        <div className="w-full max-w-sm">
          {/* Input Usuario */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Usuario"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none placeholder:text-gray-400 text-gray-800"
              value={pkusuario}
              onChange={(e) => setPkusuario(e.target.value)}
            />
            <FaUser className="absolute top-3.5 left-3 text-gray-400" />
          </div>

          {/* Input Contraseña */}
          <div className="relative mb-6">
            <input
              type={mostrarContrasena ? "text" : "password"}
              placeholder="Contraseña"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none placeholder:text-gray-400 text-gray-800"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
            <FaLock className="absolute top-3.5 left-3 text-gray-400" />

            {/* Botón para mostrar/ocultar la contraseña */}
            <button
              type="button"
              onClick={() => setMostrarContrasena(!mostrarContrasena)}
              className="absolute top-3.5 right-3 text-gray-400 cursor-pointer"
            >
              {mostrarContrasena ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            onClick={handleSubmit}
            className="w-full bg-[#3E82FF] text-white py-2 rounded hover:bg-[#005AFE] hover:opacity-40 transition mt-4 cursor-pointer">
            Ingresar
          </button>

          <p
            onClick={() => router.push("/login/verify-email")}
            className="text-sm text-gray-500 text-center mt-4 cursor-pointer hover:underline">
            ¿Has olvidado tu contraseña?
          </p>
        </div>
      </div>
    </div>
  );
}
