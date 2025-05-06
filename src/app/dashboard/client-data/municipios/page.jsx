"use client";
import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { TbArrowsSort } from "react-icons/tb";

export default function MunicipiosPage() {
  const [searchNombre, setsearchNombre] = useState("");
  const [searchDepartamento, setSearchDepartamento] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const municipiosPerPage = 5;
  const [municipios, setMunicipios] = useState([]);
  const [departamentos, setDepartamentos] = useState([]); // Estado para los departamentos
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });


  const [modalOpen, setModalOpen] = useState(false);
  const [editingMunicipio, setEditingMunicipio] = useState(null);
  const [nombre, setNombre] = useState("");
  const [nomenclatura, setNomenclatura] = useState("");
  const [selectedDepartamento, setSelectedDepartamento] = useState(""); // Estado para el departamento seleccionado


  useEffect(() => {
    fetchMunicipios();
    fetchDepartamentos(); // Llamar a la función para obtener los departamentos
  }, []);

  const fetchMunicipios = async () => {
    try {
      const res = await fetch("/api/dashboard/municipios");
      const data = await res.json();
      if (data.success) {
        setMunicipios(data.municipios);
      } else {
        console.error("No se encontraron municipios");
      }
    } catch (error) {
      console.error("Error al obtener municipios:", error);
    }
  };

  const fetchDepartamentos = async () => {
    try {
      const res = await fetch("/api/dashboard/departamentos");
      const data = await res.json();
      if (data.success) {
        setDepartamentos(data.departamentos); // Guardar los departamentos en el estado
      } else {
        console.error("No se encontraron departamentos");
      }
    } catch (error) {
      console.error("Error al obtener departamentos:", error);
    }
  };

  const openModalForNew = () => {
    setEditingMunicipio(null);
    setNombre("");
    setNomenclatura("");
    setSelectedDepartamento(""); // Reiniciar el departamento seleccionado
    setModalOpen(true);
  };

  const openModalForEdit = (municipio) => {
    setEditingMunicipio(municipio);
    setNombre(municipio.nombre);
    setNomenclatura(municipio.nomenclatura);
    setSelectedDepartamento(municipio.fkid_tbl_departamentos); // Asignar el departamento del municipio
    setModalOpen(true);
  };

  const handleSubmit = async () => {
    if (!nombre.trim() || !nomenclatura.trim() || !selectedDepartamento) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const method = editingMunicipio ? "PUT" : "POST";
    const url = "/api/dashboard/municipios";

    const payload = editingMunicipio
      ? { pkid: editingMunicipio.pkid, nombre, nomenclatura, fkid_tbl_departamentos: selectedDepartamento }
      : { nombre, nomenclatura, fkid_tbl_departamentos: selectedDepartamento };

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        setModalOpen(false);
        fetchMunicipios();
      } else {
        console.error("Error al guardar el municipio");
      }
    } catch (error) {
      console.error("Error al enviar datos:", error);
    }
  };

  const filteredMunicipios = municipios
    .filter((municipio) => {
      const nomen = municipio.nombre?.toLowerCase() || '';
      const departamento = municipio.nombre_departamento?.toLowerCase() || '';
      const matchNomen = nomen.includes(searchNombre.toLowerCase());
      const matchDep = departamento.includes(searchDepartamento.toLowerCase());
      return matchNomen && matchDep;
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


  const totalPages = Math.ceil(filteredMunicipios.length / municipiosPerPage);
  const startIndex = (currentPage - 1) * municipiosPerPage;
  const visibleMunicipios = filteredMunicipios.slice(startIndex, startIndex + municipiosPerPage);

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
      <h2 className="text-2xl text-gray-800 mb-8">Lista de Municipios</h2>

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
            <span>Nuevo Municipio</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-gray-800">
            <thead className="bg-gray-100">
              <tr>
                {[{ key: "pkid", label: "ID" }, { key: "nombre", label: "Nombre" }, { key: "nomenclatura", label: "Nomenclatura" }, { key: "nombre_departamento", label: "Departamento" }
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
              {visibleMunicipios.map((municipio, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3">{municipio.pkid}</td>
                  <td className="p-3">{municipio.nombre}</td>
                  <td className="p-3">{municipio.nomenclatura}</td>
                  <td className="p-3">{municipio.nombre_departamento}</td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => openModalForEdit(municipio)}
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
          <div className="bg-[#f0ebff] p-6 rounded-xl shadow-xl w-full max-w-md relative text-gray-700 border">
            <h3 className="text-xl font-semibold mb-4">
              {editingMunicipio ? "Editar Municipio" : "Nuevo Municipio"}
            </h3>
            <input
              type="text"
              placeholder="Nombre"
              className="w-full mb-4 px-4 py-2 border rounded focus:outline-none bg-white read-only:bg-[#f0ebff]"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              readOnly={editingMunicipio}
            />
            <input
              type="text"
              placeholder="Nomenclatura"
              className="w-full mb-4 px-4 py-2 border rounded focus:outline-none bg-white"
              value={nomenclatura}
              onChange={(e) => setNomenclatura(e.target.value)}
            />
            <select
              value={selectedDepartamento}
              onChange={(e) => setSelectedDepartamento(e.target.value)}
              className="w-full mb-4 px-4 py-2 border rounded focus:outline-none bg-white disabled:bg-[#f0ebff]"
              disabled={!!editingMunicipio}
            >
              <option value="">Seleccione un Departamento</option>
              {departamentos.map((departamento) => (
                <option key={departamento.pkid} value={departamento.pkid}>
                  {departamento.nombre}
                </option>
              ))}
            </select>
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
