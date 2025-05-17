"use client";
import { useState, useEffect, useRef } from "react";
import { FaEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { TbArrowsSort } from "react-icons/tb";

export default function CampaniasPage() {
  const [searchNombre, setsearchNombre] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const campaniasPerPage = 5;
  const [campanias, setcampanias] = useState([]);
  const [comercios, setcomercios] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const [modalOpen, setModalOpen] = useState(false);
  const [editingcampania, setEditingcampania] = useState(null);
  const [nombre, setNombre] = useState("");
  const [presupuesto_gastado, setPresupuesto_gastado] = useState("");
  const [fecha_inicio, setFecha_inicio] = useState("");
  const [fecha_fin, setFecha_fin] = useState("");
  const [selectedcomercio, setSelectedcomercio] = useState("");

  useEffect(() => {
    fetchcampanias();
    fetchcomercios();
    const handleEsc = (e) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    if (modalOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => window.removeEventListener("keydown", handleEsc);
  }, [modalOpen]);

  const modalRef = useRef();

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setModalOpen(false);
    }
  };

  useEffect(() => {
    if (modalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalOpen]);


  const fetchcampanias = async () => {
    try {
      const res = await fetch("/api/dashboard-comercio/campanias");
      const data = await res.json();
      if (data.success) {
        setcampanias(data.campanias);
      } else {
        console.error("No se encontraron campanias:", data.error);
      }
    } catch (error) {
      console.error("Error al obtener campanias:", error);
    }
  };

  const fetchcomercios = async () => {
    try {
      const res = await fetch("/api/dashboard-comercio/comercios");
      const data = await res.json();
      if (data.success) {
        setcomercios(data.comercios);
      } else {
        console.error("No se encontraron comercios:", data.error);
      }
    } catch (error) {
      console.error("Error al obtener comercios:", error);
    }
  };

  const openModalForNew = () => {
    setEditingcampania(null);
    setNombre("");
    setPresupuesto_gastado("");
    setFecha_inicio("");
    setFecha_fin("");
    setSelectedcomercio("");
    setModalOpen(true);
  };

  const formatDateForInput = (isoString) => {
    if (!isoString) return "";
    const date = new Date(isoString);
    // Obtiene la fecha en formato YYYY-MM-DD en tu zona horaria local
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const openModalForEdit = (campania) => {
    setEditingcampania(campania);
    setNombre(campania.nombre);
    setPresupuesto_gastado(campania.presupuesto_gastado);
    setFecha_inicio(formatDateForInput(campania.fecha_inicio));
    setFecha_fin(formatDateForInput(campania.fecha_fin));
    setSelectedcomercio(campania.fkid_tbl_comercios);
    setModalOpen(true);
  };


  const formatFecha = (isoString) => {
    if (!isoString) return "";
    const date = new Date(isoString);
    const year = date.getFullYear().toString().slice();
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const parseDate = (dateValue, isStart = true) => {
    if (!dateValue) return null;

    // Si ya es objeto Date
    if (dateValue instanceof Date) {
      return dateValue.toISOString();
    }

    // Si es string ISO completo (fecha + hora)
    if (dateValue.includes("T")) {
      return new Date(dateValue).toISOString();
    }

    // Si es string 'YYYY-MM-DD', agrega hora según sea inicio o fin del día
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateValue)) {
      return new Date(`${dateValue}T${isStart ? "00:00:00" : "23:59:59"}-05:00`).toISOString();
    }

    // Si no cumple, devuelve null o error
    return null;
  };


  const handleSubmit = async () => {

    if (!nombre.trim() || !presupuesto_gastado || !fecha_inicio.trim() || !fecha_fin.trim() || !selectedcomercio) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    const localFechaInicio = parseDate(fecha_inicio, false);
    const localFechaFin = parseDate(fecha_fin, false);

    if (!localFechaInicio || !localFechaFin) {
      alert("Formato de fecha inválido.");
      return;
    }

    const method = editingcampania ? "PUT" : "POST";
    const url = "/api/dashboard-comercio/campanias";

    const payload = {
      nombre,
      presupuesto_gastado: parseFloat(presupuesto_gastado),
      fecha_inicio: localFechaInicio,
      fecha_fin: localFechaFin,
      fkid_tbl_comercios: parseInt(selectedcomercio),
    };
    if (editingcampania) {
      payload.pkid = parseInt(editingcampania.pkid);
    }

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        setModalOpen(false);
        fetchcampanias();
      } else {
        console.error("Error al guardar la campaña (Respuesta API):", data.error);
        alert(`Error al guardar la campaña: ${data.error || 'Error desconocido del servidor.'}`);
      }
    } catch (error) {
      console.error("Error al enviar datos (Catch del Frontend):", error);
      alert("Error al enviar datos: " + error.message);
    }
  };

  const filteredcampanias = campanias

    .filter((campania) => {
      const nomen = campania.nombre?.toLowerCase() || '';
      const matchNomen = nomen.includes(searchNombre.toLowerCase());
      return matchNomen;
    })

    .sort((a, b) => {
      if (!sortConfig.key) return 0;

      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];

      const aNum = Number(aVal);
      const bNum = Number(bVal);

      if (!isNaN(aNum) && !isNaN(bNum)) {
        return sortConfig.direction === "asc" ? aNum - bNum : bNum - aNum;
      }

      const aStr = aVal?.toString().toLowerCase() || '';
      const bStr = bVal?.toString().toLowerCase() || '';

      if (aStr < bStr) return sortConfig.direction === "asc" ? -1 : 1;
      if (aStr > bStr) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });

  const totalPages = Math.ceil(filteredcampanias.length / campaniasPerPage);
  const startIndex = (currentPage - 1) * campaniasPerPage;
  const visiblecampanias = filteredcampanias.slice(startIndex, startIndex + campaniasPerPage);

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
                {[{ key: "pkid", label: "ID" }, { key: "nombre", label: "Nombre" }, { key: "presupuesto_gastado", label: "Presupuesto gastado" }, { key: "fecha_inicio", label: "Fecha inicio" }, { key: "fecha_fin", label: "Fecha fin" }, { key: "nombre_comercio", label: "Comercio" }
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
                    <td className="p-3">{campania.nombre_comercio}</td>
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
              readOnly={editingcampania}
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
            <select
              value={selectedcomercio}
              onChange={(e) => setSelectedcomercio(e.target.value)}
              className="w-full mb-4 px-4 py-2 border rounded focus:outline-none bg-white disabled:bg-[#f0ebff]"
              disabled={!!editingcampania}
            >
              <option value="">Seleccione un comercio</option>
              {comercios.map((comercio) => (
                <option key={comercio.pkid} value={comercio.pkid}>
                  {comercio.nombre}
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