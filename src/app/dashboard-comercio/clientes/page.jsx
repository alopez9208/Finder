"use client";
import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { TbArrowsSort } from "react-icons/tb";

export default function ClientesPage() {
  const [searchTelefono, setsearchTelefono] = useState("");  
  const [currentPage, setCurrentPage] = useState(1);
  const clientesPerPage = 5;
  const [clientes, setClientes] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [comercios, setComercios] = useState([]); // Estado para los departamentos
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });


  const [modalOpen, setModalOpen] = useState(false);
  const [editingCliente, setEditingCliente] = useState(null);
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [selectedMunicipio, setSelectedMunicipio] = useState(""); 
  const [selectedComercio, setSelectedComercio] = useState(""); 

  useEffect(() => {
    fetchClientes();
    fetchMunicipios();
    fetchComercios(); 
  }, []);

  const fetchClientes = async () => {
    try {
      const res = await fetch("/api/dashboard-comercio/clientes");
      const data = await res.json();
      if (data.success) {
        setClientes(data.clientes);
      } else {
        console.error("No se encontraron clientes");
      }
    } catch (error) {
      console.error("Error al obtener clientes:", error);
    }
  };

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
  } 

  const fetchComercios = async () => {
    try {
      const res = await fetch("/api/dashboard-comercio/comercios");
      const data = await res.json();
      if (data.success) {
        setComercios(data.comercios);
      } else {
        console.error("No se encontraron comercios");
      }
    } catch (error) {
      console.error("Error al obtener comercios:", error);
    }
  };

  const openModalForNew = () => {
    setEditingCliente(null);
    setTelefono("");
    setNombres("");
    setApellidos("");
    setCorreo("");    
    setDireccion("");
    setSelectedMunicipio(""); // Reiniciar el departamento seleccionado
    setSelectedComercio(""); // Reiniciar el departamento seleccionado
    setModalOpen(true);
  };

  const openModalForEdit = (cliente) => {
    setEditingCliente(cliente);
    setTelefono(cliente.telefono);
    setNombres(cliente.nombres);
    setApellidos(cliente.apellidos);
    setCorreo(cliente.correo);    
    setDireccion(cliente.direccion);
    setSelectedMunicipio(cliente.fkid_tbl_municipios); // Asignar el departamento del municipio
    setSelectedComercio(cliente.fkid_tbl_comercios); // Asignar el departamento del municipio
    setModalOpen(true);
  };

  const handleSubmit = async () => {
    if (!telefono.trim() || !nombres.trim() || !apellidos.trim() || !correo.trim() || !direccion.trim() || !selectedMunicipio || !selectedComercio) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const method = editingCliente ? "PUT" : "POST";
    const url = "/api/dashboard-comercio/clientes";

    const payload = editingCliente
      ? { pkid: editingCliente.pkid, telefono, nombres, apellidos, correo, direccion, fkid_tbl_municipios: selectedMunicipio, fkid_tbl_comercios: selectedComercio }
      : { telefono, nombres, apellidos, correo, direccion, fkid_tbl_municipios: selectedMunicipio, fkid_tbl_comercios: selectedComercio };

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        setModalOpen(false);
        fetchClientes();
      } else {
        console.error("Error al guardar el cliente");
      }
    } catch (error) {
      console.error("Error al enviar datos:", error);
    }
  };

  const filteredClientes = clientes
    .filter((cliente) => {
      const telefono = cliente.telefono?.toLowerCase() || '';      
      const matchTel = telefono.includes(searchTelefono.toLowerCase());     
      return matchTel;
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


  const totalPages = Math.ceil(filteredClientes.length / clientesPerPage);
  const startIndex = (currentPage - 1) * clientesPerPage;
  const visibleClientes = filteredClientes.slice(startIndex, startIndex + clientesPerPage);

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
      <h2 className="text-2xl text-gray-800 mb-8">Lista de Clientes</h2>

      <div className="bg-white p-6 rounded-2xl">
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            className="w-full max-w-md pl-4 pr-4 py-2 border border-gray-300 rounded focus:outline-none text-gray-800"
            placeholder="Buscar por Telefono"
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

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-gray-800">
            <thead className="bg-gray-100">
              <tr>
                {[{ key: "pkid", label: "ID" },{ key: "telefono", label: "Teléfono" }, { key: "nombres", label: "Nombres" }, { key: "apellidos", label: "Apellidos" }, { key: "correo", label: "Correo" },  { key: "direccion", label: "Direccion" }, { key: "nombre_municipio", label: "Municipio" }, { key: "nombre_comercio", label: "Comercio" }
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
              {visibleClientes.map((cliente, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3">{cliente.pkid}</td>
                  <td className="p-3">{cliente.telefono}</td>
                  <td className="p-3">{cliente.nombres}</td>
                  <td className="p-3">{cliente.apellidos}</td>
                  <td className="p-3">{cliente.correo}</td>                 
                  <td className="p-3">{cliente.direccion}</td>
                  <td className="p-3">{cliente.nombre_municipio}</td>
                  <td className="p-3">{cliente.nombre_comercio}</td>
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
              {editingCliente ? "Editar Cliente" : "Nuevo Cliente"}
            </h3>
            <input type="text"
              placeholder="Telefono"
              className="w-full mb-4 px-4 py-2 border rounded focus:outline-none bg-white"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />                     
            <input
              type="text"
              placeholder="Nombre"
              className="w-full mb-4 px-4 py-2 border rounded focus:outline-none bg-white read-only:bg-[#f0ebff]"
              value={nombres}
              onChange={(e) => setNombres(e.target.value)}
              readOnly={editingCliente}
            />
            <input
              type="text"
              placeholder="Apellidos"
              className="w-full mb-4 px-4 py-2 border rounded focus:outline-none bg-white"
              value={apellidos}
              onChange={(e) => setApellidos(e.target.value)}
            />
            <input type="text"
              placeholder="Correo"
              className="w-full mb-4 px-4 py-2 border rounded focus:outline-none bg-white"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
            <input type="text"
              placeholder="Direccion"
              className="w-full mb-4 px-4 py-2 border rounded focus:outline-none bg-white"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
            <select
              value={selectedMunicipio}
              onChange={(e) => setSelectedMunicipio(e.target.value)}
              className="w-full mb-4 px-4 py-2 border rounded focus:outline-none bg-white disabled:bg-[#f0ebff]"
              disabled={!!editingCliente}
            >
              <option value="">Seleccione un Municipio</option>
              {municipios.map((municipio) => (
                <option key={municipio.pkid} value={municipio.pkid}>
                  {municipio.nombre}
                </option>
              ))}
            </select>
            <select
              value={selectedComercio}
              onChange={(e) => setSelectedComercio(e.target.value)}
              className="w-full mb-4 px-4 py-2 border rounded focus:outline-none bg-white disabled:bg-[#f0ebff]"
              disabled={!!editingCliente}
            >
              <option value="">Seleccione un Comercio</option>
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
