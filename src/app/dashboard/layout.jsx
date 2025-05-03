"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { MdAdminPanelSettings } from "react-icons/md";
import { GiRank3 } from "react-icons/gi";
import { FaUserCog, FaUserTag, FaShoppingCart, FaHome } from "react-icons/fa";
import { AiOutlineBranches } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { ImTruck } from "react-icons/im";
import { IoLogOutOutline } from "react-icons/io5";

export default function Layout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [fechaActual, setFechaActual] = useState("");

  useEffect(() => {
    const obtenerFecha = () => {
      const opciones = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
      const fecha = new Date().toLocaleDateString("es-ES", opciones);
      setFechaActual(fecha);
    };
    obtenerFecha();
  }, []);

  const isActive = (path) =>
    pathname === path 
      ? "bg-[#2D9EE8]"
      : "hover:bg-[#2D9EE8]";

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
              onClick={() => router.push("/dashboard")}
              className={`flex items-center gap-1 rounded p-1 cursor-pointer mb-4 justify-center ${isActive("/dashboard")}`}>
              <FaHome className="text-2xl" />
              <span className="text-xl">Dashboard</span>
            </button>

            <div className="flex items-center gap-1 border-white p-1 mb-1">
              <span className="text-white text-sm">Administración General</span>
            </div>

            <button
              onClick={() => router.push("/dashboard/user-data")}
              className={`flex items-center gap-1 rounded pl-4 p-1 cursor-pointer ${isActive("/dashboard/user-data")}`}>
              <FaUserCog className="text-2xl" />
              <span className="text-lg">Usuarios</span>
            </button>

            <button
              onClick={() => router.push("/dashboard/user-data/statuses")}
              className={`flex items-center justify-center gap-1 pr-16 rounded p-1 cursor-pointer ${isActive("/dashboard/user-data/statuses")}`}>
              <MdAdminPanelSettings className="text-2xl" />
              <span className="text-lg">Estados</span>
            </button>

            <button
              onClick={() => router.push("/dashboard/user-data/roles")}
              className={`flex items-center justify-center gap-1 pr-20 rounded p-1 cursor-pointer ${isActive("/dashboard/user-data/roles")}`}>
              <GiRank3 className="text-2xl" />
              <span className="text-lg">Roles</span>
            </button>

            <div className="flex border-t border-white p-1 mt-2 opacity-50"></div>
            <span className="text-white text-sm">Gestión de Clientes </span>

            <button
              onClick={() => router.push("/dashboard/client-data/departamentos")}
              className={`flex items-center gap-1 rounded pl-4 p-1 cursor-pointer ${isActive("/dashboard/client-data/departamentos")}`}>
              <BiWorld className="text-2xl" />
              <span className="text-lg">Departamentos</span>
            </button>

            <button
              onClick={() => router.push("/dashboard/client-data/municipios")}
              className={`flex items-center gap-1 rounded pl-4 p-1 cursor-pointer ${isActive("/dashboard/client-data/municipios")}`}>
              <AiOutlineBranches className="text-2xl" />
              <span className="text-lg">Municipios</span>
            </button>

            <div className="flex border-t border-white p-1 mt-2 opacity-50"></div>
            <span className="text-white text-sm">Gestión de Productos</span>

            <button
              onClick={() => router.push("/dashboard/products")}
              className={`flex items-center gap-1 rounded pl-4 p-1 mt-1 cursor-pointer ${isActive("/dashboard/products")}`}>
              <FaShoppingCart className="text-2xl" />
              <span className="text-lg">Productos</span>
            </button>

            <div className="flex border-t border-white p-1 mt-2 opacity-50"></div>
            <span className="text-white text-sm">Logística</span>

            <button
              onClick={() => router.push("/dashboard/transporters")}
              className={`flex items-center gap-1 rounded pl-4 p-1 mt-1 cursor-pointer ${isActive("/dashboard/transporters")}`}>
              <ImTruck className="text-2xl" />
              <span className="text-lg">Transportadoras</span>
            </button>
          </nav>
        </div>

        <button
          onClick={() => router.push("/login")}
          className="flex items-center justify-center gap-1 hover:bg-[#2D9EE8] rounded p-1 cursor-pointer mt-8">
          <IoLogOutOutline className="text-2xl" />
          <span className="text-xl">Desconectarme</span>
        </button>

        <div className="w-full text-center py-4 text-white mb-6">
          <span className="text-xs text-white">© 2025 Finder</span>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-[#F0EBFF]">
        {/* Topbar */}
        <div className="flex justify-end items-center mb-4 h-[80px] px-8 space-x-4">
          <div className="flex items-center space-x-16">
            <p className="text-gray-500 text-lg">{fechaActual}</p>
            <button className="cursor-pointer">
              <img src="/avatarhombre.png" className="w-15 h-15 rounded-full" alt="Avatar" />
            </button>
          </div>
        </div>

        {/* Contenido que cambia */}
        <div className="px-12">{children}</div>
      </main>
    </div>
  );
}
