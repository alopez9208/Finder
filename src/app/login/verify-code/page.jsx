"use client";

import { FaUnlockAlt} from "react-icons/fa";
import { useRouter } from "next/navigation";


export default function LoginPage() {
  
  const router = useRouter();

  return (
    <div className="min-h-screen flex">
      {/* Lado Izquierdo */}
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


      {/* Lado Derecho */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center px-10 relative">
        {/* Logo arriba izquierda */}
        <div className="absolute top-6 left-6 flex items-center space-x-2">
          <img src="/logotextoazul.png" alt="Logo" className="w-40 h-40 cursor-pointer" />
          <span className="text-lg font-semibold text-gray-700"></span>
        </div>

        <h1 className="text-3xl font-bold text-[#3066C8] mb-4">Comprobación de seguridad</h1>

        <p className="text-lg text-blue-500 text-center mb-8">Perdiste tu contraseña de Finder. ¡Lo sentimos!
          <br />
          Ingresa el código enviado a tu correo para restablecerla:</p>


        <div className="w-full max-w-sm">
          {/* Input Usuario */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Código"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none placeholder:text-gray-400 text-gray-800"
            />
            <FaUnlockAlt className="absolute top-3.5 left-3 text-gray-400" />
          </div>


          <button
            /*onClick={handleSubmit}*/
            onClick={() => router.push("/login/reset-password")}
            className="w-full bg-[#3E82FF] text-white py-2 rounded hover:bg-[#005AFE] hover:opacity-40 transition mt-2 cursor-pointer">
            Enviar Código
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
