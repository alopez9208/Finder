"use client";

import { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import { TbArrowsSort } from "react-icons/tb";

const fetchUsuarios = async (setUsuarios) => { // <-- Pasar setUsuarios como argumento
  try {
    const res = await fetch("/api/dashboard/user-data", { cache: "no-store" });
    const data = await res.json();

    if (data.success) {
      setUsuarios(data.usuarios);
    } else {
      console.error('No se encontraron usuarios');
    }
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
  }
};

export default function DashboardPage() {
  const [searchUser, setSearchUser] = useState("");
  const [searchName, setSearchName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const [usuarios, setUsuarios] = useState([]);
  const [roles, setRoles] = useState([]); // Estado para los roles
  const [estados, setEstados] = useState([]); // Estado para los estados

  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editingUser, setEditingUser] = useState(false);

  const [userData, setUserData] = useState({
    pkusuario: "",
    rol: "",
    estado: "",
    nombres: "",
    apellidos: "",
    correo: ""
  });

  useEffect(() => {
    // Llamar a fetchUsuarios dentro de useEffect
    fetchUsuarios(setUsuarios); // <-- Pasar setUsuarios
    const fetchRoles = async () => {
      try {
        const res = await fetch("/api/dashboard/user-data/roles");
        const data = await res.json();
        console.log("Roles obtenidos:", data.roles);
        setRoles(data.success ? data.roles : []);
      } catch (error) {
        console.error("Error al obtener roles:", error);
        setRoles([]);
      }
    };

    const fetchEstados = async () => {
      try {
        const res = await fetch("/api/dashboard/user-data/statuses");
        const data = await res.json();
        console.log("Estados obtenidos:", data.statuses);
        setEstados(data.success ? data.statuses : []);
      } catch (error) {
        console.error("Error al obtener estados:", error);
        setEstados([]);
      }
    };

    // Ejecuta las funciones de fetch
    fetchRoles();
    fetchEstados();
  }, []);


  const handleOpenModal = (usuario) => {
    console.log("Usuario en handleOpenModal:", usuario);
    setSelectedUser(usuario);
    setUserData({
      pkusuario: usuario.pkusuario,
      rol: usuario.rol?.pkid || null,
      estado: usuario.estado?.pkid || null,
      nombres: usuario.persona?.nombres,
      apellidos: usuario.persona?.apellidos,
      correo: usuario.persona?.correo
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingUser(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("handleChange:", { name, value });
    setUserData((prevState) => ({
      ...prevState,
      [name]: value, // No intentes convertir a Number() por ahora
    }));
  };

  const handleSaveChanges = async () => {
    try {
      const dataToSend = {
        pkusuario: userData.pkusuario,
        rol: Number(userData.rol),
        estado: Number(userData.estado),
        nombres: userData.nombres,
        apellidos: userData.apellidos,
        correo: userData.correo
      };
  
      console.log("Datos a enviar:", dataToSend);
  
      const res = await fetch(`/api/dashboard/user-data/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dataToSend)
      });

      if (!res.ok) {
        const errorDetails = await res.text();
        console.error("Error en la respuesta: ", res.status, errorDetails);
        return;
      }

      const contentType = res.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        const data = await res.json();
        if (data.success) {
          console.log("Usuario actualizado:", userData);
          setIsModalOpen(false);
          fetchUsuarios(setUsuarios); // <-- Llama a la función para recargar
        } else {
          console.error("Error al actualizar el usuario:", data.message);
        }
      } else {
        const errorText = await res.text();
        console.error("Error en la respuesta (no JSON):", errorText);
      }
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
    }
  };

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
        </div>

        {/* Tabla */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-gray-800">
            <thead className="bg-gray-100">
              <tr>
                {[{ key: "usuario", label: "Usuario" }, { key: "rol", label: "Rol" }, { key: "estado", label: "Estado" }, { key: "nombre", label: "Nombre" }, { key: "apellido", label: "Apellido" }, { key: "correo", label: "Correo" }].map(({ key, label }) => (
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
              {visibleUsuarios.map((usuario, index) => {
                console.log("Datos del usuario:", usuario); // Verifica los datos del usuario
                return (
                  <tr key={index} className="border-b">
                    <td className="p-3">{usuario.pkusuario}</td>
                    <td className="p-3">
                      {usuario.rol ? usuario.rol.nomenclatura : "No rol"} {/* Verifica si existe el rol */}
                    </td>
                    <td className="p-3">
                      {usuario.estado ? usuario.estado.nomenclatura : "No estado"} {/* Verifica si existe el estado */}
                    </td>
                    <td className="p-3">
                      {usuario.persona ? usuario.persona.nombres : "Sin nombre"} {/* Verifica si existe persona.nombres */}
                    </td>
                    <td className="p-3">
                      {usuario.persona ? usuario.persona.apellidos : "Sin apellidos"} {/* Verifica si existe persona.apellidos */}
                    </td>
                    <td className="p-3">
                      {usuario.persona ? usuario.persona.correo : "Sin correo"} {/* Verifica si existe persona.correo */}
                    </td>
                    <td className="p-3">
                      <button
                        className="bg-green-500 hover:bg-green-400 text-white px-3 py-2 rounded-lg inline-flex items-center space-x-2 cursor-pointer"
                        onClick={() => handleOpenModal(usuario)}
                      >
                        <FaEye />
                        <span>Ver</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
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
                className={`px-3 py-1 border rounded hover:bg-[#005AFE] hover:opacity-40 transition cursor-pointer ${currentPage === i + 1 ? 'bg-[#005AFE] text-white' : ''}`}
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

      {/* Modal */}
      {isModalOpen && selectedUser && (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#f0ebff] p-6 rounded-xl shadow-xl w-full max-w-md relative text-gray-700 border">
            <h3 className="text-xl font-semibold mb-4">Detalles del Usuario</h3>

            {/* Usuario (No editable) */}
            <div className="mb-4">
              <label className="block text-gray-700">Usuario:</label>
              <input
                type="text"
                className="w-full mb-4 px-4 py-2 border rounded focus:outline-none bg-white read-only:bg-[#f0ebff]"
                value={userData.pkusuario}
                readOnly
              />
            </div>

            {/* Selección de Rol */}
            <div className="mb-4">
              <label className="block text-gray-700">Rol:</label>
              <select
                name="rol"
                className="w-full p-2 mt-2 border rounded bg-white"
                value={userData.rol || ""} // Si `rol` es undefined, se asigna una cadena vacía para evitar problemas
                onChange={handleChange}
              >
                {roles && roles.length > 0 ? (
                  roles.map((role) => (
                    <option key={String(role.pkid)} value={String(role.pkid)}>
                      {role.nomenclatura}
                    </option>
                  ))
                ) : (
                  <option>Cargando roles...</option>
                )}
              </select>
            </div>

            {/* Selección de Estado */}
            <div className="mb-4">
              <label className="block text-gray-700">Estado:</label>
              <select
                name="estado"
                className="w-full p-2 mt-2 border rounded bg-white"
                value={userData.estado || ""} // Lo mismo aquí para el estado
                onChange={handleChange}
              >
                {estados && estados.length > 0 ? (
                  estados.map((estado) => (
                    <option key={String(estado.pkid)} value={String(estado.pkid)}>
                      {estado.nomenclatura}
                    </option>
                  ))
                ) : (
                  <option>Cargando estados...</option>
                )}
              </select>
            </div>



            {/* Nombres */}
            <div className="mb-4">
              <label className="block text-gray-700">Nombre:</label>
              <input
                type="text"
                className="w-full p-2 mt-2 border rounded bg-white"
                value={userData.nombres}
                onChange={handleChange}
                name="nombres"
              />
            </div>

            {/* Apellidos */}
            <div className="mb-4">
              <label className="block text-gray-700">Apellido:</label>
              <input
                type="text"
                className="w-full p-2 mt-2 border rounded bg-white"
                value={userData.apellidos}
                onChange={handleChange}
                name="apellidos"
              />
            </div>

            {/* Correo */}
            <div className="mb-4">
              <label className="block text-gray-700">Correo:</label>
              <input
                type="text"
                className="w-full p-2 mt-2 border rounded"
                value={userData.correo}
                onChange={handleChange}
                name="correo"
                readOnly={!editingUser}
              />
            </div>

            {/* Botones */}
            <div className="flex justify-end space-x-2">
              <button
                className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
                onClick={handleCloseModal}
              >
                Cerrar
              </button>

              <button
                className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
                onClick={handleSaveChanges}
              >
                Actualizar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
