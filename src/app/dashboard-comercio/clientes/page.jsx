"use client";

import useClientes from "./useClientes";
import { FaEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

export default function ClientesPage() {
  const {
    searchTelefono,
    setsearchTelefono,
    currentPage,
    setCurrentPage,
    municipios,
    comercios,
    sortConfig,
    setSortConfig,
    modalOpen,
    setModalOpen,
    editingCliente,
    setEditingCliente,
    nombres,
    setNombres,
    apellidos,
    setApellidos,
    correo,
    setCorreo,
    telefono,
    setTelefono,
    direccion,
    setDireccion,
    selectedMunicipio,
    setSelectedMunicipio,
    selectedComercio,
    setSelectedComercio,
    handleSubmit,
    handleSort,
    renderSortIcon,
    handlePageChange,
    totalPages,
    visibleClientes,
    openModalForNew,
    openModalForEdit,
    modalRef,
  } = useClientes();

  return (
    <div className="m-12">
      <h2 className="text-2xl text-gray-800 mb-8">Lista de Clientes</h2>

      <div className="bg-white p-6 rounded-2xl">
        {/* Buscador + botón nuevo */}
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            className="w-full max-w-md pl-4 pr-4 py-2 border border-gray-300 rounded focus:outline-none text-gray-800"
            placeholder="Buscar por Teléfono"
            value={searchTelefono}
            onChange={(e) => setsearchTelefono(e.target.value)}
          />
          <button
            onClick={openModalForNew}
            className="ml-4 flex items-center space-x-2 bg-[#3E82FF] text-white px-4 py-2 rounded hover:bg-[#005AFE] hover:opacity-40 transition cursor-pointer"
          >
            <FaPlus />
            <span>Nuevo Cliente</span>
          </button>
        </div>

        {/* Tabla de clientes */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-gray-800">
            <thead className="bg-gray-100">
              <tr>
                {[
                  { key: "pkid", label: "ID" },
                  { key: "telefono", label: "Teléfono" },
                  { key: "nombres", label: "Nombres" },
                  { key: "apellidos", label: "Apellidos" },
                  { key: "correo", label: "Correo" },
                  { key: "nombre_municipio", label: "Municipio" },                  
                ].map(({ key, label }) => (
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
              {visibleClientes.map((cliente, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3">{cliente.pkid}</td>
                  <td className="p-3">{cliente.telefono}</td>
                  <td className="p-3">{cliente.nombres}</td>
                  <td className="p-3">{cliente.apellidos}</td>
                  <td className="p-3">{cliente.correo}</td>                 
                  <td className="p-3">{cliente.nombre_municipio}</td>                 
                  <td className="p-3 text-right">
                    <button
                      onClick={() => openModalForEdit(cliente)}
                      className="bg-green-500 hover:bg-green-400 text-white px-3 py-2 rounded-lg inline-flex items-center space-x-2 cursor-pointer"
                    >
                      <FaEdit />
                      <span>Editar</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Paginación */}
        {totalPages > 1 && (
          <div className="mt-4 flex justify-center items-center space-x-2 text-gray-400">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded hover:bg-[#005AFE] hover:opacity-40 hover:text-white"
            >
              Anterior
            </button>

            {currentPage > 3 && (
              <>
                <button
                  onClick={() => handlePageChange(1)}
                  className="px-3 py-1 border rounded hover:bg-[#005AFE] hover:opacity-40 hover:text-white"
                >
                  1
                </button>
                {currentPage > 4 && <span className="px-3 py-1">...</span>}
              </>
            )}

            {Array.from({ length: 5 }, (_, i) => {
              const page = currentPage - 2 + i;
              return page > 0 && page <= totalPages ? (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-1 border rounded hover:bg-[#005AFE] hover:opacity-40 hover:text-white ${
                    currentPage === page ? "bg-blue-500 text-white" : ""
                  }`}
                >
                  {page}
                </button>
              ) : null;
            })}

            {currentPage < totalPages - 3 && (
              <>
                <span className="px-3 py-1">...</span>
                <button
                  onClick={() => handlePageChange(totalPages)}
                  className="px-3 py-1 border rounded hover:bg-[#005AFE] hover:opacity-40 hover:text-white"
                >
                  {totalPages}
                </button>
              </>
            )}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded hover:bg-[#005AFE] hover:opacity-40 hover:text-white"
            >
              Siguiente
            </button>
          </div>
        )}
      </div>

      {/* Modal de Crear/Editar */}
      {modalOpen && (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
          <div ref={modalRef} className="bg-[#f0ebff] p-6 rounded-xl shadow-xl w-full max-w-md relative text-gray-700 border">
            <h3 className="text-xl font-semibold mb-4">
              {editingCliente ? "Editar Cliente" : "Nuevo Cliente"}
            </h3>

            <input
              type="text"
              placeholder="Teléfono"
              className="w-full mb-4 px-4 py-2 border rounded"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
            <input
              type="text"
              placeholder="Nombre"
              className="w-full mb-4 px-4 py-2 border rounded"
              value={nombres}
              onChange={(e) => setNombres(e.target.value)}
            />
            <input
              type="text"
              placeholder="Apellidos"
              className="w-full mb-4 px-4 py-2 border rounded"
              value={apellidos}
              onChange={(e) => setApellidos(e.target.value)}
            />
            <input
              type="text"
              placeholder="Correo"
              className="w-full mb-4 px-4 py-2 border rounded"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
            <input
              type="text"
              placeholder="Dirección"
              className="w-full mb-4 px-4 py-2 border rounded"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />

            <select
              value={selectedMunicipio}
              onChange={(e) => setSelectedMunicipio(e.target.value)}
              className="w-full mb-4 px-4 py-2 border rounded"
              disabled={!!editingCliente}
            >
              <option value="">Seleccione un Municipio</option>
              {municipios.map((muni) => (
                <option key={muni.pkid} value={muni.pkid}>
                  {muni.nombre}
                </option>
              ))}
            </select>            

            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
              >
                Cancelar
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600"
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
