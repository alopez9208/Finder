'use client'

import { ComercioProvider, useComercio } from "@/context/ComercioContext";
import SidebarComercio from "../components/sidebardashboard-comercio";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { IoLogOutOutline, IoSettingsOutline, IoMenuOutline } from "react-icons/io5";
import { LuStore } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import useAuthRol from "@/app/hooks/useAuthRol";

export default function DashboardComercioLayout({ children }) {
  return (
    <ComercioProvider>
      <LayoutInterno>{children}</LayoutInterno>
    </ComercioProvider>
  );
}

function LayoutInterno({ children }) {

  const [fechaActual, setFechaActual] = useState("");
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const { nombre } = useAuthRol({ rolPermitido: 2, estadoPermitido: 1 });
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const toggleModal = () => setIsOpen(!isOpen);
  const { comercios, selectedComercio, cambiarComercio } = useComercio();
  const pathname = usePathname();

  const handleMiCuenta = () => {
    router.push("/mi-cuenta");
    setIsOpen(false);
  };

  const handleSalir = () => {
    router.push("/login");
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    cambiarComercio(value);
    if (pathname !== "/dashboard-comercio") {
      router.push("/dashboard-comercio/comercio");
    }
  };

  useEffect(() => {
    const fecha = new Date().toLocaleDateString("es-ES", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setFechaActual(fecha);
  }, []);

  return (
    <div className="h-screen bg-[#1987DA] flex flex-col">
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-[#1987DA] pr-2 flex flex-col">
        <div className="m-6  mr-2 mt-2 h-[60px]">
          <div className="flex justify-between items-center">
            {/* Sección izquierda: Logo + Botón */}
            <div className="flex items-center space-x-8 ml-16">
              <img src="/logo.png" alt="Logo" className="w-22 h-22" />
              <button
                onClick={() => setSidebarVisible(!sidebarVisible)}
                className="cursor-pointer hover:bg-white bg-gray-200 rounded-lg px-2 py-2 transition duration-200 flex items-center justify-center text-gray-500"
              >
                {sidebarVisible ? <IoMenuOutline className="text-xl" /> : <IoMenuOutline className="text-xl" />}
              </button>
              <select
                value={selectedComercio}
                onChange={handleChange}
                className="w-2/3 pr-8 pl-8 p-2 rounded bg-[#2D9EE8] text-white focus:outline-none text-center text-lg"
              >
                {comercios.length === 0 && (
                  <option value="">No hay comercios</option>
                )}
                {comercios.map((comercio) => (
                  <option key={comercio.pkid} value={comercio.pkid}>
                    {comercio.nombre}
                  </option>
                ))}
              </select>
            </div>

            {/* Sección derecha: Fecha + Avatar */}
            <div className="flex items-center space-x-8">
              <p className="text-white text-lg">{fechaActual}</p>
              <div className="relative inline-block">
                <button
                  onClick={toggleModal}
                  className="cursor-pointer hover:bg-white bg-gray-200 rounded-full px-4 py-2 transition duration-200 flex items-center justify-center"
                >
                  <FaRegUserCircle className="text-2xl text-gray-500 bg-white rounded-full" />
                </button>

                {isOpen && (
                  <div
                    ref={modalRef}
                    className="absolute right-0 w-80 bg-white rounded-lg shadow-2xl ring-1 ring-black ring-opacity-5"
                  >
                    <div className="flex p-4">
                      <span className="text-lg text-black">Hola, <strong>{nombre}</strong></span>
                    </div>
                    <div className="border-t border-gray-300 m-2"></div>
                    <div className="flex flex-col gap-2 m-4">
                      <button
                        onClick={() => {
                          setIsOpen(false);
                        }}
                        className="flex items-center gap-2 block w-full text-left px-4 py-2 text-gray-700 cursor-pointer hover:bg-[#3E82FF] transition duration-200 hover:text-white rounded-md py-4"
                      >
                        <IoSettingsOutline className="text-2xl" />
                        Mi cuenta
                      </button>
                      <button
                        onClick={() => {
                          router.push("/dashboard-comercio/mis-comercios");
                          setIsOpen(false);
                        }}
                        className="flex items-center gap-2 block w-full text-left px-4 py-2 text-gray-700 cursor-pointer hover:bg-[#3E82FF] transition duration-200 hover:text-white rounded-md py-4"
                      >
                        <LuStore className="text-2xl" />
                        Mis Comercios

                      </button>
                      <button
                        onClick={handleSalir}
                        className="flex items-center gap-2 block w-full text-left px-4 py-2 text-gray-700 cursor-pointer hover:bg-[#3E82FF] transition duration-200 hover:text-white rounded-md py-4"
                      >
                        <IoLogOutOutline className="text-2xl" />
                        Salir
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Contenido dinámico */}
        <div className=" flex flex-1 h-full">
          <div
            className={`transition-all duration-300 overflow-hidden ${sidebarVisible ? 'w-64' : 'w-0'
              }`}
          >
            <SidebarComercio />
          </div>
          <div className={`flex flex-col flex-1 transition-all duration-300 ${sidebarVisible ? 'ml-0' : 'ml-0'}`}>
            <div className="flex-1 px-8 bg-gray-100 pt-4 border rounded-lg overflow-y-auto ml-2">
              {children}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
