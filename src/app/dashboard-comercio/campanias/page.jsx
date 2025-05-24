"use client";

import useCampanias from "./useCampanias";
import { FaEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

export default function CampaniasPage() {

  const {
    searchNombre,
    setsearchNombre,
    currentPage,
    setCurrentPage,
    campanias,
    comercios,
    sortConfig,
    setSortConfig,
    modalOpen,
    setModalOpen,
    editingcampania,
    setEditingcampania,
    nombre,
    setNombre,
    presupuesto_gastado,
    setPresupuesto_gastado,
    fecha_inicio,
    setFecha_inicio,
    fecha_fin,
    setFecha_fin,
    selectedcomercio,
    setSelectedcomercio,
    handleSubmit,
    openModalForNew,  
    openModalForEdit,
    handleSort,
    renderSortIcon,
    handlePageChange,
    totalPages,
    visiblecampanias,
    fetchCampanias,
    fetchComercios,
    formatFecha,
    modalRef,

  } = useCampanias();

  return (
    <div className="m-12">
      <h2 className="text-2xl text-gray-800 mb-8">Lista de campañas</h2>

      <div className="bg-white p-6 rounded-2xl">
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            className="w-full max-w-md pl-4 pr-4 py-2 border border-gray-300 rounded focus:outline-none text-gray-800"
            placeholder="Buscar por Nombre"
            value={searchNombre}
            onChange={(e) => setsearchNombre(e.target.value)}
          />
          <button
            onClick={openModalForNew}
            className="ml-4 flex items-center space-x-2 bg-[#3E82FF] text-white px-4 py-2 rounded hover:bg-[#005AFE] hover:opacity-40 transition cursor-pointer"
          >
            <FaPlus />
            <span>Nueva campaña</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-gray-800">
            <thead className="bg-gray-100">
              <tr>
                {[{ key: "pkid", label: "ID" }, { key: "nombre", label: "Nombre" }, { key: "presupuesto_gastado", label: "Presupuesto gastado" }, { key: "fecha_inicio", label: "Fecha inicio" }, { key: "fecha_fin", label: "Fecha fin" }
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
                <th className="p-3 text-right w-40">Acción</th>
              </tr>
            </thead>
            <tbody>

              {visiblecampanias.map((campania, index) => {
                console.log('Campaña en render:', campania);
                return (
                  <tr key={index} className="border-b">
                    <td className="p-3">{campania.pkid}</td>
                    <td className="p-3">{campania.nombre}</td>
                    <td className="p-3">{campania.presupuesto_gastado}</td>
                    <td className="p-3">{formatFecha(campania.fecha_inicio)}</td>
                    <td className="p-3">{formatFecha(campania.fecha_fin)}</td>                   
                    <td className="p-3 text-right">
                      <button
                        onClick={() => openModalForEdit(campania)}
                        className="bg-green-500 hover:bg-green-400 text-white px-3 py-2 rounded-lg inline-flex items-center space-x-2 cursor-pointer"
                      >
                        <FaEdit />
                        <span>Editar</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Paginación */}
        {totalPages > 1 && (
          <div className="mt-4 flex justify-center items-center space-x-2 text-gray-400">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="px-3 py-1 border rounded hover:bg-[#005AFE] hover:opacity-40 transition cursor-pointer hover:text-white"
              disabled={currentPage === 1}
            >
              Anterior
            </button>

            {/* Mostrar la primera página si no estamos en ella y el rango es mayor a 3 */}
            {currentPage > 3 && (
              <button
                onClick={() => handlePageChange(1)}
                className="px-3 py-1 border rounded hover:bg-[#005AFE] hover:opacity-40 transition cursor-pointer hover:text-white"
              >
                1
              </button>
            )}

            {/* Si hay más de 4 páginas anteriores a la actual, mostrar "..." */}
            {currentPage > 4 && <span className="px-3 py-1">...</span>}

            {/* Páginas alrededor de la página actual */}
            {Array.from({ length: 5 }, (_, i) => {
              const pageNumber = currentPage - 2 + i;
              if (pageNumber > 0 && pageNumber <= totalPages) {
                return (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`px-3 py-1 border rounded hover:bg-[#005AFE] hover:opacity-40 transition cursor-pointer hover:text-white ${currentPage === pageNumber ? "bg-blue-500 text-white" : ""
                      }`}
                  >
                    {pageNumber}
                  </button>
                );
              }
              return null; // No renderizar números fuera del rango
            })}

            {/* Si hay más de 3 páginas posteriores a la actual, mostrar "..." */}
            {currentPage < totalPages - 3 && <span className="px-3 py-1">...</span>}

            {/* Mostrar la última página si no estamos en ella */}
            {currentPage < totalPages - 2 && (
              <button
                onClick={() => handlePageChange(totalPages)}
                className="px-3 py-1 border rounded hover:bg-[#005AFE] hover:opacity-40 transition cursor-pointer hover:text-white"
              >
                {totalPages}
              </button>
            )}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-3 py-1 border rounded hover:bg-[#005AFE] hover:opacity-40 transition cursor-pointer hover:text-white"
              disabled={currentPage === totalPages}
            >
              Siguiente
            </button>
          </div>
        )}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
          <div ref={modalRef} className="bg-[#f0ebff] p-6 rounded-xl shadow-xl w-full max-w-md relative text-gray-700 border">
            <h3 className="text-xl font-semibold mb-4">
              {editingcampania ? "Editar campaña" : "Nueva campaña"}
            </h3>
            <input
              type="text"
              placeholder="Nombre"
              className="w-full mb-4 px-4 py-2 border rounded focus:outline-none bg-white read-only:bg-[#f0ebff]"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}              
            />
            <input
              type="number"
              placeholder="Presupuesto gastado"
              className="w-full mb-4 px-4 py-2 border rounded focus:outline-none bg-white"
              value={presupuesto_gastado}
              onChange={(e) => setPresupuesto_gastado(e.target.value)}
            />
            <input
              type="date"
              placeholder="Fecha inicio"
              className="w-full mb-4 px-4 py-2 border rounded focus:outline-none bg-white"
              value={fecha_inicio ? fecha_inicio.substring(0, 10) : ""}
              onChange={(e) => setFecha_inicio(e.target.value)}
            />
            <input
              type="date"
              placeholder="Fecha fin"
              className="w-full mb-4 px-4 py-2 border rounded focus:outline-none bg-white"
              value={fecha_fin ? fecha_fin.substring(0, 10) : ""}
              onChange={(e) => setFecha_fin(e.target.value)}
            />            
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
              >
                Cancelar
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 cursor-pointer"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}