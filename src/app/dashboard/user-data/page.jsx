"use client";

import { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import { TbArrowsSort } from "react-icons/tb";

export default function DashboardPage() {
  const [searchUser, setSearchUser] = useState("");
  const [searchName, setSearchName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  const [usuarios, setUsuarios] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const res = await fetch("/api/dashboard/user-data", { cache: "no-store" });
        const data = await res.json();

        console.log("Datos recibidos:", data); 

        if (data.success) {
          setUsuarios(data.usuarios); 
          console.log("Usuarios:", data.usuarios);
        } else {
          console.error('No se encontraron usuarios');
        }
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      }
    };

    fetchUsuarios();
  }, []);


  const filteredUsuarios = usuarios
    .filter((usuario) => {
      const username = usuario.pkusuario ? usuario.pkusuario.toLowerCase() : '';
      const name = usuario.persona?.nombres ? usuario.persona.nombres.toLowerCase() : '';

      return (
        username.includes(searchUser.toLowerCase()) &&
        name.includes(searchName.toLowerCase())
      );
    })
    .sort((a, b) => {
      if (!sortConfig.key) return 0;

      let aValue = '';
      let bValue = '';

      switch (sortConfig.key) {
        case 'usuario':
          aValue = a.pkusuario ? a.pkusuario.toLowerCase() : '';
          bValue = b.pkusuario ? b.pkusuario.toLowerCase() : '';
          break;
        case 'rol':
          aValue = a.rol?.nomenclatura ? a.rol.nomenclatura.toLowerCase() : '';
          bValue = b.rol?.nomenclatura ? b.rol.nomenclatura.toLowerCase() : '';
          break;
        case 'estado':
          aValue = a.estado?.nomenclatura ? a.estado.nomenclatura.toLowerCase() : '';
          bValue = b.estado?.nomenclatura ? b.estado.nomenclatura.toLowerCase() : '';
          break;
        case 'nombre':
          aValue = a.persona?.nombres ? a.persona.nombres.toLowerCase() : '';
          bValue = b.persona?.nombres ? b.persona.nombres.toLowerCase() : '';
          break;
        case 'apellido':
          aValue = a.persona?.apellidos ? a.persona.apellidos.toLowerCase() : '';
          bValue = b.persona?.apellidos ? b.persona.apellidos.toLowerCase() : '';
          break;
        case 'correo':
          aValue = a.persona?.correo ? a.persona.correo.toLowerCase() : '';
          bValue = b.persona?.correo ? b.persona.correo.toLowerCase() : '';
          break;
        default:
          break;
      }

      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });

  const totalPages = Math.ceil(filteredUsuarios.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const visibleUsuarios = filteredUsuarios.slice(startIndex, startIndex + usersPerPage);


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
    <div className="mb-32 ml-16">
      <h2 className="text-2xl text-gray-800 mb-8">Lista de Usuarios</h2>

      {/* Buscadores */}
      <div className="bg-white p-6 rounded-2xl">
        <div className="mb-4 flex space-x-4">
          <div className="relative mb-4">
            <input
              type="text"
              className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded focus:outline-none placeholder: text-gray-800"
              placeholder="Buscar por Usuario"
              value={searchUser}
              onChange={(e) => setSearchUser(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <input
              type="text"
              className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded focus:outline-none placeholder: text-gray-800"
              placeholder="Buscar por Nombre"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
          </div>
          <button className="w-20 h-full bg-[#3E82FF] text-white py-2 rounded hover:bg-[#005AFE] hover:opacity-40 transition cursor-pointer">
            <span>Buscar</span>
          </button>
        </div>

        {/* Tabla */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-gray-800">
            <thead className="bg-gray-100">
              <tr>
                {[
                  { key: "usuario", label: "Usuario" },
                  { key: "rol", label: "Rol" },
                  { key: "estado", label: "Estado" },
                  { key: "nombre", label: "Nombre" },
                  { key: "apellido", label: "Apellido" },
                  { key: "correo", label: "Correo" },
                ].map(({ key, label }) => (
                  <th
                    key={key}
                    className="p-3 text-left cursor-pointer select-none"
                    onClick={() => handleSort(key)}
                  >
                    {label} {renderSortIcon(key)}
                  </th>
                ))}
                <th className="p-3 text-left">Acción</th>
              </tr>
            </thead>
            <tbody>
              {visibleUsuarios.map((usuario, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3">{usuario.pkusuario}</td>
                  <td className="p-3">{usuario.rol.nomenclatura}</td>
                  <td className="p-3">{usuario.estado.nomenclatura}</td>
                  <td className="p-3">{usuario.persona.nombres}</td>
                  <td className="p-3">{usuario.persona.apellidos}</td>
                  <td className="p-3">{usuario.persona.correo}</td>
                  <td className="p-3">
                    <button className="bg-green-500 text-white p-2 rounded-lg flex items-center space-x-2">
                      <FaEye />
                      <span>Ver</span>
                    </button>
                  </td>
                </tr>
              ))}
              {visibleUsuarios.length === 0 && (
                <tr>
                  <td colSpan={7} className="p-4 text-center text-gray-500">
                    No se encontraron usuarios.
                  </td>
                </tr>
              )}
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
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={`px-3 py-1 border rounded hover:bg-[#005AFE] hover:opacity-40 transition cursor-pointer hover:text-white ${currentPage === i + 1 ? "bg-blue-500 text-white" : ""
                  }`}
              >
                {i + 1}
              </button>
            ))}
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
    </div>
  );
}
