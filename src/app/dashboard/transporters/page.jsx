"use client";

import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { TbArrowsSort } from "react-icons/tb";

export default function DashboardPage() {
  const [searchNombre, setSearchNombre] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [transporters, setTransporters] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const [modalOpen, setModalOpen] = useState(false);
  const [editingTransporter, setEditingTransporter] = useState(null);
  const [nombre, setNombre] = useState("");
  const [nomenclatura, setNomenclatura] = useState("");

  const transportersPerPage = 5;

  useEffect(() => {
    fetchTransporters();
  }, []);

  const fetchTransporters = async () => {
    try {
      const res = await fetch("/api/dashboard/transporters");
      const data = await res.json();
      if (data.success) {
        setTransporters(data.transportadoras);
      } else {
        console.error("No se encontraron transportadoras");
      }
    } catch (error) {
      console.error("Error al obtener transportadoras:", error);
    }
  };

  const openModalForNew = () => {
    setEditingTransporter(null);
    setNombre("");
    setNomenclatura("");
    setModalOpen(true);
  };

  const openModalForEdit = (transporter) => {
    setEditingTransporter(transporter);
    setNombre(transporter.nombre);
    setNomenclatura(transporter.nomenclatura);
    setModalOpen(true);
  };

  const handleSubmit = async () => {
    if (!nombre.trim() || !nomenclatura.trim()) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const method = editingTransporter ? "PUT" : "POST";
    const url = "/api/dashboard/transporters";

    const payload = editingTransporter
      ? { pkid: editingTransporter.pkid, nombre, nomenclatura }
      : { nombre, nomenclatura };

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        setModalOpen(false);
        fetchTransporters();
      } else {
        console.error("Error al guardar la transportadora");
      }
    } catch (error) {
      console.error("Error al enviar datos:", error);
    }
  };

  const filteredTransporters = transporters
    .filter((transporter) => {
      const nombre = transporter.nombre?.toString().toLowerCase() || '';  // Convierte el nombre a minúsculas
      const searchTerm = searchNombre.toLowerCase();  // Convierte el término de búsqueda a minúsculas
      return nombre.includes(searchTerm);  // Compara los dos valores en minúsculas
    })
    .sort((a, b) => {
      if (!sortConfig.key) return 0;
    
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];
    
      // Detectar si ambos valores son números
      const aNum = Number(aVal);
      const bNum = Number(bVal);
    
      if (!isNaN(aNum) && !isNaN(bNum)) {
        // Orden numérico
        return sortConfig.direction === "asc" ? aNum - bNum : bNum - aNum;
      }
    
      // Orden alfabético si no son números
      const aStr = aVal?.toString().toLowerCase() || '';
      const bStr = bVal?.toString().toLowerCase() || '';
    
      if (aStr < bStr) return sortConfig.direction === "asc" ? -1 : 1;
      if (aStr > bStr) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
    


  const totalPages = Math.ceil(filteredTransporters.length / transportersPerPage);
  const startIndex = (currentPage - 1) * transportersPerPage;
  const visibleTransporters = filteredTransporters.slice(startIndex, startIndex + transportersPerPage);

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const renderSortIcon = (key) => {
    if (sortConfig.key !== key) return <TbArrowsSort className="inline ml-1 text-gray-400" />;
    return sortConfig.direction === "asc" ? (
      <TbArrowsSort className="inline ml-1 text-blue-500 rotate-180" />
    ) : (
      <TbArrowsSort className="inline ml-1 text-blue-500 rotate-0" />
    );
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="m-12">
      <h2 className="text-2xl text-gray-800 mb-8">Lista de Transportadoras</h2>

      <div className="bg-white p-6 rounded-2xl">
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            className="w-full max-w-md pl-4 pr-4 py-2 border border-gray-300 rounded focus:outline-none text-gray-800"
            placeholder="Buscar por Nombre"
            value={searchNombre}
            onChange={(e) => setSearchNombre(e.target.value)}
          />
          <button
            onClick={openModalForNew}
            className="ml-4 flex items-center space-x-2 bg-[#3E82FF] text-white px-4 py-2 rounded hover:bg-[#005AFE] hover:opacity-40 transition cursor-pointer"
          >
            <FaPlus />
            <span>Nueva transportadora</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-gray-800">
            <thead className="bg-gray-100">
              <tr>
                {[{ key: "pkid", label: "ID" }, { key: "nombre", label: "Nombre" }, { key: "nomenclatura", label: "Nomenclatura" }].map(({ key, label }) => (
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
              {visibleTransporters.map((transporter, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3">{transporter.pkid}</td>
                  <td className="p-3">{transporter.nombre}</td>
                  <td className="p-3">{transporter.nomenclatura}</td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => openModalForEdit(transporter)}
                      className="bg-green-500 hover:bg-green-400 text-white px-3 py-2 rounded-lg inline-flex items-center space-x-2 cursor-pointer"
                    >
                      <FaEdit />
                      <span>Editar</span>
                    </button>
                  </td>
                </tr>
              ))}
              {visibleTransporters.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-4 text-center text-gray-500">
                    No se encontraron transportadoras.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div className="mt-4 flex justify-center items-center space-x-2 text-gray-400">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 border rounded hover:bg-[#005AFE] hover:opacity-40 transition cursor-pointer hover:text-white ${currentPage === i + 1 ? "bg-blue-500 text-white" : ""}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}

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
        )}f

      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#f0ebff] p-6 rounded-xl shadow-xl w-full max-w-md relative text-gray-700 border">
            <h3 className="text-xl font-semibold mb-4">
              {editingTransporter ? "Editar Transportadora" : "Nueva Transportadora"}
            </h3>
            <input
              type="text"
              placeholder="Nombre"
              className="w-full mb-4 px-4 py-2 border rounded focus:outline-none bg-white"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              readOnly={editingTransporter}
            />
            <input
              type="text"
              placeholder="Nomenclatura"
              className="w-full mb-4 px-4 py-2 border rounded focus:outline-none bg-white"
              value={nomenclatura}
              onChange={(e) => setNomenclatura(e.target.value)}
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
                className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
              >
                {editingTransporter ? "Actualizar" : "Crear"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
