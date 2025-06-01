'use client'

import { ComercioProvider, useComercio } from "@/context/ComercioContext";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { MdOutlineSell } from "react-icons/md";
import { FaShoppingCart, FaHome } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { RiAdvertisementLine } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";

export default function DashboardComercioLayout({ children }) {
  return (
    <ComercioProvider>
      <LayoutInterno>{children}</LayoutInterno>
    </ComercioProvider>
  );
}

function LayoutInterno({ children }) {
  const { comercios, selectedComercio, cambiarComercio } = useComercio();
  const [fechaActual, setFechaActual] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const fecha = new Date().toLocaleDateString("es-ES", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setFechaActual(fecha);
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "administrar_comercios") {
      router.push("/dashboard-comercio/comercios");
    } else {
      cambiarComercio(value);
      if (pathname !== "/dashboard-comercio") {
        router.push("/dashboard-comercio");
      }
    }
  };

  const isActive = (path) => (pathname === path ? "bg-[#2D9EE8]" : "hover:bg-[#2D9EE8]");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-70 bg-[#1987DA] text-white p-2 flex flex-col justify-between rounded-r-2xl">
        <div>
          <div className="flex justify-center m-6">
            <img src="/logo.png" alt="Logo" className="w-25 h-25" />
          </div>

          <nav className="flex flex-col gap-1 w-full">
            <button
              onClick={() => router.push("/dashboard-comercio")}
              className={`flex items-center gap-1 rounded p-1 cursor-pointer mb-4 justify-center ${isActive(
                "/dashboard-comercio"
              )}`}
            >
              <FaHome className="text-2xl" />
              <span className="text-xl">Dashboard</span>
            </button>

            {/* Selector de Comercios */}
            <div className="mb-4">
              <select
                value={selectedComercio}
                onChange={handleChange}
                className="w-full p-2 rounded bg-[#2D9EE8] text-white focus:outline-none text-center text-lg"
              >
                <option disabled value="">
                  Selecciona un comercio
                </option>
                {comercios.map((comercio) => (
                  <option key={comercio.pkid} value={comercio.pkid}>
                    {comercio.nombre}
                  </option>
                ))}
                <option disabled className="border-t border-white text-[#FAF0E6]">
                  _____________
                </option>
                <option value="administrar_comercios">Administrar Comercios</option>
              </select>
            </div>

            <div className="flex items-center gap-1 border-white p-1 mb-1">
              <span className="text-white text-sm ml-4">Administración General</span>
            </div>

            <button
              onClick={() => router.push("/dashboard-comercio/pedidos")}
              className={`flex items-center gap-1 rounded pl-4 p-1 ml-4 cursor-pointer ${isActive(
                "/dashboard-comercio/pedidos"
              )}`}
            >
              <MdOutlineSell className="text-2xl" />
              <span className="text-lg">Pedidos</span>
            </button>

            <div className="flex border-t border-white p-1 mt-2 opacity-50"></div>
            <span className="text-white text-sm ml-4">Gestión de Clientes </span>

            <button
              onClick={() => router.push("/dashboard-comercio/clientes")}
              className={`flex items-center gap-1 rounded pl-4 p-1 ml-4 cursor-pointer ${isActive(
                "/dashboard-comercio/clientes"
              )}`}
            >
              <FaUserGroup className="text-2xl" />
              <span className="text-lg">Clientes</span>
            </button>

            <div className="flex border-t border-white p-1 mt-2 opacity-50 "></div>
            <span className="text-white text-sm ml-4">Gestión de Productos</span>

            <button
              onClick={() => router.push("/dashboard-comercio/products")}
              className={`flex items-center gap-1 rounded pl-4 p-1 mt-1 ml-4 cursor-pointer ${isActive(
                "/dashboard-comercio/products"
              )}`}
            >
              <FaShoppingCart className="text-2xl" />
              <span className="text-lg">Productos</span>
            </button>

            <div className="flex border-t border-white p-1 mt-2 opacity-50"></div>
            <span className="text-white text-sm ml-4">Gestión de Publicidad</span>

            <button
              onClick={() => router.push("/dashboard-comercio/campanias")}
              className={`flex items-center gap-1 rounded pl-4 p-1 mt-1 ml-4 cursor-pointer ${isActive(
                "/dashboard-comercio/campanias"
              )}`}
            >
              <RiAdvertisementLine className="text-2xl" />
              <span className="text-lg">Campañas</span>
            </button>
          </nav>
        </div>

        <button
          onClick={() => router.push("/login")}
          className="flex items-center justify-center gap-1 hover:bg-[#2D9EE8] rounded p-1 cursor-pointer mt-8"
        >
          <IoLogOutOutline className="text-2xl" />
          <span className="text-xl">Desconectarme</span>
        </button>

        <div className="w-full text-center py-4 text-white mb-6">
          <span className="text-xs text-white">© 2025 Finder</span>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-[#F0EBFF]">
        <div className="flex justify-end items-center mb-4 h-[80px] px-8 space-x-4">
          <div className="flex items-center space-x-16">
            <p className="text-gray-500 text-lg">{fechaActual}</p>
            <button className="cursor-pointer">
              <img
                src="/avatarhombre.png"
                className="w-15 h-15 rounded-full"
                alt="Avatar"
              />
            </button>
          </div>
        </div>

        {/* Contenido dinámico */}
        <div className="px-12">{children}</div>
      </main>
    </div>
  );
}
