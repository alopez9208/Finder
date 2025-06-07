'use client'

import { useRouter, usePathname } from "next/navigation";
import { FaShoppingCart, FaHome, FaUserCircle } from "react-icons/fa";

export default function SidebarComercio() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path) =>
    pathname === path ? "bg-[#2D9EE8]" : "hover:bg-[#2D9EE8]";

  return (
    <aside className="w-64 bg-[#1987DA] text-white p-4 flex flex-col h-full justify-between rounded-r-2xl mt-16">
      <div>  
        <nav className="flex flex-col gap-1 w-full">
          <button
            onClick={() => router.push("/dashboard-comercio/comercio")}
            className={`flex items-center gap-1 rounded p-1 cursor-pointer mb-4 justify-center ${isActive(
              "/dashboard-comercio/comercio"
            )}`}
          >
            <FaHome className="text-2xl" />
            <span className="text-xl">Dashboard</span>
          </button>

          <div className="flex border-t border-white p-1 mt-2 opacity-50 "></div>
          <span className="text-white text-sm ml-4">Gestión de Productos</span>

          <button
            onClick={() => router.push("/dashboard-comercio/products")}
            className={`flex items-center gap-1 mt-1 rounded p-1 cursor-pointer mb-2 justify-center ${isActive(
              "/dashboard-comercio/products"
            )}`}
          >
            <FaShoppingCart className="text-2xl mr-2" />
            <span className="text-lg">Productos</span>
          </button>

          <div className="flex border-t border-white p-1 mt-2 opacity-50 "></div>
          <span className="text-white text-sm ml-4">Usuario</span>

          <button
            
            className={`flex items-center gap-1 mt-1 rounded p-1 cursor-pointer mb-2 justify-center ${isActive(
              "/dashboard-comercio/mi-cuenta"
            )}`}
          >
            <FaUserCircle className="text-2xl mr-2" />
            <span className="text-lg">Mi Cuenta</span>
          </button>
          <div className="flex border-t border-white p-1 mt-2 opacity-50 "></div>
        </nav>
      </div>

      <div className="mt-auto mb-30 text-center py-4 text-white mb-6 ">
        <span className="text-sm text-white">© 2025 Finder</span>
      </div>
    </aside>
  );
}