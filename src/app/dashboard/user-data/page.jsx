"use client";

import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { TbArrowsSort } from "react-icons/tb";

export default function DashboardPage() {
  const [searchUser, setSearchUser] = useState("");
  const [searchName, setSearchName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const [usuarios, setUsuarios] = useState([
    {
      usuario: "user3",
      rol: "Supervisor",
      estado: "Activo",
      nombre: "Luis",
      apellido: "Gómez",
      correo: "luis@example.com",
    },
    {
      usuario: "user4",
      rol: "Admin",
      estado: "Activo",
      nombre: "Marta",
      apellido: "Pérez",
      correo: "marta@example.com",
    },
    {
      usuario: "user5",
      rol: "Vigilante",
      estado: "Inactivo",
      nombre: "José",
      apellido: "Rodríguez",
      correo: "jose@example.com",
    },   
    {
      usuario: "user2",
      rol: "Vigilante",
      estado: "Inactivo",
      nombre: "Ana",
      apellido: "Martínez",
      correo: "ana@example.com",
    },
    {
      usuario: "user3",
      rol: "Supervisor",
      estado: "Activo",
      nombre: "Luis",
      apellido: "Gómez",
      correo: "luis@example.com",
    },
    {
      usuario: "user4",
      rol: "Admin",
      estado: "Activo",
      nombre: "Marta",
      apellido: "Pérez",
      correo: "marta@example.com",
    },
    {
      usuario: "user5",
      rol: "Vigilante",
      estado: "Inactivo",
      nombre: "José",
      apellido: "Rodríguez",
      correo: "jose@example.com",
    },
    {
      usuario: "user1",
      rol: "Admin",
      estado: "Activo",
      nombre: "Carlos",
      apellido: "Sánchez",
      correo: "carlos@example.com",
    },
    {
      usuario: "user2",
      rol: "Vigilante",
      estado: "Inactivo",
      nombre: "Ana",
      apellido: "Martínez",
      correo: "ana@example.com",
    },
    {
      usuario: "user4",
      rol: "Admin",
      estado: "Activo",
      nombre: "Marta",
      apellido: "Pérez",
      correo: "marta@example.com",
    },
    {
      usuario: "user5",
      rol: "Vigilante",
      estado: "Inactivo",
      nombre: "José",
      apellido: "Rodríguez",
      correo: "jose@example.com",
    },
  ]);

  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const filteredUsuarios = usuarios
    .filter(
      (usuario) =>
        usuario.usuario.toLowerCase().includes(searchUser.toLowerCase()) &&
        usuario.nombre.toLowerCase().includes(searchName.toLowerCase())
    )
    .sort((a, b) => {
      if (!sortConfig.key) return 0;
      const aValue = a[sortConfig.key].toLowerCase();
      const bValue = b[sortConfig.key].toLowerCase();
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
      <TbArrowsSort className="inline ml-1 text-blue-500" />
    ) : (
      <TbArrowsSort className="inline ml-1 text-blue-500" />
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
                  <td className="p-3">{usuario.usuario}</td>
                  <td className="p-3">{usuario.rol}</td>
                  <td className="p-3">{usuario.estado}</td>
                  <td className="p-3">{usuario.nombre}</td>
                  <td className="p-3">{usuario.apellido}</td>
                  <td className="p-3">{usuario.correo}</td>
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
