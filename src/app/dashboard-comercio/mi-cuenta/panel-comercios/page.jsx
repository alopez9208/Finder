'use client'

import usePanelComercios from "./usePanel-comercios";
import { FaCheckCircle } from "react-icons/fa";
import Pagination from "@/app/components/pagination";

export default function PanelComerciosPage() {
  const {
    searchTelefono,
    setsearchTelefono,
    currentPage,
    setCurrentPage,
    pedidosPerPage,
    pedidos,
    clientes,
    sortConfig,
    setSortConfig,
    handleSort,
    renderSortIcon,
    handlePageChange,
    visiblepedidos,
    totalPages,
    startIndex,
    handleSubmit,
    formatFecha,
    formatearNumero,
    valor_total,
    setValor_total,
    cantidadPedidos,
    setCantidadPedidos,
    costoTotal,
    setCostoTotal,
    valor_flete,
    setValor_flete,
    usuarioSeleccionado,
    setUsuarioSeleccionado,
    handleFiltrarPorUsuario,
    handleLimpiar,
    diasFiltro,
    setDiasFiltro,
    handleFiltrarPorDias,
  } = usePanelComercios();

  return (
    <div className="h-[calc(100vh-200px)] overflow-y-auto pr-2 w-full">
      <div className="bg-white p-6 rounded-2xl min-h-full">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
          </div>
        </div>
        <div className="flex justify-between items-start mb-4">
          <div className="w-2/3 overflow-x-auto">
            <table className="min-w-full table-auto text-gray-800">
              <thead className="bg-gray-100">
                <tr>
                  {[{ key: "guia", label: "Guía" }, { key: "fecha_creacion", label: "Fecha" }, { key: "clientes.telefono", label: "Telefono Cliente" }, { key: "valor_total", label: "Recaudo" }, { key: "usuarios.pkusuario", label: "Usuario" }
                  ]
                    .map(({ key, label }) => (
                      <th
                        key={key}
                        className="p-3 text-left cursor-pointer select-none"
                        onClick={() => handleSort(key)}
                      >
                        {label} {renderSortIcon(key)}
                      </th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {visiblepedidos.map((pedidos, index) => {
                  return (
                    <tr key={index} className="border-b">
                      <td className="p-3">{pedidos.guia}</td>
                      <td className="p-3">{formatFecha(pedidos.fecha_creacion)}</td>
                      <td className="p-3">{pedidos.clientes.telefono}</td>
                      <td className="p-3">$ {formatearNumero(pedidos.valor_total)}</td>
                      <td className="p-3">{pedidos.usuarios.pkusuario}</td>
                      <td className="flex justify-end gap-2 p-3 text-right">
                      </td>
                    </tr>
                  );
                })}
              </tbody>

            </table>
          </div>
          <div className="w-1/3 max-w-xl bg-white p-4 rounded-2xl text-gray-800 font-sans self-start h-fit">
            <h2 className="text-2xl font-semibold mb-4">Estadísticas del mes</h2>

            <div className="flex items-center gap-4 mb-4">
              <select
                className="border rounded p-2"
                value={usuarioSeleccionado}
                onChange={(e) => setUsuarioSeleccionado(e.target.value)}
              >
                <option value="">Usuario</option>
                <option value="nidia">Nidia</option>
                <option value="andres">Andrés</option>
              </select>

              <select
                className="border rounded p-2"
                value={diasFiltro}
                onChange={(e) => setDiasFiltro(e.target.value)}
              >
                <option value="">Días</option>
                <option value="1">hoy</option>
                <option value="7">7</option>
                <option value="30">30</option>
              </select>

              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
                onClick={() => handleFiltrarPorUsuario()}
              >
                Filtro
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
                onClick={() => handleFiltrarPorDias()}
              >
                Días
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
                onClick={() => handleLimpiar()}
              >
                Limpiar
              </button>
            </div>

            {/* Caja azul de utilidad */}
            <div className="bg-[#1987DA] text-white p-4 rounded-xl flex justify-between items-center mb-6">
              <div>
                <p className="text-2xl font-semibold mb-2">Utilidad</p>
                <p className="text-lg text-white/80">Balance</p>
                <p className="text-2xl font-bold">${formatearNumero(valor_total - costoTotal - valor_flete)}</p>
              </div>
              <img src="/money-bag.png" alt="Ícono dinero" className="w-25 h-25 mr-10" />
            </div>

            {/* Contabilidad */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Contabilidad</h3>
              <ul className="space-y-3 ml-8 mr-16">
                <li className="flex justify-between">
                  <span className="flex items-center gap-2 text-lg">
                    <FaCheckCircle className="text-[#1987DA] text-xl" /> Recaudo
                  </span>
                  <span className="text-green-600">+ ${formatearNumero(valor_total)}</span>
                </li>
                <li className="flex justify-between">
                  <span className="flex items-center gap-2 text-lg">
                    <FaCheckCircle className="text-[#1987DA] text-xl" /> Costo productos
                  </span>
                  <span className="text-red-600">- ${formatearNumero(costoTotal)}</span>
                </li>
                <li className="flex justify-between">
                  <span className="flex items-center gap-2 text-lg">
                    <FaCheckCircle className="text-[#1987DA] text-xl" /> Fletes
                  </span>
                  <span className="text-red-600">- ${formatearNumero(valor_flete)}</span>
                </li>
              </ul>
            </div>
            <div className="ml-50 mr-15 flex justify-between">
              <p className="text-lg font-semibold mb-2">Total pedidos:</p>
              <p className="text-lg font-semibold mb-2">{cantidadPedidos}</p>
            </div>
          </div>
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
}




