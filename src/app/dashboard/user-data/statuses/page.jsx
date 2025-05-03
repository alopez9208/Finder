"use client";

import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { TbArrowsSort } from "react-icons/tb";

export default function DashboardPage() {
  const [searchID, setSearchID] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [statuses, setStatuses] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const [modalOpen, setModalOpen] = useState(false);
  const [editingStatus, setEditingStatus] = useState(null);
  const [nombre, setNombre] = useState("");
  const [nomenclatura, setNomenclatura] = useState("");

  const statusesPerPage = 5;

  useEffect(() => {
    fetchStatuses();
  }, []);

  const fetchStatuses = async () => {
    try {
      const res = await fetch("/api/dashboard/user-data/statuses", { cache: "no-store" });
      const data = await res.json();
      if (data.success) {
        setStatuses(data.statuses);
      } else {
        console.error('No se encontraron estados');
      }
    } catch (error) {
      console.error('Error al obtener estados:', error);
    }
  };

  const openModalForNew = () => {
    setEditingStatus(null);
    setNombre("");
    setNomenclatura("");
    setModalOpen(true);
  };

  const openModalForEdit = (status) => {
    setEditingStatus(status);
    setNombre(status.nombre);
    setNomenclatura(status.nomenclatura);
    setModalOpen(true);
  };

  const handleSubmit = async () => {
    if (!nombre.trim() || !nomenclatura.trim()) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const method = editingStatus ? "PUT" : "POST";
    const url = "/api/dashboard/user-data/statuses";

    const payload = editingStatus
      ? { pkid: editingStatus.pkid, nombre, nomenclatura }
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
        fetchStatuses();
      } else {
        console.error("Error al guardar el estado");
      }
    } catch (error) {
      console.error("Error al enviar datos:", error);
    }
  };

  const filteredStatuses = statuses
    .filter((status) => {
      const nomen = status.nomenclatura?.toString() || '';
      return nomen.includes(searchID.toLowerCase());
    })
    .sort((a, b) => {
      if (!sortConfig.key) return 0;
      const aVal = a[sortConfig.key]?.toString().toLowerCase() || '';
      const bVal = b[sortConfig.key]?.toString().toLowerCase() || '';
      if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });

  const totalPages = Math.ceil(filteredStatuses.length / statusesPerPage);
  const startIndex = (currentPage - 1) * statusesPerPage;
  const visibleStatuses = filteredStatuses.slice(startIndex, startIndex + statusesPerPage);

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

  return (
    <div className="m-12">
      <h2 className="text-2xl text-gray-800 mb-8">Lista de Estados</h2>

      <div className="bg-white p-6 rounded-2xl">
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            className="w-full max-w-md pl-4 pr-4 py-2 border border-gray-300 rounded focus:outline-none text-gray-800"
            placeholder="Buscar por Nomenclatura"
            value={searchID}
            onChange={(e) => setSearchID(e.target.value)}
          />
          <button
            onClick={openModalForNew}
            className="ml-4 flex items-center space-x-2 bg-[#3E82FF] text-white px-4 py-2 rounded hover:bg-[#005AFE] hover:opacity-40 transition cursor-pointer"
          >
            <FaPlus />
            <span>Nuevo Estado</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-gray-800">
            <thead className="bg-gray-100">
              <tr>
                {[
                  { key: "pkid", label: "ID" },
                  { key: "nombre", label: "Nombre" },
                  { key: "nomenclatura", label: "Nomenclatura" },
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
              {visibleStatuses.map((status, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3">{status.pkid}</td>
                  <td className="p-3">{status.nombre}</td>
                  <td className="p-3">{status.nomenclatura}</td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => openModalForEdit(status)}
                      className="bg-green-500 hover:bg-green-400 text-white px-3 py-2 rounded-lg inline-flex items-center space-x-2 cursor-pointer"
                    >
                      <FaEdit />
                      <span>Editar</span>
                    </button>
                  </td>
                </tr>
              ))}
              {visibleStatuses.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-4 text-center text-gray-500">
                    No se encontraron estados.
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
                className={`px-3 py-1 border rounded hover:bg-[#005AFE] hover:opacity-40 transition cursor-pointer hover:text-white ${currentPage === i + 1 ? "bg-blue-500 text-white" : ""
                  }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#f0ebff] p-6 rounded-xl shadow-xl w-full max-w-md relative text-gray-700 border">
            <h3 className="text-xl font-semibold mb-4">
              {editingStatus ? "Editar Estado" : "Nuevo Estado"}
            </h3>
            <input
              type="text"
              placeholder="Nombre"
              className="w-full mb-4 px-4 py-2 border rounded focus:outline-none bg-white"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              readOnly={editingStatus}  
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
                {editingStatus ? "Actualizar" : "Crear"}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
